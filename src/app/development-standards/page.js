import Link from "next/link";

import { Section, SectionHeading } from "@/components/section";
import { standards } from "@/content/standards";
import { primaryCta } from "@/content/site";

export const metadata = {
  title: "Development Standards",
  description:
    "Essential, Standard, Premium and Luxury — indicative levels of architectural specification, materials, finishes and building systems from BuildPlus.",
};

export default function DevelopmentStandardsPage() {
  return (
    <>
      <Section id="standards-hero" tone="mist">
        <SectionHeading
          eyebrow={standards.hero.eyebrow}
          title={standards.hero.title}
          body={standards.hero.body}
        />
        <p className="mt-8 border-l-2 border-ink pl-6 text-slate">
          {standards.commercialNote}
        </p>
      </Section>

      <Section id="standard-levels">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {standards.tiers.map((tier) => (
            <article
              key={tier.slug}
              id={tier.slug}
              className={`flex scroll-mt-28 flex-col border p-8 ${
                tier.featured ? "border-2 border-ink" : "border-line"
              }`}
            >
              <h2 className="font-display text-3xl font-bold uppercase">
                {tier.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                {tier.positioning}
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {tier.inclusions.map((inclusion) => (
                  <li key={inclusion} className="border-t border-line pt-3">
                    {inclusion}
                  </li>
                ))}
              </ul>

              <Link
                href={`${primaryCta.href}?standard=${tier.slug}`}
                className="mt-8 inline-flex justify-center border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-white"
              >
                Enquire
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-16 max-w-4xl border-t border-line pt-8 text-sm leading-relaxed text-slate">
          {standards.disclaimer}
        </p>
      </Section>
    </>
  );
}
