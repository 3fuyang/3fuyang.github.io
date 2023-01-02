import { memo, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
//import manualRoutes from './auto-routes'
import autoRoutes from '../models/routes'
import NotFound from '../components/NotFound'

const fullRoutes = [
  ...autoRoutes,
  {
    path: '*',
    element: <NotFound />
  }
]


const RenderedRoutes = () => useRoutes(fullRoutes)

export default memo(RenderedRoutes)
