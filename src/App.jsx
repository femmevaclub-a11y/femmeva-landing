// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Páginas del funnel
import FreebiePage from "./pages/FreebiePage";
import GraciasPage from "./pages/GraciasPage";
import RitualPage from "./pages/RitualPage"; // aquí vamos a mover tu landing actual

function App() {
  return (
    <Routes>
      {/* Landing del PDF gratuito */}
      <Route path="/" element={<FreebiePage />} />

      {/* Página de gracias + oferta inmediata */}
      <Route path="/gracias" element={<GraciasPage />} />

      {/* Landing del Ritual Definitivo (tu landing actual) */}
      <Route path="/ritual" element={<RitualPage />} />
    </Routes>
  );
}

export default App;
