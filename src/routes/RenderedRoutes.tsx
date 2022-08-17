import { createElement, FC } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import { NotFound } from '../components/NotFound'
import PostWrapper from '../components/PostWrapper'

routes.forEach((route) => {
  if (route.element) {
    // 一级目录
    route.element = createElement(PostWrapper, { path: route.path as string }, route.element)
  } else if (route.children) {
    // 二级目录
    route.children.forEach((child) => {
      // Skip the index route stylizing
      !child.path?.length || (child.element = createElement(PostWrapper, { path: child.path as string }, child.element))
    })
  }
})

routes.push({
  path: '*',
  element: <NotFound />
})

const RenderedRoutes: FC = () =>  useRoutes(routes)

export default RenderedRoutes
