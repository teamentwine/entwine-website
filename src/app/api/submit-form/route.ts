import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 300;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_RESUME_BYTES = 4 * 1024 * 1024; // stay under Vercel's request body limit
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

// Best-effort in-memory rate limit. This only holds for the lifetime of a
// single warm serverless instance, so it will not catch a distributed abuser
// — it just stops a single client from hammering the endpoint. For real
// protection, put this behind Vercel's Firewall / a durable store like
// Upstash Redis.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(key, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function clientIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

function trimmed(value: unknown, max = MAX_FIELD_LENGTH): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isAllowedOrigin(req: NextRequest): boolean {
  const allowList = process.env.CONTACT_FORM_ALLOWED_ORIGINS;
  if (!allowList) return true; // opt-in check; skip if not configured

  const allowed = allowList.split(",").map((o) => o.trim());
  const origin = req.headers.get("origin") ?? req.headers.get("referer");
  if (!origin) return false;

  return allowed.some((a) => origin.startsWith(a));
}

function getMailer() {
  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });
}

// Confirmation emails are a nice-to-have on top of the primary record (the
// Jira issue). If Gmail isn't configured or the send fails, we log it and
// still return success to the caller.
async function sendConfirmationEmail(
  to: string,
  firstName: string,
  subject: string,
  intro: string
) {
  const transporter = getMailer();
  if (!transporter) {
    console.warn("submit-form: GMAIL_USER/GMAIL_APP_PASSWORD not set, skipping confirmation email");
    return;
  }

  const fromName = process.env.EMAIL_FROM_NAME || "Entwine";
  const { GMAIL_USER } = process.env;

  await transporter.sendMail({
    from: `"${fromName}" <${GMAIL_USER}>`,
    to,
    subject,
    text: `Hi ${firstName},\n\n${intro}\n\n— The Entwine Team`,
    html: `<p>Hi ${firstName},</p><p>${intro}</p><p>— The Entwine Team</p>`,
  });
}

class NotConfiguredError extends Error {}
class UpstreamError extends Error {}

function getJiraCreds() {
  const { JIRA_BASE_URL, JIRA_EMAIL, JIRA_API_TOKEN } = process.env;
  if (!JIRA_BASE_URL || !JIRA_EMAIL || !JIRA_API_TOKEN) return null;
  return { JIRA_BASE_URL, JIRA_EMAIL, JIRA_API_TOKEN };
}

function jiraAuthHeader(creds: { JIRA_EMAIL: string; JIRA_API_TOKEN: string }) {
  return `Basic ${Buffer.from(`${creds.JIRA_EMAIL}:${creds.JIRA_API_TOKEN}`).toString("base64")}`;
}

async function createJiraIssue(params: {
  projectKey: string;
  issueType: string;
  summary: string;
  descriptionAdf: object;
}): Promise<string> {
  const creds = getJiraCreds();
  if (!creds) {
    console.error("submit-form: missing Jira environment variables");
    throw new NotConfiguredError();
  }

  const jiraRes = await fetch(`${creds.JIRA_BASE_URL}/rest/api/3/issue`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: jiraAuthHeader(creds),
    },
    body: JSON.stringify({
      fields: {
        project: { key: params.projectKey },
        summary: params.summary,
        description: params.descriptionAdf,
        issuetype: { name: params.issueType },
      },
    }),
  });

  if (!jiraRes.ok) {
    const errorBody = await jiraRes.text();
    console.error("submit-form: Jira API error", jiraRes.status, errorBody);
    throw new UpstreamError();
  }

  const jiraData = await jiraRes.json();
  return jiraData.key as string;
}

// Best-effort: the issue already exists by the time this runs, so a failed
// attachment upload is logged rather than failing the whole submission.
async function attachResumeToJiraIssue(issueKey: string, resume: File) {
  const creds = getJiraCreds();
  if (!creds) return;

  const formData = new FormData();
  formData.append("file", resume, resume.name);

  const res = await fetch(`${creds.JIRA_BASE_URL}/rest/api/3/issue/${issueKey}/attachments`, {
    method: "POST",
    headers: {
      Authorization: jiraAuthHeader(creds),
      "X-Atlassian-Token": "no-check",
    },
    body: formData,
  });

  if (!res.ok) {
    const errorBody = await res.text();
    console.error("submit-form: Jira attachment upload failed", res.status, errorBody);
  }
}

async function createWaitlistJiraIssue(fields: {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  organization: string;
  aboutOrg: string;
}) {
  const projectKey = process.env.JIRA_PROJECT_KEY;
  if (!projectKey) {
    console.error("submit-form: missing JIRA_PROJECT_KEY");
    throw new NotConfiguredError();
  }

  const fullName = `${fields.firstName} ${fields.lastName}`.trim();
  const summary = `[Waitlist] ${fullName}`.slice(0, 255);
  const detailLines: [string, string][] = [
    ["Name", fullName],
    ["Email", fields.email],
    ...(fields.organization ? ([["Organization", fields.organization]] as [string, string][]) : []),
    ...(fields.linkedin ? ([["LinkedIn", fields.linkedin]] as [string, string][]) : []),
  ];

  const descriptionAdf = {
    type: "doc",
    version: 1,
    content: [
      ...detailLines.map(([label, value]) => ({
        type: "paragraph",
        content: [
          { type: "text", text: `${label}: `, marks: [{ type: "strong" }] },
          { type: "text", text: value },
        ],
      })),
      ...(fields.aboutOrg
        ? [
            {
              type: "paragraph",
              content: [{ type: "text", text: "About the organization:", marks: [{ type: "strong" }] }],
            },
            {
              type: "paragraph",
              content: [{ type: "text", text: fields.aboutOrg }],
            },
          ]
        : []),
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: `Submitted via Waitlist form on ${new Date().toISOString()}`,
            marks: [{ type: "em" }],
          },
        ],
      },
    ],
  };

  return createJiraIssue({
    projectKey,
    issueType: process.env.JIRA_ISSUE_TYPE || "Task",
    summary,
    descriptionAdf,
  });
}

