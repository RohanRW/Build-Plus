import LandownerForm from "@/components/landowner-form";
import { Section, SectionHeading } from "@/components/section";
import { STANDARD_OPTIONS } from "@/lib/landowner-schema";
import { site, whatsappUrl } from "@/content/site";

export const metadata = {
  title: "Discuss Your Land",
  description:
    "Have land you are considering developing? Share the basic details and the BuildPlus team will begin with an initial development discussion.",
};

/** Matches ?standard=premium from the Development Standards page. */
function resolveStandard(value) {
  if (typeof value !== "string") return "";
  return (
    STANDARD_OPTIONS.find(
      (option) => option.toLowerCase() === value.toLowerCase(),
    ) || ""
  );
}

export default async function DiscussYourLandPage({ searchParams }) {
  const params = await searchParams;
  const initialStandard = resolveStandard(params?.standard);
  const { contact, social } = site;

  return (
    <>
      <Section id="discuss-hero" tone="mist">
        <SectionHeading
          eyebrow="The Next Step"
          title="Let's discuss your land"
          body="Have land you are considering developing? Share the basic details with our team and we can begin with an initial development discussion."
        />
      </Section>

      <Section id="landowner-form">
        <div className="grid gap-16 lg:grid-cols-[1fr_22rem]">
          <div>
            <h2 className="text-2xl font-bold">Tell us about your land</h2>
            <p className="mt-3 text-slate">
              Share the details below and we will come back to you.
            </p>
            <div className="mt-10">
              <LandownerForm initialStandard={initialStandard} />
            </div>
          </div>

          <aside className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="eyebrow">Contact BuildPlus</h2>

            <dl className="mt-6 space-y-6 text-sm">
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1">
                  <a href={contact.phoneHref} className="text-slate transition hover:text-ink">
                    {contact.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-slate transition hover:text-ink"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-ink">Office</dt>
                <dd className="mt-1 space-y-1 text-slate">
                  {contact.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  {contact.mapsUrl && (
                    <p>
                      <a
                        href={contact.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 transition hover:text-ink"
                      >
                        {contact.mapsLabel}
                      </a>
                    </p>
                  )}
                </dd>
              </div>

              {social.map((profile) => (
                <div key={profile.name}>
                  <dt className="font-semibold text-ink">{profile.name}</dt>
                  <dd className="mt-1">
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate underline underline-offset-4 transition hover:text-ink"
                    >
                      {profile.label}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full justify-center border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-white"
              >
                Chat on WhatsApp
              </a>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}
