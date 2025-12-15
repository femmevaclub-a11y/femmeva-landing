// src/components/NotForYouSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const items = [
  "Buscas una solución mágica sin hacer un cierre consciente (esto no es eso).",
  "No quieres dedicar 45–60 minutos en calma para ti (sin interrupciones).",
  "No estás lista para escribir con honestidad y mirar lo que vienes repitiendo.",
  "Solo quieres consumir contenido, pero no aplicar un proceso real.",
];

function NotForYouSection() {
  const handleScrollToCta = () => {
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
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
    >
      <Motion.div
        className="mb-6 max-w-3xl space-y-3"
        variants={fadeInUp}
        custom={0}
      >
        <p className="inline-flex items-center rounded-full bg-rose-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-200">
          Honestidad ante todo
        </p>

        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
          Este ritual no es para ti si…
        </h2>

        <p className="text-sm text-slate-300 md:text-base">
          Prefiero ser clara: esto funciona cuando lo haces de verdad. Es un
          proceso guiado de cierre emocional + claridad para 2026. No es para
          todo el mundo, y está perfecto.
        </p>
      </Motion.div>

      <Motion.div className="space-y-3" variants={staggerContainer}>
        {items.map((item, index) => (
          <Motion.div
            key={item}
            variants={fadeInUp}
            custom={0.1 + index * 0.07}
            className="flex gap-3 rounded-2xl border border-rose-300/20 bg-slate-950/80 p-4 text-sm text-slate-100 shadow-[0_0_30px_rgba(244,63,94,0.18)] backdrop-blur"
          >
            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-xs text-rose-200">
              ✖
            </div>
            <p className="text-xs leading-relaxed text-slate-200">{item}</p>
          </Motion.div>
        ))}
      </Motion.div>

      {/* Giro final que convierte + CTA suave */}
      <Motion.div
        className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
        variants={fadeInUp}
        custom={0.6}
      >
        <p className="text-sm text-slate-200/90 md:text-base">
          Y si al leer esto sentiste un “me tocó”… entonces probablemente{" "}
          <span className="font-semibold text-pink-200">sí es para ti</span>.
          Porque ese es el punto: dejar de empezar el año en automático.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={handleScrollToCta}
            className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/35 transition hover:bg-pink-400"
          >
            Quiero hacer el cierre bien
          </button>
          <p className="text-xs text-slate-300">
            ✔ Acceso inmediato · ✔ Pago seguro · ✔ Garantía 7 días
          </p>
        </div>
      </Motion.div>
    </Motion.section>
  );
}

export default NotForYouSection;
