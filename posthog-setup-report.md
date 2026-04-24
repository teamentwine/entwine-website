<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Entwine website. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new file): Initializes PostHog client-side using the `instrumentation-client` approach for Next.js 15.3+. Configured with a reverse proxy (`/ingest`), exception capture, and debug mode in development.
- **`next.config.ts`**: Added reverse proxy rewrites for `/ingest/static/*`, `/ingest/array/*`, and `/ingest/*` to route PostHog traffic through the app and avoid ad blockers. Also added `skipTrailingSlashRedirect: true`.
- **`.env.local`**: Set `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **`src/app/waitlist/page.tsx`**: Added `waitlist_page_viewed` (on mount), `waitlist_form_submitted` (on form submit), and `email_link_clicked` (on contact email link click).
- **`src/app/volunteer/page.tsx`**: Added `'use client'` directive. Added `volunteer_page_viewed` (on mount), `volunteer_form_submitted` (on form submit), and `idealist_link_clicked` (on Idealist external link click).
- **`src/app/page.tsx`**: Added `'use client'` directive. Added `home_learn_more_clicked` with a `section` property on both "Learn More" buttons (`about` and `info`).
- **`src/app/components/Navbar.tsx`**: Added `nav_link_clicked` with a `label` property on all navigation link buttons (team, volunteer, waitlist, platform).
- **`src/app/components/Footer.tsx`**: Added `social_link_clicked` with a `platform` property on all three social icon links (facebook, linkedin, twitter).

| Event | Description | File |
|---|---|---|
| `waitlist_page_viewed` | User views the waitlist page — top of the conversion funnel | `src/app/waitlist/page.tsx` |
| `waitlist_form_submitted` | User submits the waitlist interest form | `src/app/waitlist/page.tsx` |
| `email_link_clicked` | User clicks the contact email link on the waitlist page | `src/app/waitlist/page.tsx` |
| `volunteer_page_viewed` | User views the volunteer page — top of the volunteer conversion funnel | `src/app/volunteer/page.tsx` |
| `volunteer_form_submitted` | User submits the volunteer contact form | `src/app/volunteer/page.tsx` |
| `idealist_link_clicked` | User clicks the external Idealist job board link on the volunteer page | `src/app/volunteer/page.tsx` |
| `home_learn_more_clicked` | User clicks a "Learn More" button on the home page (property: `section`) | `src/app/page.tsx` |
| `nav_link_clicked` | User clicks a navigation link in the navbar (property: `label`) | `src/app/components/Navbar.tsx` |
| `social_link_clicked` | User clicks a social media link in the footer (property: `platform`) | `src/app/components/Footer.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/391662/dashboard/1494492
- **Waitlist Conversion Funnel** (funnel: page viewed → form submitted): https://us.posthog.com/project/391662/insights/6Vki5OWC
- **Volunteer Conversion Funnel** (funnel: page viewed → form submitted): https://us.posthog.com/project/391662/insights/JkZkHyuk
- **Form Submissions Over Time** (daily trend of both form types): https://us.posthog.com/project/391662/insights/yCgdbb1p
- **Nav Link Clicks by Page** (which nav destinations are most popular): https://us.posthog.com/project/391662/insights/bFB4MX3C
- **Social Link Clicks by Platform** (facebook / linkedin / twitter breakdown): https://us.posthog.com/project/391662/insights/94PanCQk

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
