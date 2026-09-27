import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://timgaull.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
