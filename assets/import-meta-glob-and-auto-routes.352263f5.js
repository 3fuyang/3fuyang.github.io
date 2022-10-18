import{a as n,j as r,F as c}from"./index.139b8234.js";const o="\u501F\u52A9 import.meta.glob \u7F16\u5199\u81EA\u52A8\u8DEF\u7531\u811A\u672C",d="2022-10-07T16:20:00.000+00:00",h="zh",s="3min",a="/blog/import-meta-glob-and-auto-routes";function i(l){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",p:"p",h2:"h2",strong:"strong",code:"code",ul:"ul"},l.components);return r(c,{children:[n(e.nav,{className:"toc",children:n(e.ol,{className:"toc-level toc-level-1",children:r(e.li,{className:"toc-item toc-item-h1",children:[n(e.a,{className:"toc-link toc-link-h1",href:"#\u501F\u52A9-importmetaglob-\u7F16\u5199\u81EA\u52A8\u8DEF\u7531\u811A\u672C",children:"\u501F\u52A9 import.meta.glob \u7F16\u5199\u81EA\u52A8\u8DEF\u7531\u811A\u672C"}),r(e.ol,{className:"toc-level toc-level-2",children:[n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#\u80CC\u666F",children:"\u80CC\u666F"})}),n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#\u5C06\u6570\u7EC4\u8F6C\u4E3A\u6811",children:"\u5C06\u6570\u7EC4\u8F6C\u4E3A\u6811"})}),n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#\u6253\u5305\u4F53\u79EF\u5BF9\u6BD4",children:"\u6253\u5305\u4F53\u79EF\u5BF9\u6BD4"})})]})]})})}),`
`,n(e.h1,{id:"\u501F\u52A9-importmetaglob-\u7F16\u5199\u81EA\u52A8\u8DEF\u7531\u811A\u672C",children:"\u501F\u52A9 import.meta.glob \u7F16\u5199\u81EA\u52A8\u8DEF\u7531\u811A\u672C"}),`
`,r(e.blockquote,{children:[`
`,r(e.p,{children:["\u811A\u672C\u6E90\u7801\uFF1A",n(e.a,{href:"https://github.com/3fuyang/3fuyang.github.io/blob/master/src/routes/auto-routes.ts",children:"auto-routes.ts"})]}),`
`]}),`
`,n(e.h2,{id:"\u80CC\u666F",children:"\u80CC\u666F"}),`
`,r(e.p,{children:["\u81EA\u52A8\u8DEF\u7531\uFF0C\u4E5F\u5C31\u662F\u81EA\u52A8\u8BFB\u53D6",n(e.strong,{children:"\u6307\u5B9A\u76EE\u5F55"}),"\u4E0B\u7684\u6587\u4EF6\uFF0C\u4E3A\u5B83\u4EEC\u751F\u6210",n(e.strong,{children:"\u6307\u5B9A\u73AF\u5883"}),"\u4E0B\u7684\u8DEF\u7531\u5BF9\u8C61\u7684\u529F\u80FD\u3002"]}),`
`,r(e.p,{children:["Flog\uFF08\u5373\u8FD9\u4E2A\u7F51\u7AD9\uFF09\u4E00\u5F00\u59CB\u662F\u501F\u52A9 ",n(e.a,{href:"https://github.com/hannoeru/vite-plugin-pages",children:"vite-plugin-pages"})," \u8FD9\u6837\u4E00\u4E2A",n(e.strong,{children:"\u96C6\u6210"}),`\u63D2\u4EF6\u6765\u5B9E\u73B0\u81EA\u52A8\u8DEF\u7531\u7684\u3002
\u4E3A\u4E86\u5199 `,n(e.a,{href:"https://3fuyang.github.io/blog/ssg-in-flog#%E8%87%AA%E5%8A%A8%E8%B7%AF%E7%94%B1",children:"Flog \u4E0E SSG"})," \u8FD9\u7BC7\u535A\u5BA2\uFF0C\u6211\u53BB\u67E5\u9605\u4E86\u4E00\u4E9B SSG \u6846\u67B6\u7684\u6587\u6863\uFF0C\u5176\u4E2D\u5728 ",n(e.a,{href:"https://vitepress.vuejs.org/",children:"VitePress"}),`
\u7684\u5B98\u65B9\u6587\u6863\u4E2D\u5F97\u77E5\u5176\u81EA\u52A8\u8DEF\u7531\u662F`,n(e.strong,{children:"\u4EC5\u901A\u8FC7\u4E00\u4E2A\u811A\u672C"}),"\u5B9E\u73B0\u7684\u3002"]}),`
`,n("img",{alt:"flog-and-ssg",src:"/images/import-meta-glob-and-auto-routes/flog-and-ssg.png",className:"invertable"}),`
`,r(e.p,{children:["\u5F53\u7136\uFF0CVitePress \u60F3\u5F3A\u8C03\u7684\u662F\u5B83",n(e.strong,{children:"\u6CA1\u6709\u4F7F\u7528"})," Vue Router \u8FD9\u6837\u96C6\u6210\u7684\u4F9D\u8D56\uFF0C\u800C\u662F\u901A\u8FC7",n(e.strong,{children:"\u539F\u751F"}),"\u7684 history \u5BF9\u8C61\u6216\u5176\u4ED6 API \u5B9E\u73B0\u4E86\u66F4\u4E3A",n(e.strong,{children:"\u8F7B\u91CF\u7EA7"}),`\u7684\u8DEF\u7531\u3002
\u4F46\u6211\u4ECE\u8FD9\u91CC\u53D7\u5230\u7684\u542F\u53D1\u662F\uFF0C\u6211\u4E5F\u53EF\u4EE5\u7F16\u5199\u4E00\u4E2A\u811A\u672C\uFF0C\u5728\u4E0D\u4F7F\u7528`,n(e.code,{children:"vite-plugin-pages"}),"\u8FD9\u6837\u7684\u96C6\u6210\u63D2\u4EF6\u7684\u524D\u63D0\u4E0B\uFF0C\u53BB\u81EA\u52A8\u5730\u751F\u6210\u8DEF\u7531\u3002"]}),`
`,r(e.p,{children:["\u9879\u76EE\u4E2D\uFF0C\u8FD9\u4E2A\u811A\u672C\u7684\u57FA\u672C",n(e.strong,{children:"\u9700\u6C42"}),"\u662F\uFF1A"]}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["\u8BFB\u53D6",n(e.code,{children:"pages"}),"\u76EE\u5F55\u4E0B\u7684\u6240\u6709",n(e.code,{children:".mdx"}),"\u548C",n(e.code,{children:".tsx"}),"\u6587\u4EF6\u3002"]}),`
`,n(e.li,{children:"\u4ECE\u6587\u4EF6\u5BF9\u8C61\u4E2D\u53D6\u5F97\u6587\u4EF6\u8DEF\u5F84\u548C\u5176\u5BFC\u51FA\u7684 React \u7EC4\u4EF6\u3002"}),`
`,r(e.li,{children:["\u6839\u636E\u76EE\u5F55",n(e.strong,{children:"\u8DEF\u5F84"}),"\u548C\u7EC4\u4EF6\u5BF9\u8C61\uFF0C\u5C06\u5B83\u4EEC\u8F6C\u6362\u6210\u4E00\u4E2A\u53EF\u4EE5\u7531",n(e.code,{children:"useRoute()"}),"\u8C03\u7528\u7684\u8DEF\u7531\u5BF9\u8C61\u6570\u7EC4\uFF08Array<RouteObject>\uFF09\u3002"]}),`
`]}),`
`,n(e.p,{children:"\u8FD9\u4E2A\u811A\u672C\u4E3B\u8981\u7531\u4E24\u4E2A\u529F\u80FD\u6784\u6210\uFF1A"}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"\u8BFB\u53D6\u6307\u5B9A\u76EE\u5F55\u6587\u4EF6"}),"\uFF1AVite \u4E3A\u8D44\u6E90\u52A0\u8F7D\u63D0\u4F9B\u4E86 ",n(e.a,{href:"https://vitejs.dev/guide/features.html#glob-import",children:"import.meta.glob"})," API\uFF0C\u53EA\u9700\u4E3A\u5176\u63D0\u4F9B\u76EE\u6807\u6587\u4EF6\u7684",n(e.code,{children:"glob pattern"}),`,
\u5B83\u5C31\u80FD\u8BFB\u53D6\u7B26\u5408\u6761\u4EF6\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u76EE\u6807\u662F JS \u6587\u4EF6\uFF0C\u66F4\u80FD\u5C06\u5176\u4F5C\u4E3A ES Module \u89E3\u6790\u83B7\u53D6\u5176`,n(e.code,{children:"export"}),"\u3002"]}),`
`,r(e.li,{children:[n(e.strong,{children:"\u4ECE\u6587\u4EF6\u5230\u8DEF\u7531"}),"\uFF1A",n(e.code,{children:"import.meta.glob"}),"\u6240\u8FD4\u56DE\u7684\u6587\u4EF6\u7ED3\u6784\u662F",n(e.strong,{children:"\u6241\u5E73"}),"\uFF08flat\uFF09\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u5176\u8F6C\u5316\u6210 RouteObject \u8FD9\u6837\u7684",n(e.strong,{children:"\u6811\u5F62\u7ED3\u6784"}),"\uFF08",n(e.code,{children:"children?: RouteObject[]"}),"\uFF09\u3002"]}),`
`]}),`
`,r(e.p,{children:["\u7B2C\u4E00\u70B9\u901A\u8FC7",n(e.code,{children:"import.meta.glob"}),"\u53EF\u4EE5\u5F88\u8F7B\u677E\u5730\u89E3\u51B3\uFF0C\u90A3\u4E48\u4E3B\u8981\u7684\u96BE\u70B9\u597D\u50CF\u5C31\u6210\u4E86\u4E00\u9053\u7B97\u6CD5\u9898\uFF0C\u5982\u4F55\u5C06",n(e.strong,{children:"\u6570\u7EC4\u8F6C\u5316\u4E3A\u6811"}),"\uFF1F"]}),`
`,n(e.h2,{id:"\u5C06\u6570\u7EC4\u8F6C\u4E3A\u6811",children:"\u5C06\u6570\u7EC4\u8F6C\u4E3A\u6811"}),`
`,r(e.p,{children:["\u7528\u5916\u90E8\u53D8\u91CF",n(e.code,{children:"result: RouteObject[]"}),"\u5B58\u50A8\u6700\u7EC8\u7ED3\u679C\uFF0C\u7B97\u6CD5\u4E3B\u8981\u7528\u5230\u6808\u7684\u601D\u60F3\uFF0C\u5927\u81F4\u601D\u8DEF\u5982\u4E0B\uFF1A"]}),`
`,n("br",{}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:["\u6839\u636E\u6587\u4EF6\u8DEF\u5F84",n(e.code,{children:"path"}),"\uFF0C\u5C06\u7EC4\u4EF6\u6570\u7EC4\uFF08",n(e.code,{children:"{ element: FC, path: string}[]"}),"\uFF09",n(e.strong,{children:"\u6392\u5E8F"}),"\uFF08",n(e.code,{children:"import.meta.glob"}),"\u8FD4\u56DE\u7684\u7ED3\u679C\u5DF2\u662F\u6709\u5E8F\uFF09\uFF1B"]}),`
`,r(e.li,{children:["\u5728\u5FAA\u73AF\u5916\uFF0C\u4F7F\u7528\u4E00\u4E2A\u5916\u90E8",n(e.strong,{children:"\u6808\u578B"}),"\u53D8\u91CF",n(e.code,{children:"currDirs"}),"\u8BB0\u5F55\u4E0A\u4E00\u4E2A\u5DF2\u5904\u7406\u7EC4\u4EF6\u7684",n(e.strong,{children:"\u7236\u8DEF\u7531"}),"\uFF08\u5373\u5305\u542B",n(e.code,{children:"children"}),"\u5C5E\u6027\u7684\u8DEF\u7531\uFF09\uFF1B"]}),`
`,r(e.li,{children:["\u904D\u5386\u6587\u4EF6\u6570\u7EC4\uFF1A",`
`,r(e.ol,{children:[`
`,r(e.li,{children:["\u5BF9\u6BCF\u4E00\u4E2A\u6587\u4EF6\uFF0C\u7528\u5176",n(e.code,{children:"path"}),"\u4ECE\u524D\u5F80\u540E\u5339\u914D",n(e.code,{children:"currDirs"}),"\uFF0C\u8BB0\u5F55\u6700\u5927\u5339\u914D\u7D22\u5F15\uFF1A",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"\u5339\u914D\u6210\u529F\uFF1A\u4E0D\u4F5C\u7279\u6B8A\u5904\u7406;"}),`
`,r(e.li,{children:["\u90E8\u5206\u5339\u914D\u6216\u5339\u914D\u5931\u8D25\uFF1A\u5C06",n(e.code,{children:"currDirs"}),"\u6808\u9876\u5C42\u5339\u914D\u5931\u8D25\u7684\u8DEF\u7531\u5BF9\u8C61\u51FA\u6808\uFF0C\u5982\u679C",n(e.code,{children:"currDirs"}),"\u88AB",n(e.strong,{children:"\u6E05\u7A7A"}),"\uFF0C\u5C06\u5176",n(e.strong,{children:"\u6808\u5E95"}),"\u5143\u7D20\u63A8\u5165",n(e.code,{children:"result"}),"\u4E2D\u3002"]}),`
`]}),`
`]}),`
`,r(e.li,{children:["\u6839\u636E\u8BE5\u6587\u4EF6\u7684",n(e.code,{children:"path"}),"\u7EE7\u7EED\uFF08\u91CD\u65B0\uFF09\u6784\u5EFA",n(e.code,{children:"currDirs"}),";"]}),`
`,r(e.li,{children:["\u4E3A\u6587\u4EF6\u751F\u6210",n(e.code,{children:"RouteObject"}),"\uFF0C\u63A8\u5165\u6808\u9876\u7236\u8DEF\u7531\u7684",n(e.code,{children:"children"}),"\u4E2D\u3002"]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h2,{id:"\u6253\u5305\u4F53\u79EF\u5BF9\u6BD4",children:"\u6253\u5305\u4F53\u79EF\u5BF9\u6BD4"}),`
`,n(e.p,{children:"Before:"}),`
`,n("img",{alt:"before-65-189-785-bytes",src:"/images/import-meta-glob-and-auto-routes/before.png",className:"invertable"}),`
`,n(e.p,{children:"After:"}),`
`,n("img",{alt:"after-65-123-330-bytes",src:"/images/import-meta-glob-and-auto-routes/after.png",className:"invertable"}),`
`,r(e.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u79FB\u9664",n(e.code,{children:"vite-plugin-pages"}),"\u540E\uFF0C\u5E94\u7528\u7684\u6253\u5305\u4F53\u79EF\u4F18\u5316\u4E86\u6574\u6574...",n(e.strong,{children:"64 KB"}),"\uFF01"]})]})}function g(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(i,l)})):i(l)}export{d as date,g as default,s as duration,h as lang,a as path,o as title};
