import { RiLoaderLine } from 'react-icons/ri'
import { memo } from 'react'

interface LProps {
  msg: string
}

function Loading({ msg }: LProps) {
  return (
    <article
      className="justify-center items-center fixed top-1/2 left-1/2 -translate-1/2"
      flex="~ col"
    >
      <section className="animate-spin animate-duration-1500">
        <RiLoaderLine
          aria-hidden="true"
          className="w-10 md:w-18 ha color-gray-3"
        />
      </section>
      <section className="animate-pulse font-bold text-lg mt-2 tracking-wider text-gray-5">
        {msg}
      </section>
    </article>
  )
}

export default memo(Loading)
