// @ts-check
import react from '@eslint-react/eslint-plugin'
import pluginJs from '@eslint/js'
import * as tsParser from '@typescript-eslint/parser'
import eslintPluginAstro from 'eslint-plugin-astro'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import tailwind from 'eslint-plugin-tailwindcss'
// @ts-expect-error
import hooksPlugin from 'eslint-plugin-react-hooks'

export default tseslint.config(
  {
    ignores: [
      'node_modules',
      'dist',
      '.astro',
      'public',
      '.prettierrc.mjs',
      'src/components/ui',
      '.vercel',
    ],
  },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  tseslint.configs.eslintRecommended,
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ...react.configs.recommended,
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
)
