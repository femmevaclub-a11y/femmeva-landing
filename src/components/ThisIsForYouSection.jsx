// src/components/ThisIsForYouSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const items = [
  "Sientes que este año se te pasó “entre las manos” y no quieres repetir la misma sensación en el 2026.",
  "Has intentado hacer rituales o listas de metas antes, pero terminas abandonándolas a las pocas semanas.",
  "Estás cansada de cargar con situaciones, personas o hábitos que sabes que ya no van contigo.",
  "Quieres empezar el nuevo año desde tu poder femenino, no desde el agotamiento ni el piloto automático.",
  "Te cuesta ser constante, pero estás lista para hacer al menos UN ritual profundo y honesto contigo misma.",
  "Sientes que mereces más abundancia, calma y claridad, pero no sabes por dónde empezar.",
];

function ThisIsForYouSection() {
  return (
    <Motion.section
      className="mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
    >
      <Motion.div
        className="mb-6 space-y-3 max-w-3xl"
        variants={fadeInUp}
        custom={0}
      >
        <p className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
          Para quién es este ritual
        </p>
        <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
          Este ritual es para ti si…
        </h2>
        <p className="text-sm text-slate-300">
          No es un PDF más que acumulas en tu carpeta de descargas. Es un
          espacio para mujeres que quieren mirar su vida con honestidad y
          empezar el 2026 con intención.
        </p>
      </Motion.div>

      <Motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={staggerContainer}
      >
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
            <p className="text-xs leading-relaxed text-slate-200">
              {item}
            </p>
          </Motion.div>
        ))}
      </Motion.div>
    </Motion.section>
  );
}

export default ThisIsForYouSection;
