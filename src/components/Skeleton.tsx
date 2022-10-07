interface SProps {
  type: 'card' | 'text'
  width: number
  height: number
}

export default function Skeleton({ type, width, height }: SProps) {
  return (
    <div className="">

    </div>
  )
}