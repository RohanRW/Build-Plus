import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/site";

/**
 * The supplied square logo has been cropped into a horizontal lockup so it
 * reads at header height: /public/logo-horizontal.png (charcoal, for light
 * backgrounds) and /public/logo-horizontal-white.png (for black ones).
 *
 * The artwork already sets "Your Land, Our Expertise" under the wordmark,
 * so the tagline is never repeated in type next to the logo.
 */
export default function Logo({ variant = "dark", className = "", priority = false }) {
  const src =
    variant === "light" ? "/logo-horizontal-white.png" : "/logo-horizontal.png";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={src}
        alt={site.name}
        width={1843}
        height={420}
        priority={priority}
        className="h-full w-auto"
      />
    </Link>
  );
}

/**
 * The mark on its own, for tight spaces and decorative use. A plain <img>
 * rather than next/image: it is always decorative, often enormous and set
 * at a few percent opacity, and should never be picked up as the page's
 * Largest Contentful Paint element.
 */
export function LogoMark({ variant = "dark", className = "" }) {
  const src = variant === "light" ? "/logo-mark-white.png" : "/logo-mark.png";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={656}
      height={687}
      loading="eager"
      decoding="async"
      fetchPriority="low"
      className={className}
    />
  );
}
