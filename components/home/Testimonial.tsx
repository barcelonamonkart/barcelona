import React, { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Interface for Testimonial Data
 */
interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The aren't enough words to describe how great this place is. Me and my fiancèe reserved a table here and was amazed at the quality of the food,, and overall outstanding service. Christian is an outstanding bar manager. His drinks are to die for. He took care of everything, from reserving a table to getting you the first drink in time after a busy day. I made this place my permanent spot to dine and have a good time. Thank you so much for your help Christian!",
    name: "Alek White",
    role: "Blogger",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    id: 2,
    text: "Amazing customer service, the staff and the owners/managers are some of the sweetest people you will ever meet. Food and drinks are always on par. We had our staff Christmas party and they took nothing but the most amazing care for us. 10/10 stars all around.",
    name: "R Dawn",
    role: "Cafe Owner",
    imageUrl:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    id: 3,
    text: "Amazing staff. The owner is very welcoming!! And the drinks and food were out of imagination!!!!!!!!!!!!!!!!!!! I would die to come back here!! Highly recommended!!!!!!!!!!!!!!!!!!! Please come here before you die.",
    name: "Aishwarya Tola",
    role: "Critic",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    id: 4,
    text: "Great service, great food! We had a fantastic meal here. Our server was new but so kind and great! We had tacos, chicken burger and chuck burger, fries and salad. All were great! Gravy came up short but we have no complaints about the rest. Great date night restaurant!",
    name: "Amanda M",
    role: "Food Enthusiast",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    id: 5,
    text: "Barcelona on 17 never disappoints. The food was packed with flavor, nicely presented, and clearly made with quality ingredients. Service was warm, attentive, and smooth from start to finish. The atmosphere has a cool, modern vibe—lively but still comfortable enough to sit back and enjoy the meal. A great all-around experience and one of my go-to spots on 17 Ave.",
    name: "Anmol Sharma",
    role: "Travel Vlogger",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    id: 6,
    text: "The restaurant delivered a perfect experience with a 5/5 atmosphere that felt warm and inviting. The food was a solid 5/5, fresh, flavorful, and beautifully presented. Service also scored 5/5, with staff attentive, polite, quick, and genuinely caring throughout the entire visit, making it a place worth visiting again soon.",
    name: "Arnav",
    role: "Executive Chef",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
  },
];

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide logic
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // 2 second interval

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section className="bg-[#FDFBF7]  py-20 px-6  lg:py-32 font-serif overflow-hidden">
    {/* <section className="bg-white py-20 px-6  lg:py-32 font-serif overflow-hidden"> */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <Reveal>
            <span className="block text-amber-500 font-bold tracking-[0.2em] text-[11px] uppercase mb-4 font-sans-body">
              Testimonials
            </span>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <h2 className="font-serif-display text-4xl md:text-5xl text-gray-900 mb-6 font-medium tracking-wide leading-none uppercase">
            What People Are Saying
          </h2>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed font-sans-body text-sm">
            Real experiences from guests who enjoyed our handcrafted cocktails,
            bold flavors, and vibrant patio atmosphere in Calgary.
          </p>
        </Reveal>

        <Reveal delay={300} className="max-w-6xl overflow-x-hidden">
          {/* Testimonials Slider Container */}
          <div
            className="relative mb-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 flex flex-col items-center px-4"
                >
                  {/* Quote Icon */}
                  <div className="text-orange-500 mb-6">
                    <Quote
                      size={24}
                      fill="currentColor"
                      className="rotate-180"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 italic mb-8 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Avatar */}
                  {/* <div className="w-24 h-24 mb-6 relative">
                    <div className="rounded-full overflow-hidden w-full h-full border-4 border-white shadow-lg">
                      <img
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div> */}

                  {/* Info */}
                  <h3 className="text-gray-900 font-bold text-lg mb-1">
                    {testimonial.name}
                  </h3>
                  {/* <p className="text-gray-400 text-xs uppercase tracking-wider">
                    {testimonial.role}
                  </p> */}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default App;
