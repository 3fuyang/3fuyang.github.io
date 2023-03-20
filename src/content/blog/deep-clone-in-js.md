---
title: JavaScript 实现深拷贝（cloneDeep）
date: 2022-09-03T12:48:00.000+08:00
description: 实现 JS 变量的深拷贝，相比于网上普遍的程序，额外包含了对 Promise 对象的克隆。
lang: zh
duration: 10min
---

# JavaScript 实现深拷贝（cloneDeep）

JavaScript 只有两种不同的数据类型：**原始值**（primitive value）和**引用值**（reference value）。

**深拷贝**（Deep Clone）就是对于引用值，要复制**内存**中对象的**结构**，而不是单纯复制其引用。

为了实现深拷贝，要根据目标对象的**类型**对其进行不同的操作，当涉及到集合引用类型`Array`、`Set`、`Map`时，更需要**递归**地进行复制。

## 使用 JSON 序列化

在实现上述思路之前，先简单看一个普遍流传的、使用 JSON 序列与解析的写法：

```js
function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj))
}
```

该解答借助`json`这一**中间**数据序列化格式，根据一种不同格式的文件创建变量式，当然也会**重新分配内存**。

但根据 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify),
`static JSON.prototype.stringify()`这个 API 会**忽略**源中的许多字段：

- `undefined`, `Function`, `Symbol` 值将被忽略或转换成`null`。
- 数值`Infinity`和`NaN`都被视作`null`。
- **符号属性**（symbol-keyed properties）将被忽略，如`[[Symbol.Iterator]]`、`[[Symbol.toPrimitive]]`等。
- Date 对象转换为字符串。
- 只访问可枚举的属性，这意味着`Map`、`Set`等集合类型将变为`{}`...

由此见得，JSON 序列化将会丢失和更改许多字段，远不能实现满足需求的深拷贝。

## 根据源的类型处理

> 根据 JavaScript 结构化克隆方法`structuredClone()`的描述，我们不考虑对`Function`和`Error`这两种类型的拷贝。

### 原始值

JavaScript 中有 **6** 种原始值类型：`number`, `string`, `boolean`, `undefined`, `null`, `symbol`。

对于原始值，我们可以**直接返回**，但要注意判断类型的方式。`typeof null`的结果为`object`，需用`obj === null`单独处理，而其他 5 种类型可直接用`typeof`判断。

```js
function cloneDeep(obj) {
  // Notice: tyeof null === 'object'
  const primitiveTypes = ['string', 'number', 'boolean', 'undefined', 'symbol']
  // null
  if (obj === null) {
    return null
  }
  // other primitive types
  else if (primitiveTypes.includes(typeof obj)) {
    return obj
  }
  // ...
}
```

### 基本引用类型

根据《JS 高级程序设计》，JavaScript 中**基本引用类型**主要为`Date`和`RegExp`，它们可以直接作为参数传递给用`new`调用的构造函数,
返回的就是一个全新的变量。

> 根据`new`的原理(第一步便是创建对象，**分配内存**)，用`new`调用的构造函数**一定**会返回**全新**的对象。

另外，我们如何判断引用值的类型呢？

首先，可以借助**原型链**，用`Object.prototype.toString.call()`操作符判断对象是否为某个引用类型的实例，这种方式很简洁，但由于开发者是可以对**内置引用类型**进行**拓展**的,
所以这种判断**并不准确**。

`Object.prototype.toString()`是所有对象上都可以访问的方法，它在一些类型上根据需要被**覆盖**，而未覆盖的、`Object.prototype`上的该方法,
以**字符串**返回对象的**类型**：`object [Object]`。

我们可以通过`Function.prototype.call`或者`Function.prototype.apply`在对象上调用的该方法的原本实现：

```js
// object [RegExp]
Object.prototype.toString.call(/foo/)
```

用它对`Date`和`RegExp`进行判断：

```js
function cloneDeep(obj) {
  // 接上
  // RegExp
  else if (/RegExp/.test(Object.prototype.toString.call(obj))) {
    return new RegExp(obj)
  }
  // Date
  else if (/Date/.test(Object.prototype.toString.call(obj))) {
    // Date() returns string representation, new Date() returns a Date object
    return new Date(obj)
  }
  // ...
}
```

