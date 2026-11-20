import Image from "next/image";
import Reveal from "./Reveal";

type DrinkSizePrice = {
  size: string;
  price: string;
};

type SpecialDrink = {
  title: string;
  origin: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
  prices: DrinkSizePrice[];
};

const DRINKS: SpecialDrink[] = [
  {
    title: "Beringer Cabernet Sauvignon",
    origin: "California, United States",
    imageSrc: "/beringerCabernetSauvignon.webp",
    imageAlt: "Beringer Cabernet Sauvignon",
    imageLeft: true,
    prices: [
      { size: "5oz", price: "$10.00" },
      { size: "Bottle", price: "$55.00" },
    ],
  },
  {
    title: "Carnivor Zinfandel",
    origin: "Modesto Ca, United States",
    imageSrc: "/carnivorZinfandel.webp",
    imageAlt: "Carnivor Zinfandel",
    imageLeft: false,
    prices: [
      { size: "5oz", price: "$11.00" },
      { size: "Bottle", price: "$65.00" },
    ],
  },
  {
    title: "Whitehaven Pinot Noir",
    origin: "New Zealand",
    imageSrc: "/whitehavenPinot Noir.webp",
    imageAlt: "Whitehaven Pinot Noir",
    imageLeft: true,
    prices: [
      { size: "5oz", price: "$14.00" },
      { size: "Bottle", price: "$80.00" },
    ],
  },
];

const SECTION_WRAP =
  "flex flex-col lg:flex-row items-center gap-12 lg:gap-24 max-w-6xl mx-auto";
const IMAGE_WRAP = "w-full lg:w-1/2 relative";
const TEXT_WRAP = "w-full lg:w-1/2";

function SpecialDrinkImage({
  imageSrc,
  imageAlt,
  className = "",
}: Pick<SpecialDrink, "imageSrc" | "imageAlt"> & { className?: string }) {
  return (
    <div className={`${IMAGE_WRAP} ${className}`}>
      <Reveal>
        <div className="absolute top-4 -left-4 w-full h-full bg-[#E8F1E6] rounded-[2rem] -rotate-2 z-0 scale-105" />

        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </Reveal>
    </div>
  );
}

function SpecialDrinkContent({
  title,
  origin,
  prices,
  index,
  className = "",
}: Pick<SpecialDrink, "title" | "origin" | "prices"> & {
  index: number;
  className?: string;
}) {
  return (
    <div className={`${TEXT_WRAP} ${className}`}>
      <Reveal delay={200}>
        <span className="block text-amber-500 font-bold tracking-[0.15em] text-[10px] uppercase mb-4 font-sans-body">
          Special Drink #{index + 1}
        </span>

        <h3 className="font-serif-display text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
          {title}
        </h3>

        <p className="text-gray-500 font-serif-display italic text-lg mb-8 leading-relaxed">
          {origin}
        </p>

        <div className="flex flex-col gap-4 max-w-sm">
          {prices.map(({ size, price }) => (
            <div
              key={`${size}-${price}`}
              className="flex items-center justify-between group cursor-default"
            >
              <span className="border border-gray-900 px-4 py-1 text-[11px] font-bold tracking-widest uppercase text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                {size}
              </span>
              <span className="text-2xl font-bold font-serif-display text-gray-900">
                {price}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default function SummerSpecialSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <span className="block text-amber-500 font-bold tracking-[0.2em] text-[11px] uppercase mb-4 font-sans-body">
              Cheers to Great Taste
            </span>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative inline-block">
              <h2 className="uppercase font-serif-display text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
                Sip the Season <br />
                Crafted to Impress
              </h2>
              <span className="font-script text-7xl md:text-8xl text-amber-400 absolute -bottom-15 md:-bottom-19 -right-1 md:-right-32 -rotate-12 z-20">
                Cheers
              </span>
            </div>
          </Reveal>
        </div>

        {DRINKS.map((drink, index) => (
          <div key={drink.title} className={`${SECTION_WRAP} mb-20 last:mb-0`}>
            <SpecialDrinkImage
              imageSrc={drink.imageSrc}
              imageAlt={drink.imageAlt}
              className={
                drink.imageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"
              }
            />
            <SpecialDrinkContent
              title={drink.title}
              origin={drink.origin}
              prices={drink.prices}
              index={index}
              className={
                drink.imageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
