"use client";

import Logo from "./Logo";

const footerLinks = {
  Services: [
    { label: "Création Web", href: "#services" },
    { label: "Design Graphique", href: "#services" },
    { label: "Vidéo Publicitaire", href: "#services" },
    { label: "Pack Complet", href: "#contact" },
  ],
  Agence: [
    { label: "À propos", href: "#hero" },
    { label: "Nos chiffres", href: "#portfolio" },
    { label: "Portfolio", href: "#realisations" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#f5f5f7] border-t border-black/5">
      {/* Top band */}
      <div
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(123,47,190,0.04) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand column */}
            <div className="md:col-span-2">
              <Logo size="lg" className="mb-5 block" />
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                Studio créatif full-service basé en Algérie. Nous aidons les
                marques ambitieuses à rayonner à travers des créations digitales
                exceptionnelles.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-400 text-xs">Disponible pour de nouveaux projets</span>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-[#0d0d0d] font-semibold text-sm mb-5 uppercase tracking-wider">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, i) => {
                    const neon = i % 2 === 0 ? "#7B2FBE" : "#FF6B6B";
                    return (
                      <li key={link.label}>
                        <button
                          onClick={() => handleNav(link.href)}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.color = neon;
                            el.style.textShadow = `0 0 8px ${neon}cc, 0 0 18px ${neon}66`;
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.color = "";
                            el.style.textShadow = "";
                          }}
                          className="text-gray-400 text-sm transition-all duration-300 text-left"
                        >
                          {link.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © {year} Publika. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-300 text-xs">Mentions légales</span>
            <span className="text-gray-300 text-xs">Politique de confidentialité</span>
            <div className="flex items-center gap-1.5 text-gray-300 text-xs">
              Made with
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="#FF6B6B"
                stroke="none"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              en Algérie
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
