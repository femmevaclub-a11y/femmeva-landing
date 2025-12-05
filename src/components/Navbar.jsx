// src/components/Navbar.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp } from "./animations";
import femmevaLogo from "../assets/femmevalogo.png";

function Navbar({ onCTAClick }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
      <Motion.div
        className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Glow detrás del logo */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-pink-400/20 blur-2xl" />

        {/* Logo + Info */}
        <div className="relative z-10 flex items-center gap-4">
          {/* LOGO FEMMEVA — Fondo premium */}
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 ring-1 ring-amber-200/20 shadow-[0_0_15px_rgba(255,199,135,0.15)] backdrop-blur">
            {/* Borde dorado suave */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-amber-200/20" />

            {/* Imagen del logo */}
            <img
              src={femmevaLogo}
              alt="Femmeva"
              className="h-7 w-7 object-contain drop-shadow-[0_0_6px_rgba(255,200,150,0.35)]"
            />
          </div>

          {/* Texto */}
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-[0.25em] text-pink-300/90">
              Edición especial
            </p>
            <p className="text-sm font-semibold text-slate-100">
              Ritual Fin de Año 2025
            </p>
          </div>
        </div>

        {/* BOTÓN CTA */}
        <button
          onClick={onCTAClick}
          className="hidden rounded-full bg-gradient-to-tr from-pink-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(236,72,153,0.5)] transition hover:brightness-110 md:inline-flex"
        >
          Comprar ahora
        </button>
      </Motion.div>

      {/* Línea luminosa inferior */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"></div>
    </header>
  );
}

export default Navbar;
