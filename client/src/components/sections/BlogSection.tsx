// DESIGN: Blog section with article cards and simple layout
// Displays featured articles with metadata and read time

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogPost {
  id: number;
  slug: string;
  titlePt: string;
  titleEn: string;
  titleEs: string;
  descriptionPt: string;
  descriptionEn: string;
  descriptionEs: string;
  image: string;
  date: string;
  readTime: number;
  category: string;
  author: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "unreal-engine-5-performance",
    titlePt: "Otimizando Performance em Unreal Engine 5",
    titleEn: "Optimizing Performance in Unreal Engine 5",
    titleEs: "Optimizando el Rendimiento en Unreal Engine 5",
    descriptionPt: "Dicas e técnicas avançadas para melhorar a performance de seus projetos em UE5, incluindo profiling, LOD systems e material optimization.",
    descriptionEn: "Advanced tips and techniques to improve performance of your UE5 projects, including profiling, LOD systems, and material optimization.",
    descriptionEs: "Consejos y técnicas avanzadas para mejorar el rendimiento de tus proyectos en UE5, incluyendo profiling, sistemas LOD y optimización de materiales.",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=400&fit=crop",
    date: "2026-02-10",
    readTime: 8,
    category: "Development",
    author: "Bruno Pereira",
  },
  {
    id: 2,
    slug: "3d-modeling-game-assets",
    titlePt: "Modelagem 3D de Assets para Games",
    titleEn: "3D Modeling Game Assets",
    titleEs: "Modelado 3D de Assets para Juegos",
    descriptionPt: "Guia completo sobre técnicas de modelagem 3D, texturização e otimização de assets para uso em engines de game.",
    descriptionEn: "Complete guide on 3D modeling techniques, texturing, and asset optimization for use in game engines.",
    descriptionEs: "Guía completa sobre técnicas de modelado 3D, texturizado y optimización de assets para uso en motores de juegos.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    date: "2026-02-05",
    readTime: 12,
    category: "Art",
    author: "Bruno Pereira",
  },
  {
    id: 3,
    slug: "animation-principles-games",
    titlePt: "Princípios de Animação para Games",
    titleEn: "Animation Principles for Games",
    titleEs: "Principios de Animación para Juegos",
    descriptionPt: "Explore os 12 princípios de animação aplicados ao desenvolvimento de games, com exemplos práticos e boas práticas.",
    descriptionEn: "Explore the 12 principles of animation applied to game development, with practical examples and best practices.",
    descriptionEs: "Explora los 12 principios de animación aplicados al desarrollo de juegos, con ejemplos prácticos y mejores prácticas.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=400&fit=crop",
    date: "2026-01-28",
    readTime: 10,
    category: "Animation",
    author: "Bruno Pereira",
  },
];

export default function BlogSection() {
  const { language } = useLanguage();

  const getTitle = () => {
    if (language === "en") return "Blog";
    if (language === "es") return "Blog";
    return "Blog";
  };

  const getSubtitle = () => {
    if (language === "en") return "Articles & Insights";
    if (language === "es") return "Artículos e Insights";
    return "Artigos e Insights";
  };

  const getReadMore = () => {
    if (language === "en") return "Read More";
    if (language === "es") return "Leer Más";
    return "Ler Mais";
  };

  const getPostData = (post: BlogPost) => {
    if (language === "en") {
      return {
        title: post.titleEn,
        description: post.descriptionEn,
      };
    }
    if (language === "es") {
      return {
        title: post.titleEs,
        description: post.descriptionEs,
      };
    }
    return {
      title: post.titlePt,
      description: post.descriptionPt,
    };
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === "en") {
      return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    }
    if (language === "es") {
      return date.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });
    }
    return date.toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <section id="blog" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#C61331] rounded-full blur-3xl" />
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
            <a href="#contact" className="text-[#C61331] hover:text-[#ff4444] transition-colors">
              Sugerir tópico →
            </a>
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => {
            const postData = getPostData(post);
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden hover:border-[#C61331]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(198,19,49,0.3)] flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={postData.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-[#C61331]/20 text-[#C61331] text-xs font-[Rajdhani] tracking-wider uppercase rounded-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 font-[Orbitron] line-clamp-2 group-hover:text-[#C61331] transition-colors">
                      {postData.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm mb-4 line-clamp-2 flex-grow font-[Rajdhani]">
                      {postData.description}
                    </p>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-white/40 text-xs mb-4 font-[Rajdhani]">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime} min
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#C61331] hover:text-[#ff4444] transition-colors font-[Rajdhani] text-sm font-semibold group/link"
                    >
                      {getReadMore()}
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
