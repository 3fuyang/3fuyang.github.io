import { FC, useCallback, useMemo, memo } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useDark } from '../hooks/useDark'

const ToggleTheme: FC = () => {
  const [mode, setMode] = useDark()

  const toggleTheme = useCallback(() => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }, [mode])

  const [ToggleTitle, ToggleIcon] = useMemo(() => {
    return [
      mode === 'dark' ? 'Light' : 'Dark',
      mode === 'dark'
        ? <MdDarkMode className="w5 h5" />
        : <MdLightMode className="w5 h5" />
    ]
  }, [mode])

  return (
    <span
      className="select-none link cursor-pointer"
      title={`Toggle to ${ToggleTitle} Mode`}
      onClick={toggleTheme}>
      {ToggleIcon}
    </span>
  )
}

export default memo(ToggleTheme)
