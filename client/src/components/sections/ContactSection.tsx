// DESIGN: Cinematic Dark Forge — Contact Section with functional email form
// Dark card with red accents, professional layout

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MapPin, Phone, Send, Instagram } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getLabel = (key: string) => {
    const labels = {
      pt: {
        contato: "Contato",
        vamosConversar: "Vamos Conversar",
        descricao: "Tem um projeto em mente ou precisa de suporte para sua produção? Entre em contato e vamos discutir como podemos colaborar.",
        email: "E-mail",
        telefone: "Telefone",
        endereco: "Endereço",
        nome: "Nome *",
        emailLabel: "E-mail *",
        empresa: "Empresa",
        assunto: "Assunto *",
        mensagem: "Mensagem *",
        selecioneAssunto: "Selecione um assunto",
        desenvolvimento: "Desenvolvimento de Games",
        modelagem: "Modelagem 3D",
        animacao: "Animação",
        impressao: "Impressão 3D",
        solucoes: "Soluções Digitais",
        treinamento: "Treinamento VR",
        outsourcing: "Outsourcing",
        outro: "Outro",
        seuNome: "Seu nome",
        seuEmail: "seu@email.com",
        nomeEmpresa: "Nome da empresa (opcional)",
        descrevaSeuProjeto: "Descreva seu projeto ou dúvida...",
        enviando: "Enviando...",
        enviarMensagem: "Enviar Mensagem",
        sucesso: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        erro: "Erro ao enviar mensagem. Tente novamente.",
      },
      en: {
        contato: "Contact",
        vamosConversar: "Let's Talk",
        descricao: "Have a project in mind or need support for your production? Get in touch and let's discuss how we can collaborate.",
        email: "Email",
        telefone: "Phone",
        endereco: "Address",
        nome: "Name *",
        emailLabel: "Email *",
        empresa: "Company",
        assunto: "Subject *",
        mensagem: "Message *",
        selecioneAssunto: "Select a subject",
        desenvolvimento: "Game Development",
        modelagem: "3D Modeling",
        animacao: "Animation",
        impressao: "3D Printing",
        solucoes: "Digital Solutions",
        treinamento: "VR Training",
        outsourcing: "Outsourcing",
        outro: "Other",
        seuNome: "Your name",
        seuEmail: "your@email.com",
        nomeEmpresa: "Company name (optional)",
        descrevaSeuProjeto: "Describe your project or question...",
        enviando: "Sending...",
        enviarMensagem: "Send Message",
        sucesso: "Message sent successfully! We'll get in touch soon.",
        erro: "Error sending message. Please try again.",
      },
      es: {
        contato: "Contacto",
        vamosConversar: "Hablemos",
        descricao: "¿Tienes un proyecto en mente o necesitas apoyo para tu producción? Ponte en contacto y discutamos cómo podemos colaborar.",
        email: "Correo",
        telefone: "Teléfono",
        endereco: "Dirección",
        nome: "Nombre *",
        emailLabel: "Correo *",
        empresa: "Empresa",
        assunto: "Asunto *",
        mensagem: "Mensaje *",
        selecioneAssunto: "Selecciona un asunto",
        desenvolvimento: "Desarrollo de Juegos",
        modelagem: "Modelado 3D",
        animacao: "Animación",
        impressao: "Impresión 3D",
        solucoes: "Soluciones Digitales",
        treinamento: "Entrenamiento VR",
        outsourcing: "Outsourcing",
        outro: "Otro",
        seuNome: "Tu nombre",
        seuEmail: "tu@email.com",
        nomeEmpresa: "Nombre de la empresa (opcional)",
        descrevaSeuProjeto: "Describe tu proyecto o pregunta...",
        enviando: "Enviando...",
        enviarMensagem: "Enviar Mensaje",
        sucesso: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
        erro: "Error al enviar el mensaje. Intenta de nuevo.",
      },
    };
    return labels[language][key as keyof typeof labels.pt] || labels.pt[key as keyof typeof labels.pt];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via FormSubmit service (free, no backend needed)
      const response = await fetch("https://formspree.io/f/xyzqwert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          _to: "brunopereira3d@icloud.com",
        }),
      });

      if (response.ok) {
        toast.success(getLabel("sucesso"));
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      } else {
        toast.error(getLabel("erro"));
      }
    } catch (error) {
      toast.error(getLabel("erro"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C61331]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <span className="text-[#C61331] text-sm tracking-[0.3em] uppercase font-semibold font-[Rajdhani]">
              {getLabel("contato")}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight font-[Orbitron]">
              {language === "en" ? "Let's" : language === "es" ? "Hablemos" : "Vamos"} <span className="text-[#C61331]">{language === "en" ? "Talk" : language === "es" ? "" : "Conversar"}</span>
            </h2>
            <p className="mt-4 text-white/50 text-lg font-[Rajdhani] leading-relaxed">
              {getLabel("descricao")}
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C61331]/10 rounded-sm shrink-0">
                  <Mail size={18} className="text-[#C61331]" />
                </div>
                <div>
                  <div className="text-white font-semibold font-[Rajdhani] tracking-wide">{getLabel("email")}</div>
                  <a href="mailto:brunopereira3d@icloud.com" className="text-white/50 text-sm font-[Rajdhani] hover:text-[#C61331] transition-colors">
                    brunopereira3d@icloud.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C61331]/10 rounded-sm shrink-0">
                  <Phone size={18} className="text-[#C61331]" />
                </div>
                <div>
                  <div className="text-white font-semibold font-[Rajdhani] tracking-wide">{getLabel("telefone")}</div>
                  <a href="tel:+5511211056" className="text-white/50 text-sm font-[Rajdhani] hover:text-[#C61331] transition-colors">
                    +55 (11) 2110-5658
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C61331]/10 rounded-sm shrink-0">
                  <MapPin size={18} className="text-[#C61331]" />
                </div>
                <div>
                  <div className="text-white font-semibold font-[Rajdhani] tracking-wide">{getLabel("endereco")}</div>
                  <div className="text-white/50 text-sm font-[Rajdhani]">Avenida Paulista, 1636, Sala 1105, Bela Vista, São Paulo-SP</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-3">
              <a
                href="https://www.instagram.com/imperiumgamestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-sm text-white/50 hover:text-[#C61331] hover:border-[#C61331]/30 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://discord.gg/QkueErzY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-sm text-white/50 hover:text-[#C61331] hover:border-[#C61331]/30 transition-all duration-300"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/imperium-game-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-sm text-white/50 hover:text-[#C61331] hover:border-[#C61331]/30 transition-all duration-300"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-[#111111] border border-white/5 rounded-sm p-8">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/60 text-sm font-[Rajdhani] tracking-wider uppercase mb-2">
                    {getLabel("nome")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-[Rajdhani] placeholder:text-white/20 focus:border-[#C61331]/50 focus:outline-none transition-colors duration-300"
                    placeholder={getLabel("seuNome")}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-[Rajdhani] tracking-wider uppercase mb-2">
                    {getLabel("emailLabel")}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-[Rajdhani] placeholder:text-white/20 focus:border-[#C61331]/50 focus:outline-none transition-colors duration-300"
                    placeholder={getLabel("seuEmail")}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="block text-white/60 text-sm font-[Rajdhani] tracking-wider uppercase mb-2">
                    {getLabel("empresa")}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-[Rajdhani] placeholder:text-white/20 focus:border-[#C61331]/50 focus:outline-none transition-colors duration-300"
                    placeholder={getLabel("nomeEmpresa")}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-[Rajdhani] tracking-wider uppercase mb-2">
                    {getLabel("assunto")}
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-[Rajdhani] focus:border-[#C61331]/50 focus:outline-none transition-colors duration-300 [&>option]:bg-[#1a1a1a] [&>option]:text-white"
                  >
                    <option value="" className="bg-[#1a1a1a] text-white">{getLabel("selecioneAssunto")}</option>
                    <option value="Desenvolvimento de Games" className="bg-[#1a1a1a] text-white">{getLabel("desenvolvimento")}</option>
                    <option value="Modelagem 3D" className="bg-[#1a1a1a] text-white">{getLabel("modelagem")}</option>
                    <option value="Animação" className="bg-[#1a1a1a] text-white">{getLabel("animacao")}</option>
                    <option value="Impressão 3D" className="bg-[#1a1a1a] text-white">{getLabel("impressao")}</option>
                    <option value="Soluções Digitais" className="bg-[#1a1a1a] text-white">{getLabel("solucoes")}</option>
                    <option value="Treinamento VR" className="bg-[#1a1a1a] text-white">{getLabel("treinamento")}</option>
                    <option value="Outsourcing" className="bg-[#1a1a1a] text-white">{getLabel("outsourcing")}</option>
                    <option value="Outro" className="bg-[#1a1a1a] text-white">{getLabel("outro")}</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-white/60 text-sm font-[Rajdhani] tracking-wider uppercase mb-2">
                  {getLabel("mensagem")}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-[Rajdhani] placeholder:text-white/20 focus:border-[#C61331]/50 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder={getLabel("descrevaSeuProjeto")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-[#C61331] text-white py-3 rounded-sm font-bold font-[Orbitron] tracking-wider uppercase hover:bg-[#A00D24] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? getLabel("enviando") : getLabel("enviarMensagem")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
