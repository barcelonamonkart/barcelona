import Reveal from "./Reveal";

const dishes = [
  {
    name: "Butter Chicken",
    price: "$23",
    desc: "Succulent chicken in a spiced tomato cream sauce with a hint of fenugreek served with basmati rice and naan bread.",
    img: "/Butter-Chicken-With-Naan-Bread-Easy-Indian-Recipe-11.jpg",
    className: "",
    delay: 100,
    alt: "Butter Chicken",
  },
  {
    name: "Blackened Chicken Alfredo",
    price: "$22",
    desc: "Fettuccine in white wine parmesan cream, mushrooms & peas.",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
    className: "lg:mt-24",
    delay: 200,
    alt: "Blackened Chicken Alfredo",
  },
  {
    name: "Chuck Burger",
    price: "$12",
    desc: "Alberta beef patty, chipotle mayo, burger toppings served with choice of fries or market salad.",
    img: "/burger.jpg",
    className: "lg:mt-24",
    delay: 300,
    alt: "Chuck Burger",
  },
  {
    name: "Golden Brie Purse",
    price: "$16",
    desc: "Phyllo pastry wrapped brie, melted into apple-cranberry chutney bliss.",
    img: "/GoldenBriePurse.png",
    className: "",
    delay: 400,
    alt: "Golden Brie Purse",
  },
];

export default function MoreThanDrinksSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F9F9F7] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Reveal>
            <span className="block text-amber-500 font-bold tracking-[0.2em] text-[11px] uppercase mb-4 font-sans-body">
              Crafted Flavors. Elevated Experience
            </span>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative mb-8">
              <h2 className="font-serif-display text-5xl md:text-7xl text-gray-900 leading-none mb-2">
                MORE THAN
              </h2>
              <div className="relative inline-block">
                <span className="font-script text-7xl md:text-8xl text-amber-400/80 absolute -top-8 -left-24 -rotate-12 z-10">
                  Just
                </span>
                <h2 className="font-serif-display text-5xl md:text-7xl text-gray-900 leading-none relative z-20">
                  DRINKS
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-gray-500 font-sans-body leading-relaxed text-sm md:text-[15px]">
              Crafted cocktails meet bold, seasonal flavors bringing together
              food, drinks, and atmosphere for a complete dining experience at
              Barcelona.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {dishes.map((dish) => (
            <Reveal
              key={dish.name}
              delay={dish.delay}
              className={`flex flex-col items-center text-center group ${dish.className}`}
            >
              <div className="w-69 h-69 rounded-full overflow-hidden shadow-xl mb-6  border-white">
                <img
                  src={dish.img}
                  alt={dish.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif-display text-2xl text-gray-900 mb-2">
                {dish.name}
              </h3>
              <span className="font-bold text-lg text-gray-900 mb-3 font-sans-body">
                {dish.price}
              </span>
              <p className="text-gray-500 text-m leading-relaxed max-w-[268px]">
                {dish.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
