import type { AstroI18nextConfig } from 'astro-i18next';

const config: AstroI18nextConfig = {
    defaultLocale: 'en',
    locales: ['en', 'ht'],
    namespaces: [
        'common',
        'donate',
        'i-134a-sponsorship',
        'footer',
        'form',
        'home',
        'homepage_articles',
        'media',
        'navigation',
        'team',
        'tos',
        '404',
    ],
    routes: {
        ht: {
            media: 'media',
            request: 'request',
            team: 'team',
            volunteer: 'volunteer',
            join: 'join',
            donate: 'donate',
            tos: 'tos',
            'i-134a-sponsorship': 'i-134a-sponsorship',
            '404': '404',
        },
    },
};

export default config;
