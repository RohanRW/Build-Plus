import Link from "next/link";

import Logo from "@/components/logo";
import { nav, primaryCta, site, whatsappUrl } from "@/content/site";

export default function SiteFooter() {
  const { contact, social } = site;

  return (
    <footer className="mt-auto bg-ink text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-6 text-sm">A {site.parent} venture.</p>
            <p className="mt-2 text-sm">{site.subTagline}</p>
          </div>

          <div>
            <h2 className="eyebrow !text-white/50">Explore</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {[...nav, primaryCta].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow !text-white/50">Contact</h2>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={contact.phoneHref} className="transition hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition hover:text-white">
                  {contact.email}
                </a>
              </li>
              {contact.addressLines.map((line) => (
                <li key={line} className="text-white/60">
                  {line}
                </li>
              ))}
              {contact.hours && <li className="text-white/60">{contact.hours}</li>}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {contact.mapsUrl && (
                <li>
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    {contact.mapsLabel}
                  </a>
                </li>
              )}
              {whatsappUrl && (
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {social.map((profile) => (
                <li key={profile.name}>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    {profile.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-xs text-white/50">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
