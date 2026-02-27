// Trámite Claro — Testimonials Section
// Design: Warm Professionalism — cards de reseñas con estrellas, nombre y servicio usado
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    location: "Madrid",
    service: "Cita Hacienda",
    rating: 5,
    text: "Llevaba semanas intentando pedir cita en Hacienda sin éxito. En Trámite Claro me lo resolvieron en menos de una hora. Me explicaron todo paso a paso y el precio fue exactamente el que me dijeron antes de empezar. ¡Muy recomendable!",
    avatar: "MG",
    color: "bg-blue-600",
  },
  {
    name: "Antonio Ruiz",
    location: "Barcelona",
    service: "Certificado Digital",
    rating: 5,
    text: "Necesitaba el certificado digital urgente para un trámite y no sabía ni por dónde empezar. Me guiaron en todo el proceso de forma muy clara. Sin tecnicismos, sin complicaciones. Servicio excelente.",
    avatar: "AR",
    color: "bg-green-600",
  },
  {
    name: "Carmen López",
    location: "Valencia",
    service: "Cita SEPE",
    rating: 5,
    text: "Me quedé sin trabajo y necesitaba pedir el paro. La web del SEPE es un laberinto. Gracias a Trámite Claro conseguí la cita rápidamente y me explicaron qué documentación llevar. Me ahorré mucho tiempo y estrés.",
    avatar: "CL",
    color: "bg-purple-600",
  },
  {
    name: "José Martínez",
    location: "Sevilla",
    service: "Notificación Hacienda",
    rating: 5,
    text: "Recibí una carta de Hacienda y me entró el pánico. Contacté con Trámite Claro y me explicaron exactamente qué era y qué tenía que hacer. Tranquilidad total. Muy profesionales y cercanos.",
    avatar: "JM",
    color: "bg-orange-600",
  },
  {
    name: "Laura Sánchez",
    location: "Bilbao",
    service: "Cita Seguridad Social",
    rating: 5,
    text: "Necesitaba gestionar una baja médica y no sabía cómo pedir cita en la Seguridad Social online. Me lo gestionaron ellos directamente. Rápido, eficaz y al precio acordado. Repetiré sin duda.",
    avatar: "LS",
    color: "bg-teal-600",
  },
  {
    name: "Pedro Fernández",
    location: "Zaragoza",
    service: "Trámites Online",
    rating: 5,
    text: "Soy mayor y la tecnología no es lo mío. Trámite Claro me ayudó con varios trámites online con mucha paciencia. Me explicaron todo con calma y sin hacerme sentir mal por no saber. Un servicio muy humano.",
    avatar: "PF",
    color: "bg-red-600",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Opiniones
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Personas reales que han resuelto sus trámites con nuestra ayuda.
          </p>
          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-4 bg-yellow-50 border border-yellow-200 px-5 py-3 rounded-full">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-extrabold text-slate-800 text-lg" style={{ fontFamily: "Nunito, sans-serif" }}>
              5.0
            </span>
            <span className="text-slate-500 text-sm">· Valoración media de clientes</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-blue-100">
                <Quote size={32} className="fill-blue-100" />
              </div>

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-5">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0`}
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm" style={{ fontFamily: "Nunito, sans-serif" }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.location} · <span className="text-blue-700 font-semibold">{t.service}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/34611972625?text=Hola,%20me%20gustaría%20información%20sobre%20vuestros%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Únete a nuestros clientes satisfechos
          </a>
        </div>
      </div>
    </section>
  );
}
