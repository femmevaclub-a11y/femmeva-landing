// src/components/IncludesSection.jsx
import React from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";
import bono1 from "../assets/bono1.png";
import bono2 from "../assets/bono2.png";
import bono3 from "../assets/bono3.png";
import bono4 from "../assets/bono4.png";

// Ítems de la guía con título + descripción (más premium)
const items = [
  {
    title: "Ritual de limpieza de fin de año",
    description:
      "Un cierre guiado paso a paso para soltar culpas, cargas emocionales y energía pesada que no quieres llevar al 2026.",
  },
  {
    title: "Ejercicios guiados de cierre emocional",
    description:
      "Preguntas profundas y espacios de escritura consciente para mirar tu año con honestidad, sin juzgarte, pero sin maquillarlo.",
  },
  {
    title: "Ritual del fuego",
    description:
      "Instrucciones claras para usar estos elementos como símbolos de soltar, purificar y renacer desde una energía más ligera.",
  },
  {
    title: "Plantillas imprimibles para reflexionar",
    description:
      "Hojas listas para imprimir o completar en digital, donde aterrizas tus aprendizajes, cierres y decisiones clave.",
  },
  {
    title: "Guía de metas “REAL” para 2026",
    description:
      "Un método para crear metas Realistas, Emocionantes, Alineadas y Logrables, alejándote de las listas vacías que se olvidan en febrero.",
  },
  {
    title: "Mapa de sueños 2026 (digital y físico)",
    description:
      "Un espacio visual para diseñar el año que quieres vivir, con enfoque femenino, abundante y completamente tuyo.",
  },
  {
    title: "Activación de abundancia",
    description:
      "Un apartado enfocado en merecimiento y expansión, para que tu nuevo año no solo se sienta ligero, sino también próspero.",
  },
  {
    title: "Mini calendario 2026 con intención",
    description:
      "Una vista mensual para aterrizar acciones concretas, sin perder de vista tus metas ni tu bienestar emocional.",
  },
  {
    title: "Rutina diaria de 6 minutos para enero",
    description:
      "Un ritual corto, sencillo y poderoso para empezar tus días en modo intención, no en modo piloto automático.",
  },
];

// Bonos para el carrusel
const bonuses = [
  {
    tag: "BONO #1",
    title: "Vision Board 2026 listo para imprimir",
    image: bono1,
  },
  {
    tag: "BONO #2",
    title: "Guía de crecimiento personal",
    image: bono2,
  },
  {
    tag: "BONO #3",
    title: "Pack de 60 afirmaciones para activar la abundancia",
    image: bono3,
  },
  {
    tag: "BONO #4",
    title: "Lista de hábitos iniciales",
    image: bono4,
  },
];

function IncludesSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % bonuses.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + bonuses.length) % bonuses.length);
  };

  // 🔁 AUTO-PLAY DEL CARRUSEL CADA 5s
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bonuses.length);
    }, 5000); // 5000 ms = 5 segundos

    return () => clearInterval(interval);
  }, []);

  const currentBonus = bonuses[activeIndex];

  return (
    <Motion.section
      id="includes-section"
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* TÍTULO SECCIÓN */}
      <Motion.h2
        className="mb-3 text-xl font-semibold"
        variants={fadeInUp}
        custom={0}
      >
        Lo que incluye la guía
      </Motion.h2>

      <Motion.p
        className="mb-6 max-w-2xl text-sm text-slate-200"
        variants={fadeInUp}
        custom={0.1}
      >
        No es solo un PDF bonito. Es una guía estructurada para cerrar el año
        con intención y abrir el 2026 desde una energía más clara, honesta
        y expansiva:
      </Motion.p>

      {/* LISTA DE CONTENIDOS – PREMIUM */}
      <Motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={staggerContainer}
      >
        {items.map((item, index) => (
          <Motion.div
            key={item.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200 shadow-[0_0_30px_rgba(15,23,42,0.8)] backdrop-blur"
            variants={fadeInUp}
            custom={0.15 + index * 0.05}
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-pink-200/90">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-purple-500 text-[11px] text-slate-50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[10px]">●</span> MÓDULO CLAVE
              </span>
            </div>

            <h3 className="mb-1 text-[14px] font-semibold text-slate-50">
              {item.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-300">
              {item.description}
            </p>
          </Motion.div>
        ))}
      </Motion.div>

      {/* BLOQUE BONUS + CARRUSEL PREMIUM */}
      <Motion.div className="mt-12" variants={fadeInUp} custom={0.35}>
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-6 items-center rounded-full bg-pink-500/20 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-pink-200">
            Bonus exclusivos
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-pink-400/60 via-fuchsia-400/40 to-transparent" />
        </div>

        <p className="mb-6 max-w-2xl text-sm text-slate-200">
          Además del ritual principal, te llevas un pack de 4 bonos pensados
          para acompañarte durante todo el 2026 y sostener lo que inicias
          con la guía, no solo vivirlo una noche y olvidarlo.
        </p>

        <div className="relative rounded-3xl bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-slate-900/80 p-[1px]">
          {/* Glows suaves */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-400/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-purple-500/25 blur-3xl" />

          <div className="relative rounded-3xl bg-slate-950/90 p-6 lg:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              {/* TEXTO LADO IZQUIERDO */}
              <div className="space-y-3 lg:w-[40%]">
                <h3 className="text-lg font-semibold text-slate-50">
                  Pack de 4 bonos para sostener tu energía todo el año ✨
                </h3>
                <p className="text-sm text-slate-200/90">
                  No son extras decorativos. Son herramientas que puedes
                  volver a usar cada vez que sientas que te estás
                  desconectando de tus metas, de tu energía o de tu versión
                  más alineada.
                </p>
                <p className="text-xs text-slate-400">
                  *Mockups ilustrativos. Recibirás acceso inmediato a todo el
                  contenido al completar tu compra.
                </p>
              </div>

              {/* CARRUSEL LADO DERECHO */}
              <div className="lg:w-[60%]">
                <div className="relative overflow-hidden rounded-3xl bg-slate-900/80 p-4 shadow-2xl ring-1 ring-white/10">
                  <AnimatePresence mode="wait">
                    <Motion.div
                      key={currentBonus.tag}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative"
                    >
                      <span className="absolute left-4 top-4 z-20 rounded-full bg-pink-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-50 shadow-md">
                        {currentBonus.tag}
                      </span>

                      <div className="relative mx-auto max-w-md">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          <img
                            src={currentBonus.image}
                            alt={currentBonus.title}
                            className="h-full w-full rounded-2xl object-cover shadow-xl"
                          />
                        </div>
                      </div>

                      <p className="mt-4 text-center text-sm font-medium text-slate-50">
                        {currentBonus.title}
                      </p>
                    </Motion.div>
                  </AnimatePresence>

                  {/* BOTONES FLECHA */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 px-2 py-2 text-xs text-slate-100 shadow-lg ring-1 ring-white/10 hover:bg-slate-800/90"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 px-2 py-2 text-xs text-slate-100 shadow-lg ring-1 ring-white/10 hover:bg-slate-800/90"
                  >
                    ›
                  </button>
                </div>

                {/* DOTS DE NAVEGACIÓN */}
                <div className="mt-4 flex justify-center gap-2">
                  {bonuses.map((bonus, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <button
                        key={bonus.tag}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          isActive
                            ? "w-6 bg-pink-400"
                            : "w-2.5 bg-slate-600 hover:bg-slate-400"
                        }`}
                        aria-label={`Ver ${bonus.tag}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </Motion.section>
  );
}

export default IncludesSection;
