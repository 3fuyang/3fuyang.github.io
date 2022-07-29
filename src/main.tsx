import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
// Disable Volar extension to get proper tsx support.

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

