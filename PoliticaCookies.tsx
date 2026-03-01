// Trámite Claro — Política de Cookies
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/tIvreRhgxQlcutnT.png";

export default function PoliticaCookies() {
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
          Política de Cookies
        </h1>
        <p className="text-slate-500 text-sm mb-8">Última actualización: febrero de 2026</p>

        <div className="space-y-8" style={{ fontFamily: "Source Sans 3, sans-serif" }}>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              1. ¿Qué son las cookies?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Permiten que el sitio web recuerde tus acciones y preferencias durante un período de tiempo, para que no tengas que volver a introducirlas cada vez que visites el sitio o navegues de una página a otra.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              2. Tipos de cookies que utilizamos
            </h2>

            <div className="space-y-4">
              <div className="border border-green-200 bg-green-50 rounded-xl p-5">
                <h3 className="font-bold text-green-800 mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  Cookies necesarias (siempre activas)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Son imprescindibles para el funcionamiento básico del sitio web. Sin ellas, el sitio no puede funcionar correctamente. No requieren tu consentimiento.
                </p>
                <table className="w-full text-xs text-slate-600 border-collapse">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="text-left p-2 font-bold">Cookie</th>
                      <th className="text-left p-2 font-bold">Finalidad</th>
                      <th className="text-left p-2 font-bold">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-green-200">
                      <td className="p-2">tramiteclaro_cookie_consent</td>
                      <td className="p-2">Guarda tus preferencias de cookies</td>
                      <td className="p-2">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  Cookies analíticas (requieren consentimiento)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Nos permiten contar las visitas y fuentes de tráfico para medir y mejorar el rendimiento del sitio web. Toda la información que recopilan es agregada y, por tanto, anónima.
                </p>
                <table className="w-full text-xs text-slate-600 border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="text-left p-2 font-bold">Cookie</th>
                      <th className="text-left p-2 font-bold">Proveedor</th>
                      <th className="text-left p-2 font-bold">Finalidad</th>
                      <th className="text-left p-2 font-bold">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-blue-200">
                      <td className="p-2">_umami</td>
                      <td className="p-2">Umami Analytics</td>
                      <td className="p-2">Análisis de visitas anónimo</td>
                      <td className="p-2">Sesión</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-orange-200 bg-orange-50 rounded-xl p-5">
                <h3 className="font-bold text-orange-800 mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  Cookies de marketing (requieren consentimiento)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Actualmente, Trámite Claro no utiliza cookies de marketing de terceros. Esta categoría está prevista para un uso futuro y solo se activará con tu consentimiento expreso.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              3. Cómo gestionar tus preferencias de cookies
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Puedes gestionar tus preferencias de cookies de las siguientes formas:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>
                <strong>Panel de cookies de la web:</strong> Al acceder por primera vez al sitio web, aparece un banner que te permite aceptar todas las cookies, rechazar las no esenciales o personalizar tu elección.
              </li>
              <li>
                <strong>Configuración del navegador:</strong> Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que esto puede afectar al funcionamiento del sitio web.
              </li>
            </ul>

            <div className="bg-slate-50 rounded-xl p-5 mt-4">
              <p className="text-slate-700 text-sm font-semibold mb-2">Cómo gestionar cookies en los principales navegadores:</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• <strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                <li>• <strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                <li>• <strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                <li>• <strong>Microsoft Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              4. Cookies de terceros
            </h2>
            <p className="text-slate-600 leading-relaxed">
              El sitio web puede incluir funcionalidades de terceros (como botones de WhatsApp o herramientas de análisis) que pueden instalar sus propias cookies. Trámite Claro no controla estas cookies de terceros. Para más información, consulta las políticas de privacidad de dichos terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              5. Actualizaciones de esta política
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Trámite Claro puede actualizar esta Política de Cookies para reflejar cambios en las cookies utilizadas o en la normativa aplicable. Se recomienda revisar periódicamente esta página para estar informado sobre el uso de cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              6. Contacto
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Si tienes alguna pregunta sobre nuestra Política de Cookies, puedes contactarnos en:
            </p>
            <div className="bg-slate-50 rounded-xl p-5 mt-3 space-y-2 text-sm text-slate-700">
              <p><strong>Email:</strong> tramiteclaro.info@gmail.com</p>
              <p><strong>Teléfono:</strong> +34 611 97 26 25</p>
            </div>
          </section>

        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6 mt-12">
        <div className="container text-center text-sm">
          <p>© {new Date().getFullYear()} Trámite Claro · <Link href="/aviso-legal"><span className="hover:text-white cursor-pointer">Aviso Legal</span></Link> · <Link href="/politica-privacidad"><span className="hover:text-white cursor-pointer">Política de Privacidad</span></Link></p>
        </div>
      </footer>
    </div>
  );
}
