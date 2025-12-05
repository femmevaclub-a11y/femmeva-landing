// src/components/FreebieForm.jsx 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { trackMetaEvent } from "../services/tracking";

// Mapa ISO2 -> código telefónico (country.io/phone.json)
const PHONE_CODES = {
  "BD": "880", "BE": "32", "BF": "226", "BG": "359", "BA": "387", "BB": "+1-246",
  "WF": "681", "BL": "590", "BM": "+1-441", "BN": "673", "BO": "591", "BH": "973",
  "BI": "257", "BJ": "229", "BT": "975", "JM": "+1-876", "BV": "", "BW": "267",
  "WS": "685", "BQ": "599", "BR": "55", "BS": "+1-242", "JE": "+44-1534",
  "BY": "375", "BZ": "501", "RU": "7", "RW": "250", "RS": "381", "TL": "670",
  "RE": "262", "TM": "993", "TJ": "992", "RO": "40", "TK": "690", "GW": "245",
  "GU": "+1-671", "GT": "502", "GS": "", "GR": "30", "GQ": "240", "GP": "590",
  "JP": "81", "GY": "592", "GG": "+44-1481", "GF": "594", "GE": "995",
  "GD": "+1-473", "GB": "44", "GA": "241", "SV": "503", "GN": "224",
  "GM": "220", "GL": "299", "GI": "350", "GH": "233", "OM": "968", "TN": "216",
  "JO": "962", "HR": "385", "HT": "509", "HU": "36", "HK": "852", "HN": "504",
  "HM": " ", "VE": "58", "PR": "+1-787 and 1-939", "PS": "970", "PW": "680",
  "PT": "351", "SJ": "47", "PY": "595", "IQ": "964", "PA": "507", "PF": "689",
  "PG": "675", "PE": "51", "PK": "92", "PH": "63", "PN": "870", "PL": "48",
  "PM": "508", "ZM": "260", "EH": "212", "EE": "372", "EG": "20", "ZA": "27",
  "EC": "593", "IT": "39", "VN": "84", "SB": "677", "ET": "251", "SO": "252",
  "ZW": "263", "SA": "966", "ES": "34", "ER": "291", "ME": "382", "MD": "373",
  "MG": "261", "MF": "590", "MA": "212", "MC": "377", "UZ": "998", "MM": "95",
  "ML": "223", "MO": "853", "MN": "976", "MH": "692", "MK": "389", "MU": "230",
  "MT": "356", "MW": "265", "MV": "960", "MQ": "596", "MP": "+1-670",
  "MS": "+1-664", "MR": "222", "IM": "+44-1624", "UG": "256", "TZ": "255",
  "MY": "60", "MX": "52", "IL": "972", "FR": "33", "IO": "246", "SH": "290",
  "FI": "358", "FJ": "679", "FK": "500", "FM": "691", "FO": "298", "NI": "505",
  "NL": "31", "NO": "47", "NA": "264", "VU": "678", "NC": "687", "NE": "227",
  "NF": "672", "NG": "234", "NZ": "64", "NP": "977", "NR": "674", "NU": "683",
  "CK": "682", "XK": "", "CI": "225", "CH": "41", "CO": "57", "CN": "86",
  "CM": "237", "CL": "56", "CC": "61", "CA": "1", "CG": "242", "CF": "236",
  "CD": "243", "CZ": "420", "CY": "357", "CX": "61", "CR": "506", "CW": "599",
  "CV": "238", "CU": "53", "SZ": "268", "SY": "963", "SX": "599", "KG": "996",
  "KE": "254", "SS": "211", "SR": "597", "KI": "686", "KH": "855", "KN": "+1-869",
  "KM": "269", "ST": "239", "SK": "421", "KR": "82", "SI": "386", "KP": "850",
  "KW": "965", "SN": "221", "SM": "378", "SL": "232", "SC": "248", "KZ": "7",
  "KY": "+1-345", "SG": "65", "SE": "46", "SD": "249", "DO": "+1-809 and 1-829",
  "DM": "+1-767", "DJ": "253", "DK": "45", "VG": "+1-284", "DE": "49",
  "YE": "967", "DZ": "213", "US": "1", "UY": "598", "YT": "262", "UM": "1",
  "LB": "961", "LC": "+1-758", "LA": "856", "TV": "688", "TW": "886",
  "TT": "+1-868", "TR": "90", "LK": "94", "LI": "423", "LV": "371", "TO": "676",
  "LT": "370", "LU": "352", "LR": "231", "LS": "266", "TH": "66", "TF": "",
  "TG": "228", "TD": "235", "TC": "+1-649", "LY": "218", "VA": "379",
  "VC": "+1-784", "AE": "971", "AD": "376", "AG": "+1-268", "AF": "93",
  "AI": "+1-264", "VI": "+1-340", "IS": "354", "IR": "98", "AM": "374",
  "AL": "355", "AO": "244", "AQ": "", "AS": "+1-684", "AR": "54", "AU": "61",
  "AT": "43", "AW": "297", "IN": "91", "AX": "+358-18", "AZ": "994",
  "IE": "353", "ID": "62", "UA": "380", "QA": "974", "MZ": "258"
};

