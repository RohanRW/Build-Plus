import Reveal from "@/components/reveal";

/** Shared page furniture so every section shares one rhythm. */

const TONES = {
  canvas: "bg-canvas text-ink",
  mist: "bg-mist text-ink",
  ink: "bg-black text-white",
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
    <section id={id} className={`${TONES[tone] || TONES.canvas} ${className}`}>
      <div className={`mx-auto max-w-6xl px-5 sm:px-6 ${padding}`}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "dark",
  align = "left",
  className = "",
}) {
  const light = tone === "light";

  return (
    <Reveal
      as="header"
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="eyebrow flex items-center gap-3">
          <span
            aria-hidden="true"
            className={`h-px w-8 ${light ? "bg-white/40" : "bg-ink"}`}
          />
          <span className={light ? "text-white/60" : ""}>{eyebrow}</span>
        </p>
      )}
      {title && (
        <h2
          className={`mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      )}
      {body && (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/70" : "text-slate"
          }`}
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
