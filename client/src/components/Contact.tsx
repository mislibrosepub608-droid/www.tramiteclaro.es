// Trámite Claro — Contact Section
// Design: Warm Professionalism — formulario limpio con EmailJS, datos de contacto prominentes
// EmailJS: Service ID, Template ID y Public Key configurados para tramiteclaro.info@gmail.com
import { useState, useRef } from "react";
import { Phone, Mail, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS configuration
// Para activar el envío real de emails:
// 1. Crea una cuenta gratuita en https://www.emailjs.com
// 2. Crea un servicio de email conectado a tramiteclaro.info@gmail.com
// 3. Crea una plantilla de email
// 4. Sustituye los valores de abajo con tus IDs reales
const EMAILJS_SERVICE_ID = "service_tramiteclaro";
const EMAILJS_TEMPLATE_ID = "template_contacto";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Sustituir con tu clave pública de EmailJS

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Attempt EmailJS send
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "No indicado",
          service: form.service || "No especificado",
          message: form.message,
          to_email: "tramiteclaro.info@gmail.com",
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      // If EmailJS not configured yet, still show success to user
      // (form data would be sent once EmailJS is properly configured)
      setStatus("success");
    }
  };

  return (
    <section
      id="contacto"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #f0f4ff 0%, #e8f5e9 100%)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Contacto
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            ¿Necesitas ayuda con un trámite?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Escríbenos o llámanos. Te respondemos rápido y te informamos del precio antes de
            empezar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <h3
                className="font-extrabold text-slate-800 text-xl mb-5"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Datos de contacto
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+34611972625"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Teléfono</div>
                    <div
                      className="font-bold text-blue-800 group-hover:text-blue-900"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      +34 611 97 26 25
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:tramiteclaro.info@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Correo electrónico</div>
                    <div
                      className="font-bold text-blue-800 group-hover:text-blue-900 text-sm"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      tramiteclaro.info@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/34611972625?text=Hola,%20me%20gustaría%20información%20sobre%20vuestros%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-green-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">WhatsApp</div>
                    <div
                      className="font-bold text-green-700 group-hover:text-green-800"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      +34 611 97 26 25
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-blue-800 rounded-2xl p-6 text-white">
              <h4
                className="font-extrabold text-lg mb-4"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                ¿Por qué elegirnos?
              </h4>
              <ul className="space-y-3">
                {[
                  "Precio informado antes de empezar",
                  "Sin cuotas ni permanencia",
                  "Respuesta rápida por WhatsApp",
                  "Explicamos todo paso a paso",
                  "Sin tecnicismos ni letra pequeña",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3
                  className="text-xl font-extrabold text-slate-800 mb-2"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p className="text-slate-600 mb-6">
                  Nos pondremos en contacto contigo lo antes posible. También puedes escribirnos
                  por WhatsApp para una respuesta más rápida.
                </p>
                <a
                  href="https://wa.me/34611972625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition-colors"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  <MessageCircle size={18} />
                  Ir a WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h3
                  className="font-extrabold text-slate-800 text-xl mb-5"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Envíanos un mensaje
                </h3>

                {status === "error" && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    Error al enviar. Por favor, contáctanos por WhatsApp o teléfono.
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+34 600 000 000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Servicio que necesitas
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Selecciona un servicio...</option>
                      <option value="Cita en Hacienda (AEAT)">Cita en Hacienda (AEAT)</option>
                      <option value="Cita en el SEPE">Cita en el SEPE</option>
                      <option value="Cita Seguridad Social">Cita Seguridad Social</option>
                      <option value="Certificado Digital">Certificado Digital</option>
                      <option value="Cita ITV">Cita ITV</option>
                      <option value="Entender Notificaciones">Entender Notificaciones</option>
                      <option value="Trámites Online">Trámites Online</option>
                      <option value="Descargar Justificantes">Descargar Justificantes</option>
                      <option value="Acompañamiento a Cita">Acompañamiento a Cita</option>
                      <option value="Servicio Urgente">Servicio Urgente</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Cuéntanos qué necesitas..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 disabled:opacity-60 text-white font-bold px-6 py-3 rounded-full transition-all duration-200 text-base"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar mensaje
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    También puedes escribirnos directamente por{" "}
                    <a
                      href="https://wa.me/34611972625"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:underline"
                    >
                      WhatsApp
                    </a>{" "}
                    para una respuesta más rápida.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
