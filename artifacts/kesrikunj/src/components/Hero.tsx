import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

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
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <div
            className="inline-block border border-secondary/60 px-6 py-2 text-xs tracking-[0.25em] uppercase text-secondary mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Rajrappa, Jharkhand
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-tight mb-4"
        >
          KESRIKUNJ
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-24 h-0.5 mb-6"
          style={{ backgroundColor: "#c9833a" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-xl md:text-3xl font-serif italic text-white/90 mb-4 tracking-wide"
        >
          Where Nature Meets Devotion
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-sm md:text-base text-white/70 mb-12 max-w-xl tracking-wide"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Resort, Banquet &amp; Garden — One minute from Maa Chhinnamastike Temple
        </motion.p>

        <motion.a
          href="https://wa.me/919155789484"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          data-testid="button-book-now"
          className="flex items-center gap-3 px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium text-white shadow-2xl transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #c9833a, #e09d55)",
            boxShadow: "0 8px 32px rgba(201, 131, 58, 0.4)",
          }}
        >
          <MessageCircle size={18} />
          Book Now
        </motion.a>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        onClick={scrollToAbout}
        data-testid="button-scroll-down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.button>
    </section>
  );
}
