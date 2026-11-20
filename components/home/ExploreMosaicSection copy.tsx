import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

function UnderlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group/link relative inline-block pb-1 font-jost text-sm font-semibold tracking-[0.06em] uppercase text-white transition-colors hover:text-amber-600"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-100 bg-[#E05A0A] transition-transform duration-500 ease-out group-hover/link:origin-right group-hover/link:scale-x-0"></span>
    </Link>
  );
}

type ImageTileProps = {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
};

function ImageTile({ src, alt, className = "", children }: ImageTileProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {children ? (
        <>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>
          {children}
        </>
      ) : null}
    </div>
  );
}

type TextTileProps = {
  eyebrow: string;
  title: string;
  href: string;
  className?: string;
  buttonText: string;
};

function TextTile({
  eyebrow,
  title,
  href,
  buttonText,
  className = "",
}: TextTileProps) {
  return (
    <>
     {/* text-[#E05A0A] */}
      <div
        className={`flex flex-col items-center justify-center bg-[#121212] px-6 text-center ${className}`}
      >
        <span className="font-jost  text-amber-600 font-semibold text-base lg:text-lg tracking-[0.08em] uppercase mb-6">
          {eyebrow}
        </span>
        <h3 className="font-cormorant text-xl lg:text-[32px] font-medium text-white uppercase leading-[1.05] mb-7 max-w-[260px]">
          {title}
        </h3>
        <UnderlineLink href={href}>{buttonText}</UnderlineLink>
      </div>
    </>
  );
}

export default function ExploreMosaicSection() {
  return (
    <section className="w-full bg-[#FDFBF7] pt-5 lg:h-[80dvh] lg:min-h-[640px]">
      <Reveal className="lg:h-full">
        <div className="grid grid-cols-2 lg:h-full lg:grid-cols-5 lg:grid-rows-2">
          {/* Large feature tile */}
          <ImageTile
            src="/images/food.jpg"
            alt="Signature plates from our action station"
            className="col-span-2 aspect-4/3 lg:aspect-auto lg:col-start-1 lg:row-start-1 lg:row-span-2"
          >
            <div className="absolute bottom-0 left-0 p-6 lg:p-6 text-white">
              <span className="block font-jost font-semibold text-lg tracking-[0.04em] uppercase mb-3">
                Recommendations
              </span>
              <h3 className="font-cormorant text-4xl lg:text-5xl font-medium uppercase leading-none mb-6">
                Our Signature Plates
              </h3>
              <UnderlineLink href="/menu?tab=FOOD">
                Explore Food Menu
              </UnderlineLink>
            </div>
          </ImageTile>

          <ImageTile
            src="/images/food2.jpg"
            alt="Bar snacks to share"
            className="aspect-square lg:aspect-auto lg:col-start-3 lg:row-start-1"
          />

          <TextTile
            eyebrow="LUNCH · DINNER"
            title="Something for Every Hour"
            href="/menu"
            buttonText="View All Menus"
            className="aspect-square lg:aspect-auto lg:col-start-4 lg:row-start-1"
          />

          <TextTile
            eyebrow="Private events"
            title="Bring the Whole Crew"
            href="/events"
            buttonText="Plan Your Event"
            className="aspect-square lg:aspect-auto lg:col-start-3 lg:row-start-2"
          />

          <ImageTile
            src="/images/girls4.jpg"
            alt="Dessert plated with berry sauce"
            className="aspect-square lg:aspect-auto lg:col-start-4 lg:row-start-2"
          />

          {/* Tall drinks tile */}
          <ImageTile
            src="/images/drinks2.jpg"
            alt="Handcrafted cocktail"
            className="col-span-2 aspect-4/3 lg:aspect-auto lg:col-span-1 lg:col-start-5 lg:row-start-1 lg:row-span-2"
          >
            <div className="absolute bottom-0 right-0 p-6 text-right text-white">
              <span className="block font-jost font-semibold text-lg tracking-[0.04em] uppercase mb-3">
                COCKTAILS · DRAFT
              </span>
              <h3 className="font-cormorant text-4xl lg:text-[44px] font-medium uppercase leading-none mb-6">
                Have a Drink
              </h3>
              <UnderlineLink href="/menu?tab=DRINKS">
                Explore Drinks List
              </UnderlineLink>
            </div>
          </ImageTile>
        </div>
      </Reveal>
    </section>
  );
}
