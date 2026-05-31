import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wifi, Wind, Tv, Refrigerator, Phone, CheckCircle } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const rooms = [
  {
    id: "luxury",
    name: "Luxury Suite",
    tagline: "Huge glass windows · River & jungle views",
    description:
      "Floor-to-ceiling glass panels frame sweeping views of the sacred Rajrappa hills. Each luxury AC room comes with a kitchenette, satellite TV, mini fridge, and 24×7 hot water.",
    image: `${BASE}photos/room1.jpg`,
    price: "AC Luxury Room",
    badge: "Best Pick",
    amenities: [
      { icon: <Wifi size={14} />, label: "Free WiFi" },
      { icon: <Wind size={14} />, label: "AC" },
      { icon: <Tv size={14} />, label: "Satellite TV" },
      { icon: <Refrigerator size={14} />, label: "Mini Fridge" },
    ],
    features: ["Huge glass windows", "Natural views", "Kitchenette", "Intercom", "24×7 hot water"],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    tagline: "Comfortable · Well-appointed · Garden views",
    description:
      "Welcoming, clean, and well-appointed. Natural light pours through wide windows overlooking the lush greenery and garden of the resort.",
    image: `${BASE}photos/room4.jpg`,
    price: "Deluxe AC Room",
    badge: null,
    amenities: [
      { icon: <Wifi size={14} />, label: "Free WiFi" },
      { icon: <Wind size={14} />, label: "AC" },
      { icon: <Tv size={14} />, label: "Satellite TV" },
      { icon: <Refrigerator size={14} />, label: "Mini Fridge" },
    ],
    features: ["Garden/courtyard views", "Premium bedding", "Geyser", "Intercom"],
  },
  {
    id: "standard",
    name: "Standard Room",
    tagline: "Simple · Clean · Peaceful",
    description:
      "Everything you need, nothing superfluous. Clean, spotless rooms ideal for pilgrims and families visiting Maa Chhinnamastike Temple.",
    image: `${BASE}photos/room5.jpg`,
    price: "Standard Room",
    badge: null,
    amenities: [
      { icon: <Wifi size={14} />, label: "Free WiFi" },
      { icon: <Wind size={14} />, label: "AC" },
      { icon: <Tv size={14} />, label: "Satellite TV" },
      { icon: <Refrigerator size={14} />, label: "Mini Fridge" },
    ],
    features: ["Comfortable bedding", "Clean bathrooms", "Geyser", "24×7 hot water"],
  },
];

function RoomCard({ room, index }: { room: (typeof rooms)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row overflow-hidden rounded-sm shadow-sm border border-border bg-card"
      data-testid={`card-room-${room.id}`}
    >
      {/* Photo — full width on mobile, left column on desktop */}
      <div className="relative w-full md:w-64 lg:w-72 h-52 md:h-auto shrink-0 overflow-hidden bg-primary/20">
        <img
          src={room.image}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        {room.badge && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold tracking-wide text-primary rounded-sm"
            style={{ background: "linear-gradient(135deg, #c9833a, #e09d55)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {room.badge}
          </div>
        )}
        {/* Mobile: room name over image */}
        <div className="absolute bottom-0 left-0 right-0 p-3 md:hidden">
          <div className="text-[10px] tracking-widest uppercase text-secondary font-medium mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {room.price}
          </div>
          <div className="text-white font-serif text-lg font-bold leading-tight">{room.name}</div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 md:p-6 gap-3">
        {/* Desktop: room name here */}
        <div className="hidden md:block">
          <div className="text-xs tracking-widest uppercase text-secondary font-medium mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {room.price}
          </div>
          <h3 className="font-serif text-xl font-bold text-primary">{room.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{room.tagline}</p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {room.description}
        </p>

        {/* Features — compact grid */}
        <div className="grid grid-cols-2 gap-1.5">
          {room.features.map((f) => (
            <div key={f} className="flex items-center gap-1.5 text-xs text-foreground/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <CheckCircle size={11} className="text-secondary shrink-0" />
              {f}
            </div>
          ))}
        </div>

        {/* Amenities row */}
        <div className="flex flex-wrap gap-2">
          {room.amenities.map((a) => (
            <div key={a.label} className="flex items-center gap-1 text-xs text-primary/75 bg-primary/5 px-2 py-1 rounded-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {a.icon} {a.label}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="tel:+919155789484"
          data-testid={`button-call-room-${room.id}`}
          className="mt-auto flex items-center gap-2 self-start px-5 py-2.5 text-xs tracking-widest uppercase font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #1a3d2b, #2d6a4a)", fontFamily: "'DM Sans', sans-serif" }}
        >
          <Phone size={13} />
          Call to Book
        </a>
      </div>
    </motion.div>
  );
}

export default function Rooms() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="rooms" className="py-12 md:py-24 bg-muted/30" data-testid="section-rooms">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div ref={titleRef} className="text-center mb-8 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary text-xs tracking-[0.3em] uppercase mb-3 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Accommodations
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-3"
          >
            Rooms &amp; Suites
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-12 h-0.5 mx-auto mb-3"
            style={{ backgroundColor: "#c9833a" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-muted-foreground max-w-md mx-auto text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            17 rooms — from luxury suites with glass windows to comfortable standard rooms. All AC, all with free WiFi.
          </motion.p>
        </div>

        {/* All rooms stacked — vertical on mobile AND desktop */}
        <div className="flex flex-col gap-4 md:gap-5">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href="tel:+919155789484"
            data-testid="button-rooms-book"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm tracking-widest uppercase font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #c9833a, #e09d55)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone size={15} />
            Call to Check Availability
          </a>
        </motion.div>
      </div>
    </section>
  );
}
