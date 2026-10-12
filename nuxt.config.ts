// https://nuxt.com/docs/api/configuration/nuxt-config
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

if (!existsSync(fileURLToPath(new URL('./.content/de', import.meta.url)))) {
  console.warn('[gendercomics] .content/ is missing - run `pnpm run content-website` to check out the content repo')
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,

  runtimeConfig: {
    public: {
      // Project API key from PostHog (public.posthog.com project settings).
      // Safe to expose client-side. Set via NUXT_PUBLIC_POSTHOG_KEY.
      posthogKey: '',
      posthogHost: 'https://eu.i.posthog.com',
    },
  },

  $development: {
    appConfig: {
      dbApiBaseUrl: 'http://localhost:8001',
      apiImageUrl: 'http://localhost:8001/images',
    },
  },

  // staging does not work yet
  // $staging: {
  //   appConfig: {
  //     dbApiBaseUrl: 'https://api-stage.gendercomics.net',
  //     apiImageUrl: 'https://api-stage.gendercomics.net/images',
  //   },
  // },

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
    experimental: { nativeSqlite: true },
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': false,
        // Required for @sqlite.org/sqlite-wasm used by Nuxt Content v3
        'script-src': ["'self'", "https:", "'unsafe-inline'", "'strict-dynamic'", "'nonce-{{nonce}}'", "'wasm-unsafe-eval'"],
      },
    },
  },

  // Allow Nuxt Content internal API routes to work without security middleware interference
  routeRules: {
    '/__nuxt_content/**': {
      security: {
        xssValidator: false,
        rateLimiter: false,
      },
    },
  },

  i18n: {
    strategy: 'prefix_and_default',
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
      cookieKey: 'i18n_gc',
      redirectOn: 'root',
    },
  },

  nitro: {
    // Images are maintained alongside the markdown in the gendercomics/content repo
    publicAssets: [
      {
        dir: fileURLToPath(new URL('./.content/images', import.meta.url)),
        baseURL: '/images',
      },
    ],
    prerender: {
      concurrency: 1,
      failOnError: false,
      // Seed routes below; the crawler follows links from there, so new content
      // pages are prerendered as long as some page links to them.
      crawlLinks: true,
      routes: [
        '/',
        '/de',
        '/en',
        '/about',
        '/de/about',
        '/en/about',
        '/activities',
        '/de/activities',
        '/en/activities',
        '/de/artist/anke-feuchtenberger',
        '/de/artist/jul-gordon',
        '/de/artist/nele-jongeling',
        '/de/artist/regina-hofer',
        '/en/artist/anke-feuchtenberger',
        '/en/artist/jul-gordon',
        '/en/artist/nele-jongeling',
        '/en/artist/regina-hofer',
        '/book',
        '/de/book',
        '/en/book',
        '/collaborations',
        '/de/collaborations',
        '/en/collaborations',
        '/database',
        '/de/database',
        '/en/database',
        '/imprint',
        '/de/imprint',
        '/en/imprint',
        '/privacy',
        '/de/privacy',
        '/en/privacy',
        '/team',
        '/de/team',
        '/en/team',
      ],
    },
  },

  // render: {
  //   etag: false,
  //   static: {
  //     cacheControl: false,
  //   },
  // },

  compatibilityDate: '2026-08-21',
})
