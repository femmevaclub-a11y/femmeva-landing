// src/components/TestimonialsSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const testimonials = [
  {
    name: "María Fernanda",
    location: "Bogotá · 32 años",
    tag: "Cierre emocional",
    result: "Paz + ligereza",
    text: "Llegué agotada emocionalmente y con cero claridad. Con el ritual sentí que cerré de verdad el año, sin culpas y con mucha paz. Lloré, solté y terminé con una calma que no sentía hace años.",
  },
  {
    name: "Valentina",
    location: "Medellín · 24 años",
    tag: "Metas 2026",
    result: "Claridad para decidir",
    text: "Siempre hacía listas de metas que nunca cumplía. Esta vez entendí por qué me saboteaba y pude escribir mis metas desde otro lugar. Mi mapa de sueños quedó hermoso y, por primera vez, alineado conmigo.",
  },
  {
    name: "Carolina",
    location: "Ciudad de México · 40 años",
    tag: "Soltar ciclos",
    result: "Plan claro para iniciar",
    text: "Venía arrastrando relaciones, culpas y pendientes. El ritual me dio un espacio seguro para soltar. Terminé con una sensación de ligereza y con un plan claro para empezar el 2026 desde mi poder.",
  },
  {
    name: "Laura",
    location: "Buenos Aires · 35 años",
    tag: "Hábitos reales",
    result: "Rutinas sostenibles",
    text: "Siempre sentí que empezar nuevos hábitos era una lucha conmigo misma. Esta vez, con la guía, pude entender por qué nunca me sostenían y cómo crear rutinas que realmente encajaran con mi vida. Por primera vez, no me forcé… me acompañé. Mis días se volvieron más ligeros, más ordenados y, sobre todo, más míos.",
  },
];

function TestimonialsSection() {
  const handleScrollToBuy = () => {
    const el =
      document.getElementById("cta-section") ||
      document.getElementById("buy-section") ||
      document.getElementById("pricing-section") ||
      document.getElementById("checkout-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Motion.section
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <Motion.h2
        className="mb-2 text-2xl font-semibold text-slate-50 md:text-3xl"
        variants={fadeInUp}
        custom={0}
      >
        Lo que están viviendo otras mujeres
      </Motion.h2>

      <Motion.p
        className="mb-6 max-w-2xl text-sm text-slate-200 md:text-base"
        variants={fadeInUp}
        custom={0.1}
      >
        Historias reales de mujeres que dejaron de “empezar el año en automático”
        y eligieron cerrar con intención.
      </Motion.p>

      {/* Cards */}
      <Motion.div
        className="grid items-stretch gap-6 md:grid-cols-2"
        variants={staggerContainer}
      >
        {testimonials.map((t, index) => (
          <Motion.article
            key={t.name + index}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-100 shadow-[0_0_40px_rgba(15,23,42,0.7)]"
            variants={fadeInUp}
            custom={0.15 + index * 0.05}
          >
            {/* Header */}
            <div className="mb-5 flex items-start gap-3">
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

                {/* Tag + Resultado (más “prueba” rápida) */}
                <div className="mt-1 flex flex-wrap gap-2">
                  <span className="rounded-full bg-pink-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-pink-200 ring-1 ring-white/10">
                    {t.tag}
                  </span>
                  <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-semibold text-slate-200 ring-1 ring-white/10">
                    Resultado: <span className="text-pink-200">{t.result}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1">
              <span className="mb-2 block text-3xl leading-none text-pink-300/30">
                “
              </span>
              <p className="text-[13px] leading-relaxed text-slate-100/95">
                {t.text}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 border-t border-white/5 pt-3 text-center">
              <p className="text-xs text-slate-200">★★★★★</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-slate-400/80 leading-snug">
                Experiencia transformadora
              </p>
              <p className="mt-2 text-[9px] text-slate-500">
                Diciembre 2025 · Ritual Femmeva
              </p>
            </div>
          </Motion.article>
        ))}
      </Motion.div>

      {/* Pattern + CTA (cierra la venta) */}
      <Motion.div
        variants={fadeInUp}
        custom={0.5}
        className="mt-10 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
      >
        <p className="text-sm font-semibold text-slate-50 md:text-base">
          Lo que se repite en casi todas:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
          <li>✓ Llegan con ruido mental y carga emocional</li>
          <li>✓ Hacen el ritual con guía (sin improvisar)</li>
          <li>
            ✓ Terminan con{" "}
            <span className="font-semibold text-pink-200">
              paz, claridad y un plan real
            </span>{" "}
            para iniciar el año diferente
          </li>
        </ul>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={handleScrollToBuy}
            className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/35 transition hover:bg-pink-400"
          >
            Quiero cerrar mi año ahora
          </button>
          <p className="text-xs text-slate-300">
            ✔ Acceso inmediato · ✔ Pago seguro · ✔ Garantía 7 días
          </p>
        </div>
      </Motion.div>
    </Motion.section>
  );
}

export default TestimonialsSection;
