import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import Logo from "@/components/logo";
import { nav, primaryCta, site, whatsappUrl } from "@/content/site";

export default function SiteFooter() {
  const { contact, social } = site;

  return (
    <footer className="mt-auto bg-black text-white/70">
      {/* Closing call to action */}

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo variant="light" className="h-9" />
            <p className="mt-6 text-sm">A {site.parent} venture.</p>
            {contact.hours && (
              <p className="mt-2 text-sm text-white/45">{contact.hours}</p>
            )}
          </div>

          <div>
            <h2 className="eyebrow !text-white/45">Explore</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {[...nav, primaryCta].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow !text-white/45">Contact</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-white/40" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-white/40" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/55">
                <MapPin size={15} className="mt-0.5 shrink-0 text-white/40" />
                <span>
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em]">
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

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
