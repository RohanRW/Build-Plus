import { ContentPending, Section, SectionHeading } from "@/components/section";
import { about } from "@/content/about";
import { home } from "@/content/home";

export const metadata = {
  title: "About Us",
  description:
    "BuildPlus is a development partner for landowners, backed by the team behind Ray White Ltd.'s luxury-development experience.",
};

export default function AboutPage() {
  return (
    <>
      <Section id="about-hero" tone="mist">
        <SectionHeading
          eyebrow={about.hero.eyebrow}
          title={about.hero.title}
          body={about.hero.body}
        />
      </Section>

      {/* Who We Are */}
      <Section id="who-we-are">
        <SectionHeading
          eyebrow={about.whoWeAre.eyebrow}
          title={about.whoWeAre.title}
        />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-slate">
          {about.whoWeAre.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 eyebrow">{about.whoWeAre.established}</p>
      </Section>

      {/* Our Purpose */}
      <Section id="our-purpose" tone="ink">
        <p className="eyebrow !text-white/60">{about.purpose.eyebrow}</p>
        <p className="mt-6 max-w-4xl text-3xl font-bold leading-snug text-white sm:text-4xl">
          {about.purpose.body}
        </p>
      </Section>

      {/* Our Approach */}
      <Section id="our-approach">
        <SectionHeading
          eyebrow={about.ourApproach.eyebrow}
          title={about.ourApproach.title}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {about.ourApproach.principles.map((principle) => (
            <div key={principle.name} className="border-t-2 border-ink pt-6">
              <h3 className="text-lg font-bold">{principle.name}</h3>
              <p className="mt-3 leading-relaxed text-slate">{principle.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership & Professional Team */}
      <Section id="leadership" tone="mist">
        <SectionHeading
          eyebrow={about.leadership.eyebrow}
          title={about.leadership.title}
          body={about.leadership.body}
        />

        {about.leadership.people.length > 0 && (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {about.leadership.people.map((person) => (
              <article key={person.name} className="border-t-2 border-ink pt-6">
                <h3 className="text-lg font-bold">{person.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.12em] text-slate">
                  {person.role}
                </p>
                {person.bio && (
                  <p className="mt-4 text-sm leading-relaxed text-slate">
                    {person.bio}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </Section>

      {/* Why BuildPlus Exists */}
      <Section id="why-buildplus-exists">
        <SectionHeading
          eyebrow={about.whyWeExist.eyebrow}
          title={about.whyWeExist.title}
        />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-slate">
          {about.whyWeExist.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-ink pl-8">
          <h3 className="text-2xl font-bold">{about.whyWeExist.ownership.title}</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate">
            {about.whyWeExist.ownership.body}
          </p>
        </div>
      </Section>

      {/* A Ray White Ltd. Venture */}
      <Section id="ray-white-venture" tone="mist">
        <SectionHeading
          eyebrow={about.rayWhiteVenture.eyebrow}
          title={about.rayWhiteVenture.title}
        />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-slate">
          {about.rayWhiteVenture.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ContentPending
          label="Ray White Ltd. branding"
          needs={[
            "Whether the Ray White Ltd. logo should appear alongside ours, and the logo file",
          ]}
        />
      </Section>

      {/* Our Development Approach */}
      <Section id="development-approach">
        <SectionHeading
          eyebrow={about.approach.eyebrow}
          title={about.approach.title}
          body={about.approach.intro}
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
      </Section>

      {/* Our Commitment */}
      <Section id="our-commitment" tone="mist">
        <SectionHeading
          eyebrow={about.commitment.eyebrow}
          title={about.commitment.title}
          body={about.commitment.intro}
        />
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-display text-xl font-bold uppercase">
          {about.commitment.values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {about.commitment.gains.map((gain) => (
            <div key={gain.name} className="border-t border-line pt-6">
              <h3 className="text-lg font-bold">{gain.name}</h3>
              <p className="mt-3 leading-relaxed text-slate">{gain.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
