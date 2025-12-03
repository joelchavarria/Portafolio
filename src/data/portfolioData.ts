// Datos centrales de tu portafolio

export const heroData = {
  name: "Joel Antonio Chavarría García",
  role:
    "Desarrollador de software · Infraestructura · Automatización y microservicios",
  punchline: "Entrego valor, no solo commits.",
  summary:
    "Ingeniero en sistemas con foco en desarrollo de aplicaciones, automatización de procesos e infraestructura. Me muevo bien entre backend, DevOps y soporte a usuarios finales para resolver problemas de negocio reales.",
  ctaPrimary: "Ver proyectos",
  ctaSecondary: "Descargar CV",
};

export const aboutData = {
  text: `
Soy estudiante de Ingeniería en Sistemas de la Información, con experiencia
construyendo soluciones para sectores como educación, retail y servicios.

He trabajado tanto en desarrollo de software (web, escritorio y móvil), como
en administración de servidores, redes y automatización de procesos internos.
Me interesan especialmente los proyectos donde hay impacto directo en las
operaciones del negocio y en la vida de los usuarios finales.
`,
  highlights: [
    "Desarrollo de módulos de Recursos Humanos con Next.js, React y GraphQL",
    "Automatización de procesos internos con Node.js, Prisma y SQL Server",
    "Experiencia en infraestructura: Linux, Windows Server, redes y backups",
    "Integraciones con Issabel PBX, servicios web y sistemas de terceros",
  ],
};

// -----------------------------------------------------------------------------
// EXPERIENCIA
// -----------------------------------------------------------------------------

