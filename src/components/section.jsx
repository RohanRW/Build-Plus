import Reveal from "@/components/reveal";

/**
 * Shared page furniture so every section shares one rhythm.
 *
 * Colors and typography are NOT hardcoded here — every visible value
 * comes from the --section-* custom properties (see src/app/colors.css).
 * `tone` just picks which `.tone-*` class supplies those properties'
 * default values; an ancestor `.page-<name>` or this element's own
 * `id` can override any of them without touching this file.
 */
const TONE_CLASS = {
  canvas: "tone-canvas",
  mist: "tone-mist",
  ink: "tone-ink",
};

export function Section({
  id,
  tone = "canvas",
  size = "default",
  className = "",
  children,
}) {
  const padding =
    size === "tight" ? "py-14 sm:py-16" : "py-20 sm:py-28 lg:py-32";

  return (
    <section
      id={id}
      className={`${TONE_CLASS[tone] || TONE_CLASS.canvas} bg-[var(--section-bg)] text-[var(--section-heading-color)] ${className}`}
    >
      <div className={`mx-auto max-w-6xl px-5 sm:px-6 ${padding}`}>{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, body, align = "left", className = "" }) {
  return (
    <Reveal
      as="header"
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p
          className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--section-accent-color)]"
          style={{ fontFamily: "var(--section-body-font)" }}
        >
          <span aria-hidden="true" className="h-px w-8 bg-[var(--section-accent-color)]" />
          <span>{eyebrow}</span>
        </p>
      )}
      {title && (
        <h2
          className="mt-5 leading-[1.08] tracking-tight text-[var(--section-heading-color)]"
          style={{
            fontFamily: "var(--section-heading-font)",
            fontSize: "var(--section-heading-size)",
            fontWeight: "var(--section-heading-weight)",
          }}
        >
          {title}
        </h2>
      )}
      {body && (
        <p
          className="mt-6 leading-relaxed text-[var(--section-body-color)]"
          style={{
            fontFamily: "var(--section-body-font)",
            fontSize: "var(--section-body-size)",
            fontWeight: "var(--section-body-weight)",
          }}
        >
          {body}
        </p>
      )}
    </Reveal>
  );
}

/** Visible marker for a section whose copy has not been supplied yet. */
export function ContentPending({ label, needs = [] }) {
  return (
    <div className="pending mt-10 p-6 text-sm">
      <p className="font-semibold uppercase tracking-[0.18em]">
        Content pending — {label}
      </p>
      {needs.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5">
          {needs.map((need) => (
            <li key={need}>{need}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
