import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import Pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

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
        remarkGfm
      ],
      rehypePlugins: [
        // add syntax highlighting to mdx
        rehypeHighlight
      ]
    }),
    Pages({
      // auto routes generator
      dirs: 'pages',
      extensions: ['tsx', 'md', 'mdx']
    })
  ]
})
