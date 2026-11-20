import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import EventsBooking from "@/components/events/EventsBooking";
import HeadSection from "@/components/HeadSection";
import BookTableSectionStandalone from "@/components/home/BookTableSectionStandalone";

export const metadata: Metadata = {
  title: "Private Events & Bookings",
  description:
    "Host your next private event, birthday, or large party at Barcelona Tavern. Book our downtown Calgary space for cocktails, dining, and memorable nights out.",
  alternates: {
    canonical: "/events",
  },
};

export default function page() {
  return (
    <>
      <HeadSection title="Events" bgImg="/images/private_dining.webp"/>
      <EventsBooking /> 
      <ContactSection />
      {/* <BookTableSectionStandalone /> */}
    </>
  );
}
