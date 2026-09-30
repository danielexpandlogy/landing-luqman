import { useTrackConversion } from "@danielexpandlogy/landing-core";
import { baseContent, LANDING_KEY } from "./content";
import { useHead } from "./Landing";

/**
 * Página de gracias: el calendario redirige aquí al agendar. Registra la agenda
 * con la combinación que vio el visitante (la guarda la landing en su navegador).
 */
const Thanks = () => {
  useHead({ title: `¡Gracias! | ${baseContent.brand.name}`, description: baseContent.meta.description });
  useTrackConversion(LANDING_KEY);

  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-4 font-sans text-slate-900 antialiased">
      <div className="max-w-lg space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">[Pendiente] ¡Listo, recibimos tu solicitud!</h1>
        <p className="text-lg text-slate-600">[Pendiente] Qué pasa ahora y cuándo lo van a contactar.</p>
      </div>
    </main>
  );
};

export default Thanks;