export const experienceData = [
  {
    company: "E. Chamorro Industrial, S.A.",
    role: "Desarrollador de Aplicaciones Jr",
    period: "Octubre 2024 — Octubre 2025",
    location: "Granada, Nicaragua",
    bullets: [
      "Desarrollo de aplicaciones de escritorio, web y móviles para uso interno.",
      "Construcción de módulos de facturación, inventario, reportes y procesos operativos.",
      "Uso de React, TypeScript, Node.js, Angular y SQL Server en entornos productivos.",
      "Apoyo en automatización de reportes y procesos contables.",
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
    company: "TetraImpacts",
    role: "Desarrollador Full-Stack",
    period: "Octubre 2025 — Actualidad",
    location: "Nicaragua · Remoto",
    bullets: [
      "Desarrollo de módulos del Sistema de Recursos Humanos con Next.js, React, TypeScript y GraphQL.",
      "Automatización de procesos en Gestión Organizacional, Provisión de Puesto y Administración de Recursos Humanos.",
      "Implementación de formularios complejos, carga de documentos, permisos por rol y flujos de aprobación.",
      "Integración con backend en Node.js + GraphQL y manejo de archivos vía presigned URLs (S3).",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Docker",
      "AWS S3",
    ],
  },
  {
    company: "Freelancer",
    role: "Software Engineer",
    period: "2024 — 2025",
    location: "Remoto",
    bullets: [
      "Diseño de APIs y microservicios con Node.js, Express y Prisma para integrar sistemas internos y externos.",
      "Despliegue de aplicaciones en Railway, Azure VPS y servidores Linux con Nginx y Docker.",
      "Implementación de almacenamiento en AWS S3 y manejo de archivos con presigned URLs.",
    ],
    stack: [
      "Node.js",
      "Express",
      "Prisma",
      "SQL Server",
      "AWS S3",
      "Azure VPS",
      "Railway",
      "Linux",
    ],
  },
  {
    company: "E. Chamorro Industrial, S.A.",
    role: "Auxiliar de Infraestructura",
    period: "Septiembre 2022 — Octubre 2024",
    location: "Granada, Nicaragua",
    bullets: [
      "Administración de Active Directory, servidores Windows y Linux.",
      "Gestión de firewalls Fortinet y seguridad perimetral.",
      "Implementación y administración de contenedores Docker en infraestructura Nutanix.",
      "Soporte a usuarios: hardware, software, redes y servicios corporativos (Microsoft 365, Exchange).",
      "Gestión de respaldos internos y externos, monitoreo básico y recuperación.",
    ],
    stack: [
      "Windows Server",
      "Linux",
      "Fortinet",
      "Docker",
      "Nutanix",
      "Active Directory",
      "Microsoft 365",
    ],
  },
];

// -----------------------------------------------------------------------------
// PROYECTOS
// -----------------------------------------------------------------------------

export const projectsData = [
  {
    name: "Sistema de Monitoreo de Órdenes y Tiempos de Entrega (Farmcity)",
    description:
      "Plataforma tipo tracking para una cadena de farmacias (5 sucursales + call center) que monitorea el ciclo completo de las órdenes: facturación, armado, despacho y entrega, tanto en ventas físicas como por llamada.",
    impact:
      "Visibilidad en tiempo real del rendimiento por sucursal, reducción de tiempos muertos, identificación de cuellos de botella y mejora directa en la experiencia del cliente.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "SQL Server",
      "Nginx",
      "Microservicios",
      "Nutanix",
    ],
    link: "#",
  },
  {
    name: "Automatización de Procesos de Recursos Humanos",
    description:
      "Automatización modular de procesos de RRHH: solicitudes, expedientes, vacaciones, permisos, cargas masivas y flujos de aprobación, usando arquitectura web moderna.",
    impact:
      "Reducción significativa del tiempo administrativo y de la dependencia del área de TI para tareas repetitivas. Los usuarios gestionan sus solicitudes y documentos directamente en el sistema.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Prisma",
      "SQL Server",
      "AWS S3",
      "Docker",
    ],
    link: "#",
  },
  {
    name: "Cron Jobs de Sincronización Contable y Comercial",
    description:
      "Microservicios y tareas programadas responsables de sincronizar facturación, inventarios, compras y ventas entre sistemas internos y plataformas externas.",
    impact:
      "Eliminación de reprocesos manuales, reducción de errores contables y disponibilidad de información actualizada para gerencia y operaciones.",
    stack: ["Node.js", "TypeScript", "SQL Server", "Prisma", "REST API", "Cron"],
    link: "#",
  },
  {
    name: "Portal Centralizado de Servicios Web y Centro de Ayuda",
    description:
      "Sitio interno que organiza y documenta servicios web corporativos. Permite consultar endpoints, probar integraciones y revisar documentación técnica.",
    impact:
      "Mejor comunicación entre equipos, reducción de tickets de soporte relacionados a integraciones y mayor adopción de APIs internas.",
    stack: ["React", "TypeScript", "Node.js", "Express", "Docker", "Nginx"],
    link: "#",
  },
  {
    name: "Sistema de Facturación e Inventario",
    description:
      "Aplicación web multi-sucursal para gestión de inventario, ventas, proformas y clientes, con reportes operativos y control de accesos.",
    impact:
      "Mayor control de inventario, reducción de errores de facturación y mejor trazabilidad de documentos.",
    stack: ["React", "Node.js", "TypeScript", "SQL Server", "Prisma", "Docker"],
    link: "#",
  },
  {
    name: "App Móvil de Inventario",
    description:
      "Aplicación React Native para conteo y auditoría de inventarios con escáner de códigos de barra y sincronización con servicios backend.",
    impact:
      "Disminución del tiempo de conteo, menos errores humanos y actualización inmediata del stock en el sistema.",
    stack: ["React Native", "Expo", "REST API"],
    link: "#",
  },
  {
    name: "Integración VOIP con Issabel PBX",
    description:
      "Integración entre la central telefónica Issabel y sistemas internos para registrar llamadas, tiempos de respuesta y desempeño de agentes.",
    impact:
      "Mayor trazabilidad de llamadas, métricas claras para el área de soporte/ventas y mejora en la calidad de atención.",
    stack: ["Node.js", "Express", "Issabel PBX", "MySQL", "Linux"],
    link: "#",
  },
  {
    name: "Infraestructura y Deploy Multiplataforma",
    description:
      "Despliegue de aplicaciones y microservicios en Railway, Azure VPS y servidores Linux, utilizando Docker, Nginx y flujos básicos de CI/CD.",
    impact:
      "Entornos replicables, despliegues consistentes y menor riesgo de errores entre ambientes.",
    stack: ["Docker", "Railway", "Azure VPS", "Linux", "Nginx", "GitHub Actions"],
    link: "#",
  },
  {
    name: "Bot de Atención Interna (WhatsApp & Telegram)",
    description:
      "Bot de atención interna que automatiza consultas frecuentes y tareas operativas usando WhatsApp y Telegram como interfaz.",
    impact:
      "Reducción de carga operativa del equipo de TI y disponibilidad 24/7 para consultas simples.",
    stack: ["Node.js", "whatsapp-web.js", "Telegram API"],
    link: "#",
  },
];

// -----------------------------------------------------------------------------
// SKILLS
// -----------------------------------------------------------------------------

export const skillsData = {
  core: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "MongoDB",
    "Firebase",
    "C#",
    "Java",
    "SQL Server",
  ],
  devops: [
    "Linux",
    "Docker",
    "Nginx",
    "AWS S3",
    "Azure VPS",
    "Railway",
    "Microservicios",
    "Nutanix",
    "Git",
    "GitHub",
    "CI/CD",
  ],
  tools: [
    "Reporting Services",
    "Microsoft 365",
    "Active Directory",
    "Issabel PBX",
    "Firebase Admin",
    "Nutanix Prism",
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
    "Fortinet NSE 1 – 2024",
    "Fortinet NSE 2 – 2024",
    "Specialist Robotics Process Automation – 2021",
  ],
};

// -----------------------------------------------------------------------------
// CONTACTO
// -----------------------------------------------------------------------------

export const contactData = {
  headline: "¿Hablamos de tu próximo proyecto?",
  text: `
Busco aportar en equipos donde la tecnología se use para resolver problemas reales:
optimización de procesos, sistemas internos robustos y automatización.

Si necesitas a alguien que se mueva bien entre desarrollo, infraestructura
y soporte a usuarios, podemos colaborar.
`,
  email: "joelchavarria308@gmail.com",
  phone: "+505 8995 3348",
  location: "Granada, Nicaragua · UTC-6",
  linkedin: "https://www.linkedin.com/in/joel-chavarria-89422819a",
};
