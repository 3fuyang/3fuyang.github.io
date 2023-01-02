import{j as e}from"./jsx-runtime-f0839969.js";const i="Promise/A+ 规范",c="2022-10-03T20:56:00.000+08:00",l="翻译了 Promise/A+ Specification。",t="zh",d="4min",p="/blog/promise-a-plus",o=function({children:s}){return e.exports.jsx("article",{className:"prose",children:s})};function n(r){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",p:"p",ul:"ul",h2:"h2",code:"code",strong:"strong",h3:"h3",pre:"pre",span:"span"},r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#promisea-规范",children:"Promise/A+ 规范"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#1-terminology",children:"1. Terminology"})}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#2-requirements",children:"2. Requirements"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#21-promise-states",children:"2.1 Promise States"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#22-the-then-method",children:"2.2 The then Method"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#23-the-promise-resolution-procedure",children:"2.3 The Promise Resolution Procedure"})})]})]})]})]})})}),`
`,e.exports.jsx(s.h1,{id:"promisea-规范",children:"Promise/A+ 规范"}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"I reprint this article in Chinese, just like Prettier."}),`
`,e.exports.jsx(s.p,{children:"Reference:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.a,{href:"https://promisesaplus.com/",children:"Promises/A+"})}),`
`]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"1-terminology",children:"1. Terminology"}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:['"promise" 是一个对象或者函数，其',e.exports.jsx(s.code,{children:"then"}),"方法的实现与该规范一致。"]}),`
`,e.exports.jsxs(s.li,{children:['"thenable"是一个定义了',e.exports.jsx(s.code,{children:"then"}),"方法的对象或者函数。"]}),`
`]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"注意"}),"：在 ECMAScript 规范中，只要一个对象",e.exports.jsx(s.strong,{children:"定义"}),"了",e.exports.jsx(s.code,{children:"then"}),"方法，",e.exports.jsx(s.strong,{children:"无论实现如何"}),"，都被认为实现了 Thenable 接口。"]}),`
`]}),`
`,e.exports.jsxs(s.ol,{start:"3",children:[`
`,e.exports.jsxs(s.li,{children:['"value"是任意 JavaScript 值（包含',e.exports.jsx(s.code,{children:"undefined"}),"，",e.exports.jsx(s.code,{children:"thenable"}),"或",e.exports.jsx(s.code,{children:"promise"}),"）。"]}),`
`,e.exports.jsxs(s.li,{children:['"exception"是一个由',e.exports.jsx(s.code,{children:"throw"}),"语句抛出的值。"]}),`
`,e.exports.jsx(s.li,{children:'"reason"是一个解释 promise 变为 rejected 原因的值。'}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"2-requirements",children:"2. Requirements"}),`
`,e.exports.jsx(s.h3,{id:"21-promise-states",children:"2.1 Promise States"}),`
`,e.exports.jsx(s.p,{children:"一个 Promise 必须是以下一种状态：pending，fullfied 和 rejected."}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["当处于 pending，promise ：",`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"可能转变为 fullfied 或 rejected 状态。"}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["当处于 fullfied，promise ：",`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"不能再转变为其他状态。"}),`
`,e.exports.jsx(s.li,{children:"必须有一个结果值，这个值不可改变。"}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["当处于 rejected，promise：",`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"不能再转变为其他状态。"}),`
`,e.exports.jsx(s.li,{children:"必须有一个原因，这个原因不可改变。"}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:['这里的"不可改变"意为 immutable，即 JavaScript 全等',e.exports.jsx(s.code,{children:"==="}),"，但不要求深不可变（deep immutability）。"]}),`
`,e.exports.jsxs(s.h3,{id:"22-the-then-method",children:["2.2 The ",e.exports.jsx(s.code,{children:"then"})," Method"]}),`
`,e.exports.jsxs(s.p,{children:["一个 promise 必须提供一个",e.exports.jsx(s.code,{children:"then"}),"方法，以访问其当前或最终的结果值（value）或原因（reason）。"]}),`
`,e.exports.jsxs(s.p,{children:["Promise 的",e.exports.jsx(s.code,{children:"then"}),"方法接收两个参数："]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-js",children:["promise.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"then"}),`(onFulfied, onRejected)
`]})}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"onFulfilled"}),"和",e.exports.jsx(s.code,{children:"onRejected"}),"都是",e.exports.jsx(s.strong,{children:"可选"}),"参数："]}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"onFulfilled"}),"不是函数，其应该被忽略。"]}),`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"onRejected"}),"不是函数，其应该被忽略。"]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["如果",e.exports.jsx(s.code,{children:"onFulfilled"}),"是函数："]}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["它必须在",e.exports.jsx(s.code,{children:"promise"}),"变为 fullfied 后被调用，并以",e.exports.jsx(s.code,{children:"promise"}),"的结果值（value）作为第一个参数。"]}),`
`,e.exports.jsxs(s.li,{children:["在",e.exports.jsx(s.code,{children:"promise"}),"变为 fullfied 之前不能被调用。"]}),`
`,e.exports.jsx(s.li,{children:"最多只被调用一次。"}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["如果",e.exports.jsx(s.code,{children:"onRejected"}),"是函数："]}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["它必须在",e.exports.jsx(s.code,{children:"promise"}),"变为 rejected 后被调用，并以",e.exports.jsx(s.code,{children:"promise"}),"的理由（reason）作为第一个参数。"]}),`
`,e.exports.jsxs(s.li,{children:["在",e.exports.jsx(s.code,{children:"promise"}),"变为 rejected 之前不能被调用。"]}),`
`,e.exports.jsx(s.li,{children:"最多只被调用一次。"}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"onFulfilled"}),"和",e.exports.jsx(s.code,{children:"onRejected"}),"在执行上下文栈只包含",e.exports.jsx(s.strong,{children:"平台代码"}),"（platform code）之前不可被调用。"]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"平台代码"}),"（platform code）是指引擎、环境和 promise 实现代码。实际上，该要求保证",e.exports.jsx(s.code,{children:"onFulfilled"}),"和",e.exports.jsx(s.code,{children:"onRejected"}),"在调用",e.exports.jsx(s.code,{children:"then"}),"后被",e.exports.jsx(s.strong,{children:"异步"}),"执行。这可以通过",e.exports.jsx(s.strong,{children:"宏任务"}),"机制实现（比如",e.exports.jsx(s.code,{children:"setTimeout"}),"或",e.exports.jsx(s.code,{children:"setImmediate"}),"），或者",e.exports.jsx(s.strong,{children:"微任务"}),"机制（比如",e.exports.jsx(s.code,{children:"MutationObserver"}),"或",e.exports.jsx(s.code,{children:"process.nextTick"}),"）。"]}),`
`]}),`
`,e.exports.jsxs(s.ol,{start:"5",children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"onFulfilled"}),"和",e.exports.jsx(s.code,{children:"onRejected"}),"必须作为函数调用（没有",e.exports.jsx(s.code,{children:"this"}),"对象）。"]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["在同一个 promise 上，",e.exports.jsx(s.code,{children:"then"}),"可能被多次调用。"]}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["当",e.exports.jsx(s.code,{children:"promise"}),"是 fullfied，所有相关的",e.exports.jsx(s.code,{children:"onFulfilled"}),"必须按照其",e.exports.jsx(s.code,{children:"then"}),"的调用顺序执行。"]}),`
`,e.exports.jsxs(s.li,{children:["当",e.exports.jsx(s.code,{children:"promise"}),"是 rejected，所有相关的",e.exports.jsx(s.code,{children:"onRejected"}),"必须按照其",e.exports.jsx(s.code,{children:"then"}),"的调用顺序执行。"]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"then"}),"必须返回一个 promise。"]}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-js",children:["promise2 = promise1.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"then"}),`(onFulfied, onRejected)
`]})}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["如果",e.exports.jsx(s.code,{children:"onFulfilled"}),"或",e.exports.jsx(s.code,{children:"onRejected"}),e.exports.jsx(s.strong,{children:"返回"}),"了一个值",e.exports.jsx(s.code,{children:"x"}),"，",e.exports.jsx(s.code,{children:"promise2"}),"执行 promise pesolution procedure ",e.exports.jsx(s.code,{children:"[[Resolve]](promise2, x)"}),"。"]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["如果",e.exports.jsx(s.code,{children:"onFulfilled"}),"或",e.exports.jsx(s.code,{children:"onRejected"}),"抛出一个异常",e.exports.jsx(s.code,{children:"e"}),"，",e.exports.jsx(s.code,{children:"promise2"}),"转变为 rejected，其原因为",e.exports.jsx(s.code,{children:"e"}),"。"]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["如果",e.exports.jsx(s.code,{children:"onFulfilled"}),"不是函数，且",e.exports.jsx(s.code,{children:"promise1"}),"转为了 fullfied，则",e.exports.jsx(s.code,{children:"promise2"}),"转为 fullfied，其结果值（value）与",e.exports.jsx(s.code,{children:"promise1"}),"一样。"]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["如果",e.exports.jsx(s.code,{children:"onRejected"}),"不是函数，且",e.exports.jsx(s.code,{children:"promise1"}),"转为了 rejected，则",e.exports.jsx(s.code,{children:"promise2"}),"转为 rejected，其原因（reason）与",e.exports.jsx(s.code,{children:"promise1"}),"一样。"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:["注意： 根据具体实现的不同，",e.exports.jsx(s.code,{children:"then"}),"方法返回的 promise 可能与原 promise 完全相等。"]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"23-the-promise-resolution-procedure",children:"2.3 The Promise Resolution Procedure"}),`
`,e.exports.jsxs(s.p,{children:["Promise 解析流程（promise pesolution procedure）是一个",e.exports.jsx(s.strong,{children:"抽象操作"}),"，它接收一个 promise 和值（value）作为输入，记为",e.exports.jsx(s.code,{children:"[[Resolve]](promise, x)"}),"。如果",e.exports.jsx(s.code,{children:"x"}),"是一个 thenable，那么在",e.exports.jsx(s.code,{children:"x"}),"与 promise 具有类似行为的估量下，",e.exports.jsx(s.code,{children:"promise"}),"将采用",e.exports.jsx(s.code,{children:"x"}),"的状态。否则，",e.exports.jsx(s.code,{children:"promise"}),"将以",e.exports.jsx(s.code,{children:"x"}),"为结果，进入 fulllfied。"]}),`
`,e.exports.jsxs(s.p,{children:["对于 thenable 的这种处理，使得 promise 的实现可以互操作（interoperate），即实现了满足 Promise/A+ 规范的",e.exports.jsx(s.code,{children:"then"}),"方法的对象就可以视作 promise。"]}),`
`,e.exports.jsxs(s.p,{children:["运行",e.exports.jsx(s.code,{children:"[[Resolve]](promise, x)"}),"，会执行以下步骤："]}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"promise"}),"和",e.exports.jsx(s.code,{children:"x"}),"指向同一个对象，则以",e.exports.jsx(s.code,{children:"TypeError"}),"作为原因 reject 该 promise。"]}),`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"x"}),"是一个 promise，采用（adopt）其状态：",`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"x"}),"处于 pending，",e.exports.jsx(s.code,{children:"promise"}),"保持 pending 直到",e.exports.jsx(s.code,{children:"x"}),"状态改变。"]}),`
`,e.exports.jsxs(s.li,{children:["当",e.exports.jsx(s.code,{children:"x"}),"转为 fullfied，使",e.exports.jsx(s.code,{children:"promise"}),"以相同的值转为 fullfied。"]}),`
`,e.exports.jsxs(s.li,{children:["当",e.exports.jsx(s.code,{children:"x"}),"转为 rejected，使",e.exports.jsx(s.code,{children:"promise"}),"以相同的原因转为 rejected。"]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["否则，如果",e.exports.jsx(s.code,{children:"x"}),"是一个对象或函数：",`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["声明",e.exports.jsx(s.code,{children:"then = x.then"}),"。"]}),`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"x.then"}),"导致抛出一个异常",e.exports.jsx(s.code,{children:"e"}),"，将",e.exports.jsx(s.code,{children:"e"}),"作为原因 reject ",e.exports.jsx(s.code,{children:"promise"}),"。"]}),`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"then"}),"是一个函数，将",e.exports.jsx(s.code,{children:"x"}),"作为其",e.exports.jsx(s.code,{children:"this"}),"对象，传入第一个参数",e.exports.jsx(s.code,{children:"resolvePromise"}),"和第二个参数",e.exports.jsx(s.code,{children:"rejectPromise"}),"，调用",e.exports.jsx(s.code,{children:"then"}),"：",`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["当",e.exports.jsx(s.code,{children:"resolvePromise"}),"以",e.exports.jsx(s.code,{children:"y"}),"值调用时，运行",e.exports.jsx(s.code,{children:"[[Resolve]](promise, y)"}),"。"]}),`
`,e.exports.jsxs(s.li,{children:["当",e.exports.jsx(s.code,{children:"rejectPromise"}),"以原因",e.exports.jsx(s.code,{children:"r"}),"调用时，用",e.exports.jsx(s.code,{children:"r"})," reject promise。"]}),`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"rejectPromise"}),"和",e.exports.jsx(s.code,{children:"resolvePromise"}),"都被调用，或者一者被多次调用，只取",e.exports.jsx(s.strong,{children:"第一次调用"}),"的结果，并忽视后续调用。"]}),`
`,e.exports.jsxs(s.li,{children:["如果调用",e.exports.jsx(s.code,{children:"then"}),"抛出异常",e.exports.jsx(s.code,{children:"e"}),"：",`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"resolvePromise"}),"或",e.exports.jsx(s.code,{children:"rejectPromise"}),"已被调用，则忽视异常。"]}),`
`,e.exports.jsxs(s.li,{children:["否则，以",e.exports.jsx(s.code,{children:"e"}),"为原因 reject promise。"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"then"}),"不是函数，则以",e.exports.jsx(s.code,{children:"x"}),"为值将",e.exports.jsx(s.code,{children:"promise"}),"转为 fullfied。"]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"x"}),"不是函数或对象，则以",e.exports.jsx(s.code,{children:"x"}),"为值将",e.exports.jsx(s.code,{children:"promise"}),"转为 fullfied。（这里包括",e.exports.jsx(s.code,{children:"x === undefined"}),"，即 handler 没有返回值的情况）"]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["当上面这种实现遇到",e.exports.jsx(s.strong,{children:"循环引用"}),"的 thenable 对象时，将进入无限递归，",e.exports.jsx(s.strong,{children:"推荐但不要求"}),"对这种情况以",e.exports.jsx(s.code,{children:"TypeError"}),"为原因 reject promise。"]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"注意"}),"：规约中",e.exports.jsx(s.strong,{children:"并未"}),"提到 promise 本身的",e.exports.jsx(s.strong,{children:"状态迁移方法"}),"（即我们熟悉的 ECMAScript 中的",e.exports.jsx(s.code,{children:"resolve"}),"和",e.exports.jsx(s.code,{children:"reject"}),`）该如何实现，
在 ECMAScript 中，promise 构造函数中的`,e.exports.jsx(s.code,{children:"resolve"}),"也会对 thenable 类型的结果值进行",e.exports.jsx(s.strong,{children:"解包"}),`（unwrap）,
所以可以大致将上面的`,e.exports.jsx(s.code,{children:"[[Resolve]](promise, x)"}),"视作 promise 的",e.exports.jsx(s.code,{children:"resolve"}),"以及",e.exports.jsx(s.code,{children:"reject"}),"方法",e.exports.jsx(s.strong,{children:"内部"}),"需要实现的逻辑。"]}),`
`]})]})}function h(r={}){return e.exports.jsx(o,Object.assign({},r,{children:e.exports.jsx(n,r)}))}export{c as date,h as default,l as description,d as duration,t as lang,p as path,i as title};
