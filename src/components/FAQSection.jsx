// src/components/FAQSection.jsx
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const faqs = [
  {
    q: "¿Qué recibo exactamente después de pagar?",
    a: "Recibes acceso inmediato a la guía digital (y bonos, si aplican). La descarga aparece en la página de confirmación y también llega a tu correo. Puedes guardarla en tu celular, tablet o computador.",
  },
  {
    q: "¿Y si siento que no me funciona o no es para mí?",
    a: "Tienes garantía de satisfacción por 7 días. Si haces el ritual y sientes que no te aportó claridad o paz, nos escribes dentro de ese plazo y te devolvemos tu inversión. Sin culpas, sin drama.",
  },
  {
    q: "¿Sirve si no creo en espiritualidad?",
    a: "Sí. Esto no depende de creencias. Es un proceso guiado de cierre emocional + claridad mental: preguntas, ejercicios y decisiones para soltar lo que pesa y empezar el año con dirección.",
  },
  {
    q: "¿Necesito estar ‘bien’ emocionalmente para hacerlo?",
    a: "No. Justamente es para cuando estás cargada, confundida o estancada. La guía te lleva paso a paso para que no tengas que improvisar ni forzarte a sentir algo específico.",
  },
  {
    q: "¿Cuánto tiempo toma hacerlo?",
    a: "Entre 45 y 60 minutos. Puedes hacerlo en una sola sesión o dividirlo en dos momentos del día. Lo importante es hacerlo con calma y sin interrupciones.",
  },
  {
    q: "¿Necesito materiales especiales?",
    a: "No. Solo necesitas la guía, algo para escribir y un espacio tranquilo. Si quieres ambientar con vela/música/incienso, perfecto, pero no es obligatorio.",
  },
  {
    q: "¿Puedo hacerlo con amigas o pareja?",
    a: "Sí. Hacerlo acompañado puede ayudarte a sostener el compromiso y conversar con más claridad. Solo asegúrate de que cada persona tenga su propia guía para vivir su propio proceso.",
  },
  {
    q: "¿Para quién NO es este ritual?",
    a: "No es para quien busca solo inspiración rápida o frases bonitas. Es para quien está lista a ser honesta, cerrar ciclos y tomar decisiones concretas para empezar el año diferente.",
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
      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-100/20 bg-slate-950/40 p-[1px] shadow-[0_0_60px_rgba(15,23,42,0.8)]">
        <div className="rounded-3xl bg-slate-950/60 px-4 py-6 backdrop-blur-xl md:px-8 md:py-8">
          {/* Halo suave */}
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
            Resolvemos las dudas reales para que compres con calma y hagas el ritual
            sin sentirte perdida o insegura.
          </Motion.p>

          <div className="relative mt-4 md:mt-6">
            {/* Línea vertical (desktop) */}
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
                    {/* Punto timeline */}
                    <div className="pointer-events-none absolute -left-[1px] top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-200 via-pink-300 to-purple-400 shadow-[0_0_18px_rgba(251,191,36,0.9)] md:block" />

                    {/* Card */}
                    <div className="overflow-hidden rounded-2xl border border-amber-100/30 bg-slate-900/40 p-[1px] backdrop-blur-xl">
                      <div className="rounded-2xl bg-slate-950/60 p-4 md:p-5">
                        {/* Header */}
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between gap-3"
                          type="button"
                        >
                          <div className="flex items-center gap-2 md:gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-amber-300 text-sm leading-none">
                              <span className="translate-y-[1px]">{icon}</span>
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

          {/* Mini cierre con confianza (opcional, alto impacto) */}
          <Motion.div
            variants={fadeInUp}
            custom={0.8}
            className="relative mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
          >
            <p className="text-sm font-semibold text-slate-50">
              Compra sin miedo.
            </p>
            <p className="mt-2 text-sm text-slate-200/90">
              Acceso inmediato + garantía 7 días. Si no te aporta claridad real,
              te devolvemos tu inversión.
            </p>
          </Motion.div>
        </div>
      </div>
    </Motion.section>
  );
}

export default FAQSection;
