// src/components/SolutionSection.jsx
import React from "react";
import { motion as Motion} from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const bullets = [
  "Cerrar correctamente tu ciclo 2025",
  "Liberar emociones, culpas y cargas acumuladas",
  "Entrar al 2026 con claridad mental y enfoque",
  "Redefinir tu identidad, hábitos y prioridades",
  "Crear un mapa de sueños poderoso y accionable",
  "Activar energía de abundancia personal y financiera",
  "Definir metas realistas, alcanzables y alineadas contigo",
];

function SolutionSection() {
  return (
    <Motion.section
      className="mt-16 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div>
        <Motion.h2
          className="mb-4 text-xl font-semibold"
          variants={fadeInUp}
          custom={0}
        >
          Una guía para cerrar, liberar y renacer.
        </Motion.h2>

        <Motion.p
          className="mb-4 text-sm text-slate-200"
          variants={fadeInUp}
          custom={0.1}
        >
          Esta guía está diseñada para acompañarte paso a paso en un ritual de
          cierre consciente de 2025, aunque haya sido un año difícil, caótico o
          lleno de emociones mezcladas.
        </Motion.p>

        <Motion.p
          className="mb-4 text-sm text-slate-200"
          variants={fadeInUp}
          custom={0.2}
        >
          No es solo “un PDF bonito”. Es una experiencia guiada para que puedas
          integrar lo que viviste, soltar lo que pesa y entrar a 2026 con una
          energía mucho más ligera, clara y alineada contigo.
        </Motion.p>

        <Motion.p
          className="mb-3 text-sm font-semibold text-pink-200"
          variants={fadeInUp}
          custom={0.25}
        >
          Con esta guía vas a:
        </Motion.p>

        <Motion.ul
          className="space-y-2 text-sm text-slate-200"
          variants={staggerContainer}
        >
          {bullets.map((b, index) => (
            <Motion.li key={b} variants={fadeInUp} custom={0.3 + index * 0.05}>
              ✨ {b}
            </Motion.li>
          ))}
        </Motion.ul>
      </div>

      <Motion.div
        className="rounded-2xl bg-slate-900/70 p-5 ring-1 ring-white/10"
        variants={fadeInUp}
        custom={0.35}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
          Transformación
        </p>
        <p className="mb-3 text-sm text-slate-100">
          Es transformación emocional + estratégica en un solo lugar.
        </p>
        <p className="text-xs text-slate-300">
          Puedes hacer este ritual sola, en pareja o con amigas. Lo importante
          es que te regales este momento de cierre consciente antes de que
          empiece el nuevo año.
        </p>
      </Motion.div>
    </Motion.section>
  );
}

export default SolutionSection;
