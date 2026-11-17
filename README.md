# WhiteCollar consulting website

A visual demonstration built with Next.js, React and TypeScript. The interface keeps the existing English language and WhiteCollar branding.

## Run locally

```sh
npm install
npm run dev
```

## Demonstration flows

- Contact and newsletter forms validate entered fields and show a clearly labelled preview result. They prevent native submission, make no submission requests, and do not save form data. There is no email, CRM or newsletter integration.
- Plan links open the contact preview with the selected plan in the subject. Service detail pages preserve the selected service in the same way. There is no checkout or payment processing.
- Insights have complete detail pages and two-page navigation. Unknown article and service addresses return 404.
- The mobile menu closes when a destination is selected and marks the current section, including nested pages. Desktop navigation also marks the current section.
- The home page explains the consulting offer and leads to services, plans and the enquiry preview.
- FAQ answers use labelled disclosure buttons with keyboard activation. The Pages submenu supports click, Enter, Space, Tab and Escape. Modals hide background content from assistive technology, contain focus and return it when closed.
- The presentation dialog provides accessible text instead of playing the original uncaptioned video. The original file remains in `public/Apresentation.mp4`; restoring playback requires accurate, synchronized captions. No transcript or captions were invented.

## Downloads

`public/downloads/consultation-guide.pdf` is an original preparation checklist for this demonstration. The ZIP contains the same PDF and a plain text checklist. These are sample resources, not client deliverables or contracts.

Regenerate both files with:

```sh
npm run resources:generate
```

## Validation

```sh
npm run build
npx tsc --noEmit
npm run test:e2e
```

The browser tests cover form validation and the absence of submission requests, plan selection, article pagination, service destinations, downloads, mobile menu state and layout overflow. Run a production build before browser tests; the test runner starts and stops its own production server on port 3100.

On Windows, tests use an installed Microsoft Edge. On other platforms, install the Playwright Chromium browser with `npx playwright install chromium`. Set `PLAYWRIGHT_CHANNEL` to use another installed browser channel, such as `chrome`.
