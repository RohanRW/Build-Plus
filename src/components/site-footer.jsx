import Link from "next/link";

import Logo from "@/components/logo";
import { nav, primaryCta, site } from "@/content/site";

export default function SiteFooter() {
  const { contact, social } = site;
  const socialLinks = Object.entries(social).filter(([, href]) => href);

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
            {/* TODO(content): fill site.contact in src/content/site.js */}
            <ul className="mt-6 space-y-3 text-sm">
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition hover:text-white">
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="transition hover:text-white">
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              {contact.hours && <li>{contact.hours}</li>}
              {!contact.phone && !contact.email && contact.addressLines.length === 0 && (
                <li className="text-white/40">Contact details pending.</li>
              )}
            </ul>

            {socialLinks.length > 0 && (
              <ul className="mt-6 flex gap-4 text-sm">
                {socialLinks.map(([name, href]) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="capitalize transition hover:text-white"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-xs text-white/50">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
