// Inserta el HTML renderizado de React y el JSON-LD en dist/index.html (SEO).
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const { render, siteUrl } = await import(pathToFileURL(path.resolve('.ssr/entry-server.js')).href);
const file = 'dist/index.html';
const { html, jsonLd } = render();
const out = fs.readFileSync(file, 'utf8')
  .replace('<!--app-html-->', html)
  .replace('<!--json-ld-->', `<script type="application/ld+json">${jsonLd}</script>`);
fs.writeFileSync(file, out);
fs.writeFileSync('dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}/</loc></url></urlset>\n`);
console.log('Prerender listo: dist/index.html + sitemap.xml');
