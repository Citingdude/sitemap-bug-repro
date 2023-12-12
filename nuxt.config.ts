// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  sitemap: {
    cacheMaxAgeSeconds: 60 * 60,
    sources: ['/api/__sitemap__/urls'],
    excludeAppSources: true,
  },
  i18n: {
    baseUrl: 'https://test.com',
    strategy: 'prefix',
    defaultLocale: 'nl',
    lazy: true,
    langDir: './locales',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English(US)', file: 'en.json' },
      { code: 'nl', iso: 'nl-BE', name: 'Nederlands', file: 'nl.json' },
      { code: 'fr', iso: 'fr-FR', name: 'French', file: 'fr.json' },
      { code: 'de', iso: 'de-DE', name: 'German', file: 'de.json' },
    ],
    customRoutes: 'config',
    detectBrowserLanguage: false,
    dynamicRouteParams: true,
    vueI18n: './i18n.config.ts',
  },
  modules: [
    '@nuxtjs/i18n',
    'nuxt-simple-sitemap',
  ],
})
