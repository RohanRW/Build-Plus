import Link from "next/link";

import { ContentPending, Section, SectionHeading } from "@/components/section";
import ProjectCard from "@/components/project-card";
import { home } from "@/content/home";
import { experience } from "@/content/experience";
import { standards } from "@/content/standards";

export default function HomePage() {
  const featured = experience.rayWhiteDevelopments.projects.slice(
    0,
    home.developmentExperience.featuredCount,
  );

  return (
    <>
      {/* Hero */}
      <Section id="hero" tone="mist">
        <p className="eyebrow">{home.hero.eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold uppercase leading-[0.95] sm:text-7xl">
          {home.hero.title}
        </h1>
        <p className="mt-6 font-display text-2xl uppercase tracking-[0.1em] text-slate">
          {home.hero.subtitle}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate">
          {home.hero.body}
        </p>
        <Link
          href={home.landownerCta.ctaHref}
          className="mt-10 inline-flex bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-charcoal"
        >
          {home.landownerCta.ctaLabel}
        </Link>
        {!home.hero.image && (
          <ContentPending
            label="Hero imagery"
            needs={["A hero photograph or render for the top of the home page"]}
          />
        )}
      </Section>

      {/* A Ray White Ltd. Venture */}
      <Section id="ray-white">
        <SectionHeading
          eyebrow={home.rayWhiteVenture.eyebrow}
          title={home.rayWhiteVenture.title}
          body={home.rayWhiteVenture.body}
        />
      </Section>

      {/* What We Do */}
      <Section id="what-we-do" tone="mist">
        <SectionHeading
          eyebrow={home.whatWeDo.eyebrow}
          title={home.whatWeDo.title}
          body={home.whatWeDo.body}
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="eyebrow">Instead of managing</h3>
            <ul className="mt-6 space-y-2 text-slate">
              {home.whatWeDo.insteadOfManaging.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border-l-2 border-ink pl-8">
            <h3 className="eyebrow">You deal with</h3>
            <p className="mt-6 text-2xl font-bold">{home.whatWeDo.youDealWith}</p>
            <p className="mt-6 text-slate">{home.whatWeDo.ownershipNote}</p>
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap items-center gap-4 font-display text-xl font-bold uppercase">
          {home.whatWeDo.equation.map((part, index) => (
            <li key={part} className="flex items-center gap-4">
              <span>{part}</span>
              {index < home.whatWeDo.equation.length - 1 && (
                <span className="text-slate">
                  {index === home.whatWeDo.equation.length - 2 ? "=" : "+"}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow={home.howItWorks.eyebrow}
          title={home.howItWorks.title}
          body={home.howItWorks.intro}
        />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {home.howItWorks.phases.map((phase) => (
            <li key={phase.number} className="border-t-2 border-ink pt-6">
              <p className="font-display text-4xl font-extrabold text-line">
                {phase.number}
              </p>
              <h3 className="mt-2 text-xl font-bold">{phase.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {phase.summary}
              </p>
            </li>
          ))}
        </ol>

        <Link
          href="/services#development-process"
          className="mt-12 inline-flex border border-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-white"
        >
          See the full process
        </Link>
      </Section>

      {/* Why BuildPlus */}
      <Section id="why-buildplus" tone="ink">
        <SectionHeading
          eyebrow={home.whyBuildPlus.eyebrow}
          title={home.whyBuildPlus.title}
          body={home.whyBuildPlus.intro}
          tone="light"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {home.whyBuildPlus.pillars.map((pillar) => (
            <div key={pillar.name} className="border-t border-white/20 pt-6">
              <h3 className="text-lg font-bold text-white">{pillar.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-20 text-2xl font-bold text-white">
          {home.whyBuildPlus.comparison.title}
        </h3>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/20">
                {home.whyBuildPlus.comparison.columns.map((column) => (
                  <th key={column} className="py-4 pr-6 font-semibold text-white">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {home.whyBuildPlus.comparison.rows.map(([left, right]) => (
                <tr key={left} className="border-b border-white/10">
                  <td className="py-4 pr-6 text-white/60">{left}</td>
                  <td className="py-4 pr-6 text-white">{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Development Experience */}
      <Section id="development-experience">
        <SectionHeading
          eyebrow={home.developmentExperience.eyebrow}
          title={home.developmentExperience.title}
          body={home.developmentExperience.intro}
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              developerLabel={
                experience.rayWhiteDevelopments.developerLabel
              }
            />
          ))}
        </div>

        <Link
          href={home.developmentExperience.ctaHref}
          className="mt-10 inline-flex border border-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-white"
        >
          {home.developmentExperience.ctaLabel}
        </Link>
      </Section>

      {/* Development Standards */}
      <Section id="development-standards" tone="mist">
        <SectionHeading
          eyebrow={home.standardsTeaser.eyebrow}
          title={home.standardsTeaser.title}
          body={home.standardsTeaser.body}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {standards.tiers.map((tier) => (
            <article
              key={tier.slug}
              className={`border p-6 ${tier.featured ? "border-ink" : "border-line"}`}
            >
              <h3 className="font-display text-2xl font-bold uppercase">
                {tier.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {tier.positioning}
              </p>
            </article>
          ))}
        </div>

        <Link
          href={home.standardsTeaser.ctaHref}
          className="mt-10 inline-flex border border-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-white"
        >
          {home.standardsTeaser.ctaLabel}
        </Link>
      </Section>

      {/* Landowner CTA */}
      <Section id="landowner-cta" tone="ink">
        <SectionHeading
          eyebrow={home.landownerCta.eyebrow}
          title={home.landownerCta.title}
          body={home.landownerCta.body}
          tone="light"
        />
        <Link
          href={home.landownerCta.ctaHref}
          className="mt-10 inline-flex bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-white/90"
        >
          {home.landownerCta.ctaLabel}
        </Link>
      </Section>
    </>
  );
}
