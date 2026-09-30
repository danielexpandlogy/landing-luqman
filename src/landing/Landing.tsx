import { useEffect, useMemo, type CSSProperties } from "react";
import { useLandingLab } from "@danielexpandlogy/landing-core";
import { baseContent, LANDING_KEY, type LandingContent } from "./content";
import { applyVariants } from "./variants";
import { Booking, CtaButton, Footer, Header, Hero, OrderedSections } from "./sections";

export function useHead({ title, description }: LandingContent["meta"]) {
  useEffect(() => {
    document.title = title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
}

/** Colores de marca como variables CSS (las usan las clases bg-cta, text-accent…). */
const themeStyle = (theme: LandingContent["theme"]) =>
  ({ "--cta": theme.button, "--cta-hover": theme.buttonHover, "--accent": theme.accent }) as CSSProperties;

export function LandingView({ content, onCtaClick }: { content: LandingContent; onCtaClick?: () => void }) {
  const cta = <CtaButton content={content} onClick={onCtaClick} />;
  return (
    <div style={themeStyle(content.theme)} className="min-h-screen bg-white pb-24 font-sans text-slate-900 antialiased md:pb-0">
      <Header content={content} />
      <Hero content={content} cta={cta} booking={<Booking content={content} />} />
      <OrderedSections content={content} cta={cta} />
      <Footer content={content} />
      {/* En móvil, el botón queda siempre a mano. */}
      <div className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <CtaButton content={content} onClick={onCtaClick} className="w-full" />
      </div>
    </div>
  );
}

const Landing = () => {
  useHead(baseContent.meta);
  const { ready, selection, trackClick, reason } = useLandingLab(LANDING_KEY);
  const content = useMemo(() => applyVariants(baseContent, selection.values), [selection]);
  const inPanel = typeof window !== "undefined" && window.self !== window.top;

  // Mientras llega la configuración (máx. 2.5 s) no se muestra ninguna variante.
  if (!ready) return <div className="min-h-screen bg-slate-50" aria-busy="true" />;

  return (
    <>
      <LandingView content={content} onCtaClick={trackClick} />
      {reason && !inPanel && (
        <div role="status" className="fixed bottom-20 left-4 z-50 rounded-lg bg-slate-900/90 px-3 py-2 text-xs text-white md:bottom-4">
          {reason === "preview" ? "Vista previa" : "Equipo"} · esta visita no se registra
          {selection.combo && <span className="opacity-70"> · {selection.combo}</span>}
        </div>
      )}
    </>
  );
};

export default Landing;
