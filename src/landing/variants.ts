import { readColor, readCta, readHeadline, readImage, readOrder, readText } from "@danielexpandlogy/landing-core";
import { SECTION_KEYS, type LandingContent } from "./content";

/**
 * Cómo se aplica cada variable del Landing Lab sobre la landing base, por su
 * key. Cada key está declarada en landing-lab.json (nombre, tipo y valor
 * original) y se da de alta en la base con landing-lab.sql; se administra en
 * /landings/luqman. Un valor inválido se ignora (se ve el original).
 */

type Value = Record<string, unknown>;

export const VARIABLES = {
  /** Tipo "Titular con resaltado". */
  headline: (content: LandingContent, value: Value) => {
    const title = readHeadline(value);
    return title ? { ...content, hero: { ...content.hero, title } } : content;
  },
  /** Tipo "Texto". */
  hero_lead: (content: LandingContent, value: Value) => {
    const lead = readText(value);
    return lead ? { ...content, hero: { ...content.hero, lead } } : content;
  },
  /** Tipo "Imagen". */
  hero_image: (content: LandingContent, value: Value) => {
    const image = readImage(value);
    return image ? { ...content, hero: { ...content.hero, image } } : content;
  },
  /** Tipo "Botón". */
  cta_text: (content: LandingContent, value: Value) => {
    const cta = readCta(value);
    return cta ? { ...content, cta } : content;
  },
  /** Tipo "Color". */
  button_color: (content: LandingContent, value: Value) => {
    const color = readColor(value);
    return color ? { ...content, theme: { ...content.theme, button: color.color, buttonHover: color.hover } } : content;
  },
  /** Tipo "Orden de secciones", con las keys de SECTION_KEYS. */
  section_order: (content: LandingContent, value: Value) => {
    const order = readOrder(value, SECTION_KEYS);
    return order ? { ...content, sectionOrder: order } : content;
  },
} satisfies Record<string, (content: LandingContent, value: Value) => LandingContent>;

/** Aplica los valores elegidos ({key de variable: valor}) sobre la landing base. */
export function applyVariants(base: LandingContent, values: Record<string, Value>): LandingContent {
  return Object.entries(values).reduce((content, [key, value]) => {
    const apply = VARIABLES[key as keyof typeof VARIABLES];
    return apply ? apply(content, value) : content;
  }, base);
}
