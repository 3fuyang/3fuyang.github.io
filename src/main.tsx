// exports env-agnostic app code
import { StrictMode } from 'react'

import App from './App'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/syntax-highlight.css'

if (typeof window !== 'undefined') {
  const { registerSW } = await import('virtual:pwa-register')
  registerSW({ immediate: true })
}

export const AppElement = () => (
  <StrictMode>
    <App />
  </StrictMode>
)