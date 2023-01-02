import { useEffect } from 'react'

const { default: frontmatters } = await import('../models/frontmatters')

const useTitle = (routePath: string) => {
  const path = window && location.pathname

  useEffect(() => {
    if (routePath !== '/') {
      for (const { path, title } of frontmatters) {
        if (path.includes(routePath)) {
          document.title = title
          break
        }
      }
    }

    return () => { document.title = 'Fwio' }
  }, [path])

}

export { useTitle }