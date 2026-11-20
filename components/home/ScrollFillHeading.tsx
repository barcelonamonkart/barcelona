"use client";

import { Fragment, useEffect, useRef } from "react";

type ScrollFillHeadingProps = {
  lines: string[];
  className?: string;
  dark?: number[];
};

const LIGHT = [214, 209, 199]; // #D6D1C7
const GRAY_900 = [17, 24, 39]; // #111827

const mix = (t: number, dark: number[]) =>
  `rgb(${LIGHT.map((c, i) => Math.round(c + (dark[i] - c) * t)).join(",")})`;

export default function ScrollFillHeading({
  lines,
  className = "",
  dark = GRAY_900,
}: ScrollFillHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const words = Array.from(
      heading.querySelectorAll<HTMLElement>("[data-word]"),
    );
    const paint = (progress: number) => {
      words.forEach((word, i) => {
        const t = Math.max(0, Math.min(1, progress * words.length - i));
        word.style.color = mix(t, dark);
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      paint(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top } = heading.getBoundingClientRect();
      const vh = window.innerHeight;
      // Starts filling as the heading reaches 85% down the screen and is
      // fully dark by the time it reaches 40%.
      paint(Math.max(0, Math.min(1, (vh * 0.85 - top) / (vh * 0.45))));
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
  }, [dark]);

  return (
    <h2 ref={headingRef} className={className}>
      {lines.map((line, lineIndex) => (
        <Fragment key={line}>
          {lineIndex > 0 ? <br /> : null}
          {line.split(" ").map((word, wordIndex, all) => (
            <Fragment key={wordIndex}>
              <span data-word style={{ color: mix(0, dark) }}>
                {word}
              </span>
              {wordIndex < all.length - 1 ? " " : null}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </h2>
  );
}
