// src/components/SolutionSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

// Beneficios reescritos a resultados más concretos y creíbles
const bullets = [
  "Cerrar 2025 con un proceso claro (sin dejar capítulos abiertos)",
  "Soltar culpa, ansiedad y carga emocional con ejercicios guiados",
  "Ordenar tu mente: claridad para decidir y priorizar sin caos",
  "Definir tus 3 focos reales para 2026 (para no empezar en automático)",
  "Convertir sueños en plan: mapa + acciones (no solo inspiración)",
  "Reprogramar tu relación con el dinero y la abundancia (mentalidad + límites)",
  "Alinear metas con tu vida real: alcanzables, medibles y sostenibles",
];

function SolutionSection() {
  return (
    <Motion.section
      className="mt-16 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Left */}
      <div>
        <Motion.h2
          className="mb-4 text-2xl font-semibold leading-snug text-slate-50 md:text-3xl"
          variants={fadeInUp}
          custom={0}
        >
          Un cierre guiado para soltar lo que pesa y empezar 2026 con dirección.
        </Motion.h2>

        <Motion.p
          className="mb-4 text-sm text-slate-200 md:text-base"
          variants={fadeInUp}
          custom={0.1}
        >
          No necesitas “motivación nueva”. Necesitas{" "}
          <span className="font-semibold text-pink-200">cerrar lo pendiente</span>{" "}
          para que tu mente deje de arrastrarlo.
        </Motion.p>

        <Motion.p
          className="mb-5 text-sm text-slate-200 md:text-base"
          variants={fadeInUp}
          custom={0.2}
        >
          Esta no es una lectura bonita para guardar. Es un{" "}
          <span className="font-semibold text-pink-200">proceso paso a paso</span>{" "}
          para integrar lo vivido, liberar carga emocional y transformar eso en
          un plan real para el nuevo año.
        </Motion.p>

        <Motion.p
          className="mb-3 text-sm font-semibold text-pink-200 md:text-base"
          variants={fadeInUp}
          custom={0.25}
        >
          Con este ritual vas a:
        </Motion.p>

        <Motion.ul
          className="space-y-2 text-sm text-slate-200"
          variants={staggerContainer}
        >
          {bullets.map((b, index) => (
            <Motion.li
              key={b}
              variants={fadeInUp}
              custom={0.3 + index * 0.05}
              className="flex gap-2"
            >
              <span className="mt-[2px] text-pink-200">✓</span>
              <span>{b}</span>
            </Motion.li>
          ))}
        </Motion.ul>
      </div>

      {/* Right: “Antes / Después” para hacer tangible la transformación */}
      <Motion.div
        className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-white/10"
        variants={fadeInUp}
        custom={0.35}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
          Lo que cambia cuando lo haces
        </p>

        <div className="space-y-4 text-sm">
          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <p className="mb-1 text-xs font-semibold text-slate-100">ANTES</p>
            <p className="text-xs text-slate-300">
              Empiezas el año con peso: rumiación, culpa, dudas y “pendientes”
              emocionales que se filtran en tus decisiones.
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <p className="mb-1 text-xs font-semibold text-slate-100">DESPUÉS</p>
            <p className="text-xs text-slate-300">
              Cierras capítulos con calma y claridad. Te sientes más liviana y
              empiezas 2026 con foco: prioridades reales y un plan accionable.
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-300">
          Puedes hacerlo sola o acompañada. Lo importante es darte un cierre
          consciente antes de iniciar el nuevo año.
        </p>
      </Motion.div>
    </Motion.section>
  );
}

export default SolutionSection;
