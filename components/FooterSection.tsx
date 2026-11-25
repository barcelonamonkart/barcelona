"use client";

import { useState } from "react";
import Link from "next/link";
export default function FooterSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-white text-gray-900 py-16 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-center lg:text-left mb-16">
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-sans-body font-bold tracking-[0.2em] text-[11px] uppercase mb-6">
              ADDRESS
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed font-sans-body">
              318 8 Ave SW, Calgary,
              <br />
               AB T2P 2Y9, Canada
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-sans-body font-bold tracking-[0.2em] text-[11px] uppercase mb-6">
              CONTACT
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed font-sans-body">
              events@barcelonatavern.com
              <br />
              +1 403-265-6555
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-sans-body font-bold tracking-[0.2em] text-[11px] uppercase mb-6">
              HOURS
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed font-sans-body">
              MON: 11 am-11 pm
              <br />
              TUE - FRI: 7 am-11 pm
              <br />
              SAT: 4 pm-2 am
              <br />
              SUN: Closed
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-sans-body font-bold tracking-[0.2em] text-[11px] uppercase mb-6">
              SOCIAL
            </h4>
            <div className="text-gray-600 text-sm leading-relaxed font-sans-body space-y-1">
              <Link
                href="https://www.instagram.com/barcelonatavern/"
                target="_blank"
                className="block hover:text-amber-500 transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/barcelonatavern/"
                target="_blank"
                className="block hover:text-amber-500 transition-colors"
              >
                Facebook
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-sans-body font-bold tracking-[0.2em] text-[11px] uppercase mb-6">
              Subscribe for <br />
              Daily Offers
            </h4>
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer border border-gray-900 px-8 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300 font-sans-body"
            >
              SIGN ME UP
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-gray-600 font-sans-body gap-4 md:gap-0">
          <div>
            <span className="text-[16px]">&copy;</span> 2026 Barcelona Tavern
          </div>
          <div>
            Designed & Developed by{" "}
            <Link
              href="https://www.monkartlabs.com"
              target="_blank"
              className="hover:text-amber-500 transition-colors"
            >
              Monkart Labs.
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-500 transition-colors"
            >
              PRIVACY
            </Link>
            {/* <Link
              href="#"
              className="hover:text-amber-500 transition-colors"
            >
              JOIN E-CLUB
            </Link>
            <Link
              href="#"
              className="hover:text-amber-500 transition-colors"
            >
              CAREER
            </Link> */}
            {/* <Link href="#" className="hover:text-amber-500 transition-colors">
              TERMS OF USE
            </Link> */}
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-2xl bg-[#f3f3f3] rounded-md shadow-2xl p-8 md:p-10">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-serif-display text-4xl text-[#111827] leading-tight">
                Join Our Daily Offers
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer text-4xl leading-none text-gray-600 hover:text-gray-900"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <p className="text-gray-600 font-sans-body text-sm mb-8">
              Enter your details and we will keep you posted with fresh updates.
            </p>

            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-[16px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-500 transition-colors"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-[16px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer bg-amber-600 hover:bg-amber-500 disabled:bg-amber-300 disabled:cursor-not-allowed text-white px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase transition-colors shadow-[0_6px_12px_rgba(0,0,0,0.12)]"
              >
                Sign Me Up
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
