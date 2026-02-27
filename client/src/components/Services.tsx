// Trámite Claro — Services Section
// Design: Warm Professionalism — cards con borde izquierdo azul/verde, iconos grandes
import { Calendar, FileText, Shield, Globe, Car, Bell, Award, Users, HelpCircle } from "lucide-react";

const CARTEL_QUE_HACEMOS = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/zufWNlNriVflzdtL.png";
const CARTEL_QUE_NO_HACEMOS = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/UYkxJxzdwXneRmiJ.png";
const CARTEL_EJEMPLOS = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/EWgBQyiNhabTrSVr.png";
const CARTEL_TRAMITES = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/cyRZjfxFvPwsbwjK.png";

const services = [
  {
    icon: <Calendar size={28} className="text-blue-700" />,
    title: "Cita en Hacienda (AEAT)",
    desc: "Gestionamos tu cita en la Agencia Tributaria. Te explicamos qué documentación necesitas y te acompañamos en el proceso.",
    color: "border-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: <Users size={28} className="text-blue-700" />,
    title: "Cita en el SEPE",
    desc: "Te ayudamos a pedir tu cita en el Servicio Público de Empleo Estatal de forma rápida y sin complicaciones.",
    color: "border-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: <Shield size={28} className="text-green-700" />,
    title: "Cita Seguridad Social",
    desc: "Gestionamos tu cita en la Seguridad Social para cualquier trámite: vida laboral, prestaciones, afiliación y más.",
    color: "border-green-600",
    bg: "bg-green-50",
  },
  {
    icon: <Award size={28} className="text-green-700" />,
    title: "Certificado Digital",
    desc: "Te guiamos paso a paso en el proceso de obtención de tu certificado digital. Sin tecnicismos, de forma sencilla.",
    color: "border-green-600",
    bg: "bg-green-50",
  },
  {
    icon: <Car size={28} className="text-blue-700" />,
    title: "Cita ITV",
    desc: "Te enseñamos a pedir cita para la Inspección Técnica de Vehículos en tu provincia. Rápido y sin errores.",
    color: "border-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: <Bell size={28} className="text-green-700" />,
    title: "Entender Notificaciones",
    desc: "¿Has recibido una carta de Hacienda o de la administración y no sabes qué significa? Te lo explicamos con claridad.",
    color: "border-green-600",
    bg: "bg-green-50",
  },
  {
    icon: <Globe size={28} className="text-blue-700" />,
    title: "Trámites Online",
    desc: "Te guiamos en cualquier gestión online: sede electrónica, notificaciones digitales, formularios y más.",
    color: "border-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: <FileText size={28} className="text-green-700" />,
    title: "Descargar Justificantes",
    desc: "Te ayudamos a descargar e imprimir justificantes, certificados y documentos oficiales desde las plataformas del gobierno.",
    color: "border-green-600",
    bg: "bg-green-50",
  },
  {
    icon: <HelpCircle size={28} className="text-blue-700" />,
    title: "Acompañamiento a Cita",
    desc: "¿Necesitas apoyo presencial o telemático durante tu cita? Estamos contigo para que todo salga bien.",
    color: "border-blue-700",
    bg: "bg-blue-50",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Nuestros Servicios
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            ¿Qué hacemos por ti?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trámites puntuales sin cuotas mensuales ni permanencia.{" "}
            <strong className="text-blue-800">Pagas solo por lo que necesitas.</strong>
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-bold">
            ✅ Siempre te informamos del precio exacto antes de realizar cualquier gestión
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <div
              key={s.title}
              className={`service-card ${s.bg} border-l-4 ${s.color} rounded-xl p-6 shadow-sm`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  {s.icon}
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-800 text-base mb-2"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carteles visuales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={CARTEL_QUE_HACEMOS}
              alt="Qué hacemos en Trámite Claro"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={CARTEL_EJEMPLOS}
              alt="Ejemplos prácticos de lo que hacemos"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Tramites puntuales cartel */}
        <div className="rounded-2xl overflow-hidden shadow-md max-w-2xl mx-auto mb-12">
          <img
            src={CARTEL_TRAMITES}
            alt="Trámites puntuales - sin cuotas"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Lo que NO hacemos */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3
            className="text-2xl font-extrabold text-slate-800 text-center mb-6"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Lo que <span className="text-red-600">NO</span> hacemos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-slate-600 mb-4 text-base">
                <strong>Trámite Claro es una plataforma de asistencia administrativa puntual.</strong> No somos gestoría ni asesoría fiscal.
              </p>
              <ul className="space-y-3">
                {[
                  "No hacemos declaraciones de impuestos",
                  "No somos asesores fiscales",
                  "No hacemos asesoría legal",
                  "No gestionamos nóminas",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xs">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={CARTEL_QUE_NO_HACEMOS}
                alt="Lo que no hacemos en Trámite Claro"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
