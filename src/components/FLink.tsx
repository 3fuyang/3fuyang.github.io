import type { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'
import { memo } from 'react'

export interface FLinkProps {
  to: string
  title: string
  icon: IconType
}

function FLink(props: FLinkProps) {

  return (
    <NavLink title={props.title} to={props.to} className={({ isActive }) => {
      return isActive ? 'link op100' : 'link'
    }}>
      <span className="lt-md:hidden">{props.title}</span>
      <props.icon className="md:hidden w5 h5" />
    </NavLink>
  )
}

export default memo(FLink)