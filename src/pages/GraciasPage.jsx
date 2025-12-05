// src/pages/GraciasPage.jsx
import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { trackMetaEvent } from "../services/tracking";

// Ajusta esto con tu checkout real de Hotmart
const HOTMART_CHECKOUT_URL =
  "https://pay.hotmart.com/N103276272J?checkoutMode=10";

const RITUAL_PRICE = 9.99;
const ORIGINAL_PRICE = 69.0;
const CURRENCY = "USD";

const TIMER_KEY = "femmeva_ritual_offer_deadline";
const OFFER_MINUTES = 20;

export default function GraciasPage() {
  const name = localStorage.getItem("femmeva_name") || "";
  const email = localStorage.getItem("femmeva_email") || "";

  const [timeLeft, setTimeLeft] = useState(OFFER_MINUTES * 60);
  const [showRenewMessage, setShowRenewMessage] = useState(false);

  // Timer con reinicio automático
  useEffect(() => {
    let deadline;

    const stored = localStorage.getItem(TIMER_KEY);

    if (stored && !isNaN(Number(stored))) {
      deadline = Number(stored);
    } else {
      deadline = Date.now() + OFFER_MINUTES * 60 * 1000;
      localStorage.setItem(TIMER_KEY, String(deadline));
    }

    const interval = setInterval(() => {
      let diff = Math.floor((deadline - Date.now()) / 1000);

      // Si expira → reiniciar
      if (diff <= 0) {
        deadline = Date.now() + OFFER_MINUTES * 60 * 1000;
        localStorage.setItem(TIMER_KEY, String(deadline));
        diff = OFFER_MINUTES * 60;

        // Mostrar mensaje de renovación
        setShowRenewMessage(true);
        setTimeout(() => setShowRenewMessage(false), 3000);
      }

      setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // trackeo del view_content
  useEffect(() => {
    trackMetaEvent({
      eventName: "view_content",
      email: email || undefined,
      value: RITUAL_PRICE,
      currency: CURRENCY,
      eventId: "offer-ritual-view",
    });
  }, [email]);

  async function handleComprar() {
    await trackMetaEvent({
      eventName: "initiate_checkout",
      email: email || undefined,
      value: RITUAL_PRICE,
      currency: CURRENCY,
      eventId: "offer-ritual-click",
    });

    window.location.href = HOTMART_CHECKOUT_URL;
  }

  // Formateo del contador
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  // Últimos segundos para parpadear
  const isLastSeconds = timeLeft <= 10;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-pink-300 mb-4">
          Femmeva • Gracias
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {name
            ? `¡${name}, tu Mini Ritual ya está en camino! 💜`
            : "¡Tu Mini Ritual ya está en camino! 💜"}
        </h1>

        <p className="text-sm md:text-base text-slate-300 mb-8 max-w-2xl mx-auto">
          En unos minutos lo recibirás en tu correo. Mientras tanto, quiero
          mostrarte algo que puede transformar por completo cómo cierras este
          año.
        </p>

        {/* CARD CON RESPLANDOR MORADO PULSANTE */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-2xl">
            {/* Glow pulsante */}
            <Motion.div
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-10 rounded-[3rem]
                bg-gradient-to-b from-pink-500/40 via-fuchsia-600/35 to-purple-900/20
                blur-[90px]"
            />

            <div className="relative rounded-[2rem] bg-slate-900/80 border border-white/10 px-6 py-8 md:px-10 md:py-10 shadow-[0_0_40px_rgba(0,0,0,0.75)] backdrop-blur-md">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Si vas a cerrar ciclos, hazlo bien.
                <br className="hidden md:block" />
                Este es el ritual completo ✨
              </h2>

              <p className="text-sm md:text-base text-white max-w-2xl mx-auto mb-4">
                El{" "}
                <span className="font-semibold">
                  Ritual definitivo de fin de año
                </span>{" "}
                es una guía profunda con ejercicios, rituales, activaciones y
                plantillas para soltar lo que pesa, recuperar tu poder y
                diseñar tu 2026 con claridad y propósito.
              </p>

              {/* BLOQUE DE PRECIOS */}
              <div className="flex flex-col items-center gap-4 mt-6">
                <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                  {/* Precio normal */}
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-6 py-5 w-[250px] text-left">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-1">
                      Precio normal
                    </p>
                    <p className="text-lg font-semibold text-slate-300 line-through mb-1">
                      {ORIGINAL_PRICE.toFixed(2)} {CURRENCY}
                    </p>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      Este será el valor después del lanzamiento.
                    </p>
                  </div>

                  {/* Hoy solo */}
                  <div className="rounded-2xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-purple-600 px-6 py-5 w-[250px] relative text-left shadow-lg">
                    {/* PILLO AMARILLO */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center rounded-full bg-amber-300 px-3 py-1 text-[10px] font-semibold text-slate-900 shadow-md">
                        MEJOR MOMENTO
                      </div>
                    </div>

                    {/* OFERTA + 20 minutos (dos <p> pero misma fila) */}
                    <div className="flex items-end justify-between mt-3 mb-2">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-pink-100/90">
                        Oferta solo por
                      </p>
                      <p className="text-lg font-semibold text-white leading-none">
                        20 minutos
                      </p>
                    </div>

                    {/* Precio + temporizador */}
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-extrabold text-white">
                        {RITUAL_PRICE.toFixed(2)} {CURRENCY}
                      </p>

                      <span
                        className={
                          "inline-flex items-center rounded-full bg-slate-950/30 px-3 py-1 font-mono text-base text-white" +
                          (isLastSeconds ? " animate-blink-timer" : "")
                        }
                      >
                        {minutes}:{seconds}
                      </span>
                    </div>

                    {/* MENSAJE DE RENOVACIÓN */}
                    {showRenewMessage && (
                      <div className="relative mt-3">
                        {/* Glow rosado */}
                        <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-xl"></div>

                        <p className="relative text-[11px] text-pink-200 animate-fade-in">
                          ✨ Tu oferta especial ha sido renovada
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 mt-1 max-w-sm leading-tight">
                  Pago único. Acceso de por vida a la guía y a todos los rituales.
                </p>
              </div>

              {/* BOTÓN */}
              <button
                onClick={handleComprar}
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-purple-600 px-10 py-4 text-sm md:text-base font-semibold text-white shadow-xl shadow-pink-500/40 hover:scale-[1.02] transition"
              >
                Quiero mi Ritual completo con DESCUENTO
              </button>

              <p className="mt-4 text-xs text-slate-400 max-w-md mx-auto">
                Esta oferta está pensada solo para quienes descargan el Mini
                Ritual. Puedes volver más tarde, pero probablemente el precio será mayor.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
