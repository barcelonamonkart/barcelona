import Image from "next/image";
import Link from "next/link";

const OurStory = () => {
  // Replace with your actual story image
  const storyImage = "/images/drinks2.jpg";
  // const storyImage = "/images/interior5.webp";
  const secondaryImage = "/images/breakfast.jpg";

  // Brand Color Constants based on the uploaded image
  const brandOrange = "#E05A0A"; // Vibrant orange from image_1005c1.png

  return (
    <section className="py-20 px-4 md:px-12  bg-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 ">
        {/* Left Side: Two overlapping images */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[600px] aspect-[660/646]">
            {/* Back image: left, lower, extends below the front image */}
            <div className="group absolute left-0 top-[23.5%] z-0 h-[76.5%] w-[50%] overflow-hidden">
              <Image
                src={secondaryImage}
                alt="Guests dining at Barcelona Tavern"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Front image: right, taller, overlaps the back image */}
            <div className="group absolute right-0 top-0 z-10 h-[89%] w-[70%] overflow-hidden">
              <Image
                src={storyImage}
                alt="Barista at work"
                fill
                sizes="(min-width: 768px) 35vw, 70vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="flex items-center gap-4 mb-4">
            <span
              // style={{ color: brandOrange }}
              className="text-amber-600 text-sm font-bold tracking-[0.2em] uppercase"
            >
              Hey! Welcome to Barcelona Tavern
            </span>
            <div
              // style={{ backgroundColor: brandOrange }}
              className="w-12 h-px bg-amber-600"
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-8 tracking-wide">
            OUR STORY
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg">
            <p>
              In Barcelona, the tavern is the heart of the neighbourhood. It&apos;s
              where friends meet after work, strangers share a table, and
              nobody&apos;s in a hurry to leave. In 2014, we brought that idea to
              downtown Calgary.
            </p>{" "}
            <p>
              Over a decade later, the spirit hasn&apos;t changed. We serve Spanish-
              and Mediterranean-inspired plates made with local ingredients,
              sangria made for sharing and a room that&apos;s always buzzing, whether
              it&apos;s a Tuesday lunch or a big game night. It&apos;s why we&apos;ve become
              one of the downtown Calgary restaurants that locals keep coming
              back to.
            </p>
            <p>
              In 2025 we moved just down the street to our new home at 318 8th
              Ave SW. It&apos;s a new room with the same good times on tap, and the
              place where strangers become regulars and regulars become family.
            </p>
          </div>

          <Link
            href="/menu"
            // style={{ backgroundColor: brandOrange }}
            className="bg-amber-600 cursor-pointer mt-10 px-10 py-4 text-white font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            Explore Our Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
