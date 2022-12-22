import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react-swc'
import Unocss from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'

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
  build: {
    target: 'esnext'
  },
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
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['fwio.svg', 'seagull.svg', 'fwio-apple-touch.png', 'images/**/*.jpg', 'images/**/*.webp', 'images/**/*.avif'],
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
    }),
    // bundle visualizer (make sure it the last plugin)
    visualizer({
      filename: 'bundle-stats.html'
    })
  ]
})
