import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Hero from "@/components/hero";
import Reveal from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import ProjectCard from "@/components/project-card";
import { home } from "@/content/home";
import { experience } from "@/content/experience";

export default function HomePage() {
  const featured = experience.rayWhiteDevelopments.projects.slice(
    0,
    home.developmentExperience.featuredCount,
  );

  return (
    <div className="page-home">
      <Hero />

      {/* Backing + the figures behind the venture */}
      <Section id="ray-white" size="tight">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <SectionHeading
            eyebrow={home.rayWhiteVenture.eyebrow}
            title={home.rayWhiteVenture.title}
            body={home.rayWhiteVenture.body}
          />

          <Reveal delay={0.1} className="grid grid-cols-2 gap-px bg-line">
            {home.stats.map((stat) => (
              <div key={stat.label} className="bg-canvas p-6 sm:p-7">
                <p className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs uppercase leading-relaxed tracking-[0.1em] text-slate">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* What We Do (formerly "How It Works") */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow={home.howItWorks.eyebrow}
          title={home.howItWorks.title}
          body={home.howItWorks.intro}
        />

        <ol className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {home.howItWorks.phases.map((phase, index) => (
            <Reveal
              as="li"
              key={phase.number}
              delay={(index % 4) * 0.08}
              className="group bg-canvas p-7 transition-colors duration-300 hover:bg-black"
            >
              <p className="text-3xl font-extrabold text-secondary">
                {phase.number}
              </p>
              <h3 className="mt-3 text-lg font-bold transition-colors duration-300 group-hover:text-white">
                {phase.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate transition-colors duration-300 group-hover:text-white/60">
                {phase.summary}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <Link
            href="/services#development-process"
            className="group mt-12 inline-flex items-center gap-3 border border-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] transition hover:border-accent hover:bg-accent hover:text-white"
          >
            See the full process
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Section>

      {/* Why BuildPlus */}
      <Section id="why-buildplus" tone="ink">
        <SectionHeading
          eyebrow={home.whyBuildPlus.eyebrow}
          title={home.whyBuildPlus.title}
          body={home.whyBuildPlus.intro}
          tone="light"
        />

        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {home.whyBuildPlus.pillars.map((pillar, index) => (
            <Reveal
              key={pillar.name}
              delay={(index % 3) * 0.08}
              className="bg-black p-7 transition-colors duration-300 hover:bg-secondary"
            >
              <h3 className="text-lg font-bold text-white">{pillar.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Development Experience */}
      <Section id="development-experience">
        <SectionHeading
          eyebrow={home.developmentExperience.eyebrow}
          title={home.developmentExperience.title}
          body={home.developmentExperience.intro}
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08} className="h-full">
              <ProjectCard
                project={project}
                developerLabel={experience.rayWhiteDevelopments.developerLabel}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Link
            href={home.developmentExperience.ctaHref}
            className="group mt-12 inline-flex items-center gap-3 border border-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] transition hover:border-accent hover:bg-accent hover:text-white"
          >
            {home.developmentExperience.ctaLabel}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Section>

      {/* Landowner CTA */}
      <Section id="landowner-cta">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow={home.landownerCta.eyebrow}
            title={home.landownerCta.title}
            body={home.landownerCta.body}
          />
          <Reveal delay={0.1}>
            <Link
              href={home.landownerCta.ctaHref}
              className="group mt-12 inline-flex items-center gap-3 bg-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-accent"
            >
              {home.landownerCta.ctaLabel}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
