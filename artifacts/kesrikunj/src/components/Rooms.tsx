import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wifi, Wind, Tv, Refrigerator, ChevronLeft, ChevronRight, Phone } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const rooms = [
  {
    id: "luxury",
    name: "Luxury Suite",
    tagline: "Huge glass windows · Natural views",
    description:
      "Floor-to-ceiling glass panels frame sweeping views of the river and the sacred hills of Rajrappa. Each luxury AC room comes with a kitchenette, satellite TV, mini fridge, and 24x7 hot water.",
    image: `${BASE}photos/room1.jpg`,
    price: "AC Luxury Room",
    amenities: [
      { icon: <Wifi size={16} />, label: "Free WiFi" },
      { icon: <Wind size={16} />, label: "AC" },
      { icon: <Tv size={16} />, label: "Satellite TV" },
      { icon: <Refrigerator size={16} />, label: "Mini Fridge" },
    ],
    features: ["Huge glass windows", "Natural views", "Kitchenette", "Intercom", "24x7 hot water"],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    tagline: "Comfortable · Well-appointed",
    description:
      "A perfectly balanced room — welcoming, clean, and well-appointed. Natural light pours through wide windows overlooking the lush greenery and garden of the resort.",
    image: `${BASE}photos/room4.jpg`,
    price: "Deluxe AC Room",
    amenities: [
      { icon: <Wifi size={16} />, label: "Free WiFi" },
      { icon: <Wind size={16} />, label: "AC" },
      { icon: <Tv size={16} />, label: "Satellite TV" },
      { icon: <Refrigerator size={16} />, label: "Mini Fridge" },
    ],
    features: ["Garden/courtyard views", "Premium bedding", "Geyser", "Intercom"],
  },
  {
    id: "standard",
    name: "Standard Room",
    tagline: "Simple · Clean · Peaceful",
    description:
      "Everything you need, nothing superfluous. Clean, spotless rooms with quality amenities — ideal for pilgrims and families visiting Maa Chhinnamastike Temple.",
    image: `${BASE}photos/room5.jpg`,
    price: "Standard Room",
    amenities: [
      { icon: <Wifi size={16} />, label: "Free WiFi" },
      { icon: <Wind size={16} />, label: "AC" },
      { icon: <Tv size={16} />, label: "Satellite TV" },
      { icon: <Refrigerator size={16} />, label: "Mini Fridge" },
    ],
    features: ["Comfortable bedding", "Clean bathrooms", "Geyser", "24x7 hot water"],
  },
];

function RoomCard({ room, index }: { room: (typeof rooms)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.14 }}
      className="group relative flex flex-col overflow-hidden rounded-sm shadow-md"
      data-testid={`card-room-${room.id}`}
    >
      {/* Real photo */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-primary/20">
        <img
          src={room.image}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="text-xs tracking-widest uppercase text-secondary font-medium mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {room.price}
          </div>
          <div className="text-white font-serif text-xl font-bold">{room.name}</div>
          <div className="text-white/70 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{room.tagline}</div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/93 flex flex-col justify-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-350 translate-y-3 group-hover:translate-y-0">
          <div className="text-secondary text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Room Features</div>
          <ul className="space-y-2 mb-5">
            {room.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-white/90 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="tel:+919155789484"
            data-testid={`button-enquire-${room.id}`}
            className="flex items-center gap-2 text-sm text-primary font-semibold px-5 py-2.5 w-fit transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #c9833a, #e09d55)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone size={14} />
            Call to Book
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="flex-1 bg-card p-5 border border-border border-t-0">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {room.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {room.amenities.map((a) => (
            <div key={a.label} className="flex items-center gap-1.5 text-xs text-primary/80 bg-primary/5 px-2.5 py-1.5 rounded-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {a.icon}
              {a.label}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Rooms() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section id="rooms" className="py-24 md:py-32 bg-muted/30" data-testid="section-rooms">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Accommodations
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
          >
            Rooms &amp; Suites
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-0.5 mx-auto mb-4"
            style={{ backgroundColor: "#c9833a" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            17 rooms total — including 4 luxury suites with glass windows, natural views, and every modern comfort.
          </motion.p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {rooms.map((room, i) => <RoomCard key={room.id} room={room} index={i} />)}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {rooms.map((room, i) => (
              <div key={room.id} className="snap-start shrink-0 w-[86vw]">
                <RoomCard room={room} index={i} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-5">
            <button onClick={() => scroll("left")} data-testid="button-rooms-prev"
              className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll("right")} data-testid="button-rooms-next"
              className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="tel:+919155789484"
            data-testid="button-rooms-book"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-[0.18em] uppercase font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #1a3d2b, #2d6a4a)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone size={15} />
            Call to Check Availability
          </a>
        </motion.div>
      </div>
    </section>
  );
}
