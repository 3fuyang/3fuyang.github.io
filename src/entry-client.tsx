import { hydrateRoot } from 'react-dom/client'
import { appElement } from './main'

const root = document.getElementById('root')

root && (root.className = 'text-gray-700 dark:text-gray-200 scroll-smooth')

hydrateRoot(root as HTMLElement, appElement)
