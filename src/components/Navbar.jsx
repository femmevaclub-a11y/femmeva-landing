import React from "react";
import femmevaLogo from "../assets/femmevalogo.png";

/* ================== HELPERS ================== */
const pad2 = (n) => String(n).padStart(2, "0");

function Navbar({ onCTAClick }) {
  /* ================== TIMER 20 MIN ================== */
  const STORAGE_KEY = "femmeva_fomo_timer_start";
  const DURATION_MS = 20 * 60 * 1000; // 20 minutos

  // startTime seguro (no revienta si no hay window/localStorage)
  const [startTime, setStartTime] = React.useState(() => Date.now());
  const [timeLeft, setTimeLeft] = React.useState(DURATION_MS);

  /* ================== SCROLL PROGRESS ================== */
  const [progress, setProgress] = React.useState(0);

  // Inicializa startTime desde localStorage en cliente
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setStartTime(Number(saved));
      } else {
        const now = Date.now();
        window.localStorage.setItem(STORAGE_KEY, String(now));
        setStartTime(now);
      }
    } catch {
      // si el navegador bloquea localStorage, igual funciona en memoria
      setStartTime(Date.now());
    }
  }, []);

  // Actualiza timer
  React.useEffect(() => {
    const tick = () => {
      const remaining = Math.max(0, DURATION_MS - (Date.now() - startTime));
      setTimeLeft(remaining);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [DURATION_MS, startTime]);

  // Scroll progress
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const p = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const totalSeconds = Math.floor(timeLeft / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <>
      {/* ===== NAVBAR FIXED ===== */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        {/* ===== TOP BAR ===== */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ring-1 ring-amber-200/20 shadow-[0_0_15px_rgba(255,199,135,0.15)]">
              <img
                src={femmevaLogo}
                alt="Femmeva"
                className="h-6 w-6 object-contain drop-shadow-[0_0_6px_rgba(255,200,150,0.35)]"
              />
            </div>

            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-[0.25em] text-pink-300">
                Oferta activa
              </p>
              <p className="text-sm font-semibold text-slate-100">
                Ritual Fin de Año 2025
              </p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onCTAClick}
            className="hidden md:inline-flex rounded-full bg-gradient-to-tr from-pink-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(236,72,153,0.6)] transition hover:brightness-110"
          >
            Comprar ahora
          </button>
        </div>

        {/* ===== FOMO TIMER ===== */}
        <div className="relative bg-black/40 px-4 py-3 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-pink-200/80">
            Precio de lanzamiento termina en
          </p>

          <p className="mt-1 text-3xl font-extrabold text-pink-400 drop-shadow-[0_0_14px_rgba(236,72,153,0.9)]">
            {pad2(minutes)}:{pad2(seconds)}
          </p>

          <button
            onClick={onCTAClick}
            className="mt-1 text-xs font-semibold text-pink-300 underline underline-offset-4"
          >
            Ver precio ahora
          </button>

          {/* PROGRESS BAR */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 transition-all"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* ===== SPACER ===== */}
      <div className="h-[112px]" />
    </>
  );
}

export default Navbar;
