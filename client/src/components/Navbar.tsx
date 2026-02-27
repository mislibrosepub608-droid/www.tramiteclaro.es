// Trámite Claro — Navbar
// Design: Warm Professionalism — sticky, azul corporativo, logo prominente
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/tIvreRhgxQlcutnT.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <img
            src={LOGO_URL}
            alt="Trámite Claro"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors duration-200 relative group"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-200" />
            </a>
          ))}
          <a
            href="tel:+34611972625"
            className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-900 transition-colors duration-200"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            <Phone size={14} />
            +34 611 97 26 25
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-blue-800"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-blue-800 py-2 border-b border-gray-50"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+34611972625"
              className="flex items-center justify-center gap-2 bg-blue-800 text-white px-4 py-3 rounded-full font-bold mt-2"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              <Phone size={16} />
              +34 611 97 26 25
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
