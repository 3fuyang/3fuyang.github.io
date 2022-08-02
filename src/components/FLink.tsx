import type { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'

export type FLinkProps = {
  to: string
  title: string
  icon: IconType
}

export default function FLink(props: FLinkProps) {

  return (
    <NavLink title={props.title} to={props.to} className="link">
      <span className="lt-md:hidden">{props.title}</span>
      <props.icon className="md:hidden w5 h5 link" />
    </NavLink>
  )
}
