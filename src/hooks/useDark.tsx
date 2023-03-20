import { useEffect, useState } from 'react'

export function useDark() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  // on load
  useEffect(() => {
    const prevTheme = localStorage.getItem('theme')
    if (
      prevTheme === 'dark' ||
      (!prevTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
    }
  }, [])

  // on re-render
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  return [theme, setTheme] as const
}
