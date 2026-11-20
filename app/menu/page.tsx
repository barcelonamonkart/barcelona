import type { Metadata } from "next";
import HeadSection from "@/components/HeadSection";
import BookTableSectionStandalone from "@/components/home/BookTableSectionStandalone";
import MenuSection from "@/components/menu/MenuSection";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Barcelona Tavern's menu of bold small plates, handcrafted cocktails, and seasonal dishes in downtown Calgary.",
  alternates: {
    canonical: "/menu",
  },
};

export default function page() {
  return (
    <>
      <HeadSection title="Our menu" bgImg="/images/menu.webp" />
      <Suspense fallback={<div>Loading menu...</div>}>
        <MenuSection />
      </Suspense>
      <BookTableSectionStandalone />
    </>
  );
}
