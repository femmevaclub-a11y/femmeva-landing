import React from "react";
import femmevaLogo from "../assets/femmevalogo.png";

/* ================== HELPERS ================== */
const pad2 = (n) => String(n).padStart(2, "0");

function getLocalMidnight(year, monthIndex, day) {
  // monthIndex: 0=Jan ... 11=Dec
  return new Date(year, monthIndex, day, 0, 0, 0, 0).getTime();
}

function Navbar({ onCTAClick }) {
  /* ================== TIMER: 31 DIC 00:00 + 5 DÍAS ================== */
  const STORAGE_KEY = "femmeva_deadline_v1";

  // 31 de diciembre 00:00 (hora local) del año actual
  const nowInit = Date.now();
  const currentYear = new Date(nowInit).getFullYear();
  const BASE_DEADLINE_MS = getLocalMidnight(currentYear, 11, 31); // Dec=11, day=31, 00:00

  const EXTENSION_MS = 5 * 24 * 60 * 60 * 1000; // 5 días

  const [deadline, setDeadline] = React.useState(() => BASE_DEADLINE_MS);
  const [timeLeft, setTimeLeft] = React.useState(() =>
    Math.max(0, BASE_DEADLINE_MS - Date.now())
  );

  /* ================== SCROLL PROGRESS ================== */
  const [progress, setProgress] = React.useState(0);

  // Inicializa deadline desde localStorage (y/o calcula el correcto)
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const now = Date.now();

    const computeDefaultDeadline = () => {
      // Si hoy ya pasó el 31 dic 00:00 de este año, pasa a 31 dic 00:00 del siguiente año (base)
      if (now >= BASE_DEADLINE_MS) {
        const nextYearBase = getLocalMidnight(currentYear + 1, 11, 31);
        return nextYearBase;
      }
      return BASE_DEADLINE_MS;
    };

    try {
      const savedRaw = window.localStorage.getItem(STORAGE_KEY);

      if (savedRaw) {
        const saved = JSON.parse(savedRaw);
        const savedDeadline = Number(saved?.deadline);
        const extended = Boolean(saved?.extended);

        // Si el deadline guardado es válido, úsalo
        if (Number.isFinite(savedDeadline) && savedDeadline > 0) {
          // Si ya venció:
          // - si NO estaba extendido => aplica extensión de 5 días desde ese deadline
          // - si ya estaba extendido => no lo vuelvas a extender (solo queda en 0)
          if (now >= savedDeadline) {
            if (!extended) {
              const newDeadline = savedDeadline + EXTENSION_MS;
              const payload = { deadline: newDeadline, extended: true };
              window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
              setDeadline(newDeadline);
              setTimeLeft(Math.max(0, newDeadline - now));
              return;
            }
            setDeadline(savedDeadline);
            setTimeLeft(0);
            return;
          }

          // Aún no vence
          setDeadline(savedDeadline);
          setTimeLeft(Math.max(0, savedDeadline - now));
          return;
        }
      }

      // Si no hay guardado o es inválido, crea uno nuevo
      const freshDeadline = computeDefaultDeadline();
      const payload = { deadline: freshDeadline, extended: false };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setDeadline(freshDeadline);
      setTimeLeft(Math.max(0, freshDeadline - now));
    } catch {
      // Si localStorage falla, funciona igual sin persistencia
      const fallback = now >= BASE_DEADLINE_MS
        ? getLocalMidnight(currentYear + 1, 11, 31)
        : BASE_DEADLINE_MS;

      setDeadline(fallback);
      setTimeLeft(Math.max(0, fallback - now));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tick cada 1s + reinicio a extensión cuando llegue a 0
  React.useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const remaining = Math.max(0, deadline - now);
      setTimeLeft(remaining);

      // Si llegó a 0, intentamos extender 5 días SOLO una vez
      if (remaining === 0 && typeof window !== "undefined") {
        try {
          const savedRaw = window.localStorage.getItem(STORAGE_KEY);
          const saved = savedRaw ? JSON.parse(savedRaw) : null;
          const alreadyExtended = Boolean(saved?.extended);

          if (!alreadyExtended) {
            const newDeadline = deadline + EXTENSION_MS;
            window.localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify({ deadline: newDeadline, extended: true })
            );
            setDeadline(newDeadline);
            setTimeLeft(Math.max(0, newDeadline - now));
          }
        } catch {
          // si falla storage, no pasa nada
        }
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

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

  // Formato DD:HH:MM:SS (porque ahora es countdown largo)
  const totalSeconds = Math.floor(timeLeft / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
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
            {pad2(days)}:{pad2(hours)}:{pad2(minutes)}:{pad2(seconds)}
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
