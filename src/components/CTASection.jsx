// src/components/CTASection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

function CTASection({ checkoutUrl, launchPrice, fullPrice }) {
  return (
    <Motion.section
      id="cta-section"
      className="mt-20 rounded-3xl bg-gradient-to-tr from-pink-600 via-fuchsia-600 to-purple-700 p-[1.5px] shadow-[0_0_45px_rgba(236,72,153,0.35)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
    >
      <div className="rounded-3xl bg-slate-950/95 px-6 py-9 md:px-10 md:py-12">
        <Motion.div
          className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center"
          variants={staggerContainer}
        >
          {/* LADO IZQUIERDO */}
          <Motion.div variants={fadeInUp} custom={0}>
            {/* Badge */}
            <p className="mb-3 inline-flex items-center rounded-full bg-pink-500/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-200">
              Precio especial de lanzamiento
            </p>

            {/* Título */}
            <h2 className="mb-4 text-2xl font-semibold text-slate-50 md:text-3xl md:leading-snug">
              Haz el cierre de año más importante por menos de lo que gastarías en una salida.
            </h2>

            {/* Texto */}
            <p className="mb-6 text-sm text-slate-300">
              Mientras esté en lanzamiento, en lugar de pagar el precio normal de{" "}
              <span className="font-semibold text-slate-100">{fullPrice}</span>, hoy puedes acceder
              al Ritual Definitivo por un precio preferencial y usarlo cada diciembre.
            </p>

            {/* BLOQUE DE PRECIOS */}
            <div className="mb-4 flex flex-wrap items-stretch gap-4">
              {/* Precio normal */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-500/40 bg-slate-900/80 px-5 py-4 text-sm text-slate-300 shadow-[0_0_20px_rgba(15,23,42,0.7)] min-w-[160px]">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Precio normal
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white line-through">
                    {fullPrice}
                  </p>
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  Este será el valor después del lanzamiento.
                </p>
              </div>

              {/* Precio hoy */}
              <div className="relative flex flex-col rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 px-6 py-5 text-slate-50 shadow-[0_0_30px_rgba(236,72,153,0.7)] min-w-[200px]">
                {/* Etiqueta “Mejor momento” */}
                <span className="absolute -top-3 right-3 rounded-full bg-amber-300 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-[0_0_15px_rgba(251,191,36,0.7)]">
                  Mejor momento
                </span>

                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-100/90">
                  Hoy solo
                </p>

                <p className="mt-1 text-3xl font-extrabold leading-none drop-shadow-[0_0_8px_rgba(15,23,42,0.45)]">
                  {launchPrice}
                </p>
              </div>
            </div>

            {/* Texto extra explicativo (fuera del bloque de precio) */}
            <p className="mb-6 text-xs text-slate-300">
              Pago único. Acceso de por vida a la guía y a todos los rituales que puedas repetir
              cada fin de año.
            </p>

            {/* Urgencia */}
            <p className="mb-7 flex items-center gap-2 text-sm text-pink-100">
              ⏳ Este precio preferencial estará disponible solo por tiempo limitado. Después, la
              guía vuelve a su valor normal.
            </p>

            {/* Botón */}
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-10 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.55)] transition hover:brightness-110"
            >
              Quiero mi ritual al precio de lanzamiento
            </a>
          </Motion.div>

          {/* LADO DERECHO: GARANTÍA */}
          <Motion.div
            className="rounded-2xl bg-black/30 p-5 text-sm text-slate-200 ring-1 ring-white/10 shadow-[0_0_25px_rgba(255,255,255,0.05)] backdrop-blur"
            variants={fadeInUp}
            custom={0.1}
          >
            <p className="mb-2 text-sm font-semibold text-pink-100">
              Garantía de satisfacción 7 días
            </p>
            <p className="mb-3 text-xs text-slate-300 leading-relaxed">
              Si al hacer el ritual sientes que no te aporta claridad, paz o enfoque para tu nuevo
              año, puedes escribirnos dentro de los primeros 7 días y te devolvemos tu inversión.
              Sin explicaciones largas, sin culpas.
            </p>
            <p className="text-[11px] text-slate-400">
              Este ritual está pensado para sumar calma y dirección a tu vida, no presión ni dudas.
            </p>
          </Motion.div>
        </Motion.div>
      </div>
    </Motion.section>
  );
}

export default CTASection;
