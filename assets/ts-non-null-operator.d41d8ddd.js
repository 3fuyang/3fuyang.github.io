import{a as e,j as l,F as r}from"./index.06c566be.js";const t="TS \u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\uFF08Non-null Assertion Operator\uFF09",i="1min",o="zh",h="2022-10-03T11:20:00.000+00:00",d="/notes/ts-non-null-operator";function a(s){const n=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span"},s.components);return l(r,{children:[e(n.nav,{className:"toc",children:e(n.ol,{className:"toc-level toc-level-1",children:e(n.li,{className:"toc-item toc-item-h1",children:e(n.a,{className:"toc-link toc-link-h1",href:"#ts-\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26non-null-assertion-operator",children:"TS \u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\uFF08Non-null Assertion Operator\uFF09"})})})}),`
`,e(n.h1,{id:"ts-\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26non-null-assertion-operator",children:"TS \u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\uFF08Non-null Assertion Operator\uFF09"}),`
`,l(n.p,{children:["\u540E\u7F00 ! \uFF08Postfix",e(n.code,{children:"!"}),"\uFF09\uFF0C\u53EF\u5C06",e(n.code,{children:"null"}),"\u548C",e(n.code,{children:"undefinde"}),"\u4ECE TS \u5BF9\u53D8\u91CF\u7684\u7C7B\u578B\u68C0\u67E5\u4E2D\u79FB\u9664\u3002"]}),`
`,l(n.p,{children:["\u5E38\u7528\u4E8E ",e(n.strong,{children:"DOM"})," \u7684\u67E5\u627E\uFF08query\uFF09\u7ED3\u679C\u3002"]}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-ts",children:[e(n.span,{className:"hljs-keyword",children:"function"})," ",e(n.span,{className:"hljs-title function_",children:"liveDangerously"}),"(",l(n.span,{className:"hljs-params",children:["x?: ",e(n.span,{className:"hljs-built_in",children:"number"})," | ",e(n.span,{className:"hljs-literal",children:"null"})]}),`) {
  `,e(n.span,{className:"hljs-comment",children:"// No error"}),`
  `,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(x!.",e(n.span,{className:"hljs-title function_",children:"toFixed"}),`());
}

`,e(n.span,{className:"hljs-comment",children:"// assert the result of DOM queries"}),`
`,e(n.span,{className:"hljs-variable language_",children:"document"}),".",e(n.span,{className:"hljs-property",children:"querySelector"}),"<",e(n.span,{className:"hljs-title class_",children:"HTMLDivElement"}),">(",e(n.span,{className:"hljs-string",children:"'#app'"}),")!.",e(n.span,{className:"hljs-property",children:"innerHTML"})," = ",e(n.span,{className:"hljs-string",children:`\`
  <div>
    Bazzinga
  </div>
\``}),`
`]})})]})}function p(s={}){const{wrapper:n}=s.components||{};return n?e(n,Object.assign({},s,{children:e(a,s)})):a(s)}export{h as date,p as default,i as duration,o as lang,d as path,t as title};
