import{a as s,j as e,F as c}from"./index.c8b35eff.js";const i="prototype \u51FD\u6570\u4E2D\u7684 this \u7ED1\u5B9A",h="2022-09-02T15:11:00.000+00:00",t="zh",o="2min",d="/notes/this-in-js-prototype-function";function a(l){const n=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span",blockquote:"blockquote"},l.components);return e(c,{children:[s(n.nav,{className:"toc",children:s(n.ol,{className:"toc-level toc-level-1",children:s(n.li,{className:"toc-item toc-item-h1",children:s(n.a,{className:"toc-link toc-link-h1",href:"#prototype-\u51FD\u6570\u4E2D\u7684-this-\u7ED1\u5B9A",children:"prototype \u51FD\u6570\u4E2D\u7684 this \u7ED1\u5B9A"})})})}),`
`,s(n.h1,{id:"prototype-\u51FD\u6570\u4E2D\u7684-this-\u7ED1\u5B9A",children:"prototype \u51FD\u6570\u4E2D\u7684 this \u7ED1\u5B9A"}),`
`,e(n.p,{children:["\u5728\u91CD\u505A\u5C71\u6708\u524D\u7AEF\u9762\u8BD5\u57FA\u7840\u4E2D ",s(n.a,{href:"https://q.shanyue.tech/fe/js/32.html",children:"bind"})," \u4E00\u9898\u65F6\uFF0C\u7531\u4E8E\u5BF9",s(n.code,{children:"this"}),"\u7406\u89E3\u4E0D\u5230\u4F4D\uFF0C\u5199\u51FA\u5982\u4E0B",s(n.strong,{children:"\u9519\u8BEF\u7B54\u6848"}),"\uFF1A"]}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-js",children:[s(n.span,{className:"hljs-title class_",children:"Function"}),".",s(n.span,{className:"hljs-property",children:s(n.span,{className:"hljs-keyword",children:"prototype"})}),".",s(n.span,{className:"hljs-property",children:"myBind"})," = ",e(n.span,{className:"hljs-function",children:["(",s(n.span,{className:"hljs-params",children:"obj"}),") =>"]}),` {
  `,s(n.span,{className:"hljs-keyword",children:"return"})," ",e(n.span,{className:"hljs-function",children:["(",s(n.span,{className:"hljs-params",children:"...args"}),") =>"]})," ",s(n.span,{className:"hljs-variable language_",children:"this"}),".",s(n.span,{className:"hljs-title function_",children:"apply"}),`(obj, args)
}

`,s(n.span,{className:"hljs-keyword",children:"function"})," ",s(n.span,{className:"hljs-title function_",children:"f"}),` (arg) {
  `,s(n.span,{className:"hljs-variable language_",children:"console"}),".",s(n.span,{className:"hljs-title function_",children:"log"}),"(",s(n.span,{className:"hljs-variable language_",children:"this"}),".",s(n.span,{className:"hljs-property",children:"a"}),`, arg)
}

