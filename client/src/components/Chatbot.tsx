// Trámite Claro — Chatbot IA
// Design: Warm Professionalism — chatbot flotante, burbujas de conversación, opción de agente humano
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Phone, ChevronDown } from "lucide-react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  time: string;
  quickReplies?: string[];
};

const QUICK_REPLIES_INITIAL = [
  "¿Qué servicios ofrecéis?",
  "¿Cuánto cuesta una gestión?",
  "¿Cómo funciona el proceso?",
  "Hablar con un agente",
];

const FAQ_DB: Record<string, { answer: string; quickReplies?: string[] }> = {
  "¿qué servicios ofrecéis?": {
    answer: `En **Trámite Claro** te ayudamos con:\n\n✅ Cita en Hacienda (AEAT)\n✅ Cita en el SEPE\n✅ Cita Seguridad Social\n✅ Certificado Digital\n✅ Cita ITV\n✅ Entender notificaciones oficiales\n✅ Trámites online\n✅ Descargar justificantes\n✅ Acompañamiento a cita\n\n¿Sobre cuál te gustaría saber más?`,
    quickReplies: ["Cita Hacienda", "Certificado Digital", "Cita SEPE", "¿Cuánto cuesta?"],
  },
  "¿cuánto cuesta una gestión?": {
    answer: `Nuestras tarifas son:\n\n📋 Gestión completa puntual: **35–50€**\n📄 Descargar/imprimir justificantes: **20–30€**\n💶 Gastos de gestión: **60–80€**\n🤝 Acompañamiento a cita: Consultar\n💻 Trámite online complejo: Consultar\n\n⚠️ **Importante:** Siempre te informamos del precio exacto ANTES de empezar. Sin sorpresas.\n\n¿Quieres consultar el precio de tu trámite concreto?`,
    quickReplies: ["Consultar mi precio", "¿Cómo funciona el proceso?", "Hablar con un agente"],
  },
  "¿cómo funciona el proceso?": {
    answer: `El proceso es muy sencillo:\n\n1️⃣ **Nos contactas** por WhatsApp, teléfono o formulario\n2️⃣ **Te informamos del precio** exacto antes de empezar\n3️⃣ **Confirmas** y empezamos la gestión\n4️⃣ **Te guiamos** paso a paso hasta completar el trámite\n\n✅ Sin cuotas mensuales\n✅ Sin permanencia\n✅ Pagas solo por lo que necesitas`,
    quickReplies: ["¿Qué servicios ofrecéis?", "¿Cuánto cuesta?", "Hablar con un agente"],
  },
  "cita hacienda": {
    answer: `Para la **cita en Hacienda (AEAT)** te ayudamos a:\n\n• Solicitar la cita en la Agencia Tributaria\n• Entender qué documentación necesitas\n• Prepararte para la visita\n• Gestionar notificaciones de Hacienda\n\n💰 Precio: desde **35€** (te lo confirmamos antes)\n\n¿Quieres que te gestionemos la cita?`,
    quickReplies: ["Consultar precio exacto", "Hablar con un agente", "¿Qué más hacéis?"],
  },
  "certificado digital": {
    answer: `Para el **Certificado Digital** te guiamos en:\n\n• Solicitud en la FNMT\n• Acreditación de identidad\n• Instalación en tu ordenador\n• Uso con la sede electrónica\n\n💰 Precio: desde **35€** (te lo confirmamos antes)\n\nEs imprescindible para hacer trámites online con la administración. ¿Te ayudamos?`,
    quickReplies: ["Consultar precio exacto", "Hablar con un agente", "¿Qué más hacéis?"],
  },
  "cita sepe": {
    answer: `Para la **cita en el SEPE** te ayudamos a:\n\n• Solicitar cita para prestación por desempleo\n• Renovar la demanda de empleo\n• Consultar el estado de tu expediente\n• Preparar la documentación necesaria\n\n💰 Precio: desde **35€** (te lo confirmamos antes)\n\n¿Quieres que te gestionemos la cita?`,
    quickReplies: ["Consultar precio exacto", "Hablar con un agente", "¿Qué más hacéis?"],
  },
  "consultar mi precio": {
    answer: `Para darte el precio exacto de tu trámite, necesitamos conocer los detalles de tu gestión. Puedes:\n\n📱 **WhatsApp:** +34 611 97 26 25\n📞 **Teléfono:** +34 611 97 26 25\n📧 **Email:** tramiteclaro.info@gmail.com\n\nTe respondemos rápido y sin compromiso. ¡El presupuesto es gratuito!`,
    quickReplies: ["Ir a WhatsApp", "Hablar con un agente"],
  },
  "consultar precio exacto": {
    answer: `Para darte el precio exacto de tu trámite, necesitamos conocer los detalles de tu gestión. Puedes:\n\n📱 **WhatsApp:** +34 611 97 26 25\n📞 **Teléfono:** +34 611 97 26 25\n📧 **Email:** tramiteclaro.info@gmail.com\n\nTe respondemos rápido y sin compromiso. ¡El presupuesto es gratuito!`,
    quickReplies: ["Ir a WhatsApp", "Hablar con un agente"],
  },
  "hablar con un agente": {
    answer: `¡Perfecto! Puedes contactar con nuestro equipo ahora mismo:\n\n📱 **WhatsApp (más rápido):**\n+34 611 97 26 25\n\n📞 **Teléfono:**\n+34 611 97 26 25\n\n📧 **Email:**\ntramiteclaro.info@gmail.com\n\nEstamos disponibles para ayudarte. ¡No dudes en escribirnos!`,
    quickReplies: ["Ir a WhatsApp", "¿Qué servicios ofrecéis?"],
  },
  "ir a whatsapp": {
    answer: `Te redirijo a WhatsApp ahora mismo. Haz clic en el botón verde de WhatsApp en la esquina de la pantalla, o escríbenos directamente al **+34 611 97 26 25**.\n\n¡Te atendemos enseguida! 😊`,
    quickReplies: ["¿Qué servicios ofrecéis?", "¿Cuánto cuesta?"],
  },
  "¿qué más hacéis?": {
    answer: `Además de los servicios principales, también:\n\n🚨 **Servicio urgente:** Buscamos números de grúa, seguros, ayuntamiento, emergencias. Gratis para clientes, solo 3€ para no clientes.\n\n📬 **Notificaciones:** Te ayudamos a entender cartas de Hacienda, Seguridad Social, etc.\n\n🌐 **Trámites online:** Te guiamos en cualquier gestión con la administración electrónica.\n\n¿Necesitas algo concreto?`,
    quickReplies: ["¿Cuánto cuesta?", "Hablar con un agente", "¿Cómo funciona el proceso?"],
  },
};

