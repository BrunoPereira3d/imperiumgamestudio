// DESIGN: Cinematic Dark Forge — Main page assembling all sections
// Full-page scroll experience with particle background and smooth transitions

import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OutsourcingSection from "@/components/sections/OutsourcingSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import CareersSection from "@/components/sections/CareersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <OutsourcingSection />
        <PortfolioSection />
        <AboutSection />
        <BlogSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