async function createVolunteerJiraIssue(fields: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  resume: File | null;
}) {
  const projectKey = process.env.VOLUNTEER_JIRA_PROJECT_KEY;
  if (!projectKey) {
    console.error("submit-form: missing VOLUNTEER_JIRA_PROJECT_KEY");
    throw new NotConfiguredError();
  }

  const fullName = `${fields.firstName} ${fields.lastName}`.trim();
  const summary = `[Volunteer] ${fullName}`.slice(0, 255);
  const detailLines: [string, string][] = [
    ["Name", fullName],
    ["Email", fields.email],
    ...(fields.phone ? ([["Phone", fields.phone]] as [string, string][]) : []),
  ];

  const descriptionAdf = {
    type: "doc",
    version: 1,
    content: [
      ...detailLines.map(([label, value]) => ({
        type: "paragraph",
        content: [
          { type: "text", text: `${label}: `, marks: [{ type: "strong" }] },
          { type: "text", text: value },
        ],
      })),
      {
        type: "paragraph",
        content: [
          { type: "text", text: "What they're interested in doing:", marks: [{ type: "strong" }] },
        ],
      },
      {
        type: "paragraph",
        content: [{ type: "text", text: fields.message }],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: `Submitted via Volunteer form on ${new Date().toISOString()}`,
            marks: [{ type: "em" }],
          },
        ],
      },
    ],
  };

  const issueKey = await createJiraIssue({
    projectKey,
    issueType: process.env.VOLUNTEER_JIRA_ISSUE_TYPE || "Applicant",
    summary,
    descriptionAdf,
  });

  if (fields.resume) {
    await attachResumeToJiraIssue(issueKey, fields.resume);
  }

  return issueKey;
}

async function parseRequestBody(req: NextRequest): Promise<{
  fields: Record<string, string>;
  resume: File | null;
}> {
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("multipart/form-data")) {
    const form = await req.formData();
    const fields: Record<string, string> = {};
    let resume: File | null = null;

    for (const [key, value] of form.entries()) {
      if (value instanceof File) {
        if (key === "resume" && value.size > 0) resume = value;
      } else {
        fields[key] = value;
      }
    }

    return { fields, resume };
  }

  const json = await req.json();
  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(json)) {
    if (typeof value === "string") fields[key] = value;
  }
  return { fields, resume: null };
}

export async function POST(req: NextRequest) {
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (isRateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let fields: Record<string, string>;
  let resume: File | null;
  try {
    ({ fields, resume } = await parseRequestBody(req));
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: a hidden field real users never fill in. Bots that
  // autofill every input trip it. Pretend success so they move on.
  if (trimmed(fields.company) !== "") {
    return NextResponse.json({ success: true });
  }

  const formType = fields.formType === "volunteer" ? "volunteer" : "waitlist";

  const firstName = trimmed(fields.firstName);
  const lastName = trimmed(fields.lastName);
  const email = trimmed(fields.email);
  const phone = trimmed(fields.phone);
  const organization = trimmed(fields.organization);
  const linkedin = trimmed(fields.linkedin);
  const aboutOrg = trimmed(fields.aboutOrg, MAX_MESSAGE_LENGTH);
  const message = trimmed(fields.message, MAX_MESSAGE_LENGTH);

  const errors: string[] = [];
  if (!firstName) errors.push("First name is required.");
  if (!lastName) errors.push("Last name is required.");
  if (!email) errors.push("Email is required.");
  else if (!EMAIL_REGEX.test(email)) errors.push("Email is not a valid format.");
  if (formType === "volunteer" && !message) {
    errors.push("Please tell us what you're interested in doing.");
  }
  if (resume) {
    if (!ALLOWED_RESUME_TYPES.has(resume.type)) {
      errors.push("Resume must be a PDF or Word document.");
    } else if (resume.size > MAX_RESUME_BYTES) {
      errors.push("Resume must be under 4MB.");
    }
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  try {
    if (formType === "waitlist") {
      const issueKey = await createWaitlistJiraIssue({ firstName, lastName, email, organization, linkedin, aboutOrg });
      try {
        await sendConfirmationEmail(
          email,
          firstName,
          "We got your waitlist submission",
          "Thanks for your interest in Entwine! We've added you to our waitlist and will be in touch soon."
        );
      } catch (err) {
        console.error("submit-form: confirmation email failed", err);
      }
      return NextResponse.json({ success: true, issueKey });
    }

    const issueKey = await createVolunteerJiraIssue({ firstName, lastName, email, phone, message, resume });
    try {
      await sendConfirmationEmail(
        email,
        firstName,
        "We got your volunteer application",
        "Thanks for applying to volunteer with Entwine! We've received your application and will reach out soon."
      );
    } catch (err) {
      console.error("submit-form: confirmation email failed", err);
    }
    return NextResponse.json({ success: true, issueKey });
  } catch (err) {
    if (err instanceof NotConfiguredError) {
      return NextResponse.json(
        { error: "Server is not configured correctly. Please try again later." },
        { status: 500 }
      );
    }
    if (err instanceof UpstreamError) {
      return NextResponse.json(
        { error: "Could not submit your request right now. Please try again later." },
        { status: 502 }
      );
    }
    console.error("submit-form: unexpected error", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
