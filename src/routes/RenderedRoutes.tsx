import { createElement, FC } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'

routes.forEach((route) => {
  route.element = createElement('article', { className: 'prose' }, route.element)
})

const RenderedRoutes:FC = () =>  useRoutes(routes)

export default RenderedRoutes
