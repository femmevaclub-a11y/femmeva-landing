// src/components/Footer.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp } from "./animations";
import femmevaLogo from "../assets/femmevalogo.png";

function FooterInicioGracias() {
  const handleGoToCTA = () => {
    window.location.href = "https://femmevaofficial.com/ritual";
  };

  return (
    <footer
      className="
        relative mt-20 border-t border-white/10 
        bg-slate-950/95 overflow-hidden
      "
    >
      {/* 🔮 GRADIENTE SUAVE DETRÁS (halo premium) */}
      <div
        className="
          pointer-events-none absolute inset-0 
          bg-gradient-to-t from-fuchsia-600/20 via-pink-500/10 to-transparent
          blur-2xl opacity-70
        "
      />

      <Motion.div
        className="relative mx-auto max-w-5xl px-4 py-12 md:py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        {/* TOP */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* BRAND */}
          <div className="flex items-center gap-4">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-xl 
              bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
              ring-1 ring-amber-200/20 shadow-[0_0_18px_rgba(250,250,250,0.08)]
            "
            >
              <img
                src={femmevaLogo}
                alt="Femmeva"
                className="h-9 w-9 object-contain drop-shadow-[0_0_6px_rgba(255,200,150,0.45)]"
              />
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.22em] text-pink-200">
                FEMMEVAOFFICIAL
              </p>
              <p className="text-base font-semibold text-white">
                Rituales, mente y riqueza femenina.
              </p>
            </div>
          </div>

          {/* QUICK NAV */}
          <div className="flex flex-wrap gap-6 text-sm text-white">
            <button
              onClick={handleGoToCTA}
              className="hover:text-pink-200 underline underline-offset-4 transition-colors"
            >
              ver la pagina del ritual
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* COPYRIGHT */}
          <div className="max-w-xs text-sm leading-relaxed text-white/90">
            © {new Date().getFullYear()} Ritual Fin de Año · FemmevaOfficial.
            Todos los derechos reservados.
          </div>

          {/* DISCLAIMER */}
          <p className="max-w-md text-[12px] leading-relaxed text-slate-300">
            Este contenido no reemplaza procesos terapéuticos ni asesoría
            profesional. Es una herramienta de reflexión y crecimiento personal
            para acompañar tu proceso interno.
          </p>

          {/* SOCIALS */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-white">
            <span className="basis-full text-sm text-slate-300 md:basis-auto">
              Sígueme:
            </span>

            {/* Instagram */}
            <a
              href="https://instagram.com/femmevaofficial"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-white 
              ring-1 ring-white/20 hover:bg-white/20 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1" />
              </svg>
              Instagram
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@femmevaofficial"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-white 
              ring-1 ring-white/20 hover:bg-white/20 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M16.5 3a4.5 4.5 0 0 0 2.7 2.7v2.1a6.6 6.6 0 0 1-3-1v7.1A5.1 5.1 0 1 1 11 9.9v2.2a2.5 2.5 0 1 0 1.8 2.4V3h3.7Z" />
              </svg>
              TikTok
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/femmevaofficial"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-white 
              ring-1 ring-white/20 hover:bg-white/20 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9a3 3 0 0 1 3.2-3h2.3v3h-1.8c-.6 0-1 .4-1 1v2h2.8l-.4 3h-2.4v7A10 10 0 0 0 22 12Z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </Motion.div>
    </footer>
  );
}

export default FooterInicioGracias;
