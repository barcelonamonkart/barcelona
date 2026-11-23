import Reveal from "./Reveal";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col aspect-video md:aspect-auto md:min-h-screen">
      {/* The clip-path makes the hero a window onto a video pinned to the
          screen, so the video stays put while the page scrolls over it. */}
      <div className="absolute inset-0 z-0 bg-gray-900 [clip-path:inset(0)]">
        <video
          className="absolute inset-0 h-full w-full object-cover md:fixed"
          src="/barcelonaHeroVideo.mp4"
          poster="/images/interior5.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow text-white">
        <div className="grow flex flex-col justify-center items-center text-center px-4 pt-20 h-138">
          {/* <Reveal delay={200}>
            <h1 className="font-jost uppercase text-5xl md:text-7xl lg:text-[96px] leading-tight tracking-[0.1em]  mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              Good Times
              <br />
              Great Tastes
            </h1>
          </Reveal> */}
          {/* <Reveal delay={200}>
            <h1 className="font-hero-display uppercase text-5xl md:text-7xl lg:text-[96px] leading-tight tracking-[0.12em] mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              Good Times
              <br />
              Great Tastes
            </h1>
          </Reveal> */}
          {/* <Reveal delay={400}>
            <div className="flex items-center gap-6 justify-center">
              <div className="h-px w-8 md:w-16 bg-white/60"></div>
              <span className="font-sans-body text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/90">
                Enjoy Each Bite
              </span>
              <div className="h-px w-8 md:w-16 bg-white/60"></div>
            </div>
          </Reveal> */}
        </div>
      </div>
    </div>
  );
}
