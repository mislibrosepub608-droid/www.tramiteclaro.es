// Trámite Claro — Blog Section
// Design: Warm Professionalism — cards de blog con emoji, categoría, fecha y modal de lectura completa
import { useState } from "react";
import { ArrowRight, Calendar, Tag, X, ChevronDown } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    category: "Hacienda",
    categoryColor: "bg-blue-100 text-blue-800",
    date: "20 Feb 2026",
    title: "¿Cómo pedir cita en Hacienda (AEAT) paso a paso?",
    excerpt:
      "Muchas personas no saben cómo solicitar una cita en la Agencia Tributaria. Te explicamos el proceso completo de forma sencilla.",
    content: `## ¿Cómo pedir cita en Hacienda (AEAT) paso a paso?

Solicitar una cita en la Agencia Tributaria puede parecer complicado, pero siguiendo estos pasos es muy sencillo.

### Paso 1: Accede a la web de la AEAT
Entra en sede.agenciatributaria.gob.es desde tu navegador.

### Paso 2: Busca "Cita previa"
En el menú principal, busca la opción "Cita previa" o "Gestiones, trámites y servicios".

### Paso 3: Selecciona el trámite
Elige el motivo de tu visita: renta, IVA, certificados, etc.

### Paso 4: Introduce tus datos
Necesitarás tu DNI/NIE y número de teléfono.

### Paso 5: Elige fecha y hora
Selecciona la oficina más cercana y el horario que mejor te venga.

### Paso 6: Confirma la cita
Recibirás un SMS o email de confirmación.

---

**¿Tienes dudas o problemas?** En Trámite Claro te ayudamos a gestionar tu cita en Hacienda sin complicaciones. Contáctanos por WhatsApp al +34 611 97 26 25.`,
    readTime: "3 min",
    emoji: "🏛️",
  },
  {
    id: 2,
    category: "Certificado Digital",
    categoryColor: "bg-green-100 text-green-800",
    date: "15 Feb 2026",
    title: "Cómo obtener el Certificado Digital: guía completa 2026",
    excerpt:
      "El certificado digital es imprescindible para realizar trámites online con la administración. Te explicamos cómo obtenerlo.",
    content: `## Cómo obtener el Certificado Digital: guía completa 2026

El certificado digital te permite realizar gestiones con la administración pública desde casa, sin colas ni desplazamientos.

### ¿Qué es el certificado digital?
Es un documento electrónico que acredita tu identidad ante la administración pública. Con él puedes hacer la declaración de la renta, consultar tu vida laboral, pedir prestaciones y mucho más.

### Opciones para obtenerlo

**Opción 1: FNMT (Fábrica Nacional de Moneda y Timbre)**
Solicita el certificado en www.sede.fnmt.gob.es, acredita tu identidad en una oficina y descarga e instala el certificado.

**Opción 2: DNI electrónico**
Si tienes un lector de tarjetas, puedes usar tu DNIe directamente.

**Opción 3: Cl@ve PIN**
Para trámites puntuales, puedes usar el sistema Cl@ve sin necesidad de certificado.

### Documentación necesaria
- DNI o NIE en vigor
- Correo electrónico
- Ordenador con conexión a internet

---

**¿Necesitas ayuda?** En Trámite Claro te guiamos en todo el proceso. Contáctanos al +34 611 97 26 25.`,
    readTime: "5 min",
    emoji: "🔐",
  },
  {
    id: 3,
    category: "SEPE",
    categoryColor: "bg-purple-100 text-purple-800",
    date: "10 Feb 2026",
    title: "Cómo pedir cita en el SEPE: todo lo que necesitas saber",
    excerpt:
      "¿Necesitas gestionar una prestación por desempleo o renovar tu demanda de empleo? Te explicamos cómo pedir cita en el SEPE.",
    content: `## Cómo pedir cita en el SEPE: todo lo que necesitas saber

El SEPE (Servicio Público de Empleo Estatal) gestiona las prestaciones por desempleo y las demandas de empleo en España.

### ¿Cuándo necesito ir al SEPE?
- Para solicitar la prestación por desempleo (paro)
- Para renovar la demanda de empleo
- Para consultar el estado de tu expediente
- Para modificar tus datos personales

### Cómo pedir cita online
Entra en sede.sepe.gob.es, haz clic en "Cita previa", selecciona tu provincia y la oficina más cercana, elige el trámite, introduce tu DNI/NIE y teléfono, y selecciona fecha y hora disponible.

### Documentación que debes llevar
- DNI o NIE en vigor
- Número de cuenta bancaria (IBAN)
- Certificado de empresa (si solicitas el paro)
- Vida laboral actualizada

---

**¿Tienes problemas para pedir la cita?** En Trámite Claro te lo gestionamos. Escríbenos por WhatsApp al +34 611 97 26 25.`,
    readTime: "4 min",
    emoji: "💼",
  },
  {
    id: 4,
    category: "Notificaciones",
    categoryColor: "bg-orange-100 text-orange-800",
    date: "5 Feb 2026",
    title: "He recibido una notificación de Hacienda: ¿qué hago?",
    excerpt:
      "Recibir una carta de la Agencia Tributaria puede generar angustia. Te explicamos qué tipos existen y cómo actuar.",
    content: `## He recibido una notificación de Hacienda: ¿qué hago?

Recibir una notificación de la Agencia Tributaria puede generar preocupación, pero no siempre es algo negativo. Lo importante es entender qué tipo de notificación es y actuar a tiempo.

### Tipos de notificaciones más comunes

**1. Requerimiento de información**
Hacienda te pide que aportes documentación o aclaraciones. Tienes un plazo para responder (generalmente 10 días hábiles).

**2. Propuesta de liquidación**
Hacienda considera que debes pagar más impuestos. Puedes aceptarla o presentar alegaciones.

**3. Notificación informativa**
Te informan de cambios en tu situación fiscal. No requiere acción inmediata.

**4. Embargo o sanción**
Son las más graves. Requieren atención urgente.

### ¿Qué debo hacer?
No ignores la notificación, lee con atención el tipo y el plazo, reúne la documentación solicitada y actúa dentro del plazo para evitar recargos.

---

**¿No entiendes tu notificación?** Contáctanos y te lo explicamos. WhatsApp: +34 611 97 26 25.`,
    readTime: "4 min",
    emoji: "📬",
  },
  {
    id: 5,
    category: "ITV",
    categoryColor: "bg-red-100 text-red-800",
    date: "28 Ene 2026",
    title: "Cómo pedir cita para la ITV en tu provincia",
    excerpt:
      "La ITV es obligatoria para todos los vehículos. Te explicamos cómo solicitar cita de forma online en cualquier provincia de España.",
    content: `## Cómo pedir cita para la ITV en tu provincia

La Inspección Técnica de Vehículos (ITV) es obligatoria y su periodicidad depende de la antigüedad y tipo de tu vehículo.

### ¿Con qué frecuencia debo pasar la ITV?
- Vehículos nuevos: primera ITV a los 4 años
- Entre 4 y 10 años: cada 2 años
- Más de 10 años: cada año

### Cómo pedir cita online
La forma de pedir cita varía según la comunidad autónoma. Busca la estación ITV más cercana, accede a su web oficial, selecciona "Cita previa", introduce la matrícula y datos del vehículo y elige fecha y hora.

### Documentación necesaria
- Permiso de circulación
- Ficha técnica del vehículo
- DNI del titular
- Seguro en vigor

---

**¿Tienes problemas para pedir la cita?** En Trámite Claro te enseñamos paso a paso. Escríbenos al +34 611 97 26 25.`,
    readTime: "3 min",
    emoji: "🚗",
  },
  {
    id: 6,
    category: "Seguridad Social",
    categoryColor: "bg-teal-100 text-teal-800",
    date: "22 Ene 2026",
    title: "Cómo consultar y descargar tu vida laboral",
    excerpt:
      "La vida laboral es un documento esencial para solicitar prestaciones, jubilación o conocer tu historial de cotizaciones.",
    content: `## Cómo consultar y descargar tu vida laboral

El informe de vida laboral recoge todos los períodos en los que has cotizado a la Seguridad Social.

### ¿Para qué sirve?
- Solicitar la prestación por desempleo
- Calcular la pensión de jubilación
- Acreditar experiencia laboral
- Trámites de extranjería

### Cómo obtenerla online
Con certificado digital o Cl@ve: entra en sede.seg-social.gob.es, busca "Informe de vida laboral", identifícate y descarga el PDF.

Sin certificado digital: llama al 901 50 20 50 o pídela en cualquier oficina de la Seguridad Social.

---

**¿Necesitas ayuda para descargar tu vida laboral?** En Trámite Claro te lo gestionamos. WhatsApp: +34 611 97 26 25.`,
    readTime: "3 min",
    emoji: "📊",
  },
  {
    id: 7,
    category: "Empadronamiento",
    categoryColor: "bg-indigo-100 text-indigo-800",
    date: "18 Ene 2026",
    title: "Cómo empadronarse: guía paso a paso",
    excerpt:
      "El empadronamiento es obligatorio y necesario para acceder a numerosos servicios públicos. Te explicamos cómo hacerlo.",
    content: `## Cómo empadronarse: guía paso a paso

El padrón municipal es el registro administrativo donde constan los vecinos de un municipio. Estar empadronado es obligatorio y necesario para acceder a muchos servicios públicos.

### ¿Para qué sirve el empadronamiento?
- Acceder a servicios sanitarios y educativos
- Solicitar ayudas y subvenciones
- Votar en las elecciones municipales
- Trámites de extranjería y nacionalidad
- Obtener el DNI o NIE

### Cómo empadronarse
**Presencialmente:** Acude al Ayuntamiento de tu municipio con la documentación necesaria.

**Online:** Muchos ayuntamientos permiten el trámite online a través de su sede electrónica (necesitas certificado digital o Cl@ve).

### Documentación necesaria
- DNI, NIE o pasaporte en vigor
- Contrato de alquiler o escritura de propiedad
- En caso de alojarse con otra persona: autorización del titular y su DNI

### Certificado de empadronamiento
Una vez empadronado, puedes solicitar el certificado de empadronamiento cuando lo necesites. Tiene validez de 3 meses.

---

**¿Necesitas ayuda con el empadronamiento?** Contáctanos al +34 611 97 26 25.`,
    readTime: "4 min",
    emoji: "🏠",
  },
  {
    id: 8,
    category: "DNI / NIE",
    categoryColor: "bg-cyan-100 text-cyan-800",
    date: "12 Ene 2026",
    title: "Renovación del DNI: cuándo y cómo hacerlo",
    excerpt:
      "¿Tu DNI está caducado o próximo a caducar? Te explicamos cuándo debes renovarlo y cómo pedir cita en la Policía Nacional.",
    content: `## Renovación del DNI: cuándo y cómo hacerlo

El Documento Nacional de Identidad (DNI) es el documento de identificación oficial en España. Renovarlo a tiempo evita problemas en trámites y viajes.

### ¿Cuándo caduca el DNI?
- Menores de 5 años: caduca a los 2 años
- Entre 5 y 30 años: caduca a los 5 años
- Mayores de 30 años: caduca a los 10 años
- Mayores de 70 años: no caduca

### Cómo pedir cita para renovar el DNI
Entra en citapreviadnie.es, selecciona tu provincia y la comisaría más cercana, elige fecha y hora disponible y confirma la cita.

### Documentación necesaria
- DNI caducado o próximo a caducar
- Fotografía reciente en color (32x26mm, fondo blanco)
- Tasas abonadas (actualmente 12€, exento si es primera vez o por robo/extravío)

### Consejos
- Pide la cita con al menos 2-3 semanas de antelación
- El DNI se entrega en el momento (en la mayoría de comisarías)
- Puedes renovar el DNI aunque no esté caducado

---

**¿Necesitas ayuda para pedir la cita?** En Trámite Claro te lo gestionamos. WhatsApp: +34 611 97 26 25.`,
    readTime: "3 min",
    emoji: "🪪",
  },
  {
    id: 9,
    category: "Pensiones",
    categoryColor: "bg-amber-100 text-amber-800",
    date: "8 Ene 2026",
    title: "¿Cómo solicitar la pensión de jubilación?",
    excerpt:
      "La solicitud de jubilación requiere cumplir ciertos requisitos y seguir un proceso específico. Te lo explicamos de forma clara.",
    content: `## ¿Cómo solicitar la pensión de jubilación?

La pensión de jubilación es una prestación económica de la Seguridad Social para quienes han alcanzado la edad legal de jubilación y han cotizado el tiempo mínimo requerido.

### Requisitos para jubilarse en 2026
- Edad ordinaria de jubilación: 66 años y 8 meses (o 65 años con 38 años y 3 meses cotizados)
- Cotización mínima: 15 años (2 de los últimos 15 antes de jubilarse)

### Cómo solicitar la jubilación
Puedes solicitarla de tres formas:
- Online: a través de la sede electrónica de la Seguridad Social (con certificado digital)
- Presencialmente: en cualquier Centro de Atención e Información de la Seguridad Social (CAISS)
- Por correo: enviando la solicitud y documentación por correo certificado

### Documentación necesaria
- DNI o NIE en vigor
- Número de cuenta bancaria (IBAN)
- Historial laboral (vida laboral)
- Certificados de empresa de los últimos empleadores

### ¿Cuándo presentar la solicitud?
Se recomienda presentarla con 3 meses de antelación a la fecha prevista de jubilación. La pensión se cobra desde el día siguiente al cese de la actividad.

---

**¿Necesitas ayuda para gestionar tu jubilación?** Contáctanos al +34 611 97 26 25.`,
    readTime: "5 min",
    emoji: "👴",
  },
  {
    id: 10,
    category: "Extranjería",
    categoryColor: "bg-rose-100 text-rose-800",
    date: "3 Ene 2026",
    title: "NIE: qué es, para qué sirve y cómo obtenerlo",
    excerpt:
      "El NIE es el número de identificación para extranjeros en España. Es imprescindible para trabajar, comprar un coche o abrir una cuenta bancaria.",
    content: `## NIE: qué es, para qué sirve y cómo obtenerlo

El Número de Identificación de Extranjero (NIE) es el documento de identificación fiscal para ciudadanos extranjeros en España.

### ¿Para qué necesitas el NIE?
- Trabajar en España
- Abrir una cuenta bancaria
- Comprar o alquilar un inmueble
- Comprar un vehículo
- Pagar impuestos
- Realizar trámites con la administración

### ¿Quién puede solicitarlo?
Cualquier ciudadano extranjero que necesite relacionarse con la administración española o realizar actividades económicas en España.

### Cómo solicitar el NIE
**Desde España:**
- Pide cita previa en la Oficina de Extranjería o Comisaría de Policía
- Rellena el formulario EX-15
- Presenta la documentación requerida

**Desde el extranjero:**
- Puedes solicitarlo en el Consulado español de tu país

### Documentación necesaria
- Pasaporte en vigor (original y copia)
- Formulario EX-15 cumplimentado
- Justificante del motivo de la solicitud
- Tasas abonadas (modelo 790, código 012)

---

**¿Necesitas ayuda para obtener tu NIE?** En Trámite Claro te guiamos. WhatsApp: +34 611 97 26 25.`,
    readTime: "4 min",
    emoji: "🌍",
  },
  {
    id: 11,
    category: "Ayudas",
    categoryColor: "bg-lime-100 text-lime-800",
    date: "28 Dic 2025",
    title: "Ingreso Mínimo Vital: quién puede solicitarlo y cómo",
    excerpt:
      "El Ingreso Mínimo Vital es una prestación para personas en situación de vulnerabilidad económica. Te explicamos los requisitos y el proceso.",
    content: `## Ingreso Mínimo Vital: quién puede solicitarlo y cómo

El Ingreso Mínimo Vital (IMV) es una prestación de la Seguridad Social destinada a prevenir el riesgo de pobreza y exclusión social.

### ¿Quién puede solicitarlo?
- Personas de entre 23 y 65 años (o menores con hijos a cargo)
- Con residencia legal en España durante al menos 1 año
- Con ingresos y patrimonio por debajo de los límites establecidos
- No estar en situación de alta en la Seguridad Social (con excepciones)

### Cuantía del IMV en 2026
La cuantía varía según la composición de la unidad de convivencia:
- Persona sola: aproximadamente 604€/mes
- Con hijos o personas dependientes: cuantía mayor

### Cómo solicitarlo
- Online: a través de la sede electrónica de la Seguridad Social
- Por teléfono: llamando al 900 20 22 22
- Presencialmente: en cualquier oficina de la Seguridad Social

### Documentación necesaria
- DNI o NIE de todos los miembros de la unidad de convivencia
- Libro de familia (si hay hijos)
- Certificado de empadronamiento
- Datos bancarios (IBAN)

---

**¿Necesitas ayuda para solicitar el IMV?** Contáctanos al +34 611 97 26 25.`,
    readTime: "4 min",
    emoji: "💰",
  },
  {
    id: 12,
    category: "Sede Electrónica",
    categoryColor: "bg-sky-100 text-sky-800",
    date: "20 Dic 2025",
    title: "Cómo usar la Sede Electrónica sin complicaciones",
    excerpt:
      "La sede electrónica permite hacer trámites con la administración desde casa. Te explicamos cómo acceder y qué puedes hacer.",
    content: `## Cómo usar la Sede Electrónica sin complicaciones

La sede electrónica es el portal online de la administración pública española donde puedes realizar numerosos trámites sin salir de casa.

### ¿Qué puedes hacer en la sede electrónica?
- Presentar declaraciones y autoliquidaciones
- Consultar el estado de tus expedientes
- Recibir y firmar notificaciones
- Solicitar certificados y documentos
- Pedir citas previas
- Presentar recursos y alegaciones

### Cómo acceder
Para acceder a la mayoría de trámites necesitas identificarte con:
- **Certificado digital** (el más completo)
- **DNI electrónico** (necesitas lector de tarjetas)
- **Cl@ve PIN** (para trámites puntuales, más sencillo)
- **Cl@ve Permanente** (para uso habitual)

### Principales sedes electrónicas
- AEAT (Hacienda): sede.agenciatributaria.gob.es
- Seguridad Social: sede.seg-social.gob.es
- SEPE: sede.sepe.gob.es
- Administración General del Estado: sede.administracion.gob.es

### Consejos para evitar problemas
- Usa un navegador actualizado (Chrome o Firefox)
- Ten el certificado digital correctamente instalado
- Guarda siempre el justificante de cada trámite

---

**¿Tienes problemas con la sede electrónica?** En Trámite Claro te ayudamos. WhatsApp: +34 611 97 26 25.`,
    readTime: "4 min",
    emoji: "💻",
  },
];

