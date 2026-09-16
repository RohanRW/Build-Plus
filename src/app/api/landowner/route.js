import { NextResponse } from "next/server";

import { landownerSchema } from "@/lib/landowner-schema";
import { appendEnquiry, isSheetsConfigured } from "@/lib/google-sheets";

export const runtime = "nodejs";

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = landownerSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the highlighted fields.",
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // Honeypot: a filled hidden field means a bot. Answer 200 so it moves on.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  if (!isSheetsConfigured()) {
    // Not wired up yet — don't lose the enquiry silently in development.
    console.warn(
      "[landowner] Google Sheets is not configured; enquiry not stored:",
      parsed.data,
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "The enquiry form is not connected yet. Please call us directly.",
      },
      { status: 503 },
    );
  }

  try {
    await appendEnquiry(parsed.data);
  } catch (error) {
    console.error("[landowner] Failed to append enquiry:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "We couldn't submit your enquiry. Please try again or call us.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
