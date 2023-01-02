import{j as s}from"./jsx-runtime-f0839969.js";const o="TS 非空断言操作符（Non-null Assertion Operator）",a="1min",c="操作符，将 null 和 undefined 的情况排除。",i="zh",p="2022-10-03T11:20:00.000+08:00",x="/notes/ts-non-null-operator",r=function({children:e}){return s.exports.jsx("article",{className:"prose",children:e})};function l(n){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span"},n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h1",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#ts-非空断言操作符non-null-assertion-operator",children:"TS 非空断言操作符（Non-null Assertion Operator）"})})})}),`
`,s.exports.jsx(e.h1,{id:"ts-非空断言操作符non-null-assertion-operator",children:"TS 非空断言操作符（Non-null Assertion Operator）"}),`
`,s.exports.jsxs(e.p,{children:["后缀 ! （Postfix",s.exports.jsx(e.code,{children:"!"}),"），可将",s.exports.jsx(e.code,{children:"null"}),"和",s.exports.jsx(e.code,{children:"undefinde"}),"从 TS 对变量的类型检查中移除。"]}),`
`,s.exports.jsxs(e.p,{children:["常用于 ",s.exports.jsx(e.strong,{children:"DOM"})," 的查找（query）结果。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-ts",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"liveDangerously"}),"(",s.exports.jsxs(e.span,{className:"hljs-params",children:["x?: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"number"})," | ",s.exports.jsx(e.span,{className:"hljs-literal",children:"null"})]}),`) {
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// No error"}),`
  `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(x!.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"toFixed"}),`());
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// assert the result of DOM queries"}),`
`,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"querySelector"}),"<",s.exports.jsx(e.span,{className:"hljs-title class_",children:"HTMLDivElement"}),">(",s.exports.jsx(e.span,{className:"hljs-string",children:"'#app'"}),")!.",s.exports.jsx(e.span,{className:"hljs-property",children:"innerHTML"})," = ",s.exports.jsx(e.span,{className:"hljs-string",children:`\`
  <div>
    Bazzinga
  </div>
\``}),`
`]})})]})}function h(n={}){return s.exports.jsx(r,Object.assign({},n,{children:s.exports.jsx(l,n)}))}export{p as date,h as default,c as description,a as duration,i as lang,x as path,o as title};
