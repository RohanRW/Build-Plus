import { Barlow_Condensed, Inter } from "next/font/google";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { site } from "@/content/site";
import "./globals.css";

/*
 * TODO(brand): typography is a PLACEHOLDER. Barlow Condensed echoes the
 * compressed caps of the logo wordmark; Inter carries body copy. Swap both
 * here once type direction is confirmed.
 */
const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "BuildPlus is a turnkey development partner for landowners. One professional team manages design, engineering, approvals, construction and handover.",
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.subTagline,
    url: siteUrl,
  },
  // TODO(assets): add an Open Graph image once brand artwork is supplied.
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
