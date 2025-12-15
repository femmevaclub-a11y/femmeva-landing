// src/components/HeroSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "./animations";

import mockupRitual from "../assets/ritualprincipal.png";

function HeroSection({ checkoutUrl, launchPrice }) {
  // 👉 Handler para hacer scroll a la sección de "Lo que incluye"
  const handleScrollToIncludes = () => {
    const el = document.getElementById("includes-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Motion.section
      className="grid gap-10 md:grid-cols-2 md:items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer}
    >
      {/* Left: Copy */}
      <div>
        <Motion.div
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-pink-200 ring-1 ring-white/10"
          variants={fadeInUp}
          custom={0}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Edición limitada · Solo por 20 minutos
        </Motion.div>

        <Motion.h1
          className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl"
          variants={fadeInUp}
          custom={0.1}
        >
          Si no cierras este año, lo repites en 2026.
        </Motion.h1>

        <Motion.p
          className="mb-5 text-base text-slate-200 md:text-lg"
          variants={fadeInUp}
          custom={0.2}
        >
          Un ritual guiado paso a paso para soltar cargas emocionales, cerrar
          ciclos y empezar el nuevo año con claridad, paz y dirección — sin
          arrancar en automático.
        </Motion.p>

        <Motion.ul
          className="mb-6 space-y-2 text-sm text-slate-200"
          variants={fadeInUp}
          custom={0.25}
        >
          <li>✔ Cierra lo pendiente: culpa, ansiedad, desgaste emocional</li>
          <li>✔ Ejercicios + preguntas para liberar y ordenar tu mente</li>
          <li>
            ✔ Plan 2026: metas con intención y enfoque (realistas y accionables)
          </li>
        </Motion.ul>

        <Motion.div
          className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center"
          variants={fadeInUp}
          custom={0.3}
        >
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/40 transition hover:bg-pink-400"
          >
            Quiero cerrar mi año — {launchPrice}
          </a>

          <button
            type="button"
            onClick={handleScrollToIncludes}
            className="text-xs text-slate-300 underline underline-offset-4"
          >
            Ver contenido exacto ↓
          </button>
        </Motion.div>

        <Motion.p
          className="mb-4 text-sm text-pink-200"
          variants={fadeInUp}
          custom={0.4}
        >
          ⏳ Precio de lanzamiento por tiempo limitado (20 minutos).
        </Motion.p>

        <Motion.div
          className="flex flex-col gap-1 text-xs text-slate-300"
          variants={fadeInUp}
          custom={0.5}
        >
          <p>✔ Descarga inmediata</p>
          <p>✔ Pago seguro vía Hotmart</p>
          <p>✔ Acceso de por vida (re-descarga)</p>
        </Motion.div>
      </div>

      {/* Right: Mockup / Preview */}
      <Motion.div
        className="flex justify-center md:justify-end"
        variants={fadeIn}
        custom={0.3}
      >
        <div className="group relative w-full max-w-sm">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-pink-500/40 via-fuchsia-500/30 to-purple-500/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl bg-slate-900/90 p-5 ring-1 ring-white/10">
            <div className="mb-4 flex justify-center">
              <div className="relative rounded-2xl bg-slate-950/70 p-2">
                <img
                  src={mockupRitual}
                  alt="Mockup del libro Ritual de Fin de Año 2025"
                  className="max-h-64 w-auto rounded-xl object-contain shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
              </div>
            </div>

            <h3 className="mb-1 text-sm font-semibold">
              Ritual de Fin de Año 2025
            </h3>

            <p className="mb-3 text-xs text-slate-300">
              Preview de la guía: ejercicios, rituales, plantillas y preguntas
              poderosas para cerrar el año con paz y claridad.
            </p>

            <ul className="mb-4 space-y-1 text-xs text-slate-300">
              <li>• Ritual de limpieza y cierre de ciclo</li>
              <li>• Guía de metas 2026 (realistas y accionables)</li>
              <li>• Plantilla de Vision Board</li>
            </ul>

            <p className="text-[11px] text-pink-200">
              *Imagen de referencia del diseño interno del ebook. El diseño
              final mantiene la misma esencia premium.
            </p>
          </div>
        </div>
      </Motion.div>
    </Motion.section>
  );
}

export default HeroSection;
