import { useEffect } from 'react'
import type { Frontmatter } from '../../types/frontmatter'

export function useTitle(routePath: string) {

  useEffect(() => {
    const mdxFiles = import.meta.glob<boolean, string, Frontmatter>('../../pages/**/*.mdx')

    for (const key in mdxFiles) {
      if (routePath !== '/' && key.includes(routePath)) {
        mdxFiles[key]().then(({ title }) => {
          if (title) {
            document.title = title
          }
        })
      }
    }

    return () => { document.title = 'Fwio' }
  })

}