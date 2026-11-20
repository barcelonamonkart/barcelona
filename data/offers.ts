export type Offer = {
  day: string;
  tag: string;
  title: string;
  time: string;
  details: string[];
  accent: string;
  image: string;
};

export const OFFERS: Offer[] = [
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

export function getCurrentOffer() {
  const todayWeekday = new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    timeZone: "America/Edmonton",
  }).format(new Date());

  return (
    OFFERS.find((offer) => offer.day === todayWeekday) ??
    OFFERS[OFFERS.length - 1]
  );
}
