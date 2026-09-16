import { ContentPending, Section, SectionHeading } from "@/components/section";
import { experience } from "@/content/experience";

export const metadata = {
  title: "Experience",
  description:
    "Projects delivered by BuildPlus and selected developments from Ray White Ltd.",
};

const PROJECT_NEEDS = [
  "Project name and location",
  "Type — Residential / Commercial / Mixed Use",
  "Land area and approximate built-up area",
  "Number of floors (e.g. Basement + Ground + 8)",
  "Year and status — completed / ongoing / upcoming",
  "A one-line description",
  "At least one photograph or render per project",
];

function ProjectGrid({ projects }) {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article key={project.slug} className="border border-line">
          <div className="aspect-[4/3] bg-mist" />
          <div className="p-6">
            <p className="eyebrow">{project.type}</p>
            <h3 className="mt-3 text-lg font-bold">{project.name}</h3>
            <p className="mt-1 text-sm text-slate">{project.location}</p>
            <dl className="mt-4 space-y-1 text-sm text-slate">
              {project.builtUpArea && (
                <div className="flex justify-between gap-4">
                  <dt>Built-up area</dt>
                  <dd className="text-ink">{project.builtUpArea}</dd>
                </div>
              )}
              {project.floors && (
                <div className="flex justify-between gap-4">
                  <dt>Floors</dt>
                  <dd className="text-ink">{project.floors}</dd>
                </div>
              )}
              {project.status && (
                <div className="flex justify-between gap-4">
                  <dt>Status</dt>
                  <dd className="text-ink">{project.status}</dd>
                </div>
              )}
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
}

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

      {/* BuildPlus Projects */}
      <Section id="buildplus-projects">
        <SectionHeading
          eyebrow={buildPlusProjects.eyebrow}
          title={buildPlusProjects.title}
          body={buildPlusProjects.intro}
        />
        {buildPlusProjects.projects.length > 0 ? (
          <ProjectGrid projects={buildPlusProjects.projects} />
        ) : (
          <ContentPending label="BuildPlus projects" needs={PROJECT_NEEDS} />
        )}
      </Section>

      {/* Selected Ray White Ltd. Developments */}
      <Section id="ray-white-developments" tone="mist">
        <SectionHeading
          eyebrow={rayWhiteDevelopments.eyebrow}
          title={rayWhiteDevelopments.title}
          body={rayWhiteDevelopments.intro}
        />
        {rayWhiteDevelopments.projects.length > 0 ? (
          <ProjectGrid projects={rayWhiteDevelopments.projects} />
        ) : (
          <ContentPending
            label="Ray White Ltd. developments"
            needs={[
              ...PROJECT_NEEDS,
              "Confirmation that these may be shown under the Ray White Ltd. name",
            ]}
          />
        )}
      </Section>
    </>
  );
}
