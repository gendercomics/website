// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ['@nuxt/content'],
  dir: {
    assets: 'assets',
  },
  css: [
    'assets/css/fonts.css',
    'assets/css/design.css',
    'assets/css/styles.css',
  ],
  content: {
    // options
  },
})
