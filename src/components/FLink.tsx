import type { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'

export type FLinkProps = {
  to: string
  title: string
  icon: IconType
}

export default function FLink(props: FLinkProps) {

  return (
    <NavLink title={props.title} to={props.to} className="op60 hover:(op100) transition-opacity duration-200">
      <span className="lt-md:hidden">{props.title}</span>
      <props.icon className="md:hidden w4.8 h4.8" />
    </NavLink>
  )
}
