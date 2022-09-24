import { ReactNode } from 'react'
import { RouteObject } from 'react-router'

const pages = import.meta.glob<boolean, string, ReactNode>(
  [
    '../../pages/**/*.mdx',
    '../../pages/**/*.tsx'
  ],
  { import: 'default' }
)

interface Page {
  path: string
  element: ReactNode
}

const flatRoutes: Page[] = []

/* for (const key in pages) {
  flatRoutes.push({
    element: (await pages[key]()),
    path: key.slice(12)
  })
} */

// build real react-router route (convert: flat array => tree-like object)
/* function convertRoutes(pages: Page[]): RouteObject[] {
  const routes: RouteObject[] = []
  const activeRoutes: RouteObject[] = []
  // sort pages by path first(import.meta.glob has already done that)
  pages.forEach((page) => {
    if (!page.path.includes('/')) {
      // index route
      routes.push({
        caseSensitive: true,
        path: '/',
        element: page.element
      })
    } else {
      // process one single page
      const dirs = page.path.split('/')

      dirs.forEach((dir) => {
        do {
          const activeRoute = activeRoutes.at(-1)
          if (!/(\/) | (.tsx) | (.mdx)/.test(dir)) {
            if (activeRoute?.path === dir) {
              const newDir = {
                caseSensitive: true,
                path: dir,
                children: []
              }
              activeRoutes.push(newDir)
              activeRoute.children?.push(newDir)
              break
            } else {
              activeRoutes.pop()
            }
          } else {
            if (!dir.includes('/')) {
              activeRoute?.children?.push({
                caseSensitive: true,
                path: /index/.test(dir) ? '/' : dir.split('.')[0],
                element: page.element
              })
              return
            }
          }
        } while (!activeRoutes.length)
      })
    }
  })
  return routes
}

const convertedRoutes = convertRoutes(flatRoutes) */


export { flatRoutes as default }