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
          className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start"
          variants={staggerContainer}
        >
          {/* LEFT */}
          <Motion.div variants={fadeInUp} custom={0} className="min-w-0">
            {/* Badge */}
            <p className="mb-3 inline-flex items-center rounded-full bg-pink-500/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-200 ring-1 ring-white/10">
              Precio especial de lanzamiento
            </p>

            {/* Title */}
            <h2 className="mb-4 text-2xl font-semibold text-slate-50 md:text-3xl md:leading-snug">
              Haz tu cierre de 2025 hoy y empieza 2026 con claridad.
            </h2>

            {/* Copy */}
            <p className="mb-6 max-w-2xl text-sm text-slate-300 md:text-base">
              Accede al Ritual Definitivo con precio preferencial de lanzamiento.{" "}
              <span className="font-semibold text-slate-100">Es pago único</span>{" "}
              y puedes repetirlo cada diciembre siempre que lo necesites.
            </p>

            {/* PRICING (grid = proporciones estables) */}
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              {/* Normal */}
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_20px_rgba(15,23,42,0.7)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Precio normal
                </p>
                <p className="mt-2 text-3xl font-semibold text-white line-through">
                  {fullPrice}
                </p>
                <p className="mt-2 text-[11px] text-slate-400">
                  Valor después del lanzamiento.
                </p>

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
              </div>

              {/* Today */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 p-5 text-slate-50 shadow-[0_0_30px_rgba(236,72,153,0.7)]">
                <span className="absolute right-4 top-4 rounded-full bg-amber-300 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-[0_0_15px_rgba(251,191,36,0.7)]">
                  Mejor momento
                </span>

                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-100/90">
                  Hoy solo
                </p>

                <p className="mt-2 text-4xl font-extrabold leading-none drop-shadow-[0_0_10px_rgba(15,23,42,0.35)]">
                  {launchPrice}
                </p>

                <p className="mt-3 text-[12px] text-amber-100/90">
                  Incluye guía + bonos + acceso inmediato
                </p>

                <div className="pointer-events-none absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-white/15 blur-3xl" />
              </div>
            </div>

            {/* Micro-valor */}
            <div className="mb-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-200/90">
                Lo que obtienes hoy
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
                <li>✓ Ritual guiado de cierre + liberación emocional</li>
                <li>✓ Plan 2026: enfoque, metas y acciones</li>
                <li>✓ Bonos incluidos para sostener el cambio</li>
              </ul>
            </div>

            {/* Urgencia */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-pink-100 ring-1 ring-white/10">
              <span>⏳</span>
              <span>Precio de lanzamiento disponible por tiempo limitado: 20 minutos.</span>
            </div>

            {/* CTA + microtrust (mismo ancho, mismas proporciones) */}
            <div className="mt-2 space-y-4">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-10 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.55)] transition hover:brightness-110"
              >
                Quiero cerrar mi año ahora
              </a>

              <div className="grid gap-2 text-xs text-slate-300 sm:grid-cols-3">
                <p className="rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10">
                  ✔ Pago seguro vía Hotmart
                </p>
                <p className="rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10">
                  ✔ Descarga inmediata
                </p>
                <p className="rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10">
                  ✔ Soporte por mensaje
                </p>
              </div>
            </div>
          </Motion.div>

          {/* RIGHT: Guarantee (sticky + mejor presencia) */}
          <Motion.aside
            className="lg:sticky lg:top-24"
            variants={fadeInUp}
            custom={0.1}
          >
            <div className="rounded-3xl bg-black/30 p-6 text-sm text-slate-200 ring-1 ring-white/10 shadow-[0_0_25px_rgba(255,255,255,0.05)] backdrop-blur">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-pink-200/90">
                Garantía
              </p>

              <p className="mb-2 text-lg font-semibold text-slate-50">
                Satisfacción 7 días
              </p>

              <p className="mb-4 text-sm leading-relaxed text-slate-300">
                Si haces el ritual y sientes que no te aporta claridad, paz o enfoque,
                escríbenos dentro de los primeros 7 días y te devolvemos tu inversión.
                Sin explicaciones largas, sin culpas.
              </p>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-xs text-slate-300">
                  Este ritual está pensado para sumar calma y dirección a tu vida,
                  no presión ni dudas.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-xs text-slate-300">
                <p>✔ Acceso inmediato al comprar</p>
                <p>✔ Puedes hacerlo en 45–60 min</p>
                <p>✔ Ideal para cerrar ciclos y arrancar enero con foco</p>
              </div>
            </div>
          </Motion.aside>
        </Motion.div>
      </div>
    </Motion.section>
  );
}

export default CTASection;
