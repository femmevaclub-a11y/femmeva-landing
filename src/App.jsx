// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Páginas del funnel
import FreebiePage from "./pages/FreebiePage";
import GraciasPage from "./pages/GraciasPage";
import RitualPage from "./pages/RitualPage";

function App() {
  return (
    <Routes>
      {/* Home → redirige automáticamente a /ritual */}
      <Route path="/" element={<Navigate to="/ritual" replace />} />

      {/* Landing principal de venta */}
      <Route path="/ritual" element={<RitualPage />} />

      {/* Página del PDF gratis */}
      <Route path="/mini-ritual-gratis" element={<FreebiePage />} />

      {/* Página de gracias */}
      <Route path="/gracias" element={<GraciasPage />} />

      {/* Cualquier ruta desconocida → /ritual */}
      <Route path="*" element={<Navigate to="/ritual" replace />} />
    </Routes>
  );
}

export default App;
