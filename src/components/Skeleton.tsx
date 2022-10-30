interface SProps {
  type?: 'card' | 'text'
}

export default function Skeleton({ type = 'text' }: SProps) {
  return (
    <article className="prose fixed" flex="~ col" animate="pulse">

      <section aria-hidden className="skeleton w-7/8" />
      <section aria-hidden className="skeleton w-full" />
      <section aria-hidden className="skeleton w-3/5" />
      <section aria-hidden className="skeleton w-1/3" />

    </article>
  )
}