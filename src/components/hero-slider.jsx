"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGE_DURATION_MS = 5000;
const SWIPE_PX = 40;
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const SIZES = "(min-width: 1152px) 600px, (min-width: 1024px) 52vw, 100vw";

function subscribeReducedMotion(onChange) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * One slide's media, filling the card. `type: "video"` plays muted from the
 * start each time its slide is shown, calling `onEnded` when it finishes
 * (or looping when there is no `onEnded`); with reduced motion it falls
 * back to its poster as a still image.
 */
function SlideMedia({ slide, active, reducedMotion, eager, onEnded }) {
  const videoRef = useRef(null);
  const isVideo = slide.type === "video";
  const showVideo = isVideo && !(reducedMotion && slide.poster);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active && !reducedMotion) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [active, reducedMotion]);

  if (showVideo) {
    return (
      <video
        ref={videoRef}
        src={slide.src}
        poster={slide.poster}
        muted
        loop={!onEnded}
        onEnded={active ? onEnded : undefined}
        playsInline
        autoPlay={active && !reducedMotion}
        preload={eager ? "auto" : "metadata"}
        aria-label={slide.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <Image
      src={isVideo ? slide.poster : slide.src}
      alt={slide.alt}
      fill
      sizes={SIZES}
      className="object-cover"
      {...(eager ? { preload: true } : { fetchPriority: "low" })}
    />
  );
}

/**
 * The media card inside the homepage hero. Crossfades between image and/or
 * video slides: an image holds for IMAGE_DURATION_MS, a video plays to its
 * end. Image slides don't advance while the visitor is hovering, focused or
 * touching, and nothing autoplays with reduced motion. Supports arrow keys
 * and swipe.
 * With one slide it renders that media alone, with no controls.
 */
export default function HeroSlider({ slides, label = "Construction imagery" }) {
  const count = slides.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );

  const go = useCallback(
    (step) => setActive((index) => (index + step + count) % count),
    [count],
  );

  // Video slides advance from their `ended` event instead of this timer.
  // Depends on `active` so a manual change restarts the full duration.
  const activeIsVideo = slides[active]?.type === "video";
  useEffect(() => {
    if (paused || reducedMotion || count < 2 || activeIsVideo) return;
    const timer = setTimeout(() => go(1), IMAGE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [active, activeIsVideo, paused, reducedMotion, count, go]);

  const multiple = count > 1;
  const advance = useCallback(() => go(1), [go]);

  function onKeyDown(event) {
    if (!multiple) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  }

  function onTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
    setPaused(true);
  }

  function onTouchEnd(event) {
    const start = touchStartX.current;
    touchStartX.current = null;
    setPaused(false);
    if (start === null || !multiple) return;
    const delta = event.changedTouches[0].clientX - start;
    if (Math.abs(delta) >= SWIPE_PX) go(delta < 0 ? 1 : -1);
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={multiple ? 0 : undefined}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--hero-panel)] shadow-[0_28px_60px_-24px_rgba(22,43,78,0.55)] ring-1 ring-white/70 outline-none focus-visible:ring-2 focus-visible:ring-[var(--hero-accent-color)]"
    >
      <div
        className="absolute inset-0"
        aria-live={paused || reducedMotion ? "polite" : "off"}
      >
        {slides.map((slide, index) => {
          const current = index === active;
          return (
            <div
              key={slide.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              aria-hidden={!current}
              className={`absolute inset-0 transition-[opacity,transform] duration-[900ms] ease-out motion-reduce:transition-none ${
                current ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
              }`}
            >
              <SlideMedia
                slide={slide}
                active={current}
                reducedMotion={reducedMotion}
                eager={index === 0}
                onEnded={multiple ? advance : undefined}
              />
            </div>
          );
        })}
      </div>

      {multiple && (
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-3 sm:bottom-4 sm:right-4">
          <div className="flex items-center">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
                className="group/dot px-1 py-2"
              >
                <span
                  className={`block h-1 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    index === active
                      ? "w-6 bg-white"
                      : "w-3 bg-white/55 group-hover/dot:bg-white/85"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="flex size-8 items-center justify-center rounded-full bg-white/85 text-[var(--hero-title-color)] shadow-sm transition hover:bg-white"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="flex size-8 items-center justify-center rounded-full bg-white/85 text-[var(--hero-title-color)] shadow-sm transition hover:bg-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
