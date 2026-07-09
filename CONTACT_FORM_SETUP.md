# Contact form integrations

The waitlist (`/waitlist`) and volunteer (`/volunteer`) forms both POST to
[`src/app/api/submit-form/route.ts`](src/app/api/submit-form/route.ts), and
both create a Jira issue as the system of record, in different projects:

- **Waitlist** → creates a `Lead` issue in the `WAIT` project (Atlassian's
  Lead Tracking template), then sends the applicant a best-effort
  confirmation email.
- **Volunteer** → creates an `Applicant` issue in the `LT` (Logistics Team)
  project, with the resume attached directly to the issue if one was
  uploaded, then sends the applicant a best-effort confirmation email.

This doc covers the environment variables both paths need and where to get
each value.

## 1. Get a Jira API token

1. Log in to the Atlassian account that should own the created issues.
2. Go to https://id.atlassian.com/manage-profile/security/api-tokens.
3. Click **Create API token**, give it a label (e.g. `entwine-website-contact-form`),
   and copy the token immediately — Atlassian only shows it once.

This token, together with that account's email address, is what
`JIRA_EMAIL` / `JIRA_API_TOKEN` authenticate as. Both forms share these same
credentials — only the project key/issue type differ per form.

## 2. Find your Jira base URL and project keys

- **Base URL**: the part of your Jira URL before `/jira/...`, e.g.
  `https://your-domain.atlassian.net`.
- **Project key**: open the target project/space in Jira and look at any
  issue's ID (e.g. `WAIT-3` → the key is `WAIT`), or check **Space settings
  → Details**.

## 3. Get a Google Workspace app password

Gmail/Workspace SMTP requires an **app password**, not your normal login
password — this only works if 2-Step Verification is enabled on the sending
account.

1. Decide which mailbox should send mail (e.g. `contact@projectentwine.org`).
   Log in as that account.
2. If 2-Step Verification isn't already on, enable it at
   https://myaccount.google.com/security.
3. Go to https://myaccount.google.com/apppasswords, create an app password
   (name it e.g. `entwine-website-contact-form`), and copy the 16-character
   password shown — it's shown only once.
4. `GMAIL_USER` is that mailbox's full email address; `GMAIL_APP_PASSWORD`
   is the 16-character password from step 3, with spaces removed.

If your Workspace admin has disabled app passwords org-wide, the
alternative is enabling **SMTP relay** under Admin Console → Apps → Google
Workspace → Gmail → Routing, then authenticating with that mailbox's normal
credentials instead — ask your admin if step 3 doesn't work.

This is **best-effort only** for both forms now — the Jira issue is the
real record either way, so a missing/broken Gmail config just means the
applicant doesn't get a "we got it" email; the submission still succeeds.

## 4. Environment variables

Set these in **Vercel dashboard → Project → Settings → Environment
Variables** (add them to Production, Preview, and Development), and copy
[`.env.example`](.env.example) to `.env.local` for local development.

| Variable | Required | Description |
|---|---|---|
| `JIRA_BASE_URL` | yes | Your Atlassian site URL, e.g. `https://your-domain.atlassian.net` |
| `JIRA_EMAIL` | yes | Email of the Atlassian account that owns the API token |
| `JIRA_API_TOKEN` | yes | API token created in step 1 |
| `JIRA_PROJECT_KEY` | yes | Waitlist's project key (currently `WAIT`) |
| `JIRA_ISSUE_TYPE` | no | Waitlist's issue type (default `Task`; currently `Lead` for `WAIT`) |
| `VOLUNTEER_JIRA_PROJECT_KEY` | yes | Volunteer's project key (currently `LT`) |
| `VOLUNTEER_JIRA_ISSUE_TYPE` | no | Volunteer's issue type (default `Task`; currently `Applicant` for `LT`) |
| `GMAIL_USER` | no* | Mailbox that sends confirmation emails, e.g. `contact@projectentwine.org` |
| `GMAIL_APP_PASSWORD` | no* | App password from step 3 |
| `EMAIL_FROM_NAME` | no | Display name on outgoing emails (default `Entwine`) |
| `CONTACT_FORM_ALLOWED_ORIGINS` | no | Comma-separated list of origins allowed to submit (e.g. `https://projectentwine.org`). Leave unset to skip the check. |

\* Optional — if unset, the Jira issue is still created and the route just
logs a warning and skips the confirmation email.

`JIRA_API_TOKEN` and `GMAIL_APP_PASSWORD` are secrets — never commit them or
expose them with a `NEXT_PUBLIC_` prefix. Both are only ever read
server-side inside the route handler.

## 5. What each submission does

**Waitlist** (`firstName`, `lastName`, `email` required; `linkedin`,
`organization`, `aboutOrg` optional):
- Creates one `Lead` issue in `JIRA_PROJECT_KEY` (`WAIT`), which has its own
  pipeline statuses (`Opportunity`, `Contacted`, `In Negotiation`, `Won`,
  `Lost`). Summary is `[Waitlist] <first> <last>`; description holds
  name/email/organization/LinkedIn/about-the-org plus a submission
  timestamp, since none of our fields map onto the template's own custom
  fields (`Opportunity value`, `Category`, `Start date` — left blank).
- Emails the applicant a short confirmation from `GMAIL_USER`.

**Volunteer** (`firstName`, `lastName`, `email`, `message` required;
`phone`, `resume` optional):
- Creates one `Applicant` issue in `VOLUNTEER_JIRA_PROJECT_KEY` (`LT`), a
  work type with its own pipeline: `Applied → Interview → Accepted /
  Rejected / Ghosted`. Summary is `[Volunteer] <first> <last>`; description
  holds name/email/phone plus their answer to "What are you interested in
  doing?" If a resume was uploaded, it's attached directly to the issue
  (PDF or Word, max 4MB) via Jira's attachments API.
- Emails the applicant a short confirmation from `GMAIL_USER`.
- `LT` also hosts other Logistics Team work (Task/Story/Bug/Epic) — the
  `Applicant` work type has its own dedicated workflow, so it doesn't
  interfere with those. Existing boards were checked/adjusted so they don't
  mix in applicant cards.

To change Jira routing/issue type or email copy for either form, edit
`src/app/api/submit-form/route.ts` — waitlist logic is in
`createWaitlistJiraIssue`, volunteer logic is in `createVolunteerJiraIssue`,
and both share `createJiraIssue`/`attachResumeToJiraIssue`.

## 6. Spam / abuse protection

The endpoint has two lightweight protections built in:
- A hidden **honeypot** field (`company`) — bots that autofill every input
  trip it; real users never see or fill it.
- A **best-effort in-memory rate limit** (5 requests / 10 minutes per IP)
  that only holds within a single warm serverless instance — it stops naive
  scripted abuse but isn't durable across instances or deploys.

Resume uploads are also capped at 4MB and restricted to PDF/Word MIME
types server-side (not just via the file picker's `accept` attribute, which
users can bypass).

If you start seeing spam, the next steps (in order of effort) are: enable
Vercel's Attack Challenge Mode / Firewall on this route, add a CAPTCHA
(e.g. Cloudflare Turnstile) to the forms, or move rate limiting to a
durable store like Upstash Redis.
