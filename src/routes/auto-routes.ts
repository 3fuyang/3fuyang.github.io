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

for (const key in pages) {
  flatRoutes.push({
    element: (await pages[key]()),
    path: key.slice(12)
  })
}

const reactRoute: RouteObject = {
  caseSensitive: false,
  path: '/',
  children: []
}

// build real react-router route (flat array => tree-like object)
function constructRoute(root: RouteObject, pages: Page[]) {
  pages.forEach((page) => {
    if (!page.path.includes('/')) {
      // index route
      root.element = page.element
    } else {
      const dirs = page.path.split('/')
    }
  })
}

export { flatRoutes as default }