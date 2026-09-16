"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "@/components/logo";
import { nav, primaryCta } from "@/content/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap text-xs font-medium uppercase tracking-[0.1em] transition hover:text-ink ${
                  active ? "text-ink" : "text-slate"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={primaryCta.href}
            className="whitespace-nowrap bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-charcoal"
          >
            {primaryCta.label}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="xl:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-line bg-canvas xl:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-line py-4 text-sm font-medium uppercase tracking-[0.12em] text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={primaryCta.href}
              onClick={closeMenu}
              className="my-4 bg-ink px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white"
            >
              {primaryCta.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
