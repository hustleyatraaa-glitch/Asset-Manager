import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Star, MapPin } from "lucide-react";
import { WhatsAppIcon, FacebookIcon, JustDialIcon } from "./BrandIcons";

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/919155789484",                                                                                             icon: <WhatsAppIcon size={16} /> },
  { label: "Facebook", href: "https://www.facebook.com/iksharesorts/",                                                                                icon: <FacebookIcon size={16} /> },
  { label: "JustDial", href: "https://jsdl.in/DT-99NNYKNWS5R",                                                                                       icon: <JustDialIcon size={16} /> },
];

const heroImages = [
  `${import.meta.env.BASE_URL}photos/hero1.jpg`,
  `${import.meta.env.BASE_URL}photos/hero2.jpg`,
  `${import.meta.env.BASE_URL}photos/hero3.jpg`,
  `${import.meta.env.BASE_URL}photos/hero4.jpg`,
  `${import.meta.env.BASE_URL}photos/hero5.jpg`,
];

const quickFacts = ["17 Rooms", "Banquet — 150 Guests", "Free WiFi", "Veg & Non-Veg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Blurred photo slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages[current]})`,
            filter: "blur(3px)",
            transform: "scale(1.07)",
          }}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Strong dark gradient overlay — ensures text always readable */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(10,20,12,0.72) 0%, rgba(10,20,12,0.52) 45%, rgba(10,20,12,0.78) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 w-full max-w-2xl mx-auto">

        {/* Google Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map(i => <Star key={i} size={11} className="fill-secondary text-secondary" />)}
            <Star size={11} className="text-secondary" />
          </div>
          <span className="text-white text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            4.0 Google Rating
          </span>
          <span className="text-white/40 text-xs">·</span>
          <span className="text-white/80 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            129+ Reviews · #1 in Rajrappa
          </span>
        </motion.div>

        {/* Resort name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[2.8rem] sm:text-6xl md:text-7xl font-serif font-bold text-white leading-none tracking-tight mb-3 drop-shadow-lg"
        >
          KESRIKUNJ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base sm:text-lg font-serif italic text-white/90 mb-2 drop-shadow"
        >
          Resort, Banquet &amp; Garden
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-1.5 text-secondary text-xs tracking-wide mb-8"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <MapPin size={11} />
          <span>1 minute from Maa Chhinnamastike Temple, Rajrappa</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8"
        >
          <motion.a
            href="tel:+919155789484"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            data-testid="button-call-now-hero"
            className="flex items-center justify-center gap-2.5 px-8 py-4 text-sm tracking-widest uppercase font-bold text-white w-full sm:w-auto shadow-xl"
            style={{ background: "linear-gradient(135deg, #c9833a, #e09d55)", boxShadow: "0 6px 28px rgba(201,131,58,0.6)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone size={16} />
            Call Now — Free
          </motion.a>

          <motion.a
            href="https://wa.me/919155789484"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            data-testid="button-whatsapp-hero"
            className="flex items-center justify-center gap-2.5 px-8 py-4 text-sm tracking-widest uppercase font-semibold text-white w-full sm:w-auto border-2 border-white/30 hover:border-white/60 transition-colors"
            style={{ background: "rgba(255,255,255,0.12)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <WhatsAppIcon size={17} />
            WhatsApp
          </motion.a>
        </motion.div>

        {/* Quick facts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.55 }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          {quickFacts.map((fact, i) => (
            <span key={fact} className="flex items-center gap-2 text-white/70 text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {i > 0 && <span className="text-white/25 hidden sm:inline">·</span>}
              {fact}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300 rounded-full"
            style={{ width: i === current ? "20px" : "6px", height: "6px", backgroundColor: i === current ? "#c9833a" : "rgba(255,255,255,0.45)" }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-5 pb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2 }}
          className="flex items-center gap-2"
        >
          {socialLinks.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid={`link-hero-${s.label.toLowerCase()}`}
              aria-label={s.label}
              title={s.label}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:border-white/50 transition-all duration-300"
              style={{ background: "rgba(0,0,0,0.45)" }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2 }}
          onClick={scrollToAbout}
          data-testid="button-scroll-down"
          className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[9px] tracking-[0.22em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>Explore</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={17} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
