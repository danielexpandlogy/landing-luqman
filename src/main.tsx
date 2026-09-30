import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureLandingLab } from "@danielexpandlogy/landing-core";
import App from "./App";
import "./index.css";

// La misma Supabase de Expandlogy Software, donde vive el panel de /landings.
configureLandingLab({
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? "",
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? "",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
