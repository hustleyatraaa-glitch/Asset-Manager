import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingCall() {
  return (
    <motion.a
      href="tel:+919155789484"
      data-testid="button-floating-call"
      aria-label="Call Now"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2.5 pr-5 pl-4 h-14 rounded-full text-white shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #1a3d2b, #2d6a4a)",
        boxShadow: "0 8px 30px rgba(26, 61, 43, 0.5)",
      }}
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20"
      >
        <Phone size={18} fill="currentColor" strokeWidth={0} />
      </motion.div>
      <span
        className="text-sm font-semibold tracking-wide whitespace-nowrap"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Call Now
      </span>

      {/* Ping ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-15 bg-green-400 pointer-events-none" />
    </motion.a>
  );
}
