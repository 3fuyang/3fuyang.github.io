import{a as n,j as c,F as i}from"./index.b40afe38.js";const d="JS \u4E2D\u5173\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C",s="2022-09-01T17:31:00.000+00:00",o="zh",h="4min",a="/notes/js-string-and-regexp";function r(l){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",strong:"strong",ul:"ul",code:"code",pre:"pre",span:"span"},l.components);return c(i,{children:[n(e.nav,{className:"toc",children:n(e.ol,{className:"toc-level toc-level-1",children:n(e.li,{className:"toc-item toc-item-h1",children:n(e.a,{className:"toc-link toc-link-h1",href:"#js-\u4E2D\u5173\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C",children:"JS \u4E2D\u5173\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C"})})})}),`
`,n(e.h1,{id:"js-\u4E2D\u5173\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C",children:"JS \u4E2D\u5173\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C"}),`
`,c(e.p,{children:["\u6B63\u5219\u8868\u8FBE\u5F0F\u662F",n(e.strong,{children:"\u4E13\u653B"}),"\u5B57\u7B26\u4E32\u64CD\u4F5C\u7684\u5DE5\u5177\uFF0CJavaScript \u7528\u4E8E\u6B63\u5219\u64CD\u4F5C\u7684\u65B9\u6CD5\u4E3B\u8981\u6709\u5982\u4E0B 6 \u4E2A\uFF1A"]}),`
`,c(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"String.prototype.search"})}),`
`,n(e.li,{children:n(e.code,{children:"String.prototype.split"})}),`
`,n(e.li,{children:n(e.code,{children:"String.prototype.match"})}),`
`,n(e.li,{children:n(e.code,{children:"String.prototype.replace"})}),`
`,n(e.li,{children:n(e.code,{children:"RegExp.prototype.test"})}),`
`,n(e.li,{children:n(e.code,{children:"RegExp.prototype.exec"})}),`
`]}),`
`,c(e.p,{children:["\u5176\u4E2D",n(e.code,{children:"exec()"}),"\u7684\u8FD4\u56DE\u503C\u8F83\u4E3A\u590D\u6742\uFF1A"]}),`
`,c(e.ul,{children:[`
`,c(e.li,{children:["\u5982\u679C\u5339\u914D\u5931\u8D25\uFF0C",n(e.code,{children:"exec()"}),"\u8FD4\u56DE",n(e.code,{children:"null"}),"\uFF0C\u5E76\u5C06\u6B63\u5219\u8868\u8FBE\u5F0F\u5BF9\u8C61\u7684",n(e.code,{children:"lastIndex"}),"\u91CD\u7F6E\u4E3A 0\u3002"]}),`
`,c(e.li,{children:["\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C",n(e.code,{children:"exec()"}),"\u8FD4\u56DE\u4E00\u4E2A",n(e.strong,{children:"\u6570\u7EC4"}),"\uFF0C\u5E76\u66F4\u65B0\u6B63\u5219\u8868\u8FBE\u5F0F\u5BF9\u8C61\u7684",n(e.code,{children:"lastIndex"}),"\u5C5E\u6027\u3002"]}),`
`]}),`
`,n(e.pre,{children:c(e.code,{className:"hljs language-ts",children:[n(e.span,{className:"hljs-comment",children:"// ['\u5339\u914D\u6210\u529F\u7684\u6587\u672C', '\u6355\u83B7\u98791', '\u6355\u83B7\u98792', ... , '\u6355\u83B7\u9879n']"}),`
`,n(e.span,{className:"hljs-keyword",children:"const"})," result = regx.",n(e.span,{className:"hljs-title function_",children:"exec"}),`(str)

result.`,n(e.span,{className:"hljs-property",children:"index"})," ",n(e.span,{className:"hljs-comment",children:"// \u5339\u914D\u9879\u5728\u539F\u59CB\u5B57\u7B26\u4E32\u4E2D\u7684 0-based \u7D22\u5F15"}),`
result.`,n(e.span,{className:"hljs-property",children:"input"})," ",n(e.span,{className:"hljs-comment",children:"// \u5339\u914D\u7684\u539F\u59CB\u5B57\u7B26\u4E32"}),`
result.`,n(e.span,{className:"hljs-property",children:"groups"})," ",n(e.span,{className:"hljs-comment",children:"// \u547D\u540D\u6355\u83B7\u7EC4\u5BF9\u8C61(key \u662F\u540D\u79F0,val \u662F\u6355\u83B7\u7EC4)"}),`
`]})}),`
`,c(e.p,{children:["\u6839\u636E ",n(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec",children:"MDN"}),`,
`,n(e.code,{children:"exec()"}),"\u53EF\u7528\u6765\u5BF9\u5355\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684",n(e.strong,{children:"\u591A\u6B21\u5339\u914D\u7ED3\u679C"}),"\u8FDB\u884C",n(e.strong,{children:"\u9010\u6761"}),"\u7684\u904D\u5386(\u5305\u62EC\u6355\u83B7\u5230\u7684\u5339\u914D)\uFF0C\u5B83\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u7684",n(e.strong,{children:"\u539F\u59CB\u65B9\u6CD5"}),"\uFF0C\u8BB8\u591A\u5176\u4ED6\u6B63\u5219\u8868\u8FBE\u5F0F API \u4F1A\u5728",n(e.strong,{children:"\u5185\u90E8"}),"\u8C03\u7528",n(e.code,{children:"exec()"}),"\u3002"]}),`
`,c(e.p,{children:["\u867D\u7136",n(e.code,{children:"exec()"}),"\u529F\u80FD\u5F88\u5F3A\u5927\uFF0C\u4F46\u4E0D\u80FD\u6E05\u695A\u5730\u8868\u793A",n(e.strong,{children:"\u8C03\u7528\u7684\u76EE\u7684"}),"\uFF0C\u6240\u4EE5 MDN \u7684\u5EFA\u8BAE\u662F\uFF1A"]}),`
`,c(e.ul,{children:[`
`,c(e.li,{children:["\u5224\u65AD",n(e.strong,{children:"\u662F\u5426\u5339\u914D"}),"\uFF1A",n(e.code,{children:"RegExp.prototype.test()"})]}),`
`,c(e.li,{children:["\u627E\u51FA\u6240\u6709\u5339\u914D\u7684\u5B57\u7B26\u4E32\uFF0C\u800C",n(e.strong,{children:"\u4E0D\u5173\u5FC3\u6355\u83B7\u7EC4"}),"\uFF1A",n(e.code,{children:"String.prototype.match()"})]}),`
`,c(e.li,{children:["\u67E5\u627E\u5728\u5B57\u7B26\u4E32\u4E2D\u5339\u914D\u7684",n(e.strong,{children:"\u7D22\u5F15"}),"\uFF1A",n(e.code,{children:"String.prototype.search()"})]}),`
`]})]})}function p(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(r,l)})):r(l)}export{s as date,p as default,h as duration,o as lang,a as path,d as title};
