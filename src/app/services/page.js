import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { ContentPending, Section, SectionHeading } from "@/components/section";
import { services } from "@/content/services";
import { home } from "@/content/home";
import { primaryCta } from "@/content/site";

export const metadata = {
  title: "Services",
  description:
    "Complete Turnkey or Construction & Development — the project is structured around the landowner's requirements.",
};

export default function ServicesPage() {
  const missingDetail = services.models.some(
    (model) => model.includes.length === 0,
  );
  // Every model lists the same rows so they compare line by line; each row
  // is ticked or crossed by that model's own `includes`.
  const features = [...new Set(services.models.flatMap((model) => model.includes))];

  return (
    <div className="page-services">
      <PageHero
        eyebrow={services.hero.eyebrow}
        title={services.hero.title}
        body={services.hero.body}
      />

      {/* The three commercial models */}
      <Section id="service-models">
        <div className="grid gap-px bg-line lg:grid-cols-2">
          {services.models.map((model, index) => (
            <Reveal
              as="article"
              key={model.slug}
              id={model.slug}
              delay={index * 0.08}
              className="group tone-canvas row-span-6 grid scroll-mt-28 grid-rows-subgrid gap-y-0 bg-[var(--section-bg)] p-8 sm:p-10"
            >
              <p
                className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--section-accent-color)]"
                style={{ fontFamily: "var(--section-body-font)" }}
              >
                {model.option}
              </p>
              <h2
                className="mt-4 text-2xl uppercase tracking-tight text-[var(--section-heading-color)] sm:text-3xl"
                style={{
                  fontFamily: "var(--section-heading-font)",
                  fontWeight: "var(--section-heading-weight)",
                }}
              >
                {model.name}
              </h2>
              <p
                className="mt-5 leading-relaxed text-[var(--section-body-color)]"
                style={{
                  fontFamily: "var(--section-body-font)",
                  fontWeight: "var(--section-body-weight)",
                }}
              >
                {model.summary}
              </p>

              {features.length > 0 && (
                <ul className="mt-7 space-y-2.5 text-sm">
                  {features.map((item) => {
                    const included = model.includes.includes(item);
                    const Icon = included ? Check : X;
                    return (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 border-t pt-2.5 text-[var(--section-body-color)]"
                        style={{ borderColor: "var(--section-border-color)" }}
                      >
                        <Icon
                          size={15}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-[var(--section-heading-color)]"
                        />
                        <span>
                          {item}
                          <span className="sr-only">
                            {included ? " (included)" : " (not included)"}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}

              {model.bestFor && (
                <p
                  className="mt-7 border-l-2 pl-5 text-sm text-[var(--section-body-color)]"
                  style={{ borderColor: "var(--section-heading-color)" }}
                >
                  <span className="font-semibold text-[var(--section-heading-color)]">
                    Best for:{" "}
                  </span>
                  {model.bestFor}
                </p>
              )}

              <Link
                href={primaryCta.href}
                className="mt-8 inline-flex items-center gap-2 justify-self-start text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--section-heading-color)]"
              >
                Discuss this option
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        {missingDetail && (
          <ContentPending
            label="Service model detail"
            needs={[
              "What each model includes (scope boundaries per option)",
              "Who each model is best suited to",
              "How each is priced or structured commercially, if you want that shown",
            ]}
          />
        )}
      </Section>

      {/* Development Process */}
      <Section id="development-process">
        <SectionHeading
          eyebrow={services.process.eyebrow}
          title={services.process.title}
        />

        <ol className="mt-14 space-y-0">
          {home.howItWorks.phases.map((phase, index) => (
            <Reveal
              as="li"
              key={phase.number}
              delay={Math.min(index, 3) * 0.05}
              className="grid gap-6 border-t border-line py-9 md:grid-cols-[7rem_1fr]"
            >
              <p className="text-4xl font-extrabold text-line">
                {phase.number}
              </p>
              <div>
                <h3 className="text-xl font-bold text-ink sm:text-2xl">
                  {phase.name}
                </h3>
                <p className="mt-2 leading-relaxed text-slate">
                  {phase.summary}
                </p>
                {phase.points.length > 0 && (
                  <ul className="mt-6 grid gap-2 text-sm text-slate sm:grid-cols-2 lg:grid-cols-3">
                    {phase.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 bg-ink/40"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-3xl border-t border-line pt-8 text-sm leading-relaxed text-slate">
            {services.process.note}
          </p>

          <Link
            href={primaryCta.href}
            className="group mt-10 inline-flex items-center gap-3 border border-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
          >
            {primaryCta.label}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Section>
    </div>
  );
}
