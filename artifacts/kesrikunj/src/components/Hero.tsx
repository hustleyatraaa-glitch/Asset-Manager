import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Phone, MessageCircle, Facebook, Map } from "lucide-react";

function JustDialIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="20" fill="currentColor" fillOpacity="0" />
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="bold" fontFamily="sans-serif">JD</text>
    </svg>
  );
}

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919155789484",
    icon: <MessageCircle size={18} />,
    color: "#25d366",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/kesrikunj",
    icon: <Facebook size={18} />,
    color: "#1877f2",
  },
  {
    label: "Maps",
    href: "https://maps.google.com/?q=23.631581,85.709396",
    icon: <Map size={18} />,
    color: "#ea4335",
  },
  {
    label: "JustDial",
    href: "https://www.justdial.com/Ranchi/Kesrikunj-Resort-Banquet-Garden-Rajrappa/0654PX654-X654-180928203542-N7X5_BZDET",
    icon: <JustDialIcon />,
    color: "#ff6900",
  },
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

      <div className="relative z-10 flex flex-col items-center text-center px-5 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-5"
        >
          <div
            className="inline-block border border-secondary/60 px-5 py-1.5 text-xs tracking-[0.22em] uppercase text-secondary"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Rajrappa, Jharkhand
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-tight mb-4"
        >
          KESRIKUNJ
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-20 h-0.5 mb-5"
          style={{ backgroundColor: "#c9833a" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-lg sm:text-2xl md:text-3xl font-serif italic text-white/90 mb-3 tracking-wide"
        >
          Where Nature Meets Devotion
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-sm md:text-base text-white/70 mb-10 max-w-sm md:max-w-xl tracking-wide leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Resort, Banquet &amp; Garden &mdash; एक मिनट की दूरी पर माँ छिन्नमस्तिके मंदिर
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <motion.a
            href="tel:+919155789484"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            data-testid="button-call-now-hero"
            className="flex items-center gap-3 px-8 py-4 text-sm tracking-[0.18em] uppercase font-semibold text-white shadow-2xl transition-all duration-300 w-full sm:w-auto justify-center"
            style={{
              background: "linear-gradient(135deg, #1a3d2b, #2d6a4a)",
              boxShadow: "0 8px 32px rgba(26, 61, 43, 0.5)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Phone size={18} />
            Call Now
          </motion.a>
          <motion.a
            href="https://wa.me/919155789484"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            data-testid="button-whatsapp-hero"
            className="flex items-center gap-3 px-8 py-4 text-sm tracking-[0.18em] uppercase font-semibold text-white shadow-2xl transition-all duration-300 w-full sm:w-auto justify-center border border-white/30 backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.1)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <MessageCircle size={18} />
            WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Discover + Social Links — bottom center */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center gap-4">
        {/* Social row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex items-center gap-3"
        >
          {socialLinks.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              data-testid={`link-hero-${s.label.toLowerCase()}`}
              aria-label={s.label}
              title={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm border border-white/20 text-white transition-all duration-300"
              style={{ backgroundColor: `${s.color}25` }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Discover scroll */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          onClick={scrollToAbout}
          data-testid="button-scroll-down"
          className="flex flex-col items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors"
          aria-label="Scroll down"
        >
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
