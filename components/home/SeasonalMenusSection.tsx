import Link from "next/link";
import Reveal from "./Reveal";

export default function SeasonalMenusSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full h-auto lg:h-[700px]">
      <div className="w-full lg:w-1/2 bg-[#EFF5ED] relative flex items-center justify-center p-8 lg:p-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <Reveal className="bg-white p-10 md:p-12 md:py-16 max-w-lg w-full shadow-md relative z-10 text-center">
          <h2 className="sr-only">Best Handcrafted Cocktails in Calgary</h2>
          <span className="block text-amber-500 font-bold tracking-[0.2em] text-[11px] uppercase mb-6 font-sans-body">
            CRAFTED COCKTAILS IN CALGARY
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
            FRESH SEASONAL MENUS
          </h2>{" "}
          <p className="text-gray-500 font-sans-body leading-relaxed text-sm md:text-[15px] mb-10">
            At Barcelona Calgary, we serve handcrafted cocktails made with premium
            spirits and fresh, locally sourced ingredients. Our cocktail bar
            features signature drinks and seasonal creations, delivering a
            refined mixology experience where every sip is crafted to impress.
          </p>
          <Link
            href="/menu"
            className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 pb-1 hover:text-amber-500 transition-colors font-sans-body relative group"
          >
            EXPLORE COCKTAILS
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 transition-transform duration-500 ease-out origin-left group-hover:origin-right group-hover:scale-x-0"></span>
          </Link>
        </Reveal>
      </div>

      <div className="w-full lg:w-1/2 h-[400px] lg:h-full relative">
        <img
          src="drinks2.webp"
          alt="Handcrafted cocktails at cocktail bar in Calgary"
          className="w-full h-full object-cover"
        />
        {/* <img
          src="burger2.jpg"
          alt="Fresh pastries and donuts"
          className="w-full h-full object-cover"
        /> */}
      </div>
    </section>
  );
}
