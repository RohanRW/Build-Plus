import Link from "next/link";

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
      <Section id="services-hero" tone="mist">
        <SectionHeading
          eyebrow={services.hero.eyebrow}
          title={services.hero.title}
          body={services.hero.body}
        />
      </Section>

      {services.models.map((model, index) => (
        <Section
          key={model.slug}
          id={model.slug}
          tone={index % 2 === 1 ? "mist" : "canvas"}
        >
          <p className="eyebrow">{model.option}</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{model.name}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            {model.summary}
          </p>

          {model.includes.length > 0 && (
            <ul className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
              {model.includes.map((item) => (
                <li key={item} className="border-t border-line pt-3 text-slate">
                  {item}
                </li>
              ))}
            </ul>
          )}

          {model.bestFor && (
            <p className="mt-8 border-l-2 border-ink pl-6 text-slate">
              <span className="font-semibold text-ink">Best for: </span>
              {model.bestFor}
            </p>
          )}
        </Section>
      ))}

      {missingDetail && (
        <Section id="services-pending">
          <ContentPending
            label="Service model detail"
            needs={[
              "What each model includes (scope boundaries per option)",
              "Who each model is best suited to",
              "How each is priced or structured commercially, if you want that shown",
            ]}
          />
        </Section>
      )}

      {/* Development Process */}
      <Section id="development-process" tone="ink">
        <SectionHeading
          eyebrow={services.process.eyebrow}
          title={services.process.title}
          tone="light"
        />

        <ol className="mt-12 space-y-10">
          {home.howItWorks.phases.map((phase) => (
            <li
              key={phase.number}
              className="grid gap-6 border-t border-white/20 pt-8 md:grid-cols-[6rem_1fr]"
            >
              <p className="font-display text-4xl font-extrabold text-white/30">
                {phase.number}
              </p>
              <div>
                <h3 className="text-xl font-bold text-white">{phase.name}</h3>
                <p className="mt-2 text-white/70">{phase.summary}</p>
                {phase.points.length > 0 && (
                  <ul className="mt-4 grid gap-2 text-sm text-white/60 sm:grid-cols-2">
                    {phase.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-3xl text-sm text-white/60">
          {services.process.note}
        </p>

        <Link
          href={primaryCta.href}
          className="mt-10 inline-flex bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-white/90"
        >
          {primaryCta.label}
        </Link>
      </Section>
    </>
  );
}
