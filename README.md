# Flog

Means Fwio's blog.

## Introduction

A personal blog built with [Vite](https://vitejs.dev/) & [React](https://reactjs.org/), [deployed](https://3fuyang.github.io) with Github Pages.

## Features

+ Integrate [MDX](https://mdxjs.com/) to render markdown files.
+ SSG partially supported via [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages).
+ Responsive Design with powerful [UnoCSS](https://github.com/unocss/unocss).
+ PWA with [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/).

## Acknowledgement

+ [Anthony Fu (antfu.me)](https://antfu.me/) - Highly inspired by its design.
+ [ZA/UM (zaumstudio.com)](https://zaumstudio.com/) - Love the seagull.

## Dev Logs

### Requirement

+ Responsive (Refer [Responsive Design](https://windicss.org/features/responsive-design.html) of Windi CSS, Mobile First)
+ Use Hooks to build React components
+ Automatically read `.md` files and generate routes (Static Site Generator, `markdown-it`)

### Todo

+ [X] Learn and apply [React Router](https://reactrouter.com/docs/en/v6/getting-started/concepts).
+ [X] Capsulate NavLink to HOC for scoped CSS.
+ [X] Implement the Posts component
+ [X] Design the Router architechture
+ [X] Integrate MDX
+ [X] Stylize the output HTML
+ [X] Auto route generation via `vite-plugin-pages`
+ [ ] Component testing with Vitest
+ [X] Static Web App Deployment, with Github Pages.
