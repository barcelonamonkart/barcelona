import Link from "next/link";
import { RESERVATION_URL } from "@/lib/reservation";
import menuSection from "../menu/menuSection.json";
import Reveal from "./Reveal";
import Image from "next/image";

type MenuItem = { name: string; price: string; description: string };
const toTitleCase = (name: string) =>
  name.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());

const STARTERS: MenuItem[] =
  menuSection.FOOD.find(
    (category) => category.category === "ART OF SHARING (TAPAS)",
  )
    ?.items.slice(0, 4)
    .map((item) => ({
      ...item,
      name: toTitleCase(item.name),
    })) ?? [];

const MAIN_DISHES: MenuItem[] = [
  "WAGYU BURGER",
  "SAUSAGE AND SHISHITO",
  "SEAFOOD PAELLA",
  "ALBERTA BISON BOLOGNESE",
].flatMap((name) => {
  const item = menuSection.FOOD.flatMap((category) => category.items).find(
    (menuItem) => menuItem.name === name,
  );

  return item ? [{ ...item, name: toTitleCase(item.name) }] : [];
});

const BEVERAGES: MenuItem[] =
  menuSection.DRINKS.find(
    (category) => category.category === "COCKTAILS DE LA CASA",
  )
    ?.items.slice(0, 6)
    .map((item) => ({
      ...item,
      name: toTitleCase(item.name),
    })) ?? [];

const COLUMNS = [
  {
    eyebrow: "Fresh taste buds",
    title: "Starters",
    items: STARTERS,
  },
  {
    eyebrow: "Top rated dishes",
    title: "Main Dishes",
    items: MAIN_DISHES,
  },
  {
    eyebrow: "Drink & wines",
    title: "Beverage",
    items: BEVERAGES,
  },
];

// The columns sit side by side from md up, so they reveal one by one with a
// delay there. When stacked, each column reveals as it scrolls in.
const COLUMN_DELAYS = ["", "md:delay-[500ms]", "md:delay-[1000ms]"];

const buttonClass =
  "inline-block border-2 border-black px-8 py-3.5 font-jost text-[13px] font-semibold tracking-[0.08em] uppercase text-black transition-colors hover:bg-black hover:text-white";

export default function MenuHighlightsSection() {
  return (
    <section className=" relative w-full bg-white py-20 lg:py-24">
      {/* Bull logo watermark behind the text column. The clip-path makes the
          section a window onto the fixed image, so the bull stays put while
          the text scrolls over it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 [clip-path:inset(0)]"
      >
        <div className="fixed inset-y-0 left-0 w-full p-6 lg:p-10">
          <div className="relative h-full w-full">
            <Image
              src="/MonochromeChargingBullLogo.png"
              alt=""
              fill
              sizes="100vw"
              className="object-contain object-center opacity-3"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 lg:gap-12">
          {COLUMNS.map((column, columnIndex) => (
            <Reveal key={column.title} className={COLUMN_DELAYS[columnIndex]}>
              <div>
                <div className="text-center mb-12">
                  <span className="block font-jost text-amber-600 font-semibold text-sm tracking-[0.08em] uppercase mb-3">
                    {column.eyebrow}
                  </span>
                  <h2 className="font-cormorant text-4xl lg:text-[44px] font-semibold text-black uppercase leading-none">
                    {column.title}
                  </h2>
                </div>

                <ul className="space-y-9">
                  {column.items.map((item) => (
                    <li key={item.name} className="group">
                      <div className="flex items-center gap-4">
                        <h3 className="font-jost text-2xl font-normal text-[#3B2417] leading-tight transition-colors duration-300 group-hover:text-amber-600">
                          {item.name}
                        </h3>
                        <span className="flex-1 h-px bg-gray-200"></span>
                        <span className="font-jost text-xl text-[#3B2417]">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-jost text-[15px] leading-6 text-gray-600 mt-2.5 line-clamp-2">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            <Link href="/menu" className={buttonClass}>
              Browse Menus
            </Link>
            <Link
              href={RESERVATION_URL}
              target="_blank"
              className={buttonClass}
            >
              Book a Table
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
