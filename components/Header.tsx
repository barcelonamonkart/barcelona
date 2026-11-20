"use client";

import { RESERVATION_URL } from "@/lib/reservation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu as MenuIcon,
  Phone,
} from "lucide-react";
import type { OfferItem } from "./types";
import MobileMenuDrawer from "./MobileMenuDrawer";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  // { label: "MENU", href: "/menu" },
  // { label: "EVENTS", href: "/events" },
];

const OFFER_ITEMS: OfferItem[] = [
  {
    dayLabel: ["Monday", "Industry Night"],
    details: [
      "Industry night @8pm",
      "$10 cocktail",
      "$5 draft (16OZ)",
      "25%off food menu",
      "$20 pitcher(64OZ)",
    ],
    img: "/industryNight.jpg",
    href: "/grab-the-offer#monday-industry-night",
  },
  {
    dayLabel: ["Tuesday", " Burger Night"],
    //Tuesday Burger Night
    details: ["Burger and beer deal", "Burger + draft $17.99"],
    img: "/burgerBeer.webp",
    href: "/grab-the-offer#tuesday-burger-night",
  },
  {
    dayLabel: ["Wednesday", "Trivia Night"],
    details: [
      "Trivia night starts @7pm",
      "$9.99 Wings( 12 piece )",
      "$5 draft (16OZ)",
      "$20 pitcher(64OZ)",
    ],
    img: "/13.jpeg",
    href: "/grab-the-offer#wednesday-trivia-night",
  },
  {
    dayLabel: ["Thursday", "Wine Night"],
    details: ["Half price wine bottle", "$22 steak sandwich"],
    img: "/offer4.jpg",
    href: "/grab-the-offer#thursday-wine-night",
  },
  {
    dayLabel: ["Sunday", "Caesar Stack"],
    // Sunday Caesar Stack
    details: ["$10 double barcelona caesar", "$20 barcelona caesar stack"],
    img: "/offer5.jpeg",
    href: "/grab-the-offer#sunday-caesar-stack",
  },
];

// Page-load entrance: the logo first, then each nav item in turn. Only the
// animation runs once; the sticky state change does not replay it.
const NAV_ENTRANCE =
  "animate-[navItemIn_1s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none";
