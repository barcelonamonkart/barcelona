"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { OFFERS } from "@/data/offers";

export default function OfferMenu() {
  const autoSlideDelay = 4000;
  const offers = OFFERS;
  const [cardsPerView, setCardsPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setCardsPerView(1);
        return;
      }

      if (width < 1024) {
        setCardsPerView(2);
        return;
      }

      setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const effectiveVisibleCards = Math.min(
    cardsPerView,
    Math.max(offers.length, 1),
  );
  const loopedOffers = [
    ...offers,
    ...offers.slice(0, Math.max(effectiveVisibleCards - 1, 0)),
  ];
  const cardWidth = 100 / effectiveVisibleCards;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isAutoPaused) {
      return;
    }

    const autoSlideTimer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
    }, autoSlideDelay);

    return () => {
      window.clearInterval(autoSlideTimer);
    };
  }, [isAutoPaused, offers.length]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(deltaX) < minSwipeDistance) {
      return;
    }

    if (deltaX > 0) {
      goToNext();
      return;
    }

    goToPrevious();
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] ">
      <div className="container mx-auto px-6 lg:px-12  ">
        <section className="relative">
          <div className=" mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
            <div className=" flex flex-col items-center">
              <span className="block text-center text-amber-500 font-bold tracking-[0.2em] text-[11px] uppercase mb-6 font-sans-body">
                Weekly Specials - Calgary
              </span>
              <div className="relative inline-block">
                <h2 className="uppercase text-center font-serif-display text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight relative z-10">
                  Grab an Offer
                  <br />
                  AT Barcelona
                </h2>
                <span className=" font-script text-4xl md:text-6xl text-amber-400 absolute bottom-[-38px] md:-bottom-8 -right-[0px] md:-right-[24px] -rotate-12 z-20">
                  calgary
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-center font-sans-body leading-relaxed mt-12 text-sm md:text-[15px]  max-w-2xl mx-auto">
              Discover daily deals, signature pours, and crowd-favourite plates
              - all designed to match the bold, social energy of Barcelona
              Calgary.
            </p>
          </div>
        </section>
        <section className="mx-auto px-6 pb-20  md:px-10 lg:px-12">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "pan-y" }}
          >
            <div
              className="-mx-3 flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}%)`,
              }}
            >
              {loopedOffers.map((offer, index) => (
                <div
                  key={`${offer.day}-${index}`}
                  className="shrink-0 px-3 "
                  style={{ flex: `0 0 ${cardWidth}%` }}
                >
                  <article
                    className="group overflow-hidden rounded-[20px] border border-black/10 bg-[#f5f4f2] shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition duration-300 hover:border-[#d4a24c]/40"
                    onMouseEnter={() => setIsAutoPaused(true)}
                    onMouseLeave={() => setIsAutoPaused(false)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={offer.image}
                        alt={offer.title}
                        fill
                        sizes={
                          effectiveVisibleCards === 1
                            ? "100vw"
                            : effectiveVisibleCards === 2
                              ? "(min-width: 768px) 50vw, 100vw"
                              : "(min-width: 1024px) 33vw, 100vw"
                        }
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-5 top-5 rounded-full border border-black/10 bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#c9953d]">
                        {offer.day}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                          {offer.tag}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold uppercase leading-tight tracking-[0.06em] text-white">
                          {offer.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-base uppercase tracking-[0.25em] text-[#c9953d]">
                        {offer.time}
                      </p>
                      <div className="mt-5 space-y-2 text-base leading-7 text-gray-500">
                        {offer.details.slice(0, 3).map((item) => (
                          <div key={item} className="flex gap-2">
                            <span className="text-[#d4a24c]">&bull;</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
                        <button className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9953d] transition hover:text-[#a77728]">
                          View Offer
                        </button>
                        <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#6b7280]">
                          Dine In
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goToPrevious}
              className="group hidden h-10 w-10 items-center justify-center rounded-full bg-white/65 text-black transition hover:bg-amber-600 lg:inline-flex"
              aria-label="Previous offer"
            >
              <ArrowLeft
                size={18}
                className="transition-colors group-hover:text-white"
              />
            </button>

            <div className="flex items-center gap-2">
              {offers.map((offer, index) => (
                <button
                  key={offer.day}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    currentIndex === index
                      ? "bg-[#d4a24c]"
                      : "bg-gray-200 hover:bg-white/50"
                  }`}
                  aria-label={`Go to ${offer.day} offer`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="group hidden h-10 w-10 items-center justify-center rounded-full bg-white/65 text-black transition hover:bg-amber-600 lg:inline-flex"
              aria-label="Next offer"
            >
              <ArrowRight
                size={18}
                className="transition-colors group-hover:text-white"
              />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
