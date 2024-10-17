// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  pages: true,

  $development: {
    appConfig: {
      dbApiBaseUrl: 'http://localhost:8001',
    },
  },

  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    'nuxt-security',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],

  css: [
    'assets/css/fonts.css',
    'assets/css/design.css',
    'assets/css/styles.css',
  ],

  content: {
    markdown: {
      anchorLinks: false,
    },
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': false,
      },
    },
  },

  i18n: {
    strategy: 'prefix_and_default',
    locales: [
      {
        code: 'de',
        name: 'EN',
      },
      {
        code: 'en',
        name: 'DE',
      },
    ],
    defaultLocale: 'de',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_gc',
      redirectOn: 'root',
    },
  },

  nitro: {
    prerender: {
      concurrency: 1,
      failOnError: false,
    },
  },

  render: {
    etag: false,
    static: {
      cacheControl: false,
    },
  },

  compatibilityDate: '2024-09-04',
})
