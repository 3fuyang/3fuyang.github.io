import type { ReactNode } from 'react'
import type { RouteObject } from 'react-router'

const rawPages = import.meta.glob<boolean, string, ReactNode>(
  [
    '../../pages/**/*.mdx',
    '../../pages/**/*.tsx'
  ],
  { import: 'default' }
)

console.log('rawPages:\n')
console.dir(rawPages)

interface Page {
  path: string
  element: ReactNode
}

const pages: Page[] = []

for (const key in rawPages) {
  pages.push({
    element: (await rawPages[key]()),
    path: key.match(/pages\/(.+)/)![1]
  })
}

console.log('pages:\n')
console.log(pages)

interface Dir {
  path: string
  container: Pick<RouteObject, 'caseSensitive' | 'path' | 'children'> | null
}

function transform(pages: Page[]): RouteObject[] {
  // 注意：import.meta.glob 已将 pages 排序过
  const currDirs: Dir[] = [],
    result: RouteObject[] = []

  pages.forEach(({ path, element }) => {
    console.log('path:', path)
    const [pageDir, fileName] = path.split(/\/?([^/]+$)/)
    console.log(pageDir, fileName)

    const folders = pageDir.split('/')
    let matchedIndex = -1

    console.log('folders:', folders)

    // 与当前路由栈从前往后进行匹配
    for (let i = 0; i < folders.length && i < currDirs.length; ++i) {
      // 当出现不匹配时，跳出循环
      if (folders[i] !== currDirs[i].path) {
        break
      }
      matchedIndex = i
    }

    console.log(`matchedIndex: ${matchedIndex}`)

    // 从路由栈中匹配到了已有路由
    if (matchedIndex >= 0) {
      // 将路由栈匹配中不匹配的路由删除
      currDirs.splice(matchedIndex + 1)

      // 将新增的路由添加到当前路由栈中
      folders.slice(matchedIndex + 1).forEach((newFolder) => {
        // 栈顶父路由
        const parent = currDirs.at(-1)?.container,
          // 新父路由
          newParent: Dir['container'] = {
            caseSensitive: true,
            path: newFolder,
            children: []
          }

        // 与上层路由建立父子关系
        parent?.children?.push(newParent)
        // 新父路由进栈
        currDirs.push({
          path: newFolder,
          container: newParent
        })
      })
    }
    // 从路由栈中未匹配到任一路由
    else {
      // 清空路由栈
      // 注意：先将栈底路由加入到 result 中
      currDirs.length && result.push(currDirs[0].container!)
      currDirs.length = 0
      // 重新构建路由栈
      folders.forEach((newFolder) => {
        if (newFolder === '') return
        const newParent: Dir['container'] = {
          caseSensitive: true,
          path: newFolder,
          children: []
        }

        currDirs.length && currDirs.at(-1)?.container?.children?.push(newParent)

        currDirs.push({
          path: newFolder,
          container: newParent
        })
      })
    }

    const newLeaf = {
      caseSensitive: true,
      path: /index\.\w+/.test(fileName) ? '' : fileName.match(/^([^.]+)\./)![1],
      element: element
    }

    currDirs.length
      ? (currDirs.at(-1)?.container?.children?.push(newLeaf))
      : (result.push(newLeaf))
  })

  currDirs.length && result.push(currDirs[0].container!)

  return result
}

const result = transform(pages)

console.log(result)

export default result
