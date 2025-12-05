// src/components/ResultsSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const results = [
  {
    label: "Claridad interna",
    title: "Sabrás exactamente qué quieres dejar atrás y qué quieres llamar al 2026",
    description:
      "En lugar de cerrar el año con confusión o culpa, terminas con una visión clara de lo que ya no va más en tu vida, y de lo que sí estás lista para recibir.",
  },
  {
    label: "Paz emocional",
    title: "Soltarás cargas que venías arrastrando hace meses (o años)",
    description:
      "A través de los ejercicios guiados, pones en palabras lo que sentías pero no sabías cómo expresar. Eso libera, ordena y devuelve una calma que se siente en el cuerpo.",
  },
  {
    label: "Metas realmente alineadas",
    title: "Dejas de hacer listas vacías y diseñas un año que se siente tuyo",
    description:
      "No se trata de “tener más metas”, sino de crear objetivos que respeten tu energía, tu ritmo y tus verdaderos deseos. Menos presión, más intención.",
  },
  {
    label: "Relación contigo misma",
    title: "Te vuelves tu propia prioridad sin sentirte egoísta",
    description:
      "El ritual te lleva a revisar dónde te abandonaste este año y cómo quieres tratarte a partir de ahora: con más amor, límites sanos y respeto por tu proceso.",
  },
  {
    label: "Energía y abundancia",
    title: "Abres espacio mental y energético para nuevas oportunidades",
    description:
      "Cuando cierras ciclos, sueltas historias y decides diferente, tu energía cambia. Desde ahí, es mucho más fácil atraer oportunidades, personas y experiencias alineadas.",
  },
  {
    label: "Un inicio de año distinto",
    title: "No empiezas el 2026 desde el cansancio, sino desde tu poder",
    description:
      "Llegas al nuevo año habiendo hecho un ritual consciente, no solo con uvas y deseos al aire, sino con un cierre profundo y un plan aterrizado.",
  },
];

function ResultsSection() {
  return (
    <Motion.section
      className="mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
    >
      {/* ENCABEZADO */}
      <Motion.div
        className="mb-8 max-w-3xl space-y-3"
        variants={fadeInUp}
        custom={0}
      >
        <p className="inline-flex items-center rounded-full bg-pink-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-200">
          Después del ritual
        </p>
        <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
          Lo que empezarás a sentir y vivir después de hacer el ritual
        </h2>
        <p className="text-sm text-slate-300">
          No se trata solo de una noche “bonita”, sino de cómo te paras frente a
          tu vida después de cerrar el año con conciencia. Esto es lo que muchas
          mujeres reportan tras hacer un ritual como este:
        </p>
      </Motion.div>

      {/* GRID DE RESULTADOS */}
      <Motion.div
        className="grid gap-5 md:grid-cols-2"
        variants={staggerContainer}
      >
        {results.map((item, index) => (
          <Motion.article
            key={item.label}
            variants={fadeInUp}
            custom={0.1 + index * 0.07}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-100 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur"
          >
            {/* Glow suave */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-pink-500/15 blur-3xl" />

            {/* Etiqueta */}
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-200/90">
              {item.label}
            </p>

            {/* Título */}
            <h3 className="mb-2 text-[15px] font-semibold text-slate-50">
              {item.title}
            </h3>

            {/* Descripción */}
            <p className="text-xs leading-relaxed text-slate-300">
              {item.description}
            </p>
          </Motion.article>
        ))}
      </Motion.div>

      {/* NOTA FINAL */}
      <Motion.p
        className="mt-8 text-xs text-slate-400"
        variants={fadeInUp}
        custom={0.9}
      >
        *Los resultados pueden sentirse de forma distinta en cada mujer, pero
        todas tienen algo en común: dejan de cerrar el año en automático y
        empiezan a hacerlo desde su poder, su verdad y su propia energía.
      </Motion.p>
    </Motion.section>
  );
}

export default ResultsSection;
