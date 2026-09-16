import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { ContentPending, Section, SectionHeading } from "@/components/section";
import { services } from "@/content/services";
import { home } from "@/content/home";
import { primaryCta } from "@/content/site";

export const metadata = {
  title: "Services",
  description:
    "Complete Turnkey, Design & Build, or Development Management — the project is structured around the landowner's requirements.",
};

export default function ServicesPage() {
  const missingDetail = services.models.some(
    (model) => model.includes.length === 0,
  );

  return (
    <>
      <PageHero
        eyebrow={services.hero.eyebrow}
        title={services.hero.title}
        body={services.hero.body}
      />

      {/* The three commercial models */}
      <Section id="service-models">
        <div className="grid gap-px bg-line lg:grid-cols-3">
          {services.models.map((model, index) => (
            <Reveal
              as="article"
              key={model.slug}
              id={model.slug}
              delay={index * 0.08}
              className="group flex scroll-mt-28 flex-col bg-canvas p-8 transition-colors duration-300 hover:bg-mist sm:p-10"
            >
              <p className="eyebrow !text-[0.6rem]">{model.option}</p>
              <h2 className="mt-4 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                {model.name}
              </h2>
              <p className="mt-5 flex-1 leading-relaxed text-slate">
                {model.summary}
              </p>

              {model.includes.length > 0 && (
                <ul className="mt-7 space-y-2.5 text-sm">
                  {model.includes.map((item) => (
                    <li
                      key={item}
                      className="border-t border-line pt-2.5 text-slate"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {model.bestFor && (
                <p className="mt-7 border-l-2 border-ink pl-5 text-sm text-slate">
                  <span className="font-semibold text-ink">Best for: </span>
                  {model.bestFor}
                </p>
              )}

              <Link
                href={primaryCta.href}
                className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ink"
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
      <Section id="development-process" tone="ink">
        <SectionHeading
          eyebrow={services.process.eyebrow}
          title={services.process.title}
          tone="light"
        />

        <ol className="mt-14 space-y-0">
          {home.howItWorks.phases.map((phase, index) => (
            <Reveal
              as="li"
              key={phase.number}
              delay={Math.min(index, 3) * 0.05}
              className="grid gap-6 border-t border-white/15 py-9 md:grid-cols-[7rem_1fr]"
            >
              <p className="text-4xl font-extrabold text-white/25">
                {phase.number}
              </p>
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {phase.name}
                </h3>
                <p className="mt-2 leading-relaxed text-white/70">
                  {phase.summary}
                </p>
                {phase.points.length > 0 && (
                  <ul className="mt-6 grid gap-2 text-sm text-white/55 sm:grid-cols-2 lg:grid-cols-3">
                    {phase.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 bg-white/40"
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
          <p className="mt-12 max-w-3xl border-t border-white/15 pt-8 text-sm leading-relaxed text-white/55">
            {services.process.note}
          </p>

          <Link
            href={primaryCta.href}
            className="group mt-10 inline-flex items-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-white/85"
          >
            {primaryCta.label}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
