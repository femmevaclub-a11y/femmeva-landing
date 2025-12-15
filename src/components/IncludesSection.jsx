// src/components/IncludesSection.jsx
import React from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";
import bono1 from "../assets/bono1.png";
import bono2 from "../assets/bono2.png";
import bono3 from "../assets/bono3.png";
import bono4 from "../assets/bono4.png";

/* ================== HELPERS ================== */
const formatUSD = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

const randomStrategicPrice = (min = 65, max = 80) => {
  const centsOptions = [0.99, 0.99, 0.99, 0.0]; // mayoría .99
  const cents = centsOptions[Math.floor(Math.random() * centsOptions.length)];
  const whole = Math.floor(min + Math.random() * (max - min + 1));
  let price = whole + cents;
  price = Math.max(min, Math.min(max, price));
  return Number(price.toFixed(2));
};

const PROMO_TIMER_KEY = "femmeva_deadline_v1";
const PRICE_STORAGE_KEY = "femmeva_bonus_prices_v1";

const isPromoActive = () => {
  if (typeof window === "undefined") return true;
  try {
    const raw = window.localStorage.getItem(PROMO_TIMER_KEY);
    if (!raw) return true;
    const data = JSON.parse(raw);
    const deadline = Number(data?.deadline);
    return Date.now() < deadline;
  } catch {
    return true;
  }
};

/* ================== DATA ================== */
// eslint-disable-next-line no-unused-vars
const items = [
  {
    title: "Ritual de limpieza de fin de año",
    description:
      "Cierre guiado paso a paso para soltar culpa, carga emocional y lo que no quieres llevar a 2026.",
    outcome: "Te sientes más liviana y en paz",
  },
  {
    title: "Ejercicios guiados de cierre emocional",
    description:
      "Preguntas profundas + escritura consciente para mirar tu año con honestidad.",
    outcome: "Claridad real",
  },
  {
    title: "Ritual del fuego",
    description:
      "Uso del simbolismo como acto consciente para cerrar capítulos.",
    outcome: "Cierre emocional",
  },
  {
    title: "Plantillas imprimibles",
    description:
      "Hojas listas para imprimir o completar en digital.",
    outcome: "Orden mental",
  },
  {
    title: "Guía de metas REAL 2026",
    description:
      "Metas realistas, alineadas y sostenibles.",
    outcome: "Dirección clara",
  },
  {
    title: "Mapa de sueños 2026",
    description:
      "Visión visual con intención y enfoque.",
    outcome: "Enfoque",
  },
  {
    title: "Expansión de merecimiento",
    description:
      "Trabajo interno sobre límites y abundancia.",
    outcome: "Seguridad personal",
  },
  {
    title: "Mini calendario 2026",
    description:
      "Plan mensual con intención.",
    outcome: "Acción constante",
  },
  {
    title: "Rutina diaria 6 minutos",
    description:
      "Ritual breve para iniciar enero con foco.",
    outcome: "Constancia",
  },
];

const bonuses = [
  { title: "Vision Board 2026 listo para imprimir", image: bono1 },
  { title: "Guía de crecimiento personal", image: bono2 },
  { title: "Pack de 60 afirmaciones", image: bono3 },
  { title: "Lista de hábitos iniciales", image: bono4 },
];

function IncludesSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [promoActive, setPromoActive] = React.useState(true);
  const [prices, setPrices] = React.useState(
    bonuses.map(() => randomStrategicPrice())
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(PRICE_STORAGE_KEY);
    if (saved) {
      setPrices(JSON.parse(saved));
    } else {
      window.localStorage.setItem(
        PRICE_STORAGE_KEY,
        JSON.stringify(prices)
      );
    }

    const tick = () => setPromoActive(isPromoActive());
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const iv = setInterval(() => {
      setActiveIndex((p) => (p + 1) % bonuses.length);
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  const bonus = bonuses[activeIndex];
  const price = prices[activeIndex];

  return (
    <Motion.section
      id="includes-section"
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <Motion.h2
        className="mb-6 text-2xl font-semibold text-slate-50 md:text-3xl"
        variants={fadeInUp}
      >
        Todo lo que recibes al comprar el Ritual
      </Motion.h2>

      {/* BONUS CARRUSEL */}
      <div className="relative rounded-3xl bg-slate-900/80 p-6 shadow-2xl ring-1 ring-white/10">
        <AnimatePresence mode="wait">
          <Motion.div
            key={bonus.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* PRICE + TITLE BADGE */}
            <div className="absolute right-4 top-8 z-20 w-[260px] max-w-[85%] rounded-2xl bg-black/70 px-4 py-3 ring-1 ring-white/15 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] font-semibold text-slate-50 leading-snug">
                {bonus.title}
              </p>

              <div className="mt-2 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-300/80">
                    Valor real
                  </p>
                  <p className="text-sm font-semibold text-slate-200 line-through decoration-pink-400/90">
                    {formatUSD(price)}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-pink-200 drop-shadow-[0_0_10px_rgba(236,72,153,0.55)]">
                    PROMO ACTIVA
                  </p>
                  <p className="text-3xl font-black text-pink-300 drop-shadow-[0_0_18px_rgba(236,72,153,0.95)] leading-none">
                    {promoActive ? "$0" : formatUSD(price)}
                  </p>
                  <p className="text-[10px] font-semibold text-pink-200/90">
                    por tiempo limitado
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-md">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="h-full w-full object-cover shadow-xl"
                />
              </div>
            </div>
          </Motion.div>
        </AnimatePresence>
      </div>
    </Motion.section>
  );
}

export default IncludesSection;
