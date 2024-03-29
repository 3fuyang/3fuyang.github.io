# Flog

Means Fwio's blog.

## Introduction

A personal blog built with [Vite](https://vitejs.dev/) & [React](https://reactjs.org/), [deployed](https://3fuyang.github.io) with Github Pages.

## Features

- Integrate [MDX](https://mdxjs.com/) to render markdown files.
- [Manual script](https://github.com/3fuyang/3fuyang.github.io/blob/master/src/routes/auto-routes.ts) for automatic React Routes.
- Responsive Design with powerful [UnoCSS](https://github.com/unocss/unocss).
- PWA with [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/).

## Acknowledgement

- [Anthony Fu (antfu.me)](https://antfu.me/) - Highly inspired by its design.
- [ZA/UM (zaumstudio.com)](https://zaumstudio.com/) - Love the seagull.

## Dev Logs

### Requirement

- Responsive (Refer [Responsive Design](https://windicss.org/features/responsive-design.html) of Windi CSS, Mobile First)
- Use Hooks to build React components
- Automatically read `.md` files and generate routes ( `markdown-it`)

### Todo

- [x] Learn and apply [React Router](https://reactrouter.com/docs/en/v6/getting-started/concepts).
- [x] Capsulate NavLink to HOC for scoped CSS.
- [x] Implement the Posts component
- [x] Design the Router architechture
- [x] Integrate MDX
- [x] Stylize the output HTML
- [x] Auto route generation via `vite-plugin-pages`
- [ ] Component testing with Vitest
- [x] Static Web App Deployment, with Github Pages.
