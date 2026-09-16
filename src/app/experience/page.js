import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHero from "@/components/page-hero";
import ProjectCard from "@/components/project-card";
import Reveal from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { experience } from "@/content/experience";
import { primaryCta } from "@/content/site";

export const metadata = {
  title: "Experience",
  description:
    "The Ray White Ltd. development experience behind BuildPlus — selected residential and commercial developments in Bashundhara R/A and Jolshiri Abashon.",
};

export default function ExperiencePage() {
  const { buildPlusProjects, rayWhiteDevelopments } = experience;
  const projects = rayWhiteDevelopments.projects;

  return (
    <>
      <PageHero
        eyebrow={experience.hero.eyebrow}
        title={experience.hero.title}
        body={experience.hero.body}
      />

      {/* Development Experience Behind BuildPlus */}
      <Section id="development-experience">
        <SectionHeading
          eyebrow={rayWhiteDevelopments.eyebrow}
          title={rayWhiteDevelopments.title}
          body={rayWhiteDevelopments.intro}
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.08} className="h-full">
              <ProjectCard
                project={project}
                developerLabel={rayWhiteDevelopments.developerLabel}
                developer={rayWhiteDevelopments.developer}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* BuildPlus Projects — nothing contracted directly yet, and we say so. */}
      <Section id="buildplus-projects" tone="ink">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow={buildPlusProjects.eyebrow}
            title={buildPlusProjects.title}
            body={buildPlusProjects.body}
            tone="light"
          />

          <Reveal delay={0.1}>
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-white/85"
            >
              Be one of the first
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
