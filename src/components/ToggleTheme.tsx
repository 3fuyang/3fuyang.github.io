import { FC, useCallback, useMemo, memo } from 'react'
// import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useDark } from '../hooks/useDark'

const ToggleTheme: FC = () => {
  const [mode, setMode] = useDark()

  const toggleTheme = useCallback(() => {
    const newMode = mode === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', newMode)
    setMode(newMode)
  }, [mode, setMode])

  const [ToggleTitle, ToggleIcon] = useMemo(() => {
    return [
      mode === 'dark' ? 'Light' : 'Dark',
      mode === 'dark' ? (
        <div className="i-material-symbols-dark-mode w5 h5 text-white" />
      ) : (
        <div className="i-material-symbols-light-mode w5 h5" />
      ),
    ]
  }, [mode])

  return (
    <div
      className="select-none link cursor-pointer"
      title={`Toggle to ${ToggleTitle} Mode`}
      onClick={toggleTheme}
    >
      {ToggleIcon}
    </div>
  )
}

export default memo(ToggleTheme)
