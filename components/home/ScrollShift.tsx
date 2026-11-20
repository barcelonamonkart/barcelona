"use client";

import { useEffect, useRef } from "react";

type ScrollShiftProps = {
  children: React.ReactNode;
  className?: string;
  // Max sideways travel in px. Scrolling down moves the content right,
  // scrolling up moves it back left.
  distance?: number;
};

export default function ScrollShift({
  children,
  className = "",
  distance = 120,
}: ScrollShiftProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      // +1 as the element enters at the bottom of the screen, -1 as it leaves
      // at the top.
      const progress =
        (rect.top + rect.height / 2 - viewport / 2) /
        (viewport / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      // The transform doesn't move the box layout is measured from, so the
      // reading above stays stable from frame to frame.
      element.style.transform = `translate3d(${(-clamped * distance).toFixed(1)}px, 0, 0)`;
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
  }, [distance]);

  return (
    <div ref={ref} className={`${className} will-change-transform`}>
      {children}
    </div>
  );
}
