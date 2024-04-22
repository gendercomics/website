// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ['@nuxt/content', '@pinia/nuxt', 'nuxt-security', "@nuxt/image"],
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
})