---
title: Function.prototype.length
duration: 1min
description: Function.prototype.length 的意义。
lang: zh
date: 2022-10-10T14:54:00.000+08:00
---

`Function.prototype.length`返回函数的**形参**（parameters）个数。

这在 JS 的**函数柯里化**（currying, or partially applied function）实现中会用到。

```ts
function curry<T>(func: (...args: any[]) => T) {
  const appliedArgs = []

  const curried = (...args: any[]) => {
    appliedArgs.push(...args)
    if (appliedArgs.length >= func.length) {
      return func(...appliedArgs)
    } else {
      return curried
    }
  }

  return curried
}
```
