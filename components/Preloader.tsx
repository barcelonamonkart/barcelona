"use client";

import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 1800;
const FADE_DURATION_MS = 500;

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const beginFadeOut = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);

      window.setTimeout(() => {
        setIsFading(true);

        window.setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = previousBodyOverflow;
          document.documentElement.style.overflow = previousHtmlOverflow;
        }, FADE_DURATION_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      beginFadeOut();
    } else {
      window.addEventListener("load", beginFadeOut, { once: true });
    }

    return () => {
      window.removeEventListener("load", beginFadeOut);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`preloader-overlay${isFading ? " preloader-overlay--hidden" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader-content">
        <svg
          className="preloader-glass"
          viewBox="0 0 220 260"
          role="presentation"
        >
          <defs>
            <clipPath id="wine-bowl-clip">
              <path d="M55 40h110c6 0 10 4 10 10v18c0 48-28 84-65 93v64l28 20c4 3 2 9-3 9H85c-5 0-7-6-3-9l28-20v-64C73 152 45 116 45 68V50c0-6 4-10 10-10Z" />
            </clipPath>
          </defs>

          <g clipPath="url(#wine-bowl-clip)">
            <rect
              className="preloader-wine-fill"
              x="35"
              y="165"
              width="150"
              height="95"
              rx="22"
            />
            <path
              className="preloader-wine-wave"
              d="M48 108c18-14 36 9 55 4s28-15 46-11c12 3 20 9 28 7v54H48Z"
            />
            <path
              className="preloader-wine-wave-secondary"
              d="M42 122c14-8 24-1 37 3 18 6 34-9 52-7 17 2 28 12 47 8v46H42Z"
            />
          </g>

          <path
            className="preloader-glass-stroke"
            d="M55 40h110c6 0 10 4 10 10v18c0 48-28 84-65 93v64l28 20c4 3 2 9-3 9H85c-5 0-7-6-3-9l28-20v-64C73 152 45 116 45 68V50c0-6 4-10 10-10Z"
          />
        </svg>

        <p className="preloader-label">Pouring the evening...</p>
      </div>
    </div>
  );
}
