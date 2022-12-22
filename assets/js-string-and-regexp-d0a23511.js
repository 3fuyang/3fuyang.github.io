import{j as e}from"./jsx-runtime-f0839969.js";const o="JS 中关于正则表达式的字符串操作",x="2022-09-01T17:31:00.000+00:00",c="zh",l="4min",p="/notes/js-string-and-regexp";function t(r){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",strong:"strong",ul:"ul",code:"code",pre:"pre",span:"span"},r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsx(s.li,{className:"toc-item toc-item-h1",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#js-中关于正则表达式的字符串操作",children:"JS 中关于正则表达式的字符串操作"})})})}),`
`,e.exports.jsx(s.h1,{id:"js-中关于正则表达式的字符串操作",children:"JS 中关于正则表达式的字符串操作"}),`
`,e.exports.jsxs(s.p,{children:["正则表达式是",e.exports.jsx(s.strong,{children:"专攻"}),"字符串操作的工具，JavaScript 用于正则操作的方法主要有如下 6 个："]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"String.prototype.search"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"String.prototype.split"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"String.prototype.match"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"String.prototype.replace"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"RegExp.prototype.test"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"RegExp.prototype.exec"})}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["其中",e.exports.jsx(s.code,{children:"exec()"}),"的返回值较为复杂："]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["如果匹配失败，",e.exports.jsx(s.code,{children:"exec()"}),"返回",e.exports.jsx(s.code,{children:"null"}),"，并将正则表达式对象的",e.exports.jsx(s.code,{children:"lastIndex"}),"重置为 0。"]}),`
`,e.exports.jsxs(s.li,{children:["如果匹配成功，",e.exports.jsx(s.code,{children:"exec()"}),"返回一个",e.exports.jsx(s.strong,{children:"数组"}),"，并更新正则表达式对象的",e.exports.jsx(s.code,{children:"lastIndex"}),"属性。"]}),`
`]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-ts",children:[e.exports.jsx(s.span,{className:"hljs-comment",children:"// ['匹配成功的文本', '捕获项1', '捕获项2', ... , '捕获项n']"}),`
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," result = regx.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"exec"}),`(str)

result.`,e.exports.jsx(s.span,{className:"hljs-property",children:"index"})," ",e.exports.jsx(s.span,{className:"hljs-comment",children:"// 匹配项在原始字符串中的 0-based 索引"}),`
result.`,e.exports.jsx(s.span,{className:"hljs-property",children:"input"})," ",e.exports.jsx(s.span,{className:"hljs-comment",children:"// 匹配的原始字符串"}),`
result.`,e.exports.jsx(s.span,{className:"hljs-property",children:"groups"})," ",e.exports.jsx(s.span,{className:"hljs-comment",children:"// 命名捕获组对象(key 是名称,val 是捕获组)"}),`
`]})}),`
`,e.exports.jsxs(s.p,{children:["根据 ",e.exports.jsx(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec",children:"MDN"}),`,
`,e.exports.jsx(s.code,{children:"exec()"}),"可用来对单个字符串中的",e.exports.jsx(s.strong,{children:"多次匹配结果"}),"进行",e.exports.jsx(s.strong,{children:"逐条"}),"的遍历(包括捕获到的匹配)，它是正则表达式的",e.exports.jsx(s.strong,{children:"原始方法"}),"，许多其他正则表达式 API 会在",e.exports.jsx(s.strong,{children:"内部"}),"调用",e.exports.jsx(s.code,{children:"exec()"}),"。"]}),`
`,e.exports.jsxs(s.p,{children:["虽然",e.exports.jsx(s.code,{children:"exec()"}),"功能很强大，但不能清楚地表示",e.exports.jsx(s.strong,{children:"调用的目的"}),"，所以 MDN 的建议是："]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["判断",e.exports.jsx(s.strong,{children:"是否匹配"}),"：",e.exports.jsx(s.code,{children:"RegExp.prototype.test()"})]}),`
`,e.exports.jsxs(s.li,{children:["找出所有匹配的字符串，而",e.exports.jsx(s.strong,{children:"不关心捕获组"}),"：",e.exports.jsx(s.code,{children:"String.prototype.match()"})]}),`
`,e.exports.jsxs(s.li,{children:["查找在字符串中匹配的",e.exports.jsx(s.strong,{children:"索引"}),"：",e.exports.jsx(s.code,{children:"String.prototype.search()"})]}),`
`]})]})}function i(r={}){const{wrapper:s}=r.components||{};return s?e.exports.jsx(s,Object.assign({},r,{children:e.exports.jsx(t,r)})):t(r)}export{x as date,i as default,l as duration,c as lang,p as path,o as title};
