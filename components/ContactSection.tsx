import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  const backgroundImage = "/images/interior5.webp";
  const brandOrange = "#E05A0A";
  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=318+8+Ave+SW,+Calgary,+AB+T2P+2Y9,+Canada";
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Bar Interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 py-20 text-center text-white flex flex-col items-center">
        <div className="mb-2">
          <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-95">
            BARCELONA TAVERN · STEPHEN AVENUE
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 tracking-wide">
          Your Table&apos;s Waiting
        </h2>

        <div className="space-y-4 mb-10 text-white tracking-wider">
          {/* <p className="text-sm md:text-base">From 18:00 to 02:00</p> */}
          <address className="not-italic text-sm md:text-base leading-relaxed">
            318 8 Ave SW,
            <br />
            Calgary, AB T2P 2Y9, Canada
          </address>
          <p className="text-sm md:text-base font-medium text-white">
            +1 403-265-6555
          </p>
        </div>

        {/* <button className="group relative px-10 py-4 overflow-hidden text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-xl active:scale-95 mb-12 border border-transparent md:border-white/20 bg-amber-500 md:bg-transparent">
          <span
            style={{ backgroundColor: brandOrange }}
            className="absolute inset-0 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out"
          />

          <span className="relative z-10">View in Google Maps</span>
        </button> */}
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-10 py-4 overflow-hidden text-white font-bold text-sm tracking-widest uppercase shadow-xl inline-block transition-all duration-300 ease-in-out  hover:shadow-[0_20px_50px_rgba(245,158,11,0.3)] active:scale-95 mb-12"
          style={{ backgroundColor: brandOrange }}
        >
          <span className="relative z-10">View in Google Maps</span>
        </a>

        <div className="flex  items-center gap-6">
          <Link
            href="https://www.facebook.com/barcelonatavern/"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <Facebook
              size={24}
              className="text-white hover:text-[brandOrange] cursor-pointer transition-colors"
            />
          </Link>
          <Link
            href="https://www.instagram.com/barcelonatavern/"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <Instagram
              size={24}
              className="text-white hover:text-[brandOrange] cursor-pointer transition-colors"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
