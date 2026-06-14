"use client";

import { useEffect, useRef, useState } from "react";

const words = ["Sites Web", "Identités", "Vidéos", "Brands"];
const PHASE_MS = [500, 1000, 1500, 2000, 1000];

function LoadingTerminal() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 22px",
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "18px" }}>
        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#7B2FBE", boxShadow: "0 0 8px #7B2FBE" }} />
        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "6.5px", letterSpacing: "2px", textTransform: "uppercase" }}>
          AI Page Builder v2.4
        </span>
      </div>

      {/* Line 1 */}
      <div style={{ marginBottom: "6px", overflow: "hidden", whiteSpace: "nowrap" }}>
        <span
          style={{
            display: "block",
            color: "#7B2FBE",
            fontSize: "8px",
            width: "0ch",
            overflow: "hidden",
            whiteSpace: "nowrap",
            animation: "termType1 0.32s steps(18, end) 0s forwards",
          }}
        >
          &gt; Initializing...
        </span>
      </div>

      {/* Bar 1 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "12px",
          opacity: 0,
          animation: "termFadeIn 0.05s ease 0.3s forwards",
        }}
      >
        <div style={{ flex: 1, height: "2px", background: "rgba(123,47,190,0.2)", borderRadius: "1px", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: "0%",
              background: "linear-gradient(90deg,#7B2FBE,#b94fd8)",
              borderRadius: "1px",
              animation: "termBarFill 0.42s ease 0.3s forwards",
            }}
          />
        </div>
        <span
          style={{
            color: "rgba(123,47,190,0.55)",
            fontSize: "6px",
            opacity: 0,
            animation: "termFadeIn 0.05s ease 0.7s forwards",
          }}
        >
          100%
        </span>
      </div>

      {/* Line 2 */}
      <div
        style={{
          marginBottom: "6px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          opacity: 0,
          animation: "termFadeIn 0.05s ease 0.48s forwards",
        }}
      >
        <span
          style={{
            display: "block",
            color: "#7B2FBE",
            fontSize: "8px",
            width: "0ch",
            overflow: "hidden",
            whiteSpace: "nowrap",
            animation: "termType2 0.32s steps(20, end) 0.48s forwards",
          }}
        >
          &gt; Loading assets...
        </span>
      </div>

      {/* Bar 2 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "12px",
          opacity: 0,
          animation: "termFadeIn 0.05s ease 0.68s forwards",
        }}
      >
        <div style={{ flex: 1, height: "2px", background: "rgba(255,107,107,0.2)", borderRadius: "1px", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: "0%",
              background: "linear-gradient(90deg,#FF6B6B,#ff9494)",
              borderRadius: "1px",
              animation: "termBarFill 0.28s ease 0.68s forwards",
            }}
          />
        </div>
        <span
          style={{
            color: "rgba(255,107,107,0.55)",
            fontSize: "6px",
            opacity: 0,
            animation: "termFadeIn 0.05s ease 0.9s forwards",
          }}
        >
          100%
        </span>
      </div>

      {/* Line 3: Ready */}
      <div
        style={{
          marginBottom: "8px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          opacity: 0,
          animation: "termFadeIn 0.05s ease 0.82s forwards",
        }}
      >
        <span
          style={{
            display: "block",
            color: "#FF6B6B",
            fontSize: "8px",
            width: "0ch",
            overflow: "hidden",
            whiteSpace: "nowrap",
            animation: "termType3 0.2s steps(11, end) 0.82s forwards",
          }}
        >
          &gt; Ready ✓
        </span>
      </div>

      {/* Blinking cursor */}
      <div
        style={{
          width: "5px",
          height: "9px",
          background: "#7B2FBE",
          borderRadius: "1px",
          opacity: 0,
          animation: "termFadeIn 0.05s ease 0.95s forwards, termCursorBlink 0.5s step-end 0.95s infinite",
        }}
      />
    </div>
  );
}

