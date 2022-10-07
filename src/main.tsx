import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/syntax-highlight.css'

const root = document.getElementById('root')

root && (root.className = 'text-gray-700 dark:text-gray-200 scroll-smooth')

createRoot(root as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
