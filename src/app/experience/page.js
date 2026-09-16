import { ContentPending, Section, SectionHeading } from "@/components/section";
import ProjectCard from "@/components/project-card";
import { experience } from "@/content/experience";

export const metadata = {
  title: "Experience",
  description:
    "The Ray White Ltd. development experience behind BuildPlus — selected residential and commercial developments in Bashundhara R/A and Jolshiri Abashon.",
};

export default function ExperiencePage() {
  const { buildPlusProjects, rayWhiteDevelopments } = experience;

  return (
    <>
      <Section id="experience-hero" tone="mist">
        <SectionHeading
          eyebrow={experience.hero.eyebrow}
          title={experience.hero.title}
          body={experience.hero.body}
        />
      </Section>

      {/* BuildPlus Projects — no projects contracted directly yet. */}
      <Section id="buildplus-projects">
        <SectionHeading
          eyebrow={buildPlusProjects.eyebrow}
          title={buildPlusProjects.title}
          body={buildPlusProjects.body}
        />
      </Section>

      {/* Development Experience Behind BuildPlus */}
      <Section id="development-experience" tone="mist">
        <SectionHeading
          eyebrow={rayWhiteDevelopments.eyebrow}
          title={rayWhiteDevelopments.title}
          body={rayWhiteDevelopments.intro}
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rayWhiteDevelopments.projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              developerLabel={rayWhiteDevelopments.developerLabel}
              developer={rayWhiteDevelopments.developer}
            />
          ))}
        </div>

        <ContentPending
          label="Project imagery"
          needs={[
            "Ray White renders and construction photographs for each of the six developments",
            "Drop files in /public/images/projects/<project-slug>/ and list them in src/content/experience.js",
            "Building configuration for Rivano, if it is on record",
          ]}
        />
      </Section>
    </>
  );
}
