import{a as n,j as l,F as a}from"./index.2b1fda4e.js";const t="JS \u7684 && \u4E0E ||",i="2022-09-23T22:49:00.000+00:00",o="zh",h="1min",d="/notes/js-logical-operator";function s(c){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",pre:"pre",span:"span",blockquote:"blockquote",strong:"strong",em:"em"},c.components);return l(a,{children:[n(e.nav,{className:"toc",children:n(e.ol,{className:"toc-level toc-level-1",children:n(e.li,{className:"toc-item toc-item-h1",children:n(e.a,{className:"toc-link toc-link-h1",href:"#js-\u7684--\u4E0E-",children:"JS \u7684 && \u4E0E ||"})})})}),`
`,n(e.h1,{id:"js-\u7684--\u4E0E-",children:"JS \u7684 && \u4E0E ||"}),`
`,l(e.p,{children:["...\u4EE5\u524D\u4E00\u76F4\u4EE5\u4E3A",n(e.code,{children:"&&"}),"\u548C",n(e.code,{children:"||"}),"\u8FD0\u7B97\u7684\u7ED3\u679C\u662F\u4E00\u4E2A",n(e.code,{children:"boolean"}),"\uFF0C\u4F46\u4ECA\u5929\u5B9E\u4E60\u7684\u65F6\u5019\uFF0C\u770B\u5230\u9879\u76EE\u91CC\u7684\u8FD9\u6BB5\u4EE3\u7801\uFF1A"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-html",children:[l(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"foo"})," ",n(e.span,{className:"hljs-attr",children:"v-for"}),"=",n(e.span,{className:"hljs-string",children:'"form in formList"'})," ",n(e.span,{className:"hljs-attr",children:":key"}),"=",n(e.span,{className:"hljs-string",children:'"..."'})," ",n(e.span,{className:"hljs-attr",children:"v-validate"}),"=",n(e.span,{className:"hljs-string",children:'"form.rules || {}"'}),">"]}),`
`]})}),`
`,l(e.p,{children:["\u81EA\u5DF1\u8FD8\u4EE5\u4E3A\u662F\u4E2A bug\uFF0C\u60F3\u6539\u6210",n(e.code,{children:'v-validate="form.rules ? form.rules : {}"'}),"\uFF0C\u4F46\u67E5\u4E86 ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR",children:"MDN"})," \u540E\u53D1\u73B0\u5176\u63CF\u8FF0\u662F\u8FD9\u6837\u7684\uFF1A"]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:["\u903B\u8F91\u8FD0\u7B97\u7B26\uFF08||\uFF09",n(e.strong,{children:"\u901A\u5E38"}),"\u4E0E",n(e.code,{children:"boolean"}),"\u4E00\u8D77\u4F7F\u7528\uFF0C\u8FD9\u65F6\uFF0C\u5B83\u8FD4\u56DE",n(e.code,{children:"boolean"}),`\u3002
\u7136\u800C\uFF0C`,n(e.code,{children:"||"}),"\u5B9E\u9645\u4E0A\u8FD4\u56DE\u7684\u662F\u67D0\u4E2A",n(e.strong,{children:"\u64CD\u4F5C\u6570"}),"\uFF08operand\uFF09\uFF0C\u6240\u4EE5\u5B8C\u5168\u4E0D\u9650\u4E8E",n(e.code,{children:"boolean"}),"\u3002"]}),`
`]}),`
`,n(e.p,{children:"\u81EA\u5DF1\u4E4B\u6240\u4EE5\u4EA7\u751F\u4E0A\u9762\u7684\u8BEF\u89E3\uFF0C\u4E00\u65B9\u9762\u662F\u5BF9\u57FA\u7840\u638C\u63E1\u4E0D\u624E\u5B9E\uFF0C\u4E00\u65B9\u9762\u662F\u81EA\u5DF1\u5BF9 JS \u4E2D\u53CC\u76EE\u903B\u8F91\u8FD0\u7B97\u7B26\u7684\u5E94\u7528\u573A\u666F\u5F88\u5927\u7A0B\u5EA6\u4E0A\u53D7\u5230\u4E86\u300AVue.js \u8BBE\u8BA1\u4E0E\u5B9E\u73B0\u300B\u8FD9\u672C\u4E66\u7684\u5F71\u54CD\u3002"}),`
`,l(e.p,{children:["\u5728\u300AVue.js \u8BBE\u8BA1\u4E0E\u5B9E\u73B0\u300B\u7684",n(e.em,{children:"\u5982\u4F55\u8BBE\u8BA1\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF"}),"\u4E2D\uFF0C\u4F5C\u8005\u4F7F\u7528\u4E86\u5927\u81F4\u5982\u4E0B\u7684\u6A21\u5F0F\u6765\u5B9E\u73B0\u4E00\u4E2A",n(e.strong,{children:"\u8BB0\u5F55\u54CD\u5E94\u5F0F\u72B6\u6001\u7684\u526F\u4F5C\u7528"}),"\u7684\u9700\u6C42\uFF1A"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-comment",children:`/**
 * map: Map<string, Set<Function>>
 * key: string 
 * effectFn: (...agrs: any[]) => any*/`}),` 
(key, effectFn) => {
  `,n(e.span,{className:"hljs-comment",children:"// bucket of side-effect functions"}),`
  `,n(e.span,{className:"hljs-keyword",children:"let"})," bucket = map.",n(e.span,{className:"hljs-title function_",children:"get"}),`(key)

  bucket && map.`,n(e.span,{className:"hljs-title function_",children:"set"}),"(key, bucket = ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"Set"}),`([effectFn]))
}
`]})}),`
`,l(e.p,{children:["\u8FD9\u4E2A\u6A21\u5F0F\u6DF1\u5165\u6211\u5FC3\uFF0C\u4F46\u662F\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u5229\u7528\u7684\u662F\u903B\u8F91\u8FD0\u7B97\u7B26\u7684",n(e.strong,{children:"\u77ED\u8DEF\u6267\u884C\u7279\u6027"}),"\uFF08Short-circuit evaluation\uFF09\uFF0C\u91CD\u70B9\u5728\u4E8E\u4F55\u65F6\u4F1A",n(e.strong,{children:"\u6267\u884C"}),`\u7B2C\u4E8C\u4E2A\u64CD\u4F5C\u6570\u8BED\u53E5,
\u800C\u4E0D\u5173\u6CE8\u6574\u4E2A\u903B\u8F91\u8FD0\u7B97\u8868\u8FBE\u5F0F\u6240\u8FD4\u56DE\u7684\u7ED3\u679C\u3002`]}),`
`,l(e.p,{children:["\u4F46\u603B\u7684\u6765\u8BF4\uFF0C\u89E3\u5F00\u5BF9\u903B\u8F91\u8FD0\u7B97\u7B26\u7684\u8FD9\u4E2A\u8BEF\u89E3\u8FD8\u662F\u5BF9\u6211\u5E2E\u52A9\u5F88\u5927\uFF0C\u80FD\u5199\u51FA\u66F4\u7B80\u6D01\u7684\u7A0B\u5E8F\u4E0D\u8BF4\uFF0C\u81F3\u5C11\u4E0D\u4F1A\u518D",n(e.strong,{children:"\u9519\u8BEF\u63A8\u65AD"}),"\u522B\u4EBA\u7684\u4EE3\u7801\u4E86..."]})]})}function m(c={}){const{wrapper:e}=c.components||{};return e?n(e,Object.assign({},c,{children:n(s,c)})):s(c)}export{i as date,m as default,h as duration,o as lang,d as path,t as title};
