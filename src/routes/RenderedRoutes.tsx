import { createElement, FC } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import { NotFound } from '../components/NotFound'
import PostWrapper from '../components/PostWrapper'
import manualRoutes from './auto-routes'

console.log('targetRoutes:\n')
console.log(routes)

function parseRoutes(routes: RouteObject[]) {
  routes.forEach((route) => {
    if (route.element && route.path?.length) {
      // file, wrap it
      route.element = createElement(PostWrapper, { path: route.path as string }, route.element)
    } else if (route.children) {
      // folder, handle it recursively
      parseRoutes(route.children)
    }
  })
}

parseRoutes(routes)

/* routes.push({
  path: '*',
  element: <NotFound />
}) */

const RenderedRoutes: FC = () =>  useRoutes(routes)

export default RenderedRoutes
