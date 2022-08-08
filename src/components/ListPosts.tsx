import { useState } from 'react'
import { Frontmatter } from '../../types/frontmatter'
import { useFrontmatter } from '../hooks/useFrontmatter'

export default function Post() {
  const [frontmatters, setFrontmatters] = useState<Frontmatter[]>([])

  useFrontmatter(setFrontmatters)

  return (
    <>
      {frontmatters.map((frontmatter: Frontmatter) => (<article key={frontmatter.title}>{frontmatter.title}</article>))}
    </>
  )
}