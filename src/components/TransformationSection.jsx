// src/components/TransformationSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const steps = [
  {
    step: "Paso 1",
    title: "Dices “sí” y recibes acceso inmediato",
    description:
      "Haces la compra y recibes el acceso al instante (página de confirmación + correo). Lo guardas en tu celular o computador y lo tienes listo para cuando decidas hacerlo.",
    micro: "✔ Pago seguro · ✔ Descarga inmediata · ✔ Garantía 7 días",
  },
  {
    step: "Paso 2",
    title: "Eliges tu momento y sigues el ritual guiado",
    description:
      "Buscas un espacio tranquilo, preparas tu ambiente si quieres (vela, música, té) y sigues el paso a paso. No improvisas: la guía te lleva con claridad, a tu ritmo.",
    micro: "45–60 min · sola o acompañada",
  },
  {
    step: "Paso 3",
    title: "Cierras 2025 y sales con claridad + plan",
    description:
      "Terminas más liviana, con decisiones claras: qué sueltas, qué priorizas y cómo empiezas enero. No es inspiración: es cierre emocional + dirección práctica.",
    micro: "Se siente en: calma, foco y límites",
  },
];

function TransformationSection() {
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
        className="mb-8 max-w-3xl space-y-3 text-slate-50"
        variants={fadeInUp}
        custom={0}
      >
        <p className="inline-flex items-center rounded-full bg-purple-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-200">
          Tu siguiente versión
        </p>

        <h2 className="text-2xl font-semibold md:text-3xl">
          Tu transformación empieza con una decisión simple
        </h2>

        <p className="text-sm text-slate-300 md:text-base">
          No necesitas tener todo resuelto. Solo decidir que este cierre de año
          no lo vas a vivir en automático. El resto te lo guía el ritual.
        </p>
      </Motion.div>

      {/* Timeline */}
      <Motion.div
        className="relative grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
      >
        {/* Línea suave en desktop */}
        <div className="pointer-events-none absolute inset-x-8 top-10 hidden h-px bg-gradient-to-r from-pink-400/40 via-fuchsia-400/40 to-amber-300/40 md:block" />

        {steps.map((item, index) => (
          <Motion.div
            key={item.step}
            variants={fadeInUp}
            custom={0.1 + index * 0.08}
            className="relative flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-100 shadow-[0_0_35px_rgba(15,23,42,0.9)] backdrop-blur"
          >
            {/* Nodo */}
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-amber-300 text-[11px] font-semibold text-slate-50 shadow-[0_0_15px_rgba(236,72,153,0.7)]">
                {index + 1}
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-200/90">
                {item.step}
              </p>
            </div>

            <h3 className="text-[15px] font-semibold text-slate-50">
              {item.title}
            </h3>

            <p className="text-xs leading-relaxed text-slate-300">
              {item.description}
            </p>

            {/* Micro evidencia */}
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] text-slate-200 ring-1 ring-white/10">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-300" />
              {item.micro}
            </div>
          </Motion.div>
        ))}
      </Motion.div>

      {/* Cierre + CTA */}
      <Motion.div
        className="mt-10 flex flex-col gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
        variants={fadeInUp}
        custom={0.9}
      >
        <p className="text-sm text-slate-200/90 md:text-base">
          En unos meses puedes mirar atrás y decir “fue un diciembre más”… o
          recordar este ritual como el momento en que dejaste de postergarte.
        </p>

        <p className="text-sm font-semibold text-pink-200 md:text-base">
          La decisión se toma en segundos. Lo que se siente después, dura todo el año.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={handleScrollToCta}
            className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/35 transition hover:bg-pink-400"
          >
            Sí, quiero hacerlo
          </button>
          <p className="text-xs text-slate-300">
            ✔ Acceso inmediato · ✔ Pago seguro · ✔ Garantía 7 días
          </p>
        </div>
      </Motion.div>
    </Motion.section>
  );
}

export default TransformationSection;
