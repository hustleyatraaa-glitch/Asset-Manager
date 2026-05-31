import { MessageCircle, Facebook, Instagram, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Gallery", href: "#gallery" },
  { name: "Banquet", href: "#banquet" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" data-testid="section-footer">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-3xl font-bold mb-3 tracking-wide">KESRIKUNJ</div>
            <div className="w-10 h-0.5 mb-4" style={{ backgroundColor: "#c9833a" }} />
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Resort, Banquet &amp; Garden. A sacred retreat where nature meets devotion — near Maa Chhinnamastike
              Temple, Rajrappa, Jharkhand.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919155789484"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-whatsapp"
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://facebook.com/kesrikunj"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-facebook"
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com/kesrikunj"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-instagram"
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              className="text-xs tracking-[0.3em] uppercase text-secondary mb-5 font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Quick Links
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    data-testid={`link-footer-${link.name.toLowerCase()}`}
                    className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors text-left"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-xs tracking-[0.3em] uppercase text-secondary mb-5 font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/60 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Rajrappa Road, Rajrappa, Lerhitongri, Jharkhand – 829150
                </span>
              </div>
              <a
                href="tel:+919155789484"
                data-testid="link-footer-phone-1"
                className="flex items-center gap-3 hover:text-secondary transition-colors"
              >
                <Phone size={16} className="text-secondary shrink-0" />
                <span className="text-sm text-primary-foreground/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  +91 91557 89484
                </span>
              </a>
              <a
                href="tel:+918240309328"
                data-testid="link-footer-phone-2"
                className="flex items-center gap-3 hover:text-secondary transition-colors"
              >
                <Phone size={16} className="text-secondary shrink-0" />
                <span className="text-sm text-primary-foreground/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  +91 82403 09328
                </span>
              </a>
              <a
                href="https://wa.me/919155789484"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-whatsapp-cta"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 text-xs tracking-widest uppercase font-medium text-primary transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #c9833a, #e09d55)", fontFamily: "'DM Sans', sans-serif" }}
              >
                <MessageCircle size={14} />
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            &copy; 2025 KESRIKUNJ – Resort, Banquet and Garden. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Managed by Iksha Resorts Pvt. Ltd. in collaboration with Jharkhand Tourism
          </p>
        </div>
      </div>
    </footer>
  );
}
