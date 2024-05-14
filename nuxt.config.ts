// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
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
    // options
  },
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
  },
  security: {
    // options
  },
  i18n: {
    locales: [
      {
        code: 'de',
        name: 'DE',
      },
      {
        code: 'en',
        name: 'EN',
      },
    ],
    defaultLocale: 'de',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
})
