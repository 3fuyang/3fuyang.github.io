import { lazy, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDark } from './hooks/useDark'

const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'))
const NavBar = lazy(() => import('./components/NavBar'))
const Footer = lazy(() => import('./components/Footer'))
const RenderedRoutes = lazy(() => import('./routes/RenderedRoutes'))

function App() {
  useDark()

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <NavBar />
          <main className="px7 py10">
            <RenderedRoutes />
            <Footer />
          </main>
          <img aria-hidden="true" src="/seagull.svg" alt="seagull" className="fixed top-1/2 left-1/2 -translate-1/2 max-w-1/6 ha op45 dark:op100 filter-invert-60 mix-blend-difference pointer-events-none" />
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}

export default App
