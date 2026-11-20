import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClipReveal from "./ClipReveal";
import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";

// On load each tile wipes in from the top, then its text fades up. This is how
// long after the tile starts that the text begins.
const TEXT_DELAY = 900;

function UnderlineLink({
  href,
  children,
  arrow,
}: {
  href: string;
  children: React.ReactNode;
  // Adds an arrow beside the link, driven by the surrounding `group` (the
  // tile) being hovered:
  // - "reveal": slides in and nudges on hover (always shown below lg, where
  //   there is no hover)
  // - "slide": hidden until the tile is hovered, then fades in, slides right
  //   and keeps moving left and right while the tile stays hovered
  arrow?: "reveal" | "slide";
}) {
  const link = (
    <Link
      href={href}
      className="group/link pointer-events-auto relative inline-block pb-1 font-jost text-sm font-semibold tracking-[0.06em] uppercase text-white transition-colors hover:text-amber-600"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-100 bg-[#E05A0A] transition-transform duration-500 ease-out group-hover/link:origin-right group-hover/link:scale-x-0"></span>
    </Link>
  );

  if (!arrow) return link;

  return (
    <span className="inline-flex items-center gap-3">
      {link}
      {arrow === "slide" ? (
        <span
          aria-hidden="true"
          className="inline-flex text-amber-500 opacity-0 -translate-x-1 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:opacity-100"
        >
          <ArrowRight
            size={18}
            strokeWidth={2.25}
            className="group-hover:animate-[arrowNudge_1.1s_ease-in-out_infinite] motion-reduce:animate-none"
          />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="inline-flex text-amber-500 opacity-100 transition-all duration-500 ease-out lg:-translate-x-3 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
        >
          <ArrowRight
            size={18}
            strokeWidth={2.25}
            className="lg:group-hover:animate-[arrowNudge_1.1s_ease-in-out_infinite] motion-reduce:animate-none"
          />
        </span>
      )}
    </span>
  );
}

type ImageTileProps = {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
  // Makes the whole tile a link. Keep a real link inside the children too
  // (for keyboard and screen reader users); this one is only the click area.
  href?: string;
  // When the tile starts wiping in, in ms.
  delay?: number;
  // How far the photo drifts as you scroll, as a fraction of the tile height.
  strength?: number;
};

function ImageTile({
  src,
  alt,
  className = "",
  children,
  href,
  delay = 0,
  strength = 0.1,
}: ImageTileProps) {
  return (
    <ClipReveal
      delay={delay}
      className={`group relative bg-[#121212] ${className}`}
    >
      <ParallaxImage
        src={src}
        alt={alt}
        sizes="(min-width: 1024px) 40vw, 100vw"
        strength={strength}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {children ? (
        <>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>
          {children}
        </>
      ) : null}
      {href ? (
        <Link
          href={href}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 z-10"
        />
      ) : null}
    </ClipReveal>
  );
}

type TextTileProps = {
  eyebrow: string;
  title: string;
  href: string;
  className?: string;
  buttonText: string;
  // Hover: the arrow beside the link fades in and slides right.
  arrow?: boolean;
  // Hover: the tile background also lightens from #121212 to #191919, and the
  // arrow is included.
  interactive?: boolean;
  // Text tiles don't wipe in; this is the delay (ms) of its neighbouring
  // photo tile, so the text appears in step with it.
  delay?: number;
};

function TextTile({
  eyebrow,
  title,
  href,
  buttonText,
  className = "",
  arrow = false,
  interactive = false,
  delay = 0,
}: TextTileProps) {
  return (
    <>
     {/* text-[#E05A0A] */}
      <div
        className={`group flex flex-col items-center justify-center bg-[#121212] px-6 text-center ${
          interactive ? "transition-colors duration-500 hover:bg-[#191919]" : ""
        } ${className}`}
      >
        <Reveal
          delay={delay + TEXT_DELAY}
          width="auto"
          className="flex flex-col items-center"
        >
          <span className="font-jost  text-amber-600 font-semibold text-base lg:text-lg tracking-[0.08em] uppercase mb-6">
            {eyebrow}
          </span>
          <h3 className="font-cormorant text-xl lg:text-[32px] font-medium text-white uppercase leading-[1.05] mb-7 max-w-[260px]">
            {title}
          </h3>
          <UnderlineLink
            href={href}
            arrow={interactive || arrow ? "slide" : undefined}
          >
            {buttonText}
          </UnderlineLink>
        </Reveal>
      </div>
    </>
  );
}

export default function ExploreMosaicSection() {
  return (
    <section className="w-full bg-[#FDFBF7] pt-5 lg:h-[80dvh] lg:min-h-[640px]">
      <div className="lg:h-full">
        <div className="grid grid-cols-2 lg:h-full lg:grid-cols-5 lg:grid-rows-2">
          {/* Large feature tile */}
          <ImageTile
            src="/images/food.jpg"
            alt="Signature plates from our action station"
            href="/menu?tab=FOOD"
            delay={0}
            strength={0.09}
            className="col-span-2 aspect-4/3 lg:aspect-auto lg:col-start-1 lg:row-start-1 lg:row-span-2"
          >
            <Reveal
              delay={TEXT_DELAY}
              width="auto"
              className="pointer-events-none absolute bottom-0 left-0 z-20 p-6 lg:p-6 text-white"
            >
              <span className="block font-jost font-semibold text-lg tracking-[0.04em] uppercase mb-3">
                Recommendations
              </span>
              <h3 className="font-cormorant text-4xl lg:text-5xl font-medium uppercase leading-none mb-6">
                Our Signature Plates
              </h3>
              <UnderlineLink href="/menu?tab=FOOD" arrow="slide">
                Explore Food Menu
              </UnderlineLink>
            </Reveal>
          </ImageTile>

          <ImageTile
            src="/images/food2.jpg"
            alt="Bar snacks to share"
            delay={250}
            className="aspect-square lg:aspect-auto lg:col-start-3 lg:row-start-1"
          />

          <TextTile
            eyebrow="LUNCH · DINNER"
            title="Something for Every Hour"
            href="/menu"
            buttonText="View All Menus"
            interactive
            delay={500}
            className="aspect-square lg:aspect-auto lg:col-start-4 lg:row-start-1"
          />

          <TextTile
            eyebrow="Private events"
            title="Bring the Whole Crew"
            href="/events"
            buttonText="Plan Your Event"
            arrow
            delay={250}
            className="aspect-square lg:aspect-auto lg:col-start-3 lg:row-start-2"
          />

          <ImageTile
            src="/images/girls3.jpg"
            alt="Dessert plated with berry sauce"
            delay={500}
            className="aspect-square lg:aspect-auto lg:col-start-4 lg:row-start-2"
          />

          {/* Tall drinks tile */}
          <ImageTile
            src="/images/drinks2.jpg"
            alt="Handcrafted cocktail"
            delay={750}
            strength={0.09}
            className="col-span-2 aspect-4/3 lg:aspect-auto lg:col-span-1 lg:col-start-5 lg:row-start-1 lg:row-span-2"
          >
            <Reveal
              delay={750 + TEXT_DELAY}
              width="auto"
              className="absolute bottom-0 right-0 p-6 text-right text-white"
            >
              <span className="block font-jost font-semibold text-lg tracking-[0.04em] uppercase mb-3">
                COCKTAILS · DRAFT
              </span>
              <h3 className="font-cormorant text-4xl lg:text-[44px] font-medium uppercase leading-none mb-6">
                Have a Drink
              </h3>
              <UnderlineLink href="/menu?tab=DRINKS" arrow="slide">
                Explore Drinks List
              </UnderlineLink>
            </Reveal>
          </ImageTile>
        </div>
      </div>
    </section>
  );
}