function WebsiteMockupContent({ appearing }: { appearing: boolean }) {
  const anim = (delay: number): React.CSSProperties =>
    appearing
      ? { opacity: 0, animation: `sectionAppear 0.4s ease ${delay}s forwards` }
      : { opacity: 1 };

  return (
    <div style={{ position: "absolute", inset: 0, background: "#ffffff", overflow: "hidden" }}>
      {/* Navbar */}
      <div style={anim(0)}>
        <div
          className="px-4 py-2 flex items-center justify-between"
          style={{ background: "#fff", borderBottom: "1px solid #f0f0f0" }}
        >
          <div className="flex items-center gap-1.5">
            <div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#7B2FBE,#FF6B6B)" }}
            />
            <div className="w-10 h-1.5 rounded-full bg-gray-200" />
          </div>
          <div className="flex gap-3">
            {["Accueil", "Services", "Portfolio", "Contact"].map((t) => (
              <span key={t} className="text-[7px] text-gray-400 font-medium">
                {t}
              </span>
            ))}
          </div>
          <div
            className="rounded-full px-2 py-0.5"
            style={{ background: "linear-gradient(90deg,#7B2FBE,#FF6B6B)" }}
          >
            <span className="text-[6px] text-white font-bold tracking-wide">Démarrer</span>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div style={anim(0.3)}>
        <div
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#0d0820 0%,#1a0a3c 50%,#2d0f3d 100%)",
            padding: "18px 16px 14px",
          }}
        >
          <div
            className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle,#FF6B6B,transparent)",
              filter: "blur(16px)",
              transform: "translate(30%,-30%)",
            }}
          />
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1 h-1 rounded-full bg-[#FF6B6B]" />
            <span className="text-[6.5px] text-[#FF6B6B] font-semibold tracking-widest uppercase">
              Agence Créative Premium
            </span>
          </div>
          <div className="flex gap-3 items-start">
            <div className="flex-1">
              <div className="mb-1.5">
                <span className="text-[11px] font-black text-white leading-tight block">Nous créons des</span>
                <span
                  className="text-[11px] font-black leading-tight block"
                  style={{
                    background: "linear-gradient(90deg,#7B2FBE,#FF6B6B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sites Web
                </span>
                <span className="text-[11px] font-black text-white leading-tight block">qui marquent.</span>
              </div>
              <div className="flex gap-1.5 mt-3">
                <div className="rounded-full px-2 py-1" style={{ background: "linear-gradient(90deg,#7B2FBE,#FF6B6B)" }}>
                  <span className="text-[6px] text-white font-bold">Lancer mon projet →</span>
                </div>
                <div
                  className="rounded-full px-2 py-1"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <span className="text-[6px] text-white/60 font-medium">Voir nos travaux</span>
                </div>
              </div>
            </div>
            <div
              className="flex-shrink-0 w-24 h-20 rounded-xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg,rgba(123,47,190,0.6),rgba(255,107,107,0.4))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
                />
                <div className="w-10 h-0.5 rounded-full bg-white/30" />
                <div className="w-7 h-0.5 rounded-full bg-white/20" />
              </div>
              <div
                className="absolute -bottom-1 -right-1 rounded-lg px-1.5 py-0.5"
                style={{ background: "rgba(255,107,107,0.9)" }}
              >
                <span className="text-[6px] text-white font-bold">+240%</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[["150+", "Projets"], ["98%", "Clients"], ["5+", "Années"]].map(([v, l]) => (
              <div key={v}>
                <span
                  className="text-[9px] font-black block"
                  style={{
                    background: "linear-gradient(90deg,#7B2FBE,#FF6B6B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {v}
                </span>
                <span className="text-[6px] text-white/40 block">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services section */}
      <div style={anim(0.65)}>
        <div style={{ background: "#fafafa", padding: "12px 16px" }}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="w-1 h-1 rounded-full bg-[#7B2FBE]" />
            <span className="text-[6.5px] text-[#7B2FBE] font-semibold uppercase tracking-widest">Nos Services</span>
          </div>
          <div className="flex gap-2">
            {[
              { icon: "◈", label: "Création Web", sub: "Sites & apps", color: "#7B2FBE" },
              { icon: "✦", label: "Design", sub: "UI/UX & Brand", color: "#FF6B6B" },
              { icon: "▶", label: "Vidéo", sub: "Pub & Motion", color: "#7B2FBE" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex-1 rounded-xl p-2"
                style={{ background: "#fff", border: `1px solid ${s.color}22` }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 text-[9px]"
                  style={{ background: `${s.color}15`, color: s.color }}
                >
                  {s.icon}
                </div>
                <div className="text-[7px] font-bold text-gray-800 mb-0.5">{s.label}</div>
                <div className="text-[6px] text-gray-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio section */}
      <div style={anim(1.0)}>
        <div style={{ padding: "10px 16px 14px" }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[7px] font-bold text-gray-800">Portfolio</span>
            <span className="text-[6px]" style={{ color: "#7B2FBE" }}>
              Voir tout →
            </span>
          </div>
          <div className="flex gap-2">
            {[
              { bg: "linear-gradient(135deg,#7B2FBE,#5a1fa0)", tag: "Web" },
              { bg: "linear-gradient(135deg,#FF6B6B,#e84545)", tag: "Brand" },
              { bg: "linear-gradient(135deg,#2d1b69,#7B2FBE)", tag: "Vidéo" },
            ].map((p, k) => (
              <div
                key={k}
                className="flex-1 h-14 rounded-xl relative overflow-hidden"
                style={{ background: p.bg }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
                    backgroundSize: "8px 8px",
                  }}
                />
                <div className="absolute top-1 right-1 w-5 h-5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
                <div
                  className="absolute bottom-1.5 left-1.5 rounded-full px-1.5 py-0.5"
                  style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
                >
                  <span className="text-[5.5px] text-white font-semibold">{p.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10"
        style={{ background: "linear-gradient(transparent,#fff)" }}
      />
    </div>
  );
}

export default function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);
  const pauseRef = useRef(false);
  const [phase, setPhase] = useState(1);
  const [cycle, setCycle] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      if (!wordRef.current) return;

      const currentWord = words[indexRef.current];

      if (pauseRef.current) {
        pauseRef.current = false;
        deletingRef.current = true;
        timeout = setTimeout(type, 1200);
        return;
      }

      if (!deletingRef.current) {
        charIndexRef.current++;
        wordRef.current.textContent = currentWord.slice(0, charIndexRef.current);
        if (charIndexRef.current === currentWord.length) {
          pauseRef.current = true;
          timeout = setTimeout(type, 100);
        } else {
          timeout = setTimeout(type, 80);
        }
      } else {
        charIndexRef.current--;
        wordRef.current.textContent = currentWord.slice(0, charIndexRef.current);
        if (charIndexRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % words.length;
          timeout = setTimeout(type, 400);
        } else {
          timeout = setTimeout(type, 50);
        }
      }
    };

    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const advance = (p: number) => {
      timeoutRef.current = setTimeout(() => {
        const next = p >= 5 ? 1 : p + 1;
        setPhase(next);
        if (next === 1) setCycle((c) => c + 1);
        advance(next);
      }, PHASE_MS[p - 1]);
    };

    advance(1);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("realisations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.15]"
          style={{
            background: "radial-gradient(circle, #7B2FBE 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #FF6B6B 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Rotating decorative element */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="relative w-32 h-32">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-spin-slow opacity-30"
          >
            <defs>
              <path
                id="circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fill="#7B2FBE" fontSize="11" letterSpacing="3.5">
              <textPath href="#circle">
                CRÉATIF • PREMIUM • INNOVANT • DIGITAL •{" "}
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <div
              className="section-tag opacity-0-init animate-fade-in-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE] inline-block" />
              Agence Créative Premium
            </div>

            <h1
              className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0d0d0d] mb-6 opacity-0-init animate-fade-in-up"
              style={{
                fontFamily: "var(--font-syne)",
                animationDelay: "0.4s",
                animationFillMode: "forwards",
              }}
            >
              Nous créons
              <br />
              des{" "}
              <span className="gradient-text">
                <span ref={wordRef}>Sites Web</span>
                <span
                  className="inline-block w-0.5 h-[0.85em] bg-[#FF6B6B] ml-1 align-middle"
                  style={{ animation: "pulse 0.8s step-end infinite" }}
                />
              </span>
              <br />
              qui marquent.
            </h1>

            <p
              className="text-gray-500 text-lg leading-relaxed max-w-md mb-10 opacity-0-init animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Studio créatif full-service — nous transformons vos idées en
              expériences visuelles qui captivent, convertissent et inspirent.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-16 opacity-0-init animate-fade-in-up"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <button onClick={scrollToContact} className="btn-primary">
                <span>Lancer mon projet</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
              <button onClick={scrollToPortfolio} className="btn-outline">
                <span>Voir nos réalisations</span>
              </button>
            </div>
          </div>

          {/* Right column — mockup */}
          <div
            className="relative flex items-center justify-center opacity-0-init animate-fade-in-right"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Browser mockup — droit */}
              <div
                className="w-[400px] lg:w-[480px] rounded-2xl overflow-hidden"
                  style={{
                    background: "#13111f",
                    boxShadow:
                      "0 40px 80px rgba(0,0,0,0.3), 0 16px 40px rgba(123,47,190,0.25), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Browser chrome */}
                  <div
                    className="px-4 py-3 flex items-center gap-3"
                    style={{
                      background: "#0d0b18",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div
                      className="flex-1 rounded-full px-3 py-1.5 text-[10px] text-gray-500 flex items-center gap-1.5"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="opacity-40"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                      publika-studio.dz
                    </div>
                    <div className="flex gap-2 opacity-40">
                      {[...Array(3)].map((_, k) => (
                        <div key={k} className="w-4 h-0.5 rounded-full bg-gray-500" />
                      ))}
                    </div>
                  </div>

                  {/* Animated content area */}
                  <div className="relative overflow-hidden" style={{ height: "400px" }}>

                    {/* Website content — rendered for phases 3, 4, 5 */}
                    {phase >= 3 && (
                      <WebsiteMockupContent
                        key={`site-${cycle}`}
                        appearing={phase === 3}
                      />
                    )}

                    {/* Loading terminal — phase 2 */}
                    {phase === 2 && (
                      <div
                        key={`load-${cycle}`}
                        style={{ position: "absolute", inset: 0, background: "#050310", zIndex: 5 }}
                      >
                        <LoadingTerminal />
                      </div>
                    )}

                    {/* Black screen — phase 1 */}
                    {phase === 1 && (
                      <div
                        style={{ position: "absolute", inset: 0, background: "#050310", zIndex: 10 }}
                      />
                    )}

                    {/* Fade-to-black overlay — phase 5 */}
                    {phase === 5 && (
                      <div
                        key={`fade-${cycle}`}
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "#050310",
                          zIndex: 10,
                          opacity: 0,
                          animation: "fadeInFull 1s ease forwards",
                        }}
                      />
                    )}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-12 bg-gradient-to-b from-black/20 to-transparent"
          style={{ animation: "fadeInUp 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
