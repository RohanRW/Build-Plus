import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";

import Hero from "@/components/hero";
import Reveal from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import ProjectCard from "@/components/project-card";
import { LogoMark } from "@/components/logo";
import { home } from "@/content/home";
import { experience } from "@/content/experience";
import { packages } from "@/content/packages";

export default function HomePage() {
  const featured = experience.rayWhiteDevelopments.projects.slice(
    0,
    home.developmentExperience.featuredCount,
  );

  return (
    <>
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

      {/* What We Do */}
      <Section id="what-we-do" tone="mist">
        <SectionHeading
          eyebrow={home.whatWeDo.eyebrow}
          title={home.whatWeDo.title}
          body={home.whatWeDo.body}
        />

        <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
          <Reveal className="bg-mist p-8 sm:p-10">
            <h3 className="eyebrow">Instead of managing</h3>
            <ul className="mt-7 space-y-3">
              {home.whatWeDo.insteadOfManaging.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate line-through decoration-line"
                >
                  <Minus size={14} className="shrink-0 text-line" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="bg-black p-8 text-white sm:p-10">
            <h3 className="eyebrow !text-white/50">You deal with</h3>
            <p className="mt-7 text-2xl font-extrabold leading-tight sm:text-3xl">
              {home.whatWeDo.youDealWith}
            </p>
            <p className="mt-6 leading-relaxed text-white/60">
              {home.whatWeDo.ownershipNote}
            </p>
            <LogoMark variant="light" className="mt-10 h-14 w-auto opacity-25" />
          </Reveal>
        </div>

        {/* Your Land + Your Investment + Our Expertise = Your Completed Building */}
        <Reveal
          as="ul"
          delay={0.15}
          className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-4 text-lg font-extrabold uppercase tracking-tight sm:text-2xl"
        >
          {home.whatWeDo.equation.map((part, index) => {
            const last = index === home.whatWeDo.equation.length - 1;

            return (
              <li key={part} className="flex items-center gap-5">
                <span className={last ? "border-b-4 border-ink pb-1" : ""}>
                  {part}
                </span>
                {!last && (
                  <span className="text-2xl font-light text-slate sm:text-3xl">
                    {index === home.whatWeDo.equation.length - 2 ? "=" : "+"}
                  </span>
                )}
              </li>
            );
          })}
        </Reveal>
      </Section>

      {/* How It Works */}
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
              <p className="text-3xl font-extrabold text-line transition-colors duration-300 group-hover:text-white/25">
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
            className="group mt-12 inline-flex items-center gap-3 border border-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-white"
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
              className="bg-black p-7 transition-colors duration-300 hover:bg-carbon"
            >
              <h3 className="text-lg font-bold text-white">{pillar.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <h3 className="mt-20 text-2xl font-extrabold text-white sm:text-3xl">
            {home.whyBuildPlus.comparison.title}
          </h3>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/20">
                {home.whyBuildPlus.comparison.columns.map((column, index) => (
                  <th
                    key={column}
                    className={`py-4 pr-6 text-xs font-bold uppercase tracking-[0.14em] ${
                      index === 0 ? "text-white/40" : "text-white"
                    }`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {home.whyBuildPlus.comparison.rows.map(([left, right]) => (
                <tr
                  key={left}
                  className="border-b border-white/10 transition-colors hover:bg-white/5"
                >
                  <td className="py-4 pr-6 text-white/45">{left}</td>
                  <td className="py-4 pr-6 text-white">
                    <span className="flex items-start gap-2.5">
                      <Check size={15} className="mt-0.5 shrink-0 text-white/50" />
                      {right}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
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
            className="group mt-12 inline-flex items-center gap-3 border border-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-white"
          >
            {home.developmentExperience.ctaLabel}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Section>

      {/* Packages */}
      <Section id="packages" tone="mist">
        <SectionHeading
          eyebrow={home.packagesTeaser.eyebrow}
          title={home.packagesTeaser.title}
          body={home.packagesTeaser.body}
        />

        <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {packages.tiers.map((tier, index) => (
            <Reveal
              as="article"
              key={tier.slug}
              delay={index * 0.07}
              className={`flex flex-col p-7 transition-colors duration-300 ${
                tier.featured ? "bg-black text-white" : "bg-mist hover:bg-canvas"
              }`}
            >
              <h3 className="text-2xl font-extrabold uppercase tracking-tight">
                {tier.name}
              </h3>
              <p
                className={`mt-2 text-xs uppercase tracking-[0.14em] ${
                  tier.featured ? "text-white/45" : "text-slate"
                }`}
              >
                {tier.tagline}
              </p>
              <p
                className={`mt-5 flex-1 text-sm leading-relaxed ${
                  tier.featured ? "text-white/65" : "text-slate"
                }`}
              >
                {tier.positioning}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Link
            href={home.packagesTeaser.ctaHref}
            className="group mt-12 inline-flex items-center gap-3 border border-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-white"
          >
            {home.packagesTeaser.ctaLabel}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Section>

      {/* Landowner CTA */}
      <Section id="landowner-cta" tone="ink">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow={home.landownerCta.eyebrow}
            title={home.landownerCta.title}
            body={home.landownerCta.body}
            tone="light"
          />
          <Reveal delay={0.1}>
            <Link
              href={home.landownerCta.ctaHref}
              className="group mt-12 inline-flex items-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-white/85"
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
    </>
  );
}
