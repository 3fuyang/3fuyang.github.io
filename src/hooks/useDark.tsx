import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

export const THEME = {
  dark: 'dark',
  light: 'light',
} as const satisfies Record<Theme, string>

export const DEFAULT_THEME = THEME.light satisfies Theme

export const THEME_STORAGE_KEY = 'theme'

export function useDark() {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME)

  // on load
  useEffect(() => {
    const prevTheme = localStorage.getItem(THEME_STORAGE_KEY)
    if (
      prevTheme === THEME.dark ||
      (!prevTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
      setTheme(THEME.dark)
    }
  }, [])

  // on re-render
  useEffect(() => {
    const root = document.documentElement
    if (theme === THEME.light) {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  return [theme, setTheme] as const
}
