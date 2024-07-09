---
title: JS 中关于正则表达式的字符串操作
date: 2022-09-01T17:31:00.000+08:00
description: JS 处理正则和字符串的几个方法。
lang: zh
duration: 4min
---

正则表达式是**专攻**字符串操作的工具，JavaScript 用于正则操作的方法主要有如下 6 个：

- `String.prototype.search`
- `String.prototype.split`
- `String.prototype.match`
- `String.prototype.replace`
- `RegExp.prototype.test`
- `RegExp.prototype.exec`

其中`exec()`的返回值较为复杂：

- 如果匹配失败，`exec()`返回`null`，并将正则表达式对象的`lastIndex`重置为 0。
- 如果匹配成功，`exec()`返回一个**数组**，并更新正则表达式对象的`lastIndex`属性。

```ts
// ['匹配成功的文本', '捕获项1', '捕获项2', ... , '捕获项n']
const result = regx.exec(str)

result.index // 匹配项在原始字符串中的 0-based 索引
result.input // 匹配的原始字符串
result.groups // 命名捕获组对象(key 是名称,val 是捕获组)
```

根据 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec),
`exec()`可用来对单个字符串中的**多次匹配结果**进行**逐条**的遍历(包括捕获到的匹配)，它是正则表达式的**原始方法**，许多其他正则表达式 API 会在**内部**调用`exec()`。

虽然`exec()`功能很强大，但不能清楚地表示**调用的目的**，所以 MDN 的建议是：

- 判断**是否匹配**：`RegExp.prototype.test()`
- 找出所有匹配的字符串，而**不关心捕获组**：`String.prototype.match()`
- 查找在字符串中匹配的**索引**：`String.prototype.search()`
