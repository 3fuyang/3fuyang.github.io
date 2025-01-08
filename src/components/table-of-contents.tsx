import type { MarkdownHeading } from 'astro'
import { useMemo } from 'react'

interface MarkdownHeadingNode extends MarkdownHeading {
  children?: MarkdownHeadingNode[]
}

export function TableOfContents({ headings }: { headings: MarkdownHeading[] }) {
  const structuralHeadings = useMemo<MarkdownHeadingNode[]>(() => {
    const MAX_DEPTH = 6
    const filteredHeadings = headings.filter(
      (heading) => heading.depth <= MAX_DEPTH,
    )

    return transformToTree(filteredHeadings)
  }, [headings])

  return (
    <aside className="not-prose top-[84px] z-40 my-6 h-full space-y-2 leading-normal xl:fixed xl:right-6 xl:max-h-[calc(100vh_-_84px_-_2rem)] xl:w-64 xl:overflow-auto">
      <p className="font-medium">On this page</p>

      <ul className="space-y-2 text-sm font-light text-muted-foreground">
        {structuralHeadings.map((heading) => (
          <TableOfContentsItem key={heading.slug} heading={heading} />
        ))}
      </ul>
    </aside>
  )
}

function transformToTree(data: MarkdownHeading[]): MarkdownHeadingNode[] {
  const root: MarkdownHeadingNode[] = [] // The final tree structure
  const stack: MarkdownHeadingNode[] = [] // Tracks the hierarchy of nodes

  for (const item of data) {
    // Create a copy of the current item
    const node: MarkdownHeadingNode = { ...item }

    // Find the appropriate parent in the stack
    while (stack.length && stack[stack.length - 1].depth >= item.depth) {
      stack.pop()
    }

    if (stack.length === 0) {
      // No parent, add it to the root level
      root.push(node)
    } else {
      // Add as a child to the current parent
      const parent = stack[stack.length - 1]
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(node)
    }

    // Push the current node onto the stack
    stack.push(node)
  }

  return root
}

/**
 * Recursively builds a list of table of contents items
 */
function TableOfContentsItem({ heading }: { heading: MarkdownHeadingNode }) {
  return (
    <li className="flex flex-col space-y-2 text-pretty">
      <a
        href={`#${heading.slug}`}
        className="transition-colors hover:text-foreground focus-visible:text-foreground"
      >
        {heading.text}
      </a>
      {heading.children && (
        <ul className="space-y-2 pl-4">
          {heading.children.map((child) => (
            <TableOfContentsItem key={child.slug} heading={child} />
          ))}
        </ul>
      )}
    </li>
  )
}
