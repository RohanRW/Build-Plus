"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-triggered entrance. Everything on the site enters the same way —
 * a short rise and fade — so the pages read as one document rather than a
 * stack of effects.
 *
 * The hidden state lives in CSS behind a `[data-js]` guard (see
 * globals.css), so if this never runs — no JavaScript, a hydration
 * failure, a crawler — the content is simply visible. Reduced-motion
 * preferences are handled in the same stylesheet.
 */

/** Every element still waiting to be revealed, checked by one listener. */
const pending = new Set();
let listening = false;
let frame = 0;

/** Reveal once the element's top edge is inside the viewport. */
function check() {
  frame = 0;
  const limit = window.innerHeight * 0.92;

  pending.forEach((node) => {
    if (node.getBoundingClientRect().top < limit) {
      node.classList.add("is-visible");
      pending.delete(node);
    }
  });
}

function schedule() {
  if (frame) return;
  frame = requestAnimationFrame(check);
}

function watch(node) {
  pending.add(node);

  if (!listening) {
    listening = true;
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  }

  // Anything already on screen is revealed on this frame rather than on the
  // first scroll — otherwise the top of the page loads empty.
  schedule();
}

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    watch(node);
    return () => pending.delete(node);
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? { ...style, "--reveal-delay": `${delay}s` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
