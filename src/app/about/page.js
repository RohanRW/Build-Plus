import Image from "next/image";

import { Section, SectionHeading } from "@/components/section";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { about } from "@/content/about";
import { home } from "@/content/home";

export const metadata = {
  title: "About Us",
  description:
    "Build Plus is a development partner for landowners, backed by the team behind Ray White Ltd.'s luxury-development experience.",
};

export default function AboutPage() {
  return (
    <div className="page-about">
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        body={about.hero.body}
      />

      {/* Who We Are */}
      <Section id="who-we-are">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow={about.whoWeAre.eyebrow}
            title={about.whoWeAre.title}
          />

          <Reveal delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-slate sm:text-lg">
              {about.whoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="eyebrow mt-10">{about.whoWeAre.established}</p>
          </Reveal>
        </div>
      </Section>

      {/* Our Purpose */}
      <Section id="our-purpose" tone="ink">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 !text-white/60">
            <span aria-hidden="true" className="h-px w-8 bg-white/40" />
            {about.purpose.eyebrow}
          </p>
          <p className="mt-8 max-w-4xl text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            {about.purpose.body}
          </p>
        </Reveal>
      </Section>

      {/* Our Approach */}
      <Section id="our-approach" tone="white">
        <SectionHeading
          eyebrow={about.ourApproach.eyebrow}
          title={about.ourApproach.title}
        />
        <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {about.ourApproach.principles.map((principle, index) => (
            <Reveal
              key={principle.name}
              delay={(index % 3) * 0.08}
              className="group bg-white p-7 transition-colors duration-300 hover:bg-secondary"
            >
              <h3 className="text-lg font-bold group-hover:text-white">
                {principle.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate group-hover:text-white">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why BuildPlus Exists */}
      <Section id="why-buildplus-exists">
        <SectionHeading
          eyebrow={about.whyWeExist.eyebrow}
          title={about.whyWeExist.title}
        />
        <Reveal delay={0.1}>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-relaxed text-slate sm:text-lg">
            {about.whyWeExist.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 border-l-2 border-ink pl-8">
          <h3 className="text-2xl font-extrabold sm:text-3xl">
            {about.whyWeExist.ownership.title}
          </h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate">
            {about.whyWeExist.ownership.body}
          </p>
        </Reveal>
      </Section>

      {/* Our Development Approach — the eight phases */}
      <Section id="development-approach" tone="white">
        <SectionHeading
          eyebrow={about.approach.eyebrow}
          title={about.approach.title}
          body={about.approach.intro}
        />
        <ol className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {home.howItWorks.phases.map((phase, index) => (
            <Reveal
              as="li"
              key={phase.number}
              delay={(index % 4) * 0.08}
              className="group bg-white p-7 transition-colors duration-300 hover:bg-secondary"
            >
              <p className="text-3xl font-extrabold text-line group-hover:text-white">
                {phase.number}
              </p>
              <h3 className="mt-3 text-lg font-bold group-hover:text-white">
                {phase.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate group-hover:text-white">
                {phase.summary}
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* A Ray White Ltd. Venture */}
      <Section id="ray-white-venture">
        <SectionHeading
          eyebrow={about.rayWhiteVenture.eyebrow}
          title={about.rayWhiteVenture.title}
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <Reveal delay={0.1}>
            <div className="max-w-3xl space-y-6 text-base leading-relaxed text-slate sm:text-lg">
              {about.rayWhiteVenture.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="shrink-0">
            <div className="inline-flex bg-canvas p-6">
              <Image
                src="/RayWhiteLogo.png"
                alt="Ray White Ltd. Real Estate"
                width={2160}
                height={2160}
                className="h-28 w-28 object-contain sm:h-32 sm:w-32"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Our Commitment */}
      <Section id="our-commitment">
        <SectionHeading
          eyebrow={about.commitment.eyebrow}
          title={about.commitment.title}
          body={about.commitment.intro}
        />

        <Reveal
          as="ul"
          delay={0.1}
          className="mt-10 flex flex-wrap gap-3"
        >
          {about.commitment.values.map((value) => (
            <li
              key={value}
              className="border border-ink/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink"
            >
              {value}
            </li>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-px bg-line sm:grid-cols-2">
          {about.commitment.gains.map((gain, index) => (
            <Reveal
              key={gain.name}
              delay={(index % 2) * 0.08}
              className="group bg-white p-7 transition-colors duration-300 hover:bg-secondary"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-white">
                {gain.name}
              </h3>
              <p className="mt-3 leading-relaxed text-slate group-hover:text-white">
                {gain.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
