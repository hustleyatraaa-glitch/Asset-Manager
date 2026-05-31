import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Phone, MessageCircle, Facebook, Map } from "lucide-react";

function JustDialIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="15" fontWeight="bold" fontFamily="sans-serif">JD</text>
    </svg>
  );
}

const socialLinks = [
  { label: "WhatsApp",  href: "https://wa.me/919155789484",                          icon: <MessageCircle size={16} /> },
  { label: "Facebook",  href: "https://facebook.com/kesrikunj",                       icon: <Facebook size={16} /> },
  { label: "Maps",      href: "https://maps.google.com/?q=23.631581,85.709396",       icon: <Map size={16} /> },
  { label: "JustDial",  href: "https://www.justdial.com/Ranchi/Kesrikunj-Resort-Banquet-Garden-Rajrappa/0654PX654-X654-180928203542-N7X5_BZDET", icon: <JustDialIcon /> },
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
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Center content — only essentials */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 max-w-3xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-xs tracking-[0.3em] uppercase text-secondary mb-5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Rajrappa, Jharkhand
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-none tracking-tight mb-5"
        >
          KESRIKUNJ
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="w-16 h-px mb-5"
          style={{ backgroundColor: "#c9833a" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="text-lg sm:text-xl md:text-2xl font-serif italic text-white/85 mb-10"
        >
          Where Nature Meets Devotion
        </motion.p>

        {/* Single primary CTA */}
        <motion.a
          href="tel:+919155789484"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          data-testid="button-call-now-hero"
          className="flex items-center gap-3 px-10 py-4 text-sm tracking-[0.2em] uppercase font-semibold text-white shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #c9833a, #e09d55)",
            boxShadow: "0 8px 28px rgba(201,131,58,0.45)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <Phone size={17} />
          Call Now
        </motion.a>
      </div>

      {/* Bottom bar: social icons left, Discover right */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-6 pb-6">
        {/* Social icons — subtle, left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
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
              className="w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-white border border-white/15 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              style={{ background: "rgba(0,0,0,0.25)" }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Discover — right */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          onClick={scrollToAbout}
          data-testid="button-scroll-down"
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
