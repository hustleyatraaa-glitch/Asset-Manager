import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "17 AC Rooms",
  "Luxury Suites",
  "Free Wi-Fi",
  "Restaurant",
  "Veg & Non-Veg Food",
  "Banquet Hall",
  "Garden & Lawn",
  "150-Guest Capacity",
  "24×7 Hot Water",
  "Car Parking",
  "Intercom in Rooms",
  "Near Rajrappa Temple",
  "Events & Functions",
  "Jharkhand Tourism",
];

export default function Features() {
  return (
    <section
      id="features"
      data-testid="section-features"
      className="bg-primary py-10 md:py-14"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div
            className="text-secondary text-xs tracking-[0.3em] uppercase font-medium mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Everything You Need
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-serif font-bold">
            KESRIKUNJ mein yah sab milta hai
          </h2>
          <p
            className="text-white/55 text-sm mt-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            One place — complete experience.
          </p>
        </motion.div>

        {/* Checklist grid — text first, then tick */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3.5">
          {features.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center justify-between gap-2 bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm"
            >
              <span
                className="text-white font-semibold text-sm leading-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {label}
              </span>
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(201,131,58,0.18)", border: "1.5px solid #c9833a" }}
              >
                <Check size={11} strokeWidth={3} className="text-secondary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="tel:+919155789484"
            data-testid="button-features-call"
            className="flex items-center gap-2 px-8 py-3 text-sm font-bold tracking-widest uppercase text-primary transition-opacity hover:opacity-90 w-full sm:w-auto justify-center"
            style={{
              background: "linear-gradient(135deg, #c9833a, #e09d55)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            📞 Call Now — Book a Room
          </a>
          <a
            href="https://wa.me/919155789484"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-features-whatsapp"
            className="flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-widest uppercase text-white border border-white/25 hover:border-white/60 transition-all w-full sm:w-auto justify-center"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            💬 WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
