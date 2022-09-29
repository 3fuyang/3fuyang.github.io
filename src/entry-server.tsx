import { lazy } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppElement } from './main'

const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'))

export const render = (url: string) => renderToString(
  <ErrorBoundary>
    <StaticRouter location={url}>
      <AppElement />
    </StaticRouter>
  </ErrorBoundary>
)