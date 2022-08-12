import { createElement, FC } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import { NotFound } from '../components/NotFound'

routes.forEach((route) => {
  if (route.element) {
    // 一级目录
    route.element = createElement('article', { className: 'prose' }, route.element)
  } else if (route.children) {
    // 二级目录
    route.children.forEach((child) => {
      // Skip the index route stylizing
      !child.path?.length || (child.element = createElement('article', { className: 'prose' }, child.element))
    })
  }
})

routes.push({
  path: '*',
  element: <NotFound />
})

const RenderedRoutes:FC = () =>  useRoutes(routes)

export default RenderedRoutes
