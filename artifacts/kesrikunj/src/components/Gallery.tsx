import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: "garden",
    label: "Garden View",
    gradient: "linear-gradient(135deg, #1a4d2e 0%, #2d7a4a 40%, #4a9c6a 100%)",
    accentGradient: "linear-gradient(135deg, #1a3d2b 0%, #52a36b 100%)",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: "banquet",
    label: "Banquet Hall",
    gradient: "linear-gradient(135deg, #3d2e1a 0%, #7a5c2d 40%, #c9a050 100%)",
    accentGradient: "linear-gradient(135deg, #2e1a0a 0%, #c9833a 100%)",
    colSpan: "",
    rowSpan: "",
  },
  {
    id: "exterior",
    label: "Resort Exterior",
    gradient: "linear-gradient(135deg, #1a2e3d 0%, #2d4a7a 40%, #5080b0 100%)",
    accentGradient: "linear-gradient(135deg, #1a3d2b 0%, #3a6a8a 100%)",
    colSpan: "",
    rowSpan: "",
  },
  {
    id: "interior",
    label: "Room Interior",
    gradient: "linear-gradient(135deg, #2e1a1a 0%, #6a3a2d 40%, #b07050 100%)",
    accentGradient: "linear-gradient(135deg, #3d1a0a 0%, #9a5a40 100%)",
    colSpan: "",
    rowSpan: "",
  },
  {
    id: "temple",
    label: "Temple View",
    gradient: "linear-gradient(135deg, #2d1a3d 0%, #5a2d7a 40%, #9050b0 100%)",
    accentGradient: "linear-gradient(135deg, #3d1a2b 0%, #7a3a8a 100%)",
    colSpan: "",
    rowSpan: "",
  },
  {
    id: "riverside",
    label: "Riverside",
    gradient: "linear-gradient(135deg, #1a3d3d 0%, #2d7a7a 40%, #50b0b0 100%)",
    accentGradient: "linear-gradient(135deg, #0a2e3d 0%, #3a8a8a 100%)",
    colSpan: "md:col-span-2",
    rowSpan: "",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background" data-testid="section-gallery">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div ref={titleRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Visual Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
          >
            Gallery
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-0.5 mx-auto"
            style={{ backgroundColor: "#c9833a" }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(i)}
              data-testid={`button-gallery-${item.id}`}
              className={`relative overflow-hidden cursor-pointer rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${item.colSpan} ${item.rowSpan}`}
              aria-label={`View ${item.label}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: item.gradient }}
              />
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <div
                  className="text-white font-serif text-lg font-semibold drop-shadow"
                >
                  {item.label}
                </div>
              </div>
              <div className="absolute inset-0 bg-secondary/0 hover:bg-secondary/10 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
            data-testid="modal-lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] max-w-2xl aspect-[4/3] rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute inset-0"
                style={{ background: galleryItems[lightboxIndex].accentGradient }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/20 font-serif text-8xl font-bold italic select-none">
                  {galleryItems[lightboxIndex].label[0]}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-white font-serif text-2xl font-bold">
                  {galleryItems[lightboxIndex].label}
                </div>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              data-testid="button-lightbox-prev"
              className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 w-12 h-12 flex items-center justify-center rounded-full transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              data-testid="button-lightbox-next"
              className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 w-12 h-12 flex items-center justify-center rounded-full transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <button
              onClick={closeLightbox}
              data-testid="button-lightbox-close"
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 w-10 h-10 flex items-center justify-center rounded-full transition-all"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
