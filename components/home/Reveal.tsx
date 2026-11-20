"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  width?: string;
  // Side the content slides in from.
  direction?: "up" | "right";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  width = "100%",
  direction = "up",
}: RevealProps) {
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
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : direction === "right"
            ? "opacity-0 translate-x-24"
            : "opacity-0 translate-y-12"
      }`}
      style={{
        // Left unset when 0 so a `delay-*` class passed in className can apply.
        transitionDelay: delay ? `${delay}ms` : undefined,
        width,
      }}
    >
      {children}
    </div>
  );
}

