// Splitted from vite.config.ts, only to make the VSCode extension for UnoCSS work.
import { defineConfig } from 'unocss'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  shortcuts: {
    link: 'will-change-opacity op70 hover:op100 transition-opacity duration-200',
    skeleton: 'rounded-sm bg-gray-3 dark:bg-gray-5 h-4 mt-2.5',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'block',
        // 'verticle-aligh': 'middle',
      },
      collections: {
        mdi: () =>
          import('@iconify-json/mdi/icons.json').then((i) => i.default),
        'material-symbols': () =>
          import('@iconify-json/material-symbols/icons.json').then(
            (i) => i.default
          ),
        'game-icons': () =>
          import('@iconify-json/game-icons/icons.json').then((i) => i.default),
        'ant-design': () =>
          import('@iconify-json/ant-design/icons.json').then((i) => i.default),
        octicon: () =>
          import('@iconify-json/octicon/icons.json').then((i) => i.default),
        'fa-brands': () =>
          import('@iconify-json/fa-brands/icons.json').then((i) => i.default),
        'simple-icons': () =>
          import('@iconify-json/simple-icons/icons.json').then(
            (i) => i.default
          ),
        codicon: () =>
          import('@iconify-json/codicon/icons.json').then((i) => i.default),
        bi: () => import('@iconify-json/bi/icons.json').then((i) => i.default),
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
})
