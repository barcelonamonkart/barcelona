"use client";

import { useEffect, useRef, useState } from "react";

type ClipRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  // Classes added to the outer box once revealed, e.g. a shadow that would
  // otherwise show around the still-hidden image.
  revealedClassName?: string;
  // Edge the wipe starts from.
  direction?: "top" | "left";
};

// Uncovers its content from the top down (or from the left) without moving it. Pass the
// positioning and size classes in `className`; children should fill the box.
export default function ClipReveal({
  children,
  className = "",
  delay = 0,
  revealedClassName = "",
  direction = "top",
}: ClipRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // The observed box is never clipped; only the inner layer is, because a
    // fully clipped element is reported as not intersecting.
    // overflow-hidden: the inner layers start zoomed in, and a clip-path alone
    // doesn't stop that overflow from widening the page.
    <div
      ref={ref}
      className={`${className} overflow-hidden transition-shadow duration-1000 ${
        isVisible ? revealedClassName : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`absolute inset-0 transition-[clip-path] duration-[1400ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          isVisible
            ? "[clip-path:inset(0)]"
            : direction === "left"
              ? "[clip-path:inset(0_100%_0_0)]"
              : "[clip-path:inset(0_0_100%_0)]"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div
          className={`absolute inset-0 transition-transform duration-[1800ms] ease-out ${
            isVisible ? "scale-100" : "scale-110"
          }`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
