import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const galleryItems = [
  { id: "g1",  label: "Resort Exterior",  src: `${BASE}photos/hero1.jpg`,    colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { id: "g2",  label: "Banquet Hall",     src: `${BASE}photos/gallery1b.jpg`, colSpan: "",              rowSpan: "" },
  { id: "g3",  label: "Garden View",      src: `${BASE}photos/gallery2b.jpg`, colSpan: "",              rowSpan: "" },
  { id: "g4",  label: "Resort Grounds",   src: `${BASE}photos/gallery3b.jpg`, colSpan: "",              rowSpan: "" },
  { id: "g5",  label: "Scenic View",      src: `${BASE}photos/gallery7.jpg`,  colSpan: "",              rowSpan: "" },
  { id: "g6",  label: "Riverside",        src: `${BASE}photos/hero2.jpg`,     colSpan: "md:col-span-2", rowSpan: "" },
  { id: "g7",  label: "Nature Trail",     src: `${BASE}photos/hero3.jpg`,     colSpan: "",              rowSpan: "" },
  { id: "g8",  label: "Temple Vicinity",  src: `${BASE}photos/gallery8.jpg`,  colSpan: "",              rowSpan: "" },
  { id: "g9",  label: "Resort at Dusk",   src: `${BASE}photos/hero4.jpg`,     colSpan: "",              rowSpan: "" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));

  return (
    <section id="gallery" className="py-12 md:py-24 bg-background" data-testid="section-gallery">
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

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-2.5">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => openLightbox(i)}
              data-testid={`button-gallery-${item.id}`}
              className={`group relative overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${item.colSpan} ${item.rowSpan}`}
              aria-label={`View ${item.label}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <div className="text-white font-serif text-sm font-semibold drop-shadow">{item.label}</div>
              </div>
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
            onClick={closeLightbox}
            data-testid="modal-lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[85vh] w-[92vw] rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].label}
                className="w-full h-full object-cover max-h-[85vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-white font-serif text-xl font-bold">
                  {galleryItems[lightboxIndex].label}
                </div>
              </div>
            </motion.div>

            <button onClick={(e) => { e.stopPropagation(); prev(); }} data-testid="button-lightbox-prev"
              className="absolute left-3 md:left-8 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 w-12 h-12 flex items-center justify-center rounded-full transition-all" aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} data-testid="button-lightbox-next"
              className="absolute right-3 md:right-8 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 w-12 h-12 flex items-center justify-center rounded-full transition-all" aria-label="Next">
              <ChevronRight size={24} />
            </button>
            <button onClick={closeLightbox} data-testid="button-lightbox-close"
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 w-10 h-10 flex items-center justify-center rounded-full transition-all" aria-label="Close">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
