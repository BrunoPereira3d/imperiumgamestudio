// ============================================================
// DESIGN: Cinematic Dark Forge — Neo-Brutalismo Cinematográfico
// Colors: Deep black base, crimson red (#C61331) accents, metallic grays
// Typography: Orbitron (display) + Rajdhani (body)
// ============================================================

export const LOGO_URL = "/assets/logo-horizontal.webp";
export const LOGO_ICON_URL = "/assets/logo-icon.webp";
export const LOGO_ORIGINAL_URL = "/assets/logo-stacked.webp";

// Primary brand color
export const PRIMARY_COLOR = "#C61331";

export const HERO_BG_URL = "/assets/hero-bg.webp";

// Placeholder images: real photography for these services has not been
// provided yet. Replace the files in client/public/assets/ when available.
export const SERVICES_3D_URL = "/assets/services-3d.webp";
export const GAME_DEV_URL = "/assets/game-dev.webp";
export const OUTSOURCING_URL = "/assets/outsourcing.webp";
export const PORTFOLIO_URL = "/assets/outsourcing.webp";
export const ANIMATION_URL = "/assets/animation.webp";
export const PRINT_3D_URL = "/assets/print-3d.webp";
export const DIGITAL_SOLUTIONS_URL = "/assets/digital-solutions.webp";
export const VR_TRAINING_URL = "/assets/vr-training.webp";

export const NAV_ITEMS_PT = [
  { label: "Início", href: "#hero" },
  { label: "GAMES", href: "#projects" },
  { label: "Serviços B2B", href: "#outsourcing" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Quem Somos", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Carreiras", href: "#careers" },
  { label: "Contato", href: "#contact" },
];

