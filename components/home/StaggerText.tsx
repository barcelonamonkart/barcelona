"use client";

import { Fragment, useEffect, useRef, useState } from "react";

type StaggerTextProps = {
  items: string[];
  className?: string;
  // Delay before the first item, and between items, in ms.
  baseDelay?: number;
  step?: number;
};

// Shows its items one after another once the block scrolls into view. The
// layout (direction, size, colour) comes from `className`.
export default function StaggerText({
  items,
  className = "",
  baseDelay = 300,
  step = 450,
}: StaggerTextProps) {
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
    <div ref={ref} className={className}>
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 ? (
            <span
              aria-hidden="true"
              className={`transition-opacity duration-700 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${baseDelay + index * step}ms` }}
            >
              ·
            </span>
          ) : null}
          <span
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: `${baseDelay + index * step}ms` }}
          >
            {item}
          </span>
        </Fragment>
      ))}
    </div>
  );
}
