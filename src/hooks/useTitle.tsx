import { useEffect } from 'react'

const { default: frontmatters } = await import('../models/frontmatters')

export function useTitle(routePath: string) {
  useEffect(() => {
    if (routePath !== '/') {
      frontmatters.forEach(({ path, title }) => {
        if (path.includes(routePath)) {
          document.title = title
        }
      })
    }

    return () => { document.title = 'Fwio' }
  }, [])

}