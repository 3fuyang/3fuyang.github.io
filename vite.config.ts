import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import Pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// MDX plugins
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import a11yEmoji from '@fec/remark-a11y-emoji'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // When using preset-attributify, make sure UnoCss is ahead of react in the vite plugins.
    Unocss({
      configFile: 'uno.config.ts'
    }),
    react(),
    mdx({
      remarkPlugins: [
        // add Github flavored markdown(GFM) Feature
        remarkGfm,
        // make the emojis accessible via aria-attrs
        a11yEmoji,
        // frontmatter
        remarkFrontmatter, remarkMdxFrontmatter
      ],
      rehypePlugins: [
        // add syntax highlighting to mdx
        rehypeHighlight,
        // add `id` attrs to headings
        rehypeSlug,
        // add Table of Contents(TOC)
        rehypeToc
      ]
    }),
    Pages({
      // auto routes generator
      dirs: [{ dir: 'pages', baseRoute: '' }],
      extensions: ['md', 'mdx', 'tsx']
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['fwio.svg', 'fwio-apple-touch.png', 'images/**/*.png'],
      manifest: {
        name: 'Flog',
        short_name: 'Flog',
        description: 'Fwio\'s personal blog',
        theme_color: '#ffffff',
        // all icons on PWA Web App Manifest option
        // will be included in the service worker precache
        icons: [
          {
            src: 'fwio-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'fwio-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'fwio-maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 3e6
      }
    })
  ]
})
