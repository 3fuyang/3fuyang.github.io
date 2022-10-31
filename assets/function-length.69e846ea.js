import{a as e,j as s,F as c}from"./index.2ffbd957.js";const t="Function.prototype.length",i="1min",o="zh",h="2022-10-10T14:54:00.000+00:00",p="/notes/function-length";function a(l){const n=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span"},l.components);return s(c,{children:[e(n.nav,{className:"toc",children:e(n.ol,{className:"toc-level toc-level-1",children:e(n.li,{className:"toc-item toc-item-h1",children:e(n.a,{className:"toc-link toc-link-h1",href:"#functionprototypelength",children:"Function.prototype.length"})})})}),`
`,e(n.h1,{id:"functionprototypelength",children:"Function.prototype.length"}),`
`,s(n.p,{children:[e(n.code,{children:"Function.prototype.length"}),"\u8FD4\u56DE\u51FD\u6570\u7684",e(n.strong,{children:"\u5F62\u53C2"}),"\uFF08parameters\uFF09\u4E2A\u6570\u3002"]}),`
`,s(n.p,{children:["\u8FD9\u5728 JS \u7684",e(n.strong,{children:"\u51FD\u6570\u67EF\u91CC\u5316"}),"\uFF08currying, or partially applied function\uFF09\u5B9E\u73B0\u4E2D\u4F1A\u7528\u5230\u3002"]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-ts",children:[e(n.span,{className:"hljs-keyword",children:"function"})," curry<T>(",e(n.span,{className:"hljs-attr",children:"func"}),": ",s(n.span,{className:"hljs-function",children:["(",s(n.span,{className:"hljs-params",children:["...args: ",e(n.span,{className:"hljs-built_in",children:"any"}),"[]"]}),") =>"]}),` T) {
  `,e(n.span,{className:"hljs-keyword",children:"const"}),` appliedArgs = []

  `,e(n.span,{className:"hljs-keyword",children:"const"})," ",e(n.span,{className:"hljs-title function_",children:"curried"})," = (",s(n.span,{className:"hljs-params",children:["...args: ",e(n.span,{className:"hljs-built_in",children:"any"}),"[]"]}),`) => {
    appliedArgs.`,e(n.span,{className:"hljs-title function_",children:"push"}),`(...args)
    `,e(n.span,{className:"hljs-keyword",children:"if"})," (appliedArgs.",e(n.span,{className:"hljs-property",children:"length"})," >= func.",e(n.span,{className:"hljs-property",children:"length"}),`) {
      `,e(n.span,{className:"hljs-keyword",children:"return"})," ",e(n.span,{className:"hljs-title function_",children:"func"}),`(...appliedArgs)
    } `,e(n.span,{className:"hljs-keyword",children:"else"}),` {
      `,e(n.span,{className:"hljs-keyword",children:"return"}),` curried
    }
  }

  `,e(n.span,{className:"hljs-keyword",children:"return"}),` curried
}
`]})})]})}function d(l={}){const{wrapper:n}=l.components||{};return n?e(n,Object.assign({},l,{children:e(a,l)})):a(l)}export{h as date,d as default,i as duration,o as lang,p as path,t as title};
