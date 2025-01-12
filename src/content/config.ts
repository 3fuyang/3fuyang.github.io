import { rssSchema } from '@astrojs/rss'
import { defineCollection, z } from 'astro:content'

const postSchema = rssSchema.extend({
  title: z.string(),
  keywords: z.array(z.string()).optional(),
  description: z.string().optional(),
  lang: z.enum([
    'zh',
    'en',
  ]).optional(),
  draft: z.boolean().optional(),
  minutesRead: z.string().optional(),
}).required({
  pubDate: true,
})

const blogCollection = defineCollection({
  schema: postSchema,
})
const notesCollection = defineCollection({
  schema: postSchema,
})
const essayCollection = defineCollection({
  schema: postSchema,
})

export const collections = {
  blog: blogCollection,
  notes: notesCollection,
  essay: essayCollection,
}
