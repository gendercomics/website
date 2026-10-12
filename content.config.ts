// website/content.config.ts
import { fileURLToPath } from 'node:url'
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

// Markdown lives in the separate gendercomics/content repo, checked out into .content/
// (pnpm run content-website locally, actions/checkout in CI).
const contentDir = fileURLToPath(new URL('./.content', import.meta.url))

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        cwd: contentDir,
        // no brace patterns here: @nuxt/content derives the path prefix from the static part
        include: '**/*.md',
        exclude: ['README.md', '.github/**'],
      },
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
