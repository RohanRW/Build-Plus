import Link from "next/link";

import { ContentPending, Section, SectionHeading } from "@/components/section";
import { packages } from "@/content/packages";
import { primaryCta } from "@/content/site";

export const metadata = {
  title: "Packages",
  description:
    "Essential, Standard, Premium and Luxury development packages from BuildPlus.",
};

export default function PackagesPage() {
  const detailsPending = packages.tiers.some(
    (tier) => tier.highlights.length === 0,
  );

  return (
    <>
      <Section id="packages-hero" tone="mist">
        <SectionHeading
          eyebrow={packages.hero.eyebrow}
          title={packages.hero.title}
          body={packages.hero.body}
        />
      </Section>

      <Section id="package-tiers">
        <div className="grid gap-6 lg:grid-cols-4">
          {packages.tiers.map((tier) => (
            <article
              key={tier.slug}
              id={tier.slug}
              className={`flex flex-col border p-8 ${
                tier.featured ? "border-2 border-ink" : "border-line"
              }`}
            >
              <h2 className="font-display text-3xl font-bold uppercase">
                {tier.name}
              </h2>
              <p className="mt-4 min-h-12 text-sm text-slate">
                {tier.positioning || "Positioning pending."}
              </p>
              {tier.priceNote && (
                <p className="mt-4 font-semibold">{tier.priceNote}</p>
              )}

              {tier.highlights.length > 0 && (
                <ul className="mt-6 flex-1 space-y-3 text-sm text-slate">
                  {tier.highlights.map((highlight) => (
                    <li key={highlight} className="border-t border-line pt-3">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href={`${primaryCta.href}?package=${tier.slug}`}
                className="mt-8 inline-flex justify-center border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-white"
              >
                Enquire
              </Link>
            </article>
          ))}
        </div>

        {detailsPending && (
          <ContentPending
            label="Package definitions"
            needs={[
              "A one-line positioning statement per tier",
              "4–6 card highlights per tier",
              "Full inclusions per tier — structure, finishes, fittings, kitchen, sanitary, lift, generator, security, common areas, landscaping",
              "Indicative per-sft range per tier, or confirm 'price on request'",
              "Which tier, if any, should be visually emphasised",
            ]}
          />
        )}

        <p className="mt-12 max-w-3xl text-sm text-slate">{packages.hero.note}</p>
      </Section>
    </>
  );
}
