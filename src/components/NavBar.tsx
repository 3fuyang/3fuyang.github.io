import { FC, lazy } from 'react'
import { Link } from 'react-router-dom'
import type { FLinkProps } from './FLink'
import { GoMarkGithub } from 'react-icons/go'
import { AiOutlineFileText } from 'react-icons/ai'
import { GiBookshelf, GiSeagull, GiNotebook } from 'react-icons/gi'
import { MdAppRegistration, MdOutlineAlbum } from 'react-icons/md'

const FLink = lazy(() => import('./FLink'))
const ToggleTheme = lazy(() => import('./ToggleTheme'))

const fLinks: FLinkProps[] = [
  {
    to: '/blog',
    title: 'Blog',
    icon: AiOutlineFileText
  },
  {
    to: '/notes',
    title: 'Notes',
    icon: GiNotebook
  },
  {
    to: '/essay',
    title: 'Essay',
    icon: GiBookshelf
  },
  {
    to: '/projects',
    title: 'Projects',
    icon: MdAppRegistration
  },
  {
    to: '/demos',
    title: 'Demos',
    icon: MdOutlineAlbum
  }
]

const NavBar: FC = () => {
  return (
    <header className="flex px5 py3 items-center sticky top-0 z1 backdrop-filter backdrop-blur backdrop-saturate-50">
      <Link to="/" className="select-none outline-none" title="Fwio">
        <GiSeagull className="h-10 wa color-cyan-9 dark:color-#83BEEC" aria-hidden />
      </Link>
      <div className="spacer flex-1" />
      <nav flex="~ gap-6 md:gap-8 items-center">
        {fLinks.map((fLink) => <FLink to={fLink.to} title={fLink.title} icon={fLink.icon} key={fLink.title} />)}
        <a href="https://github.com/3fuyang" className="link" target="_blank" rel="noreferrer" title="Github">
          <GoMarkGithub className="h5 w5" />
        </a>
        <ToggleTheme />
      </nav>
    </header>
  )
}

export default NavBar
