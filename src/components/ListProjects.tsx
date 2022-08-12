type Project = {
  icon: string
  title: string
  src: string
  online: string
  intro: string
}

const projects: Project[] = [
  {
    icon: '',
    title: '',
    src: '',
    online: '',
    intro: ''
  }
]

export default function ListProjects() {
  return (
    <section>
      {projects.map((project) => (
        <article key={project.title}>
          <a href={project.src}>
            <img src="" alt="logo" />
            <span>{project.title}</span>
            <span>{project.intro}</span>
          </a>
        </article>))}
    </section>
  )
}