### 集合引用类型

**集合引用类型**主要有`Object`, `Array`, `Map`, `Set`, `WeakMap`, `WeakSet`共**6**种。

其中，`WeakMap`和`WeakSet`的键都是**不可迭代**的，所以我们也**不考虑**这两种类型的拷贝。

> 根据《JS 高级程序设计》，WeakMap 之所以设计为不可迭代，是由于弱映射中的键/值对**随时可能被销毁**，没必要提供迭代其键/值对的能力。

接下来，考察`Array`, `Map`和`Set`，它们都是实现了**迭代器接口**的类型，可直接迭代其每个元素(或键值对)，**递归地拷贝**，最后将迭代结果交由构造函数即可。

```js
function cloneDeep(obj) {
  // 接上
  // Array
  else if (Array.isArray(obj)) {
    return obj.map((item) => cloneDeep(item))
  }
  // Set
  else if (obj Object.prototype.toString.call() Set) {
    const arr = []

    obj.forEach((val) => {
      arr.push(cloneDeep(val))
    })

    return new Set(arr)
  }
  // Map
  else if (obj Object.prototype.toString.call() Map) {
    const arr = []

    obj.forEach((val, key) => {
      arr.push([key, cloneDeep(val)])
    })

    return new Map(arr)
  }
  // ...
}
```

最后，对于`Object`，我们使用`for ... in`迭代其所有**可迭代**的属性，同样对其进行**递归拷贝**。

```js
function cloneDeep(obj) {
  // 接上
  // Object
  else {
    const result = {}

    for (const prop in obj) {
      result[prop] = cloneDeep(obj[prop])
    }

    return result
  }
}
```

至此，一个深拷贝函数基本成型。

### 循环引用

JavaScript 的对象字段赋值非常自由，所以**循环引用**这样的情形也有可能出现：

```js
const foo = {
  bar: 0,
}

foo.baz = foo
```

很显然，我们的递归无法处理这样的情形，将进入死循环，最终报错**栈溢出**。

所以，需要对`Object`类型的值进行**哈希缓存**，这样，当拷贝面对循环引用时，将获得一个**全新**的引用，避免进入死循环。

由于是记录**对象**且无需进行迭代，选用最佳实践`WeakMap`作为记录结构。

```js
// add new parameter memo for recursion
function cloneDeep (obj, memo = null) {
  memo || (memo = new WeakMap())

  // ...
  // Array
  else if (Array.isArray(obj)) {
    return obj.map((item) => cloneDeep(item, memo))
  }
  // Set
  else if (/Set/.test(Object.prototype.toString.call(obj))) {
    const arr = []

    obj.forEach((val) => {
      arr.push(cloneDeep(val, memo))
    })

    return new Set(arr)
  }
  // Map
  else if (/Map/.test(Object.prototype.toString.call(obj))) {
    const arr = []

    obj.forEach((val, key) => {
      arr.push([key, cloneDeep(val, memo)])
    })

    return new Map(arr)
  }
  // Object
  else {
    if (memo.has(obj)) {
      // prevent circular referrence
      return memo.get(obj)
    } else {
      const result = {}

      memo.set(obj, result)

      for (const prop in obj) {
        result[prop] = cloneDeep(obj[prop], memo)
      }

      return result
    }
  }
}
```

将上面的代码合并，便得到相对完整的一个深拷贝函数，但它无法处理`Function`, `Error`, `WeakMap`, `WeakSet`以及`Object`中的不可枚举的属性。

#### 对 Promise 的深拷贝

在看《JS 高级程序设计》时，发现`static Promise.prototype.race()`这个方法返回的是最先解决的 Promise 对象的**镜像**，意即一个**新 promise**,
所以可以专门对 Promise 对象进行深拷贝：

```js
function cloneDeep(obj) {
  // ...
  // Promise
  else if (/Promise/.test(Object.prototype.toString.call(obj)) {
    return Promise.race([obj])
  }
}
```
