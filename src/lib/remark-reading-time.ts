import type { RemarkPlugin } from '@astrojs/markdown-remark'
import { toString } from 'mdast-util-to-string'
import getReadingTime from 'reading-time'

/**
 * @see {@link https://docs.astro.build/en/recipes/reading-time/ Reading Time Plugin}
 */
export const remarkReadingTime: RemarkPlugin = () => {
  return function transformer(tree, { data }) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min"
    data.astro!.frontmatter!.minutesRead = readingTime.minutes + ' min'
  }
}
