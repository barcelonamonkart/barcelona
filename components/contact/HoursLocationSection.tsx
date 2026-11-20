import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const HoursLocationSection = () => {
  const brandOrange = "#f59e0b";
  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=318+8+Ave+SW,+Calgary,+AB+T2P+2Y9,+Canada";

  return (
    <section className="w-full bg-white py-30 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column: Text Content */}
        <div className="flex-1 space-y-8 text-left">
          <header>
            <span className="text-sm font-jost font-bold tracking-[0.2em] uppercase text-[#b08d57] mb-4 block">
              How To Find Us
            </span>
            <h2 className="font-serif-display font-medium text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
              HOURS & LOCATION
            </h2>
          </header>

          <div className="font-jost space-y-6 text-gray-600 leading-relaxed text-sm md:text-base ">
            <div className="space-y-2">
              <p className="font-medium text-gray-800">
                318 8 Ave SW, Calgary, AB T2P 2Y9, Canada
              </p>
              <p className="font-medium text-gray-800">+1 403-265-6555</p>
              <p className="font-medium text-gray-800">
                events@barcelonatavern.com
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Breakfast before the office, lunch with the team, sangria after
                work. We&apos;re here for all of it.
              </p>{" "}
              <p>
                <span className=" font-semibold text-gray-800">
                  Monday: 11 am - 11 pm <br />
                  Tuesday - Friday: 7 am - 11 pm
                  <br />
                  Saturday - Sunday: 11 am - 11 pm
                </span>
                {/* <span className="font-semibold text-gray-800">
                  SUN: 2:00pm – 11:00pm
                  <br />
                  MON, TUE: 4:00pm – 11:00pm
                  <br />
                  WED, THU: 4:00pm – 12:00am
                  <br />
                  FRI, SAT: 2:00pm – 2:00am
                </span> */}
              </p>
              <p>
                Dine in, pick up, or enjoy at home with delivery <br />{" "}
                available during all operating hours.
                <br />
                {/* <span className="text-xs uppercase tracking-wider font-bold text-gray-400 mt-2 block">
                  DELIVERY available on Saturday & Sunday from 11:00am.
                </span> */}
              </p>
            </div>
          </div>

          {/* CTA Button with Hover Effects */}
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost inline-block px-8 py-4 bg-amber-600 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(245,158,11,0.3)] active:scale-95"
          >
            Get Directions
          </a>
        </div>

        {/* Right Column: Image Collage */}
        <div className="flex-1 flex items-start gap-2 h-full">
          {/* Main Portrait Image */}
          <div className="w-2/3 overflow-hidden">
            <Image
              src="/images/girls63.jpg"
              alt="Dining Experience"
              width={800}
              height={500}
              unoptimized
              className="w-full h-[500px] object-cover shadow-lg transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110"
            />
          </div>
          {/* Secondary Inset Image */}
          <div className="w-1/3 mt-12 overflow-hidden">
            <Image
              src="/images/girlsDinner.jpg"
              alt="Cocktail Detail"
              width={600}
              height={350}
              unoptimized
              className="w-full h-[350px] object-cover shadow-md transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.10]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursLocationSection;
