import { demos } from '../models/demos'
import { FaReact, FaVuejs } from 'react-icons/fa'

export default function ListDemos() {
  return (
    <section className="m-auto max-w-45em md:justify-between md:flex md:flex-wrap">
      {demos.map((project) => (
        <article
          key={project.title}
          className="relative dark:shadow-gray-5 box-border rounded-md p3 md:w-20/41 h-40 op80 mb4"
          hover="op100 shadow-md"
          active="op100 shadow-md"
          transition="~"
          border="~ gray-4">
          <a href={project.src} target="_blank" rel="noreferrer">
            <header aria-hidden="true" className="absolute bottom-1 right-1">
              {project.type === 'react' ? <FaReact className="w-6 ha color-cyan-5 dark:color-cyan-4" /> : <FaVuejs className="w-6 ha color-green-7 dark:color-emerald-5" />}
            </header>
            <project.icon aria-hidden="true" className="w-10 ha color-gray-6 dark:color-gray-3" />
            <h2 className="font-bold text-xl truncate">{project.title}</h2>
            <main className="overflow-auto box-border h-18">{project.intro}</main>
          </a>
        </article>))}
    </section>
  )
}