const POSTS_PER_PAGE = 6;

function BlogModal({
  post,
  onClose,
}: {
  post: (typeof blogPosts)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-start justify-between">
          <div>
            <span
              className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${post.categoryColor} mb-2`}
            >
              {post.category}
            </span>
            <h2
              className="text-xl font-extrabold text-slate-800 pr-8"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              {post.emoji} {post.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <div
          className="px-6 py-6"
          style={{ fontFamily: "Source Sans 3, sans-serif" }}
        >
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## "))
              return (
                <h2
                  key={i}
                  className="text-2xl font-extrabold text-slate-800 mt-6 mb-3"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {line.replace("## ", "")}
                </h2>
              );
            if (line.startsWith("### "))
              return (
                <h3
                  key={i}
                  className="text-lg font-bold text-blue-800 mt-4 mb-2"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {line.replace("### ", "")}
                </h3>
              );
            if (line.startsWith("**") && line.endsWith("**"))
              return (
                <p key={i} className="font-bold text-slate-800 mt-3">
                  {line.replace(/\*\*/g, "")}
                </p>
              );
            if (line.startsWith("- "))
              return (
                <li key={i} className="text-slate-700 ml-4 mb-1">
                  {line.replace("- ", "")}
                </li>
              );
            if (line.match(/^\d+\./))
              return (
                <li key={i} className="text-slate-700 ml-4 mb-1">
                  {line.replace(/^\d+\. /, "")}
                </li>
              );
            if (line === "---")
              return <hr key={i} className="my-4 border-gray-200" />;
            if (line.trim() === "") return <br key={i} />;
            return (
              <p key={i} className="text-slate-700 leading-relaxed">
                {line}
              </p>
            );
          })}
        </div>
        <div className="px-6 pb-6">
          <a
            href="https://wa.me/34611972625?text=Hola,%20he%20leído%20vuestro%20blog%20y%20necesito%20ayuda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition-colors w-full"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            ¿Necesitas ayuda? Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = blogPosts.slice(0, visibleCount);
  const hasMore = visibleCount < blogPosts.length;

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Blog
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Guías y consejos sobre trámites
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Artículos prácticos para que entiendas tus gestiones administrativas sin
            complicaciones.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              className="blog-card bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Card header */}
              <div
                className="h-28 flex items-center justify-center text-5xl"
                style={{
                  background: "linear-gradient(135deg, #f0f4ff 0%, #e8f5e9 100%)",
                }}
              >
                {post.emoji}
              </div>

              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.categoryColor}`}
                  >
                    <Tag size={10} className="inline mr-1" />
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar size={10} />
                    {post.date}
                  </span>
                  <span className="text-xs text-gray-400 ml-auto">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3
                  className="font-extrabold text-slate-800 text-base mb-2 leading-snug"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <button className="flex items-center gap-1 text-blue-700 font-bold text-sm hover:text-blue-900 transition-colors">
                  Leer más <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
              className="inline-flex items-center gap-2 border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-200"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              <ChevronDown size={18} />
              Ver más artículos
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
}
