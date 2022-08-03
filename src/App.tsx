import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDark } from './hooks/useDark'

const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'))
const NavBar = lazy(() => import('./components/NavBar'))

function App() {
  useDark()

  return (
    <BrowserRouter>
      <Suspense>
        <ErrorBoundary>
          <NavBar />
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
