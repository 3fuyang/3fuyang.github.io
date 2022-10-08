import { useEffect } from 'react'
import type { Frontmatter } from '../../types/frontmatter'

export function useFrontmatters(setter: (newVal: Frontmatter[]) => void) {
  useEffect(() => {
    const location = window && window.location

    const promises: Promise<Frontmatter>[] = []

    const mdxFiles = import.meta.glob<boolean, string, Frontmatter>('../../pages/**/*.mdx')

    const path = `../../pages/${location.pathname.split('/')[1]}/`

    for (const key in mdxFiles) {
      if (key.includes(path)) {
        promises.push(mdxFiles[key]().then(({ title, date, duration, lang, path }) => {
          return { title, duration, date, lang, path }
        }))
      }
    }

    Promise.all(promises).then((results) => {
      // sort the posts by date desc order
      results.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      setter(results)
    })
  }, [])
}