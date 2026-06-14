"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "24h", label: "Délai de réponse garanti", color: "#7B2FBE", scale: 1 },
  { value: "100%", label: "Satisfaction client", color: "#FF6B6B", scale: 1 },
  { value: "3", label: "Expertises complémentaires", color: "#7B2FBE", scale: 1 },
  { value: "15j", label: "Révisions incluses", color: "#FF6B6B", scale: 1 },
];

function StatItem({ stat, index, isLast }: { stat: typeof stats[0]; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center py-8 px-4 ${!isLast ? "border-b lg:border-b-0 lg:border-r border-black/8" : ""}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.15}s`,
      }}
    >
      <span
        className="font-black leading-none tracking-tighter block"
        style={{
          fontFamily: "var(--font-syne)",
          color: stat.color,
          fontSize: `clamp(${3 * stat.scale}rem, ${5 * stat.scale}vw, ${5.5 * stat.scale}rem)`,
        }}
      >
        {stat.value}
      </span>
      <span className="mt-4 text-gray-400 text-xs font-semibold uppercase tracking-[0.15em] leading-relaxed max-w-[120px]">
        {stat.label}
      </span>
    </div>
  );
}

export default function Portfolio() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTitleVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="relative py-32 bg-[#f5f5f7] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 opacity-30"
        style={{ background: "linear-gradient(to bottom, transparent, #7B2FBE)" }}
      />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(123,47,190,0.05) 0%,transparent 70%)" }} />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(255,107,107,0.05) 0%,transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className="text-center mb-24"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div className="section-tag mx-auto mb-4">Pourquoi nous choisir</div>
          <h2
            className="text-4xl lg:text-6xl font-black text-[#0d0d0d] mb-5"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Des chiffres qui<br />
            <span className="gradient-text">parlent pour nous</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mb-24">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} isLast={i === stats.length - 1} />
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-20 mx-auto max-w-2xl"
          style={{ background: "linear-gradient(90deg, transparent, rgba(123,47,190,0.25), transparent)" }}
        />

        {/* Quote */}
        <div
          className="text-center max-w-3xl mx-auto"
          style={{
            opacity: titleVisible ? 1 : 0,
            transition: "opacity 1s ease 0.6s",
          }}
        >
          <p
            className="text-2xl lg:text-3xl font-bold text-[#0d0d0d] leading-snug"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            "Nous ne livrons pas des projets —<br />
            <span style={{ color: "#7B2FBE" }}>nous livrons des résultats.</span>"
          </p>
          <p className="mt-5 text-gray-400 text-sm tracking-wider uppercase">— L'équipe Publika</p>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-20 text-center"
          style={{ opacity: titleVisible ? 1 : 0, transition: "opacity 0.8s ease 0.8s" }}
        >
          <div className="inline-flex items-center gap-6 bg-white border border-black/8 rounded-2xl px-8 py-5">
            <div className="text-gray-500 text-sm">
              Prêt à lancer votre projet avec nous ?
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary text-sm"
            >
              <span>Parlons-en</span>
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
