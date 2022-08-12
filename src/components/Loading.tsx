import { spawn } from 'child_process'
import { RiLoaderLine } from 'react-icons/ri'

export default function Loading() {
  return (
    <article
      className="justify-center items-center fixed top-1/2 left-1/2 -translate-1/2"
      flex="~ col">
      <RiLoaderLine
        aria-hidden="true"
        className="w-10 md:w-18 ha animate-spin color-gray-3 animate-duration-1500" />
      <section className="animate-pulse font-bold text-lg mt-2 tracking-wider text-gray-5">
        Loading ...
      </section>
    </article>
  )
}
