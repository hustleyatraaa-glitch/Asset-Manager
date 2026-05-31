import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Verified Guest",
    rating: 5,
    text: "Best location, right beside the temple. Food quality and taste are quite good. Hot water 24x7. Very peaceful resort. Would love to visit again during the festival season.",
  },
  {
    id: 2,
    name: "Ravi D.",
    rating: 5,
    text: "Beautifully maintained property with a perfect mix of nature, comfort, and luxury. Rooms were spotless. Mr. Satyam Singh, the manager, went above and beyond to make our stay memorable.",
  },
  {
    id: 3,
    name: "Debashis B.",
    rating: 4,
    text: "Great place to stay at Mata Chhinnamastika's abode. Lush greenery, great amenities, provisions for marriage ceremonies. Vegetarian foods are exotic. Highly recommended for pilgrims.",
  },
  {
    id: 4,
    name: "Verified Guest",
    rating: 4,
    text: "Thank you to Govt. of Jharkhand for this wonderful resort. Room service was great, bathrooms in great condition with geyser. Very peaceful with nature's beauty surrounding you.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i <= count ? "#c9833a" : "none"}
          stroke={i <= count ? "#c9833a" : "#c9833a60"}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden" data-testid="section-reviews">
      {/* Decorative quote marks */}
      <div
        className="absolute top-8 left-6 text-[200px] font-serif text-primary/5 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </div>

      <div className="relative container mx-auto px-4 md:px-8 max-w-4xl">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Guest Voices
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
          >
            What Guests Say
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-0.5 mx-auto mb-4"
            style={{ backgroundColor: "#c9833a" }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <StarRating count={4} />
            <span className="text-muted-foreground text-sm ml-1">4.0 on Google &middot; 129+ reviews &middot; #1 in Rajrappa</span>
          </motion.div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          data-testid="carousel-reviews"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-sm shadow-md p-10 md:p-14 border border-border text-center max-w-2xl mx-auto"
            >
              <div className="flex justify-center mb-5">
                <StarRating count={reviews[current].rating} />
              </div>
              <blockquote
                className="text-lg md:text-xl font-serif italic text-foreground/80 leading-relaxed mb-8"
              >
                "{reviews[current].text}"
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-0.5 mb-3" style={{ backgroundColor: "#c9833a" }} />
                <div className="font-medium text-primary text-sm tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {reviews[current].name}
                </div>
                <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  KESRIKUNJ Guest
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              data-testid="button-reviews-prev"
              className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  data-testid={`button-reviews-dot-${i}`}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ backgroundColor: i === current ? "#c9833a" : "#c9833a40" }}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              data-testid="button-reviews-next"
              className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
