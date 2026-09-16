import { Montserrat } from "next/font/google";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { site } from "@/content/site";
import "./globals.css";

/*
 * Montserrat throughout. Its geometric caps sit close to the compressed
 * caps of the logo wordmark, so headings and the mark read as one family.
 */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    images: [{ url: "/logo-lockup.png", width: 1952, height: 1384 }],
  },
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the inline script below sets data-js on this
    // element before React hydrates, which React would otherwise flag.
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Marks the document as scripted before first paint. Scroll reveals
          only hide themselves behind this attribute, so a page without
          JavaScript renders fully visible rather than blank.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.setAttribute('data-js', '')",
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-canvas">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
