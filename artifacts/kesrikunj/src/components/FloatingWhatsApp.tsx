import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919155789484"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="button-floating-whatsapp"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full text-white shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #25d366, #128c7e)",
        boxShadow: "0 8px 30px rgba(37, 211, 102, 0.45)",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <MessageCircle size={26} fill="currentColor" strokeWidth={0} />
      </motion.div>

      {/* Ping ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-green-400 pointer-events-none" />
    </motion.a>
  );
}
