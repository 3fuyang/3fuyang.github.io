import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import { presetTypography } from 'unocss'
import UnoCSS from 'unocss/astro'

import vitesseDark from './src/styles/vitesse-dark.json'

// https://astro.build/config
export default defineConfig({
  site: 'https://3fuyang.github.io',
  markdown: {
    shikiConfig: {
      theme: vitesseDark,
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
