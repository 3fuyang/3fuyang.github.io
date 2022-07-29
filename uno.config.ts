// Splitted from vite.config.ts, only to make UnoCSS the VSCode extension work.
import { defineConfig } from "unocss"
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  shortcuts: [
    { logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180' },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ]
})