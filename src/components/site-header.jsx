"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import Logo from "@/components/logo";
import { nav, primaryCta } from "@/content/site";

/**
 * Sticky header. Tightens as soon as the page scrolls, and turns navy once
 * the page's opening band (the home hero, or the page-title band on inner
 * pages) has scrolled out from under it.
 *
 * Reads its colors and type from the --header-* tokens in
 * src/app/colors.css, which are deliberately independent of the site's
 * general brand/role theme tokens. The navy palette is the
 * .header-scrolled block there.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setOpen(false);

  // Re-runs per route so the state is right after navigating between pages.
  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 24);
      const header = headerRef.current;
      const band =
        document.getElementById("hero") ?? document.getElementById("page-title");
      setScrolled(
        band && header
          ? band.getBoundingClientRect().bottom <= header.offsetHeight
          : window.scrollY > (header?.offsetHeight ?? 0),
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`${scrolled ? "header-scrolled" : ""} sticky top-0 z-50 border-b border-[var(--header-border)] bg-[var(--header-bg)] shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur transition-[background-color,border-color] duration-300`}
      style={{
        fontFamily: "var(--header-font-family)",
        fontSize: "var(--header-font-size)",
        fontWeight: "var(--header-font-weight)",
      }}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-[padding] duration-300 sm:px-6 ${
          compact ? "py-3" : "py-5"
        }`}
      >
        <Logo
          priority
          crossfade
          variant={scrolled ? "light" : "dark"}
          className={`transition-[height] duration-300 ${compact ? "h-8" : "h-10 sm:h-11"}`}
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
                className={`relative whitespace-nowrap py-1 uppercase tracking-[0.16em] transition-colors duration-300 ${
                  active
                    ? "text-[var(--header-active)]"
                    : "text-[var(--header-nav)] hover:text-[var(--header-hover)]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[var(--header-active)] transition-[transform,background-color] duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href={primaryCta.href}
            className={`group inline-flex items-center gap-2 whitespace-nowrap bg-[var(--header-text)] px-6 py-3 uppercase tracking-[0.14em] text-[var(--header-bg)] transition-colors duration-300 hover:bg-[var(--header-hover)] ${
              scrolled ? "hover:text-white" : ""
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
          className="text-[var(--header-text)] transition-colors duration-300 xl:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-[var(--header-border)] bg-[var(--header-bg)] xl:hidden"
          style={{ fontFamily: "var(--header-font-family)" }}
        >
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[var(--header-border)] py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--header-text)]"
              >
                {item.label}
                <ArrowRight size={16} className="text-[var(--header-nav)]" />
              </Link>
            ))}

            <Link
              href={primaryCta.href}
              onClick={closeMenu}
              className="my-4 bg-[var(--header-text)] px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--header-bg)]"
            >
              {primaryCta.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
