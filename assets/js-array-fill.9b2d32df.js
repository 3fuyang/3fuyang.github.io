import{a as e,j as a,F as r}from"./index.afb7b814.js";const i="JS \u4E2D\u7684 Array.fill()",t="2min",h="zh",o="2022-08-31T21:26:00.000+00:00",d="/notes/js-array-fill";function s(l){const n=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span"},l.components);return a(r,{children:[e(n.nav,{className:"toc",children:e(n.ol,{className:"toc-level toc-level-1",children:e(n.li,{className:"toc-item toc-item-h1",children:e(n.a,{className:"toc-link toc-link-h1",href:"#js-\u4E2D\u7684-arrayfill",children:"JS \u4E2D\u7684 Array.fill()"})})})}),`
`,e(n.h1,{id:"js-\u4E2D\u7684-arrayfill",children:"JS \u4E2D\u7684 Array.fill()"}),`
`,a(n.p,{children:["\u7528\u4E8E\u586B\u5145\u6570\u7EC4\u7684",e(n.code,{children:"Array.prototype.fill()"}),"\u662F\u4E00\u4E2A",e(n.strong,{children:"\u5C31\u5730(in-place)\u65B9\u6CD5"}),"\uFF0C\u4F1A\u6539\u53D8\u539F\u6765\u7684\u6570\u7EC4\uFF0C\u4F46\u5B83\u540C\u65F6\u53C8\u8FD4\u56DE\u539F\u6570\u7EC4\u7684",e(n.strong,{children:"\u5F15\u7528"}),`,
\u8FD9\u5BB9\u6613\u5BFC\u81F4\u7528\u6237`,e(n.strong,{children:"\u8BEF\u4EE5\u4E3A"}),"\u5B83\u662F\u4E00\u4E2A",e(n.strong,{children:"\u7EAF\u51FD\u6570"}),"\u3002"]}),`
`,e(n.pre,{children:a(n.code,{className:"hljs language-ts",children:[e(n.span,{className:"hljs-comment",children:"// [undefined, undefined, undefined]"}),`
`,e(n.span,{className:"hljs-keyword",children:"const"})," arr1 = ",e(n.span,{className:"hljs-keyword",children:"new"})," ",e(n.span,{className:"hljs-title class_",children:"Array"}),"(",e(n.span,{className:"hljs-number",children:"3"}),`)

`,e(n.span,{className:"hljs-comment",children:"// [0, 0, 0]"}),`
`,e(n.span,{className:"hljs-keyword",children:"const"})," arr2 = arr1.",e(n.span,{className:"hljs-title function_",children:"fill"}),"(",e(n.span,{className:"hljs-number",children:"0"}),`)

`,e(n.span,{className:"hljs-comment",children:"// [0, 0, 1]"}),`
arr2[`,e(n.span,{className:"hljs-number",children:"2"}),"] = ",e(n.span,{className:"hljs-number",children:"1"}),`

`,e(n.span,{className:"hljs-comment",children:"// [0, 0, 1]"}),`
`,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),`(arr1)
`]})})]})}function m(l={}){const{wrapper:n}=l.components||{};return n?e(n,Object.assign({},l,{children:e(s,l)})):s(l)}export{o as date,m as default,t as duration,h as lang,d as path,i as title};
