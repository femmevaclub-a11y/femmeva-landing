// src/services/tracking.js

const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:4000"; // luego será tu dominio de API

/**
 * payload:
 *  - eventName: "lead" | "view_content" | "initiate_checkout" | "purchase"
 *  - email?: string
 *  - phone?: string
 *  - value?: number
 *  - currency?: string
 *  - eventId?: string
 */
export async function trackMetaEvent(payload) {
  try {
    await fetch(`${API_URL}/tracking/meta`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Error enviando evento a Femmeva API", error);
  }
}
