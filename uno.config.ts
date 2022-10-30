// Splitted from vite.config.ts, only to make the VSCode extension for UnoCSS work.
import { defineConfig } from 'unocss'
import { presetUno, presetAttributify } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  shortcuts: {
    'link': 'will-change-opacity op70 hover:op100 transition-opacity duration-200',
    'skeleton': 'rounded-sm bg-gray-3 dark:bg-gray-5 h-4 mt-2.5'
  },
  presets: [
    presetUno(),
    presetAttributify()
  ],
  transformers: [
    transformerVariantGroup()
  ]
})