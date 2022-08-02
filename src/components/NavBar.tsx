import { FC, lazy } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import type { FLinkProps } from './FLink'
import { TbFileDescription, TbAlbum, TbBooks, TbApps } from 'react-icons/tb'
const FLink = lazy(() => import('./FLink'))

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

export const NavBar:FC = () => {
  return (
    <header className="flex p5 items-center relative">
      <Link to="/" className="select-none outline-none">
        <img src={reactLogo} alt="logo" className="h-10" />
      </Link>
      <div className="spacer flex-1" />
      <nav flex="~ gap-4.8 md:gap-6">
        {fLinks.map((fLink) => <FLink to={fLink.to} title={fLink.title} icon={fLink.icon} key={fLink.title} />)}
      </nav>
    </header>
  )
}
