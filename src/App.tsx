import { lazy, Suspense, useEffect, useMemo } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'))
const NavBar = lazy(() => import('./components/NavBar'))
const Footer = lazy(() => import('./components/Footer'))
const Loading = lazy(() => import('./components/Loading'))
const Skeleton = lazy(() => import('./components/Skeleton'))
const RenderedRoutes = lazy(() => import('./routes/RenderedRoutes'))

function App() {
  const extraHeight = useMemo(() => {
    // transform 3.5rem to pixels
    return (
      window &&
      Number(
        window
          .getComputedStyle(document.documentElement)
          .fontSize
          .match(/(.*)px/)![1]
      ) * 3.5
    )
  }, [])

  useEffect(() => {
    const hashChangeHandler = (e: HashChangeEvent) => {
      e.preventDefault()
      const el = document.querySelector(`${decodeURIComponent(new URL(e.newURL).hash)}`)
      if (el) {
        const offsetTop = (el as HTMLElement).offsetTop
        window.scrollTo({
          top: offsetTop + extraHeight
        })
      }
    }

    window.addEventListener('hashchange', hashChangeHandler)

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [])

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loading msg="Initializaing ..." />}>
          <NavBar />
          <Suspense fallback={<Loading msg="Loading ..." />}>
            <main className="px7 py10">
              <Suspense fallback={<Skeleton type="text" />}>
                <RenderedRoutes />
              </Suspense>
              <Footer />
            </main>
            <img aria-hidden="true" src="/seagull.svg" alt="seagull" className="fixed top-1/2 left-1/2 -translate-1/2 max-w-2/5 md:max-w-1/6 ha aspect-1 op45 dark:op100 filter-invert-60 mix-blend-difference pointer-events-none" />
          </Suspense>
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}

export default App
