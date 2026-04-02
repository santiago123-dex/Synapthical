export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type HeroProofItem = {
  label: string;
  detail: string;
};

export type HeroMedia = {
  src: string;
  alt: string;
  badge: string;
  caption: string;
  stats: string[];
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  forWho: string;
  outcomes: string[];
};

export type SpecialistItem = {
  name: string;
  role: string;
  specialty: string;
  yearsExperience: string;
  focus: string;
  credentials: string[];
  licensesOrCertifications: string[];
  initials: string;
  photo?: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  sportOrCondition: string;
  timeframe?: string;
  result: string;
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
    tagline: 'Fisioterapia deportiva y rehabilitación funcional en Armenia, Quindío.',
    locationLabel: 'Armenia, Quindío',
    colors: {
      primary: '#0D1B2A',
      secondary: '#19A7C6',
      accent: '#2F5D83',
      surface: '#F4F7F9',
      surfaceStrong: '#FFFFFF',
      border: '#D6E0E8',
      text: '#102033',
      muted: '#5A6B7D',
    },
  },
  seo: {
    title: 'Synapthical Sport | Fisioterapia deportiva en Armenia, Quindío',
    description:
      'Recupera tu movilidad, disminuye el dolor y vuelve a entrenar con terapias especializadas en fisioterapia deportiva y rehabilitación funcional.',
    ogImage: '/og-image.svg',
  },
  nav: [
    { label: 'Tratamientos', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Resultados', href: '#resultados' },
  ] satisfies NavItem[],
  hero: {
    eyebrow: 'Fisioterapia deportiva y rehabilitación funcional',
    headline: 'Recupera tu rendimiento físico con terapias especializadas.',
    description:
      'Ayudamos a deportistas y personas con dolor muscular o limitaciones de movimiento a disminuir molestias, recuperar movilidad y volver a entrenar con más seguridad.',
    cta: {
      label: 'Agenda tu valoración',
      href: `https://wa.me/${contactDigits}`,
    },
    secondaryCta: {
      label: 'Ver tratamientos',
      href: '#servicios',
    },
    supportingLine: 'Atención personalizada en Armenia · Evaluación funcional, tratamiento y retorno seguro al ejercicio.',
    proofItems: [
      {
        label: 'Especialistas en rehab deportiva',
        detail: 'Procesos orientados a dolor, lesión y retorno seguro al entrenamiento.',
      },
      {
        label: 'Valoración funcional individual',
        detail: 'Analizamos movimiento, carga y objetivo antes de tratar.',
      },
      {
        label: 'Atención presencial en Armenia',
        detail: 'Agenda por WhatsApp y recibe orientación para empezar tu recuperación.',
      },
    ] satisfies HeroProofItem[],
    media: {
      src: '/hero-clinical-placeholder.svg',
      alt: 'Escena ilustrada de valoración funcional en clínica deportiva',
      badge: 'Valoración funcional guiada',
      caption: 'Estructura visual lista para reemplazar por una foto real del terapeuta trabajando con pacientes.',
      stats: ['Dolor · movilidad · fuerza', 'Proceso clínico + retorno al ejercicio', 'Agenda rápida por WhatsApp'],
    } satisfies HeroMedia,
  },
  trust: {
    eyebrow: 'Confianza inmediata',
    title: 'Atención clínica para quienes quieren volver a moverse sin miedo.',
    intro:
      'No solo tratamos el dolor. Evaluamos la causa funcional, definimos prioridades y te guiamos con un plan claro para recuperar movimiento y rendimiento.',
    quickFacts: [
      {
        title: 'Menos dolor, más control',
        description: 'Intervenciones enfocadas en disminuir dolor y recuperar movimiento útil para tu rutina o deporte.',
      },
      {
        title: 'Tratamiento según tu objetivo',
        description: 'Adaptamos la terapia a tu lesión, nivel de actividad y momento de recuperación.',
      },
      {
        title: 'Retorno progresivo y seguro',
        description: 'Te acompañamos hasta que vuelvas a cargar, entrenar o competir con más confianza.',
      },
    ] satisfies HighlightItem[],
    audiences: [
      'Deportistas con lesiones o sobrecargas recurrentes',
      'Personas activas con dolor muscular, articular o limitación funcional',
      'Pacientes que quieren volver al ejercicio sin recaídas',
    ],
  },
  process: {
    eyebrow: 'Cómo es la valoración',
    title: 'Un proceso claro desde la primera cita hasta tu regreso al movimiento.',
    intro:
      'La experiencia está diseñada para que entiendas qué se está tratando, qué haremos primero y cómo se verá tu progreso.',
    steps: [
      {
        step: '01',
        title: 'Valoramos tu caso',
        description: 'Revisamos dolor, movilidad, carga, antecedentes y objetivo físico para entender qué está limitando tu rendimiento.',
      },
      {
        step: '02',
        title: 'Definimos el plan terapéutico',
        description: 'Te explicamos el enfoque de tratamiento, prioridades clínicas y recomendaciones para empezar a mejorar desde el inicio.',
      },
      {
        step: '03',
        title: 'Te guiamos hasta volver',
        description: 'Hacemos seguimiento a tu evolución y progresamos el trabajo hasta que vuelvas a moverte o entrenar con mayor seguridad.',
      },
    ] satisfies ProcessStep[],
  },
  services: {
    eyebrow: 'Tratamientos principales',
    title: 'Intervenciones pensadas para aliviar el dolor y acelerar tu regreso a la actividad.',
    intro:
      'Priorizamos los tratamientos más relevantes para quienes buscan recuperarse bien, evitar recaídas y volver a rendir con seguridad.',
    featuredItems: [
      {
        title: 'Fisioterapia deportiva',
        description: 'Tratamiento para molestias, sobrecargas y lesiones que afectan tu entrenamiento o actividad física habitual.',
        forWho: 'Para runners, deportistas recreativos, competidores y personas activas que no quieren seguir entrenando con dolor.',
        outcomes: ['Disminuir dolor', 'Mejorar movilidad', 'Recuperar confianza en el movimiento'],
      },
      {
        title: 'Rehabilitación de lesiones',
        description: 'Proceso clínico para recuperar control, fuerza y tolerancia a la carga después de una lesión muscular o articular.',
        forWho: 'Ideal si vienes de esguinces, lesiones musculares, dolor de rodilla, hombro, espalda o procesos postraumáticos.',
        outcomes: ['Recuperar capacidad física', 'Mejorar estabilidad y control', 'Volver a tu rutina con más seguridad'],
      },
      {
        title: 'Readaptación al entrenamiento',
        description: 'Puente entre la recuperación clínica y el regreso progresivo al ejercicio, práctica deportiva o competencia.',
        forWho: 'Para pacientes que ya mejoraron el dolor, pero todavía no están listos para volver a entrenar al nivel que necesitan.',
        outcomes: ['Retomar cargas progresivas', 'Reducir riesgo de recaída', 'Volver a entrenar con criterio'],
      },
    ] satisfies ServiceItem[],
    secondaryItems: [
      'Prevención funcional para corregir compensaciones y reducir sobrecargas recurrentes.',
      'Evaluación de movimiento para identificar causas funcionales del dolor persistente.',
      'Retorno seguro al deporte con criterios físicos claros antes de competir.',
    ],
  },
  team: {
    eyebrow: 'Equipo clínico',
    title: 'Un equipo que combina criterio clínico, seguimiento y enfoque deportivo.',
    intro:
      'La autoridad en salud se construye mostrando quién atiende, cómo piensa y por qué puede guiar mejor el proceso de recuperación.',
    members: [
      {
        name: 'Dirección clínica',
        role: 'Fisioterapia deportiva',
        specialty: 'Valoración funcional y rehabilitación de lesiones',
        yearsExperience: '8+ años de experiencia',
        focus: 'Lidera la valoración inicial y define el plan terapéutico según dolor, movimiento, carga y objetivo del paciente.',
        credentials: ['Dolor y control de carga', 'Rehabilitación funcional', 'Retorno progresivo al ejercicio'],
        licensesOrCertifications: ['Fisioterapeuta', 'Formación en rehab deportiva', 'Seguimiento clínico individual'],
        initials: 'DC',
      },
      {
        name: 'Readaptación física',
        role: 'Ejercicio terapéutico',
        specialty: 'Retorno al entrenamiento y al deporte',
        yearsExperience: '6+ años de experiencia',
        focus: 'Acompaña la transición entre la fase clínica y el regreso a la práctica física con progresión segura.',
        credentials: ['Readaptación al esfuerzo', 'Fuerza y movimiento', 'Seguimiento por objetivos'],
        licensesOrCertifications: ['Entrenamiento terapéutico', 'Control de progresiones', 'Trabajo interdisciplinario'],
        initials: 'RF',
      },
      {
        name: 'Prevención y rendimiento',
        role: 'Movimiento funcional',
        specialty: 'Prevención de recaídas y técnica de movimiento',
        yearsExperience: '5+ años de experiencia',
        focus: 'Trabaja estabilidad, calidad de movimiento y tolerancia a la carga para que el paciente vuelva con más confianza.',
        credentials: ['Prevención funcional', 'Análisis de movimiento', 'Trabajo complementario al tratamiento'],
        licensesOrCertifications: ['Evaluación funcional', 'Preparación para retorno', 'Educación al paciente'],
        initials: 'PR',
      },
    ] satisfies SpecialistItem[],
  },
  testimonials: {
    eyebrow: 'Resultados y confianza',
    title: 'Pacientes que volvieron a moverse, entrenar y sentirse seguros.',
    intro:
      'El objetivo no es solo aliviar síntomas, sino ayudarte a volver con claridad, progresión y confianza.',
    items: [
      {
        quote: 'Llegué con dolor de rodilla al correr y miedo de empeorar. Me explicaron el origen del problema, ajustamos la carga y pude volver a trotar con seguridad.',
        name: 'Paciente de running',
        sportOrCondition: 'Dolor de rodilla al correr',
        timeframe: 'En pocas semanas',
        result: 'Volvió progresivamente al entrenamiento sin dolor incapacitante.',
      },
      {
        quote: 'Lo que más me dio confianza fue entender qué estábamos trabajando en cada sesión. No sentí un tratamiento genérico, sino un proceso pensado para volver bien.',
        name: 'Paciente de cross training',
        sportOrCondition: 'Molestia lumbar recurrente',
        timeframe: 'Durante el proceso de readaptación',
        result: 'Mejoró la tolerancia al esfuerzo y retomó sus rutinas con más control.',
      },
      {
        quote: 'Después de una lesión muscular pensaba volver demasiado rápido. Aquí me guiaron paso a paso y regresé a jugar con mucha más confianza.',
        name: 'Paciente de fútbol amateur',
        sportOrCondition: 'Recuperación posterior a lesión muscular',
        timeframe: 'Con seguimiento progresivo',
        result: 'Regresó a entrenamientos y partidos con una transición más segura.',
      },
    ] satisfies TestimonialItem[],
  },
  contact: {
    eyebrow: 'Agenda tu valoración',
    title: 'Habla con nosotros y empieza tu recuperación con una orientación clara.',
    description:
      'Si tienes dolor, vienes de una lesión o quieres volver a entrenar sin limitaciones, escríbenos por WhatsApp y agenda tu valoración inicial.',
    phoneDisplay: contactPhone,
    phoneHref: `tel:${contactDigits}`,
    whatsappHref: `https://wa.me/${contactDigits}`,
    instagramHandle: '@synapthicalsport',
    instagramHref: 'https://instagram.com/synapthicalsport',
    email: 'contacto@synapthicalsport.com',
    emailHref: 'mailto:contacto@synapthicalsport.com',
    address,
    mapHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
    schedule: ['Lunes a Viernes · 7:00 a.m. – 7:00 p.m.', 'Sábados · 8:00 a.m. – 1:00 p.m.'],
  },
  footer: {
    text: 'Synapthical Sport · Fisioterapia deportiva, rehabilitación funcional y retorno seguro al movimiento.',
  },
} as const;

export type SiteConfig = typeof site;
