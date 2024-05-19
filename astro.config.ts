import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import { presetTypography } from 'unocss'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
  integrations: [
    react(),
    UnoCSS({
      injectReset: true,
      presets: [presetTypography()],
    }),
    mdx(),
  ],
})
