// Trámite Claro — Política de Privacidad
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/tIvreRhgxQlcutnT.png";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-800 py-6">
        <div className="container flex items-center gap-4">
          <Link href="/">
            <img src={LOGO_URL} alt="Trámite Claro" className="h-10 w-auto object-contain brightness-0 invert" />
          </Link>
        </div>
      </header>

      <main className="container py-12 max-w-3xl mx-auto">
        <Link href="/">
          <span className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold text-sm mb-8 cursor-pointer transition-colors">
            <ArrowLeft size={16} />
            Volver al inicio
          </span>
        </Link>

        <h1
          className="text-3xl font-extrabold text-slate-800 mb-2"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Política de Privacidad
        </h1>
        <p className="text-slate-500 text-sm mb-8">Última actualización: febrero de 2026</p>

        <div className="space-y-8" style={{ fontFamily: "Source Sans 3, sans-serif" }}>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              1. Responsable del tratamiento
            </h2>
            <div className="bg-slate-50 rounded-xl p-5 space-y-2 text-sm text-slate-700">
              <p><strong>Denominación:</strong> Trámite Claro</p>
              <p><strong>Actividad:</strong> Asistencia administrativa puntual</p>
              <p><strong>Teléfono:</strong> +34 611 97 26 25</p>
              <p><strong>Correo electrónico:</strong> tramiteclaro.info@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              2. Datos que recopilamos
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Trámite Claro recopila los siguientes datos personales a través del formulario de contacto y las comunicaciones con los usuarios:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono (opcional)</li>
              <li>Tipo de servicio solicitado</li>
              <li>Contenido del mensaje enviado</li>
              <li>Datos de navegación (mediante cookies, con tu consentimiento)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              3. Finalidad del tratamiento
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Los datos personales recogidos se utilizan para las siguientes finalidades:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li><strong>Atención al cliente:</strong> responder a consultas y solicitudes de información sobre nuestros servicios.</li>
              <li><strong>Prestación del servicio:</strong> gestionar y ejecutar los servicios de asistencia administrativa contratados.</li>
              <li><strong>Comunicaciones comerciales:</strong> únicamente con tu consentimiento expreso, enviarte información sobre nuestros servicios.</li>
              <li><strong>Mejora del servicio:</strong> analizar el uso del sitio web para mejorar la experiencia del usuario (con tu consentimiento para cookies analíticas).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              4. Base legal del tratamiento
            </h2>
            <p className="text-slate-600 leading-relaxed">
              El tratamiento de tus datos se basa en las siguientes bases legales conforme al Reglamento General de Protección de Datos (RGPD):
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-3">
              <li><strong>Ejecución de un contrato:</strong> para la prestación de los servicios solicitados.</li>
              <li><strong>Consentimiento:</strong> para el envío de comunicaciones comerciales y el uso de cookies no esenciales.</li>
              <li><strong>Interés legítimo:</strong> para la atención de consultas y la mejora de nuestros servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              5. Conservación de los datos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Los datos personales se conservarán durante el tiempo necesario para la prestación del servicio y, posteriormente, durante los plazos legalmente establecidos para atender posibles responsabilidades. Los datos de contacto de usuarios que no contraten ningún servicio se eliminarán en un plazo máximo de 12 meses desde la última comunicación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              6. Cesión de datos a terceros
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Trámite Claro no cede ni vende datos personales a terceros, salvo en los siguientes casos:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 mt-3">
              <li>Cuando sea necesario para la prestación del servicio contratado (p. ej., plataformas de envío de email como EmailJS).</li>
              <li>Cuando exista obligación legal de comunicarlos a las autoridades competentes.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Los proveedores de servicios que acceden a datos personales están sujetos a acuerdos de confidencialidad y cumplen con la normativa de protección de datos vigente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              7. Tus derechos
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              De acuerdo con el RGPD y la LOPDGDD, tienes derecho a:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li><strong>Acceso:</strong> conocer qué datos personales tratamos sobre ti.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos.</li>
              <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
              <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin que afecte a la licitud del tratamiento previo.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Para ejercer estos derechos, puedes contactarnos en <strong>tramiteclaro.info@gmail.com</strong> o por teléfono al <strong>+34 611 97 26 25</strong>. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              8. Seguridad de los datos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Trámite Claro adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              9. Modificaciones de la política de privacidad
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Trámite Claro se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. Los cambios serán publicados en esta página con indicación de la fecha de actualización.
            </p>
          </section>

        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6 mt-12">
        <div className="container text-center text-sm">
          <p>© {new Date().getFullYear()} Trámite Claro · <Link href="/aviso-legal"><span className="hover:text-white cursor-pointer">Aviso Legal</span></Link> · <Link href="/politica-cookies"><span className="hover:text-white cursor-pointer">Política de Cookies</span></Link></p>
        </div>
      </footer>
    </div>
  );
}
