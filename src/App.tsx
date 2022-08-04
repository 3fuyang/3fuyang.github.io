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
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}

export default App
