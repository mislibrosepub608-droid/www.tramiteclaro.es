// Trámite Claro — Footer
// Design: Warm Professionalism — footer azul oscuro, datos de contacto, aviso legal
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/tIvreRhgxQlcutnT.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Cita en Hacienda (AEAT)",
  "Cita en el SEPE",
  "Cita Seguridad Social",
  "Certificado Digital",
  "Cita ITV",
  "Trámites Online",
  "Entender Notificaciones",
  "Servicio Urgente",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Trámite Claro"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Asistencia administrativa puntual. Te ayudamos con tus trámites de forma clara y sencilla. Sin cuotas, sin permanencia.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-900/50 border border-green-700/50 text-green-400 px-3 py-2 rounded-lg text-xs font-bold">
              ✅ Precio informado antes de empezar
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: "Nunito, sans-serif" }}>
              Navegación
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: "Nunito, sans-serif" }}>
              Servicios
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: "Nunito, sans-serif" }}>
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+34611972625"
                className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group"
              >
                <Phone size={16} className="text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                +34 611 97 26 25
              </a>
              <a
                href="mailto:tramiteclaro.info@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group"
              >
                <Mail size={16} className="text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                tramiteclaro.info@gmail.com
              </a>
              <a
                href="https://wa.me/34611972625?text=Hola,%20me%20gustaría%20información%20sobre%20vuestros%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group"
              >
                <MessageCircle size={16} className="text-green-400 group-hover:text-green-300 flex-shrink-0" />
                WhatsApp disponible
              </a>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/34611972625?text=Hola,%20me%20gustaría%20información%20sobre%20vuestros%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2.5 rounded-full text-sm transition-colors duration-200"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              <MessageCircle size={16} />
              Escríbenos ahora
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            © {year} Trámite Claro. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <Link href="/aviso-legal">
              <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Aviso Legal</span>
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/politica-privacidad">
              <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Política de Privacidad</span>
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/politica-cookies">
              <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Política de Cookies</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
