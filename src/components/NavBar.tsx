import { FC, lazy } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import type { FLinkProps } from './FLink'
import { TbFileDescription, TbAlbum, TbBooks, TbApps } from 'react-icons/tb'
import { GoMarkGithub } from 'react-icons/go'

const FLink = lazy(() => import('./FLink'))
const ToggleTheme = lazy(() => import('./ToggleTheme'))

const fLinks:FLinkProps[] = [
  {
    to: '/blog',
    title: 'Blog',
    icon: TbFileDescription
  },
  {
    to: '/essay',
    title: 'Essay',
    icon: TbBooks
  },
  {
    to: '/projects',
    title: 'Projects',
    icon: TbApps
  },
  {
    to: '/demos',
    title: 'Demos',
    icon: TbAlbum
  }
]

const NavBar:FC = () => {
  return (
    <header className="flex px5 py3 items-center relative">
      <Link to="/" className="select-none outline-none">
        <img src={reactLogo} alt="logo" className="h-10" />
      </Link>
      <div className="spacer flex-1" />
      <nav flex="~ gap-6 md:gap-8 items-center">
        {fLinks.map((fLink) => <FLink to={fLink.to} title={fLink.title} icon={fLink.icon} key={fLink.title} />)}
        <a href="https://github.com/3fuyang" target="_blank" rel="noreferrer" title="Github">
          <GoMarkGithub className="h5 w5 link" />
        </a>
        <ToggleTheme />
      </nav>
    </header>
  )
}

export default NavBar