function getTime() {
  return new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

function getBotResponse(input: string): { answer: string; quickReplies?: string[] } {
  const normalized = input.toLowerCase().trim();

  // Direct match
  if (FAQ_DB[normalized]) return FAQ_DB[normalized];

  // Partial match
  for (const key of Object.keys(FAQ_DB)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return FAQ_DB[key];
    }
  }

  // Keyword matching
  if (normalized.includes("precio") || normalized.includes("cuesta") || normalized.includes("coste") || normalized.includes("tarifa")) {
    return FAQ_DB["¿cuánto cuesta una gestión?"];
  }
  if (normalized.includes("servicio") || normalized.includes("hacéis") || normalized.includes("haceis") || normalized.includes("ofrecéis")) {
    return FAQ_DB["¿qué servicios ofrecéis?"];
  }
  if (normalized.includes("hacienda") || normalized.includes("aeat") || normalized.includes("agencia tributaria")) {
    return FAQ_DB["cita hacienda"];
  }
  if (normalized.includes("certificado") || normalized.includes("digital") || normalized.includes("fnmt")) {
    return FAQ_DB["certificado digital"];
  }
  if (normalized.includes("sepe") || normalized.includes("paro") || normalized.includes("desempleo")) {
    return FAQ_DB["cita sepe"];
  }
  if (normalized.includes("agente") || normalized.includes("humano") || normalized.includes("persona") || normalized.includes("hablar")) {
    return FAQ_DB["hablar con un agente"];
  }
  if (normalized.includes("proceso") || normalized.includes("funciona") || normalized.includes("cómo")) {
    return FAQ_DB["¿cómo funciona el proceso?"];
  }
  if (normalized.includes("whatsapp") || normalized.includes("contacto") || normalized.includes("contactar")) {
    return FAQ_DB["hablar con un agente"];
  }
  if (normalized.includes("urgente") || normalized.includes("urgencia") || normalized.includes("apuro")) {
    return {
      answer: `🚨 **Servicio Urgente disponible:**\n\nBuscamos y facilitamos números de teléfono que necesitas:\n🚗 Grúa\n🛡️ Seguros\n🏛️ Ayuntamiento\n📞 Emergencias (112)\n\n✅ **Clientes:** GRATIS\n⚡ **No clientes:** Solo 3€\n\nEscríbenos ahora al +34 611 97 26 25`,
      quickReplies: ["Hablar con un agente", "Ir a WhatsApp"],
    };
  }

  // Default response
  return {
    answer: `Gracias por tu mensaje. No he entendido bien tu consulta, pero puedo ayudarte con:\n\n• Información sobre nuestros servicios\n• Precios y tarifas\n• Cómo funciona el proceso\n\nO si prefieres, puedes hablar directamente con uno de nuestros agentes.`,
    quickReplies: ["¿Qué servicios ofrecéis?", "¿Cuánto cuesta?", "Hablar con un agente"],
  };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      text: `¡Hola! 👋 Soy el asistente virtual de **Trámite Claro**.\n\nEstoy aquí para ayudarte con dudas sobre nuestros servicios administrativos. ¿En qué puedo ayudarte hoy?`,
      time: getTime(),
      quickReplies: QUICK_REPLIES_INITIAL,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      text: text.trim(),
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const response = getBotResponse(text);
      const botMsg: Message = {
        id: Date.now() + 1,
        role: "bot",
        text: response.answer,
        time: getTime(),
        quickReplies: response.quickReplies,
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const renderText = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Bold text
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <span key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <>
      {/* Chatbot button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-5 z-50 w-14 h-14 bg-blue-800 hover:bg-blue-900 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Abrir chat de ayuda"
      >
        {open ? <X size={22} /> : <Bot size={22} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">
            IA
          </span>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-44 right-5 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          style={{ maxHeight: "520px" }}
        >
          {/* Header */}
          <div className="bg-blue-800 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm" style={{ fontFamily: "Nunito, sans-serif" }}>
                Asistente Trámite Claro
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-blue-200 text-xs">En línea</span>
              </div>
            </div>
            <a
              href="https://wa.me/34611972625"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-full transition-colors"
              title="Hablar con agente humano"
            >
              <Phone size={12} />
              Agente
            </a>
            <button
              onClick={() => setOpen(false)}
              className="text-blue-200 hover:text-white transition-colors ml-1"
            >
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 chat-scroll" style={{ minHeight: 0 }}>
            {messages.map((msg) => (
              <div key={msg.id}>
                <div className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  {/* Avatar */}
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                      msg.role === "bot" ? "bg-blue-100" : "bg-green-100"
                    }`}
                  >
                    {msg.role === "bot" ? (
                      <Bot size={14} className="text-blue-700" />
                    ) : (
                      <User size={14} className="text-green-700" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[75%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "bot"
                        ? "bg-gray-100 text-slate-800 rounded-bl-sm"
                        : "bg-blue-800 text-white rounded-br-sm"
                    }`}
                  >
                    {renderText(msg.text)}
                    <div className={`text-xs mt-1 ${msg.role === "bot" ? "text-gray-400" : "text-blue-200"}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>

                {/* Quick replies */}
                {msg.role === "bot" && msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-9">
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => sendMessage(qr)}
                        className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold px-3 py-1.5 rounded-full border border-blue-200 transition-colors"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-blue-700" />
                </div>
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-100 p-3 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="w-9 h-9 bg-blue-800 hover:bg-blue-900 disabled:opacity-40 text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0"
            >
              <Send size={14} />
            </button>
          </form>

          {/* Footer */}
          <div className="px-3 pb-2 text-center">
            <span className="text-xs text-gray-400">
              ¿Prefieres hablar con una persona?{" "}
              <a
                href="https://wa.me/34611972625"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:underline"
              >
                WhatsApp
              </a>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
