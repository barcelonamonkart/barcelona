import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function JourneyOfTasteSection() {
  return (
    <section className="relative w-full bg-white pt-20 pb-16 lg:pt-24 lg:pb-24 overflow-hidden">
      {/* Cream backdrop that stops short of the image bottoms */}
      <div className="absolute inset-x-0 top-0 bottom-[calc(4rem+80px)] lg:bottom-[calc(6rem+160px)] bg-[#FCF7F2]"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="relative">
          {/* Title row: full width */}
          <Reveal>
            <div className="flex items-center gap-6 mb-4">
              <span className="font-jost text-[#E05A0A] font-semibold tracking-[0.08em] text-lg uppercase">
                Refresh your taste buds
              </span>
              <span className="hidden sm:block h-px w-[70px] bg-[#E05A0A]/70"></span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-black leading-none mb-9">
              Enjoy An Exceptional
              <br />
              Journey of Taste
            </h2>
          </Reveal>

          {/* Text + button: left half */}
          <div className="w-full lg:w-1/2">
            <Reveal delay={300}>
              <p className="font-jost font text-[#363636] text-base md:text-[18px] leading-[1.7] mb-10">
                We see our customers as invited guests to a party, and we are
                the hosts. It&apos;s our job every day to make every important
                aspect of the customer experience a little bit better.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <Link
                href="/about"
                className="inline-block bg-[#E05A0A] px-7 py-3 font-jost text-[13px] font-semibold tracking-[0.04em] uppercase text-white transition-colors hover:bg-[#bd4a06]"
              >
                Discover More
              </Link>
            </Reveal>
          </div>

          {/* Landscape image: left half, 3:2 */}
          <div className="w-full lg:w-1/2 mt-14 lg:mt-24">
            <Reveal delay={200}>
              <div className="relative aspect-3/2 w-full">
                <Image
                  src="/barsnacks.webp"
                  alt="Plated bar snacks with a glass of beer"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Portrait image: placed bottom-right, 2:3, hidden on mobile */}
          <div className="hidden md:block absolute bottom-0 right-0 w-[42.5%] max-w-[550px]">
            <Reveal delay={300}>
              <div className="relative aspect-2/3 w-full">
                <Image
                  src="/brunch.webp"
                  alt="Guest enjoying brunch with coffee and dessert"
                  fill
                  sizes="(min-width: 1024px) 40vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
