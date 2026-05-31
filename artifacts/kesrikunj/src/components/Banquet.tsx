import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Users, Briefcase, Flower2, CheckCircle, MessageCircle } from "lucide-react";

const events = [
  {
    id: "wedding",
    icon: <Heart size={28} />,
    name: "Weddings",
    description:
      "Celebrate the most sacred union amidst lush greenery and the divine grace of the temple nearby. Our banquet hall and open garden create an unforgettable backdrop.",
    features: ["Outdoor garden venue", "Up to 150 guests", "Outside decorators welcome", "Veg & non-veg menus"],
    gradient: "from-rose-950/80 to-primary",
  },
  {
    id: "engagement",
    icon: <Flower2 size={28} />,
    name: "Engagements",
    description:
      "Mark the beginning of a lifetime journey with an intimate gathering in a setting that is both magnificent and serene — where rivers sing and forests breathe.",
    features: ["Intimate setups", "Garden & hall options", "Floral arrangements", "Photography-friendly"],
    gradient: "from-purple-950/80 to-primary",
  },
  {
    id: "corporate",
    icon: <Briefcase size={28} />,
    name: "Corporate Events",
    description:
      "Step away from the city and into focused clarity. Our fully equipped banquet hall and peaceful natural surroundings make for extraordinary meetings and retreats.",
    features: ["Projector & AV on request", "Conference-style setup", "Catering included", "Parking available"],
    gradient: "from-blue-950/80 to-primary",
  },
  {
    id: "religious",
    icon: <Users size={28} />,
    name: "Religious Ceremonies",
    description:
      "Mundan, Janehu, and sacred celebrations find a perfect home just minutes from Maa Chhinnamastike Temple — blessed ground for auspicious beginnings.",
    features: ["Sacred location", "Priest coordination support", "Community gathering space", "Temple proximity"],
    gradient: "from-amber-950/80 to-primary",
  },
];

export default function Banquet() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="banquet" className="py-12 md:py-24 bg-primary text-primary-foreground relative overflow-hidden" data-testid="section-banquet">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEw4MCAwTDgwIDgwTDAgODBaIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC40KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTQwIDBMNDAgODBNMCA0MEw4MCA0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')`
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 md:px-8 max-w-6xl">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Events &amp; Celebrations
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4"
          >
            Banquet &amp; Garden
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-0.5 mx-auto mb-6"
            style={{ backgroundColor: "#c9833a" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-primary-foreground/70 max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            A spacious banquet hall and a lush green garden — together, they hold up to 150 guests and every kind of celebration.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
              data-testid={`card-event-${event.id}`}
              className="relative group p-7 border border-white/10 rounded-sm overflow-hidden cursor-default bg-white/5 hover:bg-white/10 transition-all duration-400"
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-400`} />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-secondary/20 text-secondary">
                    {event.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary-foreground mb-1">{event.name}</h3>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {event.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {event.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-primary-foreground/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <CheckCircle size={13} className="text-secondary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <div className="text-center sm:text-left">
            <div className="font-serif text-lg text-primary-foreground mb-1">Ready to plan your event?</div>
            <div className="text-sm text-primary-foreground/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Capacity: 150 guests &middot; Outside decorators welcome &middot; Veg &amp; non-veg
            </div>
          </div>
          <a
            href="https://wa.me/919155789484"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-banquet-enquire"
            className="flex items-center gap-3 px-8 py-3.5 text-sm tracking-widest uppercase font-medium text-primary transition-all hover:opacity-90 shrink-0"
            style={{ background: "linear-gradient(135deg, #c9833a, #e09d55)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
