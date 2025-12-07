// src/pages/FreebiePage.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { FreebieForm } from "../components/FreebieForm";
import miniRitualMockup from "../assets/mini-ritual.png";
import { fadeInUp, staggerContainer } from "../components/animations";
import FooterInicioGracias from "../components/FooterInicioGracias";
// import Navbar from "../components/Navbar";

export default function FreebiePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* <Navbar /> */}

      <main className="mx-auto max-w-5xl px-4 py-12 md:py-20">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <Motion.p
            variants={fadeInUp}
            className="text-xs uppercase tracking-[0.2em] text-pink-300 mb-3 text-center"
          >
            PDF GRATUITO • FEMMEVA
          </Motion.p>

          {/* Título */}
          <Motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Mini Ritual de cierre 2025 💜
          </Motion.h1>

          {/* Subtítulo */}
          <Motion.p
            variants={fadeInUp}
            className="text-sm md:text-base text-slate-300 max-w-2xl text-center mb-8"
          >
            Descarga una guía corta y poderosa para soltar la energía pesada del año,
            cerrar ciclos pendientes y preparar tu mente para un 2026 más ligero,
            claro y abundante.
          </Motion.p>

          {/* Layout principal */}
          <Motion.div
            variants={fadeInUp}
            className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-12 w-full justify-center"
          >
            {/* MOCKUP IZQUIERDA */}
            <div className="w-full max-w-xs md:max-w-sm">
              <div className="relative w-full">

                {/* ⭐ Glow pulsante (latido suave) */}
                <Motion.div
                  initial={{ opacity: 0.7, scale: 1 }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute -inset-10 
                    rounded-[3rem]
                    bg-gradient-to-b 
                    from-pink-500/40 
                    via-fuchsia-600/35 
                    to-purple-900/20
                    blur-[90px] 
                    pointer-events-none
                  "
                />

                {/* Marco premium */}
                <div
                  className="relative rounded-[2.2rem] bg-slate-900/80 border border-white/10 
                             p-5 shadow-[0_0_40px_rgba(0,0,0,0.75)] backdrop-blur-md"
                >
                  

                  <img
                    src={miniRitualMockup}
                    alt="Mockup Mini Ritual de Cierre 2025"
                    className="w-full rounded-2xl object-contain shadow-[0_0_25px_rgba(236,72,153,0.25)]"
                  />
                </div>
              </div>
            </div>

            {/* FORMULARIO DERECHA — CENTRADO */}
            <div className="w-full md:flex-1 max-w-md md:self-center">
              <FreebieForm />

              <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                No es un boletín más. Es un ritual guiado en PDF para que cierres tu año
                con intención. Lo recibirás en tu correo en pocos minutos.
              </p>
            </div>
          </Motion.div>
        </Motion.div>
        <FooterInicioGracias onCTAClick={() => window.location.href = "https://femmevaofficial.com/ritual"} />

      </main>
    </div>
  );
}
