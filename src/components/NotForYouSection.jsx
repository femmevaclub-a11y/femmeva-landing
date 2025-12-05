// src/components/NotForYouSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const items = [
  "Buscas una solución mágica que cambie tu vida sin que tengas que mirarte de verdad.",
  "No estás dispuesta a dedicar al menos 45 minutos de presencia a solas contigo.",
  "Prefieres seguir empezando años “a la carrera”, sin revisar qué estás repitiendo.",
  "Solo quieres acumular más contenido, pero no estás lista para hacer introspección.",
];

function NotForYouSection() {
  return (
    <Motion.section
      className="mt-16"
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
        <p className="inline-flex items-center rounded-full bg-rose-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-200">
          Honestidad ante todo
        </p>
        <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
          Este ritual no es para ti si…
        </h2>
        <p className="text-sm text-slate-300">
          Prefiero ser honesta contigo: este ritual tiene sentido solo si estás
          lista para asumir tu parte, tomar responsabilidad y hacer un cierre
          consciente. No es para todo el mundo, y está bien.
        </p>
      </Motion.div>

      <Motion.div
        className="space-y-3"
        variants={staggerContainer}
      >
        {items.map((item, index) => (
          <Motion.div
            key={item}
            variants={fadeInUp}
            custom={0.1 + index * 0.07}
            className="flex gap-3 rounded-2xl border border-rose-300/20 bg-slate-950/80 p-4 text-sm text-slate-100 shadow-[0_0_30px_rgba(244,63,94,0.18)] backdrop-blur"
          >
            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-xs text-rose-200">
              ✖
            </div>
            <p className="text-xs leading-relaxed text-slate-200">
              {item}
            </p>
          </Motion.div>
        ))}
      </Motion.div>

      <Motion.p
        className="mt-5 text-xs text-slate-400"
        variants={fadeInUp}
        custom={0.6}
      >
        Si al leer esto sientes que igual quieres darte la oportunidad, este
        ritual puede ser tu primer acto de amor propio del 2026.
      </Motion.p>
    </Motion.section>
  );
}

export default NotForYouSection;
