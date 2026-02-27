// Trámite Claro — Pricing Section
// Design: Warm Professionalism — tabla de precios clara, badge de transparencia prominente
import { CheckCircle, AlertCircle, MessageCircle } from "lucide-react";

const CARTEL_PRECIOS = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/zrIrlngvWHWlgbVK.png";
const CARTEL_URGENCIAS = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/CaCEbvMWeStgGmeo.png";

const prices = [
  {
    icon: "📋",
    service: "Gestión completa puntual",
    price: "35 – 50 €",
    type: "fixed",
  },
  {
    icon: "📄",
    service: "Descargar o imprimir justificantes",
    price: "20 – 30 €",
    type: "fixed",
  },
  {
    icon: "💶",
    service: "Gastos de gestión",
    price: "60 – 80 €",
    type: "fixed",
  },
  {
    icon: "🤝",
    service: "Acompañamiento a cita",
    price: "Consultar",
    type: "consult",
  },
  {
    icon: "💻",
    service: "Trámite online con varios pasos",
    price: "Consultar",
    type: "consult",
  },
  {
    icon: "📅",
    service: "Gestionar una cita oficial + pedir cita",
    price: "Consultar",
    type: "consult",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-20" style={{ background: "linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Tarifas
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Precios claros, sin sorpresas
          </h2>

          {/* Transparency badge — very prominent */}
          <div className="inline-flex items-start gap-3 bg-blue-800 text-white px-6 py-4 rounded-2xl text-base font-bold shadow-lg max-w-xl mx-auto">
            <AlertCircle size={22} className="flex-shrink-0 mt-0.5 text-yellow-300" />
            <span>
              Siempre te facilitamos el precio exacto <u>antes</u> de realizar cualquier gestión. Sin compromisos ni sorpresas.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Pricing table */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100">
            <div className="bg-blue-800 px-6 py-4">
              <h3 className="text-white font-extrabold text-xl" style={{ fontFamily: "Nunito, sans-serif" }}>
                Tarifas de Trámite Claro
              </h3>
              <p className="text-blue-200 text-sm mt-1">Sin cuotas mensuales · Sin permanencia</p>
            </div>
            <div className="divide-y divide-gray-100">
              {prices.map((p) => (
                <div key={p.service} className="flex items-center justify-between px-6 py-4 hover:bg-blue-50/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{p.icon}</span>
                    <span className="text-slate-700 font-medium text-sm">{p.service}</span>
                  </div>
                  <span
                    className={`font-extrabold text-sm whitespace-nowrap ml-4 ${
                      p.type === "fixed" ? "text-blue-800" : "text-green-700"
                    }`}
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {p.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-green-50 px-6 py-4 border-t border-green-200">
              <div className="flex items-start gap-2 text-green-800 text-sm">
                <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Trámite Claro</strong> es una plataforma de asistencia administrativa puntual. No es asesoría fiscal ni gestoría.
                </span>
              </div>
            </div>
          </div>

          {/* Cartel precios visual */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={CARTEL_PRECIOS}
                alt="Precios Trámite Claro"
                className="w-full h-auto object-cover"
              />
            </div>
            <a
              href="https://wa.me/34611972625?text=Hola,%20me%20gustaría%20consultar%20el%20precio%20de%20un%20trámite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              <MessageCircle size={22} />
              Consulta tu precio ahora
            </a>
          </div>
        </div>

        {/* Urgencias section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3
              className="text-2xl md:text-3xl font-extrabold text-slate-800"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              🚨 ¿En apuros? Servicio Urgente
            </h3>
            <p className="text-slate-600 mt-2">
              Buscamos y facilitamos los números de teléfono que necesitas: grúa, seguros, ayuntamiento, emergencias.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={CARTEL_URGENCIAS}
                alt="Servicio urgente Trámite Claro"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="bg-green-100 border border-green-300 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-extrabold text-green-800 text-lg" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Clientes: GRATIS
                  </span>
                </div>
                <p className="text-green-700 text-sm">Si ya eres cliente, este servicio no tiene coste adicional.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">⚡</span>
                  <span className="font-extrabold text-yellow-800 text-lg" style={{ fontFamily: "Nunito, sans-serif" }}>
                    No clientes: Solo 3 €
                  </span>
                </div>
                <p className="text-yellow-700 text-sm">Ayuda urgente inmediata por tan solo 3 euros.</p>
              </div>
              <a
                href="https://wa.me/34611972625?text=Necesito%20ayuda%20urgente"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-full transition-colors duration-200 w-full"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                <MessageCircle size={18} />
                Contactar ahora por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
