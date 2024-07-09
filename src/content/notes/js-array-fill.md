---
title: JS 中的 Array.fill()
duration: 2min
description: Array.fill() 对于设置了 length、未设置元素的数组的作用。
lang: zh
date: 2022-08-31T21:26:00.000+08:00
---

用于填充数组的`Array.prototype.fill()`是一个**就地(in-place)方法**，会改变原来的数组，但它同时又返回原数组的**引用**,
这容易导致用户**误以为**它是一个**纯函数**。

```ts
// [undefined, undefined, undefined]
const arr1 = new Array(3)

// [0, 0, 0]
const arr2 = arr1.fill(0)

// [0, 0, 1]
arr2[2] = 1

// [0, 0, 1]
console.log(arr1)
```
