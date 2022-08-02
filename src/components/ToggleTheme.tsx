import { FC, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const ToggleTheme:FC = () => {
  const isDark = window.localStorage.getItem('dark')
  const [mode, setMode] = useState<'dark' | 'light'>(isDark === '1' ? 'dark' : 'light')

  function toggleTheme() {
    if (mode === 'dark') {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('dark', '0')
      setMode('light')
    } else {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('dark', '1')
      setMode('dark')
    }
  }

  return (
    <a className="select-none link cursor-pointer" title="Toggle Color Theme" onClick={toggleTheme}>
      {isDark === '1' ? <MdDarkMode className="w5 h5" /> : <MdLightMode className="w5 h5" />}
    </a>
  )
}

export default ToggleTheme
