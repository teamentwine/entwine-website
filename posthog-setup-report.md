<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics for the Entwine website. Here is a summary of what was done:

- **`instrumentation-client.ts`** — already existed and correctly initializes PostHog with the reverse proxy (`/ingest`), exception capture, and debug mode in development. No changes needed.
- **`next.config.ts`** — already had the correct PostHog reverse proxy rewrites configured. No changes needed.
- **`.env.local`** — created with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables. Added to `.gitignore`.
- **`src/app/components/Navbar.tsx`** — added `login_clicked` and `signup_clicked` events to the Login and Sign Up navbar links.
- **`src/app/components/Footer.tsx`** — added `footer_nav_link_clicked` event to all four footer navigation links (team, volunteer, waitlist, platform).

All other pages and components already had comprehensive PostHog event tracking in place.

## Event tracking summary

| Event Name | Description | File |
|---|---|---|
| `home_page_viewed` | Fired when the home page loads | `src/app/page.tsx` |
| `home_learn_more_clicked` | Fired when a Learn More button is clicked; includes `section` property | `src/app/page.tsx` |
| `platform_page_viewed` | Fired when the platform page loads | `src/app/platform/page.tsx` |
| `team_page_viewed` | Fired when the team page loads | `src/app/team/page.tsx` |
| `volunteer_page_viewed` | Fired when the volunteer page loads | `src/app/volunteer/page.tsx` |
| `volunteer_form_submitted` | Fired on volunteer form submission with contact details | `src/app/volunteer/page.tsx` |
| `idealist_link_clicked` | Fired when the Idealist external link is clicked | `src/app/volunteer/page.tsx` |
| `waitlist_page_viewed` | Fired when the waitlist page loads | `src/app/waitlist/page.tsx` |
| `waitlist_form_submitted` | Fired on waitlist form submission with org and contact details | `src/app/waitlist/page.tsx` |
| `email_link_clicked` | Fired when the info@entwine.org email link is clicked | `src/app/waitlist/page.tsx` |
| `nav_link_clicked` | Fired when a navbar link is clicked; includes `label` property | `src/app/components/Navbar.tsx` |
| `login_clicked` | Fired when the Login link in the navbar is clicked | `src/app/components/Navbar.tsx` |
| `signup_clicked` | Fired when the Sign Up link in the navbar is clicked | `src/app/components/Navbar.tsx` |
| `social_link_clicked` | Fired when a social media icon in the footer is clicked; includes `platform` | `src/app/components/Footer.tsx` |
| `footer_nav_link_clicked` | Fired when a footer navigation link is clicked; includes `label` | `src/app/components/Footer.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1570812)
- [Page Views by Section](/insights/jmtTs8E5) — daily unique visitors per page over 30 days
- [Waitlist Conversion Funnel](/insights/RvsxEoox) — waitlist page view → form submission conversion rate
- [Volunteer Conversion Funnel](/insights/6iy80jJl) — volunteer page view → form submission conversion rate
- [Form Submissions Over Time](/insights/5rPfHymI) — waitlist and volunteer submissions per day
- [Nav Link Clicks by Destination](/insights/NS0iST4a) — which navbar links users click most, broken down by label

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
