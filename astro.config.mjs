import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import UnoCSS from '@unocss/astro'

import vitesseDark from './src/styles/vitesse-dark.json'

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: vitesseDark,
    },
  },
  integrations: [react(), UnoCSS()],
})
