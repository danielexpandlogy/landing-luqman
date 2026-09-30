import { describe, expect, it } from "vitest";
import { baseContent, SECTION_KEYS } from "./content";
import { applyVariants } from "./variants";

describe("applyVariants", () => {
  it("sin valores deja la landing original", () => {
    expect(applyVariants(baseContent, {})).toBe(baseContent);
  });

  it("aplica cada variable", () => {
    const c = applyVariants(baseContent, {
      headline: { before: "A ", highlight: "B", after: "." },
      hero_lead: { text: "Otro texto" },
      hero_image: { src: "https://x.test/a.jpg", alt: "alt" },
      cta_text: { label: "Go", sub: "Now" },
      button_color: { color: "#2f7d32", hover: "#25632a" },
      section_order: { order: ["faq", "benefits"] },
    });
    expect(c.hero.title).toEqual({ before: "A ", highlight: "B", after: "." });
    expect(c.hero.lead).toBe("Otro texto");
    expect(c.hero.image).toEqual({ src: "https://x.test/a.jpg", alt: "alt" });
    expect(c.cta).toEqual({ label: "Go", sub: "Now" });
    expect(c.theme).toMatchObject({ button: "#2f7d32", buttonHover: "#25632a" });
    expect(c.sectionOrder.slice(0, 3)).toEqual(["faq", "benefits", "process"]);
    expect(c.sectionOrder).toHaveLength(SECTION_KEYS.length);
    expect(c.benefits).toBe(baseContent.benefits);
  });

  it("ignora valores inválidos y variables desconocidas", () => {
    const c = applyVariants(baseContent, {
      headline: { before: 1 },
      hero_image: { src: "javascript:alert(1)" },
      cta_text: { label: "" },
      button_color: { color: "red" },
      section_order: { order: "faq" },
      otra: { x: 1 },
    });
    expect(c).toEqual(baseContent);
  });
});
