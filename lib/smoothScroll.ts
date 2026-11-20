import type Lenis from "lenis";

// The running Lenis instance (set by components/SmoothScroll.tsx). It is null
// when smooth scrolling is off, e.g. for users who prefer reduced motion.
let lenis: Lenis | null = null;

export const setLenis = (instance: Lenis | null) => {
  lenis = instance;
};

export const getLenis = () => lenis;

// Lenis owns smooth scrolling while it runs, so native `behavior: "smooth"`
// calls become instant jumps. These helpers go through Lenis when it is there
// and fall back to the browser otherwise.
export const scrollToTop = () => {
  if (lenis) {
    lenis.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export const scrollToElement = (element: HTMLElement | null) => {
  if (!element) return;
  if (lenis) {
    lenis.scrollTo(element);
  } else {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
