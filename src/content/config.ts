import { defineCollection, z } from 'astro:content'

const postSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string().optional(),
  lang: z.string(),
  duration: z.string(),
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
