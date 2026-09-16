import { site } from "@/content/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: new URL("/sitemap.xml", baseUrl).toString(),
  };
}
