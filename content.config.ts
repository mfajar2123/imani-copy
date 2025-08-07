import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    media: defineCollection({
      type: 'page',
      source: 'media/**',
      schema: z.object({
        title: z.string(),
        excerpt2: z.string().optional(),
        cover_image: z.string().optional(),
        date: z.string(),
        author: z.string().optional(),
        category: z.enum(['news', 'article']).optional(),
      }),
    }),

    brochure: defineCollection({
      type: 'data',
      source: 'brochure/**',
      schema: z.object({
        product: z.string(),
        title: z.string(),
        excerpt: z.string(),
        url: z.string().url(),
        cover_image: z.string(),
        date: z.string(),
        cat: z.union([z.string(), z.number()]).transform((val) => {
          // Convert string to number jika diperlukan
          return typeof val === 'string' ? parseInt(val, 10) : val
        }),

      }),
    }),

    career: defineCollection({
      type: 'page',
      source: 'career/**',
      schema: z.object({
        title: z.string(),
        date: z.string(),
      }),
    }),
  }
})
