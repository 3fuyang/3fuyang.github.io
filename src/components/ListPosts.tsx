import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Frontmatter } from '../../types/frontmatter'
import { useFrontmatters } from '../hooks/useFrontmatters'

function ListPosts() {
  const [frontmatters, setFrontmatters] = useState<Frontmatter[]>([])

  useFrontmatters(setFrontmatters)

  const PostCards = useMemo(() => {
    return frontmatters.map((frontmatter: Frontmatter) =>
      <article key={frontmatter.title} className="mt-8">
        <Link
          to={frontmatter.path}
          className="block box-border rounded-sm op70 dark:op80 hover:op100 focus:op100 ml-4 p-1 hover:drop-shadow focus:drop-shadow"
          border="r-4 #878584 hover:blue-4 dark:hover:blue-5 focus:blue-4 dark:focus:blue-5 lt-md:blue-4"
          flex="~ col"
          transition="~">
          <span className="text-3xl font-bold truncate">{frontmatter.title}</span>
          <span>{new Date(frontmatter.date).toLocaleDateString()}</span>
        </Link>
      </article>
    )
  }, [frontmatters])

  return (
    <section className="max-w-45em m-auto">
      {PostCards}
    </section>
  )
}

export default ListPosts
