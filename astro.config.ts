import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import { defineConfig } from 'astro/config'
import { presetTypography } from 'unocss'
import UnoCSS from 'unocss/astro'
import vercelStatic from '@astrojs/vercel/static'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
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
    UnoCSS({
      injectReset: true,
      presets: [presetTypography()],
    }),
    mdx(),
  ],
  output: 'static',
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
})
