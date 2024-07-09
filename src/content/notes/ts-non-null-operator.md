---
title: TS 非空断言操作符（Non-null Assertion Operator）
duration: 1min
description: ! 操作符，将 null 和 undefined 的情况排除。
lang: zh
date: 2022-10-03T11:20:00.000+08:00
---

后缀 ! （Postfix`!`），可将`null`和`undefinde`从 TS 对变量的类型检查中移除。

常用于 **DOM** 的查找（query）结果。

```ts
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed())
}

// assert the result of DOM queries
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Bazzinga
  </div>
`
```
