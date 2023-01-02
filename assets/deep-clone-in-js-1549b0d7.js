import{j as s}from"./jsx-runtime-f0839969.js";const t="JavaScript 实现深拷贝（cloneDeep）",o="2022-09-03T12:48:00.000+08:00",a="实现 JS 变量的深拷贝，相比于网上普遍的程序，额外包含了对 Promise 对象的克隆。",p="zh",x="10min",j="/blog/deep-clone-in-js",n=function({children:e}){return s.exports.jsx("article",{className:"prose",children:e})};function l(r){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",span:"span",ul:"ul",blockquote:"blockquote",h3:"h3",h4:"h4"},r.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsxs(e.li,{className:"toc-item toc-item-h1",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#javascript-实现深拷贝clonedeep",children:"JavaScript 实现深拷贝（cloneDeep）"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-2",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#使用-json-序列化",children:"使用 JSON 序列化"})}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#根据源的类型处理",children:"根据源的类型处理"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#原始值",children:"原始值"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#基本引用类型",children:"基本引用类型"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#集合引用类型",children:"集合引用类型"})}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h3",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#循环引用",children:"循环引用"}),s.exports.jsx(e.ol,{className:"toc-level toc-level-4",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#对-promise-的深拷贝",children:"对 Promise 的深拷贝"})})})]})]})]})]})]})})}),`
`,s.exports.jsx(e.h1,{id:"javascript-实现深拷贝clonedeep",children:"JavaScript 实现深拷贝（cloneDeep）"}),`
`,s.exports.jsxs(e.p,{children:["JavaScript 只有两种不同的数据类型：",s.exports.jsx(e.strong,{children:"原始值"}),"（primitive value）和",s.exports.jsx(e.strong,{children:"引用值"}),"（reference value）。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"深拷贝"}),"（Deep Clone）就是对于引用值，要复制",s.exports.jsx(e.strong,{children:"内存"}),"中对象的",s.exports.jsx(e.strong,{children:"结构"}),"，而不是单纯复制其引用。"]}),`
`,s.exports.jsxs(e.p,{children:["为了实现深拷贝，要根据目标对象的",s.exports.jsx(e.strong,{children:"类型"}),"对其进行不同的操作，当涉及到集合引用类型",s.exports.jsx(e.code,{children:"Array"}),"、",s.exports.jsx(e.code,{children:"Set"}),"、",s.exports.jsx(e.code,{children:"Map"}),"时，更需要",s.exports.jsx(e.strong,{children:"递归"}),"地进行复制。"]}),`
`,s.exports.jsx(e.h2,{id:"使用-json-序列化",children:"使用 JSON 序列化"}),`
`,s.exports.jsx(e.p,{children:"在实现上述思路之前，先简单看一个普遍流传的、使用 JSON 序列与解析的写法："}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"JSON"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"parse"}),"(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"JSON"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"stringify"}),`(obj))
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["该解答借助",s.exports.jsx(e.code,{children:"json"}),"这一",s.exports.jsx(e.strong,{children:"中间"}),"数据序列化格式，根据一种不同格式的文件创建变量式，当然也会",s.exports.jsx(e.strong,{children:"重新分配内存"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["但根据 ",s.exports.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",children:"MDN"}),`,
`,s.exports.jsx(e.code,{children:"static JSON.prototype.stringify()"}),"这个 API 会",s.exports.jsx(e.strong,{children:"忽略"}),"源中的许多字段："]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"undefined"}),", ",s.exports.jsx(e.code,{children:"Function"}),", ",s.exports.jsx(e.code,{children:"Symbol"})," 值将被忽略或转换成",s.exports.jsx(e.code,{children:"null"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:["数值",s.exports.jsx(e.code,{children:"Infinity"}),"和",s.exports.jsx(e.code,{children:"NaN"}),"都被视作",s.exports.jsx(e.code,{children:"null"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"符号属性"}),"（symbol-keyed properties）将被忽略，如",s.exports.jsx(e.code,{children:"[[Symbol.Iterator]]"}),"、",s.exports.jsx(e.code,{children:"[[Symbol.toPrimitive]]"}),"等。"]}),`
`,s.exports.jsx(e.li,{children:"Date 对象转换为字符串。"}),`
`,s.exports.jsxs(e.li,{children:["只访问可枚举的属性，这意味着",s.exports.jsx(e.code,{children:"Map"}),"、",s.exports.jsx(e.code,{children:"Set"}),"等集合类型将变为",s.exports.jsx(e.code,{children:"{}"}),"..."]}),`
`]}),`
`,s.exports.jsx(e.p,{children:"由此见得，JSON 序列化将会丢失和更改许多字段，远不能实现满足需求的深拷贝。"}),`
`,s.exports.jsx(e.h2,{id:"根据源的类型处理",children:"根据源的类型处理"}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:["根据 JavaScript 结构化克隆方法",s.exports.jsx(e.code,{children:"structuredClone()"}),"的描述，我们不考虑对",s.exports.jsx(e.code,{children:"Function"}),"和",s.exports.jsx(e.code,{children:"Error"}),"这两种类型的拷贝。"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"原始值",children:"原始值"}),`
`,s.exports.jsxs(e.p,{children:["JavaScript 中有 ",s.exports.jsx(e.strong,{children:"6"})," 种原始值类型：",s.exports.jsx(e.code,{children:"number"}),", ",s.exports.jsx(e.code,{children:"string"}),", ",s.exports.jsx(e.code,{children:"boolean"}),", ",s.exports.jsx(e.code,{children:"undefined"}),", ",s.exports.jsx(e.code,{children:"null"}),", ",s.exports.jsx(e.code,{children:"symbol"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["对于原始值，我们可以",s.exports.jsx(e.strong,{children:"直接返回"}),"，但要注意判断类型的方式。",s.exports.jsx(e.code,{children:"typeof null"}),"的结果为",s.exports.jsx(e.code,{children:"object"}),"，需用",s.exports.jsx(e.code,{children:"obj === null"}),"单独处理，而其他 5 种类型可直接用",s.exports.jsx(e.code,{children:"typeof"}),"判断。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Notice: tyeof null === 'object'"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," primitiveTypes = [",s.exports.jsx(e.span,{className:"hljs-string",children:"'string'"}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:"'number'"}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:"'boolean'"}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:"'undefined'"}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:"'symbol'"}),`]
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// null"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (obj === ",s.exports.jsx(e.span,{className:"hljs-literal",children:"null"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"null"}),`
  }
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// other primitive types"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (primitiveTypes.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"includes"}),"(",s.exports.jsx(e.span,{className:"hljs-keyword",children:"typeof"}),` obj)) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` obj
  }
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
}
`]})}),`
`,s.exports.jsx(e.h3,{id:"基本引用类型",children:"基本引用类型"}),`
`,s.exports.jsxs(e.p,{children:["根据《JS 高级程序设计》，JavaScript 中",s.exports.jsx(e.strong,{children:"基本引用类型"}),"主要为",s.exports.jsx(e.code,{children:"Date"}),"和",s.exports.jsx(e.code,{children:"RegExp"}),"，它们可以直接作为参数传递给用",s.exports.jsx(e.code,{children:"new"}),`调用的构造函数,
返回的就是一个全新的变量。`]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:["根据",s.exports.jsx(e.code,{children:"new"}),"的原理(第一步便是创建对象，",s.exports.jsx(e.strong,{children:"分配内存"}),")，用",s.exports.jsx(e.code,{children:"new"}),"调用的构造函数",s.exports.jsx(e.strong,{children:"一定"}),"会返回",s.exports.jsx(e.strong,{children:"全新"}),"的对象。"]}),`
`]}),`
`,s.exports.jsx(e.p,{children:"另外，我们如何判断引用值的类型呢？"}),`
`,s.exports.jsxs(e.p,{children:["首先，可以借助",s.exports.jsx(e.strong,{children:"原型链"}),"，用",s.exports.jsx(e.code,{children:"Object.prototype.toString.call()"}),"操作符判断对象是否为某个引用类型的实例，这种方式很简洁，但由于开发者是可以对",s.exports.jsx(e.strong,{children:"内置引用类型"}),"进行",s.exports.jsx(e.strong,{children:"拓展"}),`的,
所以这种判断`,s.exports.jsx(e.strong,{children:"并不准确"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"Object.prototype.toString()"}),"是所有对象上都可以访问的方法，它在一些类型上根据需要被",s.exports.jsx(e.strong,{children:"覆盖"}),"，而未覆盖的、",s.exports.jsx(e.code,{children:"Object.prototype"}),`上的该方法,
以`,s.exports.jsx(e.strong,{children:"字符串"}),"返回对象的",s.exports.jsx(e.strong,{children:"类型"}),"：",s.exports.jsx(e.code,{children:"object [Object]"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["我们可以通过",s.exports.jsx(e.code,{children:"Function.prototype.call"}),"或者",s.exports.jsx(e.code,{children:"Function.prototype.apply"}),"在对象上调用的该方法的原本实现："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// object [RegExp]"}),`
`,s.exports.jsx(e.span,{className:"hljs-title class_",children:"Object"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:s.exports.jsx(e.span,{className:"hljs-keyword",children:"prototype"})}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"toString"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"call"}),"(",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/foo/"}),`)
`]})}),`
`,s.exports.jsxs(e.p,{children:["用它对",s.exports.jsx(e.code,{children:"Date"}),"和",s.exports.jsx(e.code,{children:"RegExp"}),"进行判断："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 接上"}),`
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// RegExp"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/RegExp/"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"test"}),"(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Object"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:s.exports.jsx(e.span,{className:"hljs-keyword",children:"prototype"})}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"toString"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"call"}),`(obj))) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"RegExp"}),`(obj)
  }
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Date"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/Date/"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"test"}),"(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Object"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:s.exports.jsx(e.span,{className:"hljs-keyword",children:"prototype"})}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"toString"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"call"}),`(obj))) {
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Date() returns string representation, new Date() returns a Date object"}),`
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Date"}),`(obj)
  }
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
}
`]})}),`
`,s.exports.jsx(e.h3,{id:"集合引用类型",children:"集合引用类型"}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"集合引用类型"}),"主要有",s.exports.jsx(e.code,{children:"Object"}),", ",s.exports.jsx(e.code,{children:"Array"}),", ",s.exports.jsx(e.code,{children:"Map"}),", ",s.exports.jsx(e.code,{children:"Set"}),", ",s.exports.jsx(e.code,{children:"WeakMap"}),", ",s.exports.jsx(e.code,{children:"WeakSet"}),"共",s.exports.jsx(e.strong,{children:"6"}),"种。"]}),`
`,s.exports.jsxs(e.p,{children:["其中，",s.exports.jsx(e.code,{children:"WeakMap"}),"和",s.exports.jsx(e.code,{children:"WeakSet"}),"的键都是",s.exports.jsx(e.strong,{children:"不可迭代"}),"的，所以我们也",s.exports.jsx(e.strong,{children:"不考虑"}),"这两种类型的拷贝。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:["根据《JS 高级程序设计》，WeakMap 之所以设计为不可迭代，是由于弱映射中的键/值对",s.exports.jsx(e.strong,{children:"随时可能被销毁"}),"，没必要提供迭代其键/值对的能力。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["接下来，考察",s.exports.jsx(e.code,{children:"Array"}),", ",s.exports.jsx(e.code,{children:"Map"}),"和",s.exports.jsx(e.code,{children:"Set"}),"，它们都是实现了",s.exports.jsx(e.strong,{children:"迭代器接口"}),"的类型，可直接迭代其每个元素(或键值对)，",s.exports.jsx(e.strong,{children:"递归地拷贝"}),"，最后将迭代结果交由构造函数即可。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 接上"}),`
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Array"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Array"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"isArray"}),`(obj)) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," obj.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"map"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"item"}),") =>"]})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(item))
  }
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Set"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (obj ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Object"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:s.exports.jsx(e.span,{className:"hljs-keyword",children:"prototype"})}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"toString"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"call"}),"() ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Set"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` arr = []

    obj.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"val"}),") =>"]}),` {
      arr.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),"(",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(val))
    })

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Set"}),`(arr)
  }
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Map"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (obj ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Object"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:s.exports.jsx(e.span,{className:"hljs-keyword",children:"prototype"})}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"toString"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"call"}),"() ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Map"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` arr = []

    obj.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"val, key"}),") =>"]}),` {
      arr.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),"([key, ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(val)])
    })

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Map"}),`(arr)
  }
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["最后，对于",s.exports.jsx(e.code,{children:"Object"}),"，我们使用",s.exports.jsx(e.code,{children:"for ... in"}),"迭代其所有",s.exports.jsx(e.strong,{children:"可迭代"}),"的属性，同样对其进行",s.exports.jsx(e.strong,{children:"递归拷贝"}),"。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 接上"}),`
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Object"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` result = {}

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," prop ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"in"}),` obj) {
      result[prop] = `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(obj[prop])
    }

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` result
  }
}
`]})}),`
`,s.exports.jsx(e.p,{children:"至此，一个深拷贝函数基本成型。"}),`
`,s.exports.jsx(e.h3,{id:"循环引用",children:"循环引用"}),`
`,s.exports.jsxs(e.p,{children:["JavaScript 的对象字段赋值非常自由，所以",s.exports.jsx(e.strong,{children:"循环引用"}),"这样的情形也有可能出现："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` foo = {
  `,s.exports.jsx(e.span,{className:"hljs-attr",children:"bar"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`
}

