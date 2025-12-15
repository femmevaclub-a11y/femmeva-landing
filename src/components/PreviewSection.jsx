// src/components/PreviewSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

// Imágenes reales desde /assets
import miniatura3 from "../assets/miniatura3.png";
import miniatura1 from "../assets/miniatura1.png";
import miniatura2 from "../assets/miniatura2.png";

function PreviewSection() {
  const previews = [miniatura3, miniatura1, miniatura2];

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
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <Motion.h2
        className="mb-3 text-2xl font-semibold text-slate-50 md:text-3xl"
        variants={fadeInUp}
        custom={0}
      >
        Mira cómo se ve por dentro (calidad real)
      </Motion.h2>

      <Motion.p
        className="mb-4 max-w-2xl text-sm text-slate-200 md:text-base"
        variants={fadeInUp}
        custom={0.1}
      >
        Esto no es un PDF genérico. Son páginas diseñadas para{" "}
        <span className="font-semibold text-pink-200">
          guiarte paso a paso
        </span>{" "}
        con ejercicios, plantillas y claridad para cerrar 2025 y empezar 2026 con
        dirección.
      </Motion.p>

      {/* Bullets de “qué verás” (reduce duda) */}
      <Motion.ul
        className="mb-6 space-y-2 text-sm text-slate-200/90"
        variants={fadeInUp}
        custom={0.15}
      >
        <li>✓ Ejercicios guiados de cierre emocional (sin improvisar)</li>
        <li>✓ Plantillas para aterrizar decisiones y aprendizajes</li>
        <li>✓ Sección de visión + plan 2026 (acciones reales)</li>
      </Motion.ul>

      <Motion.div className="grid gap-4 md:grid-cols-3" variants={staggerContainer}>
        {previews.map((img, i) => (
          <Motion.div
            key={i}
            className="group overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900"
            variants={fadeInUp}
            custom={0.2 + i * 0.05}
          >
            <img
              src={img}
              alt={`Vista previa ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </Motion.div>
        ))}
      </Motion.div>

      {/* Nota útil + micro-CTA */}
      <Motion.div
        className="mt-6 flex flex-col items-start gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between"
        variants={fadeInUp}
        custom={0.4}
      >
        <p className="text-xs text-slate-300">
          *Las imágenes son reales del estilo de la guía. Al comprar recibes el
          acceso inmediato con el diseño premium completo.
        </p>

        <button
          type="button"
          onClick={handleScrollToCta}
          className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-400"
        >
          Quiero el ritual
        </button>
      </Motion.div>
    </Motion.section>
  );
}

export default PreviewSection;
