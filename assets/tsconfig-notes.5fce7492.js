import{a as n,j as l,F as d}from"./index.d4dfff55.js";const o="TS Config \u7B80\u8BB0",h="2022-05-02T18:03:00.000+00:00",t="zh",s="4min",a="/blog/tsconfig-notes";function c(i){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",blockquote:"blockquote",ul:"ul",strong:"strong",h2:"h2",h3:"h3",code:"code",pre:"pre"},i.components);return l(d,{children:[n(e.nav,{className:"toc",children:n(e.ol,{className:"toc-level toc-level-1",children:l(e.li,{className:"toc-item toc-item-h1",children:[n(e.a,{className:"toc-link toc-link-h1",href:"#ts-config-\u7B80\u8BB0",children:"TS Config \u7B80\u8BB0"}),l(e.ol,{className:"toc-level toc-level-2",children:[l(e.li,{className:"toc-item toc-item-h2",children:[n(e.a,{className:"toc-link toc-link-h2",href:"#root-fields",children:"Root Fields"}),l(e.ol,{className:"toc-level toc-level-3",children:[n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#files",children:"files"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#extends",children:"extends"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#include",children:"include"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#exclude",children:"exclude"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#references",children:"references"})})]})]}),l(e.li,{className:"toc-item toc-item-h2",children:[n(e.a,{className:"toc-link toc-link-h2",href:"#compiler-options",children:"Compiler Options"}),l(e.ol,{className:"toc-level toc-level-3",children:[n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#baseurl",children:"baseUrl"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#module",children:"module"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#moduleresolution",children:"moduleResolution"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#composite",children:"composite"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#rootdir",children:"rootDir"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#types",children:"types"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#lib",children:"lib"})})]})]})]})]})})}),`
`,n(e.h1,{id:"ts-config-\u7B80\u8BB0",children:"TS Config \u7B80\u8BB0"}),`
`,n(e.p,{children:"Fwio"}),`
`,l(e.blockquote,{children:[`
`,n(e.p,{children:"\u603B\u7ED3\u4E00\u4E9BTSConfig\u6587\u4EF6\u7684\u9009\u9879\u610F\u4E49\u3002"}),`
`]}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["\u4E00\u4E2ATSConfig\u6587\u4EF6\u8868\u793A\u5176\u6240\u5728\u76EE\u5F55\u662FTypeScript\u6216JavaScript\u9879\u76EE\u7684",n(e.strong,{children:"\u6839\u76EE\u5F55"}),"\u3002"]}),`
`]}),`
`,n(e.h2,{id:"root-fields",children:"Root Fields"}),`
`,n(e.h3,{id:"files",children:"files"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"\u6307\u5B9A\u9879\u76EE\u5305\u542B\u54EA\u4E9B\u6587\u4EF6\u3002"}),`
`]}),`
`,n(e.h3,{id:"extends",children:"extends"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"extends"}),"\u7684\u503C\u662F\u4E00\u4E2A\u5305\u542B\u6307\u5411\u8981",n(e.strong,{children:"\u7EE7\u627F"}),"\u7684\u53E6\u4E00\u4E2ATSConfig\u6587\u4EF6\u7684\u8DEF\u5F84\u3002"]}),`
`,l(e.li,{children:["\u9996\u5148\u52A0\u8F7D\u57FA\u6587\u4EF6(base file)\u4E2D\u7684\u914D\u7F6E(\u5373",n(e.code,{children:"extends"}),"\u6307\u5411\u7684\u6587\u4EF6)\uFF0C\u7136\u540E\u88AB\u6D3E\u751F\u6587\u4EF6\u7684\u914D\u7F6E",n(e.strong,{children:"\u8986\u76D6"}),"\u3002"]}),`
`,l(e.li,{children:["\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u76F8\u5BF9\u8DEF\u5F84\u90FD\u5C06\u76F8\u5BF9\u4E8E",n(e.strong,{children:"\u5B83\u4EEC\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6"}),"\u8FDB\u884C\u89E3\u6790\u3002"]}),`
`,l(e.li,{children:[n(e.code,{children:"references"}),"\u662F\u9876\u5C42\u5C5E\u6027\u4E2D\u552F\u4E00\u4E0D\u80FD\u88AB\u7EE7\u627F\u7684\u3002"]}),`
`]}),`
`,n(e.h3,{id:"include",children:"include"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"\u4EE5\u6570\u7EC4\u6307\u5B9A\u9879\u76EE\u8981\u5305\u542B\u7684\u6587\u4EF6\u6216\u6A21\u5F0F\u3002"}),`
`,l(e.li,{children:[n(e.code,{children:"include"}),"\u548C",n(e.code,{children:"exclude"}),"\u652F\u6301\u901A\u914D\u7B26\u6765\u751F\u6210\u5168\u5C40\u6A21\u5F0F(glob patterns)\uFF1A",`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"*"}),"\uFF1A\u5339\u914D\u96F6\u6216\u591A\u4E2A\u5B57\u7B26\uFF08\u4E0D\u5305\u542B\u76EE\u5F55\u95F4\u9694\u7B26\uFF09"]}),`
`,l(e.li,{children:[n(e.code,{children:"?"}),"\uFF1A\u5339\u914D\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26\uFF08\u4E0D\u5305\u542B\u76EE\u5F55\u95F4\u9694\u7B26\uFF09"]}),`
`,l(e.li,{children:[n(e.code,{children:"**/"}),"\uFF1A\u5339\u914D\u5D4C\u5957\u4EFB\u610F\u7EA7\u7684\u4EFB\u610F\u76EE\u5F55\u3002"]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"exclude",children:"exclude"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["\u4EE5\u6570\u7EC4\u6307\u5B9A\u5728\u89E3\u6790",n(e.code,{children:"include"}),"\u65F6\uFF0C\u5E94\u8BE5\u4E13\u95E8\u6392\u9664\u7684\u6587\u4EF6\u3002"]}),`
`]}),`
`,n(e.h3,{id:"references",children:"references"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"references"}),"\u4E3A\u6570\u7EC4\u7684\u5F62\u5F0F\uFF0C\u53EF\u5C06TypeScript\u9879\u76EE\u7684\u7ED3\u6784\u7EC4\u7EC7\u4E3A\u66F4\u5C0F\u7684\u90E8\u5206\u3002"]}),`
`,n(e.li,{children:"\u4F7F\u7528\u9879\u76EE\u5F15\u7528(references)\u53EF\u4EE5\u6781\u5927\u5730\u7F29\u77ED\u6784\u5EFA\u548C\u7F16\u8F91\u5668\u4EA4\u4E92\u7684\u65F6\u95F4\uFF0C\u5F3A\u5236\u7EC4\u4EF6\u4E4B\u95F4\u7684\u903B\u8F91\u5206\u79BB\uFF0C\u5E76\u4EE5\u6539\u8FDB\u7684\u65B9\u5F0F\u7EC4\u7EC7\u4EE3\u7801\u3002"}),`
`,l(e.li,{children:["\u6BCF\u4E2A",n(e.code,{children:"reference"}),"\u7684",n(e.code,{children:"path"}),"\u5C5E\u6027\u53EF\u4EE5\u6307\u5411\u4E00\u4E2A\u5305\u542BTS Config\u6587\u4EF6\u7684\u76EE\u5F55\u3002"]}),`
`,l(e.li,{children:["\u5F53\u4F60\u5F15\u7528\u4E00\u4E2A\u9879\u76EE\u65F6\uFF0C\u4F1A\u5E26\u6765\u4EE5\u4E0B\u4E0D\u540C\uFF1A",`
`,l(e.ul,{children:[`
`,l(e.li,{children:["\u4ECE\u5F15\u7528\u7684\u9879\u76EE\u5BFC\u5165\u6A21\u5757\uFF0C\u5C06\u53D8\u4E3A\u52A0\u8F7D\u5176\u8F93\u51FA\u7684",n(e.strong,{children:"\u58F0\u660E\u6587\u4EF6"}),"(.d.ts)\u3002"]}),`
`,l(e.li,{children:["\u5982\u679C\u5F15\u7528\u7684\u9879\u76EE\u751F\u6210\u4E86\u4E00\u4E2AoutFile\uFF0C\u8FD9\u4E2AoutFile\u7684.d.ts\u6587\u4EF6\u7684\u58F0\u660E\u4F1A\u5BF9\u8BE5\u9879\u76EE",n(e.strong,{children:"\u53EF\u89C1"}),"\u3002"]}),`
`,n(e.li,{children:"\u6784\u5EFA\u6A21\u5F0F\u4F1A\u81EA\u52A8\u6784\u5EFA\u6240\u9700\u7684\u5F15\u7528\u9879\u76EE\u3002"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h2,{id:"compiler-options",children:"Compiler Options"}),`
`,n(e.h3,{id:"baseurl",children:"baseUrl"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["\u6307\u5B9A\u89E3\u6790",n(e.strong,{children:"\u975E\u7EDD\u5BF9\u6A21\u5757\u540D"}),"\u6240\u4F9D\u636E\u7684\u6839\u76EE\u5F55\u3002"]}),`
`,l(e.li,{children:[n(e.code,{children:'"baseUrl": "./"'}),"\u4F1A\u67E5\u627E",n(e.code,{children:"ts.config.json"}),"\u6240\u5728\u76EE\u5F55\u7684\u6587\u4EF6\u3002"]}),`
`]}),`
`,n(e.h3,{id:"module",children:"module"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["\u5E94\u8BE5\u4E3A\u6BCF\u4E2A\u9879\u76EE\u8BBE\u7F6E",n(e.code,{children:"module"}),"\uFF0C\u8868\u793A\u9879\u76EE\u6240\u4F7F\u7528\u7684\u6A21\u5757\u65B9\u6848\u3002"]}),`
`,l(e.li,{children:["\u6539\u53D8",n(e.code,{children:"module"}),"\u4E5F\u4F1A\u5F71\u54CD",n(e.code,{children:"moduleResolution"}),"\u3002"]}),`
`,l(e.li,{children:[n(e.code,{children:"es6(es2015)"}),"\u4E0E",n(e.code,{children:"es2020"}),"\u7684\u4E3B\u8981\u533A\u522B\u662F\uFF0C",n(e.code,{children:"es2020"}),"\u5F15\u5165\u4E86\u52A8\u6001",n(e.code,{children:"import()"}),"\u548C",n(e.code,{children:"import.meta"}),"\u3002"]}),`
`]}),`
`,n(e.h3,{id:"moduleresolution",children:"moduleResolution"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["\u6307\u5B9A\u6A21\u5757\u7684",n(e.strong,{children:"\u89E3\u6790\u7B56\u7565"}),"\u3002"]}),`
`]}),`
`,n(e.h3,{id:"composite",children:"composite"}),`
`,n(e.h3,{id:"rootdir",children:"rootDir"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[`
`,l(e.p,{children:["\u6240\u6709\u975E\u58F0\u660E\u8F93\u5165\u6587\u4EF6\u7684",n(e.strong,{children:"\u6700\u957F\u516C\u5171\u8DEF\u5F84"}),"\u3002"]}),`
`]}),`
`,l(e.li,{children:[`
`,l(e.p,{children:["\u5982\u679C\u8BBE\u7F6E\u4E86",n(e.code,{children:"composite"}),"\uFF0C\u5219\u6839\u76EE\u5F55\u7684\u9ED8\u8BA4\u503C\u4E3A\u5305\u542B",n(e.code,{children:"tsconfig.json"}),"\u6587\u4EF6\u7684\u76EE\u5F55\u3002"]}),`
`]}),`
`,l(e.li,{children:[`
`,n(e.p,{children:"\u4E3E\u4F8B\uFF1A"}),`
`]}),`
`,l(e.li,{children:[`
`,n(e.pre,{children:n(e.code,{className:"hljs language-xml",children:`MyProj
\u251C\u2500\u2500 tsconfig.json
\u251C\u2500\u2500 core
\u2502   \u251C\u2500\u2500 a.ts
\u2502   \u251C\u2500\u2500 b.ts
\u2502   \u251C\u2500\u2500 sub
\u2502   \u2502   \u251C\u2500\u2500 c.ts
\u251C\u2500\u2500 types.d.ts
`})}),`
`]}),`
`,l(e.li,{children:[`
`,l(e.p,{children:["\u5176\u63A8\u65AD\u51FA\u7684",n(e.code,{children:"rootDir"}),"\u662F\u6700\u957F\u516C\u5171\u8DEF\u5F84",n(e.code,{children:"core/"}),"\uFF0C\u90A3\u4E48\u6700\u540E\u5BFC\u51FA\u7684TypeScript\u4E3A\uFF1A"]}),`
`]}),`
`,l(e.li,{children:[`
`,n(e.pre,{children:n(e.code,{className:"hljs language-xml",children:`MyProj
\u251C\u2500\u2500 dist
\u2502   \u251C\u2500\u2500 a.js
\u2502   \u251C\u2500\u2500 b.js
\u2502   \u251C\u2500\u2500 sub
\u2502   \u2502   \u251C\u2500\u2500 c.js
`})}),`
`]}),`
`]}),`
`,n(e.h3,{id:"types",children:"types"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709",n(e.strong,{children:"\u53EF\u89C1"}),"\u7684",n(e.code,{children:"@types"}),"\u5305\u90FD\u4F1A\u88AB\u7EB3\u5165\u7F16\u8BD1\u3002"]}),`
`,l(e.li,{children:["\u4EFB\u4F55\u5C01\u95ED\u6587\u4EF6\u5939\u5185\u7684",n(e.code,{children:"node_modules/@types"}),"\u90FD\u88AB\u8BA4\u4E3A\u662F\u53EF\u89C1\u7684\u3002"]}),`
`,l(e.li,{children:["\u5982\u679C",n(e.code,{children:"type"}),"\u88AB\u6307\u660E\uFF0C\u5219\u53EA\u6709\u5217\u51FA\u7684\u5305\u4F1A\u88AB\u5305\u542B\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u5185\u3002"]}),`
`]}),`
`,n(e.h3,{id:"lib",children:"lib"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[`
`,n(e.p,{children:"TypeScript \u4E3A\u5185\u7F6E JS APIs \u5305\u542B\u4E86\u4E00\u4E2A\u9ED8\u8BA4\u96C6\uFF0C\u5305\u62EC\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u5BF9\u8C61\u7684\u7C7B\u578B\u5B9A\u4E49\u3002"}),`
`]}),`
`,l(e.li,{children:[`
`,l(e.p,{children:["TypeScript \u4E5F\u5305\u542B\u4E86 JS \u7684\u65B0\u7279\u6027\uFF0C\u6BD4\u5982\u7C7B\u578B",n(e.code,{children:"Map"}),"\u7684\u5B9A\u4E49\u3002"]}),`
`]}),`
`,l(e.li,{children:[`
`,n(e.p,{children:"\u4ECE TypeScript 4.5 \u5F00\u59CB\uFF0Clib \u6587\u4EF6\u53EF\u4EE5\u88AB npm \u6A21\u5757\u8986\u76D6\u3002"}),`
`]}),`
`]})]})}function m(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(c,i)})):c(i)}export{h as date,m as default,s as duration,t as lang,a as path,o as title};
