type HeadSectionProps = {
  title: string;
  bgImg: string;
};

const HeadSection = ({ title, bgImg }: HeadSectionProps) => {
  // const backgroundImage = "bar.webp";
  const backgroundImage = "interior1.webp";
  const sectionBackgroundImage = bgImg?.trim() ? bgImg : backgroundImage;

  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[60vh] flex flex-col overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${sectionBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute inset-0 z-10 bg-black/50" />

        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-20 pt-48 ">
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-serif tracking-widest uppercase text-center"
            style={{
              fontFamily: "serif", // Use a high-quality serif font like Playfair Display
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </h1>

          <div className="w-24 h-px bg-white/40 mt-6 md:mt-8"></div>
        </div>

        <div className="relative z-20 h-16 w-full flex items-center justify-center"></div>
      </section>
    </>
  );
};

export default HeadSection;
