import { useEffect } from 'react'
import frontmatters from '../models/frontmatters'
import type { Frontmatter } from '../../types/frontmatter'

export function useFrontmatters(setter: (newVal: Frontmatter[]) => void) {
  const { pathname } = window && window.location

  useEffect(() => {
    const fms = frontmatters.filter(fm => fm.path.includes(pathname))

    // sort the posts by date desc order
    fms.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    setter(fms)
  }, [pathname])
}