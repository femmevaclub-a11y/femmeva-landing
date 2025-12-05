// src/components/FAQSection.jsx
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const faqs = [
  {
    q: "¿Es digital?",
    a: "Sí. Una vez completes el pago, recibes la descarga inmediata de la guía en tu correo o en la página de confirmación.",
  },
  {
    q: "¿Necesito materiales especiales?",
    a: "No. Solo necesitas la guía, algo para escribir y un espacio tranquilo. Si quieres, puedes añadir velas, incienso o música suave para ambientar, pero no es obligatorio.",
  },
  {
    q: "¿Sirve si no creo en 'espiritualidad'?",
    a: "Sí. La guía está diseñada para cualquier mujer que quiera cerrar el año con claridad, intención y honestidad emocional, sin importar sus creencias.",
  },
  {
    q: "¿Cuánto tiempo toma hacer el ritual?",
    a: "Entre 45 y 60 minutos. Puedes hacerlo de una vez o dividirlo en dos momentos distintos del día.",
  },
  {
    q: "¿Puedo hacerlo con amigas, pareja o comunidad?",
    a: "Sí. De hecho, hacerlo en grupo potencia la energía y la claridad. Solo asegúrate de que cada persona tenga su propia guía.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Motion.section
      className="mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* CONTENEDOR PRINCIPAL CON GLASS + BORDE DORADO SUAVE */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-100/20 bg-slate-950/40 p-[1px] shadow-[0_0_60px_rgba(15,23,42,0.8)]">
        <div className="rounded-3xl bg-slate-950/60 px-4 py-6 backdrop-blur-xl md:px-8 md:py-8">
          {/* Halo suave de luz */}
          <div className="pointer-events-none absolute inset-x-16 -top-10 h-32 bg-gradient-to-b from-pink-500/15 via-fuchsia-500/10 to-transparent blur-3xl" />

          <Motion.h2
            className="relative mb-2 text-xl font-semibold text-slate-50"
            variants={fadeInUp}
            custom={0}
          >
            Preguntas frecuentes
          </Motion.h2>

          <Motion.p
            className="relative mb-8 max-w-xl text-sm text-slate-300"
            variants={fadeInUp}
            custom={0.05}
          >
            Resolvemos las dudas más comunes para que puedas vivir el ritual
            con calma, claridad y sin estar preguntándote “¿estaré haciéndolo
            bien?”.
          </Motion.p>

          <div className="relative mt-4 md:mt-6">
            {/* Línea vertical tipo timeline cósmico (solo en desktop) */}
            <div className="pointer-events-none absolute left-[15px] top-0 hidden h-full w-px bg-gradient-to-b from-pink-300/70 via-purple-400/40 to-amber-200/40 md:block" />

            <div className="space-y-3 md:space-y-4">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                const icon = index % 2 === 0 ? "🌙" : "✨";

                return (
                  <Motion.div
                    key={item.q}
                    variants={fadeInUp}
                    custom={0.1 + index * 0.06}
                    className="relative"
                  >
                    {/* Punto del timeline (planeta / estrella) */}
                    <div className="pointer-events-none absolute -left-[1px] top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-200 via-pink-300 to-purple-400 shadow-[0_0_18px_rgba(251,191,36,0.9)] md:block" />

                    {/* CARD GLASSMORPHISM + BORDE DORADO SUAVE */}
                    <div className="overflow-hidden rounded-2xl border border-amber-100/30 bg-slate-900/40 p-[1px] backdrop-blur-xl">
                      <div className="rounded-2xl bg-slate-950/60 p-4 md:p-5">
                        {/* Header */}
                        <button
                          onClick={() =>
                            setOpenIndex(isOpen ? null : index)
                          }
                          className="flex w-full items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-2 md:gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-amber-300 text-sm leading-none">
                              <span className="translate-y-[1px]">
                                {icon}
                              </span>
                            </span>
                            <p className="text-left text-sm font-medium text-slate-50">
                              {item.q}
                            </p>
                          </div>

                          <Motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="ml-auto flex h-6 w-6 items-center justify-center rounded-full border border-amber-100/30 text-lg leading-none text-amber-100"
                          >
                            +
                          </Motion.span>
                        </button>

                        {/* Answer */}
                        {isOpen && (
                          <Motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 overflow-hidden"
                          >
                            <p className="text-xs leading-relaxed text-slate-300 md:text-[13px]">
                              {item.a}
                            </p>
                          </Motion.div>
                        )}
                      </div>
                    </div>
                  </Motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Motion.section>
  );
}

export default FAQSection;
