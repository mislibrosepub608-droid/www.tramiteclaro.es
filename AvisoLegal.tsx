// Trámite Claro — Aviso Legal
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/tIvreRhgxQlcutnT.png";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
          Aviso Legal
        </h1>
        <p className="text-slate-500 text-sm mb-8">Última actualización: febrero de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8" style={{ fontFamily: "Source Sans 3, sans-serif" }}>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              1. Identificación del titular
            </h2>
            <p className="text-slate-600 leading-relaxed">
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa que el presente sitio web es titularidad de <strong>Trámite Claro</strong>, plataforma de asistencia administrativa puntual.
            </p>
            <div className="bg-slate-50 rounded-xl p-5 mt-4 space-y-2 text-sm text-slate-700">
              <p><strong>Denominación:</strong> Trámite Claro</p>
              <p><strong>Actividad:</strong> Asistencia administrativa puntual</p>
              <p><strong>Teléfono:</strong> +34 611 97 26 25</p>
              <p><strong>Correo electrónico:</strong> tramiteclaro.info@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              2. Objeto y ámbito de aplicación
            </h2>
            <p className="text-slate-600 leading-relaxed">
              El presente Aviso Legal regula el acceso y uso del sitio web de Trámite Claro, así como los servicios de asistencia administrativa puntual prestados a través del mismo. El acceso y uso de este sitio web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              3. Naturaleza del servicio
            </h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>Trámite Claro es una plataforma de asistencia administrativa puntual.</strong> No es una gestoría, ni una asesoría fiscal, ni un despacho de abogados. Los servicios prestados consisten exclusivamente en:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 mt-3">
              <li>Orientación y acompañamiento en la solicitud de citas con organismos públicos</li>
              <li>Explicación de notificaciones administrativas en términos comprensibles</li>
              <li>Guía en la realización de trámites online con la administración</li>
              <li>Descarga e impresión de justificantes y documentos oficiales</li>
              <li>Localización de números de teléfono y recursos de emergencia</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Trámite Claro <strong>no realiza</strong> declaraciones de impuestos, asesoramiento fiscal, asesoramiento legal, gestión de nóminas ni ningún otro servicio que requiera habilitación profesional específica.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              4. Propiedad intelectual e industrial
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño gráfico, código fuente, etc.) son propiedad de Trámite Claro o de sus respectivos titulares, y están protegidos por la normativa vigente en materia de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              5. Exclusión de responsabilidad
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Trámite Claro no se hace responsable de los daños y perjuicios que pudieran derivarse de:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 mt-3">
              <li>La interrupción, fallo o indisponibilidad del sitio web</li>
              <li>Los errores u omisiones en los contenidos del sitio web</li>
              <li>La presencia de virus u otros elementos dañinos</li>
              <li>El uso indebido del sitio web por parte del usuario</li>
              <li>Las decisiones tomadas por el usuario basándose en la información del sitio web</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              La información publicada en este sitio web tiene carácter meramente orientativo y no constituye asesoramiento legal, fiscal ni de ningún otro tipo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              6. Política de precios
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Los precios indicados en el sitio web son orientativos. <strong>Trámite Claro se compromete a informar al cliente del precio exacto antes de iniciar cualquier gestión.</strong> No se realizará ningún cargo sin el previo conocimiento y consentimiento expreso del cliente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              7. Legislación aplicable y jurisdicción
            </h2>
            <p className="text-slate-600 leading-relaxed">
              El presente Aviso Legal se rige por la legislación española vigente. Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten a los Juzgados y Tribunales competentes conforme a la legislación española.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              8. Modificaciones
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Trámite Claro se reserva el derecho a modificar el presente Aviso Legal en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web. Se recomienda revisar periódicamente este documento.
            </p>
          </section>

        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6 mt-12">
        <div className="container text-center text-sm">
          <p>© {new Date().getFullYear()} Trámite Claro · <Link href="/politica-privacidad"><span className="hover:text-white cursor-pointer">Política de Privacidad</span></Link> · <Link href="/politica-cookies"><span className="hover:text-white cursor-pointer">Política de Cookies</span></Link></p>
        </div>
      </footer>
    </div>
  );
}
