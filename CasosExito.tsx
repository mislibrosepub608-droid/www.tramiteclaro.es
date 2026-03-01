// Trámite Claro — Casos de Éxito
// Design: Warm Professionalism — tarjetas narrativas con situación, problema, solución y resultado
import { useState } from "react";
import { CheckCircle, Clock, X, Trophy } from "lucide-react";

const casos = [
  {
    id: 1,
    emoji: "🏛️",
    gradientFrom: "#1d4ed8",
    gradientTo: "#1e3a8a",
    badgeColor: "bg-blue-100 text-blue-800",
    category: "Hacienda · AEAT",
    title: "Carta de Hacienda que nadie entendía",
    cliente: "Ramón, 58 años — Albacete",
    avatar: "RM",
    avatarBg: "bg-blue-700",
    tiempo: "Resuelto en 2 horas",
    resumen:
      "Recibió una notificación de la AEAT con un requerimiento de documentación. Llevaba días sin dormir pensando que le iban a embargar.",
    situacion:
      "Ramón recibió una carta certificada de Hacienda con terminología técnica que no comprendía. Pensó que era una sanción grave y entró en pánico.",
    problema:
      "El plazo para responder era de 10 días hábiles y ya había consumido 4 sin actuar. No sabía si necesitaba un abogado, un gestor o podía resolverlo él mismo.",
    solucion:
      "Contactó con Trámite Claro por WhatsApp. En menos de 30 minutos le explicamos que era un requerimiento de información rutinario, le indicamos exactamente qué documentos debía aportar y le gestionamos la cita en la oficina de la AEAT más cercana.",
    resultado:
      "Ramón acudió a la cita con toda la documentación preparada. El trámite se resolvió sin ninguna sanción. Tiempo total desde que nos contactó hasta la resolución: 2 horas de gestión.",
    ahorro: "Evitó una posible sanción de 150€ por no responder en plazo",
  },
  {
    id: 2,
    emoji: "💼",
    gradientFrom: "#7c3aed",
    gradientTo: "#5b21b6",
    badgeColor: "bg-purple-100 text-purple-800",
    category: "SEPE · Desempleo",
    title: "Paro bloqueado por un error en la web del SEPE",
    cliente: "Lucía, 34 años — Murcia",
    avatar: "LU",
    avatarBg: "bg-purple-700",
    tiempo: "Resuelto en 1 día",
    resumen:
      "Llevaba 3 semanas intentando pedir cita en el SEPE para solicitar el paro. La web le daba error constantemente y no sabía qué hacer.",
    situacion:
      "Lucía fue despedida y necesitaba solicitar la prestación por desempleo cuanto antes. Cada día que pasaba sin tramitarlo era dinero que perdía.",
    problema:
      "La web del SEPE mostraba un error al intentar seleccionar la oficina de su provincia. Llamó al teléfono de atención y estuvo 2 horas esperando sin que nadie le atendiera.",
    solucion:
      "Trámite Claro identificó el problema y le indicó el procedimiento alternativo. Gestionamos el proceso completo y le confirmamos la cita para el día siguiente con toda la documentación necesaria.",
    resultado:
      "Lucía acudió a su cita al día siguiente. Su prestación fue aprobada sin incidencias. Cobró su primer pago en menos de 15 días.",
    ahorro: "Recuperó 3 semanas de prestación que podría haber perdido por el retraso",
  },
  {
    id: 3,
    emoji: "🔐",
    gradientFrom: "#16a34a",
    gradientTo: "#14532d",
    badgeColor: "bg-green-100 text-green-800",
    category: "Certificado Digital",
    title: "Certificado digital para gestionar una herencia",
    cliente: "Manuel, 71 años — Córdoba",
    avatar: "MA",
    avatarBg: "bg-green-700",
    tiempo: "Resuelto en 3 días",
    resumen:
      "Necesitaba el certificado digital urgente para gestionar documentación de una herencia, pero no sabía ni qué era ni cómo obtenerlo.",
    situacion:
      "Manuel perdió a su esposa y necesitaba acceder a la sede electrónica de la Seguridad Social y Hacienda para gestionar varios trámites relacionados con la herencia.",
    problema:
      "Manuel nunca había usado el certificado digital. No entendía la diferencia entre el certificado de la FNMT, el DNIe y Cl@ve. Además, su ordenador era antiguo.",
    solucion:
      "Le explicamos paso a paso qué opción era la más adecuada (Cl@ve Permanente). Le acompañamos en el proceso de registro, le ayudamos a activarla en la oficina y le enseñamos a usarla.",
    resultado:
      "Manuel pudo acceder a todos los trámites online en 3 días. Evitó desplazamientos innecesarios a distintas oficinas y resolvió toda la documentación desde casa.",
    ahorro: "Ahorró más de 5 desplazamientos a distintas oficinas públicas",
  },
  {
    id: 4,
    emoji: "🚗",
    gradientFrom: "#dc2626",
    gradientTo: "#991b1b",
    badgeColor: "bg-red-100 text-red-800",
    category: "ITV · Vehículo",
    title: "ITV caducada: multa evitada en el último momento",
    cliente: "Sofía, 29 años — Zaragoza",
    avatar: "SO",
    avatarBg: "bg-red-700",
    tiempo: "Cita conseguida en 45 minutos",
    resumen:
      "Sofía descubrió que su ITV llevaba 2 meses caducada cuando la paró la Policía. Necesitaba cita urgente antes de que le pusieran una multa mayor.",
    situacion:
      "Sofía fue parada en un control de tráfico. El agente le advirtió que tenía la ITV caducada y le dio un plazo de 48 horas para regularizar la situación.",
    problema:
      "Al intentar pedir cita online, todas las fechas disponibles eran para dentro de 3 semanas. No sabía si podía ir a otra provincia ni cómo gestionar la urgencia.",
    solucion:
      "Trámite Claro buscó disponibilidad en todas las estaciones ITV de la provincia y zonas limítrofes. Encontramos una cita disponible para el día siguiente y gestionamos la reserva.",
    resultado:
      "Sofía pasó la ITV al día siguiente sin incidencias. Presentó el justificante a la Policía dentro del plazo y evitó la denuncia por ITV caducada.",
    ahorro: "Evitó una multa de hasta 200€ por ITV caducada",
  },
  {
    id: 5,
    emoji: "🏥",
    gradientFrom: "#0d9488",
    gradientTo: "#134e4a",
    badgeColor: "bg-teal-100 text-teal-800",
    category: "Seguridad Social",
    title: "Baja médica gestionada sin salir de casa",
    cliente: "Jorge, 45 años — Bilbao",
    avatar: "JO",
    avatarBg: "bg-teal-700",
    tiempo: "Resuelto en 1 día",
    resumen:
      "Jorge estaba convaleciente tras una operación y necesitaba gestionar su baja médica, pero no podía desplazarse a ninguna oficina.",
    situacion:
      "Jorge fue operado de urgencia y necesitaba gestionar la continuación de su baja médica con la Seguridad Social. Su médico le había indicado que no podía desplazarse.",
    problema:
      "No sabía cómo gestionar los trámites de la baja online. No tenía certificado digital y la web de la Seguridad Social le resultaba confusa. Su empresa le presionaba para que aportara la documentación cuanto antes.",
    solucion:
      "Trámite Claro le ayudó a configurar el acceso con Cl@ve PIN, le guiamos para descargar el parte de confirmación de baja y le explicamos cómo enviarlo a su empresa correctamente.",
    resultado:
      "Jorge gestionó todo desde su cama en menos de 24 horas. Su empresa recibió la documentación en tiempo y forma. Pudo concentrarse en su recuperación sin estrés administrativo.",
    ahorro: "Evitó un desplazamiento imposible y posibles problemas laborales por retraso",
  },
  {
    id: 6,
    emoji: "🌍",
    gradientFrom: "#ea580c",
    gradientTo: "#9a3412",
    badgeColor: "bg-orange-100 text-orange-800",
    category: "Extranjería · NIE",
    title: "NIE conseguido para firmar un contrato de trabajo",
    cliente: "Amara, 27 años — Valencia",
    avatar: "AM",
    avatarBg: "bg-orange-600",
    tiempo: "Cita conseguida en 2 días",
    resumen:
      "Amara tenía una oferta de trabajo que expiraba en 5 días y necesitaba el NIE para poder firmar el contrato. Las citas en extranjería estaban agotadas.",
    situacion:
      "Amara, ciudadana senegalesa con permiso de residencia en trámite, recibió una oferta de trabajo de una empresa española. Sin el NIE no podía firmar el contrato ni darse de alta en la Seguridad Social.",
    problema:
      "Todas las citas disponibles en la Oficina de Extranjería de Valencia estaban ocupadas para los próximos 3 meses. La empresa no podía esperar más de una semana.",
    solucion:
      "Trámite Claro identificó que podía solicitar el NIE por razones económicas urgentes con cita preferente. Preparamos toda la documentación necesaria y conseguimos una cita en 2 días hábiles.",
    resultado:
      "Amara obtuvo su NIE dentro del plazo. Firmó el contrato de trabajo y se dio de alta en la Seguridad Social. Lleva ya 8 meses trabajando en esa empresa.",
    ahorro: "Salvó una oportunidad laboral que parecía imposible",
  },
];

