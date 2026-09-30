# Pasos para publicar la landing de Luqman

Identificador en el Landing Lab: `luqman` · Panel: Expandlogy Software → **Landings → Luqman** (`/landings/luqman`)

Este archivo lo generó la skill `crear-landing-expandlogy`. Marca cada paso al terminarlo.

## 1. Repositorio y Supabase (los hace la skill)

- [ ] Código subido al repo de GitHub del cliente (cuenta **danielexpandlogy**).
- [ ] Landing y variables dadas de alta en Supabase. Si la skill no pudo hacerlo: Supabase → **SQL Editor** → pegar todo `landing-lab.sql` → **Run**. Se puede volver a ejecutar sin duplicar nada.
- [ ] Revisar que aparezca en Expandlogy Software → **Landings**.

## 2. Variables de entorno

Están en el archivo **`.env` de esta carpeta**. Ese archivo **no se sube a GitHub** (está en `.gitignore`); sólo existe en tu computadora.

| Variable | Qué es |
| --- | --- |
| `VITE_SUPABASE_URL` | Dirección de la Supabase compartida (pública). |
| `VITE_SUPABASE_ANON_KEY` | Clave pública de esa Supabase. |
| `NPM_TOKEN` | Token de GitHub para instalar `landing-core` (sólo lectura de paquetes). |

Para verlas: abre `.env` en el editor. El token también está en tu Terminal: `echo $NPM_TOKEN`.

## 3. Proyecto en Vercel

- [ ] vercel.com → **Add New… → Project** → importar el repo de esta landing. Vercel detecta Vite solo; no cambies los comandos.
- [ ] Antes de **Deploy**, abre **Environment Variables**, copia **todo el contenido de `.env`** y pégalo en el campo **Key**: Vercel separa cada variable sola. Déjalas en los tres entornos (Production, Preview, Development).
- [ ] **Deploy**. Anota la URL que te da Vercel (`https://….vercel.app`).

## 4. Dominio

- [ ] Vercel → el proyecto → **Settings → Domains** → agregar el dominio del cliente.
- [ ] Vercel muestra los registros DNS exactos (un `A` o un `CNAME`): agrégalos donde está comprado el dominio. Puede tardar de minutos a unas horas.

## 5. Conectar el panel

- [ ] Panel → **Landings → Luqman → pestaña Landing**:
  - URL de la landing: el dominio (o la URL de Vercel mientras no haya dominio).
  - URL de gracias: la misma + `/gracias`.
- [ ] En el calendario o formulario (GHL, Calendly…): al agendar, **redirigir a la URL de gracias**. Ahí se cuenta la agenda.
- [ ] En cada navegador del equipo, abrir una vez `https://<dominio>/?lp_team=1` para que sus visitas no cuenten.

## 6. Contenido y pruebas

- [ ] Pasarle a Claude el contenido real (textos, imágenes, logo, calendario) para reemplazar todo lo marcado **[Pendiente]**. Claude actualiza también las variables en Supabase.
- [ ] Probar el flujo completo en una ventana de incógnito: entrar, tocar el botón, agendar y llegar a `/gracias`. Debe sumar 1 visitante y 1 agenda en el panel.
- [ ] Si hiciste pruebas con visitas reales antes de lanzar: panel → pestaña **Landing → Borrar estadísticas**.
- [ ] En el panel: crear opciones nuevas en cada variable y **encender** las que quieras probar.
