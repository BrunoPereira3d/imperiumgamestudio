// DESIGN: Cinematic Dark Forge — Careers section with job listings and department filters

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const CAREERS_EMAIL = "brunopereira3d@icloud.com";

const buildApplicationMailto = (position: string, language: string) => {
  const subject =
    language === "en"
      ? `Application: ${position}`
      : language === "es"
        ? `Postulación: ${position}`
        : `Candidatura: ${position}`;
  const body =
    language === "en"
      ? `Hi Imperium Game Studio team,\n\nI'd like to apply for the ${position} position. Please find my resume attached.\n\nName:\nPhone:\nPortfolio:\n`
      : language === "es"
        ? `Hola equipo de Imperium Game Studio,\n\nMe gustaría postularme para la posición de ${position}. Adjunto mi currículum.\n\nNombre:\nTeléfono:\nPortafolio:\n`
        : `Olá, equipe da Imperium Game Studio,\n\nGostaria de me candidatar à vaga de ${position}. Segue meu currículo em anexo.\n\nNome:\nTelefone:\nPortfólio:\n`;
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function CareersSection() {
  const { language } = useLanguage();
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  // Add JobPosting schema markup for Google Jobs
  useEffect(() => {
    const jobTitles = ["Unreal Game Developer", "Social Media Manager", "3D Animator", "UX/UI Designer"];
    
    // Remove existing job posting scripts
    const existingScripts = document.querySelectorAll('script[data-job-posting="true"]');
    existingScripts.forEach(script => script.remove());
    
    // Add new schema markup for each job
    jobTitles.forEach((title) => {
      const schema = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": title,
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Imperium Game Studio",
          "sameAs": "https://imperiumgamestudio.com.br",
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR",
          },
        },
        "employmentType": "FULL_TIME",
        "datePosted": new Date().toISOString().split("T")[0],
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-job-posting", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, []);

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

  const getCandidatar = () => {
    if (language === "en") return "Apply";
    if (language === "es") return "Solicitar";
    return "Candidatar-se";
  };

  const getFilterLabel = () => {
    if (language === "en") return "Filter by Department";
    if (language === "es") return "Filtrar por Departamento";
    return "Filtrar por Departamento";
  };

  const getAllDepartments = () => {
    if (language === "en") return "All Departments";
    if (language === "es") return "Todos los Departamentos";
    return "Todos os Departamentos";
  };

  const jobs = [
    {
      pt: {
        title: "Desenvolvedor de Games Unreal",
        department: "Desenvolvimento",
        description: "Buscamos desenvolvedores experientes em C++ para trabalhar em projetos AAA com Unreal Engine.",
      },
      en: {
        title: "Unreal Game Developer",
        department: "Development",
        description: "We seek experienced C++ developers to work on AAA projects with Unreal Engine.",
      },
      es: {
        title: "Desarrollador de Juegos Unreal",
        department: "Desarrollo",
        description: "Buscamos desarrolladores experimentados en C++ para trabajar en proyectos AAA con Unreal Engine.",
      },
    },
    {
      pt: {
        title: "Social Media Manager",
        department: "Marketing",
        description: "Responsável por gerenciar redes sociais e comunidades do estúdio e dos games desenvolvidos, criando conteúdo engajador.",
      },
      en: {
        title: "Social Media Manager",
        department: "Marketing",
        description: "Manage social media and communities for the studio and developed games, creating engaging content.",
      },
      es: {
        title: "Gerente de Redes Sociales",
        department: "Marketing",
        description: "Gestiona redes sociales y comunidades del estudio y juegos desarrollados, creando contenido atractivo.",
      },
    },
    {
      pt: {
        title: "Animador 3D",
        department: "Arte",
        description: "Animador experiente em rigging e animação de personagens para projetos de games e cinema.",
      },
      en: {
        title: "3D Animator",
        department: "Art",
        description: "Experienced animator in character rigging and animation for game and film projects.",
      },
      es: {
        title: "Animador 3D",
        department: "Arte",
        description: "Animador experimentado en rigging y animación de personajes para proyectos de juegos y cine.",
      },
    },
    {
      pt: {
        title: "Designer UX/UI",
        department: "Design",
        description: "Designer criativo para interfaces de games e aplicações interativas com foco em experiência do usuário.",
      },
      en: {
        title: "UX/UI Designer",
        department: "Design",
        description: "Creative designer for game interfaces and interactive applications with focus on user experience.",
      },
      es: {
        title: "Diseñador UX/UI",
        department: "Diseño",
        description: "Diseñador creativo para interfaces de juegos y aplicaciones interactivas enfocado en experiencia del usuario.",
      },
    },
  ];

  const getJobData = (job: typeof jobs[0]) => {
    if (language === "en") return job.en;
    if (language === "es") return job.es;
    return job.pt;
  };

  // Get unique departments
  const departments = Array.from(new Set(jobs.map(job => getJobData(job).department)));

  // Filter jobs based on selected department
  const filteredJobs = selectedDepartment && selectedDepartment !== getAllDepartments()
    ? jobs.filter(job => getJobData(job).department === selectedDepartment)
    : jobs;

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
          <p className="text-white/50 mt-4 text-sm">
            <a href="#portfolio" className="text-[#C61331] hover:text-[#ff4444] transition-colors">Ver nossos projetos →</a> | 
            <a href="#contact" className="text-[#C61331] hover:text-[#ff4444] transition-colors ml-4">Entre em contato →</a>
          </p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap gap-3 justify-center items-center"
        >
          <span className="text-white/60 text-sm font-[Rajdhani] tracking-wider uppercase">
            {getFilterLabel()}:
          </span>
          <button
            onClick={() => setSelectedDepartment(null)}
            className={`px-4 py-2 rounded-sm text-sm font-[Rajdhani] tracking-wider uppercase transition-all duration-300 ${
              selectedDepartment === null
                ? "bg-[#C61331] text-white shadow-[0_0_20px_rgba(198,19,49,0.3)]"
                : "bg-white/5 text-white/60 border border-white/10 hover:border-[#C61331]/50 hover:text-white"
            }`}
          >
            {getAllDepartments()}
          </button>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-sm text-sm font-[Rajdhani] tracking-wider uppercase transition-all duration-300 ${
                selectedDepartment === dept
                  ? "bg-[#C61331] text-white shadow-[0_0_20px_rgba(198,19,49,0.3)]"
                  : "bg-white/5 text-white/60 border border-white/10 hover:border-[#C61331]/50 hover:text-white"
              }`}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        {/* Jobs Grid */}
        <motion.div
          key={selectedDepartment}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredJobs.map((job) => {
            const jobData = getJobData(job);
            return (
              <motion.div
                key={jobData.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-[#1a1a1a] border border-white/10 rounded-lg p-6 hover:border-[#C61331]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(198,19,49,0.2)] flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 font-[Orbitron]">
                          {jobData.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/60 text-sm font-[Rajdhani]">
                          <Briefcase size={16} />
                          <span>{jobData.department}</span>
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 bg-[#C61331]/20 text-[#C61331] text-xs font-[Rajdhani] tracking-wider uppercase rounded-sm ml-2">
                        Remote
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-6 flex-grow font-[Rajdhani] leading-relaxed">
                    {jobData.description}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={buildApplicationMailto(jobData.title, language)}
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#C61331] hover:bg-[#ff4444] text-white font-[Rajdhani] font-semibold py-3 rounded-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(198,19,49,0.4)]"
                  >
                    {getCandidatar()}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Fallback CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-4 font-[Rajdhani]">
            {getNaoEncontrou()} <span className="text-[#C61331] font-semibold">brunopereira3d@icloud.com</span>
          </p>
          <a
            href="mailto:brunopereira3d@icloud.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-[#C61331]/50 text-[#C61331] hover:bg-[#C61331]/10 font-[Rajdhani] font-semibold rounded-sm transition-all duration-300"
          >
            {getEnviarCurriculo()}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
