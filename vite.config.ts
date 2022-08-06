import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import Pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

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
    })
  ]
})
