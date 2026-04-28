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
        type: z.string().optional(),
        // Custom frontmatter fields used in templates
        heading: z.string().optional(),
        subheading: z.string().optional(),
        image: z.string().optional(),
        caption: z.string().optional(),
        captionLink: z.string().optional(),
        img: z.string().optional(),
        route: z.string().optional(),
      }),
    }),
  },
})
