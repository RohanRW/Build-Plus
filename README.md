# BuildPlus

Marketing site for BuildPlus — a turnkey development partner for landowners,
a Ray White Ltd. venture.

Built with Next.js (App Router, JavaScript), React and Tailwind CSS v4.

## Running locally

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Structure

```
src/
  app/                    routes (one folder per sitemap page)
    api/landowner/        enquiry endpoint → Google Sheets
    sitemap.js robots.js  SEO files, generated from src/content/site.js
  components/             header, footer, logo, section furniture, form
  content/                ALL page copy lives here — edit these, not the pages
  lib/                    form schema + Google Sheets client
public/images/            photography and renders
```

Routes map to the agreed sitemap:

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/experience` | Experience |
| `/packages` | Packages |
| `/discuss-your-land` | Discuss Your Land (landowner form) |

## Editing content

No page file contains copy. Everything is in `src/content/`:

- `site.js` — brand strings, navigation, contact details, social links
- `home.js` — all eight home page sections
- `about.js`, `services.js`, `experience.js`, `packages.js`

Anything still awaiting client input is marked `TODO(content)`,
`TODO(assets)` or `TODO(brand)`. List them with:

```bash
grep -rn "TODO(" src/
```

Sections with no data render a visible dashed "Content pending" block
listing exactly what is needed, so nothing is silently missing.

## Landowner enquiries → Google Sheets

1. In Google Cloud, create a project, enable the **Google Sheets API**, and
   create a **service account**. Generate a JSON key.
2. Create the spreadsheet. Add a tab named `Enquiries` with the header row:
   `Timestamp | Name | Phone | Land Location | Land Size | Unit | Type | Package`
3. Share the spreadsheet with the service account's email address, as
   **Editor**.
4. Fill `.env.local`:
   - `GOOGLE_SHEETS_SPREADSHEET_ID` — the long id in the sheet URL
   - `GOOGLE_SHEETS_TAB_NAME` — defaults to `Enquiries`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` — `client_email` from the JSON key
   - `GOOGLE_PRIVATE_KEY` — `private_key` from the JSON key, in quotes,
     newlines left as `\n`
5. Set the same variables in your hosting provider's environment settings.

Until those are set, the endpoint returns a clear error rather than
pretending to have saved the enquiry, and logs the submission server-side.

Submissions are validated on both the client and the server
(`src/lib/landowner-schema.js`) and a hidden honeypot field filters bots.
