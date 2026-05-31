import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, MessageCircle, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-background" data-testid="section-contact">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Get in Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
          >
            Contact &amp; Location
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-0.5 mx-auto"
            style={{ backgroundColor: "#c9833a" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-serif text-2xl font-bold text-primary">Reach Us</h3>
            <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Whether you're planning a stay, booking an event, or simply have questions — we're here to help.
              Call us or drop a message on WhatsApp.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+919155789484"
                data-testid="link-phone-1"
                className="flex items-center gap-4 p-4 border border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">Call Us</div>
                  <div className="font-medium text-foreground">+91 91557 89484</div>
                </div>
              </a>

              <a
                href="tel:+918240309328"
                data-testid="link-phone-2"
                className="flex items-center gap-4 p-4 border border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">Alternate</div>
                  <div className="font-medium text-foreground">+91 82403 09328</div>
                </div>
              </a>

              <a
                href="https://wa.me/919155789484"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp"
                className="flex items-center gap-4 p-4 border border-border hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <MessageCircle size={18} />
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">WhatsApp</div>
                  <div className="font-medium text-foreground">Send a Message</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 border border-border">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">Address</div>
                  <div className="font-medium text-foreground text-sm leading-relaxed">
                    Rajrappa Road, Rajrappa<br />
                    Lerhitongri, Jharkhand – 829150
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Follow Us
              </div>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/919155789484"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-social-whatsapp"
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="https://facebook.com/kesrikunj"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-social-facebook"
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com/kesrikunj"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-social-instagram"
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-pink-400 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="rounded-sm overflow-hidden border border-border shadow-md"
            data-testid="embed-map"
          >
            <iframe
              title="KESRIKUNJ Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3!2d85.709396!3d23.631581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM3JzUzLjciTiA4NcKwNDInMzMuOCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
