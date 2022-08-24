import { ReactNode } from 'react'

const pages = import.meta.glob<boolean, string, any>(
  [
    '../../pages/**/*.mdx',
    '../../pages/**/*.tsx'
  ],
  { import: 'default' }
)

interface Route {
  path: string
  element: ReactNode
}

const routes: Route[] = []

for (const key in pages) {
  routes.push({
    element: (await pages[key]()),
    path: key.slice(12)
  })
}

routes.forEach((route) => {
  if (route.path.includes('/')) {
    const dir = route.path.split
  }
})

export default routes