const COUNTRY_OPTIONS = [
  // Hispanoamérica + España
  { code: "CO", name: "Colombia", flag: "🇨🇴", dial: "+57" },
  { code: "MX", name: "México", flag: "🇲🇽", dial: "+52" },
  { code: "AR", name: "Argentina", flag: "🇦🇷", dial: "+54" },
  { code: "PE", name: "Perú", flag: "🇵🇪", dial: "+51" },
  { code: "CL", name: "Chile", flag: "🇨🇱", dial: "+56" },
  { code: "VE", name: "Venezuela", flag: "🇻🇪", dial: "+58" },
  { code: "EC", name: "Ecuador", flag: "🇪🇨", dial: "+593" },
  { code: "BO", name: "Bolivia", flag: "🇧🇴", dial: "+591" },
  { code: "PY", name: "Paraguay", flag: "🇵🇾", dial: "+595" },
  { code: "UY", name: "Uruguay", flag: "🇺🇾", dial: "+598" },
  { code: "BR", name: "Brasil", flag: "🇧🇷", dial: "+55" }, // no hispano, pero relevante

  { code: "GT", name: "Guatemala", flag: "🇬🇹", dial: "+502" },
  { code: "SV", name: "El Salvador", flag: "🇸🇻", dial: "+503" },
  { code: "HN", name: "Honduras", flag: "🇭🇳", dial: "+504" },
  { code: "NI", name: "Nicaragua", flag: "🇳🇮", dial: "+505" },
  { code: "CR", name: "Costa Rica", flag: "🇨🇷", dial: "+506" },
  { code: "PA", name: "Panamá", flag: "🇵🇦", dial: "+507" },

  { code: "CU", name: "Cuba", flag: "🇨🇺", dial: "+53" },
  { code: "DO", name: "República Dominicana", flag: "🇩🇴", dial: "+1-809" },
  { code: "PR", name: "Puerto Rico", flag: "🇵🇷", dial: "+1" },
  { code: "ES", name: "España", flag: "🇪🇸", dial: "+34" },

  // Otros importantes donde hay muchos hispanos
  { code: "US", name: "Estados Unidos", flag: "🇺🇸", dial: "+1" },
  { code: "CA", name: "Canadá", flag: "🇨🇦", dial: "+1" },
  { code: "FR", name: "Francia", flag: "🇫🇷", dial: "+33" },
  { code: "DE", name: "Alemania", flag: "🇩🇪", dial: "+49" },
  { code: "IT", name: "Italia", flag: "🇮🇹", dial: "+39" },
];

/**
 * Convierte el dial a formato limpio:
 * "+1-809" → "+1"
 * "57" → "+57"
 */
function normalizeDialCode(raw) {
  if (!raw) return "";
  const match = String(raw).match(/\+?\d+/);
  if (!match) return "";
  let code = match[0];
  if (!code.startsWith("+")) code = "+" + code;
  return code;
}

// Tooltip de error premium FEMMEVA
function ErrorTooltip({ message }) {
  if (!message) return null;

  return (
    <span className="relative inline-flex group ml-2 align-middle">
      {/* Iconito redondo */}
      <span
        className="flex h-4 w-4 items-center justify-center rounded-full 
                   border border-pink-400/70 bg-pink-500/20 
                   text-[10px] font-semibold text-pink-100"
      >
        !
      </span>

      {/* Tooltip flotante */}
      <span
        className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 
                   w-56 -translate-x-1/2 rounded-md border border-pink-500/40 
                   bg-slate-950 px-3 py-2 text-[11px] leading-snug text-pink-100 
                   opacity-0 shadow-xl shadow-pink-500/20 transition-opacity 
                   duration-200 group-hover:opacity-100"
      >
        {message}
      </span>
    </span>
  );
}

