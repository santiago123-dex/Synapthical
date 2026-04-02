export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

const contactPhone = '+57 317 779 5830';
const contactDigits = contactPhone.replace(/\D/g, '');
const address = 'Cra. 6 #20-35, Mall Centenario, piso -1, local 13, Armenia, Quindío';

export const site = {
  brand: {
    name: 'Synapthical Sport',
    shortName: 'Synapthical',
    wordmarkMode: 'image',
    logo: {
      src: '/brand/logo-synapthical-sport.svg',
      alt: 'Logo de Synapthical Sport',
    },
    tagline: 'Recuperación precisa, movimiento funcional y retorno seguro al deporte.',
    locationLabel: 'Armenia, Quindío',
    colors: {
      primary: '#12161D',
      secondary: '#1FAFC4',
      accent: '#4D4A97',
      surface: '#F7F7F5',
      surfaceStrong: '#FFFFFF',
      border: '#D9DDE3',
      text: '#1B2230',
      muted: '#647084',
    },
  },
  seo: {
    title: 'Synapthical Sport | Rehabilitación deportiva en Armenia, Quindío',
    description:
      'Centro de rehabilitación deportiva enfocado en readaptación física, prevención funcional y retorno seguro al deporte en Armenia, Quindío.',
    ogImage: '/og-image.svg',
  },
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies NavItem[],
  hero: {
    eyebrow: 'Rehabilitación deportiva y readaptación física',
    headline: 'Un proceso clínico y funcional para volver a moverte con seguridad.',
    description:
      'En Synapthical Sport acompañamos lesiones deportivas, recuperación funcional y retorno progresivo al entrenamiento con una atención cercana, precisa y orientada al movimiento real.',
    primaryCta: {
      label: 'Agenda por WhatsApp',
      href: `https://wa.me/${contactDigits}`,
    },
    secondaryCta: {
      label: 'Explorar servicios',
      href: '#servicios',
    },
    microcopy: 'Atención personalizada en Armenia, Quindío · Evaluación, tratamiento y retorno deportivo.',
    metrics: [
      'Evaluación funcional individual',
      'Readaptación progresiva al entrenamiento',
      'Acompañamiento para retorno seguro',
    ],
  },
  about: {
    eyebrow: 'Nosotros',
    title: 'Una experiencia de recuperación más clara, técnica y cercana.',
    description:
      'Diseñamos procesos para personas activas, deportistas aficionados y atletas que necesitan recuperar capacidad física, entender mejor su lesión y volver al deporte con una progresión bien guiada.',
    mission:
      'Nuestro enfoque integra valoración funcional, control de carga y objetivos concretos para que cada intervención responda al contexto deportivo y al momento real de recuperación.',
    highlights: [
      {
        title: 'Atención personalizada',
        description: 'Cada proceso se adapta a la lesión, el contexto deportivo y la meta de retorno de cada paciente.',
      },
      {
        title: 'Criterio funcional',
        description: 'La recuperación no termina cuando baja el dolor; buscamos capacidad real para moverte, entrenar y rendir mejor.',
      },
      {
        title: 'Seguimiento progresivo',
        description: 'Organizamos la evolución por etapas medibles para reducir incertidumbre y volver con más confianza.',
      },
    ] satisfies HighlightItem[],
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Intervenciones pensadas para cada etapa del regreso al movimiento.',
    intro:
      'La oferta está estructurada para comunicar un enfoque clínico-premium: claro, técnico y fácil de actualizar desde un solo archivo.',
    items: [
      {
        title: 'Fisioterapia deportiva',
        description: 'Valoración e intervención para molestias, sobrecargas y lesiones derivadas del entrenamiento o la competencia.',
      },
      {
        title: 'Rehabilitación de lesiones',
        description: 'Procesos para recuperar movilidad, control, fuerza y tolerancia a la carga después de una lesión.',
      },
      {
        title: 'Readaptación al entrenamiento',
        description: 'Puente entre la fase clínica y el regreso progresivo al ejercicio, la práctica o la competencia.',
      },
      {
        title: 'Prevención funcional',
        description: 'Trabajo específico para mejorar patrones de movimiento y reducir factores de riesgo.',
      },
      {
        title: 'Evaluación de movimiento',
        description: 'Análisis funcional para identificar limitaciones, compensaciones y prioridades de intervención.',
      },
      {
        title: 'Retorno seguro al deporte',
        description: 'Acompañamiento con criterios físicos claros para volver a entrenar con mayor seguridad.',
      },
    ] satisfies ServiceItem[],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Empieza tu proceso con una orientación directa y rápida.',
    description:
      'La landing sigue enfocada en conversión directa por WhatsApp, llamada y ubicación. Los datos simulados pueden cambiarse luego desde este mismo archivo.',
    phoneDisplay: contactPhone,
    phoneHref: `tel:${contactDigits}`,
    whatsappHref: `https://wa.me/${contactDigits}`,
    instagramHandle: '@synapthicalsport',
    instagramHref: 'https://instagram.com/synapthicalsport',
    email: 'contacto@synapthicalsport.com',
    emailHref: 'mailto:contacto@synapthicalsport.com',
    address,
    mapHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
    schedule: [
      'Lunes a Viernes · 7:00 a.m. – 7:00 p.m.',
      'Sábados · 8:00 a.m. – 1:00 p.m.',
    ],
  },
  footer: {
    text: 'Synapthical Sport · Rehabilitación deportiva, readaptación física y retorno seguro al movimiento.',
  },
} as const;

export type SiteConfig = typeof site;
