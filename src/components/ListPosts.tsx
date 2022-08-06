import { useFrontmatter } from '../hooks/useFrontmatter'

export default function Post() {
  useFrontmatter()

  return (
    <a href="">
      Exists?
    </a>
  )
}