`,s(n.span,{className:"hljs-comment",children:"// TypeError: this.apply is not a function"}),`
f.`,s(n.span,{className:"hljs-title function_",children:"myBind"}),"({",s(n.span,{className:"hljs-attr",children:"a"}),": ",s(n.span,{className:"hljs-number",children:"2"}),"})(",s(n.span,{className:"hljs-number",children:"4"}),`)
`]})}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:[s(n.code,{children:"error: TypeError"})," \u901A\u5E38\u8868\u793A\u5BF9\u53D8\u91CF\u8FDB\u884C\u4E86",s(n.strong,{children:"\u4E0D\u5408\u7406\u7684\u64CD\u4F5C"}),"\u3002"]}),`
`]}),`
`,e(n.p,{children:["\u5176\u4E2D\uFF0C\u8FD4\u56DE\u7684\u7BAD\u5934\u51FD\u6570\u5E76\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46",s(n.code,{children:"myBind"}),"\u4E0D\u80FD\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u5B9A\u4E49\uFF0C\u56E0\u4E3A\u8FD4\u56DE\u51FD\u6570\u7684",s(n.code,{children:"this"}),s(n.strong,{children:"\u7EE7\u627F"}),"\u81EA\u5916\u5C42\u7684",s(n.code,{children:"myBind"}),`,
\u7531\u4E8E`,s(n.code,{children:"myBind"}),"\u4E5F\u7528\u7BAD\u5934\u51FD\u6570\u5B9A\u4E49\uFF0C\u90A3\u4E48\u5728",s(n.strong,{children:"\u5B9A\u4E49\u65F6"}),s(n.code,{children:"this"}),"\u5C31",s(n.strong,{children:"\u9759\u6001"}),"\u5730\u6307\u5411\u4E86",s(n.code,{children:"Global"}),"\u5BF9\u8C61\uFF0C",s(n.code,{children:"Global"}),"\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E0D\u5B58\u5728",s(n.code,{children:"apply"}),"\u5C5E\u6027\uFF0C\u6240\u4EE5\u62A5\u9519\u3002"]}),`
`,e(n.p,{children:["\u5C06\u5916\u5C42\u7684",s(n.code,{children:"myBind"}),"\u6539\u4E3A\u5E38\u89C4\u51FD\u6570(function () {})\u7684\u5199\u6CD5\u5373\u53EF\uFF1A"]}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-js",children:[s(n.span,{className:"hljs-title class_",children:"Function"}),".",s(n.span,{className:"hljs-property",children:s(n.span,{className:"hljs-keyword",children:"prototype"})}),".",s(n.span,{className:"hljs-property",children:"myBind"})," = ",s(n.span,{className:"hljs-keyword",children:"function"})," (",s(n.span,{className:"hljs-params",children:"obj"}),`) {
  `,s(n.span,{className:"hljs-keyword",children:"return"})," ",e(n.span,{className:"hljs-function",children:["(",s(n.span,{className:"hljs-params",children:"...args"}),") =>"]})," ",s(n.span,{className:"hljs-variable language_",children:"this"}),".",s(n.span,{className:"hljs-title function_",children:"apply"}),`(obj, args)
}

`,s(n.span,{className:"hljs-keyword",children:"function"})," ",s(n.span,{className:"hljs-title function_",children:"f"}),` (arg) {
  `,s(n.span,{className:"hljs-variable language_",children:"console"}),".",s(n.span,{className:"hljs-title function_",children:"log"}),"(",s(n.span,{className:"hljs-variable language_",children:"this"}),".",s(n.span,{className:"hljs-property",children:"a"}),`, arg)
}

`,s(n.span,{className:"hljs-comment",children:"// 2, 4"}),`
f.`,s(n.span,{className:"hljs-title function_",children:"myBind"}),"({",s(n.span,{className:"hljs-attr",children:"a"}),": ",s(n.span,{className:"hljs-number",children:"2"}),"})(",s(n.span,{className:"hljs-number",children:"4"}),`)
`]})}),`
`,e(n.p,{children:["\u8FD9\u6837\uFF0C\u6240\u8FD4\u56DE\u7BAD\u5934\u51FD\u6570\u7684",s(n.code,{children:"this"}),"\u5C06\u7531",s(n.code,{children:"myBind()"}),"\u5728",s(n.strong,{children:"\u8FD0\u884C\u65F6"}),"\u786E\u5B9A\uFF0C\u4E5F\u6B63\u597D\u5C31\u662F\u5B9E\u4F8B\u5316\u7684",s(n.strong,{children:"\u51FD\u6570\u5BF9\u8C61"}),"\u3002"]})]})}function p(l={}){const{wrapper:n}=l.components||{};return n?s(n,Object.assign({},l,{children:s(a,l)})):a(l)}export{h as date,p as default,o as duration,t as lang,d as path,i as title};
