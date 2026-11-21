import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import ScrollFillHeading from "./ScrollFillHeading";
import type { ExperienceCategory } from "../types";
import Link from "next/link";

const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    name: "Happy Hours",
    img: "/happyhours.jpg",
    ref: "/menu/?tab=HAPPY_HOURS"
  },
  {
    name: "DRinks & Cocktails",
    img: "/drinks.jpg",
    ref: "menu/?tab=DRINKS"
  },
  {
    name: "Lunch & Dinner",
    img: "/pasta1.jpg",
    ref: "menu/?tab=FOOD"
  },
];

// All cards are on screen together on large screens, so they reveal one by
// one with a delay. On smaller screens each card reveals as it scrolls in.
const CARD_DELAYS = ["", "lg:delay-[500ms]", "lg:delay-[1000ms]"];

export default function TasteOfJoySection() {
  return (
    <section className="py-24 bg-[#FDFBF7] text-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-24 md:mb-16">
          <Reveal>
            <span className="block font-jost text-amber-600 font-semibold tracking-[0.04em] text-sm uppercase mb-2">
              SPANISH TAPAS &amp; WOOD-FIRED PIZZA
            </span>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative inline-block">
              <ScrollFillHeading
                lines={["A TASTE OF BARCELONA", "IN DOWNTOWN CALGARY"]}
                className="font-serif-display text-center md:text-right text-5xl md:text-6xl lg:text-7xl leading-tight relative z-10"
              />
            </div>
          </Reveal>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mx-auto">
          {EXPERIENCE_CATEGORIES.map((item, index) => (
            <Reveal
              key={index}
              className={`flex flex-col items-center group cursor-pointer ${
                index % 2 !== 0 ? "lg:mt-24" : ""
              } ${CARD_DELAYS[index] ?? ""}`}
            >
              <Link href={item.ref} className="w-full">
                <div className="relative w-full">
                  <div className="relative w-full aspect-[3/4] overflow-hidden shadow-sm">
                    <ParallaxImage
                      src={item.img}
                      alt={item.name}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      // The raised middle card moves a little more, for depth.
                      strength={index % 2 !== 0 ? 0.14 : 0.08}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Hover border that draws itself around the photo, with a gap */}
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-3 h-[calc(100%+24px)] w-[calc(100%+24px)] overflow-visible"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      pathLength={1}
                      fill="none"
                      stroke="#E05A0A"
                      strokeWidth="2"
                      strokeDasharray="1"
                      className="[stroke-dashoffset:1] transition-[stroke-dashoffset] duration-[900ms] ease-in-out group-hover:[stroke-dashoffset:0]"
                    />
                  </svg>
                </div>

                <div className="relative font-medium w-fit mx-auto mt-6 pb-1 uppercase text-[18px] tracking-[0.04em]  text-gray-900 transition-colors duration-300 group-hover:text-amber-600 font-jost">
                  {item.name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left -rotate-[0.6deg] rounded-full bg-[#E05A0A] transition-transform duration-500 ease-out group-hover:origin-right group-hover:scale-x-0"></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
