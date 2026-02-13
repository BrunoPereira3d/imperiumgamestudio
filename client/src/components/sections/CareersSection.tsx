// DESIGN: Cinematic Dark Forge — Careers section with job listings

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CareersSection() {
  const { language } = useLanguage();

  const getTitle = () => {
    if (language === "en") return "Join Imperium";
    if (language === "es") return "Únete a Imperium";
    return "Junte-se ao Imperium";
  };

  const getDescription = () => {
    if (language === "en") return "We are always looking for creative talents passionate about games and technology to join our team.";
    if (language === "es") return "Siempre estamos buscando talentos creativos apasionados por juegos y tecnología para unirse a nuestro equipo.";
    return "Estamos sempre procurando talentos criativos e apaixonados por games e tecnologia para fazer parte de nossa equipe.";
  };

  const getNaoEncontrou = () => {
    if (language === "en") return "Didn't find the ideal position? Send your portfolio to";
    if (language === "es") return "¿No encontraste la posición ideal? Envía tu portafolio a";
    return "Não encontrou a vaga ideal? Envie seu portfólio para";
  };

  const getEnviarCurriculo = () => {
    if (language === "en") return "Send Resume";
    if (language === "es") return "Enviar Currículum";
    return "Enviar Currículo";
  };
  const jobs = [
    {
      title: "Desenvolvedor de Games (Unity/Unreal)",
      department: "Desenvolvimento",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Buscamos desenvolvedores experientes em C# ou C++ para trabalhar em projetos AAA e indie.",
    },
    {
      title: "Artista 3D - Modelagem",
      department: "Arte",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Procuramos artistas 3D com experiência em modelagem de personagens e ambientes para games.",
    },
    {
      title: "Animador 3D",
      department: "Arte",
      location: "Remoto",
      type: "Tempo Integral",
      description: "Animador experiente em rigging e animação de personagens para projetos de games e cinema.",
    },
    {
      title: "Designer UX/UI",
      department: "Design",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Designer criativo para interfaces de games e aplicações interativas com foco em experiência do usuário.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="careers" className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C61331] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C61331] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[Orbitron] tracking-wider">
            {getTitle()}
          </h2>
          <p className="text-white/60 text-lg font-[Rajdhani] max-w-2xl mx-auto">
            {getDescription()}
          </p>
        </motion.div>

        {/* Jobs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-sm hover:border-[#C61331]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(198,19,49,0.2)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-[Rajdhani] mb-1">
                    {job.title}
                  </h3>
                  <p className="text-[#C61331] text-sm font-[Orbitron] tracking-wider uppercase">
                    {job.department}
                  </p>
                </div>
                <Briefcase className="w-5 h-5 text-[#C61331] opacity-60" />
              </div>

              <p className="text-white/70 text-sm font-[Rajdhani] mb-4">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-white/50 text-xs font-[Rajdhani]">
                  <MapPin className="w-4 h-4 text-[#C61331]" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs font-[Rajdhani]">
                  <Clock className="w-4 h-4 text-[#C61331]" />
                  {job.type}
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-[#C61331]/10 border border-[#C61331]/50 text-[#C61331] text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-[#C61331] hover:text-white group-hover:shadow-[0_0_20px_rgba(198,19,49,0.3)]">
                Candidatar-se
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-sm font-[Rajdhani] mb-4">
            {getNaoEncontrou()}
          </p>
          <a
            href="mailto:carreiras@imperiumgamestudio.com"
            className="inline-block px-8 py-3 bg-[#C61331] text-white font-semibold tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-[#A00D24] hover:shadow-[0_0_30px_rgba(198,19,49,0.3)] font-[Rajdhani]"
          >
            {getEnviarCurriculo()}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
