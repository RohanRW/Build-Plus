import { google } from "googleapis";

/**
 * Appends landowner enquiries to a Google Sheet.
 *
 * Setup (see README):
 *   1. Create a Google Cloud service account and enable the Sheets API.
 *   2. Share the target spreadsheet with the service account email
 *      (Editor access).
 *   3. Set GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL and
 *      GOOGLE_PRIVATE_KEY in .env.local (and in your host's env vars).
 */

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

export const SHEET_HEADERS = [
  "Timestamp",
  "Name",
  "Phone",
  "Land Location",
  "Land Size",
  "Unit",
  "Type",
  "Development Standard",
];

export function isSheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY,
  );
}

function getClient() {
  // Env vars store the key with literal "\n" sequences; restore real newlines.
  const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: SCOPES,
  });

  return google.sheets({ version: "v4", auth });
}

export async function appendEnquiry(enquiry) {
  const sheets = getClient();
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_TAB_NAME || "Enquiries";

  const row = [
    new Date().toISOString(),
    enquiry.name,
    enquiry.phone,
    enquiry.landLocation,
    enquiry.landSize,
    enquiry.landSizeUnit,
    enquiry.landType,
    enquiry.standard,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:H`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}
