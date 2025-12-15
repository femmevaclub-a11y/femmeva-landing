import React from "react";
import femmevaLogo from "../assets/femmevalogo.png";

/* ================== HELPERS ================== */
const pad2 = (n) => String(n).padStart(2, "0");

function Navbar({ onCTAClick }) {
  /* ================== TIMER: 20 MIN (AUTO-RESET) ================== */
  const STORAGE_KEY = "femmeva_deadline_v1";
  const DURATION_MS = 20 * 60 * 1000; // 20 minutos

  const [deadline, setDeadline] = React.useState(() => Date.now() + DURATION_MS);
  const [timeLeft, setTimeLeft] = React.useState(DURATION_MS);

  /* ================== SCROLL PROGRESS ================== */
  const [progress, setProgress] = React.useState(0);

  const writeDeadline = React.useCallback((ms) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ deadline: ms }));
    } catch {
      // ignore
    }
  }, []);

  const resetTimer = React.useCallback(() => {
    const newDeadline = Date.now() + DURATION_MS;
    setDeadline(newDeadline);
    setTimeLeft(DURATION_MS);
    writeDeadline(newDeadline);
  }, [DURATION_MS, writeDeadline]);

  // Inicializa deadline desde localStorage (pero invalida valores viejos/lejanos)
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const now = Date.now();

    try {
      const savedRaw = window.localStorage.getItem(STORAGE_KEY);

      if (savedRaw) {
        const saved = JSON.parse(savedRaw);
        const savedDeadline = Number(saved?.deadline);

        // deadline válido numéricamente
        if (Number.isFinite(savedDeadline) && savedDeadline > 0) {
          const remaining = savedDeadline - now;

          // ✅ Si el deadline guardado NO corresponde a un timer de 20min (ej: quedó el de dic 31),
          // lo reseteamos. También si ya expiró.
          if (remaining <= 0 || remaining > DURATION_MS) {
            resetTimer();
            return;
          }

          // OK: usar el guardado
          setDeadline(savedDeadline);
          setTimeLeft(Math.max(0, remaining));
          return;
        }
      }

      // Si no hay guardado válido, crea uno nuevo
      const newDeadline = now + DURATION_MS;
      writeDeadline(newDeadline);
      setDeadline(newDeadline);
      setTimeLeft(DURATION_MS);
    } catch {
      // fallback sin storage
      resetTimer();
    }
  }, [DURATION_MS, resetTimer, writeDeadline]);

  // Tick cada 1s + auto-reset cuando llegue a 0
  React.useEffect(() => {
    const tick = () => {
      const now = Date.now();
      let remaining = Math.max(0, deadline - now);

      // Si por cualquier razón el remaining se va por encima de 20min, clamp + reset
      if (remaining > DURATION_MS) {
        resetTimer();
        return;
      }

      setTimeLeft(remaining);

      if (remaining === 0) {
        resetTimer();
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [deadline, DURATION_MS, resetTimer]);

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

  // Formato MM:SS (siempre 20min)
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