const navDelay = (position: number) => ({
  animationDelay: `${700 + position * 200}ms`,
});

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavPinned, setIsNavPinned] = useState(false);
  const [isNavLeaving, setIsNavLeaving] = useState(false);
  const wasPinned = useRef(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  // Keep the fixed bar mounted while it plays its slide-out animation.
  const isNavFixed = isNavPinned || isNavLeaving;

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let leaveTimer: number | undefined;

    const handleScroll = () => {
      // On the home page the sticky header appears once the hero has scrolled
      // out of view; other pages have shorter heroes.
      const threshold = pathname === "/" ? window.innerHeight - 96 : 48;
      const pinned = window.scrollY > threshold;
      if (pinned === wasPinned.current) return;
      wasPinned.current = pinned;

      window.clearTimeout(leaveTimer);
      setIsNavPinned(pinned);
      if (pinned) {
        setIsNavLeaving(false);
      } else {
        setIsNavLeaving(true);
        leaveTimer = window.setTimeout(() => setIsNavLeaving(false), 300);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(leaveTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <header className="absolute top-0 left-0 z-50 w-full text-white">
        <div
          className={`hidden lg:flex justify-between items-center py-3 px-8 text-[14px] tracking-wider border-b border-white/20 font-sans-body bg-black/10 backdrop-blur-sm ${NAV_ENTRANCE}`}
          style={navDelay(7)}
        >
          <div className="flex items-center space-x-8">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-white" />
              <span>318 8 Ave SW, Calgary, AB T2P 2Y9, Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-white" />
              <span>+1 403-265-6555</span>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-white" />
              <span>events@barcelonatavern.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/barcelonatavern/"
                target="_blank"
                className="group inline-flex transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110"
              >
                <Facebook
                  size={20}
                  className="text-white group-hover:text-[#DD5903] cursor-pointer transition-colors duration-300"
                />
              </Link>
              <Link
                href="https://www.instagram.com/barcelonatavern/"
                target="_blank"
                className="group inline-flex transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110"
              >
                <Instagram
                  size={20}
                  className="text-white group-hover:text-[#DD5903] cursor-pointer transition-colors duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <nav
        className={`w-full h-24 text-white ${
          isNavFixed
            ? `fixed top-0 left-0 z-50 ${
                isNavPinned
                  ? "animate-[stickyHeaderSlideDown_0.45s_cubic-bezier(0.22,1,0.36,1)_both]"
                  : "animate-[stickyHeaderSlideUp_0.3s_ease-in_both]"
              }`
            : "absolute left-0 z-50 top-0 lg:top-[49px]"
        }`}
      >
        <div
          className={`absolute inset-0 ${
            isNavFixed
              ? "bg-black/55 backdrop-blur-md border-b border-white/10 shadow-lg"
              : "bg-transparent"
          }`}
        ></div>
        <div
          className={`relative container mx-auto px-6 lg:px-12 flex justify-between items-center h-full ${isNavFixed ? " pt-0" : "pt-10"}`}
        >
          <Link href={`/`} className={`group ${NAV_ENTRANCE}`}>
            <Image
              className={`transform group-hover:rotate-2 transition-transform duration-300 h-auto ${
                isNavFixed
                  ? "w-[110px] lg:w-[130px] drop-shadow-lg"
                  : "w-[130px] lg:w-[170px]"
              }`}
              src="/barcelonaTavern.png"
              alt="Barcelona logo"
              width={isNavFixed ? 130 : 170}
              height={isNavFixed ? 69 : 90}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8 text-[13px] font-semibold tracking-widest font-sans-body h-full">
            {NAV_LINKS.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group h-full flex items-center text-white hover:text-white transition-colors ${NAV_ENTRANCE}`}
                style={navDelay(index)}
              >
                <span className="relative">
                  {item.label}
                  <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#DD5903] transition-all duration-300 ease-out ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </span>
              </Link>
            ))}
            <Link
              href="/menu"
              className={`group h-full flex items-center text-white hover:text-white transition-colors ${NAV_ENTRANCE}`}
              style={navDelay(2)}
            >
              <span className="relative">
                MENUS
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#DD5903] transition-all duration-300 ease-out ${isActive("/menu") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </span>
            </Link>
            <Link
              href={`/events`}
              className={`group h-full flex items-center text-white hover:text-white transition-colors ${NAV_ENTRANCE}`}
              style={navDelay(3)}
            >
              <span className="relative">
                PRIVATE DINING
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#DD5903] transition-all duration-300 ease-out ${isActive("/events") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </span>
            </Link>

            {/* Grab the offer */}
            {/* <div className="group h-full flex items-center">
              <Link
                href="/grab-the-offer"
                className="py-10  uppercase flex items-center gap-1 text-white group-hover:text-white transition-colors cursor-pointer h-full relative"
              >
                <span className="relative">
                  Grab the offer
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#DD5903] transition-all duration-300 ease-out group-hover:w-full"></span>
                </span>
                <ChevronDown size={12} />
              </Link>

              <div
                className={`z-20 fixed ${isNavFixed ? "top-[96px]" : "top-[152px]"} inset-x-0 w-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-300 ease-in-out`}
              >
                <div className="bg-black/95 border-t border-white/10 py-10">
                  <div className="container mx-auto px-6 lg:px-12"> */}

            {/* <div className="grid grid-cols-5 gap-4">
                        {OFFER_ITEMS.map((offer, index) => (
                          <Link
                            key={`${offer.dayLabel.join("-")}-${index}`}
                            href={offer.href ?? "/grab-the-offer"}
                            className="group/item block relative overflow-hidden"
                          >
                            <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                              <Image
                                src={offer.img}
                                alt={offer.dayLabel.join(" ")}
                                fill
                                sizes="(min-width: 1024px) 20vw, 100vw"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover/item:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/45"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="absolute top-4 left-0 w-full text-center">
                              <div className="inline-flex flex-col items-center text-[18px] font-bold tracking-[0.15em] uppercase text-white/90 border-b border-transparent group-hover/item:border-[#DD5903] pb-1 mb-3 transition-all">
                                {offer.dayLabel.map((line) => (
                                  <span key={line} className="block">
                                    {line}
                                  </span>
                                ))}
                              </div>
                              <br />

                              <span className="text-[14px]">
                                {offer.details.map((line) => (
                                  <span key={line} className="block">
                                    {line}
                                  </span>
                                ))}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div> */}
            {/* <div className="grid grid-cols-5 gap-4">
                      {OFFER_ITEMS.map((offer, index) => (
                        <Link
                          key={`${offer.dayLabel.join("-")}-${index}`}
                          href={offer.href ?? "/grab-the-offer"}
                          className="group/item block relative overflow-hidden"
                        >
                          <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                            <Image
                              src={offer.img}
                              alt={offer.dayLabel.join(" ")}
                              fill
                              sizes="(min-width: 1024px) 20vw, 100vw"
                              className="w-full h-full object-cover transform transition-transform duration-700 group-hover/item:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/18"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60"></div>
                          </div>
                          <div className="absolute bottom-0 left-0 w-full text-center">
                            <div className="inline-flex flex-col items-center text-[18px] font-bold tracking-[0.15em] uppercase text-white/90 border-b border-transparent group-hover/item:border-[#DD5903] pb-1 mb-3 transition-all">
                              {offer.dayLabel.map((line) => (
                                <span key={line} className="block">
                                  {line}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <Link
              href="/blog"
              className={`group h-full flex items-center text-white hover:text-white transition-colors ${NAV_ENTRANCE}`}
              style={navDelay(4)}
            >
              <span className="relative">
                BLOG
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#DD5903] transition-all duration-300 ease-out ${isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </span>
            </Link>

            <Link
              href="/contact"
              className={`group h-full flex items-center text-white hover:text-white transition-colors ${NAV_ENTRANCE}`}
              style={navDelay(5)}
            >
              <span className="relative">
                CONTACT
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#DD5903] transition-all duration-300 ease-out ${isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </span>
            </Link>
          </div>

          <div
            className={`hidden lg:block z-20 ${NAV_ENTRANCE}`}
            style={navDelay(6)}
          >
            <Link
              // href={`https://tables.toasttab.com/restaurants/b137a11e-cf5c-4d4e-85ea-c5b54fdcd8b3/reserve`}
              href={RESERVATION_URL}
              target="_blank"
              className="border border-white px-6 py-2.5 text-[12px] font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 uppercase"
            >
              Find a Table
            </Link>
          </div>

          <div className={`lg:hidden z-20 ${NAV_ENTRANCE}`} style={navDelay(0)}>
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <MenuIcon size={28} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
