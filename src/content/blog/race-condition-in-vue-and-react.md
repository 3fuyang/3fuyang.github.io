---
title: Vue 与 React 与竞态问题
pubDate: 2022-10-18T21:07:00+08:00
description: 从《Vue.js 设计与实现》和 reactjs.beta.org 文档上看到的两个框架处理竞态问题上的相似手法，是闭包使用的很好案例。
lang: zh
---

## Reference

> - [You Might Not Need An Effect](https://beta.reactjs.org/learn/you-might-not-need-an-effect#fetching-data)
> - 《Vue.js 设计与实现》

## 竞态问题（Race Condition）

**竞态问题**是异步编程的典型问题，两个请求相互"竞争"，最后以**无法预料**的顺序返回或解决。

在处理竞态问题上，Vue 和 React 都用到了"过期标志"的方法。

## React 处理竞态问题

在 [You Might Not Need An Effect](https://beta.reactjs.org/learn/you-might-not-need-an-effect#fetching-data) 中,
React 为竞态问题举了一个"搜索框"的例子。

假设用户对单词`"hello"`以一种完美的、绕过你自信的防抖或者节流策略的节奏敲下键盘,
那么`"h"`、`"he"`、`"hel"`、`"hell"`、`"hello"`都将触发不同的 data fetching。

显然它们返回响应的时间是无法预测的，不能简单地以最后一个响应（它可能是过期的）为准。

```js
function SearchResults({ query }) {
  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    // Look
    // A race condition
    // Right here
    fetchResults(query, page).then((json) => {
      setResults(json)
    })
  }, [query, page])
}
```

对此，React 要求开发者自己为 Effects 手动设置正确的 cleanup 函数。

```js
function SearchResults({ query }) {
  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    // a stale flag
    let ignore = false

    fetchResults(query, page).then((json) => {
      // Apply the results only when it's not expired
      if (!ignore) {
        setResults(json)
      }
    })

    // cleanup function
    return () => {
      // re-rendering means current fetch is expired
      ignore = true
    }
  }, [query, page])
}
```

在这个模式（pattern）中，当`query`改变导致`<SearchResults />`被重新渲染时，Effect 的 cleanup 函数标记其请求已经**过期**（`ignore = true`）,
这样，当客户端收到响应时，便不会采用该过期的响应。

这种模式运用**闭包**（`let ignore`）对**异步**代码（`then()`）进行了分支。当然，它只是**丢弃**了过期的数据，并不能阻止**发送请求**。

## Vue 处理竞态问题

在《Vue.js 设计与实现》的 _4.11 过期的副作用_ 中，以`watch` API 为例讲述了 Vue 内部对竞态问题的处理。

在下面的片段中，短时间内多次操作`obj`也会发起多次 data fetching，产生竞态问题。

```js
let finalData

watch(obj, async () => {
  // 发送并等待网络请求
  const res = await fetch('/path/to/request')
  // 将请求结果赋值给 data
  finalData = res
})
```

Vue 3 为这种情况专门提供了一个类似于 cleanup 函数的`onInvalidate`，它是`watch`回调的第三个可选参数，是一个用来**注册回调函数**的函数。

`onInvalidate`的原理是：在`watch`内部每次检测到变更后，在副作用函数执行**之前**，会先调用通过`onInvalidate`注册的回调函数。

很容易想到，这和上面 React Effects 的 cleanup 函数原理几乎一模一样。

```js
watch(obj, async (newValue, oldValue, onInvalidate) => {
  let expired = false

  // 副作用重新执行之前，执行该回调
  onInvalidate(() => {
    // 闭包
    expired = true
  })

  const res = await fetch('/path/to/request')
  //
  if (!expired) {
    finalData = res
  }
})
```

两者的解决方法几乎**一模一样**，区别只在于 Vue 注册 cleanup 函数的 API 形式较为特殊，是传递给`watch`的回调函数的一个类似于 hook 的可选参数,
比起 React 更加的**集成**，但都应用了**闭包**的思维。
