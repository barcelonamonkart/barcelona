import Image from "next/image";
import Link from "next/link";

const InstagramGallery = () => {
  // Mock data for the gallery images
  const galleryImages = [
    {
      id: 1,
      url: "images/interior5.webp",
      gridClass: "col-span-2 row-span-2",
    },
    {
      id: 2,
      url: "images/drinks6.jpg",
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 3,
      url: "images/food2.jpg",
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 4,

      url: "images/girls4.jpg",
      gridClass: "col-span-2 row-span-2",
    },
    {
      id: 5,
      url: "images/drinks2.jpg",
      gridClass: "col-span-1 row-span-2",
    },
    {
      id: 6,
      url: "images/girls5.jpg",
      gridClass: "col-span-1 row-span-2",
    },
    {
      id: 7,
      url: "images/drinks8.jpg",
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 8,
      url: "images/food3.jpg",
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 9,
      url: "images/food.jpg",
      gridClass: "col-span-2 row-span-1",
    },
    {
      id: 10,
      url: "images/food4.jpg",
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 11,
      url: "images/drinks.jpg",
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 12,
      url: "images/interior3.jpg",
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 13,
      url: "images/churos.jpg",
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 14,
      url: "images/breakfast.jpg",
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 15,
      url: "images/drinks10.jpg",
      gridClass: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="relative w-full py-10 bg-white overflow-hidden">
      {/* Grid Container - 6 columns on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] md:auto-rows-[200px] gap-2 md:gap-4 px-2 md:px-4">
        {galleryImages.map((image) => {
          const imageSrc = image.url.startsWith("http")
            ? image.url
            : `/${image.url}`;

          return (
            <div
              key={image.id}
              className={`${image.gridClass} relative group overflow-hidden cursor-pointer`}
            >
              {/* Image */}
              <Link
                target="_blank"
                href={`https://www.instagram.com/barcelonatavern/`}
              >
                <Image
                  src={imageSrc}
                  alt={`Instagram post ${image.id}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Floating Circular CTA */}
      <Link target="_blank" href={`https://www.instagram.com/barcelonatavern/`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-4 pointer-events-auto group cursor-pointer hover:scale-105 transition-transform duration-300 border border-gray-100">
            <p className="text-gray-900 font-bold text-sm md:text-lg leading-tight">
              Follow Us on <br />
              <span className="text-amber-600">Instagram</span>
              {/* <span className="text-[#f59e0b]">Instagram</span> */}
            </p>

            {/* Subtle decorative ring */}
            <div className="absolute inset-1 border border-gray-100 rounded-full pointer-events-none" />
            <div className="absolute inset-2 border border-dashed border-gray-200 rounded-full animate-[spin_20s_linear_infinite] opacity-50 pointer-events-none" />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default InstagramGallery;
