// src/components/PreviewSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

// 👉 Importa aquí tus imágenes reales desde /assets
import miniatura3 from "../assets/miniatura3.png";
import miniatura1 from "../assets/miniatura1.png";
import miniatura2 from "../assets/miniatura2.png";

function PreviewSection() {
  const previews = [miniatura3, miniatura1, miniatura2];

  return (
    <Motion.section
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <Motion.h2
        className="mb-4 text-xl font-semibold"
        variants={fadeInUp}
        custom={0}
      >
        Un pequeño vistazo dentro
      </Motion.h2>

      <Motion.p
        className="mb-4 text-sm text-slate-200"
        variants={fadeInUp}
        custom={0.1}
      >
        Dale a tus clientas una mirada real a las páginas del ritual: ejercicios,
        reflexiones, plantillas y el mapa de sueños.
      </Motion.p>

      <Motion.div
        className="grid gap-4 md:grid-cols-3"
        variants={staggerContainer}
      >
        {previews.map((img, i) => (
          <Motion.div
            key={i}
            className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900"
            variants={fadeInUp}
            custom={0.15 + i * 0.05}
          >
            <img
              src={img}
              alt={`Vista previa ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </Motion.div>
        ))}
      </Motion.div>

      <Motion.p
        className="mt-3 text-[11px] text-slate-400"
        variants={fadeInUp}
        custom={0.35}
      >
        *Estas imágenes se adaptan automáticamente para máxima nitidez.
      </Motion.p>
    </Motion.section>
  );
}

export default PreviewSection;
