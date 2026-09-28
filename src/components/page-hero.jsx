import { ArrowUpRight } from "lucide-react";

import { LogoMark } from "@/components/logo";
import Reveal from "@/components/reveal";

/**
 * The opening band on every page other than the home page. Dark, so the
 * header has something to sit against and the pages share one entrance.
 *
 * Themed entirely through the --section-* tokens (via the "ink" tone,
 * same as any other dark Section) plus its own --page-title-size, since
 * it's the largest heading on the page. Carries id="page-title" so it can
 * be overridden per page — see src/app/colors.css.
 *
 * `cta` is optional — an outbound/secondary link shown under the body copy
 * (e.g. linking out to a partner site). Most pages don't pass it.
 */
export default function PageHero({ eyebrow, title, body, note, cta }) {
  return (
    <section
      id="page-title"
      className="tone-ink relative isolate overflow-hidden bg-[var(--section-bg)] text-[var(--section-heading-color)]"
    >
      {/* The mark, oversized and barely there, as a background texture. */}
      <LogoMark
        variant="light"
        className="pointer-events-none absolute -right-10 top-1/2 hidden h-[26rem] w-auto -translate-y-1/2 opacity-[0.06] sm:block"
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p
              className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--section-accent-color)]"
              style={{ fontFamily: "var(--section-body-font)" }}
            >
              <span aria-hidden="true" className="h-px w-8 bg-[var(--section-accent-color)]" />
              {eyebrow}
            </p>
          )}
          <h1
            className="mt-6 leading-[0.94] tracking-tight text-[var(--section-heading-color)] uppercase"
            style={{
              fontFamily: "var(--section-heading-font)",
              fontSize: "var(--page-title-size)",
              fontWeight: "var(--section-heading-weight)",
            }}
          >
            {title}
          </h1>
          {body && (
            <p
              className="mt-7 leading-relaxed text-[var(--section-body-color)]"
              style={{
                fontFamily: "var(--section-body-font)",
                fontSize: "var(--section-body-size)",
                fontWeight: "var(--section-body-weight)",
              }}
            >
              {body}
            </p>
          )}
          {cta && (
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 border border-[var(--section-border-color)] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--section-heading-color)] transition-colors duration-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              {cta.label}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}
          {note && (
            <p
              className="mt-8 border-l-2 pl-6 text-sm"
              style={{
                borderColor: "var(--section-border-color)",
                color: "var(--section-body-color)",
              }}
            >
              {note}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
