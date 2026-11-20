"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, MapPin, Phone, Twitter, X } from "lucide-react";

type MobileMenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenuDrawer({
  isOpen,
  onClose,
}: MobileMenuDrawerProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navLinkClass = (href: string) =>
    `text-2xl font-sans-body font-medium transition-colors ${
      isActive(href) ? "text-amber-600" : "text-white hover:text-white"
    }`;

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-600 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 w-full sm:w-[400px] h-full z-[70] bg-cover bg-center transition-transform duration-600 ease-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto shadow-2xl`}
        style={{ backgroundImage: "url('/images/drinks2.jpg')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 to-black/60"></div>

        <div className="relative z-10 p-8 h-full flex flex-col">
          <div className="flex justify-end mb-10">
            <button
              onClick={onClose}
              className="text-white hover:text-white transition-colors transform hover:rotate-90 duration-300"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex flex-col space-y-5 mb-12">
            <Link href="/" onClick={onClose} className={navLinkClass("/")}>
              Home
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className={navLinkClass("/about")}
            >
              About
            </Link>

            <Link
              href="/menu"
              onClick={onClose}
              className={navLinkClass("/menu")}
            >
              Menus
            </Link>
            <Link
              href="/events"
              onClick={onClose}
              className={navLinkClass("/events")}
            >
              Events
            </Link>
            {/* <Link
              href="/grab-the-offer"
              onClick={onClose}
              className={navLinkClass("/events")}
            >
              Grab the offer
            </Link> */}

            <Link
              href="/blog"
              onClick={onClose}
              className={navLinkClass("/blog")}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className={navLinkClass("/contact")}
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-6 mb-12">
            <Link
              href={`https://www.facebook.com/barcelonatavern/`}
              target="_blank"
            >
              <Facebook
                size={20}
                className="text-white hover:text-white cursor-pointer transition-colors"
              />
            </Link>
            <Link
              href={`https://www.instagram.com/barcelonatavern/`}
              target="_blank"
            >
              <Instagram
                size={20}
                className="text-white hover:text-white cursor-pointer transition-colors"
              />
            </Link>
          </div>

          <div className="mb-8">
            <h4 className="text-white font-bold tracking-[0.15em] uppercase text-sm mb-4 font-sans-body border-b border-white/20 pb-2 inline-block">
              OPENING HOURS
            </h4>
            <div className="flex justify-between text-white/90 text-sm mb-2 font-sans-body">
              <span>Monday - Tuesday</span>
              <span>02:00 PM - 11:00 PM</span>
            </div>
            <div className="flex justify-between text-white/90 text-sm mb-2 font-sans-body">
              <span>Wednesday - Thursday</span>
              <span>02:00 PM - 12:00 AM</span>
            </div>
            <div className="flex justify-between text-white/90 text-sm mb-2 font-sans-body">
              <span>Friday - Saturday</span>
              <span>02:00 PM - 02:00 AM</span>
            </div>
            <div className="flex justify-between text-white/90 text-sm font-sans-body">
              <span>Sunday</span>
              <span>02:00 PM - 11:00 PM</span>
            </div>
          </div>

          <div className="mt-auto pb-4">
            <h4 className="text-white font-bold tracking-[0.15em] uppercase text-sm mb-4 font-sans-body border-b border-white/20 pb-2 inline-block">
              OUR LOCATION
            </h4>
            <div className="flex items-start gap-3 text-white/90 text-sm mb-3 font-sans-body hover:text-white transition-colors cursor-pointer">
              <MapPin size={18} className="mt-0.5 shrink-0 text-amber-600" />
              <span>318 8 Ave SW, Calgary, AB T2P 2Y9, Canada</span>
            </div>
            <div className="flex items-center gap-3 text-white/90 text-sm font-sans-body hover:text-white transition-colors cursor-pointer">
              <Phone size={18} className="text-amber-600" />
              <span>+1 403-265-6555</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
