// @ts-check
import react from '@eslint-react/eslint-plugin'
import pluginJs from '@eslint/js'
import * as tsParser from '@typescript-eslint/parser'
import eslintPluginAstro from 'eslint-plugin-astro'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import tailwind from 'eslint-plugin-tailwindcss'

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', '.astro', 'public', '.prettierrc.mjs'],
  },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  // ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  tseslint.configs.eslintRecommended,
  ...tailwind.configs['flat/recommended'],
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
