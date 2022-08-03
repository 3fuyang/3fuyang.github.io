import { FC } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useDark } from '../hooks/useDark'

const ToggleTheme:FC = () => {
  const [mode, setMode] = useDark()

  function toggleTheme() {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <a className="select-none link cursor-pointer" title={`Toggle to ${mode === 'dark' ? 'Light' : 'Dark'} Mode`} onClick={toggleTheme}>
      {mode === 'dark' ? <MdDarkMode className="w5 h5" /> : <MdLightMode className="w5 h5" />}
    </a>
  )
}

export default ToggleTheme
