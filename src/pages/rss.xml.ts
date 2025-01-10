import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'

const isProd = import.meta.env.PROD

export async function GET(context: APIContext) {
  const blogsCollection = await getCollection('blog', ({ data }) =>
    isProd ? data.draft !== true : true,
  )
  const blogs = blogsCollection.map(({ data, slug }) => ({
    ...data,
    link: `/blog/${slug}`,
  }))

  const notesCollection = await getCollection('notes', ({ data }) =>
    isProd ? data.draft !== true : true,
  )
  const notes = notesCollection.map(({ data, slug }) => ({
    ...data,
    link: `/notes/${slug}`,
  }))

  const essaysCollection = await getCollection('essay', ({ data }) =>
    isProd ? data.draft !== true : true,
  )
  const essays = essaysCollection.map(({ data, slug }) => ({
    ...data,
    link: `/essay/${slug}`,
  }))

  return rss({
    title: 'Blog | Fwio',
    description: 'UN JOUR JE SERAI DE RETOUR PRÈS DE TOI',
    site: context.site!,
    items: [...blogs, ...notes, ...essays].sort(
      (a, b) => Number(b.pubDate) - Number(a.pubDate),
    ),
  })
}
