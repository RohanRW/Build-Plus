/** Shared page furniture so every section shares one rhythm. */

export function Section({ id, tone = "canvas", className = "", children }) {
  const background =
    tone === "mist" ? "bg-mist" : tone === "ink" ? "bg-ink text-white" : "bg-canvas";

  return (
    <section id={id} className={`${background} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, body, tone = "dark" }) {
  return (
    <header className="max-w-3xl">
      {eyebrow && <p className={`eyebrow ${tone === "light" ? "!text-white/60" : ""}`}>{eyebrow}</p>}
      {title && (
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      )}
      {body && (
        <p className={`mt-6 text-lg leading-relaxed ${tone === "light" ? "text-white/80" : "text-slate"}`}>
          {body}
        </p>
      )}
    </header>
  );
}

/** Visible marker for a section whose copy has not been supplied yet. */
export function ContentPending({ label, needs = [] }) {
  return (
    <div className="pending mt-8 p-6 text-sm">
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