function CasoModal({
  caso,
  onClose,
}: {
  caso: (typeof casos)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 text-white relative"
          style={{
            background: `linear-gradient(135deg, ${caso.gradientFrom}, ${caso.gradientTo})`,
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={16} className="text-white" />
          </button>
          <div className="text-4xl mb-3">{caso.emoji}</div>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
            {caso.category}
          </span>
          <h2
            className="text-xl font-extrabold leading-snug pr-8"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            {caso.title}
          </h2>
          <div className="flex items-center gap-3 mt-3">
            <div
              className={`w-8 h-8 ${caso.avatarBg} rounded-full flex items-center justify-center text-white text-xs font-extrabold`}
            >
              {caso.avatar}
            </div>
            <span className="text-white/90 text-sm">{caso.cliente}</span>
            <span className="ml-auto flex items-center gap-1 text-white/80 text-xs">
              <Clock size={12} />
              {caso.tiempo}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5" style={{ fontFamily: "Source Sans 3, sans-serif" }}>
          {[
            { label: "La situación", icon: "📋", text: caso.situacion, color: "border-blue-200 bg-blue-50" },
            { label: "El problema", icon: "⚠️", text: caso.problema, color: "border-orange-200 bg-orange-50" },
            { label: "Nuestra solución", icon: "💡", text: caso.solucion, color: "border-green-200 bg-green-50" },
            { label: "El resultado", icon: "✅", text: caso.resultado, color: "border-teal-200 bg-teal-50" },
          ].map((block) => (
            <div key={block.label} className={`border rounded-xl p-4 ${block.color}`}>
              <div
                className="font-extrabold text-slate-800 text-sm mb-1"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {block.icon} {block.label}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{block.text}</p>
            </div>
          ))}

          {/* Ahorro */}
          <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <Trophy size={20} className="text-yellow-600 flex-shrink-0" />
            <p className="text-slate-800 text-sm font-bold">{caso.ahorro}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 pb-6">
          <a
            href="https://wa.me/34611972625?text=Hola,%20he%20visto%20vuestros%20casos%20de%20éxito%20y%20necesito%20ayuda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition-colors w-full text-sm"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Tengo un caso similar, ¡ayúdame!
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CasosExito() {
  const [selected, setSelected] = useState<(typeof casos)[0] | null>(null);

  return (
    <section
      id="casos"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0f4ff 100%)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Casos de Éxito
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Problemas reales, soluciones reales
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estos son algunos de los casos que hemos resuelto. Personas como tú que no sabían
            por dónde empezar y encontraron la solución con Trámite Claro.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            { num: "+500", label: "Trámites resueltos" },
            { num: "98%", label: "Clientes satisfechos" },
            { num: "<2h", label: "Tiempo medio de respuesta" },
            { num: "0€", label: "Sorpresas en la factura" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white border border-blue-100 rounded-2xl py-4 px-3 shadow-sm"
            >
              <div
                className="text-2xl font-extrabold text-blue-800"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {stat.num}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casos.map((caso) => (
            <div
              key={caso.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-1 group"
              onClick={() => setSelected(caso)}
            >
              {/* Card top */}
              <div
                className="h-24 flex items-end px-5 pb-4 relative"
                style={{
                  background: `linear-gradient(135deg, ${caso.gradientFrom}, ${caso.gradientTo})`,
                }}
              >
                <div className="absolute top-4 right-4 text-3xl">{caso.emoji}</div>
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {caso.category}
                </span>
              </div>

              <div className="p-5">
                <h3
                  className="font-extrabold text-slate-800 text-base mb-2 leading-snug group-hover:text-blue-800 transition-colors"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {caso.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {caso.resumen}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 ${caso.avatarBg} rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0`}
                    >
                      {caso.avatar}
                    </div>
                    <span className="text-xs text-slate-500 truncate max-w-[120px]">
                      {caso.cliente}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 text-xs font-bold flex-shrink-0">
                    <CheckCircle size={12} />
                    {caso.tiempo}
                  </div>
                </div>

                <button className="mt-3 w-full text-center text-blue-700 font-bold text-xs hover:text-blue-900 transition-colors py-1">
                  Ver caso completo →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4 text-lg">
            ¿Tu situación se parece a alguno de estos casos?
          </p>
          <a
            href="https://wa.me/34611972625?text=Hola,%20necesito%20ayuda%20con%20un%20trámite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Cuéntanos tu caso por WhatsApp
          </a>
        </div>
      </div>

      {/* Modal */}
      {selected && <CasoModal caso={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
