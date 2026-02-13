// DESIGN: Cinematic Dark Forge — Projects Section with game cards
// Features game cards with lightbox preview and hover description effect

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import ImageLightbox from "@/components/ImageLightbox";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { language } = useLanguage();
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [offsets, setOffsets] = useState<number[]>(new Array(PROJECTS.length).fill(0));

  useEffect(() => {
    const handleScroll = () => {
      const newOffsets = imageRefs.current.map((ref) => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const windowCenter = window.innerHeight / 2;
        return (windowCenter - elementCenter) * 0.08;
      });
      setOffsets(newOffsets);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTitle = () => {
    if (language === "en") return "Our Projects";
    if (language === "es") return "Nuestros Proyectos";
    return "Nossos Projetos";
  };

  const getSubtitle = () => {
    if (language === "en") return "Games in Development";
    if (language === "es") return "Juegos en Desarrollo";
    return "Games em Desenvolvimento";
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
            {getTitle()}
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-1 bg-[#C61331]" />
            <p className="text-white/60 font-[Rajdhani] tracking-wider uppercase text-sm">
              {getSubtitle()}
            </p>
          </div>
          <p className="text-white/50 mt-4 text-sm">
            <a href="#portfolio" className="text-[#C61331] hover:text-[#ff4444] transition-colors">Ver portfólio completo →</a> | 
            <a href="#services" className="text-[#C61331] hover:text-[#ff4444] transition-colors ml-4">Nossos serviços →</a>
          </p>
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
              <div className="relative overflow-hidden rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-[#C61331]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(198,19,49,0.5),inset_0_0_30px_rgba(198,19,49,0.1)]">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden" ref={(el) => { imageRefs.current[index] = el; }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{
                      transform: `translateY(${offsets[index]}px)`,
                      transition: "transform 0.1s ease-out"
                    }}
                  />
                  {/* Dark blur overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />

                  {/* Lightbox Button */}
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="absolute top-4 right-4 p-3 bg-[#C61331] text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#A00D24] hover:scale-110 z-10"
                  >
                    <Maximize2 size={20} />
                  </button>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-[#C61331]/20 border border-[#C61331]/50 text-[#C61331] text-xs font-bold tracking-wider rounded-full font-[Rajdhani]">
                      {language === "en" ? project.statusEn : language === "es" ? project.statusEs : project.status}
                    </span>
                  </div>

                  {/* Description Hover Effect - Slides up from bottom */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-4 group-hover:translate-y-0">
                    <p className="text-white/90 text-sm leading-relaxed font-[Rajdhani]">
                      {language === "en" ? project.descriptionEn : language === "es" ? project.descriptionEs : project.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pointer-events-auto">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-white mb-1 font-[Orbitron]">
                      {project.title}
                    </h3>
                    <p className="text-[#C61331] text-sm font-bold tracking-wider font-[Rajdhani]">
                      {project.genre}
                    </p>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed font-[Rajdhani]" style={{display: 'none'}}>
                    {language === "en" ? project.descriptionEn : language === "es" ? project.descriptionEs : project.description}
                  </p>
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
