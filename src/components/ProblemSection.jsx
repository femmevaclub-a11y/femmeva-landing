// src/components/ProblemSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

// Señales (más filosas y específicas)
const items = [
  {
    title: "Te sientes agotada… aunque “no hiciste tanto”",
    subtitle:
      "No es pereza: es carga emocional acumulada que no has descargado.",
  },
  {
    title: "Tu mente no se apaga (rumias, dudas, escenarios)",
    subtitle:
      "Piensas y piensas… y aún así no encuentras claridad para decidir.",
  },
  {
    title: "Hay cosas abiertas que evitas mirar",
    subtitle:
      "Relaciones, pérdidas, culpas o capítulos que sigues cargando en silencio.",
  },
  {
    title: "Te prometiste cambios y volviste a lo mismo",
    subtitle:
      "Metas a medias, hábitos rotos, impulso al inicio… y caída después.",
  },
  {
    title: "Sientes estancamiento: como si algo te frenara",
    subtitle:
      "Avanzas por fuera, pero por dentro algo sigue “pendiente” y pesa.",
  },
  {
    title: "Sabes que 2026 no puede empezar igual",
    subtitle:
      "No quieres más motivación: quieres un cierre real para iniciar liviana.",
  },
];

function ProblemSection() {
  return (
    <Motion.section
      className="mt-20 space-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* TÍTULO PRINCIPAL (más tensión) */}
      <Motion.h2
        variants={fadeInUp}
        className="text-3xl font-semibold leading-snug text-slate-50 md:text-4xl"
      >
        No estás “sin ganas”. Estás cargando cosas abiertas.
      </Motion.h2>

      {/* SUBTÍTULO (mejor encuadre) */}
      <Motion.p
        variants={fadeInUp}
        custom={0.1}
        className="text-sm text-slate-200/90 md:text-base"
      >
        Si cierras el año con alguna de estas señales, tu mente no va a
        “resetear” sola el 1 de enero:
      </Motion.p>

      {/* TIMELINE */}
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

              {/* TÍTULO */}
              <p className="text-[14px] font-medium text-slate-100 md:text-[15px]">
                {item.title}
              </p>

              {/* SUBTÍTULO */}
              <p className="mt-1 text-[13px] leading-relaxed text-slate-300/80 md:text-[14px]">
                {item.subtitle}
              </p>
            </Motion.div>
          ))}
        </div>
      </Motion.div>

      {/* BLOQUE DE CONSECUENCIA (alto impacto) */}
      <Motion.div
        variants={fadeInUp}
        custom={0.55}
        className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10"
      >
        <p className="text-sm font-semibold text-slate-50 md:text-base">
          La verdad incómoda:
        </p>
        <p className="mt-2 text-sm text-slate-200/90 md:text-base">
          Si no cierras este año de forma consciente, no “se va”…
          <span className="font-semibold text-pink-200">
            {" "}
            se queda contigo{" "}
          </span>
          y se repite en tus decisiones, tus emociones y tus relaciones en 2026.
        </p>
      </Motion.div>

      {/* CIERRE + PUENTE */}
      <Motion.p
        variants={fadeInUp}
        custom={0.65}
        className="text-sm font-medium text-pink-200 md:text-base"
      >
        Este ritual es el cierre guiado que te faltaba para empezar el nuevo año
        liviana, clara y enfocada.
      </Motion.p>
    </Motion.section>
  );
}

export default ProblemSection;
