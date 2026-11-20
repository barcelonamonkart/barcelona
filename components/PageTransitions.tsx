"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

// Wraps internal link navigations in the View Transition API. The animation
// itself lives in globals.css (::view-transition-* rules). Browsers without
// support, back/forward navigation and reduced-motion users get the normal,
// instant navigation.

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => Promise<void>) => unknown;
};

const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";

// If the new route never commits (e.g. the navigation was cancelled), let the
// transition finish anyway so the page isn't left frozen.
const MAX_WAIT_MS = 2000;

export default function PageTransitions() {
  const router = useRouter();
  const pathname = usePathname();
  const finishRef = useRef<(() => void) | null>(null);
  const isTransitioningRef = useRef(false);

  // The route has rendered: let the browser capture the new page.
  useEffect(() => {
    finishRef.current?.();
  }, [pathname]);

  useEffect(() => {
    const doc = document as ViewTransitionDocument;
    if (typeof doc.startViewTransition !== "function") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        reducedMotion.matches ||
        isTransitioningRef.current
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // Same page (hash jumps, query-only changes) keeps the default behaviour.
      if (normalizePath(url.pathname) === normalizePath(window.location.pathname)) {
        return;
      }

      // Taking over from Next's <Link>, which skips defaultPrevented clicks.
      event.preventDefault();
      isTransitioningRef.current = true;

      const transition = doc.startViewTransition!(
        () =>
          new Promise<void>((resolve) => {
            const timeout = window.setTimeout(resolve, MAX_WAIT_MS);
            finishRef.current = () => {
              window.clearTimeout(timeout);
              finishRef.current = null;
              resolve();
            };
            router.push(url.pathname + url.search + url.hash);
          }),
      ) as { finished?: Promise<unknown> } | undefined;

      const done = () => {
        isTransitioningRef.current = false;
      };
      if (transition?.finished) {
        transition.finished.then(done, done);
      } else {
        done();
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
