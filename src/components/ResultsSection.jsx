// src/components/ResultsSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const results = [
  {
    label: "Claridad interna",
    title: "Decides qué se queda y qué se termina (sin dudas eternas)",
    description:
      "En vez de cerrar el año con confusión, terminas con una lista clara: qué sueltas, qué cierras y qué sí estás lista para construir en 2026.",
    micro: "Se nota en: menos rumiación, más decisiones rápidas",
  },
  {
    label: "Paz emocional",
    title: "Suelta real: el cuerpo baja la tensión",
    description:
      "Al poner en palabras lo que venías cargando, tu mente se ordena y el cuerpo lo siente. Menos peso en el pecho. Más calma para dormir y estar presente.",
    micro: "Se nota en: descanso, menos ansiedad, más calma",
  },
  {
    label: "Metas alineadas",
    title: "Dejas listas vacías y construyes un plan que sí sostienes",
    description:
      "No es “hacer más”. Es elegir mejor: objetivos que respetan tu energía, tu ritmo y tu realidad. Menos presión, más dirección.",
    micro: "Se nota en: enfoque, prioridades claras, constancia",
  },
  {
    label: "Relación contigo",
    title: "Te vuelves prioridad sin culpa",
    description:
      "Ves dónde te abandonaste este año y cómo quieres cuidarte en 2026: con límites sanos, decisiones más firmes y respeto por tu proceso.",
    micro: "Se nota en: límites, autoestima y ‘no’ sin culpa",
  },
  {
    label: "Abundancia (realista)",
    title: "Abres espacio mental para oportunidades (desde decisiones, no magia)",
    description:
      "Cuando cierras ciclos y ordenas tu mente, eliges distinto. Y al elegir distinto, cambian tus resultados: más claridad para negociar, priorizar y sostener hábitos que te elevan.",
    micro: "Se nota en: mejores elecciones, más seguridad, más acción",
  },
  {
    label: "Inicio distinto",
    title: "Empiezas 2026 con cierre hecho y plan aterrizado",
    description:
      "No arrancas el año desde cansancio o deseos al aire. Llegas con un cierre consciente y una ruta clara para las primeras semanas: qué haces, qué evitas, qué sostienes.",
    micro: "Se nota en: enero con foco (no caos)",
  },
];

function ResultsSection() {
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
      {/* Header */}
      <Motion.div
        className="mb-8 max-w-3xl space-y-3"
        variants={fadeInUp}
        custom={0}
      >
        <p className="inline-flex items-center rounded-full bg-pink-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-200">
          Después del ritual
        </p>
        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
          Lo que cambia cuando cierras el año de verdad
        </h2>
        <p className="text-sm text-slate-300 md:text-base">
          No es una noche “bonita”. Es el momento en que tu mente deja de cargar
          pendientes y empieza a moverse con claridad. Esto es lo que muchas
          mujeres sienten después:
        </p>
      </Motion.div>

      {/* Grid */}
      <Motion.div className="grid gap-5 md:grid-cols-2" variants={staggerContainer}>
        {results.map((item, index) => (
          <Motion.article
            key={item.label}
            variants={fadeInUp}
            custom={0.1 + index * 0.07}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-100 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-pink-500/15 blur-3xl" />

            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-200/90">
              {item.label}
            </p>

            <h3 className="mb-2 text-[15px] font-semibold text-slate-50">
              {item.title}
            </h3>

            <p className="text-xs leading-relaxed text-slate-300">
              {item.description}
            </p>

            {/* Micro evidencia (muy potente para conversión) */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] text-slate-200 ring-1 ring-white/10">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-300" />
              {item.micro}
            </div>
          </Motion.article>
        ))}
      </Motion.div>

      {/* Cierre + CTA (convierte) */}
      <Motion.div
        className="mt-10 flex flex-col items-start gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
        variants={fadeInUp}
        custom={0.85}
      >
        <p className="text-sm text-slate-200/90 md:text-base">
          Si hoy sientes que 2025 te dejó cosas abiertas, esto es tu cierre.
        </p>

        <button
          type="button"
          onClick={handleScrollToCta}
          className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/35 transition hover:bg-pink-400"
        >
          Quiero cerrar mi año ahora
        </button>

        <p className="text-xs text-slate-300">
          ✔ Acceso inmediato · ✔ Pago seguro · ✔ Garantía 7 días
        </p>
      </Motion.div>

      {/* Nota final */}
      <Motion.p
        className="mt-6 text-xs text-slate-400"
        variants={fadeInUp}
        custom={0.95}
      >
        *Los resultados pueden sentirse distinto en cada mujer. Lo común es que
        dejan de cerrar el año en automático y empiezan a hacerlo con claridad,
        verdad y dirección.
      </Motion.p>
    </Motion.section>
  );
}

export default ResultsSection;
