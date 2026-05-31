import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wifi, Wind, Tv, Refrigerator, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const rooms = [
  {
    id: "luxury",
    name: "Luxury Suite",
    tagline: "Glass windows to the wild",
    description:
      "Floor-to-ceiling glass panels frame sweeping views of the river and jungle. Furnished with handcrafted wood, premium linens, and a kitchenette for quiet mornings.",
    gradient: "from-[#1a3d2b] via-[#2d6a4a] to-[#c9833a]",
    overlayGradient: "linear-gradient(135deg, #1a3d2b 0%, #2d6a4a 50%, #c9833a 100%)",
    price: "Luxury AC Room",
    amenities: [
      { icon: <Wifi size={18} />, label: "Free WiFi" },
      { icon: <Wind size={18} />, label: "AC" },
      { icon: <Tv size={18} />, label: "Satellite TV" },
      { icon: <Refrigerator size={18} />, label: "Mini Fridge" },
    ],
    features: ["Huge glass windows", "Natural views", "Kitchenette", "Intercom", "24x7 hot water"],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    tagline: "Nature framed in comfort",
    description:
      "A perfectly balanced room — welcoming and well-appointed. Natural light pours through wide windows overlooking lush greenery and the resort's garden.",
    gradient: "from-[#2d3e2d] via-[#4a7c59] to-[#8b6914]",
    overlayGradient: "linear-gradient(135deg, #2d3e2d 0%, #4a7c59 50%, #8b6914 100%)",
    price: "Deluxe AC Room",
    amenities: [
      { icon: <Wifi size={18} />, label: "Free WiFi" },
      { icon: <Wind size={18} />, label: "AC" },
      { icon: <Tv size={18} />, label: "Satellite TV" },
      { icon: <Refrigerator size={18} />, label: "Mini Fridge" },
    ],
    features: ["Garden or courtyard views", "Premium bedding", "24x7 hot water", "Intercom"],
  },
  {
    id: "standard",
    name: "Standard Room",
    tagline: "Simple, clean, serene",
    description:
      "Everything you need, nothing superfluous. Clean lines, quality amenities, and the same commitment to comfort — at a price that lets more pilgrims rest easy.",
    gradient: "from-[#1e2d1e] via-[#3a5c3a] to-[#b07825]",
    overlayGradient: "linear-gradient(135deg, #1e2d1e 0%, #3a5c3a 50%, #b07825 100%)",
    price: "Standard Room",
    amenities: [
      { icon: <Wifi size={18} />, label: "Free WiFi" },
      { icon: <Wind size={18} />, label: "AC" },
      { icon: <Tv size={18} />, label: "Satellite TV" },
      { icon: <Refrigerator size={18} />, label: "Mini Fridge" },
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
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative flex flex-col overflow-hidden rounded-sm shadow-md"
      data-testid={`card-room-${room.id}`}
    >
      {/* Image placeholder */}
      <div
        className="relative h-64 md:h-72 overflow-hidden"
        style={{ background: room.overlayGradient }}
      >
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBMMjAgMEw0MCAyMEwyMCA0MFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30">
          <div className="text-6xl mb-2" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
            {room.name[0]}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="text-xs tracking-widest uppercase text-secondary font-medium mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {room.price}
          </div>
          <div className="text-white font-serif text-xl font-bold">{room.name}</div>
        </div>

        {/* Hover overlay with details */}
        <div className="absolute inset-0 bg-primary/95 flex flex-col justify-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0">
          <div className="text-secondary text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Room Features
          </div>
          <ul className="space-y-2">
            {room.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-white/90 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="w-1 h-1 rounded-full bg-secondary" />
                {f}
              </li>
            ))}
          </ul>
          <motion.a
            href="https://wa.me/919155789484"
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`button-enquire-${room.id}`}
            className="mt-5 flex items-center gap-2 text-sm text-primary font-medium px-5 py-2.5 bg-secondary hover:bg-secondary/90 transition-colors w-fit"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Eye size={15} />
            Enquire Now
          </motion.a>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 bg-card p-5 border border-border border-t-0">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {room.description}
        </p>
        <div className="flex flex-wrap gap-3">
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
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
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
            17 rooms including 4 luxury suites — each designed to bring the outside in, with glass, wood, and light.
          </motion.p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        {/* Mobile scroll carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {rooms.map((room, i) => (
              <div key={room.id} className="snap-start shrink-0 w-[85vw]">
                <RoomCard room={room} index={i} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => scroll("left")}
              data-testid="button-rooms-prev"
              className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              data-testid="button-rooms-next"
              className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/919155789484"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-rooms-book"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #1a3d2b, #2d6a4a)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Check Availability
          </a>
        </motion.div>
      </div>
    </section>
  );
}
