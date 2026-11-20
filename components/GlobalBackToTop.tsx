"use client";

import { useEffect, useState } from "react";
import { scrollToTop } from "@/lib/smoothScroll";
import BackToTopButton from "./home/BackToTopButton";

export default function GlobalBackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <BackToTopButton show={showBackToTop} onClick={scrollToTop} />;
}
