// DESIGN: Cinematic Dark Forge — Projects Section with game cards and AI mission generator
// Features game cards with lightbox preview and AI-powered mission generation

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Maximize2 } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import ImageLightbox from "@/components/ImageLightbox";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [generatingMission, setGeneratingMission] = useState<number | null>(null);
  const [generatedMission, setGeneratedMission] = useState<{ [key: number]: string }>({});

  const generateMission = async (projectId: number) => {
    setGeneratingMission(projectId);
    
    // Simular geração de missão via IA
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const missions = [
      "Defenda a necrópole contra 50 aldeões em 3 ondas. Recompensa: 500 ouro",
      "Construa 5 torres defensivas em 2 minutos. Recompensa: Acesso ao nível 5",
      "Derrote o líder dos aldeões sem perder um monstro. Recompensa: Personagem exclusivo",
      "Sobreviva por 10 minutos no modo infinito. Recompensa: 1000 pontos de experiência",
      "Encontre 3 anomalias escondidas no corredor. Recompensa: Desbloqueio de área secreta",
    ];
    
    const randomMission = missions[Math.floor(Math.random() * missions.length)];
    setGeneratedMission(prev => ({ ...prev, [projectId]: randomMission }));
    setGeneratingMission(null);
  };

  return (
    <section id="projects" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#C61331] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[Orbitron]">
            Nossos Projetos
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-1 bg-[#C61331]" />
            <p className="text-white/60 font-[Rajdhani] tracking-wider uppercase text-sm">
              Games em Desenvolvimento
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-[#C61331]/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

                  {/* Lightbox Button */}
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="absolute top-4 right-4 p-3 bg-[#C61331] text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#A00D24] hover:scale-110"
                  >
                    <Maximize2 size={20} />
                  </button>

                  {/* Status Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-[#C61331]/20 border border-[#C61331]/50 text-[#C61331] text-xs font-bold tracking-wider rounded-full font-[Rajdhani]">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-white mb-1 font-[Orbitron]">
                      {project.title}
                    </h3>
                    <p className="text-[#C61331] text-sm font-bold tracking-wider font-[Rajdhani]">
                      {project.genre}
                    </p>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-6 font-[Rajdhani]">
                    {project.description}
                  </p>

                  {/* Generated Mission */}
                  {generatedMission[project.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mb-4 p-3 bg-[#C61331]/10 border border-[#C61331]/30 rounded-lg"
                    >
                      <p className="text-xs font-bold text-[#C61331] mb-1 tracking-wider font-[Rajdhani]">
                        MISSÃO GERADA:
                      </p>
                      <p className="text-white/80 text-sm font-[Rajdhani]">
                        {generatedMission[project.id]}
                      </p>
                    </motion.div>
                  )}

                  {/* AI Mission Button */}
                  <button
                    onClick={() => generateMission(project.id)}
                    disabled={generatingMission === project.id}
                    className="w-full px-4 py-3 bg-[#C61331] text-white font-bold tracking-wider uppercase rounded-lg transition-all duration-300 hover:bg-[#A00D24] hover:shadow-[0_0_20px_rgba(198,19,49,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-[Rajdhani] text-sm"
                  >
                    <Zap size={16} />
                    {generatingMission === project.id ? "Gerando..." : "Gerar Missão com IA"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={selectedProject !== null}
        imageUrl={PROJECTS.find(p => p.id === selectedProject)?.image || ""}
        title={PROJECTS.find(p => p.id === selectedProject)?.title || ""}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
