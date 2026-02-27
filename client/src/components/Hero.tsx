// Trámite Claro — Hero Section
// Design: Warm Professionalism — gradiente azul-verde, diagonal inferior, badges de confianza
import { CheckCircle, MessageCircle, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-24 pb-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #15803d 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <CheckCircle size={16} className="text-green-300" />
            Sin cuotas mensuales · Sin permanencia
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Tus trámites,{" "}
            <span className="text-green-300">resueltos</span>
            <br />de forma clara y sencilla
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 mb-4 leading-relaxed" style={{ fontFamily: "Source Sans 3, sans-serif" }}>
            Te ayudamos con tus gestiones administrativas paso a paso.
            <br />
            <strong className="text-white">Pagas solo por lo que necesitas.</strong>
          </p>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/30 border border-green-400/50 text-green-100 px-5 py-2 rounded-full text-sm font-bold mb-8">
            ✅ Siempre te informamos del precio antes de empezar
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/34611972625?text=Hola,%20me%20gustaría%20información%20sobre%20vuestros%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              <MessageCircle size={20} />
              Escríbenos por WhatsApp
            </a>
            <a
              href="#contacto"
              className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border-2 border-white/60 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              <Phone size={20} />
              Solicitar información
            </a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            {[
              { value: "100%", label: "Precio informado antes" },
              { value: "Sin cuotas", label: "Pagas solo lo que usas" },
              { value: "Inmediato", label: "Respuesta rápida" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-white" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diagonal bottom */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        style={{ height: "60px" }}
      >
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <polygon points="0,60 1200,0 1200,60" fill="white" />
        </svg>
      </div>
    </section>
  );
}
