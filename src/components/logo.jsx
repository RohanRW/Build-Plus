import Link from "next/link";

/**
 * TODO(assets): replace this text lockup with the real logo.
 *
 * Needed from BuildPlus:
 *   - /public/logo-horizontal.svg  (navbar — the square stacked mark is
 *     too tall for a header)
 *   - /public/logo-horizontal-white.svg  (dark footer)
 *   - /public/logo-mark.svg  (favicon / social avatar)
 *
 * Once supplied, swap the span below for next/image and delete this note.
 */
export default function Logo({ variant = "dark", className = "" }) {
  const tone = variant === "light" ? "text-white" : "text-ink";

  return (
    <Link href="/" className={`inline-flex flex-col leading-none ${className}`}>
      <span
        className={`font-display text-2xl font-extrabold uppercase tracking-tight ${tone}`}
      >
        Build Plus
      </span>
      <span
        className={`mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.3em] ${
          variant === "light" ? "text-white/70" : "text-slate"
        }`}
      >
        Your Land, Our Expertise
      </span>
    </Link>
  );
}
