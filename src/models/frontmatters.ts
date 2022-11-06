import type { Frontmatter } from '../../types/frontmatter'

const mdxFiles = import.meta.glob<boolean, string, Frontmatter>('../../pages/**/*.mdx')

async function extractFrontmatters(files: Record<string, () => Promise<Frontmatter>>) {
  const promises: Promise<Frontmatter>[] = []

  for (const key in files) {
    promises.push(
      files[key]()
    )
  }

  return Promise.all(promises)
}

const frontmatters = await extractFrontmatters(mdxFiles)

export default frontmatters
