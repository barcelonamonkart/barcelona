"use client";

import Image from "next/image";
import { useState } from "react";

const GetInTouchSection = () => {
  const brandOrange = "#E05A0A";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="w-full min-h-[700px] flex flex-col lg:flex-row overflow-hidden font-sans">
      {/* Left Column: Visual Image */}
      <div className="group lg:w-1/2 relative min-h-[400px] overflow-hidden">
        <Image
          src="/images/interior5.webp"
          alt="Fresh Summer Drink"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-90"
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Right Column: Form Area */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden bg-[#C59764]">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/abstract-organic-pattern-design-background_1048-19286.avif"
            alt=""
            fill
            aria-hidden="true"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 w-full max-w-lg bg-white p-10 md:p-16 shadow-2xl rounded-sm text-center">
          <header className="mb-10">
            <h2 className="font-jost  font-bold text-3xl md:text-4xl font-serif text-gray-900 mb-4 tracking-tight uppercase">
              Get In Touch
            </h2>
            <p className="font-jost  text-gray-500 text-sm italic">
              Call our Reservations Team on{" "}
              <span className="text-gray-900 font-semibold">
                {" "}
                +1 403-265-6555
              </span>
            </p>
          </header>

          <form className="space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full border-b border-gray-200 py-2 focus:border-[#f59e0b] outline-none transition-colors text-sm text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full border-b border-gray-200 py-2 focus:border-[#f59e0b] outline-none transition-colors text-sm text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full border-b border-gray-200 py-2 focus:border-[#f59e0b] outline-none transition-colors text-sm text-gray-800 placeholder-gray-400 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button with requested hover effects */}
            <button
              type="submit"
              className="font-jost  bg-amber-600 px-10 py-4 text-white font-bold text-[13px] tracking-[0.2em] uppercase transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(245,158,11,0.3)] active:scale-95 shadow-md"
              // style={{ backgroundColor: brandOrange }}
            >
              Send Your Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
