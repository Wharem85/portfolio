export type Lang = 'en' | 'es';

export interface Job {
  role: string;
  company: string;
  location: string;
  date: string;
  summary?: string;
  bullets: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  name: string;
  role: string;
  description: string;
  badge?: string;
  stack: string[];
  url: string;
  urlDisplay: string;
}

export interface ContentShape {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    roleShort: string;
    location: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statusText: string;
  };
  about: {
    title: string;
    text: string;
  };
  experience: {
    title: string;
    jobs: Job[];
  };
  projects: {
    title: string;
    subtitle: string;
    visitLabel: string;
    items: Project[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  education: {
    title: string;
    degreeTitle: string;
    degree: string;
    school: string;
    english: string;
    leadershipTitle: string;
    leadership: { title: string; text: string }[];
  };
  contact: {
    title: string;
    text: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    linkedinLabel: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}

export const content: Record<Lang, ContentShape> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Wilmer Monterrozo',
      role: 'Technical Lead - Mobile Development | React Native & React.js Specialist',
      roleShort: 'Technical Lead, Mobile Development',
      location: 'Guatemala City · Remote available',
      summary:
        "Systems Engineer and Technical Lead with 6+ years of experience in full stack and mobile development, specialized in React Native and React.js. I lead mobile engineering teams, standardize components to cut deployment time, and deliver scalable applications across banking, e-invoicing, and healthcare industries in Latin America.",
      ctaPrimary: 'View Experience',
      ctaSecondary: 'Get in Touch',
      statusText: 'available for remote work',
    },
    about: {
      title: 'About Me',
      text:
        "I'm a Systems Engineer and Technical Lead with over 6 years of experience across full stack and mobile development, with a strong specialization in React Native and React.js. Throughout my career I've led mobile engineering teams, standardized reusable components that cut deployment time by 20%, and delivered scalable applications across the banking, e-invoicing, and healthcare industries in Latin America. I enjoy cross-functional collaboration, code review, and sprint planning, and I actively incorporate AI-assisted development tools into my daily workflow to ship faster without sacrificing quality.",
    },
    experience: {
      title: 'Professional Experience',
      jobs: [
        {
          role: 'Technical Lead - Mobile Development',
          company: 'Digifact',
          location: 'Guatemala (Remote)',
          date: 'Jun 2024 - Present',
          summary:
            'Oversee mobile development for a suite of electronic invoicing applications deployed across multiple Latin American countries, combining technical leadership with hands-on development in React Native.',
          bullets: [
            'Lead the mobile development team at Digifact, a company specialized in electronic invoicing across multiple countries in Latin America.',
            'Reduced deployment time by 20% by standardizing reusable components in React Native.',
            'Manage team workflows, define sprint goals, review code, and ensure timely releases and updates of the applications.',
            'Coordinate the adoption of new features, React Native ecosystem updates, and emerging technologies in alignment with business goals and regulatory requirements in each country.',
          ],
        },
        {
          role: 'Frontend Developer',
          company: 'CODE Marketing',
          location: 'Guatemala',
          date: 'Dec 2023 - Jun 2024',
          bullets: [
            'Led the successful implementation of projects using React.js, significantly improving the speed and usability of user interfaces.',
            'Developed mobile applications with React Native, delivering versatile and efficient solutions across platforms.',
            'Contributed to the proactive maintenance of existing applications, ensuring optimal performance and resolving issues.',
          ],
        },
        {
          role: 'Full Stack Developer',
          company: 'Banco G&T Continental',
          location: 'Guatemala · Project-based contract',
          date: 'Jul 2023 - Nov 2023',
          bullets: [
            'Applied C#, JavaScript, C++, SQL Server, and ASP to deliver both client-side and server-side development.',
            'Led the creation and enhancement of essential applications used in banking agencies, from account management systems to internal tools, improving operational efficiency.',
            'Collaborated with multidisciplinary teams to implement emerging technologies, including advanced authentication methods and transaction process optimization.',
            'Worked closely with design teams, business analysts, and technical support to align technology solutions with business needs and quality standards.',
          ],
        },
        {
          role: 'Full Stack Developer',
          company: 'Binary Group',
          location: 'Guatemala',
          date: 'Dec 2022 - Jun 2023',
          bullets: [
            'Developed the user interface using React.js, JavaScript, SCSS, and MUI.',
            'Worked with the backend and API layer to ensure proper platform integration and performance optimization.',
            'Collaborated closely with clients to understand requirements and deliver effective, efficient solutions.',
            'Contributed to the success of SmartDent, significantly improving the user experience.',
          ],
        },
        {
          role: 'Web Developer',
          company: 'Bavaria Motors',
          location: 'Guatemala · 10-month contract',
          date: 'Feb 2022 - Nov 2022',
          bullets: [
            'Developed and modified modules in Odoo 15 using Python, PostgreSQL, and XML.',
            'Built custom modules with the team to cover functionality not natively available in Odoo.',
            'Modified existing modules to align with client-specific requirements.',
          ],
        },
        {
          role: 'Freelance Full Stack Developer',
          company: 'Independent',
          location: 'Remote',
          date: 'Apr 2020 - Jan 2022',
          bullets: [
            'Built a complete school management platform end-to-end: designed the PostgreSQL database, developed the backend with Node.js, and built an API to power the full platform.',
            'Delivered various freelance applications for clients through online freelance platforms.',
          ],
        },
      ],
    },
    projects: {
      title: 'Featured Freelance Projects',
      subtitle: 'A couple of freelance engagements I\'m proud to have shipped to production.',
      visitLabel: 'Visit site',
      items: [
        {
          name: 'Pita con Nudo',
          role: 'Freelance · Frontend Developer for Formula Systems',
          description:
            'E-commerce storefront for baby and mom products, currently live in production. The project won Shark Tank Guatemala and was then assigned to Formula Systems, which brought me on as a freelance frontend developer to build the entire storefront — product catalog, cart, and checkout — with Next.js.',
          badge: 'Shark Tank Guatemala winner',
          stack: ['Next.js', 'E-commerce'],
          url: 'https://www.pitaconnudo.com/',
          urlDisplay: 'pitaconnudo.com',
        },
        {
          name: 'Learniapp',
          role: 'Freelance · Frontend Developer for Nekodee',
          description:
            'Cloud-based school management platform for private schools, centralizing student records, attendance, grades, and parent communication in a single tool. Hired by Nekodee as a freelance frontend developer, I built the web interface — dashboards, parent portal, and academic modules — with Next.js.',
          stack: ['Next.js', 'School Management'],
          url: 'https://www.learniapp.com/es',
          urlDisplay: 'learniapp.com',
        },
      ],
    },
    skills: {
      title: 'Skills',
      groups: [
        { title: 'Mobile & Frontend Frameworks', items: ['React.js', 'React Native'] },
        { title: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / SCSS'] },
        { title: 'UI Libraries & Design', items: ['Material UI (MUI)', 'XML', 'Figma', 'Adobe XD', 'Prototyping'] },
        { title: 'Backend Languages', items: ['C#', 'Python', 'Node.js', 'C++'] },
        { title: 'Backend Technologies', items: ['ASP.NET', 'REST APIs'] },
        { title: 'Databases', items: ['PostgreSQL', 'SQL Server', 'MySQL'] },
        { title: 'Tools & Methodology', items: ['Git', 'Scrum / Agile', 'Odoo 15'] },
        { title: 'AI-Assisted Development', items: ['Cursor', 'GitHub Copilot', 'Kiro', 'Antigravity'] },
      ],
    },
    education: {
      title: 'Education & Leadership',
      degreeTitle: 'Education',
      degree: 'Systems Engineering',
      school: 'Mariano Gálvez University of Guatemala',
      english: 'English proficiency: B2 level (certified 2023)',
      leadershipTitle: 'Leadership & Management',
      leadership: [
        { title: 'Technical Leadership', text: 'Team mentoring, code reviews, and architecture definition.' },
        { title: 'Project Delivery', text: 'Sprint planning, release management, and alignment with business objectives.' },
        { title: 'Soft Skills', text: 'Cross-departmental communication, client collaboration, and requirements analysis.' },
      ],
    },
    contact: {
      title: "Let's Talk",
      text:
        "I'm open to new opportunities and collaborations in mobile and web development. Feel free to reach out.",
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React, TypeScript & Tailwind CSS.',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Wilmer Monterrozo',
      role: 'Technical Lead - Desarrollo Móvil | Especialista en React Native y React.js',
      roleShort: 'Technical Lead, Desarrollo Móvil',
      location: 'Ciudad de Guatemala · Disponible para remoto',
      summary:
        'Ingeniero en Sistemas y Technical Lead con más de 6 años de experiencia en desarrollo full stack y móvil, especializado en React Native y React.js. Lidero equipos de ingeniería móvil, estandarizo componentes para reducir tiempos de despliegue, y entrego aplicaciones escalables en los sectores bancario, de facturación electrónica y salud en Latinoamérica.',
      ctaPrimary: 'Ver Experiencia',
      ctaSecondary: 'Contactarme',
      statusText: 'disponible para trabajo remoto',
    },
    about: {
      title: 'Sobre Mí',
      text:
        'Soy Ingeniero en Sistemas y Technical Lead con más de 6 años de experiencia en desarrollo full stack y móvil, con una fuerte especialización en React Native y React.js. A lo largo de mi carrera he liderado equipos de ingeniería móvil, estandaricé componentes reutilizables que redujeron el tiempo de despliegue en un 20%, y entregué aplicaciones escalables en los sectores bancario, de facturación electrónica y salud en Latinoamérica. Disfruto la colaboración multidisciplinaria, el code review y la planificación de sprints, e incorporo activamente herramientas de desarrollo asistido por IA en mi flujo de trabajo diario para entregar más rápido sin sacrificar calidad.',
    },
    experience: {
      title: 'Experiencia Profesional',
      jobs: [
        {
          role: 'Technical Lead - Desarrollo Móvil',
          company: 'Digifact',
          location: 'Guatemala (Remoto)',
          date: 'Jun 2024 - Presente',
          summary:
            'Superviso el desarrollo móvil de una suite de aplicaciones de facturación electrónica desplegadas en varios países de Latinoamérica, combinando liderazgo técnico con desarrollo práctico en React Native.',
          bullets: [
            'Lidero el equipo de desarrollo móvil en Digifact, empresa especializada en facturación electrónica en múltiples países de Latinoamérica.',
            'Reduje el tiempo de despliegue en un 20% al estandarizar componentes reutilizables en React Native.',
            'Gestiono los flujos de trabajo del equipo, defino objetivos de sprint, reviso código y aseguro lanzamientos y actualizaciones puntuales de las aplicaciones.',
            'Coordino la adopción de nuevas funcionalidades, actualizaciones del ecosistema React Native y tecnologías emergentes, alineadas con los objetivos del negocio y los requisitos regulatorios de cada país.',
          ],
        },
        {
          role: 'Frontend Developer',
          company: 'CODE Marketing',
          location: 'Guatemala',
          date: 'Dic 2023 - Jun 2024',
          bullets: [
            'Lideré la implementación exitosa de proyectos con React.js, mejorando significativamente la velocidad y usabilidad de las interfaces de usuario.',
            'Desarrollé aplicaciones móviles con React Native, entregando soluciones versátiles y eficientes multiplataforma.',
            'Contribuí al mantenimiento proactivo de aplicaciones existentes, asegurando un rendimiento óptimo y resolviendo incidencias.',
          ],
        },
        {
          role: 'Full Stack Developer',
          company: 'Banco G&T Continental',
          location: 'Guatemala · Contrato por proyecto',
          date: 'Jul 2023 - Nov 2023',
          bullets: [
            'Apliqué C#, JavaScript, C++, SQL Server y ASP para el desarrollo tanto del lado cliente como servidor.',
            'Lideré la creación y mejora de aplicaciones esenciales usadas en agencias bancarias, desde sistemas de gestión de cuentas hasta herramientas internas, mejorando la eficiencia operativa.',
            'Colaboré con equipos multidisciplinarios para implementar tecnologías emergentes, incluyendo métodos avanzados de autenticación y optimización de procesos transaccionales.',
            'Trabajé de cerca con equipos de diseño, analistas de negocio y soporte técnico para alinear las soluciones tecnológicas con las necesidades del negocio y los estándares de calidad.',
          ],
        },
        {
          role: 'Full Stack Developer',
          company: 'Binary Group',
          location: 'Guatemala',
          date: 'Dic 2022 - Jun 2023',
          bullets: [
            'Desarrollé la interfaz de usuario utilizando React.js, JavaScript, SCSS y MUI.',
            'Trabajé con el backend y la capa de API para asegurar la correcta integración de la plataforma y la optimización del rendimiento.',
            'Colaboré estrechamente con los clientes para entender requerimientos y entregar soluciones efectivas y eficientes.',
            'Contribuí al éxito de SmartDent, mejorando significativamente la experiencia de usuario.',
          ],
        },
        {
          role: 'Web Developer',
          company: 'Bavaria Motors',
          location: 'Guatemala · Contrato de 10 meses',
          date: 'Feb 2022 - Nov 2022',
          bullets: [
            'Desarrollé y modifiqué módulos en Odoo 15 usando Python, PostgreSQL y XML.',
            'Construí módulos personalizados junto al equipo para cubrir funcionalidades no disponibles de forma nativa en Odoo.',
            'Modifiqué módulos existentes para alinearlos con los requerimientos específicos de cada cliente.',
          ],
        },
        {
          role: 'Freelance Full Stack Developer',
          company: 'Independiente',
          location: 'Remoto',
          date: 'Abr 2020 - Ene 2022',
          bullets: [
            'Construí de principio a fin una plataforma de gestión escolar: diseñé la base de datos en PostgreSQL, desarrollé el backend con Node.js y construí una API para dar soporte a toda la plataforma.',
            'Entregué diversas aplicaciones freelance para clientes a través de plataformas de trabajo independiente en línea.',
          ],
        },
      ],
    },
    projects: {
      title: 'Proyectos Freelance Destacados',
      subtitle: 'Un par de proyectos freelance que llevé a producción y de los que me siento orgulloso.',
      visitLabel: 'Visitar sitio',
      items: [
        {
          name: 'Pita con Nudo',
          role: 'Freelance · Frontend Developer para Formula Systems',
          description:
            'Storefront de e-commerce de productos para bebés y mamás, actualmente en producción. El proyecto fue ganador de Shark Tank Guatemala y luego fue asignado a Formula Systems, empresa que me contrató como freelance para construir todo el storefront — catálogo de productos, carrito y checkout — con Next.js.',
          badge: 'Ganador de Shark Tank Guatemala',
          stack: ['Next.js', 'E-commerce'],
          url: 'https://www.pitaconnudo.com/',
          urlDisplay: 'pitaconnudo.com',
        },
        {
          name: 'Learniapp',
          role: 'Freelance · Frontend Developer para Nekodee',
          description:
            'Plataforma de gestión escolar en la nube para colegios privados, que centraliza registros de estudiantes, asistencia, calificaciones y comunicación con padres en una sola herramienta. Contratado por Nekodee como freelance, construí la interfaz web — dashboards, portal de padres y módulos académicos — con Next.js.',
          stack: ['Next.js', 'Gestión Escolar'],
          url: 'https://www.learniapp.com/es',
          urlDisplay: 'learniapp.com',
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      groups: [
        { title: 'Frameworks Móviles y Frontend', items: ['React.js', 'React Native'] },
        { title: 'Lenguajes', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / SCSS'] },
        { title: 'Librerías UI y Diseño', items: ['Material UI (MUI)', 'XML', 'Figma', 'Adobe XD', 'Prototipado'] },
        { title: 'Lenguajes Backend', items: ['C#', 'Python', 'Node.js', 'C++'] },
        { title: 'Tecnologías Backend', items: ['ASP.NET', 'REST APIs'] },
        { title: 'Bases de Datos', items: ['PostgreSQL', 'SQL Server', 'MySQL'] },
        { title: 'Herramientas y Metodología', items: ['Git', 'Scrum / Agile', 'Odoo 15'] },
        { title: 'Desarrollo Asistido por IA', items: ['Cursor', 'GitHub Copilot', 'Kiro', 'Antigravity'] },
      ],
    },
    education: {
      title: 'Educación y Liderazgo',
      degreeTitle: 'Educación',
      degree: 'Ingeniería en Sistemas',
      school: 'Universidad Mariano Gálvez de Guatemala',
      english: 'Nivel de inglés: B2 (certificado en 2023)',
      leadershipTitle: 'Liderazgo y Gestión',
      leadership: [
        { title: 'Liderazgo Técnico', text: 'Mentoría de equipos, code reviews y definición de arquitectura.' },
        { title: 'Entrega de Proyectos', text: 'Planificación de sprints, gestión de releases y alineación con objetivos de negocio.' },
        { title: 'Habilidades Blandas', text: 'Comunicación interdepartamental, colaboración con clientes y análisis de requerimientos.' },
      ],
    },
    contact: {
      title: 'Hablemos',
      text: 'Estoy abierto a nuevas oportunidades y colaboraciones en desarrollo móvil y web. No dudes en escribirme.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      builtWith: 'Construido con React, TypeScript y Tailwind CSS.',
    },
  },
};

export const personal = {
  email: 'wharem85@hotmail.com',
  phone: '+502 3033-4410',
  linkedin: 'https://linkedin.com/in/wmonterrozo',
  linkedinDisplay: 'linkedin.com/in/wmonterrozo',
  github: '',
};
