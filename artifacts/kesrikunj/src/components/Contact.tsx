import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, ExternalLink, Globe, Mail } from "lucide-react";
import { WhatsAppIcon, FacebookIcon, TripAdvisorIcon, JustDialIcon, WedMeGoodIcon, GoogleIcon } from "./BrandIcons";

const platforms = [
  {
    name: "TripAdvisor",
    desc: "Hotel reviews",
    href: "https://www.tripadvisor.in/Hotel_Review-g33076531-d33074220-Reviews-Rajrappa_Hotel_And_Banquet_Hall-Lerhitongri_Ramgarh_District_Jharkhand.html",
    icon: <TripAdvisorIcon size={22} />,
  },
  {
    name: "WedMeGood",
    desc: "Wedding venue",
    href: "https://www.wedmegood.com/wedding-venues/Rajrappa-Hotel-and-Banquet-Hall-25705812",
    icon: <WedMeGoodIcon size={22} />,
  },
  {
    name: "Mandap.com",
    desc: "Banquet listing",
    href: "https://www.mandap.com/ramgarh/kesrikunj-in-ramgarh",
    icon: <WedMeGoodIcon size={22} />,
  },
  {
    name: "JustDial",
    desc: "Business listing",
    href: "https://jsdl.in/DT-99NNYKNWS5R",
    icon: <JustDialIcon size={22} />,
  },
  {
    name: "Restaurant Guru",
    desc: "Food & dining",
    href: "https://restaurant-guru.in/KESRIKUNJ-Resort-Banquet-and-Garden-Rajrappa-2",
    icon: <GoogleIcon size={22} />,
  },
  {
    name: "India Lodging",
    desc: "Hotel guide",
    href: "https://share.google/WiIexQizVxf72U57b",
    icon: <Globe size={22} className="text-blue-500" />,
  },
];

export default function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-12 md:py-24 bg-background" data-testid="section-contact">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div ref={titleRef} className="text-center mb-12">
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
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4"
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

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-3"
          >
            <h3 className="font-serif text-xl font-bold text-primary mb-1">Reach Us</h3>

            <a href="tel:+919155789484" data-testid="link-phone-1"
              className="flex items-center gap-4 p-4 border border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                <Phone size={17} />
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">Call / WhatsApp</div>
                <div className="font-semibold text-foreground">+91 91557 89484</div>
              </div>
            </a>

            <a href="tel:+918240309328" data-testid="link-phone-2"
              className="flex items-center gap-4 p-4 border border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                <Phone size={17} />
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">Alternate</div>
                <div className="font-semibold text-foreground">+91 82403 09328</div>
              </div>
            </a>

            <a href="https://wa.me/919155789484" target="_blank" rel="noopener noreferrer"
              data-testid="link-whatsapp"
              className="flex items-center gap-4 p-4 border border-border hover:border-green-500 hover:bg-green-50 transition-all group">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <WhatsAppIcon size={22} />
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">WhatsApp</div>
                <div className="font-semibold text-foreground">+91 91557 89484</div>
              </div>
            </a>

            <a href="mailto:iksharesorts@gmail.com" data-testid="link-email"
              className="flex items-center gap-4 p-4 border border-border hover:border-secondary hover:bg-secondary/5 transition-all group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                <Mail size={17} />
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">Email</div>
                <div className="font-semibold text-foreground">iksharesorts@gmail.com</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 border border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin size={17} />
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">Address</div>
                <div className="font-medium text-foreground text-sm leading-relaxed">
                  Rajrappa Road, Rajrappa<br />Lerhitongri, Jharkhand – 829150
                </div>
                <a href="https://maps.app.goo.gl/XhCxXD5n6sabVxYU9" target="_blank" rel="noopener noreferrer"
                  data-testid="link-get-directions"
                  className="inline-flex items-center gap-1 text-xs text-secondary hover:underline mt-1.5">
                  Get Directions <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Social — no Instagram */}
            <div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Follow Us</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://wa.me/919155789484" target="_blank" rel="noopener noreferrer" data-testid="link-social-whatsapp"
                  className="flex items-center gap-2 px-3 py-2 border border-border hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all">
                  <WhatsAppIcon size={18} />
                  <span className="text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>WhatsApp</span>
                </a>
                <a href="https://www.facebook.com/iksharesorts/" target="_blank" rel="noopener noreferrer" data-testid="link-social-facebook"
                  className="flex items-center gap-2 px-3 py-2 border border-border hover:bg-[#1877F2]/10 hover:border-[#1877F2] transition-all">
                  <FacebookIcon size={18} />
                  <span className="text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Facebook</span>
                </a>
                <a href="https://www.iksharesorts.com" target="_blank" rel="noopener noreferrer" data-testid="link-social-website"
                  className="flex items-center gap-2 px-3 py-2 border border-border hover:bg-primary/5 hover:border-primary transition-all">
                  <Globe size={18} className="text-primary" />
                  <span className="text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Website</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="rounded-sm overflow-hidden border border-border shadow-md"
            data-testid="embed-map"
          >
            <iframe
              title="KESRIKUNJ Location — Rajrappa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d85.70600!3d23.63320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e8a1d3bfffff%3A0x6b2c2c2c2c2c2c2c!2sKesrikunj%20Resort%2C%20Banquet%20%26%20Garden!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        {/* Directions CTA */}
        <motion.a
          href="https://maps.app.goo.gl/XhCxXD5n6sabVxYU9"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="button-directions-banner"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 w-full py-4 border border-primary/30 bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group mb-10"
        >
          <MapPin size={17} className="text-primary group-hover:text-primary-foreground" />
          <span className="text-sm font-medium text-primary group-hover:text-primary-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Open in Google Maps — Get Directions to KESRIKUNJ
          </span>
          <ExternalLink size={14} className="text-primary group-hover:text-primary-foreground" />
        </motion.a>

        {/* Find Us Online */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Find Us Online
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-platform-${p.name.toLowerCase().replace(/[\s.—]+/g, "-")}`}
                className="flex flex-col items-center gap-2 p-3 border border-border rounded-sm hover:shadow-md transition-all hover:border-secondary/40 group text-center"
              >
                {p.icon}
                <span className="text-xs font-semibold text-foreground/80 leading-tight group-hover:text-primary" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {p.name}
                </span>
                <span className="text-[10px] text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {p.desc}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
