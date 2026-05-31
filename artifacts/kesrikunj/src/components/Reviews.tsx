import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Ranchi, Jharkhand",
    rating: 5,
    lang: "hi",
    text: "यह जगह बहुत ही शानदार है। माँ छिन्नमस्तिके मंदिर के पास होने की वजह से यहाँ आना और भी खास लगता है। कमरे बहुत साफ और आरामदायक हैं, 24 घंटे गर्म पानी मिलता है। खाना बहुत स्वादिष्ट था। परिवार के साथ आने के लिए बेस्ट जगह।",
  },
  {
    id: 2,
    name: "Priya Singh",
    location: "Dhanbad, Jharkhand",
    rating: 5,
    lang: "hi",
    text: "बहुत अच्छी जगह है। स्टाफ बहुत मददगार और विनम्र है — खासकर मैनेजर साहब ने हमारा बहुत ख्याल रखा। नदी और जंगल का नज़ारा बेहद खूबसूरत है। हम फिर ज़रूर आएंगे!",
  },
  {
    id: 3,
    name: "Ravi D.",
    location: "Kolkata",
    rating: 5,
    lang: "en",
    text: "Beautifully maintained property with a perfect mix of nature, comfort, and luxury. Rooms were spotless. Mr. Satyam Singh, the manager, went above and beyond to make our stay truly memorable.",
  },
  {
    id: 4,
    name: "Amit Sharma",
    location: "Bokaro, Jharkhand",
    rating: 4,
    lang: "hi",
    text: "रजरप्पा आने पर इस रिसॉर्ट में रुकना बेहद अच्छा अनुभव रहा। मंदिर सिर्फ एक मिनट की दूरी पर है। सुबह मंदिर के घंटों की आवाज़ सुनते हुए जागना एक अलग ही अनुभव है। रूम सर्विस बहुत अच्छी थी।",
  },
  {
    id: 5,
    name: "Debashis B.",
    location: "Asansol",
    rating: 4,
    lang: "en",
    text: "Great place to stay near Mata Chhinnamastika's abode. Lush greenery, great amenities, and provisions for marriage ceremonies. The vegetarian food here is absolutely exotic — worth visiting just for the meals.",
  },
  {
    id: 6,
    name: "Sunita Devi",
    location: "Hazaribagh, Jharkhand",
    rating: 5,
    lang: "hi",
    text: "हमारी शादी की सालगिरह पर यहाँ रुके। बैंक्वेट हॉल और बगीचा बहुत सुंदर है। झारखंड सरकार की तारीफ करनी होगी — ऐसी जगह बनाई जो सच में दिल को सुकून देती है।",
  },
  {
    id: 7,
    name: "Verified Guest",
    location: "Jamshedpur",
    rating: 4,
    lang: "en",
    text: "Room service was excellent, bathrooms in great condition with a working geyser. Very peaceful surroundings — the sound of the river at night is incredibly calming. Highly recommend for a spiritual retreat.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i <= count ? "#c9833a" : "none"}
          stroke={i <= count ? "#c9833a" : "#c9833a50"}
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
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const isHindi = reviews[current].lang === "hi";

  return (
    <section
      id="reviews"
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
      data-testid="section-reviews"
    >
      <div
        className="absolute top-6 left-4 text-[160px] md:text-[200px] font-serif text-primary/5 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </div>

      <div className="relative container mx-auto px-4 md:px-8 max-w-4xl">
        <div ref={titleRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            मेहमानों की आवाज़ · Guest Voices
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
            className="flex items-center justify-center gap-2 flex-wrap"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <StarRating count={4} />
            <span className="text-muted-foreground text-sm ml-1">
              4.0 Google Rating &middot; 129+ Reviews &middot; #1 in Rajrappa
            </span>
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
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="bg-white rounded-sm shadow-md border border-border text-center max-w-2xl mx-auto overflow-hidden"
            >
              {/* Language badge */}
              <div
                className="text-[10px] tracking-[0.2em] uppercase font-medium px-3 py-1.5 text-center"
                style={{
                  background: isHindi
                    ? "linear-gradient(90deg, #1a3d2b, #2d6a4a)"
                    : "linear-gradient(90deg, #3d2e1a, #7a5c2d)",
                  color: "#f5f0e8",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {isHindi ? "हिंदी समीक्षा" : "English Review"}
              </div>

              <div className="p-8 md:p-12">
                <div className="flex justify-center mb-5">
                  <StarRating count={reviews[current].rating} />
                </div>

                <blockquote
                  className={`text-base md:text-lg leading-relaxed mb-8 text-foreground/80 ${
                    isHindi ? "font-sans" : "font-serif italic"
                  }`}
                  lang={isHindi ? "hi" : "en"}
                >
                  "{reviews[current].text}"
                </blockquote>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-0.5 mb-3" style={{ backgroundColor: "#c9833a" }} />
                  <div
                    className="font-semibold text-primary text-sm tracking-wide"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {reviews[current].name}
                  </div>
                  <div
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {reviews[current].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              data-testid="button-reviews-prev"
              className="w-11 h-11 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2 flex-wrap justify-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  data-testid={`button-reviews-dot-${i}`}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ backgroundColor: i === current ? "#c9833a" : "#c9833a35" }}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              data-testid="button-reviews-next"
              className="w-11 h-11 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
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
