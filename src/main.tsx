// exports env-agnostic app code
import { StrictMode } from 'react'

import App from './App'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/syntax-highlight.css'

export const appElement = (
  <StrictMode>
    <App />
  </StrictMode>
)