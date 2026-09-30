# Landing de Luqman

Landing autooptimizable del Landing Lab. Se administra desde **/landings/luqman** en Expandlogy Software (la misma Supabase para todas las landings) y usa el paquete [`@danielexpandlogy/landing-core`](https://github.com/danielexpandlogy/expandlogy-software/tree/main/packages/landing-core).

Stack: Vite + React 18 + TypeScript + Tailwind CSS. Deploy en Vercel.

## Desarrollo

```sh
export NPM_TOKEN=ghp_…   # token de GitHub (classic) con read:packages
npm install
cp .env.example .env     # las mismas claves públicas de Supabase que Expandlogy Software
npm run dev              # http://localhost:8081
```

- `npm run typecheck`, `npm test`, `npm run build`
- `/` es la landing y `/gracias` la página de gracias (registra la agenda).

## Cómo funciona

- **Contenido:** `src/landing/content.ts`. Es la versión original de cada variable.
- **Variables:** `src/landing/variants.ts` aplica cada una por su key. Están declaradas en `landing-lab.json` (nombre, tipo y valor original) y se dan de alta en la base pegando `landing-lab.sql` en el SQL Editor de Supabase. Los pasos para publicar están en [PASOS.md](PASOS.md).

  | Key             | Tipo en el panel        | Qué cambia |
  | --------------- | ----------------------- | ---------- |
  | `headline`      | Titular con resaltado   | Titular del hero |
  | `hero_lead`     | Texto                   | Párrafo debajo del titular |
  | `hero_image`    | Imagen                  | Imagen del hero |
  | `cta_text`      | Botón                   | Texto de todos los botones |
  | `button_color`  | Color                   | Color de los botones |
  | `section_order` | Orden de secciones      | Orden de `benefits`, `process`, `testimonials`, `faq`, `ctaBand` |

- **Diseño:** `src/landing/sections.tsx` y `Landing.tsx`.
- No se registran las vistas previas del panel (`?lp_preview=…`) ni los navegadores del equipo: ábrela una vez con `?lp_team=1` (se deshace con `?lp_team=0`).

## Deploy (Vercel)

Proyecto propio conectado a este repo, con estas variables de entorno:

- `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`: las mismas de Expandlogy Software.
- `NPM_TOKEN`: para instalar `landing-core` desde GitHub Packages.

Después, en el panel (pestaña Landing) pon la URL de la landing y de `/gracias`, y configura el calendario para que redirija a `/gracias` al agendar.

## Actualizar landing-core

```sh
npm install @danielexpandlogy/landing-core@latest
```

Commit y push; Vercel redespliega.
