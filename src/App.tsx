import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

const NavBar = lazy(() => import('./components/NavBar'))

function App() {
  const isDark = window.localStorage.getItem('dark')
  if (isDark === '1') {
    document.documentElement.classList.add('dark')
  }
  return (
    <BrowserRouter>
      <Suspense>
        <NavBar />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
