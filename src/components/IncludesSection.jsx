// src/components/IncludesSection.jsx
import React from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";
import bono1 from "../assets/bono1.png";
import bono2 from "../assets/bono2.png";
import bono3 from "../assets/bono3.png";
import bono4 from "../assets/bono4.png";

// Ítems del ritual (más orientados a resultado)
const items = [
  {
    title: "Ritual de limpieza de fin de año",
    description:
      "Cierre guiado paso a paso para soltar culpa, carga emocional y lo que no quieres llevar a 2026.",
    outcome: "Te sientes más liviana y en paz",
  },
  {
    title: "Ejercicios guiados de cierre emocional",
    description:
      "Preguntas profundas + escritura consciente para mirar tu año con honestidad: sin juzgarte, sin maquillarlo.",
    outcome: "Claridad real (sin rumiación)",
  },
  {
    title: "Ritual del fuego",
    description:
      "Instrucciones claras para usar el simbolismo como acto de soltar, purificar y cerrar capítulos.",
    outcome: "Cierre simbólico + emocional",
  },
  {
    title: "Plantillas imprimibles para reflexionar",
    description:
      "Hojas listas para imprimir o completar en digital para aterrizar aprendizajes, decisiones y cierres clave.",
    outcome: "Todo queda ordenado y escrito",
  },
  {
    title: "Guía de metas REAL para 2026",
    description:
      "Método para crear metas Realistas, Emocionantes, Alineadas y Logrables (no listas vacías que mueren en febrero).",
    outcome: "Metas que sí sostienes",
  },
  {
    title: "Mapa de sueños 2026 (digital y físico)",
    description:
      "Diseña visualmente tu año con intención y enfoque: no solo inspiración, sino dirección.",
    outcome: "Visión + enfoque",
  },
  {
    title: "Expansión de merecimiento y abundancia",
    description:
      "Un apartado para trabajar merecimiento, límites y relación con el dinero (para elegir mejor y sostener tus metas).",
    outcome: "Más seguridad para avanzar",
  },
  {
    title: "Mini calendario 2026 con intención",
    description:
      "Vista mensual para bajar tu visión a acciones concretas sin perder tu bienestar emocional.",
    outcome: "Plan claro (mes a mes)",
  },
  {
    title: "Rutina diaria de 6 minutos para enero",
    description:
      "Ritual corto para iniciar tus días con intención y foco, sin volver al piloto automático.",
    outcome: "Constancia sin esfuerzo",
  },
];

// Bonos (con ancla de valor percibido)
const bonuses = [
  { tag: "BONO #1", title: "Vision Board 2026 listo para imprimir", image: bono1 },
  { tag: "BONO #2", title: "Guía de crecimiento personal", image: bono2 },
  { tag: "BONO #3", title: "Pack de 60 afirmaciones (enfoque + abundancia)", image: bono3 },
  { tag: "BONO #4", title: "Lista de hábitos iniciales", image: bono4 },
];

function IncludesSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % bonuses.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + bonuses.length) % bonuses.length);

  // 🔁 AUTO-PLAY DEL CARRUSEL CADA 5s
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bonuses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBonus = bonuses[activeIndex];

  // 👉 CTA: intenta llevar al usuario a un botón de compra (ajusta IDs si ya tienes sección)
  const handleScrollToBuy = () => {
    const el =
      document.getElementById("buy-section") ||
      document.getElementById("pricing-section") ||
      document.getElementById("checkout-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" }); // fallback: arriba (hero)
  };

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
        className="mb-3 text-2xl font-semibold text-slate-50 md:text-3xl"
        variants={fadeInUp}
        custom={0}
      >
        Todo lo que recibes al comprar el Ritual
      </Motion.h2>

      <Motion.p
        className="mb-6 max-w-2xl text-sm text-slate-200 md:text-base"
        variants={fadeInUp}
        custom={0.1}
      >
        Esto no es contenido para “leer y guardar”. Es un{" "}
        <span className="font-semibold text-pink-200">proceso guiado</span> para
        cerrar lo pendiente, soltar carga emocional y convertir tu visión en un
        plan real para 2026.
      </Motion.p>

      {/* LISTA DE CONTENIDOS */}
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
                <span className="text-[10px]">●</span> MÓDULO
              </span>
            </div>

            <h3 className="mb-1 text-[14px] font-semibold text-slate-50">
              {item.title}
            </h3>

            <p className="text-xs leading-relaxed text-slate-300">
              {item.description}
            </p>

            {/* Resultado (micro ancla de transformación) */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] text-pink-200 ring-1 ring-white/10">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-300" />
              Resultado: <span className="font-semibold">{item.outcome}</span>
            </div>
          </Motion.div>
        ))}
      </Motion.div>

      {/* BONUS + CARRUSEL */}
      <Motion.div className="mt-12" variants={fadeInUp} custom={0.35}>
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-6 items-center rounded-full bg-pink-500/20 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-pink-200">
            Bonus exclusivos
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-pink-400/60 via-fuchsia-400/40 to-transparent" />
        </div>

        <Motion.p className="mb-2 max-w-2xl text-sm text-slate-200 md:text-base">
          Además del ritual principal, te llevas{" "}
          <span className="font-semibold text-pink-200">4 bonos</span> para
          sostener lo que inicias en 2026 (no vivirlo una noche y olvidarlo).
        </Motion.p>

        <p className="mb-6 max-w-2xl text-xs text-slate-400">
          *Bonos incluidos sin costo adicional al comprar la guía.
        </p>

        <div className="relative rounded-3xl bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-slate-900/80 p-[1px]">
          {/* Glows */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-400/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-purple-500/25 blur-3xl" />

          <div className="relative rounded-3xl bg-slate-950/90 p-6 lg:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              {/* TEXTO IZQUIERDO */}
              <div className="space-y-3 lg:w-[40%]">
                <h3 className="text-lg font-semibold text-slate-50">
                  Herramientas para mantener enfoque y claridad todo el año ✨
                </h3>
                <p className="text-sm text-slate-200/90">
                  No son extras decorativos. Son recordatorios y plantillas para
                  volver a ti cuando la rutina te quiera devolver al piloto automático.
                </p>
                <p className="text-xs text-slate-400">
                  *Mockups ilustrativos. Acceso inmediato al completar tu compra.
                </p>

                {/* CTA suave dentro de Includes */}
                <button
                  type="button"
                  onClick={handleScrollToBuy}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-400"
                >
                  Quiero el ritual + bonos
                </button>
              </div>

              {/* CARRUSEL */}
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

                  {/* Flechas */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 px-2 py-2 text-xs text-slate-100 shadow-lg ring-1 ring-white/10 hover:bg-slate-800/90"
                    aria-label="Anterior"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 px-2 py-2 text-xs text-slate-100 shadow-lg ring-1 ring-white/10 hover:bg-slate-800/90"
                    aria-label="Siguiente"
                  >
                    ›
                  </button>
                </div>

                {/* Dots */}
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

            {/* Cierre de sección (segundo empuje) */}
            <div className="mt-8 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-slate-50">
                En resumen: recibes un cierre emocional + un plan para 2026.
              </p>
              <p className="mt-2 text-sm text-slate-200/90">
                Menos ruido mental. Más claridad. Y un proceso que puedes repetir
                cada fin de año si lo necesitas.
              </p>
            </div>
          </div>
        </div>
      </Motion.div>
    </Motion.section>
  );
}

export default IncludesSection;
