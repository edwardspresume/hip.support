import { defineConfig } from 'astro/config';

import image from '@astrojs/image';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
    site: 'https://hip.support',
    integrations: [
        image({
            cacheDir: './.cache/image',
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
        astroI18next(),
        partytown({
            config: {
                debug: false,
                forward: ['dataLayer.push'],
            },
        }),
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en-US',
                    ht: 'ht',
                },
            },
        }),
    ],
});
