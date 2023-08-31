import { useCallback, useMemo, memo } from 'react'

import { THEME, THEME_STORAGE_KEY, useDark } from '../hooks/useDark'

const darkIcon = <div className="i-material-symbols-dark-mode w5 h5 text-white" />
const lightIcon = <div className="i-material-symbols-light-mode w5 h5" />

function ToggleTheme() {
  const [mode, setMode] = useDark()

  const toggleTheme = useCallback(() => {
    setMode(m => {
      const updatedMode = m === THEME.dark ? THEME.light : THEME.dark
      localStorage.setItem(THEME_STORAGE_KEY, updatedMode)
      return updatedMode
    })
  }, [mode])

  const [toggleTitle, toggleIcon] = useMemo(() => {
    return [
      mode === THEME.dark ? THEME.light : THEME.dark,
      mode === THEME.dark ? darkIcon : lightIcon,
    ]
  }, [mode])

  return (
    <button
      className="link"
      title={`Toggle to ${toggleTitle} mode`}
      onClick={toggleTheme}
    >
      {toggleIcon}
    </button>
  )
}

export default memo(ToggleTheme)
