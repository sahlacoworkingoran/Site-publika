"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Nos chiffres", href: "#portfolio" },
  { label: "Portfolio", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

const neonColors = ["#7B2FBE", "#FF6B6B", "#7B2FBE", "#FF6B6B", "#7B2FBE"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "services", "portfolio", "realisations", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick("#hero")} className="flex items-center gap-2">
            <Logo size="lg" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const color = neonColors[i];
              const isHovered = hoveredIndex === i;
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={
                    isHovered
                      ? {
                          color: color,
                          boxShadow: `0 0 8px ${color}55, 0 0 20px ${color}33, inset 0 0 12px ${color}15`,
                          border: `1px solid ${color}66`,
                          background: `${color}0d`,
                          textShadow: `0 0 8px ${color}cc`,
                        }
                      : isActive
                      ? { color: "#0d0d0d", background: "rgba(0,0,0,0.08)" }
                      : { color: "#6b7280" }
                  }
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-transparent"
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:flex btn-primary text-sm"
          >
            <span>Démarrer un projet</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full glass"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 bg-[#0d0d0d] transition-all duration-300 ${
                menuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"
              }`}
            />
            <span
              className={`block h-0.5 bg-[#0d0d0d] transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-[#0d0d0d] transition-all duration-300 ${
                menuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white transition-transform duration-500 flex flex-col pt-24 px-8 border-l border-black/5 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link, i) => {
            const color = neonColors[i];
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = color;
                  el.style.textShadow = `0 0 10px ${color}cc`;
                  el.style.paddingLeft = "8px";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "";
                  el.style.textShadow = "";
                  el.style.paddingLeft = "";
                }}
                className="text-left py-5 text-xl font-semibold text-gray-800 border-b border-black/5 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-8 btn-primary justify-center"
          >
            <span>Démarrer un projet</span>
          </button>
        </div>
      </div>
    </>
  );
}
