import type { Metadata } from "next";
import InstagramGallery from "@/components/about/InstagramGallery";
import OurPhilosophy from "@/components/about/OurPhilosophy";
import OurStory from "@/components/about/OurStory";
import ContactSection from "@/components/ContactSection";
import HeadSection from "@/components/HeadSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Barcelona Tavern, our philosophy on bold flavours and handcrafted cocktails, and what makes our downtown Calgary tavern different.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <HeadSection title="About us" bgImg="/images/interior4.jpg" />
      <OurStory />
      <InstagramGallery />
      <OurPhilosophy />
      <ContactSection />
    </>
  );
}
