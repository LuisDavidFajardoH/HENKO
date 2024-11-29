import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/sobre-nosotros', changefreq: 'monthly', priority: 0.8 },
  { url: '/servicios', changefreq: 'monthly', priority: 0.8 },
  { url: '/diseno', changefreq: 'monthly', priority: 0.8 },
  { url: '/politica-de-calidad', changefreq: 'monthly', priority: 0.8 },
  { url: '/proyectos', changefreq: 'monthly', priority: 0.8 },
  { url: '/contactenos', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://www.HenKO.com/' });
const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));

writeStream.on('close', () => {
  console.log('Sitemap creado con éxito');
});

writeStream.on('error', (err) => {
  console.error('Error al crear el sitemap:', err);
});

sitemap.pipe(writeStream);

links.forEach(link => sitemap.write(link));
sitemap.end();
