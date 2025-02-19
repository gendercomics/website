// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,

  $development: {
    appConfig: {
      dbApiBaseUrl: 'http://localhost:8001',
      apiImageUrl: 'http://localhost:8001/images',
    },
  },

  // staging does not work yet
  $staging: {
    appConfig: {
      dbApiBaseUrl: 'https://api-stage.gendercomics.net',
      apiImageUrl: 'https://api-stage.gendercomics.net/images',
    },
  },

  $production: {
    appConfig: {
      dbApiBaseUrl: 'https://api.gendercomics.net',
      apiImageUrl: 'https://api.gendercomics.net/images',
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
      routes: [
        '/',
        '/de',
        '/en',
        '/de/artist/anke-feuchtenberger',
        '/de/artist/jul-gordon',
        '/de/artist/nele-jongeling',
        '/de/artist/regina-hofer',
        '/en/artist/anke-feuchtenberger',
        '/en/artist/jul-gordon',
        '/en/artist/nele-jongeling',
        '/en/artist/regina-hofer',
      ],
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
