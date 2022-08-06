import { createElement, FC, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'

const ListPosts = lazy(() => import('../components/ListPosts'))

routes.forEach((route) => {
  if (route.element) {
    // 一级目录
    route.element = createElement('article', { className: 'prose' }, route.element)
  } else if (route.children) {
    // 二级目录
    route.children.forEach((child) => {
      child.element = createElement('article', { className: 'prose' }, child.element)
    })
  }
})

routes.push({
  path: '/blog',
  element: <ListPosts />
})

const RenderedRoutes:FC = () =>  useRoutes(routes)

export default RenderedRoutes
