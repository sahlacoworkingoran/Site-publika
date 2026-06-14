"use client";

import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.81 19.79 19.79 0 011.07 1.18 2 2 0 013.06 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121 16l.92.92z" />
      </svg>
    ),
    label: "Téléphone",
    value: "+213 XX XX XX XX",
    href: "tel:+213XXXXXXXX",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "contact@publika.dz",
    href: "mailto:contact@publika.dz",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adresse",
    value: "Oran, Algérie",
    href: "#",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61584103334297",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/213541816856",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
];

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSending(false);
    setSent(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-32 bg-[#f5f5f7] overflow-hidden">
      {/* Background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(123,47,190,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
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
          <div className="section-tag mx-auto mb-4">Contact</div>
          <h2
            className="text-4xl lg:text-6xl font-black text-[#0d0d0d] mb-5"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Votre projet,{" "}
            <span className="gradient-text">notre passion</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Parlez-nous de votre idée. Nous vous répondons sous 24h avec une
            proposition personnalisée.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — info */}
          <div
            className="lg:col-span-2 space-y-8"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="flex items-center gap-4 bg-white border border-black/8 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:border-[#7B2FBE]/30 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(123,47,190,0.15)",
                      color: "#7B2FBE",
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">{info.label}</div>
                    <div className="text-[#0d0d0d] font-semibold text-sm">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="bg-white border border-black/8 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[#0d0d0d] font-semibold text-sm">Disponible pour de nouveaux projets</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Notre équipe est disponible du dimanche au jeudi, de 9h à 18h.
                Nous répondons en général en moins de 3 heures.
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">
                Suivez-nous
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-black/8 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#0d0d0d] hover:border-[#7B2FBE]/40 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.8s ease 0.3s",
            }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-black/8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(123,47,190,0.2)", border: "2px solid #7B2FBE" }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7B2FBE" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#0d0d0d] mb-3"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Message envoyé !
                  </h3>
                  <p className="text-gray-500 max-w-xs">
                    Merci ! Nous vous recontacterons dans les 24h avec une proposition.
                  </p>
                  <button
                    onClick={() => { setSent(false); setFormData({ name: "", email: "", service: "", message: "" }); }}
                    className="mt-8 text-sm text-[#7B2FBE] hover:text-[#FF6B6B] transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3
                    className="text-xl font-bold text-[#0d0d0d] mb-6"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Décrivez votre projet
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wide">
                        Votre nom *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ahmed Benali"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0d0d0d] placeholder-gray-300 text-sm outline-none focus:border-[#7B2FBE]/60 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ahmed@exemple.dz"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0d0d0d] placeholder-gray-300 text-sm outline-none focus:border-[#7B2FBE]/60 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wide">
                      Service souhaité
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0d0d0d] text-sm outline-none focus:border-[#7B2FBE]/60 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-white">Choisissez un service...</option>
                      <option value="web" className="bg-white">Création de site web</option>
                      <option value="design" className="bg-white">Design graphique</option>
                      <option value="video" className="bg-white">Vidéo publicitaire</option>
                      <option value="pack" className="bg-white">Pack complet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wide">
                      Votre message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos objectifs, votre budget approximatif..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0d0d0d] placeholder-gray-300 text-sm outline-none focus:border-[#7B2FBE]/60 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full btn-primary justify-center py-4 text-base disabled:opacity-70"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 11-6.219-8.56" />
                        </svg>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <span>Envoyer ma demande</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    Réponse garantie sous 24h · Devis gratuit et sans engagement
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
