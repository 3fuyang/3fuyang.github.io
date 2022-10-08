import { useEffect } from 'react'

export function useScrollToTop() {
  const { pathname } = window && window.location

  useEffect(() => {
    window && window.scrollTo({
      top: 0,
      left: 0
    })
  }, [pathname])
}