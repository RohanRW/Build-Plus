import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";

import LandownerForm from "@/components/landowner-form";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { Section } from "@/components/section";
import { PACKAGE_OPTIONS } from "@/lib/landowner-schema";
import { site, whatsappUrl } from "@/content/site";

export const metadata = {
  title: "Discuss Your Land",
  description:
    "Have land you are considering developing? Share the basic details and the BuildPlus team will begin with an initial development discussion.",
};

/** Matches ?package=premium from the Packages page. */
function resolvePackage(value) {
  if (typeof value !== "string") return "";
  return (
    PACKAGE_OPTIONS.find(
      (option) => option.toLowerCase() === value.toLowerCase(),
    ) || ""
  );
}

/** What happens after the form is sent — set expectations, don't promise dates. */
const NEXT_STEPS = [
  {
    number: "01",
    name: "We call you back",
    body: "A member of the development team contacts you to understand the land and your objectives.",
  },
  {
    number: "02",
    name: "We assess the land",
    body: "Location, size, access and development potential are reviewed against what you want to achieve.",
  },
  {
    number: "03",
    name: "We prepare a concept",
    body: "An initial development concept is prepared for discussion — before you commit to construction.",
  },
];

export default async function DiscussYourLandPage({ searchParams }) {
  const params = await searchParams;
  const initialPackage = resolvePackage(params?.package);
  const { contact, social } = site;

  return (
    <>
      <PageHero
        eyebrow="The Next Step"
        title="Let's discuss your land"
        body="Have land you are considering developing? Share the basic details with our team and we can begin with an initial development discussion."
      />

      <Section id="landowner-form">
        <div className="grid gap-16 lg:grid-cols-[1fr_21rem]">
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Tell us about your land
              </h2>
              <p className="mt-3 text-slate">
                Six fields. No obligation, and no site visit required to start.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <LandownerForm initialPackage={initialPackage} />
            </Reveal>
          </div>

          <Reveal
            as="aside"
            delay={0.15}
            className="h-fit border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          >
            <h2 className="eyebrow">Contact BuildPlus</h2>

            <dl className="mt-7 space-y-6 text-sm">
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={contact.phoneHref}
                    className="text-slate transition hover:text-ink"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all text-slate transition hover:text-ink"
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
                    <p className="pt-1">
                      <a
                        href={contact.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-ink underline underline-offset-4"
                      >
                        <MapPin size={14} />
                        {contact.mapsLabel}
                      </a>
                    </p>
                  )}
                </dd>
              </div>

              {contact.hours && (
                <div>
                  <dt className="font-semibold text-ink">Hours</dt>
                  <dd className="mt-1 text-slate">{contact.hours}</dd>
                </div>
              )}

              {social.map((profile) => (
                <div key={profile.name}>
                  <dt className="font-semibold text-ink">{profile.name}</dt>
                  <dd className="mt-1">
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-slate underline underline-offset-4 transition hover:text-ink"
                    >
                      {profile.label}
                      <ArrowUpRight size={13} />
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
                className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-ink px-6 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-white"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
            )}
          </Reveal>
        </div>
      </Section>

      {/* What happens next */}
      <Section id="what-happens-next" tone="mist" size="tight">
        <h2 className="eyebrow">What happens next</h2>
        <ol className="mt-10 grid gap-px bg-line sm:grid-cols-3">
          {NEXT_STEPS.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 0.08}
              className="bg-mist p-7"
            >
              <p className="text-3xl font-extrabold text-line">{step.number}</p>
              <h3 className="mt-3 text-lg font-bold">{step.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
