import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { home } from "@/content/home";

/**
 * Home hero.
 *
 * A muted, looping background video sits behind a black scrim. The video
 * element's own poster carries the frame until playback starts, and the
 * stylesheet drops the video entirely for visitors who prefer reduced
 * motion — so no JavaScript is involved in either case, and the headline
 * is readable the moment the HTML lands.
 *
 * Every color and font here reads from the --hero-* tokens in
 * src/app/colors.css, which are deliberately independent of the site's
 * general brand/role theme tokens — recoloring global body text never
 * touches this component; edit the --hero-* block instead.
 */
export default function Hero() {
  const { hero, capabilities } = home;

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-[var(--hero-bg)] text-[var(--hero-body-color)]"
    >
      {/* Poster + video */}
      <div
        className="hero-media hero-drift absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.video.poster})` }}
      >
        {hero.video.src && (
          <video
            src={hero.video.src}
            poster={hero.video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={hero.imageAlt}
            className="hero-video h-full w-full object-cover"
          />
        )}
      </div>

      {/* Scrim: heavy at the foot so the type always holds. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/40"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-44">
        <p
          className="rise flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--hero-accent-color)]"
          style={{ "--rise-delay": "0.05s", fontFamily: "var(--hero-font-family)" }}
        >
          {hero.eyebrow}
        </p>

        <h1
          className="rise mt-6 max-w-4xl uppercase leading-[0.96] tracking-tight text-[var(--hero-title-color)]"
          style={{
            "--rise-delay": "0.15s",
            fontFamily: "var(--hero-font-family)",
            fontSize: "var(--hero-title-size)",
            fontWeight: "var(--hero-font-weight)",
          }}
        >
          {hero.title}
        </h1>

        <p
          className="rise mt-8 max-w-2xl leading-relaxed text-[var(--hero-body-color)]"
          style={{
            "--rise-delay": "0.28s",
            fontFamily: "var(--hero-font-family)",
            fontSize: "var(--hero-text-size)",
          }}
        >
          {hero.body}
        </p>

        <div
          className="rise mt-10 flex flex-wrap items-center gap-4"
          style={{ "--rise-delay": "0.4s" }}
        >
          <Link
            href={home.landownerCta.ctaHref}
            className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] transition hover:opacity-85"
            style={{
              backgroundColor: "var(--hero-button-bg)",
              color: "var(--hero-button-text)",
            }}
          >
            {home.landownerCta.ctaLabel}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href={hero.secondaryCtaHref}
            className="inline-flex items-center gap-3 border px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-white/10"
            style={{
              borderColor: "var(--hero-accent-color)",
              color: "var(--hero-title-color)",
            }}
          >
            {hero.secondaryCtaLabel}
          </Link>
        </div>
      </div>

      {/* Capability strip */}
      <div className="marquee relative overflow-hidden border-t border-white/10 bg-black/60 py-4 backdrop-blur">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-10 pr-10 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/45"
            >
              {capabilities.map((item) => (
                <li key={item} className="flex items-center gap-10">
                  <span>{item}</span>
                  <span aria-hidden="true" className="h-1 w-1 bg-white/30" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
