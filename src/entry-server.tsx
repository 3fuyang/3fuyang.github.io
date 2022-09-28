import { renderToString } from 'react-dom/server'
import { appElement } from './main'

const root = document.getElementById('root')

root && (root.className = 'text-gray-700 dark:text-gray-200 scroll-smooth')

export const render = () => renderToString(appElement)