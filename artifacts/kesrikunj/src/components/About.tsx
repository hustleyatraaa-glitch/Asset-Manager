import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Star, Award, Users } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const stats = [
  { label: "Est.", value: "2018", icon: <Award size={18} /> },
  { label: "Rooms", value: "17 AC", icon: <Users size={18} /> },
  { label: "Capacity", value: "150+", icon: <Users size={18} /> },
  { label: "Rating", value: "4.0★", icon: <Star size={18} /> },
];

export default function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-12 md:py-24 bg-background" data-testid="section-about">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Text */}
          <div ref={titleRef}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div
                className="text-secondary text-xs tracking-[0.3em] uppercase mb-4 font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Story
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-5 leading-tight">
                A Sacred Retreat in the Heart of Jharkhand
              </h2>
              <div className="w-16 h-0.5 mb-7" style={{ backgroundColor: "#c9833a" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-foreground/80 leading-relaxed text-[0.97rem]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <p>
                Inaugurated on 24 February 2018 by the Chief Minister of Jharkhand, KESRIKUNJ is a boutique resort
                managed by Iksha Resorts Pvt. Ltd. in proud collaboration with Jharkhand Tourism.
              </p>
              <p>
                Set amidst the confluence of rivers, ancient hills, and the eternal green of the Chotanagpur plateau,
                KESRIKUNJ offers the sacred proximity of Maa Chhinnamastike Temple (just a minute's walk) and the
                quiet luxury of a modern retreat.
              </p>
              <p>
                Every morning begins with temple bells across the water, every evening ends with amber light over the
                forest canopy. This is not merely a place to stay — it is a place to breathe and be renewed.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 grid grid-cols-4 gap-3"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center bg-primary/5 border border-primary/10 py-3 px-2 rounded-sm">
                  <div className="font-serif font-bold text-primary text-lg leading-none mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 flex items-start gap-4 p-4 border-l-4 bg-primary/5"
              style={{ borderLeftColor: "#c9833a" }}
            >
              <MapPin className="text-secondary mt-0.5 shrink-0" size={18} />
              <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="font-medium text-primary text-sm mb-0.5">Find Us</div>
                <div className="text-sm text-muted-foreground">
                  Rajrappa Road, Rajrappa, Lerhitongri, Jharkhand – 829150
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: 2 Real Room Photos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="relative overflow-hidden rounded-sm shadow-md h-60 md:h-72 group">
              <img
                src={`${BASE}photos/room2.jpg`}
                alt="Luxury Room at KESRIKUNJ"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="text-[10px] tracking-widest uppercase text-secondary font-medium mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Luxury Suite</div>
                <div className="text-white font-serif text-base font-semibold">Glass Windows · Natural Views</div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-sm shadow-md h-52 md:h-60 group">
              <img
                src={`${BASE}photos/room3.jpg`}
                alt="Deluxe Room at KESRIKUNJ"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="text-[10px] tracking-widest uppercase text-secondary font-medium mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Deluxe Room</div>
                <div className="text-white font-serif text-base font-semibold">Comfortable · Well-appointed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
