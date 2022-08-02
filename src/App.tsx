import { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'

const NavBar = lazy(() => import('./components/NavBar'))

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  )
}

export default App
