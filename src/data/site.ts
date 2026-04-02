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
      'Recupera tu movilidad y vuelve a rendir al máximo con terapias especializadas para deportistas y personas con dolor muscular.',
    ogImage: '/og-image.svg',
  },
  nav: [
    { label: 'Tratamientos', href: '#servicios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies NavItem[],
  hero: {
    eyebrow: 'Clínica deportiva en Armenia, Quindío',
    headline: 'Recupera tu movilidad y vuelve a rendir al máximo',
    description: 'Terapias especializadas para deportistas y personas con dolor muscular.',
    cta: {
      label: 'Agendar valoración',
      href: `https://wa.me/${contactDigits}`,
    },
    supportingLine: 'Evaluación funcional, tratamiento personalizado y seguimiento para volver a entrenar con seguridad.',
    proofItems: [
      {
        label: 'Qué hacemos',
        detail: 'Tratamos dolor muscular, lesiones deportivas y limitaciones de movimiento con criterio clínico.',
      },
      {
        label: 'Para quién',
        detail: 'Para deportistas y personas activas que necesitan dejar el dolor atrás y volver a moverse mejor.',
      },
      {
        label: 'Qué resultado buscamos',
        detail: 'Que recuperes movilidad, reduzcas dolor y regreses a tu rutina o entrenamiento con confianza.',
      },
    ] satisfies HeroProofItem[],
    media: {
      src: '/hero-clinical-placeholder.svg',
      alt: 'Escena ilustrada de valoración funcional en clínica deportiva',
      badge: 'Valoración funcional guiada',
      caption: 'Usa aquí una foto real del terapeuta atendiendo a un paciente para aumentar aún más la confianza.',
      stats: ['Dolor muscular', 'Lesiones deportivas', 'Retorno seguro al ejercicio'],
    } satisfies HeroMedia,
  },
  trust: {
    eyebrow: 'Confianza para decidir',
    title: 'Cuando el paciente confía, agenda. Cuando entiende el proceso, se queda.',
    intro:
      'En salud, la decisión no se toma por una página bonita. Se toma cuando el paciente siente que lo van a evaluar bien, tratar con criterio y acompañar hasta volver a moverse mejor.',
    quickFacts: [
      {
        title: 'Atención clara desde la primera cita',
        description: 'Explicamos qué está pasando, qué vamos a tratar y cómo se verá tu progreso.',
      },
      {
        title: 'Tratamiento según tu caso',
        description: 'Cada proceso se adapta a tu dolor, tu lesión, tu nivel de actividad y tu meta física.',
      },
      {
        title: 'Seguimiento orientado a resultados',
        description: 'No buscamos solo aliviar síntomas: buscamos que vuelvas a moverte y rendir con seguridad.',
      },
    ] satisfies HighlightItem[],
    audiences: [
      'Dolor muscular que no te deja entrenar como antes',
      'Lesiones deportivas o molestias recurrentes que limitan tu rendimiento',
      'Pacientes que quieren volver al ejercicio sin recaídas ni miedo al movimiento',
    ],
  },
  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Un proceso clínico pensado para que sepas qué pasa, qué sigue y cómo vas mejorando.',
    intro:
      'La valoración no es una sesión genérica: es el punto de partida para entender tu caso y definir el tratamiento correcto.',
    steps: [
      {
        step: '01',
        title: 'Evaluamos tu dolor y movimiento',
        description: 'Revisamos dolor, movilidad, carga, antecedentes y objetivo físico para encontrar qué está limitando tu recuperación.',
      },
      {
        step: '02',
        title: 'Diseñamos tu tratamiento',
        description: 'Definimos el enfoque terapéutico que mejor se adapta a tu lesión, nivel de actividad y meta de recuperación.',
      },
      {
        step: '03',
        title: 'Te guiamos hasta volver bien',
        description: 'Hacemos seguimiento a tu evolución y progresamos el trabajo hasta que vuelvas a entrenar o moverte con más seguridad.',
      },
    ] satisfies ProcessStep[],
  },
  services: {
    eyebrow: 'Tratamientos principales',
    title: 'Servicios explicados desde el dolor del paciente, no desde términos genéricos.',
    intro:
      'Cada tratamiento está pensado para resolver un problema concreto y ayudarte a volver a tu rutina o deporte sin limitaciones.',
    featuredItems: [
      {
        title: 'Tratamiento para eliminar dolor muscular y lesiones deportivas',
        description: 'Intervención para disminuir dolor, recuperar movilidad y mejorar la función cuando entrenar, correr o moverte ya no se siente normal.',
        forWho: 'Para deportistas y personas activas con molestias musculares, sobrecargas, lesiones o dolor que interfiere con su rendimiento.',
        outcomes: ['Menos dolor al moverte', 'Más movilidad y control', 'Más confianza para volver a entrenar'],
      },
      {
        title: 'Rehabilitación funcional para volver a tu rutina',
        description: 'Proceso terapéutico para recuperar fuerza, control y tolerancia a la carga después de una lesión muscular o articular.',
        forWho: 'Ideal si vienes de esguinces, lesiones musculares, dolor lumbar, hombro, rodilla o procesos postraumáticos.',
        outcomes: ['Recuperar capacidad física', 'Mejorar estabilidad y control', 'Volver a la rutina con más seguridad'],
      },
      {
        title: 'Readaptación para regresar al ejercicio sin recaídas',
        description: 'Puente entre el tratamiento clínico y el regreso progresivo al ejercicio, la práctica deportiva o la competencia.',
        forWho: 'Para pacientes que ya mejoraron el dolor, pero todavía no están listos para retomar cargas altas o entrenar con normalidad.',
        outcomes: ['Retomar cargas progresivas', 'Disminuir riesgo de recaída', 'Volver al rendimiento con criterio'],
      },
    ] satisfies ServiceItem[],
    secondaryItems: [
      'Prevención funcional para evitar sobrecargas repetitivas y mejorar patrones de movimiento.',
      'Evaluación de movimiento para entender por qué el dolor sigue apareciendo o recae.',
      'Retorno seguro al deporte con criterios claros antes de volver a competir o exigirte más.',
    ],
  },
  team: {
    eyebrow: 'Nuestro equipo',
    title: 'Profesionales que hacen que la clínica se sienta real, confiable y preparada para ayudarte.',
    intro:
      'Mostrar quién atiende, su especialidad y su experiencia aumenta la confianza del paciente desde el primer vistazo.',
    members: [
      {
        name: 'Dirección clínica',
        role: 'Fisioterapia deportiva',
        specialty: 'Valoración funcional y rehabilitación de lesiones',
        yearsExperience: '8+ años de experiencia',
        focus: 'Evalúa el caso desde la primera cita y define el plan terapéutico según dolor, movimiento, carga y objetivo físico.',
        credentials: ['Fisioterapia deportiva', 'Rehabilitación funcional', 'Retorno progresivo al ejercicio'],
        licensesOrCertifications: ['Fisioterapeuta', 'Formación en rehab deportiva', 'Seguimiento clínico individual'],
        initials: 'DC',
      },
      {
        name: 'Readaptación física',
        role: 'Ejercicio terapéutico',
        specialty: 'Retorno al entrenamiento y al deporte',
        yearsExperience: '6+ años de experiencia',
        focus: 'Acompaña la transición entre la fase clínica y el regreso al ejercicio con una progresión segura y guiada.',
        credentials: ['Readaptación al esfuerzo', 'Trabajo de fuerza y movimiento', 'Seguimiento por objetivos'],
        licensesOrCertifications: ['Entrenamiento terapéutico', 'Control de progresiones', 'Trabajo interdisciplinario'],
        initials: 'RF',
      },
      {
        name: 'Prevención y rendimiento',
        role: 'Movimiento funcional',
        specialty: 'Prevención de recaídas y técnica de movimiento',
        yearsExperience: '5+ años de experiencia',
        focus: 'Trabaja estabilidad, técnica y tolerancia a la carga para que el paciente vuelva con más seguridad y mejor control.',
        credentials: ['Prevención funcional', 'Análisis de movimiento', 'Trabajo complementario al tratamiento'],
        licensesOrCertifications: ['Evaluación funcional', 'Preparación para retorno', 'Educación al paciente'],
        initials: 'PR',
      },
    ] satisfies SpecialistItem[],
  },
  testimonials: {
    eyebrow: 'Resultados reales',
    title: 'Historias que transmiten confianza y ayudan a tomar la decisión de agendar.',
    intro:
      'Estas frases funcionan como prueba social: muestran alivio, profesionalismo y resultados concretos.',
    items: [
      {
        quote: 'Volví a entrenar sin dolor en 3 semanas. Me explicaron todo el proceso y sentí que realmente entendían mi lesión.',
        name: 'Paciente de running',
        sportOrCondition: 'Dolor de rodilla al correr',
        timeframe: 'En 3 semanas',
        result: 'Volvió a correr con más seguridad y sin dolor incapacitante.',
      },
      {
        quote: 'Excelente atención, muy profesionales. Llegué con una molestia que llevaba meses y por fin sentí una mejoría real.',
        name: 'Paciente de cross training',
        sportOrCondition: 'Molestia lumbar recurrente',
        timeframe: 'Durante el plan de tratamiento',
        result: 'Mejoró la tolerancia al esfuerzo y recuperó confianza para entrenar.',
      },
      {
        quote: 'Me ayudaron con una lesión que llevaba meses. Lo mejor fue sentir que no estaba improvisando, sino siguiendo un plan serio.',
        name: 'Paciente de fútbol amateur',
        sportOrCondition: 'Recuperación de lesión muscular',
        timeframe: 'Con seguimiento progresivo',
        result: 'Regresó a entrenamientos y partidos con una transición más segura.',
      },
    ] satisfies TestimonialItem[],
  },
  contact: {
    eyebrow: 'Agenda tu cita',
    title: 'Habla con nosotros y reserva tu valoración para empezar a recuperarte bien.',
    description:
      'Si tienes dolor, vienes de una lesión o quieres volver al ejercicio sin limitaciones, escríbenos por WhatsApp y te ayudamos a agendar.',
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
