import { RESERVATION_URL } from "@/lib/reservation";
import Link from "next/link";
const OurPhilosophy = () => {
  // Replace with your actual philosophy image (e.g., pour-over coffee as seen in image_101fc9.jpg)
  const philosophyImage = "/images/girls8.jpg";
  const secondaryImage = "/images/girlsDinner.jpg";

  // Brand Color Constants
  const brandOrange = "#E05A0A"; // Vibrant orange from image_1005c1.png

  return (
    <section className="py-20 px-4 md:px-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="flex items-center gap-4 mb-4">
            <span
              // style={{ color: brandOrange }}
              className="text-amber-600 text-sm font-bold tracking-[0.2em] uppercase"
            >
              THE BARCELONA WAY
            </span>
            <div
              // style={{ backgroundColor: brandOrange }}
              className="w-12 h-px bg-amber-600"
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-8 tracking-wide uppercase">
            Our <br /> Philosophy
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg">
            <p className="font-medium text-gray-800">
              Food Tastes Better Shared.
            </p>
            <p>
              In Spain, nobody orders just for themselves. Plates land in the
              middle of the table, glasses get filled, and the conversation runs
              long. That&apos;s how we cook and how we host: generous Spanish- and
              Mediterranean-inspired plates made with local ingredients, drinks
              made for pouring, and a room where everyone&apos;s welcome.
            </p>
          </div>

          {/* <button className="group relative mt-10 px-10 py-4 overflow-hidden bg-gray-900 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
            <span
              style={{ backgroundColor: brandOrange }}
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
            />

            <span className="relative z-10">Reservation</span>
          </button> */}

          <Link
            // href="https://tables.toasttab.com/restaurants/b137a11e-cf5c-4d4e-85ea-c5b54fdcd8b3/reserve"
            href={RESERVATION_URL}
            target="_blank"
            // style={{ backgroundColor: brandOrange }}
            className="bg-amber-600   mt-10 px-10 py-4 text-white font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            Reservation
          </Link>
        </div>

        {/* Right Side: Two portrait images side by side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-[600px] aspect-[660/486]">
            {/* Left image: full height */}
            <div className="group absolute left-0 top-0 h-full w-[49.2%] overflow-hidden">
              <img
                src={philosophyImage}
                alt="Our Philosophy - Drink"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Right image: shorter and set slightly lower */}
            <div className="group absolute right-0 top-[5.1%] h-[90.1%] w-[49.2%] overflow-hidden">
              <img
                src={secondaryImage}
                alt="Our Philosophy - Food"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
