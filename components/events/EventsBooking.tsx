"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import LargePartyInquiryForm from "./LargePartyInquiryForm";

const EventsBooking = () => {
  const storyImage = "/images/people.jpg";

  const brandOrange = "#E05A0A";
  const [isInquiryFormVisible, setIsInquiryFormVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isSuccessModalActive, setIsSuccessModalActive] = useState(false);

  const closeSuccessTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const closeSuccessModal = () => {
    setIsSuccessModalActive(false);
    if (closeSuccessTimerRef.current) {
      clearTimeout(closeSuccessTimerRef.current);
    }
    closeSuccessTimerRef.current = setTimeout(() => {
      setIsSuccessModalVisible(false);
    }, 250);
  };

  useEffect(() => {
    if (!isSuccessModalVisible) {
      return;
    }
    const rafId = requestAnimationFrame(() => {
      setIsSuccessModalActive(true);
    });
    return () => cancelAnimationFrame(rafId);
  }, [isSuccessModalVisible]);

  useEffect(() => {
    return () => {
      if (closeSuccessTimerRef.current) {
        clearTimeout(closeSuccessTimerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12 lg:gap-24">
        {/* Left Side: Arched Image Container */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="group relative w-full max-w-md md:max-w-none aspect-[4/5] md:aspect-auto md:min-h-full overflow-hidden shadow-xl cursor-pointer">
            <Image
              src={storyImage}
              alt="Barista at work"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="!absolute !inset-0 !h-full !w-full !max-w-none object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-90"
            />
            {/* Subtle inner border/glow on hover */}
            <div className="absolute inset-0 border-0 transition-all duration-500 rounded-t-full pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="flex items-center gap-4 mb-4">
            <span
              // style={{ color: brandOrange }}
              className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase"
            >
              {/* Hey! Welcome to Barcelona, Calgary */}
              Private Events & Group Dining · Calgary
            </span>
            <div
              // style={{ backgroundColor: brandOrange }}
              className="w-12 h-px bg-amber-600 "
            />
          </div>

          <h2 className=" text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-8 tracking-wide">
            Event Bookings
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg">
            <p className="font-medium text-gray-800">
              Your Night. Over a Decade of Getting It Right.
            </p>
            <p>
              Barcelona has been the backdrop for some of downtown Calgary&apos;s
              best nights since 2014. Birthdays that went past midnight.
              Promotions toasted with the good stuff. Rehearsal dinners where
              everyone finally relaxed. Retirement parties where the speeches
              ran long and nobody minded.
            </p>
            <p>
              We don&apos;t do events like a banquet hall with better lighting. We do
              them like a tavern that knows how to throw a party: a kitchen that
              sends out paella pans and tapas boards like clockwork, a floor
              team that reads the room, and a bar that keeps the sangria
              flowing.
            </p>
            <p>
              Whether you need a semi-private corner for 12 or the whole room
              for 100+, we&apos;ll build the evening around you: a custom menu, a
              curated drinks package, and the kind of service that makes your
              guests feel like they&apos;re the only ones here.
            </p>
            <p>
              <i>Menus and packages available on request.</i>
            </p>
          </div>

          <button
            // style={{ backgroundColor: brandOrange }}
            type="button"
            onClick={() => setIsInquiryFormVisible(true)}
            className="bg-amber-600 cursor-pointer mt-10 px-10 py-4 text-white font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            Plan Your Event With Us
          </button>

          {isInquiryFormVisible && (
            <LargePartyInquiryForm
              brandOrange={brandOrange}
              onClose={() => setIsInquiryFormVisible(false)}
            />
          )}
        </div>
      </div>

      {isSuccessModalVisible ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 py-8 transition-all duration-300 ${
            isSuccessModalActive
              ? "bg-black/60 opacity-100"
              : "bg-black/0 opacity-0"
          }`}
          onClick={closeSuccessModal}
        >
          <div
            className={`relative w-full max-w-md rounded-sm bg-white p-6 md:p-8 shadow-2xl transition-all duration-300 ${
              isSuccessModalActive
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeSuccessModal}
              aria-label="Close success modal"
              className="cursor-pointer absolute right-4 top-4 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="pr-10 text-2xl font-serif text-gray-900">
              Inquiry Submitted
            </h3>

            <button
              type="button"
              onClick={closeSuccessModal}
              style={{ backgroundColor: brandOrange }}
              className="mt-6 cursor-pointer px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default EventsBooking;
