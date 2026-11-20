import Image from "next/image";
import Link from "next/link";
import ClipReveal from "./ClipReveal";
import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import ScrollShift from "./ScrollShift";
import ScrollFillHeading from "./ScrollFillHeading";
import StaggerText from "./StaggerText";

// Same amber as the vertical tagline (text-amber-600, rgb(225, 113, 0)).
const AMBER = [225, 113, 0];

export default function WelcomeSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:pt-[122px] lg:pb-[116px] overflow-hidden">
      {/* Patterned panel on the right */}
      {/* bg-[#ffebdf] */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-[39.3%] bg-[#C59764] z-0 overflow-hidden">
        <Image
          src="/abstract-organic-pattern-design-background_1048-19286.avif"
          alt=""
          fill
          aria-hidden="true"
          sizes="40vw"
          className="object-cover opacity-50"
        />
      </div>

      {/* Bull logo watermark behind the text column */}
      <div
        aria-hidden="true"
        className=" pointer-events-none absolute -left-100 top-0 z-0 h-full w-full lg:w-[60.7%] p-6 lg:p-10"
      >
        <ScrollShift className="relative h-full w-full" distance={140}>
          <Image
            src="/MonochromeChargingBullLogo.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-contain object-center opacity-3"
          />
        </ScrollShift>
      </div>

      <h2 className="sr-only">
        Best Cocktail Bar and Dining Experience in Calgary
      </h2>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 items-center">
          {/* Text column */}
          {/* text-[#E05A0A]  */}
          <div className="text-center lg:text-left lg:pr-10">
            {/* <Reveal>
              <span className="block font-jost text-amber-600 font-semibold tracking-[0.04em] text-sm uppercase mb-4">
                Welcome to Barcelona
              </span>
            </Reveal> */}

            <Reveal delay={200}>
              <div className="mb-10">
                <div className="relative inline-block">
                  <ScrollFillHeading
                    lines={["A Taste of Spain in Calgary"]}
                    dark={AMBER}
                    className="font-serif-display text-5xl md:text-6xl lg:text-[68px] font-normal leading-[1.05] uppercase"
                  />
                </div>
              </div>
              {/* <div className="mb-10">
                <div className="relative inline-block">
                  <h2 className="font-serif-display text-5xl md:text-6xl lg:text-[68px] font-normal text-black leading-[1.05] uppercase">
                    Come &amp; Meet
                  </h2>
                  <span
                    aria-hidden="true"
                    className="font-script text-amber-600 text-8xl md:text-9xl lg:text-[120px] leading-none absolute -top-5 lg:-top-9 left-[78%] lg:left-[88%] -rotate-6 pointer-events-none"
                  >
                    us
                  </span>
                </div>
                <h2 className="font-serif-display text-5xl md:text-6xl lg:text-[68px] font-normal text-black leading-[1.05] uppercase">
                  At Barcelona
                </h2>
              </div> */}
            </Reveal>

            <Reveal delay={400}>
              <div className="mb-10">
                <p className="font-jost font-light text-[#363636] text-base md:text-[17px] leading-[1.75] mb-3  max-w-[590px] mx-auto lg:mx-0">
                  Barcelona has always been a place where people come for the
                  food and stay for each other. Tapas and paella move across the
                  table, drinks turn a night into a memory, and a room full of
                  people feels like it belongs to them.
                </p>
                <p className="font-jost font-light text-[#363636] text-base md:text-[17px] leading-[1.75]  max-w-[590px] mx-auto lg:mx-0">
                  Whether you&apos;re stopping by for lunch, planning dinner, or
                  meeting friends for drinks, discover a downtown Calgary dining
                  experience that feels lively, relaxed, and welcoming.
                </p>
              </div>

              <Link
                href="/about"
                className="group relative inline-block pb-1 font-jost text-[13px] font-medium tracking-[0.06em] uppercase text-[#222] transition-colors hover:text-[#E05A0A]"
              >
                Discover our experience
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-100 bg-[#E05A0A] transition-transform duration-500 ease-out group-hover:origin-right group-hover:scale-x-0"></span>
              </Link>
            </Reveal>
          </div>

          {/* Overlapping images */}
          <div className="relative h-[460px] sm:h-[560px] lg:h-[580px] w-full">
            {/* Vertical tagline in the gutter beside the photo (large screens). */}
            <StaggerText
              items={["Spanish Tapas", "Wood-Fired Pizza", "Craft Cocktails"]}
              className="absolute -left-9 top-0 z-30 hidden h-full w-6 rotate-180 items-center justify-center gap-4 font-jost text-[13px] font-semibold uppercase tracking-[0.3em] whitespace-nowrap text-amber-600 [writing-mode:vertical-rl] lg:flex"
            />
            <ClipReveal
              className="absolute z-20 top-0 left-0 lg:left-2 h-full w-[58%] lg:w-[55%] overflow-hidden"
            >
              <ParallaxImage
                src="/images/girls4.jpg"
                alt="Barcelona Tavern interior"
                sizes="(max-width: 1024px) 60vw, 28vw"
                strength={0.13}
              />
            </ClipReveal>

            <ClipReveal
              delay={300}
              className="absolute top-[39px] right-0 lg:right-auto lg:left-[48%] h-[calc(100%-78px)] w-[50%] lg:w-[48%] overflow-hidden"
            >
              <ParallaxImage
                src="/images/drinks.jpg"
                alt="Signature cocktail and plates"
                sizes="(max-width: 1024px) 50vw, 25vw"
                strength={0.14}
              />
            </ClipReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
