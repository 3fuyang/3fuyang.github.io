---
title: /[a-zA-Z]/.test(undefined) === true
duration: 1min
description: undefined 被自动转化成字符串进行正则匹配了，整蛊。
lang: zh
date: 2022-09-25T18:31:00.000+08:00
---

# RegExp.prototype.test(undefined)

`undefined`在匹配**正则表达式**时居然会被视作**字符串**，这也太整蛊了...

```js
// true
/[a-zA-Z]/.test(undefined)

// true
/define/.test(undefined)

// false
/\d+/.test(undefined)
```

附上用到这个特性（歪打正着）的题目——[对以下字符串进行压缩编码](https://q.shanyue.tech/fe/code/419.html)：

```js
// 压缩以及解压字符串编码
const encode = (str) => {
  const arr = []
  let cur,
    count = 0
  for (let i = 0; i < str.length; ++i) {
    if (cur !== str[i]) {
      arr.push(cur)
      if (count > 0) {
        arr.push(count)
      }
      cur = str[i]
      count = 1
    } else {
      count++
    }
  }
  return arr.join('')
}

const decode = (str) => {
  const arr = str.split(''),
    result = [],
    stack = []

  for (let i = 0; i < arr.length + 1; ++i) {
    if (/[a-zA-Z]/.test(arr[i])) {
      let frequency = 0,
        char

      for (let j = 0; j < stack.length; ++j) {
        if (/\d/.test(stack[j])) {
          frequency = frequency * 10 + stack[j]
        } else {
          char = stack[j]
        }
      }

      for (let i = 0; i < frequency; ++i) {
        result.push(char)
      }

      stack.length = 0
    }

    stack.push(str[i])
  }

  return result.join('')
}
```
