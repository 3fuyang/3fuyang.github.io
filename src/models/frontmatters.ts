import type { Frontmatter } from '../../types/frontmatter'

const mdxFiles = import.meta.glob<boolean, string, Frontmatter>('../../pages/**/*.mdx'),
  imps: Promise<Frontmatter>[] = []

for (const key in mdxFiles) {
  imps.push(mdxFiles[key]().then(frontmatter => frontmatter))
}

export const frontmatters = await Promise.all(imps)