export const NAV_ITEMS_EN = [
  { label: "Home", href: "#hero" },
  { label: "GAMES", href: "#projects" },
  { label: "B2B Services", href: "#outsourcing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const NAV_ITEMS_ES = [
  { label: "Inicio", href: "#hero" },
  { label: "JUEGOS", href: "#projects" },
  { label: "Servicios B2B", href: "#outsourcing" },
  { label: "Portafolio", href: "#portfolio" },
  { label: "Quiénes Somos", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Carreras", href: "#careers" },
  { label: "Contacto", href: "#contact" },
];

// Helper function to get nav items based on language
export const getNavItems = (language: string) => {
  if (language === "en") return NAV_ITEMS_EN;
  if (language === "es") return NAV_ITEMS_ES;
  return NAV_ITEMS_PT;
};

export const NAV_ITEMS = NAV_ITEMS_PT;

export const SERVICES = [
  {
    title: "Desenvolvimento de Games",
    titleEn: "Game Development",
    titleEs: "Desarrollo de Juegos",
    description: "Criamos experiências interativas memoráveis, desde a concepção até o lançamento. Nosso time domina engines como Unreal e Unity para entregar jogos de alta qualidade.",
    descriptionEn: "We create memorable interactive experiences, from conception to launch. Our team masters engines like Unreal and Unity to deliver high-quality games.",
    descriptionEs: "Creamos experiencias interactivas memorables, desde la concepción hasta el lanzamiento. Nuestro equipo domina motores como Unreal y Unity para entregar juegos de alta calidad.",
    icon: "gamepad",
    image: GAME_DEV_URL,
  },
  {
    title: "Modelagem 3D",
    titleEn: "3D Modeling",
    titleEs: "Modelado 3D",
    description: "Modelagem de personagens, cenários, props e assets com qualidade AAA. Trabalhamos com hard-surface, orgânico e estilizado para atender qualquer demanda.",
    descriptionEn: "Character, environment, prop and asset modeling with AAA quality. We work with hard-surface, organic and stylized to meet any demand.",
    descriptionEs: "Modelado de personajes, entornos, props y assets con calidad AAA. Trabajamos con hard-surface, orgánico y estilizado para satisfacer cualquier demanda.",
    icon: "cube",
    image: SERVICES_3D_URL,
  },
  {
    title: "Animação",
    titleEn: "Animation",
    titleEs: "Animación",
    description: "Damos vida aos seus projetos com animações fluidas e expressivas. De cutscenes cinematográficas a animações de gameplay, cobrimos todo o espectro.",
    descriptionEn: "We bring your projects to life with smooth and expressive animations. From cinematic cutscenes to gameplay animations, we cover the full spectrum.",
    descriptionEs: "Damos vida a tus proyectos con animaciones fluidas y expresivas. Desde cinemáticas cinematográficas hasta animaciones de gameplay, cubrimos todo el espectro.",
    icon: "film",
    image: ANIMATION_URL,
  },
  {
    title: "Impressão 3D",
    titleEn: "3D Printing",
    titleEs: "Impresión 3D",
    description: "Transformamos modelos digitais em objetos físicos de alta fidelidade. Ideal para protótipos, maquetes, colecionáveis e peças personalizadas.",
    descriptionEn: "We transform digital models into high-fidelity physical objects. Ideal for prototypes, maquettes, collectibles and custom pieces.",
    descriptionEs: "Transformamos modelos digitales en objetos físicos de alta fidelidad. Ideal para prototipos, maquetas, coleccionables y piezas personalizadas.",
    icon: "printer",
    image: PRINT_3D_URL,
  },
  {
    title: "Soluções Digitais",
    titleEn: "Digital Solutions",
    titleEs: "Soluciones Digitales",
    description: "Desenvolvemos aplicações web e mobile sob medida para transformar sua visão em realidade. De MVPs até plataformas escaláveis, entregamos soluções que crescem com seu negócio.",
    descriptionEn: "We develop custom web and mobile applications to turn your vision into reality. From MVPs to scalable platforms, we deliver solutions that grow with your business.",
    descriptionEs: "Desarrollamos aplicaciones web y móviles personalizadas para convertir tu visión en realidad. Desde MVPs hasta plataformas escalables, entregamos soluciones que crecen con tu negocio.",
    icon: "smartphone",
    image: DIGITAL_SOLUTIONS_URL,
  },
  {
    title: "Treinamento VR",
    titleEn: "VR Training",
    titleEs: "Capacitación VR",
    description: "Experiências imersivas de realidade virtual para treinamento corporativo. Prepare suas equipes com simulações realistas que aumentam retenção e efetividade do aprendizado.",
    descriptionEn: "Immersive virtual reality experiences for corporate training. Prepare your teams with realistic simulations that increase retention and learning effectiveness.",
    descriptionEs: "Experiencias inmersivas de realidad virtual para capacitación corporativa. Prepara tus equipos con simulaciones realistas que aumentan la retención y efectividad del aprendizaje.",
    icon: "headphones",
    image: VR_TRAINING_URL,
  },
];

export const OUTSOURCING_FEATURES = [
  {
    title: "Equipe Dedicada",
    titleEn: "Dedicated Team",
    titleEs: "Equipo Dedicado",
    description: "Alocamos profissionais especializados exclusivamente para o seu projeto, garantindo foco e consistência na entrega.",
    descriptionEn: "We allocate specialized professionals exclusively for your project, ensuring focus and consistency in delivery.",
    descriptionEs: "Asignamos profesionales especializados exclusivamente para tu proyecto, garantizando enfoque y consistencia en la entrega.",
  },
  {
    title: "Pipeline Integrado",
    titleEn: "Integrated Pipeline",
    titleEs: "Pipeline Integrado",
    description: "Nos adaptamos ao seu pipeline de produção, ferramentas e metodologias para uma integração transparente.",
    descriptionEn: "We adapt to your production pipeline, tools and methodologies for seamless integration.",
    descriptionEs: "Nos adaptamos a tu pipeline de producción, herramientas y metodologías para una integración sin problemas.",
  },
  {
    title: "Escalabilidade",
    titleEn: "Scalability",
    titleEs: "Escalabilidad",
    description: "Aumente ou reduza a equipe conforme a demanda do projeto, sem os custos fixos de contratação permanente.",
    descriptionEn: "Scale your team up or down based on project demand, without fixed permanent hiring costs.",
    descriptionEs: "Escala tu equipo hacia arriba o hacia abajo según la demanda del proyecto, sin costos fijos de contratación permanente.",
  },
  {
    title: "Qualidade AAA",
    titleEn: "AAA Quality",
    titleEs: "Calidad AAA",
    description: "Padrões rigorosos de qualidade em cada entrega, com revisões iterativas e comunicação constante.",
    descriptionEn: "Rigorous quality standards in every delivery, with iterative reviews and constant communication.",
    descriptionEs: "Estándares de calidad rigurosos en cada entrega, con revisiones iterativas y comunicación constante.",
  },
  {
    title: "NDA & Segurança",
    titleEn: "NDA & Security",
    titleEs: "NDA y Seguridad",
    description: "Protocolos rígidos de confidencialidade e segurança de dados para proteger sua propriedade intelectual.",
    descriptionEn: "Strict confidentiality and data security protocols to protect your intellectual property.",
    descriptionEs: "Protocolos estrictos de confidencialidad y seguridad de datos para proteger tu propiedad intelectual.",
  },
  {
    title: "Comunicação Ágil",
    titleEn: "Agile Communication",
    titleEs: "Comunicación Ágil",
    description: "Reuniões regulares, relatórios de progresso e canais diretos para manter seu projeto sempre no trilho.",
    descriptionEn: "Regular meetings, progress reports and direct channels to keep your project on track.",
    descriptionEs: "Reuniones regulares, informes de progreso y canales directos para mantener tu proyecto en el camino correcto.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Haunted Hype",
    genre: "Found Footage Horror",
    description: "Você é um influencer decadente fabricando 'provas' de fantasmas em locações abandonadas para salvar seu canal — usando a própria câmera e microfone para se filmar. A brincadeira vira pesadelo quando eventos sobrenaturais genuínos começam a acontecer, e o que era conteúdo viral se transforma em uma luta real pela sobrevivência.",
    descriptionEn: "You're a washed-up influencer faking ghost 'evidence' in abandoned locations to save your channel — filming yourself with your own camera and microphone. The act turns into a nightmare when genuinely supernatural events start happening, and what was viral content becomes a real fight for survival.",
    descriptionEs: "Eres un influencer venido a menos fabricando 'pruebas' de fantasmas en lugares abandonados para salvar tu canal — filmándote con tu propia cámara y micrófono. El acto se convierte en pesadilla cuando empiezan a ocurrir eventos genuinamente sobrenaturales, y lo que era contenido viral se vuelve una lucha real por la supervivencia.",
    image: "/assets/haunted-hype.webp",
    status: "Em Desenvolvimento",
    statusEn: "In Development",
    statusEs: "En Desarrollo",
  },
  {
    id: 2,
    title: "Ghouls Next Door",
    genre: "Tower Defense",
    description: "Neste game você controla os monstros! Proteja seu descanso eterno posicionando hordas de criaturas simpáticas para impedir que aldeões enfurecidos destruam a necrópole.",
    descriptionEn: "In this game you control the monsters! Protect your eternal rest by positioning hordes of friendly creatures to prevent angry villagers from destroying the necropolis.",
    descriptionEs: "¡En este juego controlas los monstruos! Protege tu descanso eterno posicionando hordas de criaturas amigables para evitar que los aldeanos furiosos destruyan la necrópolis.",
    image: "/assets/thumb-ghouls-next-door.webp",
    status: "Em Desenvolvimento",
    statusEn: "In Development",
    statusEs: "En Desarrollo",
  },
  {
    id: 3,
    title: "Glitch Rail",
    genre: "Anomaly Finder",
    description: "Uma corrida desesperada pela sobrevivência na linha vicinal abandonada de Paranapiacaba. Entidades sobrenaturais testam sua atenção e coragem em meio à neblina eterna. Cada detalhe importa. Cada erro pode ser seu último.",
    descriptionEn: "A desperate race for survival on the abandoned branch line of Paranapiacaba. Supernatural entities test your attention and courage amid eternal mist. Every detail matters. Every mistake could be your last.",
    descriptionEs: "Una carrera desesperada por la supervivencia en la línea ramal abandonada de Paranapiacaba. Entidades sobrenaturales ponen a prueba tu atención y coraje en medio de la niebla eterna. Cada detalle podría ser el último.",
    image: "/assets/glitch-rail.webp",
    status: "Em Desenvolvimento",
    statusEn: "In Development",
    statusEs: "En Desarrollo",
  },
];

// Contact channels
export const CONTACT_EMAIL = "brunopereira@imperiumgamestudio.com";
export const WHATSAPP_NUMBER = "5511957318258";
export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const PORTFOLIO_WORKS = [
  {
    id: 1,
    title: "Viking Low-Poly",
    category: "Modelagem 3D",
    categoryEn: "3D Modeling",
    categoryEs: "Modelado 3D",
    description: "Criação de assets otimizados com estética 'paper-craft' única para jogos mobile ou indie.",
    descriptionEn: "Creation of optimized assets with unique 'paper-craft' aesthetic for mobile or indie games.",
    descriptionEs: "Creación de assets optimizados con estética 'paper-craft' única para juegos móviles o indie.",
    image: "/assets/portfolio-viking-lowpoly.webp",
  },
  {
    id: 2,
    title: "Expressão Goblin",
    category: "Modelagem 3D",
    categoryEn: "3D Modeling",
    categoryEs: "Modelado 3D",
    description: "Modelagem facial de alta frequência e texturização de pele para NPCs com personalidade.",
    descriptionEn: "High-frequency facial modeling and skin texturing for NPCs with personality.",
    descriptionEs: "Modelado facial de alta frecuencia y texturización de piel para NPCs con personalidad.",
    image: "/assets/portfolio-expressao-goblin.webp",
  },
  {
    id: 3,
    title: "Cavaleiro Marshmallow",
    category: "Modelagem 3D",
    categoryEn: "3D Modeling",
    categoryEs: "Modelado 3D",
    description: "Renderização de materiais complexos e iluminação atmosférica para cenários de fantasia.",
    descriptionEn: "Rendering of complex materials and atmospheric lighting for fantasy scenarios.",
    descriptionEs: "Renderización de materiales complejos e iluminación atmosférica para escenarios de fantasía.",
    image: "/assets/portfolio-cavaleiro-marshmallow.webp",
  },
  {
    id: 4,
    title: "Mago Estilizado",
    category: "Modelagem 3D",
    categoryEn: "3D Modeling",
    categoryEs: "Modelado 3D",
    description: "Estudo de personagem com foco em texturização de tecido e madeira. Design carismático pronto para rigging.",
    descriptionEn: "Character study focusing on fabric and wood texturing. Charismatic design ready for rigging.",
    descriptionEs: "Estudio de personaje enfocado en texturización de tela y madera. Diseño carismático listo para rigging.",
    image: "/assets/portfolio-mago-estilizado.webp",
  },
  {
    id: 5,
    title: "Leaf Man",
    category: "Concept Art",
    categoryEn: "Concept Art",
    categoryEs: "Concept Art",
    description: "Guardião da floresta em estilo cartoon, com folhas texturizadas e expressão carismática. Concept original: Cam Kendell.",
    descriptionEn: "Cartoon-style forest guardian with textured leaves and a charismatic expression. Original concept: Cam Kendell.",
    descriptionEs: "Guardián del bosque de estilo cartoon, con hojas texturizadas y expresión carismática. Concepto original: Cam Kendell.",
    image: "/assets/portfolio-leaf-man.webp",
  },
  {
    id: 6,
    title: "Entidade Possuída",
    category: "Modelagem 3D",
    categoryEn: "3D Modeling",
    categoryEs: "Modelado 3D",
    description: "Estudo de textura de pele rachada e queimada para criaturas humanoides possuídas, com foco em detalhe de subsuperfície.",
    descriptionEn: "Cracked, burned skin texture study for possessed humanoid creatures, with a focus on subsurface detail.",
    descriptionEs: "Estudio de textura de piel agrietada y quemada para criaturas humanoides poseídas, con foco en el detalle de subsuperficie.",
    image: "/assets/portfolio-cracked-entity.webp",
  },
  {
    id: 7,
    title: "Espada de Cristal",
    category: "Modelagem 3D",
    categoryEn: "3D Modeling",
    categoryEs: "Modelado 3D",
    description: "Prop de espada estilizada com cristal encravado no punho, modelada e texturizada para uso em jogo. Concept original: Evgeniy Dolzhenkov.",
    descriptionEn: "Stylized sword prop with a crystal set in the hilt, modeled and textured for in-game use. Original concept: Evgeniy Dolzhenkov.",
    descriptionEs: "Prop de espada estilizada con un cristal engastado en la empuñadura, modelada y texturizada para uso en el juego. Concepto original: Evgeniy Dolzhenkov.",
    image: "/assets/portfolio-crystal-sword-poster.webp",
    video: "/assets/portfolio-crystal-sword.mp4",
  },
  {
    id: 8,
    title: "Crazy Clowns",
    category: "Modelagem 3D",
    categoryEn: "3D Modeling",
    categoryEs: "Modelado 3D",
    description: "Prop de arma/gadget estilizado, com materiais cartoon e mecanismos detalhados. Concept original: Pixune Studios.",
    descriptionEn: "Stylized weapon/gadget prop with cartoon materials and detailed mechanisms. Original concept: Pixune Studios.",
    descriptionEs: "Prop de arma/gadget estilizado, con materiales cartoon y mecanismos detallados. Concepto original: Pixune Studios.",
    image: "/assets/portfolio-crazy-clowns-poster.webp",
    video: "/assets/portfolio-crazy-clowns.mp4",
  },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Projetos Entregues", labelEn: "Projects Delivered", labelEs: "Proyectos Entregados" },
  { value: 8, suffix: "+", label: "Anos de Experiência", labelEn: "Years of Experience", labelEs: "Años de Experiencia" },
  { value: 15, suffix: "+", label: "Clientes Ativos", labelEn: "Active Clients", labelEs: "Clientes Activos" },
];
