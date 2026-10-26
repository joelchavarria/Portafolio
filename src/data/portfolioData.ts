// Datos centrales de tu portafolio

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  impact: string;
  stack: string[];
  link: string; // "" si no hay link público
};

export const heroData = {
  name: "Joel Antonio Chavarría García",
  role: "Software Engineer · Infraestructura · Automatización",
  punchline: "Construyo soluciones empresariales seguras, escalables y medibles.",
  summary:
    "Ingeniero en Sistemas en formación con experiencia profesional en desarrollo de software e infraestructura empresarial. He participado en la administración de redes, firewalls Fortinet, servidores Windows/Linux y en el desarrollo de aplicaciones web con React y TypeScript. Enfocado en entregar soluciones seguras, eficientes y orientadas a resultados en entornos productivos.",
  ctaPrimary: "Ver proyectos",
  ctaSecondary: "Contactar por WhatsApp",
};

export const aboutData = {
  text: `
Ingeniero en Sistemas en formación con experiencia combinando desarrollo de software e infraestructura TI.

He trabajado construyendo soluciones web, escritorio y móviles, y también operando plataformas empresariales: servidores Windows/Linux, redes, respaldos, seguridad perimetral con Fortinet y automatización de procesos internos.

Me interesan los proyectos donde el impacto se mide en la operación: menos reprocesos, menos tiempos muertos y mejor experiencia para usuarios finales.
`,
  highlights: [
    "Automatización de procesos y jobs programados para operación (Node.js + SQL Server + TypeScript)",
    "Infraestructura empresarial: Windows/Linux, redes, backups, Microsoft 365 y Exchange",
    "Seguridad perimetral e integraciones: Fortinet (VPN IPsec, segmentación) y servicios internos",
  ],
};

// -----------------------------------------------------------------------------
// EXPERIENCIA
// -----------------------------------------------------------------------------

export const experienceData: ExperienceItem[] = [
  {
    company: "TetraImpacts",
    role: "Desarrollador Full-Stack",
    period: "Octubre 2025 — Enero 2026",
    location: "Nicaragua · Remoto",
    bullets: [
      "Desarrollo de funcionalidades para plataformas tipo SaaS: formularios complejos, carga de documentos, permisos por rol y flujos de aprobación.",
      "Integración con backend (Node.js + GraphQL) y manejo de archivos mediante presigned URLs (S3).",
      "Trabajo colaborativo con enfoque en calidad, mantenibilidad y entrega incremental.",
    ],
    stack: ["Next.js", "React", "TypeScript", "GraphQL", "Node.js", "Docker"],
  },
  {
    company: "E. Chamorro Industrial, S.A.",
    role: "Desarrollador de Aplicaciones Jr",
    period: "Octubre 2024 — Octubre 2025",
    location: "Granada, Nicaragua",
    bullets: [
      "Desarrollo de aplicaciones de escritorio, web y móviles para uso interno.",
      "Construcción de módulos de facturación, inventario, reportes y procesos operativos.",
      "Uso de React, TypeScript, Node.js, Angular y SQL Server en entornos productivos.",
      "Apoyo en automatización de reportes y mejoras de procesos para áreas operativas.",
    ],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Angular",
      "SQL Server",
      "Reporting Services",
    ],
  },
  {
    company: "E. Chamorro Industrial, S.A.",
    role: "Auxiliar de Infraestructura",
    period: "Septiembre 2022 — Octubre 2024",
    location: "Granada, Nicaragua",
    bullets: [
      "Administración de Active Directory y servicios corporativos (Microsoft 365, Exchange).",
      "Gestión de firewalls Fortinet y seguridad perimetral (políticas, segmentación y soporte VPN).",
      "Administración de servidores Windows y Linux; soporte a redes y usuarios mediante tickets.",
      "Implementación y administración de contenedores Docker sobre infraestructura Nutanix.",
      "Gestión de respaldos internos/externos, monitoreo básico y apoyo en recuperación ante incidentes.",
      "Coordinación operativa con equipo de soporte y control de correcto uso de hardware.",
    ],
    stack: [
      "Windows Server",
      "Linux",
      "Fortinet",
      "Docker",
      "Nutanix",
      "Active Directory",
      "Microsoft 365",
      "Exchange",
    ],
  },
  {
    company: "Consultoría / Proyectos",
    role: "Software Engineer (Freelance)",
    period: "2024 — 2025",
    location: "Remoto",
    bullets: [
      "Diseño de APIs y servicios con Node.js/Express para integrar sistemas internos y externos.",
      "Despliegue de aplicaciones en servidores Linux y entornos cloud, usando Docker y Nginx.",
      "Implementación de almacenamiento y manejo de archivos con presigned URLs (S3) cuando aplica.",
    ],
    stack: ["Node.js", "Express", "TypeScript", "SQL Server", "Docker", "Linux", "Nginx"],
  },
];

// -----------------------------------------------------------------------------
// PROYECTOS
// -----------------------------------------------------------------------------

