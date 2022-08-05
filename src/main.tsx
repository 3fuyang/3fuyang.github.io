import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/syntax-highlight.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
