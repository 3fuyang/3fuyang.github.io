import { createElement, FC, memo, lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import PostWrapper from '../components/PostWrapper'
import manualRoutes from './auto-routes'

const NotFound = lazy(() => import('../components/NotFound'))

function parseRoutes(routes: RouteObject[]) {
  routes.forEach((route) => {
    if (route.element && route.path?.length) {
      // markdown file, wrap it
      route.element = createElement(PostWrapper, { path: route.path as string }, route.element)
    } else if (route.children) {
      // folder, handle it recursively
      parseRoutes(route.children)
    }
  })

  routes.push({
    path: '*',
    element: <NotFound />
  })

  return routes
}

const RenderedRoutes = () => useRoutes(parseRoutes(manualRoutes))

export default memo(RenderedRoutes)
