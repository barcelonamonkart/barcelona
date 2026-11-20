"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Twitter,
} from "lucide-react";
import type { MenuCategory, OfferCategory } from "./types";
import MobileMenuDrawer from "./MobileMenuDrawer";

const MENU_CATEGORIES: MenuCategory[] = [
  {
    name: "Tea & Drinks",
    img: "https://images.unsplash.com/photo-1654923064639-834d2bf32716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhJTIwY2FmZXxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    name: "Afternoon Tea",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Special Drinks",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Desserts",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Breakfast & Brunch",
    img: "https://images.unsplash.com/photo-1670710029405-ad968b51b6dc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const OFFER_CATEGORIES: OfferCategory[] = [
  {
    name: "Tea & Drinks </br> aaa ",
    img: "https://images.unsplash.com/photo-1654923064639-834d2bf32716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhJTIwY2FmZXxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    name: "Afternoon Tea",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Special Drinks",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Desserts",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Breakfast & Brunch",
    img: "https://images.unsplash.com/photo-1670710029405-ad968b51b6dc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <header className="absolute top-0 left-0 z-50 w-full text-white">
        <div className="hidden lg:flex justify-between items-center py-3 px-8 text-[14px] tracking-wider border-b border-white/20 font-sans-body bg-black/10 backdrop-blur-sm">
          <div className="flex items-center space-x-8">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-white" />
              <span>318 8 Ave SW, Calgary, AB T2P 2Y9, Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white" />
              <span>+1 403-265-6555</span>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-white" />
              <span>events@barcelonatavern.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-gray-300 transition">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition">
                <Instagram size={16} />
              </Link>
            </div>
          </div>
        </div>

        <nav className="w-full relative bg-transparent h-24 transition-all duration-300">
          <div className="pt-10 container mx-auto px-6 lg:px-12 flex justify-between items-center h-full">
            <div>
              <Image
                src="/logo.webp"
                alt="logo"
                width={150}
                height={56}
                priority
              />
            </div>

            <div className="hidden lg:flex items-center space-x-8 text-[13px] font-semibold tracking-widest font-sans-body h-full">
              {["HOME", "ABOUT"].map((item) => (
                <Link
                  key={item}
                  href={item === "HOME" ? "/" : "/about"}
                  className="group h-full flex items-center text-white hover:text-amber-400 transition-colors"
                >
                  <span className="relative">
                    {item}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                  </span>
                </Link>
              ))}

              <div className="group h-full flex items-center">
                <Link
                  href="/menu"
                  className="flex items-center gap-1 text-white group-hover:text-amber-400 transition-colors cursor-pointer h-full relative"
                >
                  <span className="relative">
                    MENUS
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                  </span>
                  <ChevronDown size={12} />
                </Link>

                <div className="z-20 absolute top-full left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="bg-black/95 border-t border-white/10 py-10">
                    <div className="container mx-auto px-6 lg:px-12">
                      <div className="grid grid-cols-5 gap-4">
                        {MENU_CATEGORIES.map((category, index) => (
                          <Link
                            key={index}
                            href="/menu"
                            className="group/item block relative overflow-hidden"
                          >
                            <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                              <Image
                                src={category.img}
                                alt={category.name}
                                fill
                                sizes="(min-width: 1024px) 20vw, 100vw"
                                unoptimized
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover/item:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="absolute bottom-4 left-0 w-full text-center">
                              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/90 border-b border-transparent group-hover/item:border-amber-400 pb-1 transition-all">
                                {category.name}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Grab the offer */}
              <div className="group h-full flex items-center">
                <Link
                  href="/menu"
                  className="uppercase flex items-center gap-1 text-white group-hover:text-amber-400 transition-colors cursor-pointer h-full relative"
                >
                  <span className="relative">
                    Grab the offer
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                  </span>
                  <ChevronDown size={12} />
                </Link>

                <div className="z-20 absolute top-full left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="bg-black/95 border-t border-white/10 py-10">
                    <div className="container mx-auto px-6 lg:px-12">
                      <div className="grid grid-cols-5 gap-4">
                        {/* {OFFER_CATEGORIES.map((category, index) => ( */}
                        <Link
                          href="/menu"
                          className="group/item block relative overflow-hidden"
                        >
                          <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                            <Image
                              src={`https://images.unsplash.com/photo-1670710029405-ad968b51b6dc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                              alt={`category.name`}
                              fill
                              sizes="(min-width: 1024px) 20vw, 100vw"
                              unoptimized
                              className="w-full h-full object-cover transform transition-transform duration-700 group-hover/item:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                          </div>
                          <div className="absolute bottom-4 left-0 w-full text-center">
                            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/90 border-b border-transparent group-hover/item:border-amber-400 pb-1 transition-all">
                              aaa
                            </span>
                          </div>
                        </Link>
                        {/* ))} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/blog"
                className="group h-full flex items-center text-white hover:text-amber-400 transition-colors"
              >
                <span className="relative">
                  BLOG
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                </span>
              </Link>

              <Link
                href="/contact"
                className="group h-full flex items-center text-white hover:text-amber-400 transition-colors"
              >
                <span className="relative">
                  CONTACT
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                </span>
              </Link>
            </div>

            <div className="hidden lg:block z-20">
              <button className="border border-white px-6 py-2.5 text-[12px] font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 uppercase">
                Find a Table
              </button>
            </div>

            <div className="lg:hidden z-20">
              <button onClick={() => setIsMobileMenuOpen(true)}>
                <MenuIcon size={28} />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
