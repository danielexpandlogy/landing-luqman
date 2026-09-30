import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Color de los botones: lo cambia la variable "button_color" del Landing Lab.
        cta: { DEFAULT: "var(--cta)", hover: "var(--cta-hover)" },
        accent: "var(--accent)",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
} satisfies Config;
