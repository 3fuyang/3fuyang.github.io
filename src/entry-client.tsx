import { hydrateRoot } from 'react-dom/client'
import { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppElement } from './main'

const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'))

const root = document.getElementById('root')

root && (root.className = 'text-gray-700 dark:text-gray-200 scroll-smooth')

hydrateRoot(root as HTMLElement, (
  <ErrorBoundary>
    <BrowserRouter>
      <AppElement />
    </BrowserRouter>
  </ErrorBoundary>
))