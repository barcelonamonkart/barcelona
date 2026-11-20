import type { Metadata } from "next";
import GetInTouchSection from "@/components/contact/GetInTouchSection";
import HoursLocationSection from "@/components/contact/HoursLocationSection";
import HeadSection from "@/components/HeadSection";
import BookTableSectionStandalone from "@/components/home/BookTableSectionStandalone";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Find Barcelona Tavern at 318 8 Ave SW, Calgary. Get hours, directions, and reach out to book a table or ask a question.",
  alternates: {
    canonical: "/contact",
  },
};

export default function page() {
  return (
    <>
      <HeadSection title="Contact us" bgImg="/images/bar.jpg" />
      <HoursLocationSection />
      <GetInTouchSection />
      <BookTableSectionStandalone />
    </>
  );
}
