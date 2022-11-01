import { useEffect, useState } from 'react'

export function useDark() {
  const isDark = window?.localStorage.getItem('dark') === '1' || window?.matchMedia('(prefers-color-scheme: dark)').matches

  const [mode, setMode] = useState<'dark' | 'light'>(isDark ? 'dark' : 'light')

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('dark', '1')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('dark', '0')
    }
  }, [mode])

  return [mode, setMode] as const
}