import { useEffect } from 'react'
import { frontmatters } from '../models/frontmatters'

export function useTitle(routePath: string) {

  useEffect(() => {
    for (const fm of frontmatters) {
      if (routePath !== '/' && fm.path.includes(routePath)) {
        document.title = fm.title
      }
    }

    return () => { document.title = 'Fwio' }
  }, [])

}