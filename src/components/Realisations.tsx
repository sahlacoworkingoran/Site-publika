"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    name: "HIYA AI",
    url: "hiya-ai.com",
    badge: "Agence IA",
    badgeColor: "#7B2FBE",
    screenshot: "/hiya-screenshot.png",
    href: "https://hiya-ai.com",
  },
  {
    name: "Sahla Co",
    url: "sahla-co.com",
    badge: "Site Vitrine",
    badgeColor: "#FF6B6B",
    screenshot: "/sahla-screenshot.png",
    href: "https://sahla-co.com",
  },
];

function BrowserCard({
  project,
  style,
  className = "",
}: {
  project: (typeof projects)[0];
  style?: React.CSSProperties;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        ...style,
        boxShadow: hovered
          ? "0 40px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.3)"
          : "0 24px 60px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.25)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
        transform: hovered
          ? `${style?.transform ?? ""} scale(1.02)`
          : style?.transform,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#1a1a1a" }}
      >
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
        </div>
        <div
          className="flex-1 mx-3 rounded-md px-3 py-1 text-xs text-gray-400 flex items-center gap-2"
          style={{ background: "#2a2a2a" }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
          </svg>
          {project.url}
        </div>
        {/* Badge */}
        <span
          className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
          style={{ background: project.badgeColor }}
        >
          {project.badge}
        </span>
      </div>

      {/* Screenshot */}
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <Image
          src={project.screenshot}
          alt={project.name}
          fill
          className="object-cover object-top"
        />
        {/* Hover overlay with CTA */}
        <div
          className="absolute inset-0 flex items-end p-5 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0,
          }}
        >
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
            style={{ background: project.badgeColor }}
          >
            Voir le projet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Realisations() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="realisations" className="relative py-32 overflow-hidden" style={{ background: "#0d0d0d" }}>
      {/* Subtle background glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(123,47,190,0.12) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,107,107,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(123,47,190,0.15)", color: "#7B2FBE", border: "1px solid rgba(123,47,190,0.25)" }}
          >
            Nos Réalisations
          </div>
          <h2
            className="text-4xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Projets qui{" "}
            <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(135deg, #7B2FBE, #FF6B6B)", backgroundClip: "text" }}>
              font la différence
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Du concept à la mise en ligne — des expériences digitales qui captivent et convertissent.
          </p>
        </div>

        {/* Stacked cards */}
        <div
          ref={ref}
          className="relative mx-auto"
          style={{ maxWidth: 760, height: 480 }}
        >
          {/* HIYA — background card */}
          <div
            className="absolute"
            style={{
              width: "88%",
              top: "10%",
              left: "0%",
              zIndex: 0,
              opacity: visible ? 1 : 0,
              transform: visible
                ? "perspective(1200px) rotateY(6deg) rotate(-2deg) translateX(-20px)"
                : "perspective(1200px) rotateY(6deg) rotate(-2deg) translateX(-60px)",
              transition: "opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s",
            }}
          >
            <BrowserCard
              project={projects[0]}
              style={{
                transform: "perspective(1200px) rotateY(6deg) rotate(-2deg)",
              }}
            />
          </div>

          {/* SAHLA — foreground card */}
          <div
            className="absolute"
            style={{
              width: "88%",
              top: "0%",
              right: "0%",
              zIndex: 10,
              opacity: visible ? 1 : 0,
              transform: visible
                ? "perspective(1200px) rotateY(-4deg) rotate(2deg) translateX(20px)"
                : "perspective(1200px) rotateY(-4deg) rotate(2deg) translateX(60px)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s",
            }}
          >
            <BrowserCard
              project={projects[1]}
              style={{
                transform: "perspective(1200px) rotateY(-4deg) rotate(2deg)",
              }}
            />
          </div>
        </div>

        {/* Project names below */}
        <div
          className="flex justify-between mt-12 max-w-[760px] mx-auto px-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          {projects.map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: p.badgeColor }}
              />
              <span className="text-gray-500 text-sm font-medium">{p.name}</span>
              <span className="text-gray-700 text-xs">{p.url}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.8s",
          }}
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-3 text-sm font-semibold text-white px-6 py-3.5 rounded-xl transition-all duration-300 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #7B2FBE, #FF6B6B)" }}
          >
            Démarrer votre projet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
