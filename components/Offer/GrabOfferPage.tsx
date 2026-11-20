"use client";
import { RESERVATION_URL } from "@/lib/reservation";
import { scrollToElement } from "@/lib/smoothScroll";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GrabOfferPage() {
  const createOfferId = (value: string) =>
    value
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const getTodayWeekday = () =>
    new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(new Date());

  const offers = [
    {
      day: "Monday",
      tag: "Industry Night",
      title: "Monday Industry Night",
      time: "Starts at 8 PM",
      details: [
        "$10 cocktail",
        "$5 draft (16oz)",
        "25% off food menu",
        "$20 pitcher (64oz)",
      ],
      accent: "from-amber-500/30 to-orange-700/20",
      image: "/industryNight.jpg",
    },
    {
      day: "Tuesday",
      tag: "Burger & Beer Deal",
      title: "Tuesday Burger Night",
      time: "Available all evening",
      details: [
        "Burger and beer deal",
        "Burger + draft $17.99",
        "Limited daily special",
      ],
      accent: "from-yellow-500/20 to-amber-700/20",
      image: "/burgerBeer.webp",
    },
    {
      day: "Wednesday",
      tag: "Trivia Night",
      title: "Wednesday Trivia Night",
      time: "Starts at 7 PM",
      details: [
        "Trivia night starts @7pm",
        "$9.99 wings (12 piece)",
        "$5 draft (16oz)",
        "$20 pitcher (64oz)",
      ],
      accent: "from-zinc-400/10 to-emerald-700/10",
      image: "/13.jpeg",
    },
    {
      day: "Thursday",
      tag: "Wine Night",
      title: "Thursday Wine Night",
      time: "From 4 PM till late",
      details: [
        "Half-price wine bottle",
        "$22 steak sandwich",
        "Perfect for date night or groups",
      ],
      accent: "from-red-700/25 to-amber-600/10",
      image: "/wineSteak.jpg",
      // image: "/winesbottle.webp",
    },
    {
      day: "Sunday",
      tag: "Caesar Special",
      title: "Sunday Caesar Stack",
      time: "Weekend feature",
      details: [
        "$10 double Barcelona caesar",
        "$20 Barcelona caesar stack",
        "Sunday chill vibes",
      ],
      accent: "from-orange-600/20 to-stone-700/20",
      image: "/offer5.jpeg",
    },
  ];

  const todayWeekday = getTodayWeekday();

  const specificOffers = offers.find((offer) => offer.day === todayWeekday);
  const featured = specificOffers ?? offers[offers?.length - 1];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const scrollTimer = window.setTimeout(() => {
      const targetCard = document.getElementById(hash);
      scrollToElement(targetCard);
    }, 80);

    return () => window.clearTimeout(scrollTimer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="relative overflow-hidden ">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=80"
            alt="Barcelona bar interior"
            fill
            sizes="100vw"
            className="h-full w-full object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0a0a]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-4xl ">
            <div className="mb-6 flex items-center  gap-4">
              {/* <p className="text-xs  font-bold uppercase tracking-[0.24em] text-[#d4a24c]"> */}
              <p className=" text-[#d4a24c] font-bold tracking-[0.24em] text-xs uppercase font-sans-body">
                Weekly Specials - Calgary
              </p>
              <span className="h-px w-14 bg-[#d4a24c]/80" />
            </div>
            <h1 className=" max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-white md:text-7xl">
              {/* <h1 className=" font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight relative z-10"> */}
              Grab an Offer at Barcelona
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-medium leading-snug text-white/90 md:text-2xl">
              Your Night. Your Crew. Your Weekly Deal.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Discover daily deals, signature pours, and crowd-favourite plates
              - all designed to match the bold, social energy of Barcelona
              Calgary.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=80"
            alt="Barcelona bar interior"
            fill
            sizes="100vw"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0a0a]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a24c]/30 bg-[#d4a24c]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#e2b86b]">
              Weekly Specials
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold uppercase tracking-[0.08em] md:text-6xl">
              Grab an Offer at Barcelona
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Discover daily deals, signature pours, and crowd-favourite plates
              — all designed to match the bold, social energy of Barcelona
              Calgary.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#d4a24c] px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:scale-[1.02]">
                View Today’s Offer
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:border-[#d4a24c] hover:text-[#d4a24c]">
                Book a Table
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4a24c]">
              Featured Deal
            </p>
            <h2 className="mt-3 text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
              {specificOffers && "Today’s Highlight "}
            </h2>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-[1px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[360px] md:min-h-[520px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/20 to-black/70" />
            <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
              {featured.day}
            </div>
          </div>

          <div
            className={`relative bg-gradient-to-br ${featured.accent} p-8 md:p-10 lg:p-12`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,162,76,0.22),transparent_30%),linear-gradient(to_bottom_right,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#e2b86b]">
                  {featured.tag}
                </p>
                <h3 className="mt-4 text-4xl font-semibold uppercase leading-tight tracking-[0.08em] md:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-white/70">
                  {featured.time}
                </p>

                <div className="mt-8 space-y-3">
                  {featured.details.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-b border-white/10 pb-3 text-base text-white/85"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#d4a24c]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  // href={`https://tables.toasttab.com/restaurants/b137a11e-cf5c-4d4e-85ea-c5b54fdcd8b3/reserve`}
                  href={RESERVATION_URL}
                  target="_blank"
                  className=" bg-[#d4a24c] px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:scale-[1.02]"
                >
                  Book Now
                </Link>
                <Link
                  href="/menu"
                  className=" border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:border-[#d4a24c] hover:text-[#d4a24c]"
                >
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4a24c]">
              Full Week
            </p>
            <h2 className="mt-3 text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
              Weekly Offer MEnu
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.day}
              id={createOfferId(offer.title)}
              className="group overflow-hidden rounded-[2px] border border-white/10 bg-[#121212] transition duration-300 hover:-translate-y-1 hover:border-[#d4a24c]/40 scroll-mt-40"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#e2b86b] backdrop-blur">
                  {offer.day}
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/65">
                    {offer.tag}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold uppercase leading-tight tracking-[0.06em] text-white">
                    {offer.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#d4a24c]">
                  {offer.time}
                </p>
                <div className="mt-5 space-y-2 text-sm leading-6 text-white/75">
                  {offer.details.slice(0, 3).map((item) => (
                    <div key={item} className="flex gap-2">
                      <span className="text-[#d4a24c]">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <button className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-[#d4a24c]">
                    View Offer
                  </button>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/55">
                    Dine In
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
