import { PropsWithChildren } from 'react'
import { useTitle } from '../hooks/useTitle'

interface PWprops  { path: string }

export default function PostWrapper(props: PropsWithChildren<PWprops>) {

  useTitle(props.path)

  return (
    <article className="prose">
      {props.children}
    </article>
  )
}
