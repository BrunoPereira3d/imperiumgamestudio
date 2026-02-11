import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, TrendingUp, CheckCircle2 } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clareza absoluta através de espaçamento generoso
 * - Hierarquia visual via tipografia e cor
 * - Paleta restrita: branco, azul-escuro, cinzas
 * - Funcionalidade em primeiro lugar
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">Company</div>
          <div className="flex gap-8 items-center">
            <a href="#services" className="text-sm hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contato
            </a>
            <Button size="sm">Começar</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Soluções inovadoras para seu negócio
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transformamos ideias em resultados mensuráveis. Nossas soluções são projetadas para crescimento sustentável e impacto real.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Explorar <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Saber mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-b border-border">
        <div className="container py-24">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Service Card 1 */}
            <div className="group">
              <div className="mb-6 p-4 bg-secondary rounded-lg w-fit">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Estratégia Digital</h3>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvemos estratégias personalizadas que alinham tecnologia com seus objetivos de negócio.
              </p>
              <div className="mt-6 h-0.5 bg-border group-hover:bg-primary transition-colors duration-300"></div>
            </div>

            {/* Service Card 2 */}
            <div className="group">
              <div className="mb-6 p-4 bg-secondary rounded-lg w-fit">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Consultoria</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossos especialistas guiam sua empresa através de transformações complexas com confiança.
              </p>
              <div className="mt-6 h-0.5 bg-border group-hover:bg-primary transition-colors duration-300"></div>
            </div>

            {/* Service Card 3 */}
            <div className="group">
              <div className="mb-6 p-4 bg-secondary rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Crescimento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos processos que aceleram crescimento sustentável e rentabilidade.
              </p>
              <div className="mt-6 h-0.5 bg-border group-hover:bg-primary transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="border-b border-border">
        <div className="container py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Por que nos escolher</h2>
              <ul className="space-y-4">
                {[
                  "Experiência comprovada em diversos setores",
                  "Equipe dedicada e altamente qualificada",
                  "Resultados mensuráveis e transparentes",
                  "Suporte contínuo e parcerias de longo prazo"
                ].map((feature, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-lg p-12 h-96 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="text-6xl font-bold text-border mb-4">+500</div>
                <p className="text-lg">Projetos completados com sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="border-b border-border">
        <div className="container py-24 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar seu negócio.
          </p>
          <Button size="lg" className="gap-2">
            Agendar uma conversa <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4">Company</div>
              <p className="text-sm text-muted-foreground">
                Transformando negócios através de inovação e estratégia.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Company. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
