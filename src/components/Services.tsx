"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    number: "01",
    title: "Création de Sites Web",
    description:
      "Des sites web sur mesure, performants et esthétiques. De la landing page au e-commerce complexe, nous créons des expériences digitales qui convertissent.",
    features: ["Design UI/UX personnalisé", "Next.js & React", "SEO optimisé", "Responsive mobile"],
    color: "#7B2FBE",
    gradient: "from-[#7B2FBE]/20 to-[#7B2FBE]/5",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    number: "02",
    title: "Design Graphique",
    description:
      "Identités visuelles fortes et mémorables. Logos, chartes graphiques, supports print & digital — nous donnons une âme à votre marque.",
    features: ["Identité visuelle", "Logo & branding", "Supports marketing", "Direction artistique"],
    color: "#FF6B6B",
    gradient: "from-[#FF6B6B]/20 to-[#FF6B6B]/5",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    number: "03",
    title: "Vidéos Publicitaires",
    description:
      "Motion design, spots publicitaires, reels et contenus sociaux. Des vidéos qui capturent l'attention et racontent votre histoire en quelques secondes.",
    features: ["Motion design", "Spots pub & réseaux", "Animation 2D/3D", "Post-production"],
    color: "#7B2FBE",
    gradient: "from-[#7B2FBE]/20 to-[#FF6B6B]/10",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const scrollToPortfolio = () =>
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`,
      }}
    >
      <div
        className={`relative h-full rounded-3xl p-8 border transition-all duration-500 overflow-hidden ${
          hovered
            ? "border-black/15 shadow-xl"
            : "border-black/6"
        }`}
        style={{
          background: hovered
            ? "rgba(255,255,255,0.95)"
            : "rgba(0,0,0,0.02)",
        }}
      >
        {/* Number */}
        <div
          className="absolute top-6 right-6 text-6xl font-black opacity-5 select-none"
          style={{ fontFamily: "var(--font-syne)", color: service.color }}
        >
          {service.number}
        </div>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
          style={{
            background: `rgba(${service.color === "#7B2FBE" ? "123,47,190" : "255,107,107"}, ${hovered ? 0.2 : 0.1})`,
            color: service.color,
            boxShadow: hovered ? `0 0 30px ${service.color}40` : "none",
          }}
        >
          {service.icon}
        </div>

        {/* Content */}
        <h3
          className="text-xl font-bold text-[#0d0d0d] mb-3"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: service.color }}
              />
              {feat}
            </li>
          ))}
        </ul>

        {/* Arrow */}
        <button
          onClick={scrollToPortfolio}
          className="mt-8 flex items-center gap-2 text-sm font-semibold transition-all duration-300"
          style={{ color: service.color, opacity: hovered ? 1 : 0.5 }}
        >
          En savoir plus
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={`transition-transform duration-300 ${hovered ? "translate-x-2" : ""}`}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
            opacity: hovered ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-32 bg-[#f5f5f7] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 opacity-30"
        style={{ background: "linear-gradient(to bottom, transparent, #7B2FBE)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className="text-center mb-20"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div className="section-tag mx-auto mb-4">Nos Services</div>
          <h2
            className="text-4xl lg:text-6xl font-black text-[#0d0d0d] mb-5"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Ce que nous{" "}
            <span className="gradient-text">créons</span>
            <br />
            pour vous
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Trois expertises complémentaires pour bâtir une présence digitale
            complète et cohérente.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-20 text-center"
          style={{
            opacity: titleVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        >
          <div
            className="inline-flex items-center gap-6 bg-white border border-black/8 rounded-2xl px-8 py-5"
          >
            <div className="text-gray-500 text-sm">
              Besoin d&apos;une solution sur mesure ?
            </div>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary text-sm"
            >
              <span>Parlons de votre projet</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
