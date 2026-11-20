import Image from "next/image";
import Link from "next/link";
import ClipReveal from "./ClipReveal";
import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";

export default function PrivateDiningSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full h-auto lg:h-[700px]">
      <ClipReveal
        direction="left"
        className="w-full lg:w-1/2 h-[400px] lg:h-full relative overflow-hidden bg-[#948D87] order-1 lg:order-1"
      >
        <ParallaxImage
          src="/images/private_dining.webp"
          // src="/images/people.jpg"
          alt="Private dining experience with strawberry pie"
          sizes="(min-width: 1024px) 50vw, 100vw"
          strength={0.2}
        />
      </ClipReveal>

      {/* <div className="w-full lg:w-1/2 bg-[#EFF5ED] relative flex items-center justify-center p-8 lg:p-0 overflow-hidden order-1 lg:order-2"> */}
      <div className="w-full lg:w-1/2 bg-[#948D87] relative flex items-center justify-center p-8 lg:p-0 overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/abstract-organic-pattern-design-background_1048-19286.avif"
            alt=""
            fill
            aria-hidden="true"
            sizes="40vw"
            className="object-cover opacity-50"
          />
        </div>
        {/* <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div> */}

        <Reveal
          direction="right"
          delay={400}
          className="bg-white p-10 md:p-16 max-w-lg w-full shadow-md relative z-10 text-center"
        >
          <span className="block text-[#E05A0A] font-bold tracking-[0.2em] text-[11px] uppercase mb-6 font-sans-body">
            WELCOME TO Barcelona Tavern
          </span>
          <h2 className="uppercase font-serif-display text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
            Private Dining Room
          </h2>
          <p className="text-gray-600 font-jost leading-relaxed text-sm md:text-base mb-10">
            Business lunches, birthday dinners, rehearsal dinners and wedding
            receptions. Our private dining room gives your group its own corner
            of the tavern, with a set menu built around your guests. Choose
            tapas to share, family-style platters or a chef&apos;s set menu, and
            we&apos;ll handle the rest.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 pb-1 hover:text-[#E05A0A] transition-colors font-sans-body relative group"
          >
            Plan Your Event
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E05A0A] transition-transform duration-500 ease-out origin-left group-hover:origin-right group-hover:scale-x-0"></span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