foo.`,s.exports.jsx(e.span,{className:"hljs-property",children:"baz"}),` = foo
`]})}),`
`,s.exports.jsxs(e.p,{children:["很显然，我们的递归无法处理这样的情形，将进入死循环，最终报错",s.exports.jsx(e.strong,{children:"栈溢出"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["所以，需要对",s.exports.jsx(e.code,{children:"Object"}),"类型的值进行",s.exports.jsx(e.strong,{children:"哈希缓存"}),"，这样，当拷贝面对循环引用时，将获得一个",s.exports.jsx(e.strong,{children:"全新"}),"的引用，避免进入死循环。"]}),`
`,s.exports.jsxs(e.p,{children:["由于是记录",s.exports.jsx(e.strong,{children:"对象"}),"且无需进行迭代，选用最佳实践",s.exports.jsx(e.code,{children:"WeakMap"}),"作为记录结构。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// add new parameter memo for recursion"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"})," (obj, memo = ",s.exports.jsx(e.span,{className:"hljs-literal",children:"null"}),`) {
  memo || (memo = `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"WeakMap"}),`())

  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Array"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Array"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"isArray"}),`(obj)) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," obj.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"map"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"item"}),") =>"]})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(item, memo))
  }
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Set"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/Set/"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"test"}),"(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Object"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:s.exports.jsx(e.span,{className:"hljs-keyword",children:"prototype"})}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"toString"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"call"}),`(obj))) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` arr = []

    obj.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"val"}),") =>"]}),` {
      arr.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),"(",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(val, memo))
    })

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Set"}),`(arr)
  }
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Map"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/Map/"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"test"}),"(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Object"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:s.exports.jsx(e.span,{className:"hljs-keyword",children:"prototype"})}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"toString"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"call"}),`(obj))) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` arr = []

    obj.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"val, key"}),") =>"]}),` {
      arr.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),"([key, ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(val, memo)])
    })

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Map"}),`(arr)
  }
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Object"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (memo.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"has"}),`(obj)) {
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// prevent circular referrence"}),`
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," memo.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"get"}),`(obj)
    } `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"}),` {
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` result = {}

      memo.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"set"}),`(obj, result)

      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," prop ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"in"}),` obj) {
        result[prop] = `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(obj[prop], memo)
      }

      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` result
    }
  }
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["将上面的代码合并，便得到相对完整的一个深拷贝函数，但它无法处理",s.exports.jsx(e.code,{children:"Function"}),", ",s.exports.jsx(e.code,{children:"Error"}),", ",s.exports.jsx(e.code,{children:"WeakMap"}),", ",s.exports.jsx(e.code,{children:"WeakSet"}),"以及",s.exports.jsx(e.code,{children:"Object"}),"中的不可枚举的属性。"]}),`
`,s.exports.jsx(e.h4,{id:"对-promise-的深拷贝",children:"对 Promise 的深拷贝"}),`
`,s.exports.jsxs(e.p,{children:["在看《JS 高级程序设计》时，发现",s.exports.jsx(e.code,{children:"static Promise.prototype.race()"}),"这个方法返回的是最先解决的 Promise 对象的",s.exports.jsx(e.strong,{children:"镜像"}),"，意即一个",s.exports.jsx(e.strong,{children:"新 promise"}),`,
所以可以专门对 Promise 对象进行深拷贝：`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Promise"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/Promise/"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"test"}),"(",s.exports.jsxs(e.span,{className:"hljs-params",children:[s.exports.jsx(e.span,{className:"hljs-built_in",children:"Object"}),".prototype.toString.call(obj)"]}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Promise"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"race"}),`([obj])
  }
}
`]})})]})}function i(r={}){return s.exports.jsx(n,Object.assign({},r,{children:s.exports.jsx(l,r)}))}export{o as date,i as default,a as description,x as duration,p as lang,j as path,t as title};
