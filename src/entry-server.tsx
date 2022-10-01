import { lazy, Suspense } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppElement } from './main'

const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'))

const Loading = lazy(() => import('./components/Loading'))

export const render = (url: string) => renderToPipeableStream(
  <Suspense fallback={<Loading msg="Initializaing..." />}>
    <ErrorBoundary>
      <StaticRouter location={url}>
        <AppElement />
      </StaticRouter>
    </ErrorBoundary>
  </Suspense>
)