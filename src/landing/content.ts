/**
 * Contenido de la landing de Luqman, separado del diseño. Es la versión
 * original ("control") de cada variable del Landing Lab: las variantes que se
 * crean en el panel cambian partes de este objeto (ver variants.ts).
 *
 * PENDIENTE: todo lo marcado con [Pendiente] es de relleno hasta tener el
 * contenido real del cliente.
 */

/** Identificador de la landing en el panel (/landings/luqman en Expandlogy Software). */
export const LANDING_KEY = "luqman";

/** Secciones entre el hero y el pie, en el orden original (la variable section_order las reordena). */
export const SECTION_KEYS = ["benefits", "process", "testimonials", "faq", "ctaBand"] as const;
export type SectionKey = (typeof SECTION_KEYS)[number];

export interface LandingContent {
  meta: { title: string; description: string };
  brand: { name: string; logo: { src: string; alt: string } | null };
  /** Color de los botones (normal y hover). */
  theme: { button: string; buttonHover: string; accent: string };
  cta: { label: string; sub: string };
  hero: {
    badge: string;
    title: { before: string; highlight: string; after: string };
    lead: string;
    image: { src: string; alt: string } | null;
    trust: string[];
  };
  booking: { title: string; text: string; embedUrl: string | null };
  benefits: { title: string; items: { title: string; text: string }[] };
  process: { title: string; steps: { title: string; text: string }[] };
  testimonials: { title: string; items: { quote: string; name: string; role: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  ctaBand: { title: string; text: string };
  sectionOrder: SectionKey[];
  footer: string;
}

export const baseContent: LandingContent = {
  meta: {
    title: "Luqman",
    description: "[Pendiente] Descripción para buscadores y redes.",
  },
  brand: { name: "Luqman", logo: null },
  theme: { button: "#2563eb", buttonHover: "#1d4ed8", accent: "#2563eb" },
  cta: { label: "[Pendiente] Agendar ahora", sub: "[Pendiente] Subtítulo del botón" },
  hero: {
    badge: "[Pendiente] Etiqueta corta",
    title: { before: "[Pendiente] Titular principal con una ", highlight: "parte resaltada", after: "" },
    lead: "[Pendiente] Una o dos frases que expliquen qué ofrece Luqman, a quién y qué resultado obtiene.",
    image: null,
    trust: ["[Pendiente] Prueba social 1", "[Pendiente] Prueba social 2", "[Pendiente] Prueba social 3"],
  },
  booking: {
    title: "[Pendiente] Agenda tu cita",
    text: "[Pendiente] Elige el horario que te quede mejor.",
    // URL del calendario embebido (GHL, Calendly…). Debe redirigir a /gracias al agendar.
    embedUrl: null,
  },
  benefits: {
    title: "[Pendiente] Beneficios",
    items: [
      { title: "[Pendiente] Beneficio 1", text: "[Pendiente] Explicación breve." },
      { title: "[Pendiente] Beneficio 2", text: "[Pendiente] Explicación breve." },
      { title: "[Pendiente] Beneficio 3", text: "[Pendiente] Explicación breve." },
    ],
  },
  process: {
    title: "[Pendiente] Cómo funciona",
    steps: [
      { title: "[Pendiente] Paso 1", text: "[Pendiente] Qué pasa en este paso." },
      { title: "[Pendiente] Paso 2", text: "[Pendiente] Qué pasa en este paso." },
      { title: "[Pendiente] Paso 3", text: "[Pendiente] Qué pasa en este paso." },
    ],
  },
  testimonials: {
    title: "[Pendiente] Lo que dicen nuestros clientes",
    items: [
      { quote: "[Pendiente] Testimonio real de un cliente.", name: "[Pendiente] Nombre", role: "[Pendiente] Ciudad o cargo" },
      { quote: "[Pendiente] Testimonio real de un cliente.", name: "[Pendiente] Nombre", role: "[Pendiente] Ciudad o cargo" },
    ],
  },
  faq: {
    title: "[Pendiente] Preguntas frecuentes",
    items: [
      { q: "[Pendiente] Pregunta 1", a: "[Pendiente] Respuesta." },
      { q: "[Pendiente] Pregunta 2", a: "[Pendiente] Respuesta." },
    ],
  },
  ctaBand: {
    title: "[Pendiente] Llamado a la acción final",
    text: "[Pendiente] Frase de urgencia o de cierre.",
  },
  sectionOrder: [...SECTION_KEYS],
  footer: "© Luqman",
};
