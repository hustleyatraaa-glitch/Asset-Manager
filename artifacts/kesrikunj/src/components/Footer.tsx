import { MessageCircle, Facebook, Instagram, Phone, MapPin, Globe, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home",     href: "#home" },
  { name: "About",   href: "#about" },
  { name: "Rooms",   href: "#rooms" },
  { name: "Gallery", href: "#gallery" },
  { name: "Banquet", href: "#banquet" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const externalLinks = [
  { name: "Official Website",  href: "https://www.iksharesorts.com" },
  { name: "TripAdvisor",       href: "https://www.tripadvisor.in/Hotel_Review-g33076531-d33074220-Reviews-Rajrappa_Hotel_And_Banquet_Hall-Lerhitongri_Ramgarh_District_Jharkhand.html" },
  { name: "WedMeGood",         href: "https://www.wedmegood.com/wedding-venues/Rajrappa-Hotel-and-Banquet-Hall-25705812" },
  { name: "JustDial — Resort", href: "https://www.justdial.com/Ramgarh-Jharkhand/Iksha-Resorts-Pvt-Ltd-Rajrappa/9999P6553-6553-240813221522-D1U7_BZDET/amp" },
  { name: "JustDial — Banquet",href: "https://www.justdial.com/Ramgarh-Jharkhand/Kesrikunj-Royals-Banquet-And-Garden-Rajrappa/9999P6553-6553-190825224443-D6W7_BZDET" },
  { name: "Restaurant Guru",   href: "https://restaurant-guru.in/KESRIKUNJ-Resort-Banquet-and-Garden-Rajrappa-2" },
  { name: "MenuList",          href: "https://menulist.menu/restaurants/lerhitongri/kesrikunj-resort-banquet-and-garden" },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" data-testid="section-footer">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="font-serif text-2xl font-bold mb-1 tracking-wide">KESRIKUNJ</div>
            <div className="text-xs text-secondary tracking-widest uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Resort · Banquet · Garden</div>
            <div className="w-10 h-0.5 mb-4" style={{ backgroundColor: "#c9833a" }} />
            <p className="text-primary-foreground/55 text-sm leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              A sacred retreat near Maa Chhinnamastike Temple, Rajrappa, Jharkhand. Managed by Iksha Resorts Pvt. Ltd.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 flex-wrap">
              <a href="https://wa.me/919155789484" target="_blank" rel="noopener noreferrer" data-testid="link-footer-whatsapp"
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all" aria-label="WhatsApp">
                <MessageCircle size={15} />
              </a>
              <a href="https://www.facebook.com/iksharesorts/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-facebook"
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href="https://www.instagram.com/iksha.in/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-instagram"
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all" aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href="https://www.iksharesorts.com" target="_blank" rel="noopener noreferrer" data-testid="link-footer-website"
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:bg-secondary hover:text-primary hover:border-secondary transition-all" aria-label="Official Website">
                <Globe size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Quick Links
            </div>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    data-testid={`link-footer-${link.name.toLowerCase()}`}
                    className="text-sm text-primary-foreground/55 hover:text-secondary transition-colors text-left"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us Online */}
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Find Us Online
            </div>
            <ul className="space-y-2.5">
              {externalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/55 hover:text-secondary transition-colors flex items-center gap-1.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <Globe size={11} className="shrink-0 opacity-50" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Contact
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/55 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Rajrappa Road, Rajrappa, Lerhitongri, Jharkhand – 829150
                </span>
              </div>
              <a href="tel:+919155789484" data-testid="link-footer-phone-1"
                className="flex items-center gap-2.5 hover:text-secondary transition-colors">
                <Phone size={15} className="text-secondary shrink-0" />
                <span className="text-sm text-primary-foreground/55" style={{ fontFamily: "'DM Sans', sans-serif" }}>+91 91557 89484</span>
              </a>
              <a href="tel:+918240309328" data-testid="link-footer-phone-2"
                className="flex items-center gap-2.5 hover:text-secondary transition-colors">
                <Phone size={15} className="text-secondary shrink-0" />
                <span className="text-sm text-primary-foreground/55" style={{ fontFamily: "'DM Sans', sans-serif" }}>+91 82403 09328</span>
              </a>
              <a href="mailto:iksharesorts@gmail.com" data-testid="link-footer-email"
                className="flex items-center gap-2.5 hover:text-secondary transition-colors">
                <Mail size={15} className="text-secondary shrink-0" />
                <span className="text-sm text-primary-foreground/55" style={{ fontFamily: "'DM Sans', sans-serif" }}>iksharesorts@gmail.com</span>
              </a>
              <a href="https://maps.app.goo.gl/XhCxXD5n6sabVxYU9" target="_blank" rel="noopener noreferrer"
                data-testid="link-footer-maps"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 text-xs tracking-widest uppercase font-medium text-primary transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #c9833a, #e09d55)", fontFamily: "'DM Sans', sans-serif" }}>
                <MapPin size={13} />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/35" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            &copy; 2025 KESRIKUNJ – Resort, Banquet and Garden. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/25" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Managed by Iksha Resorts Pvt. Ltd. · Jharkhand Tourism
          </p>
        </div>
      </div>
    </footer>
  );
}
