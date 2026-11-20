import { RESERVATION_URL } from "@/lib/reservation";
import Link from "next/link";
import ClipReveal from "./ClipReveal";
import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import ScrollFillHeading from "./ScrollFillHeading";

export default function UniqueDiningSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <ClipReveal
            className="w-full lg:w-5/12 h-[600px] lg:h-[750px] relative z-10"
            revealedClassName="shadow-2xl"
          >
            <ParallaxImage
              src="/images/girls.jpg"
              alt="Outdoor patio dining at Barcelona Calgary with handcrafted cocktails and vibrant atmosphere"
              sizes="(min-width: 1024px) 42vw, 100vw"
              strength={0.06}
              className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-700"
            />
          </ClipReveal>

          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="grid grid-cols-2 gap-4 mb-10">
              <ClipReveal
                delay={200}
                className="relative aspect-[4/3]"
                revealedClassName="shadow-lg"
              >
                <ParallaxImage
                  src="/images/interior5.webp"
                  alt="Stylish outdoor patio restaurant in Calgary serving handcrafted cocktails and fresh food"
                  sizes="(min-width: 1024px) 24vw, 50vw"
                  strength={0.1}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </ClipReveal>
              <ClipReveal
                delay={500}
                className="relative aspect-[4/3]"
                revealedClassName="shadow-lg"
              >
                <ParallaxImage
                  src="/images/bar.jpg"
                  alt="Barcelona Calgary patio with outdoor seating, cocktails, and lively dining experience"
                  sizes="(min-width: 1024px) 24vw, 50vw"
                  strength={0.14}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </ClipReveal>
            </div>

            <div className="lg:pr-12">
              <Reveal delay={400}>
                <h2 className="sr-only">
                  Best Patio Dining Experience in Calgary with Outdoor Seating
                </h2>
                <span className="block text-[#E05A0A] font-bold tracking-[0.2em] text-[11px] uppercase mb-4 font-sans-body">
                  BARCELONA TAVERN · DOWNTOWN CALGARY
                </span>
                <ScrollFillHeading
                  lines={["Good Times on Tap, Spanish Style"]}
                  className="uppercase font-serif-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
                />
                {/* text-[#363636] */}
                <p className="text-gray-600  font-jost leading-relaxed text-sm md:text-[18px] mb-10 max-w-xl">
                  In Barcelona, the tavern is where everyone ends up: after
                  work, before the game, and long after dinner should have
                  ended. We brought that spirit to Stephen Avenue. Share tapas
                  and paella, pour a jug of sangria, and settle in with friends,
                  family or the whole office. Pull up a chair, stay a while.
                  Nobody&apos;s in a hurry here.
                </p>

                <Link
                  // href={`https://tables.toasttab.com/restaurants/b137a11e-cf5c-4d4e-85ea-c5b54fdcd8b3/reserve`}
                  // href={`https://www.opentable.ca/restaurant/profile/1519579/reserve?restref=1519579&lang=en-CA&ot_source=Restaurant%20website`}
                  href={RESERVATION_URL}
                  target="_blank"
                  className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 pb-1 hover:text-[#E05A0A] transition-colors font-sans-body relative group"
                >
                  Reserve Your Spot
                  {/* EXPLORE OUR MENU */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E05A0A] transition-transform duration-500 ease-out origin-left group-hover:origin-right group-hover:scale-x-0"></span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
