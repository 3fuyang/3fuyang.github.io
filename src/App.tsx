import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDark } from './hooks/useDark'

const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'))
const NavBar = lazy(() => import('./components/NavBar'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  useDark()

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense>
          <NavBar />
          <main className="px7 py10">
            <Footer />
          </main>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
