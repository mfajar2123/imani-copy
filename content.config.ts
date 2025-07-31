import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
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
        cat: z.number().int().optional(),
      }),
    }),
  },
})
