import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

export const NavBar:FC = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 absolute mx-6 my-4 box-border">
        <img src={reactLogo} alt="logo" />
      </NavLink>
      <nav className="p-8 w-1/1 auto-cols-auto box-border">
        <div className="spacer" />
        <div className="right grid gap-4.8 grid-flow-col">
          <NavLink to="/blog" title="Blog">
            <span className="md:">Blog</span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
