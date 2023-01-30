import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import astroI18next from 'astro-i18next';

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://hip.support/',
  integrations: [image({
    cacheDir: './.cache/image',
    serviceEntryPoint: '@astrojs/image/sharp'
  }), astroI18next(), sitemap(), partytown()]
});