import { useEffect } from 'react'
import { useLocation } from 'react-router'
import type { Frontmatter } from '../../types/frontmatter'

export function useFrontmatter(setter: (newVal: Frontmatter[]) => void) {
  const location = useLocation()

  useEffect(() => {
    const promises: Promise<Frontmatter>[] = []

    const mdxFiles = import.meta.glob<boolean, string, Frontmatter>('../../pages/**/*.mdx')

    const path = `../../pages/${location.pathname.split('/')[1]}/`

    for (const key in mdxFiles) {
      if (key.includes(path)) {
        promises.push(mdxFiles[key]().then(({ title, date, duration, lang }) => {
          return { title, duration, date, lang }
        }))
      }
    }

    Promise.all(promises).then((results) => setter(results))
  })
}