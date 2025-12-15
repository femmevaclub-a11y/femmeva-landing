// src/pages/RitualPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import IncludesSection from "../components/IncludesSection";
import PreviewSection from "../components/PreviewSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import ResultsSection from "../components/ResultsSection";
import ThisIsForYouSection from "../components/ThisIsForYouSection";
import NotForYouSection from "../components/NotForYouSection";
import TransformationSection from "../components/TransformationSection";
import MiniCTASection from "../components/MiniCTASection";

// 🔗 Ajusta esto con tu pasarela real
const CHECKOUT_URL = "https://pay.hotmart.com/N103276272J";
const LAUNCH_PRICE = "$9.99 USD";
const FULL_PRICE = "$69.00 USD";

function RitualPage() {
  const handleScrollToCTA = () => {
    const el = document.getElementById("cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-slate-100 ">
      {/* Fondo degradado global */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#f472b680,_transparent_60%),radial-gradient(circle_at_bottom,_#6366f180,_transparent_60%)]" />

      <Navbar onCTAClick={handleScrollToCTA} />

      <main className="mx-auto max-w-5xl sm:max-w-2xl px-4 pb-20 pt-10 md:pt-16">
        <HeroSection
          checkoutUrl={CHECKOUT_URL}
          launchPrice={LAUNCH_PRICE}
          onCTAClick={handleScrollToCTA}
        />
        <ProblemSection />
        <SolutionSection />
        <TransformationSection />
        <ResultsSection />
        <CTASection
          checkoutUrl={CHECKOUT_URL}
          launchPrice={LAUNCH_PRICE}
          fullPrice={FULL_PRICE}
        />
        <IncludesSection />
        <PreviewSection />
        <TestimonialsSection />
        <ThisIsForYouSection />
        <NotForYouSection />
        <FAQSection />
        <CTASection
          checkoutUrl={CHECKOUT_URL}
          launchPrice={LAUNCH_PRICE}
          fullPrice={FULL_PRICE}
        />
      </main>

      <Footer onCTAClick={handleScrollToCTA} />
    </div>
  );
}

export default RitualPage;
