import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://iyibilgilernet.github.io', // Buraya Kendi GitHub kullanıcı adını veya site adresini yaz
	integrations: [mdx(), sitemap()],
});
