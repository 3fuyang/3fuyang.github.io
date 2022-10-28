import { useEffect } from 'react'
import type { Frontmatter } from '../../types/frontmatter'
import { frontmatters } from '../models/frontmatters'

export function useFrontmatters(setter: (newVal: Frontmatter[]) => void) {
  // pathname: e.g. /blog
  const { pathname } = window && window.location

  useEffect(() => {
    const filteredFms = frontmatters
      // filter the frontmatters with the current Browser path
      .filter((fm) => fm.path.startsWith(pathname))
      // sort the posts by date desc order
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

    setter(filteredFms)
  }, [pathname])
}