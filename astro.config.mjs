import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import UnoCSS from '@unocss/astro'

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
  integrations: [react(), UnoCSS()],
})
