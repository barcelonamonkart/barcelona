"use client";

import { useEffect, useState } from "react";
import BookTableSectionStandalone from "../components/home/BookTableSectionStandalone";
import HeroSection from "../components/home/HeroSection";
import ExploreMosaicSection from "../components/home/ExploreMosaicSection";
import HomeStyles from "../components/home/HomeStyles";
import JourneyOfTasteSection from "../components/home/JourneyOfTasteSection";
import MenuCardsSection from "../components/home/MenuCardsSection";
import MenuHighlightsSection from "../components/home/MenuHighlightsSection";
import MoreThanDrinksSection from "../components/home/MoreThanDrinksSection";
import PrivateDiningSection from "../components/home/PrivateDiningSection";
import SeasonalMenusSection from "../components/home/SeasonalMenusSection";
import SummerSpecialSection from "../components/home/SummerSpecialSection";
import TasteOfJoySection from "../components/home/TasteOfJoySection";
import ThemeToggle from "../components/home/ThemeToggle";
import UniqueDiningSection from "../components/home/UniqueDiningSection";
import WelcomeSection from "../components/home/WelcomeSection";
import Testimonial from "../components/home/Testimonial";

// import OfferModal from "@/components/modal/OfferModal";
import SpecialOfferModal from "@/components/modal/SpecialOfferModal";

import InstagramGallery from "@/components/about/InstagramGallery";

const HERO_IMAGES = [
  "/image.webp",
  "/girl.jpeg",
  "/interiorlandscape.png",
  "/image.webp",
  "/bar.webp",
  "/drinks2.webp",
  // "/interior1.webp",
  // "/patio.webp",
  // "/A7404940.webp",
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return "light";
  });
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  // const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [isSpecialOfferModalOpen, setIsSpecialOfferModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);



  // useEffect(() => {
  //   const specialOfferModalTimer = window.setTimeout(() => {
  //     setIsSpecialOfferModalOpen(true);
  //   }, 3000);

  //   return () => window.clearTimeout(specialOfferModalTimer);
  // }, []);

  return (
    <div className="theme-root font-sans text-gray-900 bg-white relative transition-colors duration-300">
      <HomeStyles />
   
      {/* <SpecialOfferModal
        open={isSpecialOfferModalOpen}
        onClose={() => setIsSpecialOfferModalOpen(false)}
      /> */}
      {/* <ThemeToggle
        theme={theme}
        onToggle={() => setTheme(theme === "light" ? "dark" : "light")}
      /> */}

      <HeroSection />

      <WelcomeSection />
      <TasteOfJoySection />
      <ExploreMosaicSection />
      {/* <MenuHighlightsSection /> */}
      <MenuCardsSection />
      {/* <JourneyOfTasteSection /> */}
      <UniqueDiningSection />
      {/* <SeasonalMenusSection /> */}
      {/* <SummerSpecialSection /> */}
      {/* <OfferMenu /> */}
      {/* <MoreThanDrinksSection /> */}
      {/* <InstagramGallery /> */}
      {/* <Testimonial /> */}
      <PrivateDiningSection />
      <BookTableSectionStandalone />
    </div>
  );
}
