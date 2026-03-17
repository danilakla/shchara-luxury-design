import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/#about", label: "О нас" },
  { href: "/#rooms", label: "Номера" },
  { href: "/#booking", label: "Бронирование" },
  { href: "/#cafe", label: "Кафе" },
  { href: "/#payment", label: "Оплата" },
  { href: "/#contacts", label: "Контакты" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-wider text-primary">
          ЩАРА
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+375156266303"
          className="hidden md:inline-flex text-sm tracking-wider text-primary border border-primary/30 px-5 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Позвонить
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-strong mt-2 mx-4 rounded-lg p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+375156266303"
              className="text-sm tracking-wider text-primary border border-primary/30 px-5 py-2 rounded text-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Позвонить
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
