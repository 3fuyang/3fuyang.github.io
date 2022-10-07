import { createElement, FC } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
//import routes from '~react-pages'
import { NotFound } from '../components/NotFound'
import PostWrapper from '../components/PostWrapper'
import manualRoutes from './auto-routes'
//import './auto-routes'

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
}

parseRoutes(manualRoutes)

const RenderedRoutes: FC = () =>  useRoutes(manualRoutes)

export default RenderedRoutes
