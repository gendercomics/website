// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  pages: true,

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

  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
  },

  security: {},

  i18n: {
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
      failOnError: false,
    },
  },

  compatibilityDate: '2024-07-31',
})
