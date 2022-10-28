import { useEffect } from 'react'
import type { Frontmatter } from '../../types/frontmatter'

const mdxFiles = import.meta.glob<boolean, string, Frontmatter>('../../pages/**/*.mdx')

export function useFrontmatters(setter: (newVal: Frontmatter[]) => void) {
  const { pathname } = window && window.location
  useEffect(() => {
    const promises: Promise<Frontmatter>[] = []

    const path = `../../pages/${pathname.split('/')[1]}/`

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
  }, [pathname])
}