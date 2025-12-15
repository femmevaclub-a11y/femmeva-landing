// src/components/ThisIsForYouSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const items = [
  "Sientes que 2025 se te fue rápido y no quieres entrar a 2026 arrastrando lo mismo.",
  "Te pasa que empiezas con toda… y en febrero ya abandonaste metas y hábitos.",
  "Hay historias, culpas o relaciones que sigues cargando y ya no quieres más.",
  "Quieres iniciar el año con claridad y foco, no con ansiedad y piloto automático.",
  "No te cuesta soñar: te cuesta sostener. Y estás lista para un proceso guiado.",
  "Sabes que mereces calma y abundancia (real), pero necesitas un camino concreto para empezar.",
];

function ThisIsForYouSection() {
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
      className="mt-20"
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
        <p className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
          Para quién es
        </p>

        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
          Este ritual es para ti si…
        </h2>

        <p className="text-sm text-slate-300 md:text-base">
          Si te reconoces aquí, no necesitas “otro comienzo” — necesitas{" "}
          <span className="font-semibold text-pink-200">
            un cierre real
          </span>{" "}
          para empezar el año con dirección.
        </p>
      </Motion.div>

      <Motion.div className="grid gap-4 md:grid-cols-2" variants={staggerContainer}>
        {items.map((item, index) => (
          <Motion.div
            key={item}
            variants={fadeInUp}
            custom={0.1 + index * 0.07}
            className="flex gap-3 rounded-2xl border border-emerald-300/15 bg-slate-950/70 p-4 text-sm text-slate-100 shadow-[0_0_30px_rgba(16,185,129,0.15)] backdrop-blur"
          >
            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-xs text-emerald-200">
              ✔
            </div>
            <p className="text-xs leading-relaxed text-slate-200">{item}</p>
          </Motion.div>
        ))}
      </Motion.div>

      {/* Cierre + CTA */}
      <Motion.div
        className="mt-8 flex flex-col gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between"
        variants={fadeInUp}
        custom={0.75}
      >
        <p className="text-sm text-slate-200/90 md:text-base">
          Si estás lista para empezar diferente, empieza cerrando bien.
        </p>

        <button
          type="button"
          onClick={handleScrollToCta}
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
        >
          Sí, es para mí
        </button>
      </Motion.div>
    </Motion.section>
  );
}

export default ThisIsForYouSection;
