import { nav, primaryCta, site } from "@/content/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

export default function sitemap() {
  const lastModified = new Date();

  return [...nav, primaryCta].map((item) => ({
    url: new URL(item.href, baseUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
