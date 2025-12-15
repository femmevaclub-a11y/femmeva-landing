// src/components/MiniCTASection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

function MiniCTASection() {
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
      viewport={{ once: true, amount: 0.35 }}
      variants={staggerContainer}
    >
      <Motion.div
        variants={fadeInUp}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500/30 via-fuchsia-500/25 to-purple-500/30 p-[1px]"
      >
        {/* Glows suaves */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-pink-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-purple-500/25 blur-3xl" />

        <div className="relative rounded-3xl bg-slate-950/90 px-6 py-8 md:px-10 md:py-10 ring-1 ring-white/10">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            {/* Copy */}
            <div>
              <p className="mb-2 inline-flex items-center rounded-full bg-pink-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-200">
                Cierre consciente
              </p>

              <h3 className="mb-3 text-xl font-semibold text-slate-50 md:text-2xl">
                Si hoy sientes que 2025 te dejó cosas abiertas, este es tu momento.
              </h3>

              <p className="mb-4 max-w-xl text-sm text-slate-300 md:text-base">
                No necesitas más motivación ni promesas vacías. Necesitas cerrar
                lo pendiente para empezar el nuevo año con{" "}
                <span className="font-semibold text-pink-200">
                  claridad, calma y dirección
                </span>
                .
              </p>

              <ul className="mb-5 space-y-1 text-sm text-slate-200/90">
                <li>✓ Cierre emocional guiado (sin improvisar)</li>
                <li>✓ Plan real para iniciar 2026 con foco</li>
                <li>✓ Acceso inmediato + bonos incluidos</li>
              </ul>
            </div>

            {/* Acción */}
            <div className="flex flex-col items-start gap-3 md:items-end">
              <button
                type="button"
                onClick={handleScrollToCta}
                className="inline-flex items-center justify-center rounded-full bg-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/35 transition hover:bg-pink-400"
              >
                Quiero cerrar mi año ahora
              </button>

              <div className="flex flex-col gap-1 text-xs text-slate-300 md:text-right">
                <p>✔ Pago seguro vía Hotmart</p>
                <p>✔ Descarga inmediata</p>
                <p>✔ Garantía 7 días</p>
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </Motion.section>
  );
}

export default MiniCTASection;
