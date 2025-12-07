
// src/services/googleSheets.js

// ⬅️ Pega aquí la NUEVA URL recién generada
const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyumGcblrfR58F06cUaHgb2oNYAcRH5Kqvw1Jj8Mk_K_n3Ew9DmfkxsfSqa_uQgIpto/exec";

// src/services/googleSheets.js
export async function sendLeadToSheet({ nombre, email, celular }) {
  try {
    const res = await fetch(GOOGLE_SHEET_WEBAPP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({ nombre, email, celular }),
    });
    return res; // aunque no lo usemos, devolvemos la promesa
  } catch (error) {
    console.error("Error enviando lead a Google Sheets:", error);
    throw error;
  }
}

