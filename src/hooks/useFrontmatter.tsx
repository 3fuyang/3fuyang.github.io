import { useEffect } from 'react'
import { useLocation } from 'react-router'

export function useFrontmatter() {
  const location = useLocation()
  useEffect(() => {

    const dir = `../../pages/${location.pathname.split('/')[1]}/*.mdx`
  })
}