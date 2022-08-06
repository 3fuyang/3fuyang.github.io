import { useFrontmatter } from '../hooks/useFrontmatter'

export default function Post() {
  useFrontmatter()

  return (
    <article>
      <a href="">
        Exists?
      </a>
    </article>
  )
}