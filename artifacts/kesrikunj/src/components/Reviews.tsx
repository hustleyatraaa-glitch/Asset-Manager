import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { GoogleIcon } from "./BrandIcons";

const reviews = [
  {
    id: 1,
    name: "Subhendu Pan",
    location: "Traveller",
    rating: 5,
    hinglish: false,
    text: "It was our best experience in Rajrappa. Hospitality has been just awesome. Felt one with nature and completely rejuvenated. Excellent cleanliness, good food, and wonderful staff.",
  },
  {
    id: 2,
    name: "Sourav Banik",
    location: "Traveller",
    rating: 5,
    hinglish: false,
    text: "One of the best resorts I ever enjoyed. Excellent vegan food, great hospitality, awesome rooms. Staff very soft spoken. Felt sad to leave — my wife and I both loved it so much.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    location: "Ranchi",
    rating: 5,
    hinglish: true,
    text: "Maa Chhinnamastike Mandir ke paas hone ki wajah se yahan aana bahut khas lagta hai. Kamre saaf aur aaramdaayak hain, 24 ghante garam paani milta hai. Khaana bahut swaadisht tha. Parivaar ke saath aane ke liye best jagah.",
  },
  {
    id: 4,
    name: "Mrinmay Majhi",
    location: "Traveller",
    rating: 5,
    hinglish: false,
    text: "Great experience staying in this wonderful resort. Really enjoyed my time in Rajrappa — delicious food, real peace, and very kind hospitality. Will definitely be back.",
  },
  {
    id: 5,
    name: "Priya Singh",
    location: "Dhanbad",
    rating: 5,
    hinglish: true,
    text: "Staff bahut madadgaar aur vinamr hai. Nadi aur jungle ka nazaara behad khoobsoorat hai. Manager sahab ne hamara bahut khyaal rakha. Hum phir zaroor aayenge!",
  },
  {
    id: 6,
    name: "Debashis B.",
    location: "Asansol",
    rating: 4,
    hinglish: false,
    text: "Great place near Mata Chhinnamastika's abode. Lush greenery, great amenities, excellent provisions for marriage ceremonies. The vegetarian food is absolutely exotic.",
  },
  {
    id: 7,
    name: "Sunita Devi",
    location: "Hazaribagh",
    rating: 5,
    hinglish: true,
    text: "Shaadi ki salgiraa par yahan ruke — banquet hall aur bageeche bahut sundar hain. Jharkhand Sarkar aur Iksha Resorts ki tarif — aisi jagah jo dil ko sukoon deti hai.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24"
          fill={i <= count ? "#c9833a" : "none"}
          stroke={i <= count ? "#c9833a" : "#c9833a40"}
          strokeWidth="1.5" aria-hidden="true">
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
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const r = reviews[current];

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
            Guest Voices
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
              {/* Language tag */}
              <div
                className="py-1.5 px-4 text-[10px] tracking-[0.25em] uppercase font-semibold text-center"
                style={{
                  background: r.hinglish
                    ? "linear-gradient(90deg, #1a3d2b, #2d6a4a)"
                    : "linear-gradient(90deg, #3d2e1a, #7a5c2d)",
                  color: "#f5f0e8",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {r.hinglish ? "Hinglish Review" : "English Review"}
              </div>

              <div className="px-6 py-7 md:px-9 md:py-9">
                {/* Stars */}
                <div className="flex justify-center mb-5">
                  <Stars count={r.rating} />
                </div>

                {/* Review text — clear readable font, not italic */}
                <blockquote
                  className="text-[15px] md:text-[16px] leading-[1.75] text-foreground/75 mb-6 text-center"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  "{r.text}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-px mb-2" style={{ backgroundColor: "#c9833a" }} />
                  <div
                    className="font-bold text-primary text-sm tracking-wide"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {r.name}
                  </div>
                  <div
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {r.location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <button
              onClick={prev}
              data-testid="button-reviews-prev"
              className="flex-1 flex items-center justify-center gap-2 h-12 border border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all rounded-sm touch-manipulation"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
              <span className="text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Prev</span>
            </button>

            <div className="flex gap-2 items-center justify-center">
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

          {/* Google Reviews CTA — highlighted */}
          <motion.a
            href="https://maps.app.goo.gl/XhCxXD5n6sabVxYU9"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-google-reviews"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-4 border-2 border-[#4285F4]/30 bg-white shadow-sm hover:shadow-md hover:border-[#4285F4]/60 transition-all duration-300 rounded-sm"
          >
            <GoogleIcon size={22} />
            <div className="text-left">
              <div
                className="text-sm font-bold text-foreground"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Check Reviews on Google
              </div>
              <div
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                129+ real guest reviews · 4.0★ rating
              </div>
            </div>
            <ExternalLink size={14} className="text-muted-foreground ml-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
