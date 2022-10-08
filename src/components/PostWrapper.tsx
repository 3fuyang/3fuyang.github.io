import { type PropsWithChildren } from 'react'
import { useTitle } from '../hooks/useTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'

interface PWprops  { path: string }

export default function PostWrapper(props: PropsWithChildren<PWprops>) {

  useTitle(props.path)

  useScrollToTop()

  return (
    <article className="prose">
      {props.children}
    </article>
  )
}