export function FreebieForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedCountryCode, setSelectedCountryCode] = useState("CO"); // 🇨🇴 por defecto
  const [showCountries, setShowCountries] = useState(false);

  const [errors, setErrors] = useState({});

  const selectedCountry =
    COUNTRY_OPTIONS.find((c) => c.code === selectedCountryCode) ||
    COUNTRY_OPTIONS[0];

  const selectedDial = normalizeDialCode(selectedCountry.dial);

  // Validación de todos los campos (incluye número)
  function validate() {
    const newErrors = {};

    // Nombre
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = "Escribe tu nombre real (mínimo 2 caracteres).";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Revisa tu correo, parece no ser válido.";
    }

    // País
    if (!selectedCountryCode) {
      newErrors.country = "Selecciona el país de tu número.";
    }

    // Celular: solo validación “inteligente” de forma
    const digits = phone.replace(/\D/g, ""); // solo números
    if (!digits) {
      newErrors.phone = "Ingresa tu número de celular.";
    } else if (digits.length < 7 || digits.length > 15) {
      newErrors.phone = "Tu número debe tener entre 7 y 15 dígitos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    const digitsOnly = phone.replace(/\D/g, "");
    const fullPhone = `${selectedDial} ${digitsOnly}`;

    // Enviar evento a tu API / Meta CAPI
    await trackMetaEvent({
      eventName: "lead",
      name,                        // 👈 ahora enviamos el nombre
      email,
      source: "freebie-mini-ritual", // 👈 origen del lead
      value: 0,
      currency: "USD",
      eventId: "freebie-optin",
      phone: fullPhone,
    });

    // Guardar datos en localStorage
    localStorage.setItem("femmeva_name", name);
    localStorage.setItem("femmeva_email", email);
    localStorage.setItem("femmeva_phone", fullPhone);

    // Redirigir
    navigate("/gracias");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-slate-900/70 p-6 md:p-8
                 border border-pink-500/20 shadow-[0_0_25px_rgba(236,72,153,0.15)]
                 backdrop-blur-xl w-full"
    >
      {/* NOMBRE */}
      <div>
        <div className="flex items-center">
          <label className="text-sm text-slate-300">Nombre</label>
          <ErrorTooltip message={errors.name} />
        </div>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`mt-1 w-full rounded-xl bg-slate-800/60 px-4 py-3 text-sm
                     placeholder-slate-500 border
                     ${
                       errors.name
                         ? "border-pink-500/70"
                         : "border-white/10"
                     }
                     focus:border-pink-400/40 focus:ring-2 focus:ring-pink-400/20
                     outline-none transition-all duration-300`}
        />
      </div>

      {/* CORREO */}
      <div>
        <div className="flex items-center">
          <label className="text-sm text-slate-300">Correo electrónico</label>
          <ErrorTooltip message={errors.email} />
        </div>
        <input
          type="email"
          placeholder="tucorreo@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-1 w-full rounded-xl bg-slate-800/60 px-4 py-3 text-sm
                     placeholder-slate-500 border
                     ${
                       errors.email
                         ? "border-pink-500/70"
                         : "border-white/10"
                     }
                     focus:border-pink-400/40 focus:ring-2 focus:ring-pink-400/20
                     outline-none transition-all duration-300`}
        />
      </div>

      {/* CELULAR */}
      <div>
        <div className="flex items-center">
          <label className="text-sm text-slate-300">Número de celular</label>
          <ErrorTooltip message={errors.country || errors.phone} />
        </div>

        <div className="mt-1 flex gap-2">
          {/* Selector de país personalizado */}
          <div className="relative w-36">
            <button
              type="button"
              onClick={() => setShowCountries(!showCountries)}
              className={`w-full flex items-center justify-between rounded-xl 
                         bg-slate-800/60 px-3 py-3 text-sm border
                         ${
                           errors.country
                             ? "border-pink-500/70"
                             : "border-white/10"
                         }
                         text-slate-100`}
            >
              <span className="flex items-center gap-2">
                <span>{selectedCountry.flag}</span>
                <span>{selectedDial}</span>
              </span>
              <span>▾</span>
            </button>

            {showCountries && (
              <div
                className="absolute mt-1 w-full rounded-xl bg-slate-900 
                           border border-white/10 shadow-xl max-h-60 
                           overflow-y-auto z-50"
              >
                {COUNTRY_OPTIONS.map((c) => (
                  <button
                    type="button"
                    key={c.code}
                    onClick={() => {
                      setSelectedCountryCode(c.code);
                      setShowCountries(false);
                    }}
                    className="w-full text-left px-3 py-2 flex items-center gap-2 
                               hover:bg-slate-800/60 transition text-sm"
                  >
                    <span>{c.flag}</span>
                    <span>{normalizeDialCode(c.dial)}</span>
                    <span className="truncate text-xs text-slate-400">
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input del número */}
          <input
            type="tel"
            placeholder="300 000 0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`flex-1 rounded-xl bg-slate-800/60 px-4 py-3 text-sm
                       placeholder-slate-500 border
                       ${
                         errors.phone
                           ? "border-pink-500/70"
                           : "border-white/10"
                       }
                       focus:border-pink-400/40 focus:ring-2 focus:ring-pink-400/20
                       outline-none transition-all duration-300`}
          />
        </div>

        {/* Mensajes extra debajo (además del tooltip) */}
        {errors.country && (
          <p className="mt-1 text-xs text-pink-300">{errors.country}</p>
        )}
        {errors.phone && (
          <p className="mt-1 text-xs text-pink-300">{errors.phone}</p>
        )}
      </div>

      {/* BOTÓN */}
      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600
                   py-3 font-semibold text-sm shadow-lg shadow-pink-500/20
                   hover:shadow-pink-500/30 hover:brightness-110 
                   transition-all duration-300 hover:scale-[1.01]
                   text-white"
      >
        Descargar Mini Ritual GRATIS
      </button>
    </form>
  );
}
