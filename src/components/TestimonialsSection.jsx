// src/components/TestimonialsSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const testimonials = [
  {
    name: "María Fernanda",
    location: "Bogotá · 32 años",
    role: "Ritual de fin de año guiado",
    text: "Llegué agotada emocionalmente y con cero claridad. Con el ritual sentí que cerré de verdad el año, sin culpas y con mucha paz. Lloré, solté y terminé con una calma que no sentía hace años.",
  },
  {
    name: "Valentina",
    location: "Medellín · 24 años",
    role: "Vision board",
    text: "Siempre hacía listas de metas que nunca cumplía. Esta vez entendí por qué me saboteaba y pude escribir mis metas desde otro lugar. Mi mapa de sueños quedó hermoso y, por primera vez, alineado conmigo.",
  },
  {
    name: "Carolina",
    location: "Ciudad de México · 40 años",
    role: "Guía de crecimiento personal",
    text: "Venía arrastrando relaciones, culpas y pendientes. El ritual me dio un espacio seguro para soltar. Terminé con una sensación de ligereza y con un plan claro para empezar el 2026 desde mi poder.",
  },
];

function TestimonialsSection() {
  return (
    <Motion.section
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <Motion.h2
        className="mb-2 text-xl font-semibold"
        variants={fadeInUp}
        custom={0}
      >
        Lo que están viviendo otras mujeres
      </Motion.h2>

      <Motion.p
        className="mb-6 text-sm text-slate-200"
        variants={fadeInUp}
        custom={0.1}
      >
        Historias reales de mujeres que decidieron cerrar su año con intención,
        en vez de dejarlo en piloto automático.
      </Motion.p>

      <Motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
      >
        {testimonials.map((t, index) => (
          <Motion.article
            key={t.name + index}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-100 shadow-[0_0_40px_rgba(15,23,42,0.7)]"
            variants={fadeInUp}
            custom={0.15 + index * 0.05}
          >
            {/* Header */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-purple-500 text-xs font-semibold uppercase tracking-wide text-white">
                {t.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-slate-400">{t.location}</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-pink-300/90">
                  {t.role}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative mb-4 flex-1">
              <span className="pointer-events-none select-none text-4xl leading-none text-pink-300/30">
                “
              </span>
              <p className="-mt-3 pl-4 text-[13px] leading-relaxed text-slate-100/95">
                {t.text}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1">
                <span className="text-xs">★★★★★</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400/80 mr-3">
                  EXPERIENCIA TRANSFORMADORA
                </span>
              </div>
              <span className="text-[10px] text-slate-500">
                Diciembre 2025 · Ritual Femmeva
              </span>
            </div>
          </Motion.article>
        ))}
      </Motion.div>
    </Motion.section>
  );
}

export default TestimonialsSection;
