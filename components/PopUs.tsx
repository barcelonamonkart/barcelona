"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-3 sm:p-5"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-[600px] lg:max-w-[800px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Top Right */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-1 top-1 sm:right-2 sm:top-3 z-20 flex h-12 w-12 items-center justify-center rounded-full text-4xl font-medium md:font-bold leading-none text-white transition hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          &times;
        </button>

        {/* Poster Image Container */}
        <Link
          href="/menu/?tab=HAPPY_HOURS"
          onClick={() => setIsOpen(false)}
          className="relative block w-full aspect-[3/2] cursor-pointer"
        >
          <Image
            src="/images/pop-up-happy-hour.jpeg"
            alt="Happy Hour Poster"
            fill
            priority
            sizes="(max-width: 640px) 95vw, 420px"
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
