import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import EventsBooking from "@/components/events/EventsBooking";
import HeadSection from "@/components/HeadSection";
import BookTableSectionStandalone from "@/components/home/BookTableSectionStandalone";
import GrabOfferPage from "@/components/Offer/GrabOfferPage";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function page() {
  return (
    <>
      <HeadSection title="Grab an Offer" bgImg="/winesbottle.webp" />
      <GrabOfferPage />
      {/* <ContactSection /> */}
      <BookTableSectionStandalone />
    </>
  );
}
