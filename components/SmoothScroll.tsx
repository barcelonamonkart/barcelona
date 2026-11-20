"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { getLenis, setLenis } from "@/lib/smoothScroll";

// Eased, inertia-style scrolling for mouse wheels and trackpads. Touch
// scrolling stays native. Not started for users who prefer reduced motion.
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      wheelMultiplier: 1,
      // In-page #links scroll smoothly too.
      anchors: true,
    });
    setLenis(lenis);

    // The mobile menu locks the page by setting body overflow to hidden;
    // stop Lenis while that is the case so the page behind doesn't scroll.
    const syncWithBodyLock = () => {
      if (document.body.style.overflow === "hidden") {
        lenis.stop();
      } else {
        lenis.start();
      }
    };
    const observer = new MutationObserver(syncWithBodyLock);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });
    syncWithBodyLock();

    return () => {
      observer.disconnect();
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // New page: start at the top without easing.
  useEffect(() => {
    getLenis()?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
