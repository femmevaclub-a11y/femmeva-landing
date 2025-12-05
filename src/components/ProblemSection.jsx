// src/components/ProblemSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

// Ahora cada item tiene título y subtítulo
const items = [
  {
    title: "Cansancio emocional o mental",
    subtitle: "Sientes que tu energía no te alcanza para nada más.",
  },
  {
    title: "Confusión sobre tus decisiones",
    subtitle: "No sabes si hiciste lo correcto este año ni hacia dónde ir.",
  },
  {
    title: "Ciclos abiertos que no sabes cómo cerrar",
    subtitle: "Relaciones, metas o emociones que quedaron suspendidas.",
  },
  {
    title: "Metas inconclusas que se quedaron a medias",
    subtitle: "Ese proyecto que querías terminar… y nunca lo hiciste.",
  },
  {
    title: "Energía pesada o sensación de estancamiento",
    subtitle: "Como si algo te detuviera pero no sabes qué es.",
  },
  {
    title: "Ganas profundas de empezar el 2026 diferente",
    subtitle: "Sabes que necesitas un cambio real, no superficial.",
  },
];

function ProblemSection() {
  return (
    <Motion.section
      className="mt-20 space-y-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* TÍTULO PRINCIPAL */}
      <Motion.h2
        variants={fadeInUp}
        className="text-3xl font-semibold leading-snug text-slate-50 md:text-4xl"
      >
        “¿Sientes que este año se te escapó de las manos?”
      </Motion.h2>

      {/* SUBTÍTULO ORIGINAL */}
      <Motion.p
        variants={fadeInUp}
        custom={0.1}
        className="text-sm text-slate-200/90 md:text-base"
      >
        Si estás cerrando el 2025 con…
      </Motion.p>

      {/* TIMELINE LUNAR ANIMADO */}
      <Motion.div
        variants={staggerContainer}
        className="relative mx-auto max-w-2xl"
      >
        {/* Línea vertical luminosa */}
        <Motion.div
          className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-pink-300/70 via-violet-400/50 to-transparent"
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div className="space-y-10 pl-10">
          {items.map((item, index) => (
            <Motion.div
              key={item.title}
              variants={fadeInUp}
              custom={index * 0.06}
              className="relative"
            >
              {/* Punto lunar */}
              <span className="absolute -left-7 top-1 flex h-4 w-4 items-center justify-center">
                <Motion.span
                  className="absolute h-4 w-4 rounded-full bg-pink-300/30 blur-sm"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.15,
                  }}
                />
                <Motion.span
                  className="relative h-2 w-2 rounded-full bg-pink-300 shadow-[0_0_12px_2px_rgba(255,182,193,0.6)]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.15,
                  }}
                />
              </span>

              {/* TÍTULO DEL ÍTEM */}
              <p className="text-[14px] font-medium text-slate-100 md:text-[15px]">
                {item.title}
              </p>

              {/* SUBTÍTULO DEL ÍTEM */}
              <p className="mt-1 text-[13px] text-slate-300/80 md:text-[14px] leading-relaxed">
                {item.subtitle}
              </p>
            </Motion.div>
          ))}
        </div>
      </Motion.div>

      {/* SUBTÍTULO FINAL ORIGINAL */}
      <Motion.p
        variants={fadeInUp}
        custom={0.6}
        className="text-sm font-medium text-pink-200 md:text-base"
      >
        Entonces este ritual es para ti.
      </Motion.p>
    </Motion.section>
  );
}

export default ProblemSection;
