export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ServiceItem = {
  title: string;
  description: string;
  forWho: string;
  outcomes: string[];
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type SpecialistItem = {
  name: string;
  role: string;
  focus: string;
  credentials: string[];
  initials: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  context: string;
  outcome: string;
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
      'Terapias especializadas para deportistas y personas activas: fisioterapia deportiva, rehabilitación de lesiones y retorno seguro al entrenamiento en Armenia, Quindío.',
    ogImage: '/og-image.svg',
  },
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies NavItem[],
  hero: {
    eyebrow: 'Terapias especializadas para deportistas y personas activas',
    headline: 'Recupera tu movilidad y vuelve a rendir al máximo con un plan guiado por especialistas.',
    description:
      'Valoramos tu lesión, entendemos tu objetivo y diseñamos un proceso claro para ayudarte a disminuir dolor, recuperar capacidad física y volver al entrenamiento con más seguridad.',
    primaryCta: {
      label: 'Agenda tu valoración',
      href: `https://wa.me/${contactDigits}`,
    },
    secondaryCta: {
      label: 'Ver tratamientos',
      href: '#servicios',
    },
    microcopy: 'Atención personalizada en Armenia, Quindío · Evaluación, tratamiento y retorno deportivo.',
    metrics: [
      'Valoración funcional individual',
      'Plan terapéutico según tu objetivo',
      'Seguimiento progresivo para volver a entrenar',
    ],
  },
  trust: {
    eyebrow: 'Por qué confiar en Synapthical Sport',
    title: 'La página no solo debe verse bien: debe transmitir criterio clínico, seguridad y resultados.',
    intro:
      'Por eso la estructura ahora prioriza autoridad, claridad de tratamientos y un camino directo para agendar desde el primer scroll.',
    items: [
      {
        title: 'Enfoque especializado',
        description: 'Procesos orientados a fisioterapia deportiva, rehabilitación funcional y retorno seguro al entrenamiento.',
      },
      {
        title: 'Atención por objetivos',
        description: 'Cada valoración parte del problema, del nivel de actividad y de la meta de recuperación del paciente.',
      },
      {
        title: 'Seguimiento progresivo',
        description: 'No se trata solo de bajar dolor, sino de recuperar movimiento, carga y confianza para volver a rendir.',
      },
    ] satisfies HighlightItem[],
  },
  about: {
    eyebrow: 'Nosotros',
    title: 'Un servicio pensado para convertir confianza en recuperación real.',
    description:
      'Synapthical Sport acompaña a deportistas, personas activas y pacientes en procesos donde no basta con aliviar molestias: hace falta entender el cuerpo, recuperar capacidad física y volver al movimiento con criterio.',
    mission:
      'Trabajamos con valoración funcional, progresión terapéutica y acompañamiento cercano para que cada persona sepa qué se está tratando, cómo va avanzando y qué necesita para volver a su mejor nivel.',
    highlights: [
      {
        title: 'Valoración con criterio clínico',
        description: 'Analizamos dolor, movimiento, carga y objetivos para construir una ruta de trabajo más precisa.',
      },
      {
        title: 'Tratamientos orientados al rendimiento',
        description: 'El plan terapéutico se adapta a tu deporte, a tu nivel de actividad y al momento en que estás.',
      },
      {
        title: 'Acompañamiento para volver con seguridad',
        description: 'La recuperación se organiza por etapas para minimizar recaídas y ganar confianza al retomar el entrenamiento.',
      },
    ] satisfies HighlightItem[],
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Tratamientos claros para problemas concretos.',
    intro:
      'Cada servicio está explicado para que el paciente entienda qué hacemos, para quién está pensado y qué resultado buscamos.',
    items: [
      {
        title: 'Fisioterapia deportiva',
        description: 'Intervención para molestias, sobrecargas y lesiones que afectan tu entrenamiento, competencia o actividad física habitual.',
        forWho: 'Ideal para deportistas, runners, jugadores recreativos y personas activas con dolor o limitación funcional.',
        outcomes: ['Disminuir dolor', 'Mejorar movilidad', 'Recuperar confianza en el movimiento'],
      },
      {
        title: 'Rehabilitación de lesiones',
        description: 'Procesos terapéuticos para recuperar movilidad, control, fuerza y tolerancia a la carga después de una lesión.',
        forWho: 'Indicada para quienes vienen de esguinces, lesiones musculares, dolor articular o procesos postraumáticos.',
        outcomes: ['Recuperar capacidad física', 'Mejorar control del movimiento', 'Volver a tu rutina con mayor seguridad'],
      },
      {
        title: 'Readaptación al entrenamiento',
        description: 'Puente entre la fase clínica y el regreso progresivo al ejercicio, la práctica deportiva o la competencia.',
        forWho: 'Pensada para pacientes que ya mejoraron el dolor, pero aún no están listos para volver a entrenar al nivel deseado.',
        outcomes: ['Retomar cargas progresivas', 'Reducir riesgo de recaída', 'Volver a entrenar con criterio'],
      },
      {
        title: 'Prevención funcional',
        description: 'Trabajo específico para detectar limitaciones, mejorar patrones de movimiento y reducir factores de riesgo.',
        forWho: 'Útil para personas que entrenan de forma constante y quieren prevenir molestias o mejorar su preparación física.',
        outcomes: ['Optimizar movimiento', 'Corregir compensaciones', 'Reducir sobrecargas recurrentes'],
      },
      {
        title: 'Evaluación de movimiento',
        description: 'Análisis funcional para identificar qué estructuras, movimientos o cargas están limitando tu progreso.',
        forWho: 'Recomendada cuando hay dolor persistente, recaídas o dudas sobre el origen de la molestia.',
        outcomes: ['Entender la causa funcional', 'Definir prioridades terapéuticas', 'Diseñar una ruta clara de recuperación'],
      },
      {
        title: 'Retorno seguro al deporte',
        description: 'Acompañamiento con criterios físicos claros para definir cuándo y cómo volver a entrenar o competir.',
        forWho: 'Para quienes necesitan una transición más segura entre la recuperación y el rendimiento deportivo.',
        outcomes: ['Ganar seguridad', 'Mejorar tolerancia a la carga', 'Volver a competir con mejor preparación'],
      },
    ] satisfies ServiceItem[],
  },
  team: {
    eyebrow: 'Equipo',
    title: 'Autoridad clínica y foco deportivo en cada proceso.',
    intro:
      'Esta sección está pensada para mostrar al equipo, su enfoque y su experiencia. Hoy queda armada con perfiles demostrativos para reemplazarlos por nombres y fotos reales.',
    members: [
      {
        name: 'Dirección clínica',
        role: 'Fisioterapia deportiva y rehabilitación funcional',
        focus: 'Lidera la valoración inicial, la definición del plan terapéutico y el seguimiento clínico del paciente.',
        credentials: ['Valoración funcional', 'Manejo del dolor', 'Control de carga y progresión'],
        initials: 'DC',
      },
      {
        name: 'Readaptación física',
        role: 'Retorno al entrenamiento y al deporte',
        focus: 'Trabaja la transición entre la recuperación clínica y el regreso progresivo a la práctica deportiva.',
        credentials: ['Readaptación al esfuerzo', 'Ejercicio terapéutico', 'Retorno seguro al deporte'],
        initials: 'RF',
      },
      {
        name: 'Prevención y rendimiento',
        role: 'Movimiento, estabilidad y preparación funcional',
        focus: 'Ayuda a mejorar patrones de movimiento, prevenir recaídas y aumentar confianza en el rendimiento.',
        credentials: ['Prevención funcional', 'Técnica de movimiento', 'Seguimiento por objetivos'],
        initials: 'PR',
      },
    ] satisfies SpecialistItem[],
  },
  testimonials: {
    eyebrow: 'Resultados',
    title: 'Historias y resultados que ayudan a generar confianza.',
    intro:
      'La sección queda preparada para reemplazar estos casos de ejemplo por testimonios reales, autorizados y verificables.',
    items: [
      {
        quote: 'Llegué con dolor de rodilla al correr y con miedo de volver a entrenar. El proceso me ayudó a entender qué me estaba pasando y a regresar con mucha más seguridad.',
        name: 'Paciente de running',
        context: 'Dolor de rodilla y limitación al trotar',
        outcome: 'Volvió progresivamente al entrenamiento sin dolor incapacitante.',
      },
      {
        quote: 'Lo que más valoré fue que no solo trataron el dolor: también me guiaron en cómo volver a cargar y moverme mejor.',
        name: 'Paciente de cross training',
        context: 'Molestia lumbar recurrente durante cargas altas',
        outcome: 'Mejoró tolerancia al esfuerzo y confianza para retomar rutinas.',
      },
      {
        quote: 'Sentí claridad durante todo el proceso. Sabía qué estaba trabajando, por qué y qué necesitaba para regresar a jugar.',
        name: 'Paciente de fútbol amateur',
        context: 'Recuperación posterior a lesión muscular',
        outcome: 'Regresó de forma progresiva a entrenamientos y partidos.',
      },
    ] satisfies TestimonialItem[],
  },
  contact: {
    eyebrow: 'Agenda tu valoración',
    title: 'Da el primer paso y recibe orientación para empezar tu recuperación.',
    description:
      'Si tienes dolor, vienes de una lesión o quieres volver a entrenar con más seguridad, contáctanos por WhatsApp o llamada y agenda tu valoración inicial.',
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
    text: 'Synapthical Sport · Página orientada a generar confianza y convertir pacientes en valoración.',
  },
} as const;

export type SiteConfig = typeof site;
