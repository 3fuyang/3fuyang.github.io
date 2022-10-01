import { lazy, Suspense } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppElement } from './main'
import { type Response } from 'express'

const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'))

const Loading = lazy(() => import('./components/Loading'))

export const render = (url: string, res: Response) => {
  let didError = false
  const { pipe } = renderToPipeableStream(
    <Suspense fallback={<Loading msg="Initializaing..." />}>
      <ErrorBoundary>
        <StaticRouter location={url}>
          <AppElement />
        </StaticRouter>
      </ErrorBoundary>
    </Suspense>,
    {
      onShellReady() {
        // The content above all Suspense boundaries is ready.
        // If something errored before we started streaming, we set the error code appropriately.
        res
          .status(didError ? 500 : 200)
          .set({ 'Content-type': 'text/html' })

        pipe(res)
      },
      onShellError(err) {
        // Something errored before we could complete the shell so we emit an alternative shell.
        res.statusCode = 500
        res.end(
          '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
        )
      },
      onError(err) {
        didError = true
        console.error(err)
      }
    }
  )
}