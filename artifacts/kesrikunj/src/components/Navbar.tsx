import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Gallery", href: "#gallery" },
    { name: "Banquet", href: "#banquet" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary text-primary-foreground shadow-md py-3"
          : "bg-transparent text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
          className="flex flex-col leading-none"
          data-testid="link-logo"
        >
          <span
            className="font-serif font-bold tracking-wider text-xl md:text-2xl"
          >
            iksharesorts
          </span>
          <span
            className="text-secondary text-[10px] tracking-[0.18em] uppercase font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            KESRIKUNJ
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="text-sm font-medium tracking-wide hover:text-secondary transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919155789484"
            data-testid="button-call-now-nav"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide text-primary transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #c9833a, #e09d55)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Phone size={15} />
            Call Now
          </a>
        </nav>

        {/* Mobile: call + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+919155789484"
            data-testid="button-call-now-mobile"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-wide text-primary"
            style={{ background: "linear-gradient(135deg, #c9833a, #e09d55)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone size={13} />
            Call Now
          </a>
          <button
            className="text-current p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-white/10 py-5 px-5 shadow-xl flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="text-primary-foreground text-base py-3 border-b border-white/10 font-medium tracking-wide"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
