// website/content.config.ts
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        excerpt: z
          .object({
            type: z.string(),
            children: z.any(),
          })
          .optional(),
        tag: z.string().optional(),
      }),
    }),
  },
})