export const projectsData: ProjectItem[] = [
  {
    name: "Sistema de Monitoreo de Órdenes y Tiempos de Entrega (Farmacity)",
    description:
      "Plataforma de monitoreo para cadena de farmacias (sucursales + call center) que visualiza el ciclo completo de las órdenes: facturación, armado, despacho y entrega.",
    impact:
      "Visibilidad operativa en tiempo real, identificación de cuellos de botella y mejora del cumplimiento de tiempos de entrega.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "SQL Server",
      "Nginx",
      "Microservicios",
      "Nutanix",
    ],
    link: "",
  },
  {
    name: "Automatización de Procesos de Recursos Humanos",
    description:
      "Automatización de procesos de RRHH: solicitudes, expedientes, vacaciones/permisos, cargas masivas y flujos de aprobación con arquitectura web moderna.",
    impact:
      "Reducción del tiempo administrativo y menor dependencia del área de TI para tareas repetitivas; autoservicio para usuarios.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL", "Docker", "AWS S3"],
    link: "",
  },
  {
    name: "Cron Jobs de Sincronización Contable y Comercial",
    description:
      "Servicios y tareas programadas para sincronizar facturación, inventarios y ventas entre sistemas internos y plataformas externas.",
    impact:
      "Menos reproceso manual, reducción de errores y disponibilidad de datos actualizados para operaciones y gerencia.",
    stack: ["Node.js", "TypeScript", "SQL Server", "REST API", "Cron"],
    link: "",
  },
  {
    name: "Portal Centralizado de Servicios Web y Centro de Ayuda",
    description:
      "Sitio interno para organizar endpoints, documentación técnica y guía de integraciones; orientado a consumo por equipos internos.",
    impact:
      "Mejor comunicación entre equipos y disminución de tickets relacionados a integraciones y consultas repetitivas.",
    stack: ["React", "TypeScript", "Node.js", "Express", "Docker", "Nginx"],
    link: "",
  },
  {
    name: "Sistema de Facturación e Inventario",
    description:
      "Aplicación web multi-sucursal para inventario, ventas, proformas y clientes, con control de accesos y reportes operativos.",
    impact:
      "Mayor control de stock, reducción de errores de facturación y trazabilidad de documentos.",
    stack: ["React", "TypeScript", "Node.js", "SQL Server", "Docker"],
    link: "",
  },
  {
    name: "App Móvil de Inventario",
    description:
      "Aplicación React Native para conteo y auditoría de inventarios con escáner de códigos de barra y sincronización con servicios backend.",
    impact:
      "Disminución del tiempo de conteo, menos errores humanos y actualización más oportuna del inventario.",
    stack: ["React Native", "Expo", "REST API"],
    link: "",
  },
  {
    name: "Integración VOIP con Issabel PBX",
    description:
      "Integración entre Issabel y sistemas internos para registrar eventos/llamadas y habilitar métricas operativas del área.",
    impact:
      "Mayor trazabilidad de llamadas y mejor monitoreo del desempeño de atención.",
    stack: ["Node.js", "Express", "Issabel PBX", "MySQL", "Linux"],
    link: "",
  },
  {
    name: "Infraestructura y Deploy Multiplataforma",
    description:
      "Despliegue de aplicaciones y servicios en servidores Linux y entornos cloud, utilizando Docker, Nginx y flujos básicos de CI/CD.",
    impact:
      "Entornos replicables, despliegues consistentes y menor riesgo de errores entre ambientes.",
    stack: ["Docker", "Linux", "Nginx", "Git", "GitHub Actions", "CI/CD"],
    link: "",
  },
  {
    name: "Bot de Atención Interna (WhatsApp & Telegram)",
    description:
      "Bot para automatizar consultas frecuentes y tareas operativas internas usando WhatsApp y Telegram como interfaz.",
    impact:
      "Reducción de carga operativa del equipo de TI y disponibilidad para consultas simples.",
    stack: ["Node.js", "whatsapp-web.js", "Telegram API"],
    link: "",
  },
];

// -----------------------------------------------------------------------------
// SKILLS
// -----------------------------------------------------------------------------

export const skillsData = {
  core: ["Next.js", "React", "TypeScript", "Node.js", "SQL Server", "GraphQL"],
  devops: [
    "Linux",
    "Docker",
    "Nginx",
    "Kubernetes",
    "Azure",
    "AWS",
    "Grafana",
    "CI/CD",
    "GitHub Actions",
    "Git",
  ],
  tools: [
    "Microsoft 365",
    "Active Directory",
    "Exchange",
    "Fortinet",
    "Reporting Services",
    "Nutanix Prism",
    "Firebase",
    "AWS S3",
  ],
  soft: ["Comunicación", "Trabajo en equipo", "Resolución de problemas"],
};

// -----------------------------------------------------------------------------
// EDUCACIÓN
// -----------------------------------------------------------------------------

export const educationData = {
  degree: "Ingeniería en Sistemas de la Información",
  institution: "Universidad Politécnica de Nicaragua",
  year: "En curso",
  extras: [
    "Curso de Desarrollo de Apps Móviles – 2024",
    "Fortinet Certified Fundamentals in Cybersecurity – 2023",
    "Fortinet NSE 1 – 2025",
    "Fortinet NSE 2 – 2025",
    "Specialist Robotics Process Automation – 2021",
  ],
};

// -----------------------------------------------------------------------------
// CONTACTO
// -----------------------------------------------------------------------------

export const contactData = {
  headline: "¿Construimos algo sólido y escalable?",
  text: `
Busco aportar en equipos donde la tecnología se use para resolver problemas reales:
optimización de procesos, automatización y sistemas internos robustos.

Si necesitas a alguien que se mueva con soltura entre desarrollo, infraestructura
y operación, podemos conversar.
`,
  email: "joel.chavarria@devtester.lat",
  phone: "+505 8995 3348",
  whatsappNumber: "50589953348",
  location: "Granada, Nicaragua · UTC-6",
  linkedin: "https://www.linkedin.com/in/joel-chavarria-89422819a",
};

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(message)}`;
