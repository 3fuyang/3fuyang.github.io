import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercelStatic from '@astrojs/vercel/static'
import sentry from '@sentry/astro'
import { defineConfig } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'

const isProd = import.meta.env.PROD

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: 'prose-heading-anchor',
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener', 'noreferrer'],
        },
      ],
    ],
  },
  integrations: [
    react(),
    mdx(),
    sentry({
      enabled: isProd,
      dsn: process.env.SENTRY_DSN,
      sourceMapsUploadOptions: {
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    isProd && partytown(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
})
