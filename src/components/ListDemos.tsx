import { demos } from '../models/demos'

export default function ListDemos() {
  return (
    <section className="m-auto max-w-45em justify-between" flex="~ wrap">
      {demos.map((project) => (
        <article
          key={project.title}
          className="dark:shadow-gray-5 box-border rounded-md p3 w-20/41 h-40 op80 mb4"
          hover="op100 shadow-md"
          active="op100 shadow-md"
          transition="~"
          border="~ gray-4">
          <a href={project.src} target="_blank" rel="noreferrer">
            <project.icon aria-hidden="true" className="w-10 ha color-gray-6 dark:color-gray-3" />
            <h2 className="font-bold text-xl truncate">{project.title}</h2>
            <main className="overflow-auto box-border h-18">{project.intro}</main>
          </a>
        </article>))}
    </section>
  )
}
