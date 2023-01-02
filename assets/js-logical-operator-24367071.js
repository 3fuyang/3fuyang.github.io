import{j as s}from"./jsx-runtime-f0839969.js";const l="JS 的 && 与 ||",c="2022-09-23T22:49:00.000+08:00",a="JS 逻辑运算符的短路特性。",x="zh",p="1min",i="/notes/js-logical-operator",r=function({children:e}){return s.exports.jsx("article",{className:"prose",children:e})};function t(n){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",pre:"pre",span:"span",blockquote:"blockquote",strong:"strong",em:"em"},n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h1",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#js-的--与-",children:"JS 的 && 与 ||"})})})}),`
`,s.exports.jsx(e.h1,{id:"js-的--与-",children:"JS 的 && 与 ||"}),`
`,s.exports.jsxs(e.p,{children:["...以前一直以为",s.exports.jsx(e.code,{children:"&&"}),"和",s.exports.jsx(e.code,{children:"||"}),"运算的结果是一个",s.exports.jsx(e.code,{children:"boolean"}),"，但今天实习的时候，看到项目里的这段代码："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-html",children:[s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"foo"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"v-for"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"form in formList"'})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:":key"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"..."'})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"v-validate"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"form.rules || {}"'}),">"]}),`
`]})}),`
`,s.exports.jsxs(e.p,{children:["自己还以为是个 bug，想改成",s.exports.jsx(e.code,{children:'v-validate="form.rules ? form.rules : {}"'}),"，但查了 ",s.exports.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR",children:"MDN"})," 后发现其描述是这样的："]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:["逻辑运算符（||）",s.exports.jsx(e.strong,{children:"通常"}),"与",s.exports.jsx(e.code,{children:"boolean"}),"一起使用，这时，它返回",s.exports.jsx(e.code,{children:"boolean"}),`。
然而，`,s.exports.jsx(e.code,{children:"||"}),"实际上返回的是某个",s.exports.jsx(e.strong,{children:"操作数"}),"（operand），所以完全不限于",s.exports.jsx(e.code,{children:"boolean"}),"。"]}),`
`]}),`
`,s.exports.jsx(e.p,{children:"自己之所以产生上面的误解，一方面是对基础掌握不扎实，一方面是自己对 JS 中双目逻辑运算符的应用场景很大程度上受到了《Vue.js 设计与实现》这本书的影响。"}),`
`,s.exports.jsxs(e.p,{children:["在《Vue.js 设计与实现》的",s.exports.jsx(e.em,{children:"如何设计一个响应式系统"}),"中，作者使用了大致如下的模式来实现一个",s.exports.jsx(e.strong,{children:"记录响应式状态的副作用"}),"的需求："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:`/**
 * map: Map<string, Set<Function>>
 * key: string 
 * effectFn: (...agrs: any[]) => any*/`}),` 
(key, effectFn) => {
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// bucket of side-effect functions"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," bucket = map.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"get"}),`(key)

  bucket && map.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"set"}),"(key, bucket = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Set"}),`([effectFn]))
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["这个模式深入我心，但是你可以看到，这里利用的是逻辑运算符的",s.exports.jsx(e.strong,{children:"短路执行特性"}),"（Short-circuit evaluation），重点在于何时会",s.exports.jsx(e.strong,{children:"执行"}),`第二个操作数语句,
而不关注整个逻辑运算表达式所返回的结果。`]}),`
`,s.exports.jsxs(e.p,{children:["但总的来说，解开对逻辑运算符的这个误解还是对我帮助很大，能写出更简洁的程序不说，至少不会再",s.exports.jsx(e.strong,{children:"错误推断"}),"别人的代码了..."]})]})}function h(n={}){return s.exports.jsx(r,Object.assign({},n,{children:s.exports.jsx(t,n)}))}export{c as date,h as default,a as description,p as duration,x as lang,i as path,l as title};
