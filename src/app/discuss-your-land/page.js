import LandownerForm from "@/components/landowner-form";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/content/site";

export const metadata = {
  title: "Discuss Your Land",
  description:
    "Tell us about your land and our team will prepare an initial development concept for discussion.",
};

export default function DiscussYourLandPage() {
  const { contact } = site;

  return (
    <>
      <Section id="discuss-hero" tone="mist">
        <SectionHeading
          eyebrow="The Next Step"
          title="Your land has potential. Let us show you what it can become."
          body="Before asking you to commit to construction, we first understand your land and objectives. Our team can then prepare an initial development concept for discussion."
        />
      </Section>

      <Section id="landowner-form">
        <div className="grid gap-16 lg:grid-cols-[1fr_20rem]">
          <div>
            <h2 className="text-2xl font-bold">Tell us about your land</h2>
            <p className="mt-3 text-slate">
              Share the details below and we will come back to you.
            </p>
            <div className="mt-10">
              <LandownerForm />
            </div>
          </div>

          <aside className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h2 className="eyebrow">Prefer to talk?</h2>
            {/* TODO(content): fill site.contact in src/content/site.js */}
            <ul className="mt-6 space-y-3 text-sm">
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}
              {contact.addressLines.map((line) => (
                <li key={line} className="text-slate">
                  {line}
                </li>
              ))}
              {!contact.phone && !contact.email && (
                <li className="text-slate">Contact details pending.</li>
              )}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
