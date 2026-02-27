// Trámite Claro — Cookie Banner
// Design: Warm Professionalism — banner RGPD con opciones de aceptar/rechazar/personalizar
import { useState, useEffect } from "react";
import { Cookie, X, Settings, CheckCircle } from "lucide-react";

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "tramiteclaro_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Show banner after a short delay
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (accepted: CookiePrefs) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...accepted, timestamp: new Date().toISOString() })
    );
    setVisible(false);
  };

  const acceptAll = () =>
    saveConsent({ necessary: true, analytics: true, marketing: true });

  const rejectAll = () =>
    saveConsent({ necessary: true, analytics: false, marketing: false });

  const saveCustom = () => saveConsent(prefs);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {!showSettings ? (
          /* Main banner */
          <div className="p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Cookie size={20} className="text-blue-800" />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="font-extrabold text-slate-800 text-base mb-1"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Usamos cookies
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia de
                  navegación y analizar el tráfico de la web. Puedes aceptar todas las cookies,
                  rechazar las no esenciales o personalizar tu elección. Consulta nuestra{" "}
                  <a
                    href="/politica-cookies"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Política de Cookies
                  </a>{" "}
                  y nuestra{" "}
                  <a
                    href="/politica-privacidad"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Política de Privacidad
                  </a>
                  .
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={acceptAll}
                    className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    Aceptar todas
                  </button>
                  <button
                    onClick={rejectAll}
                    className="bg-gray-100 hover:bg-gray-200 text-slate-700 font-bold px-5 py-2 rounded-full text-sm transition-colors"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    Solo necesarias
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex items-center gap-1.5 border border-gray-300 hover:border-blue-400 text-slate-600 hover:text-blue-700 font-semibold px-4 py-2 rounded-full text-sm transition-colors"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    <Settings size={14} />
                    Personalizar
                  </button>
                </div>
              </div>
              <button
                onClick={rejectAll}
                className="flex-shrink-0 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Cerrar"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        ) : (
          /* Settings panel */
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between mb-5">
              <h3
                className="font-extrabold text-slate-800 text-base"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Personalizar cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            <div className="space-y-4 mb-5">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4 p-3 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-bold text-slate-800 text-sm" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Cookies necesarias
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Imprescindibles para el funcionamiento básico de la web. No se pueden desactivar.
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-1 text-green-600 text-xs font-bold">
                  <CheckCircle size={14} />
                  Siempre activas
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-3 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-bold text-slate-800 text-sm" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Cookies analíticas
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Nos ayudan a entender cómo los usuarios interactúan con la web (páginas visitadas, tiempo de visita, etc.).
                  </p>
                </div>
                <label className="flex-shrink-0 relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={prefs.analytics}
                    onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:bg-blue-700 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all" />
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-3 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-bold text-slate-800 text-sm" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Cookies de marketing
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Permiten mostrar publicidad relevante en función de tus intereses y medir la efectividad de las campañas.
                  </p>
                </div>
                <label className="flex-shrink-0 relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={prefs.marketing}
                    onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:bg-blue-700 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all" />
                </label>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={saveCustom}
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Guardar preferencias
              </button>
              <button
                onClick={acceptAll}
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Aceptar todas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
