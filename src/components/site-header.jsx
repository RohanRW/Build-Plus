"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";

import Logo from "@/components/logo";
import { nav, primaryCta, site } from "@/content/site";

/**
 * The header sits transparent over the home hero and turns solid as soon as
 * the page scrolls. Every other page gets the solid treatment immediately,
 * because there is no dark hero behind it.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setOpen(false);

  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overHero && !scrolled && !open;

  return (
    <header
      className={`${
        overHero ? "fixed inset-x-0 top-0" : "sticky top-0"
      } z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        transparent
          ? "border-b border-white/10 bg-transparent"
          : "border-b border-line bg-canvas/95 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Logo
          priority
          variant={transparent ? "light" : "dark"}
          className={`transition-all duration-300 ${scrolled ? "h-8" : "h-10 sm:h-11"}`}
        />

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Primary">
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
                className={`relative whitespace-nowrap py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition ${
                  transparent
                    ? active
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                    : active
                      ? "text-ink"
                      : "text-slate hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left transition-transform duration-300 ${
                    transparent ? "bg-white" : "bg-ink"
                  } ${active ? "scale-x-100" : "scale-x-0"}`}
                />
              </Link>
            );
          })}

          <a
            href={site.contact.phoneHref}
            className={`flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.08em] transition ${
              transparent ? "text-white/65 hover:text-white" : "text-slate hover:text-ink"
            }`}
          >
            <Phone size={13} />
            {site.contact.phone}
          </a>

          <Link
            href={primaryCta.href}
            className={`group inline-flex items-center gap-2 whitespace-nowrap px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.14em] transition ${
              transparent
                ? "bg-white text-ink hover:bg-white/85"
                : "bg-ink text-white hover:bg-charcoal"
            }`}
          >
            {primaryCta.label}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`xl:hidden ${transparent ? "text-white" : "text-ink"}`}
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
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-line py-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink"
              >
                {item.label}
                <ArrowRight size={16} className="text-slate" />
              </Link>
            ))}
            <a
              href={site.contact.phoneHref}
              onClick={closeMenu}
              className="flex items-center gap-2 border-b border-line py-4 text-sm font-medium text-slate"
            >
              <Phone size={15} />
              {site.contact.phone}
            </a>
            <Link
              href={primaryCta.href}
              onClick={closeMenu}
              className="my-4 bg-ink px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              {primaryCta.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
