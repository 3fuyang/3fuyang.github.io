import { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'

const RenderedRoutes:FC = () => useRoutes(routes)

export default RenderedRoutes
