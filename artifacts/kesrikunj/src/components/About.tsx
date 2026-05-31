import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Star, Award, Leaf } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  delay: number;
}

function StatCard({ label, value, suffix, icon, delay }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1800;
      const step = 16;
      const increment = value / (duration / step);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, step);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: delay / 1000 }}
      whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(26, 61, 43, 0.15)" }}
      className="relative flex flex-col items-center text-center p-8 bg-white border border-border rounded-sm overflow-hidden transition-all duration-300"
      data-testid={`card-stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <div className="text-4xl font-serif font-bold text-primary mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  const stats = [
    { label: "Year Est.", value: 2018, suffix: "", icon: <Award size={22} /> },
    { label: "Total Rooms", value: 17, suffix: "", icon: <Leaf size={22} /> },
    { label: "Guest Capacity", value: 150, suffix: "+", icon: <MapPin size={22} /> },
    { label: "Google Rating", value: 4, suffix: ".0★", icon: <Star size={22} /> },
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-background" data-testid="section-about">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
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
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                A Sacred Retreat in the Heart of Jharkhand
              </h2>
              <div className="w-16 h-0.5 mb-8" style={{ backgroundColor: "#c9833a" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-foreground/80 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem" }}
            >
              <p>
                Inaugurated on 24 February 2018 by the Chief Minister of Jharkhand, KESRIKUNJ is a boutique resort
                managed by Iksha Resorts Pvt. Ltd. in proud collaboration with Jharkhand Tourism.
              </p>
              <p>
                Set amidst the confluence of rivers, ancient hills, and the eternal green of the Chotanagpur plateau,
                KESRIKUNJ offers a rare convergence — the sacred proximity of Maa Chhinnamastike Temple (just a
                minute's walk) and the quiet luxury of a well-appointed modern retreat.
              </p>
              <p>
                Here, every morning begins with temple bells carrying across the water, and every evening ends with
                amber light settling over the forest canopy. This is not merely a place to stay — it is a place to
                breathe, reflect, and be renewed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex items-start gap-4 p-5 border-l-4 bg-primary/5"
              style={{ borderLeftColor: "#c9833a" }}
            >
              <MapPin className="text-secondary mt-1 shrink-0" size={20} />
              <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="font-medium text-primary text-sm mb-1">Find Us</div>
                <div className="text-sm text-muted-foreground">
                  Rajrappa Road, Rajrappa, Lerhitongri<br />
                  Jharkhand – 829150
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} delay={i * 200} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
