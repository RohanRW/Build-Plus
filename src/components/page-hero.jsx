import { LogoMark } from "@/components/logo";
import Reveal from "@/components/reveal";

/**
 * The opening band on every page other than the home page. Black, so the
 * header has something to sit against and the pages share one entrance.
 */
export default function PageHero({ eyebrow, title, body, note }) {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* The mark, oversized and barely there, as a background texture. */}
      <LogoMark
        variant="light"
        className="pointer-events-none absolute -right-10 top-1/2 hidden h-[26rem] w-auto -translate-y-1/2 opacity-[0.06] sm:block"
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p className="eyebrow flex items-center gap-3 !text-white/60">
              <span aria-hidden="true" className="h-px w-8 bg-white/40" />
              {eyebrow}
            </p>
          )}
          <h1 className="display mt-6 text-4xl sm:text-6xl lg:text-[4.25rem]">
            {title}
          </h1>
          {body && (
            <p className="mt-7 text-base leading-relaxed text-white/70 sm:text-lg">
              {body}
            </p>
          )}
          {note && (
            <p className="mt-8 border-l-2 border-white/30 pl-6 text-sm text-white/55">
              {note}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
