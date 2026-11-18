# Club Azulejo · landing (Vite + React + TypeScript)

```bash
npm install
npm run dev       # desarrollo
npm run build     # revisa tipos, compila y PRERENDERIZA el HTML (SEO) en /dist
npm run preview   # prueba la carpeta /dist
```
Sube el contenido de `dist/` a cualquier hosting estático.

## Dónde se edita
- Contenido: `src/data/*.ts` (reemplaza todo lo que esté entre [corchetes]). Tipos en `src/types.ts`.
- Metadatos (title, description, Open Graph, canonical): `index.html`. JSON-LD: `src/lib/schema.ts`.
- Estilos: `src/styles/*.css` (orden de importación en `src/main.tsx`).
- Fotos: `public/images/` y `src/components/sections/Facilities.tsx`.

## Cómo funciona el SEO
Vite por sí solo entrega una página vacía que se llena con JavaScript. Aquí `npm run build` además
renderiza React a HTML (`src/entry-server.tsx` + `scripts/prerender.mjs`), así Google recibe el
contenido completo, y en el navegador React lo hidrata.

## Pendientes antes de publicar
Dominio (`src/data/site.ts`, `index.html`, `public/robots.txt`), logotipo oficial, `public/og-club-azulejo.jpg`
(1200x630), teléfono/WhatsApp, horarios, precios, ID de Formspree, redes, coordenadas en `schema.ts`,
y el aviso de privacidad (`public/aviso-de-privacidad/index.html`).
