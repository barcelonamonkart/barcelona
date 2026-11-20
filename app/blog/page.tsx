import type { Metadata } from "next";
import BlogSection from "@/components/blog/BlogSection";
import HeadSection from "@/components/HeadSection";
import BookTableSectionStandalone from "@/components/home/BookTableSectionStandalone";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, stories, and updates from Barcelona Tavern covering Calgary nightlife, happy hour, patio season, and dining.",
  alternates: {
    canonical: "/blog",
  },
};

export default function page() {
  return (
    <>
      <HeadSection title="Blog" bgImg="/images/interior.jpg" />
      <BlogSection />
      <BookTableSectionStandalone />
    </>
  );
}
