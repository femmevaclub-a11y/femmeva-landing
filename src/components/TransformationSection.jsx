// src/components/TransformationSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const steps = [
  {
    step: "Paso 1",
    title: "Dices “sí” a darte este espacio",
    description:
      "Decides salir del piloto automático y regalarte un momento de cierre consciente. Compras la guía y recibes el acceso inmediato en tu correo.",
  },
  {
    step: "Paso 2",
    title: "Eliges tu momento y haces el ritual",
    description:
      "Buscas un espacio tranquilo, preparas tu ambiente (si quieres con velas, música, té) y sigues el paso a paso de la guía, a tu ritmo, sintiendo cada parte.",
  },
  {
    step: "Paso 3",
    title: "Cierras el año y reescribes tu historia",
    description:
      "Terminas el ritual con más claridad, calma y dirección. No solo hiciste “un ejercicio bonito”, sino que tomaste decisiones internas sobre quién quieres ser en el 2026.",
  },
];

function TransformationSection() {
  return (
    <Motion.section
      className="mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
    >
      {/* HEADER */}
      <Motion.div
        className="mb-8 max-w-3xl space-y-3 text-slate-50"
        variants={fadeInUp}
        custom={0}
      >
        <p className="inline-flex items-center rounded-full bg-purple-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-200">
          Tu siguiente versión
        </p>
        <h2 className="text-xl font-semibold md:text-2xl">
          Tu transformación comienza en un solo “sí” que te das a ti misma
        </h2>
        <p className="text-sm text-slate-300">
          No necesitas tener todo resuelto para empezar. Solo necesitas decidir
          que este fin de año no lo vas a vivir en automático. El resto, lo
          hacemos juntas dentro del ritual.
        </p>
      </Motion.div>

      {/* TIMELINE */}
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
            {/* Nodo circular */}
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
          </Motion.div>
        ))}
      </Motion.div>

      {/* TEXTO FINAL ANTES DEL CTA */}
      <Motion.div
        className="mt-8 max-w-2xl space-y-2 text-sm text-slate-200"
        variants={fadeInUp}
        custom={0.9}
      >
        <p>
          En unos meses puedes mirar atrás y decir “fue un diciembre más”, o
          recordar este ritual como el momento en el que decidiste tratarte con
          más amor, más orden y más intención.
        </p>
        <p className="text-pink-200">
          La decisión se toma en segundos. Lo que cambia después, se siente todo
          el año.
        </p>
      </Motion.div>
    </Motion.section>
  );
}

export default TransformationSection;
