import { useEffect, useState } from 'react'

export function useDark() {
  const isDark = window.localStorage.getItem('dark')

  const [mode, setMode] = useState<'dark' | 'light'>(isDark === '1' ? 'dark' : 'light')

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('dark', '1')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('dark', '0')
    }
  })

  return [mode, setMode] as const
}