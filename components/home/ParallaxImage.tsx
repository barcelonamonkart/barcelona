"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  // Max travel as a fraction of the container height. The image is oversized
  // by the same amount on each side so the container never shows an empty edge.
  strength?: number;
};

// The parent must be `relative overflow-hidden`.
export default function ParallaxImage({
  src,
  alt,
  sizes,
  className = "object-cover",
  strength = 0.1,
}: ParallaxImageProps) {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const container = layer?.parentElement;
    if (!layer || !container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const viewport = window.innerHeight;
      // +1 as the container enters at the bottom of the screen, -1 as it
      // leaves at the top. The image drifts the opposite way so it lags the page.
      const progress =
        (rect.top + rect.height / 2 - viewport / 2) /
        (viewport / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      layer.style.transform = `translate3d(0, ${(-clamped * strength * rect.height).toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div
      ref={layerRef}
      className="absolute inset-x-0 will-change-transform"
      style={{
        // A little more than `strength` per side, so sub-pixel rounding and
        // the reveal's zoom never expose an edge.
        top: `${-(strength + 0.02) * 100}%`,
        height: `${100 + (strength + 0.02) * 200}%`,
      }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className={className} />
    </div>
  );
}
