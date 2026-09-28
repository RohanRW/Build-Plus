import PageHero from "@/components/page-hero";
import ProjectCard from "@/components/project-card";
import Reveal from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { experience } from "@/content/experience";

export const metadata = {
  title: "Experience",
  description:
    "The Ray White Ltd. development experience behind BuildPlus — selected residential and commercial developments in Bashundhara R/A and Jolshiri Abashon.",
};

export default function ExperiencePage() {
  const { rayWhiteDevelopments } = experience;
  const projects = rayWhiteDevelopments.projects;

  return (
    <div className="page-experience">
      <PageHero
        eyebrow={experience.hero.eyebrow}
        title={experience.hero.title}
        body={experience.hero.body}
        cta={{ label: "Visit Ray White Ltd.", href: "https://raywhiteltd.com/" }}
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
    </div>
  );
}
