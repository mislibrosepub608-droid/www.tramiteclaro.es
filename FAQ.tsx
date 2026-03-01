// Trámite Claro — FAQ Section
// Design: Warm Professionalism — acordeón limpio con preguntas frecuentes sobre servicios
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Sobre el servicio",
    questions: [
      {
        q: "¿Qué es exactamente Trámite Claro?",
        a: "Trámite Claro es una plataforma de asistencia administrativa puntual. Te ayudamos a gestionar citas con organismos públicos (Hacienda, SEPE, Seguridad Social, ITV...), a entender notificaciones oficiales y a realizar trámites online paso a paso. No somos gestoría ni asesoría fiscal.",
      },
      {
        q: "¿Cuánto cuesta el servicio?",
        a: "Siempre te informamos del precio exacto antes de empezar cualquier gestión. No hay sorpresas ni cargos ocultos. Los precios orientativos son: gestión completa puntual 35–50€, descargar o imprimir justificantes 20–30€, gastos de gestión 60–80€. Para acompañamiento a cita, trámites online con varios pasos o gestión de cita oficial, consulta precio antes de confirmar.",
      },
      {
        q: "¿Tengo que pagar una cuota mensual?",
        a: "No. Trámite Claro funciona sin cuotas mensuales ni permanencia. Pagas únicamente por el servicio que necesitas en el momento que lo necesitas.",
      },
      {
        q: "¿Cómo me contactáis una vez enviado el formulario?",
        a: "Nos ponemos en contacto contigo por el medio que prefieras: teléfono, correo electrónico o WhatsApp. Normalmente respondemos en pocas horas en horario laboral. Para urgencias, lo más rápido es escribirnos directamente por WhatsApp al +34 611 97 26 25.",
      },
    ],
  },
  {
    category: "Sobre los trámites",
    questions: [
      {
        q: "¿Podéis gestionar mi cita en Hacienda (AEAT)?",
        a: "Sí. Gestionamos la cita previa en la Agencia Tributaria para cualquier trámite: renta, IVA, certificados, notificaciones, etc. También te ayudamos a entender cualquier carta o notificación que hayas recibido de Hacienda.",
      },
      {
        q: "¿Ayudáis con el certificado digital?",
        a: "Sí. Te guiamos en todo el proceso para obtener el certificado digital de la FNMT: desde la solicitud online hasta la acreditación en la oficina y la instalación en tu ordenador.",
      },
      {
        q: "¿Podéis pedir la cita del SEPE para solicitar el paro?",
        a: "Sí. Gestionamos la cita previa en el SEPE para solicitar la prestación por desempleo, renovar la demanda de empleo o cualquier otro trámite relacionado.",
      },
      {
        q: "¿Hacéis la declaración de la renta?",
        a: "No. Trámite Claro no realiza declaraciones de impuestos ni asesoramiento fiscal. Para eso necesitas una gestoría o asesor fiscal. Lo que sí hacemos es ayudarte a pedir cita en Hacienda o a entender una notificación relacionada con tu renta.",
      },
      {
        q: "¿Gestionáis trámites de extranjería o NIE?",
        a: "Te orientamos sobre el proceso para obtener el NIE y te ayudamos a pedir la cita previa en la Oficina de Extranjería o Comisaría de Policía. No tramitamos permisos de residencia ni otros expedientes de extranjería que requieran representación legal.",
      },
    ],
  },
  {
    category: "Servicio urgente",
    questions: [
      {
        q: "¿Qué es el servicio urgente de 3€?",
        a: "Si necesitas un número de teléfono urgente (grúa, seguros, ayuntamiento, emergencias 112...) y no eres cliente, te lo buscamos y facilitamos por solo 3€. Si ya eres cliente, este servicio es completamente gratuito.",
      },
      {
        q: "¿Cómo accedo al servicio urgente?",
        a: "Escríbenos por WhatsApp al +34 611 97 26 25 indicando que necesitas ayuda urgente. Te respondemos de inmediato.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-blue-50/50 transition-colors duration-150"
      >
        <span
          className="font-bold text-slate-800 text-sm leading-snug"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-blue-700 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 bg-white border-t border-gray-100">
          <p className="text-slate-600 text-sm leading-relaxed pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            FAQ
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Resolvemos las dudas más habituales sobre nuestros servicios. Si no encuentras lo
            que buscas, escríbenos por WhatsApp.
          </p>
        </div>

        {/* FAQ grid */}
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((group) => (
            <div key={group.category}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle size={16} className="text-white" />
                </div>
                <h3
                  className="font-extrabold text-blue-800 text-base uppercase tracking-wide"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-blue-100" />
              </div>

              {/* Questions */}
              <div className="space-y-2">
                {group.questions.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">¿Tienes alguna otra pregunta?</p>
          <a
            href="https://wa.me/34611972625?text=Hola,%20tengo%20una%20pregunta%20sobre%20vuestros%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
