import Link from "next/link";
import { ArrowRight } from "lucide-react";
import menuSection from "../menu/menuSection.json";
import ClipReveal from "./ClipReveal";
import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";

type MenuItem = { name: string; price: string; description: string };

const toTitleCase = (name: string) =>
  name.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());

const toItems = (items: MenuItem[]): MenuItem[] =>
  items.map((item) => ({ ...item, name: toTitleCase(item.name) }));

const STARTERS = toItems(
  menuSection.FOOD.find(
    (category) => category.category === "ART OF SHARING (TAPAS)",
  )?.items.slice(0, 4) ?? [],
);

const MAIN_DISHES = toItems(
  [
    "WAGYU BURGER",
    "SAUSAGE AND SHISHITO",
    "SEAFOOD PAELLA",
    "ALBERTA BISON BOLOGNESE",
  ].flatMap((name) => {
    const item = menuSection.FOOD.flatMap((category) => category.items).find(
      (menuItem) => menuItem.name === name,
    );
    return item ? [item] : [];
  }),
);

const BEVERAGES = toItems(
  menuSection.DRINKS.find(
    (category) => category.category === "COCKTAILS DE LA CASA",
  )?.items.slice(0, 6) ?? [],
);

const CARDS = [
  {
    eyebrow: "Fresh taste buds",
    title: "Starters",
    items: STARTERS,
    image: "/images/drinks4.jpg",
    imageAlt: "Chilled prawn cocktail with a squeeze of lemon",
    linkText: "View Food Menu",
    href: "/menu?tab=FOOD",
  },
  {
    eyebrow: "Top rated dishes",
    title: "Main Dishes",
    items: MAIN_DISHES,
    image: "/images/food3.jpg",
    imageAlt: "Rigatoni in tomato sauce topped with burrata and basil",
    linkText: "View Food Menu",
    href: "/menu?tab=FOOD",
  },
  {
    eyebrow: "Drink & wines",
    title: "Beverage",
    items: BEVERAGES,
    image: "/images/drinks6.jpg",
    imageAlt: "House cocktail with rose petals and ice",
    linkText: "View Drinks Menu",
    href: "/menu?tab=DRINKS",
  },
];

export default function MenuCardsSection() {
  return (
    <section className="w-full bg-[#FDFBF7] py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <Reveal className="mb-14 text-center lg:mb-20">
          <span className="mb-3 block font-jost text-sm font-semibold uppercase tracking-[0.08em] text-amber-600">
            From our kitchen &amp; bar
          </span>
          <h2 className="font-cormorant text-4xl font-semibold uppercase leading-none text-black lg:text-[52px]">
            Menu Highlights
          </h2>
        </Reveal>

        {/* From lg up the cards stack: each one sticks in the same spot and the
            next slides up over it. They share one fixed height so a card fully
            covers the one under it. Below lg they are a plain list. The spacing is a
            flex gap, not margins: a sticky card counts its margin as part of
            itself, which stopped the earlier cards short of the last one. */}
        <div className="flex flex-col gap-10 lg:gap-24">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="grid grid-cols-1 overflow-hidden bg-white shadow-xl lg:sticky lg:top-28 lg:h-[680px] lg:grid-cols-2 lg:grid-rows-1"
            >
              {/* Menu items (left) */}
              <Reveal className="order-2 p-8 md:p-12 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <span className="block font-jost text-sm font-semibold uppercase tracking-[0.08em] text-amber-600">
                  {card.eyebrow}
                </span>
                <h3 className="mb-10 mt-3 font-cormorant text-4xl font-semibold uppercase leading-none text-black lg:text-[44px]">
                  {card.title}
                </h3>

                <ul className="space-y-7">
                  {card.items.map((item) => (
                    <li key={item.name} className="group">
                      <div className="flex items-center gap-4">
                        <h4 className="font-jost text-xl font-normal leading-tight text-[#3B2417] transition-colors duration-300 group-hover:text-amber-600 lg:text-2xl">
                          {item.name}
                        </h4>
                        <span className="h-px flex-1 bg-gray-200"></span>
                        <span className="font-jost text-lg text-[#3B2417] lg:text-xl">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 line-clamp-2 font-jost text-[15px] leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>

                <Link
                  href={card.href}
                  className="group/link mt-10 inline-flex items-center gap-3 font-jost text-[13px] font-semibold uppercase tracking-[0.08em] text-[#222] transition-colors hover:text-[#E05A0A]"
                >
                  <span className="relative pb-1">
                    {card.linkText}
                    <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-[#E05A0A] transition-transform duration-500 ease-out group-hover/link:origin-right group-hover/link:scale-x-0"></span>
                  </span>
                  <ArrowRight
                    size={16}
                    strokeWidth={2.25}
                    className="transition-transform duration-500 ease-out group-hover/link:translate-x-1.5"
                  />
                </Link>
              </Reveal>

              {/* Photo (right; on top when stacked on small screens) */}
              <ClipReveal className="relative order-1 min-h-[320px] bg-[#121212] lg:order-2">
                <ParallaxImage
                  src={card.image}
                  alt={card.imageAlt}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  strength={0.08}
                  className="object-cover"
                />
              </ClipReveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
