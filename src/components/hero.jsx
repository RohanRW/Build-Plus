import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroSlider from "@/components/hero-slider";
import { home } from "@/content/home";

/**
 * The capability strip alternates theme once per complete
 * Feasibility→Handover cycle. Rendered as FOUR copies of the list (two
 * full [light, navy] pairs) rather than two — with only two copies, the
 * loop point (where the track jumps from -50% back to 0%) would land
 * on a color mismatch and visibly cut; duplicating the pair once more
 * means the loop always reconnects two identically-themed copies, so the
 * alternation reads as continuous and infinite with no seam.
 */
const MARQUEE_CYCLES = [
  { bg: "var(--hero-strip-bg)", fg: "var(--hero-strip-text)" },
  { bg: "var(--hero-strip-bg-alt)", fg: "var(--hero-strip-text-alt)" },
];

/**
 * Home hero: copy on the left, a layered media slider on the right, and
 * the capability strip underneath.
 *
 * Every color and font here reads from the --hero-* tokens in
 * src/app/colors.css, which are deliberately independent of the site's
 * general brand/role theme tokens — edit the --hero-* block to restyle it.
 * The decorative layers are aria-hidden and mostly drop out on small
 * screens.
 */
export default function Hero() {
  const { hero, capabilities } = home;
  const lastCapability = capabilities.length - 1;

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[var(--hero-bg)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 -z-10 hidden aspect-square w-[48rem] rounded-full bg-[var(--hero-shape)] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-1/3 -z-10 hidden aspect-square w-[28rem] rounded-full bg-[var(--hero-shape)] opacity-60 xl:block"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[47fr_53fr] lg:gap-10 lg:py-20">
        {/* Copy */}
        <div className="max-w-xl" style={{ fontFamily: "var(--hero-font-family)" }}>
          <p
            className="rise flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--hero-title-color)]"
            style={{ "--rise-delay": "0.05s" }}
          >
            <span aria-hidden="true" className="h-px w-10 bg-[var(--hero-accent-color)]" />
            {hero.eyebrow}
          </p>

          <h1
            className="rise mt-6 uppercase leading-[0.98] tracking-tight text-[var(--hero-title-color)]"
            style={{
              "--rise-delay": "0.15s",
              fontSize: "var(--hero-title-size)",
              fontWeight: "var(--hero-font-weight)",
            }}
          >
            <span className="block">{hero.title.lead}</span>
            <span className="block">
              <span className="text-[var(--hero-title-accent)]">{hero.title.accent}</span>
              {hero.title.end}
            </span>
          </h1>

          <p
            className="rise mt-7 max-w-lg leading-relaxed text-[var(--hero-body-color)]"
            style={{ "--rise-delay": "0.28s", fontSize: "var(--hero-text-size)" }}
          >
            {hero.body}
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-3"
            style={{ "--rise-delay": "0.4s" }}
          >
            <Link
              href={home.landownerCta.ctaHref}
              className="group inline-flex items-center gap-3 bg-[var(--hero-button-bg)] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--hero-button-text)] shadow-[0_14px_28px_-14px_rgba(22,43,78,0.7)] transition hover:bg-[var(--hero-button-hover)]"
            >
              {home.landownerCta.ctaLabel}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={hero.secondaryCtaHref}
              className="inline-flex items-center border border-[var(--hero-title-color)] bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--hero-title-color)] transition hover:border-[var(--hero-accent-color)] hover:bg-[var(--hero-accent-color)] hover:text-white"
            >
              {hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>

        {/* Layered image composition */}
        <div className="rise relative" style={{ "--rise-delay": "0.3s" }}>
          <div className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute left-[12%] top-0 h-1/2 w-2/5 rounded-lg bg-[var(--hero-accent-color)] opacity-80" />
              <div className="absolute bottom-0 left-[22%] hidden h-1/3 w-1/3 rounded-lg bg-[var(--hero-accent-color)] opacity-60 sm:block" />
              <div className="absolute bottom-[4%] left-[10%] right-0 top-[6%] rounded-xl bg-[var(--hero-panel)]" />
              <div className="absolute -right-2 bottom-[-1%] left-[2%] top-[2%] hidden -rotate-2 rounded-xl border border-[var(--hero-accent-color)] opacity-70 sm:block" />
              <div
                className="absolute -top-3 left-[2%] hidden h-16 w-24 opacity-60 sm:block"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--hero-accent-color) 1.5px, transparent 1.6px)",
                  backgroundSize: "14px 14px",
                }}
              />
              <svg
                viewBox="0 0 300 200"
                fill="none"
                className="absolute -bottom-10 left-0 hidden w-1/2 lg:block"
              >
                <path
                  d="M290 196C150 196 20 150 6 30"
                  stroke="var(--hero-accent-color)"
                  strokeWidth="1"
                  opacity="0.7"
                />
              </svg>
            </div>

            <div className="relative px-3 pb-6 pt-5 sm:pb-12 sm:pl-10 sm:pr-6 sm:pt-10 lg:pl-12">
              <HeroSlider slides={hero.slides} />
            </div>
          </div>
        </div>
      </div>

      {/* Capability strip */}
      <div className="marquee border-y border-[var(--hero-border)]">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((copy) => {
            const cycle = MARQUEE_CYCLES[copy % 2];
            return (
              <ul
                key={copy}
                aria-hidden={copy !== 0}
                className="flex shrink-0 items-center gap-10 py-4 pl-20 pr-20 text-[0.68rem] font-semibold uppercase tracking-[0.24em]"
                style={{ backgroundColor: cycle.bg, color: cycle.fg }}
              >
                {/* The last step closes the process, so it gets no divider.
                    Each cycle carries half the gap on either end (pl-20 +
                    pr-20 = the old pr-40 total) so the color boundary sits
                    at the gap's midpoint — Handover stays fully in its own
                    theme, and the new theme starts before Feasibility
                    appears, without shifting either item's position. */}
                {capabilities.map((item, index) => (
                  <li key={item} className="flex items-center gap-10">
                    <span>{item}</span>
                    {index < lastCapability && (
                      <span
                        aria-hidden="true"
                        className="h-3 w-px opacity-40"
                        style={{ backgroundColor: "currentColor" }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
}
