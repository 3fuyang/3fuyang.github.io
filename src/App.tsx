import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDark } from './hooks/useDark'

const NavBar = lazy(() => import('./components/NavBar'))

function App() {
  useDark()

  return (
    <BrowserRouter>
      <Suspense>
        <NavBar />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
