import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { packages } from "@/content/packages";
import { primaryCta } from "@/content/site";

export const metadata = {
  title: "Packages",
  description:
    "Essential, Standard, Premium and Luxury — indicative levels of architectural specification, materials, finishes and building systems from BuildPlus.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow={packages.hero.eyebrow}
        title={packages.hero.title}
        body={packages.hero.body}
        note={packages.commercialNote}
      />

      {/* What every package carries */}
      <Section id="in-every-package" tone="mist" size="tight">
        <SectionHeading
          eyebrow={packages.constants.eyebrow}
          title={packages.constants.title}
        />
        <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
          {packages.constants.items.map((item, index) => (
            <Reveal
              as="li"
              key={item}
              delay={(index % 4) * 0.06}
              className="flex items-start gap-3 border-t border-line pt-3 text-sm text-slate"
            >
              <Check size={15} className="mt-0.5 shrink-0 text-ink" />
              {item}
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* The four packages */}
      <Section id="package-levels">
        <div className="grid gap-7 lg:grid-cols-2 xl:grid-cols-4">
          {packages.tiers.map((tier, index) => (
            <Reveal
              as="article"
              key={tier.slug}
              id={tier.slug}
              delay={index * 0.07}
              className={`flex scroll-mt-28 flex-col border p-8 ${
                tier.featured
                  ? "border-ink bg-black text-white"
                  : "border-line bg-canvas"
              }`}
            >
              {tier.featured && (
                <p className="eyebrow !text-[0.58rem] !text-white/50">
                  Most specified
                </p>
              )}

              <h2
                className={`text-3xl font-extrabold uppercase tracking-tight ${
                  tier.featured ? "mt-3" : ""
                }`}
              >
                {tier.name}
              </h2>
              <p
                className={`mt-2 text-xs uppercase tracking-[0.14em] ${
                  tier.featured ? "text-white/45" : "text-slate"
                }`}
              >
                {tier.tagline}
              </p>

              <p
                className={`mt-6 text-sm leading-relaxed ${
                  tier.featured ? "text-white/70" : "text-slate"
                }`}
              >
                {tier.positioning}
              </p>

              {tier.bestFor && (
                <p
                  className={`mt-6 border-l-2 pl-5 text-sm leading-relaxed ${
                    tier.featured
                      ? "border-white/30 text-white/60"
                      : "border-ink text-slate"
                  }`}
                >
                  <span
                    className={`font-semibold ${tier.featured ? "text-white" : "text-ink"}`}
                  >
                    Best for:{" "}
                  </span>
                  {tier.bestFor}
                </p>
              )}

              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {tier.inclusions.map((inclusion) => (
                  <li
                    key={inclusion}
                    className={`border-t pt-3 ${
                      tier.featured
                        ? "border-white/15 text-white/75"
                        : "border-line"
                    }`}
                  >
                    {inclusion}
                  </li>
                ))}
              </ul>

              <Link
                href={`${primaryCta.href}?package=${tier.slug}`}
                className={`group mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] transition ${
                  tier.featured
                    ? "bg-white text-ink hover:bg-white/85"
                    : "border border-ink hover:bg-ink hover:text-white"
                }`}
              >
                Enquire
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-4xl border-t border-line pt-8 text-sm leading-relaxed text-slate">
            {packages.disclaimer}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
