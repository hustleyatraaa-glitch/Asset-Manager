import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Phone, MessageCircle, Facebook, Map, Star, MapPin } from "lucide-react";

function JustDialIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="15" fontWeight="bold" fontFamily="sans-serif">JD</text>
    </svg>
  );
}

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/919155789484",                        icon: <MessageCircle size={15} /> },
  { label: "Facebook", href: "https://facebook.com/kesrikunj",                    icon: <Facebook size={15} /> },
  { label: "Maps",     href: "https://maps.google.com/?q=23.631581,85.709396",    icon: <Map size={15} /> },
  { label: "JustDial", href: "https://www.justdial.com/Ranchi/Kesrikunj-Resort-Banquet-Garden-Rajrappa/0654PX654-X654-180928203542-N7X5_BZDET", icon: <JustDialIcon /> },
];

const quickFacts = [
  "17 Rooms",
  "Banquet — 150 Guests",
  "Free WiFi",
  "Veg & Non-Veg",
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += 0.003;
      const w = canvas.width;
      const h = canvas.height;
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, `hsl(149, 40%, ${10 + Math.sin(t) * 3}%)`);
      grad.addColorStop(0.4, `hsl(149, 38%, ${14 + Math.sin(t + 1) * 2}%)`);
      grad.addColorStop(0.7, `hsl(30, 45%, ${22 + Math.sin(t + 2) * 3}%)`);
      grad.addColorStop(1, `hsl(20, 40%, ${16 + Math.sin(t + 3) * 2}%)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 4; i++) {
        const x = w * (0.2 + i * 0.22 + Math.sin(t + i * 0.8) * 0.06);
        const y = h * (0.3 + Math.cos(t * 0.7 + i * 1.2) * 0.15);
        const r = Math.min(w, h) * (0.35 + i * 0.05);
        const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
        if (i % 2 === 0) {
          rg.addColorStop(0, `hsla(31, 59%, 51%, ${0.12 + Math.sin(t + i) * 0.04})`);
          rg.addColorStop(1, "transparent");
        } else {
          rg.addColorStop(0, `hsla(149, 50%, 8%, ${0.18 + Math.cos(t + i) * 0.04})`);
          rg.addColorStop(1, "transparent");
        }
        ctx.fillStyle = rg;
        ctx.fillRect(0, 0, w, h);
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 w-full max-w-2xl mx-auto">

        {/* ① Google rating — instant trust signal */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-6"
        >
          <div className="flex gap-0.5">
            {[1,2,3,4].map(i => (
              <Star key={i} size={12} className="fill-secondary text-secondary" />
            ))}
            <Star size={12} className="text-secondary" />
          </div>
          <span className="text-white/90 text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            4.0 Google Rating
          </span>
          <span className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>·</span>
          <span className="text-white/70 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            129+ Reviews · #1 in Rajrappa
          </span>
        </motion.div>

        {/* ② Resort name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="text-[2.6rem] sm:text-6xl md:text-7xl font-serif font-bold text-white leading-none tracking-tight mb-3"
        >
          KESRIKUNJ
        </motion.h1>

        {/* ③ What it is — one line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base sm:text-lg font-serif italic text-white/80 mb-2"
        >
          Resort, Banquet &amp; Garden
        </motion.p>

        {/* ④ Unique hook — why this place */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-1.5 text-secondary text-xs tracking-wide mb-8"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <MapPin size={12} />
          <span>1 minute from Maa Chhinnamastike Temple, Rajrappa</span>
        </motion.div>

        {/* ⑤ CTAs — call is king for Indian customers */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8"
        >
          <motion.a
            href="tel:+919155789484"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            data-testid="button-call-now-hero"
            className="flex items-center justify-center gap-2.5 px-8 py-4 text-sm tracking-widest uppercase font-bold text-white w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #c9833a, #e09d55)",
              boxShadow: "0 6px 24px rgba(201,131,58,0.5)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Phone size={17} />
            Call Now — Free
          </motion.a>

          <motion.a
            href="https://wa.me/919155789484"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            data-testid="button-whatsapp-hero"
            className="flex items-center justify-center gap-2.5 px-8 py-4 text-sm tracking-widest uppercase font-semibold text-white w-full sm:w-auto border border-white/25 backdrop-blur-sm hover:border-white/50 transition-colors"
            style={{
              background: "rgba(255,255,255,0.08)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <MessageCircle size={17} />
            WhatsApp
          </motion.a>
        </motion.div>

        {/* ⑥ Quick facts — what you get at a glance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5"
        >
          {quickFacts.map((fact, i) => (
            <span
              key={fact}
              className="flex items-center gap-2 text-white/55 text-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {i > 0 && <span className="text-white/25 hidden sm:inline">·</span>}
              {fact}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar — social left, Discover right */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-5 pb-5">
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
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/60 hover:text-white border border-white/12 hover:border-white/35 transition-all duration-300"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.1 }}
          onClick={scrollToAbout}
          data-testid="button-scroll-down"
          className="flex flex-col items-center gap-1 text-white/45 hover:text-white/75 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[9px] tracking-[0.22em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Explore
          </span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={17} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
