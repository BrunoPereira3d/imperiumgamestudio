// DESIGN: Cinematic Dark Forge — Contact Section with functional email form
// Dark card with red accents, professional layout

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MapPin, Phone, Send, Instagram } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          _to: "brunopereira@imperiumgamestudio.com",
        }),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
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
              Contato
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight font-[Orbitron]">
              Vamos <span className="text-[#C61331]">Conversar</span>
            </h2>
            <p className="mt-4 text-white/50 text-lg font-[Rajdhani] leading-relaxed">
              Tem um projeto em mente ou precisa de suporte para sua produção? Entre em contato e vamos discutir como podemos colaborar.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C61331]/10 rounded-sm shrink-0">
                  <Mail size={18} className="text-[#C61331]" />
                </div>
                <div>
                  <div className="text-white font-semibold font-[Rajdhani] tracking-wide">E-mail</div>
                  <a href="mailto:brunopereira@imperiumgamestudio.com" className="text-white/50 text-sm font-[Rajdhani] hover:text-[#C61331] transition-colors">
                    brunopereira@imperiumgamestudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C61331]/10 rounded-sm shrink-0">
                  <Phone size={18} className="text-[#C61331]" />
                </div>
                <div>
                  <div className="text-white font-semibold font-[Rajdhani] tracking-wide">Telefone</div>
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
                  <div className="text-white font-semibold font-[Rajdhani] tracking-wide">Endereço</div>
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
                    Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-[Rajdhani] placeholder:text-white/20 focus:border-[#C61331]/50 focus:outline-none transition-colors duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-[Rajdhani] tracking-wider uppercase mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-[Rajdhani] placeholder:text-white/20 focus:border-[#C61331]/50 focus:outline-none transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="block text-white/60 text-sm font-[Rajdhani] tracking-wider uppercase mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-[Rajdhani] placeholder:text-white/20 focus:border-[#C61331]/50 focus:outline-none transition-colors duration-300"
                    placeholder="Nome da empresa (opcional)"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-[Rajdhani] tracking-wider uppercase mb-2">
                    Assunto *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-[Rajdhani] focus:border-[#C61331]/50 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Desenvolvimento de Games">Desenvolvimento de Games</option>
                    <option value="Modelagem 3D">Modelagem 3D</option>
                    <option value="Animação">Animação</option>
                    <option value="Impressão 3D">Impressão 3D</option>
                    <option value="Soluções Digitais">Soluções Digitais</option>
                    <option value="Treinamento VR">Treinamento VR</option>
                    <option value="Outsourcing">Outsourcing</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-white/60 text-sm font-[Rajdhani] tracking-wider uppercase mb-2">
                  Mensagem *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-[Rajdhani] placeholder:text-white/20 focus:border-[#C61331]/50 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-[#C61331] text-white py-3 rounded-sm font-bold font-[Orbitron] tracking-wider uppercase hover:bg-[#A00D24] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
