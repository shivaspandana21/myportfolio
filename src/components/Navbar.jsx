import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(sections[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(245,240,232,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #ddd5c8" : "none",
        boxShadow: scrolled ? "0 1px 8px rgba(61,43,31,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={e => { e.preventDefault(); handleNav("#home"); }}
          whileHover={{ scale: 1.04 }}
          className="font-display text-xl font-bold"
          style={{ color: "#3d2b1f" }}
        >
          Shiva spandana avula <span style={{ color: "#5b9bb5" }}></span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <motion.a
                key={label}
                href={href}
                onClick={e => { e.preventDefault(); handleNav(href); }}
                whileHover={{ y: -1 }}
                className="relative px-3 py-2 text-sm font-medium transition-colors rounded-lg"
                style={{ color: isActive ? "#5b9bb5" : "#7a6555" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "#e8f4f8" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{label}</span>
              </motion.a>
            );
          })}
        </nav>

        <button className="md:hidden p-2" style={{ color: "#3d2b1f" }} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "#f5f0e8", borderBottom: "1px solid #ddd5c8" }}
            className="md:hidden px-6 pb-4"
          >
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} onClick={e => { e.preventDefault(); handleNav(href); }}
                className="block py-3 text-sm font-medium border-b"
                style={{ color: "#3d2b1f", borderColor: "#ddd5c820" }}>
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
