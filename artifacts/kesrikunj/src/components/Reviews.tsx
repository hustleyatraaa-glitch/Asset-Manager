import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Subhendu Pan",
    location: "Traveller",
    rating: 5,
    lang: "en",
    text: "It was our best experience in Rajrappa. Hospitality has been just awesome. Felt one with nature and completely rejuvenated. Excellent cleanliness, good food, and wonderful staff.",
  },
  {
    id: 2,
    name: "Sourav Banik",
    location: "Traveller",
    rating: 5,
    lang: "en",
    text: "One of the best resorts I ever enjoyed. Excellent vegan food, great hospitality, awesome rooms. Staff very soft spoken. Felt sad to leave — my wife and I both loved it so much.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    location: "Ranchi",
    rating: 5,
    lang: "hi",
    text: "माँ छिन्नमस्तिके मंदिर के पास होने की वजह से यहाँ आना बहुत खास लगता है। कमरे साफ और आरामदायक हैं, खाना स्वादिष्ट था। परिवार के साथ आने के लिए बेस्ट जगह।",
  },
  {
    id: 4,
    name: "Mrinmay Majhi",
    location: "Traveller",
    rating: 5,
    lang: "en",
    text: "Great experience staying in this wonderful resort. I really enjoyed my time in Rajrappa — delicious food, real peace, and very kind hospitality. Will definitely be back.",
  },
  {
    id: 5,
    name: "Priya Singh",
    location: "Dhanbad",
    rating: 5,
    lang: "hi",
    text: "स्टाफ बहुत मददगार और विनम्र है। नदी और जंगल का नज़ारा बेहद खूबसूरत है। मैनेजर साहब ने हमारा बहुत ख्याल रखा। हम फिर ज़रूर आएंगे!",
  },
  {
    id: 6,
    name: "Debashis B.",
    location: "Asansol",
    rating: 4,
    lang: "en",
    text: "Great place near Mata Chhinnamastika's abode. Lush greenery, great amenities, excellent provisions for marriage ceremonies. The vegetarian food is absolutely exotic.",
  },
  {
    id: 7,
    name: "Sunita Devi",
    location: "Hazaribagh",
    rating: 5,
    lang: "hi",
    text: "शादी की सालगिरह पर यहाँ रुके — बैंक्वेट हॉल और बगीचा बहुत सुंदर है। झारखंड सरकार और Iksha Resorts की तारीफ — ऐसी जगह जो दिल को सुकून देती है।",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24"
          fill={i <= count ? "#c9833a" : "none"}
          stroke={i <= count ? "#c9833a" : "#c9833a40"}
          strokeWidth="1.5" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const r = reviews[current];
  const isHindi = r.lang === "hi";

  return (
    <section id="reviews" className="py-12 md:py-28 bg-muted/30" data-testid="section-reviews">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">

        {/* Header */}
        <div ref={titleRef} className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary text-xs tracking-[0.3em] uppercase mb-3 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            मेहमानों की आवाज़ · Guest Voices
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-3"
          >
            What Guests Say
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-12 h-0.5 mx-auto mb-3"
            style={{ backgroundColor: "#c9833a" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-muted-foreground"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            4.0★ Google Rating · 129+ Reviews · #1 in Rajrappa
          </motion.p>
        </div>

        {/* Carousel */}
        <div
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
              transition={{ duration: 0.35 }}
              className="bg-white border border-border rounded-sm shadow-sm overflow-hidden mb-5"
            >
              {/* Language strip */}
              <div
                className="py-1.5 px-4 text-[10px] tracking-[0.2em] uppercase font-medium text-center"
                style={{
                  background: isHindi ? "linear-gradient(90deg,#1a3d2b,#2d6a4a)" : "linear-gradient(90deg,#3d2e1a,#7a5c2d)",
                  color: "#f5f0e8",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {isHindi ? "हिंदी समीक्षा" : "English Review"}
              </div>

              <div className="px-5 py-6 md:px-8 md:py-8">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  <Stars count={r.rating} />
                </div>

                {/* Review text */}
                <blockquote
                  className={`text-sm md:text-base leading-relaxed text-foreground/80 mb-6 text-center ${isHindi ? "" : "font-serif italic"}`}
                  lang={isHindi ? "hi" : "en"}
                >
                  "{r.text}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-6 h-px mb-2" style={{ backgroundColor: "#c9833a" }} />
                  <div className="font-semibold text-primary text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {r.name}
                  </div>
                  <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {r.location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation — big touch targets for mobile */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={prev}
              data-testid="button-reviews-prev"
              className="flex-1 flex items-center justify-center gap-2 h-12 border border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all rounded-sm touch-manipulation"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
              <span className="text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Prev</span>
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center justify-center flex-wrap">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  data-testid={`button-reviews-dot-${i}`}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300 touch-manipulation"
                  style={{ backgroundColor: i === current ? "#c9833a" : "#c9833a30" }}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              data-testid="button-reviews-next"
              className="flex-1 flex items-center justify-center gap-2 h-12 border border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all rounded-sm touch-manipulation"
              aria-label="Next review"
            >
              <span className="text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Review counter */}
          <p className="text-center text-xs text-muted-foreground mt-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {current + 1} of {reviews.length} reviews
          </p>
        </div>
      </div>
    </section>
  );
}
