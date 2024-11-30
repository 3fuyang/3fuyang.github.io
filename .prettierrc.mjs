/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
