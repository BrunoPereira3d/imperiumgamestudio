// DESIGN: Cinematic Dark Forge — AI Chatbot with company knowledge
// Responds to user queries about Imperium Game Studio

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const COMPANY_KNOWLEDGE = {
  services: "Oferecemos Desenvolvimento de Games, Modelagem 3D, Animação, Impressão 3D, Soluções Digitais e Treinamento VR. Qual desses serviços te interessa?",
  projects: "Estamos desenvolvendo dois projetos incríveis: Ghouls Next Door (Tower Defense com narrativa invertida) e Project Neblina (Anomaly Finder em corredor infinito).",
  contact: "Você pode nos contatar em brunopereira3d@icloud.com ou pelo telefone +55 (11) 2110-5658. Endereço: Avenida Paulista, 1636, Sala 1105, São Paulo-SP.",
  experience: "Temos mais de 8 anos de experiência, 50+ projetos entregues, 30+ profissionais e 15+ clientes ativos.",
  outsourcing: "Oferecemos serviços de outsourcing com equipe dedicada, pipeline integrado, escalabilidade, qualidade AAA, NDA & segurança, e comunicação ágil.",
  portfolio: "Nosso portfólio inclui trabalhos em modelagem 3D, animação e design. Confira a seção Portfólio para ver nossos melhores trabalhos.",
  vr: "Desenvolvemos treinamentos em VR para empresas, com simulações realistas que aumentam retenção e efetividade do aprendizado.",
  games: "Somos especializados em desenvolvimento de games com engines como Unreal e Unity para PC, Mobile e Console.",
};

const generateResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes("serviço") || message.includes("o que vocês fazem")) {
    return COMPANY_KNOWLEDGE.services;
  }
  if (message.includes("projeto") || message.includes("desenvolvimento")) {
    return COMPANY_KNOWLEDGE.projects;
  }
  if (message.includes("contato") || message.includes("telefone") || message.includes("email")) {
    return COMPANY_KNOWLEDGE.contact;
  }
  if (message.includes("experiência") || message.includes("anos") || message.includes("clientes")) {
    return COMPANY_KNOWLEDGE.experience;
  }
  if (message.includes("outsourcing") || message.includes("terceirização")) {
    return COMPANY_KNOWLEDGE.outsourcing;
  }
  if (message.includes("portfólio") || message.includes("trabalhos")) {
    return COMPANY_KNOWLEDGE.portfolio;
  }
  if (message.includes("vr") || message.includes("realidade virtual") || message.includes("treinamento")) {
    return COMPANY_KNOWLEDGE.vr;
  }
  if (message.includes("game") || message.includes("jogo")) {
    return COMPANY_KNOWLEDGE.games;
  }
  
  const responses = [
    "Ótima pergunta! Somos a Imperium Game Studio, especializada em desenvolvimento de games e soluções criativas. Como posso ajudá-lo?",
    "Adoraríamos conversar sobre isso! Você pode explorar mais sobre nossos serviços na página ou entrar em contato conosco.",
    "Que interessante! Temos expertise em várias áreas. Quer saber mais sobre algum serviço específico?",
    "Excelente curiosidade! A Imperium Game Studio é conhecida por entregar projetos de alta qualidade. O que você gostaria de saber?",
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou o assistente da Imperium Game Studio. Como posso ajudá-lo? 🎮",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-[#C61331] text-white rounded-full shadow-lg hover:bg-[#A00D24] transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-[#111111] border border-[#C61331]/30 rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#C61331] to-[#A00D24] p-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold font-[Orbitron]">Imperium AI</h3>
                <p className="text-white/70 text-xs font-[Rajdhani]">Sempre disponível</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 p-2 rounded-lg transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg font-[Rajdhani] text-sm ${
                      message.sender === "user"
                        ? "bg-[#C61331] text-white"
                        : "bg-[#1a1a1a] text-white/80 border border-white/10"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#C61331] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#C61331] rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-[#C61331] rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Faça uma pergunta..."
                className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 text-white text-sm font-[Rajdhani] placeholder:text-white/40 focus:border-[#C61331]/50 focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-[#C61331] text-white p-2 rounded-lg hover:bg-[#A00D24] disabled:opacity-50 transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
