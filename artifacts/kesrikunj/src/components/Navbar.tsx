import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        isScrolled ? "bg-primary text-primary-foreground shadow-md py-4" : "bg-transparent text-white py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="font-serif text-2xl tracking-wider font-bold">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}>
            KESRIKUNJ
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-sm font-medium tracking-wide hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="secondary"
            className="rounded-none font-serif tracking-wider ml-4"
            onClick={() => window.open("https://wa.me/919155789484", "_blank")}
          >
            BOOK NOW
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-current"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-primary-foreground/10 py-6 px-4 shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-primary-foreground text-lg py-2 border-b border-primary-foreground/10 font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="secondary"
            className="rounded-none font-serif tracking-wider w-full mt-4"
            onClick={() => window.open("https://wa.me/919155789484", "_blank")}
          >
            BOOK NOW
          </Button>
        </div>
      )}
    </header>
  );
}
