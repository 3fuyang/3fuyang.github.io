import{a as n,j as l,F as r}from"./index.636dc139.js";const a="Flog \u4E0E SSG",d="2022-08-19T18:07:00.000+00:00",h="zh",t="10min",o="/blog/ssg-in-flog";function c(s){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",strong:"strong",code:"code",ul:"ul",h2:"h2",h3:"h3",blockquote:"blockquote",pre:"pre",span:"span"},s.components);return l(r,{children:[n(e.nav,{className:"toc",children:n(e.ol,{className:"toc-level toc-level-1",children:l(e.li,{className:"toc-item toc-item-h1",children:[n(e.a,{className:"toc-link toc-link-h1",href:"#flog-\u4E0E-ssg",children:"Flog \u4E0E SSG"}),l(e.ol,{className:"toc-level toc-level-2",children:[l(e.li,{className:"toc-item toc-item-h2",children:[n(e.a,{className:"toc-link toc-link-h2",href:"#\u6846\u67B6\u89C6\u70B9\u4E0B-ssg-\u7684\u57FA\u672C\u8981\u7D20",children:"\u6846\u67B6\u89C6\u70B9\u4E0B, SSG \u7684\u57FA\u672C\u8981\u7D20"}),l(e.ol,{className:"toc-level toc-level-3",children:[n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#markdown-\u5904\u7406",children:"markdown \u5904\u7406"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#\u81EA\u52A8\u8DEF\u7531",children:"\u81EA\u52A8\u8DEF\u7531"})})]})]}),l(e.li,{className:"toc-item toc-item-h2",children:[n(e.a,{className:"toc-link toc-link-h2",href:"#mdx-\u4E0E-vite-plugin-pages-\u7684\u52A0\u8F7D\u987A\u5E8F",children:"MDX \u4E0E vite-plugin-pages \u7684\u52A0\u8F7D\u987A\u5E8F"}),l(e.ol,{className:"toc-level toc-level-3",children:[n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#\u7ED3\u8BBA",children:"\u7ED3\u8BBA"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#vite-specific-hooks",children:"Vite specific hooks"})})]})]})]})]})})}),`
`,n(e.h1,{id:"flog-\u4E0E-ssg",children:"Flog \u4E0E SSG"}),`
`,l(e.p,{children:["\u4E2A\u4EBA\u535A\u5BA2, \u548C\u5B98\u65B9\u6587\u6863\u4E00\u6837, \u662F ",n(e.strong,{children:"SSG(Static Site Generator)"})," \u7684\u5178\u578B\u7528\u4F8B\u3002"]}),`
`,l(e.p,{children:["\u4F46\u5199\u8FD9\u4E2A\u535A\u5BA2\u65F6\u6CA1\u6709\u7528 ",n(e.a,{href:"https://vitepress.vuejs.org/",children:"Vitepress"})," \u3001 ",n(e.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),` \u7B49 SSG \u6846\u67B6,
\u4E00\u65B9\u9762\u662F\u4E3A\u4E86\u7EC3\u4E60\u5199 React, \u53E6\u4E00\u65B9\u9762\u662F\u5BF9 SSG \u6BD4\u8F83\u611F\u5174\u8DA3, \u60F3\u5BF9\u5176\u6709\u66F4\u591A\u7684\u4E86\u89E3\u3002`]}),`
`,l(e.p,{children:["\u4F46\u8FD9\u4E2A\u535A\u5BA2\u4E5F\u4E0D\u662F\u624B\u6413",n(e.code,{children:"markdown-it"}),"\u90A3\u79CD\u786C\u6838\u3001\u6216\u8005\u8BF4\u6DF1\u5165\u7684\u9879\u76EE, \u800C\u662F\u7B80\u5355\u7684\u5BF9\u4E00\u4E9B\u63D0\u4F9B SSG \u5173\u952E\u529F\u80FD\u7684\u63D2\u4EF6\u7684\u96C6\u6210\u800C\u5DF2\u3002"]}),`
`,n(e.p,{children:"\u5728\u5177\u4F53\u9648\u8FF0\u4E4B\u524D, \u5148\u5217\u4E3E\u4E00\u4E0B\u9879\u76EE\u4E2D\u7528\u5230\u7684\u4E24\u4E2A\u5173\u952E\u63D2\u4EF6\uFF1A"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"vite-plugin-pages"})," - \u81EA\u52A8\u751F\u6210\u8DEF\u7531\uFF1B"]}),`
`,l(e.li,{children:[n(e.code,{children:"@mdx-js/rollup"})," - \u8D1F\u8D23\u5904\u7406(\u89E3\u6790\u3001\u6E32\u67D3) markdown \u6587\u4EF6\u3002"]}),`
`]}),`
`,n(e.h2,{id:"\u6846\u67B6\u89C6\u70B9\u4E0B-ssg-\u7684\u57FA\u672C\u8981\u7D20",children:"\u6846\u67B6\u89C6\u70B9\u4E0B, SSG \u7684\u57FA\u672C\u8981\u7D20"}),`
`,n(e.p,{children:"\u8FD9\u91CC\u7684\u6846\u67B6\u6307\u7684\u662F bundler(webpack, rollup ...) \u4EE5\u53CA\u4E1A\u52A1\u6846\u67B6(Vue, React ...), \u5B83\u4EEC\u5DF2\u7ECF\u89E3\u51B3\u4E86\u9879\u76EE\u6784\u5EFA\u4E0E\u7528\u6237\u4EA4\u4E92\u7684\u9700\u6C42\u3002"}),`
`,l(e.p,{children:["\u5728\u5B83\u4EEC\u7684\u57FA\u7840\u4E0A, \u6211\u8BA4\u4E3A\u4E00\u4E2A SSG \u5E94\u7528\u8FD8\u5E94\u5177\u5907\u7684\u57FA\u672C\u8981\u7D20\u662F\uFF1A",n(e.strong,{children:"markdown \u5904\u7406(markdown processing)"})," \u548C ",n(e.strong,{children:"\u81EA\u52A8\u8DEF\u7531(auto routes generation)"}),"\u3002"]}),`
`,l(e.p,{children:["\u5728\u5199\u5230\u201C\u57FA\u672C\u8981\u7D20\u201D\u65F6, \u6211\u60F3\u5230 ",n(e.strong,{children:"basic features"})," \u548C ",n(e.strong,{children:"minimum requirements"}),` \u4E24\u79CD\u63CF\u8FF0, \u6211\u8BA4\u4E3A\u5176\u4E2D minimum requirements \u66F4\u4E3A\u5408\u9002,
\u6216\u8005\u629B\u9664\u4E2D\u6587\u539F\u610F, \u7528 `,n(e.strong,{children:"additional requirements"})," \u6765\u8868\u793A\u6846\u67B6\u7684\u5728\u573A\u3002"]}),`
`,n(e.p,{children:`\u8FD9\u4E24\u4E2A\u7279\u6027\u7ED3\u5408\u5C31\u80FD\u5F62\u6210\u4E00\u4E2A\u5178\u578B\u7684\u7528\u4F8B: \u5728\u4E00\u4E2A\u6307\u5B9A\u7684\u76EE\u5F55\u4E0B, \u89E3\u6790\u6240\u6709 markdown \u6587\u4EF6\u5E76\u6E32\u67D3\u4E3A DOM(\u6216 VNode \u7B49\u8FC7\u6E21\u5F62\u5F0F),
\u5E76\u81EA\u52A8\u4E3A\u8FD9\u4E9B\u5143\u7D20\u751F\u6210\u4F9B\u6846\u67B6\u4F7F\u7528\u7684\u8DEF\u7531\u3002`}),`
`,n(e.p,{children:"\u542C\u4E0A\u53BB\u5C31\u548C\u5404\u79CD SSG \u6846\u67B6 playground \u4E2D\u6700\u7B80\u5355\u7684\u4F8B\u5B50\u5927\u5DEE\u4E0D\u5DEE\u4E86, \u672C\u6587\u7684\u63A2\u8BA8\u5927\u6982\u4E5F\u5C31\u5230\u5179\u8303\u56F4\u3002"}),`
`,n(e.h3,{id:"markdown-\u5904\u7406",children:"markdown \u5904\u7406"}),`
`,l(e.p,{children:["\u4E0D\u4E00\u5B9A\u662F markdown, \u53EA\u8981\u6709\u529E\u6CD5",n(e.strong,{children:"\u5904\u7406"}),", \u4F60\u53EF\u4EE5\u7528\u4EFB\u4F55\u8BED\u8A00\u7F16\u5199\u535A\u5BA2\u7684\u6587\u7AE0, \u4F46 markdown \u65E0\u7591\u662F\u6700\u4E3A\u6D41\u884C\u7684\u4E00\u5458, \u5B83\u5F97\u5230\u4E86\u7EDD\u5927\u591A\u6570\u751F\u6001(\u6765\u81EA\u5B98\u65B9\u6216\u793E\u533A)\u7684\u652F\u6301\u3002"]}),`
`,l(e.p,{children:[n(e.strong,{children:"\u5904\u7406"}),"\u53EF\u4EE5\u5206\u4E3A",n(e.strong,{children:"\u89E3\u6790"}),"\u548C",n(e.strong,{children:"\u6E32\u67D3"}),"\u4E24\u6B65\uFF1A"]}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.strong,{children:"\u89E3\u6790"})," - \u6839\u636E\u539F\u59CB\u6587\u672C\u751F\u6210 AST\u3002"]}),`
`,l(e.li,{children:[n(e.strong,{children:"\u6E32\u67D3"})," - \u6839\u636E AST \u751F\u6210 HTML \u6216\u8FC7\u6E21\u4EA7\u7269\u3002"]}),`
`]}),`
`,l(e.p,{children:["\u9274\u4E8E React \u7684\u4F7F\u7528\u9700\u6C42, \u535A\u5BA2\u9009\u62E9 ",n(e.a,{href:"https://mdxjs.com/",children:"MDX"})," \u4F5C\u4E3A markdown \u6587\u4EF6\u7684\u5904\u7406\u5F15\u64CE\u3002"]}),`
`,l(e.blockquote,{children:[`
`,n(e.p,{children:"\u5F53\u7136, \u9664\u4E86 React \u5916, MDX \u4E5F\u53EF\u4EE5\u7528\u4E8E\u5176\u4ED6\u4EFB\u4F55\u652F\u6301 JSX \u7684\u6846\u67B6\u3002"}),`
`]}),`
`,l(e.p,{children:["MDX \u4F9D\u8D56 ",n(e.a,{href:"https://github.com/remarkjs/remark",children:"remark"})," \u548C ",n(e.a,{href:"https://github.com/rehypejs/rehype",children:"rehype"})," \u6765\u8F6C\u8BD1 markdown\uFF1A"]}),`
`,n(e.p,{children:"remark \u8D1F\u8D23\u751F\u6210 AST , MDX \u4F9D\u636E AST \u751F\u6210\u539F\u59CB\u7684 HTML \u6587\u672C, \u518D\u4EA4\u7531 rehype \u89E3\u6790\u6210\u76EE\u6807\u4EA7\u7269(\u5728\u8BE5\u9879\u76EE\u4E2D, \u5373 React Components)\u3002"}),`
`,n(e.p,{children:`\u6709\u8DA3\u7684\u662F, React Component(\u6216\u8005\u5176\u4ED6\u6846\u67B6\u7684 VDOM) \u867D\u7136\u53EF\u4EE5\u89C6\u4F5C HTML(framework output) \u7684\u4E00\u79CD\u8FC7\u6E21\u6027\u4EA7\u7269, \u4F46\u5176\u5B9E\u5728 MDX \u5904\u7406\u5468\u671F\u4E2D,
\u5B83\u662F\u5148\u7531 HTML(mdx output) \u8F6C\u5316\u6210\u7684, \u7528\u201C\u540C\u6001\u201D\u6765\u5F62\u5BB9\u6216\u8BB8\u66F4\u4E3A\u6070\u5F53\u3002`}),`
`,l(e.p,{children:["\u867D\u7136",n(e.code,{children:".mdx"}),"\u6587\u4EF6\u652F\u6301 inline react, \u8FD9\u4F7F\u5F97",n(e.code,{children:".mdx"}),"\u7684\u7F16\u5199\u6709\u83AB\u5927\u7684\u6F5C\u80FD, \u4F46\u535A\u5BA2\u6587\u7AE0\u57FA\u672C\u4E0A\u5C31\u662F\u7528 ",n(e.a,{href:"https://commonmark.org/",children:"CommonMark"}),` \u5199\u7684,
\u6240\u4EE5\u6211\u9009\u62E9\u7528\u5404\u79CD MDX plugins \u5BF9\u8F6C\u8BD1\u7ED3\u679C\u8FDB\u884C\u9884\u5904\u7406, \u8FD9\u79CD`,n(e.strong,{children:"\u9759\u6001"}),"\u7684\u65B9\u5F0F\u4E5F\u7B26\u5408 SSG \u7684\u7406\u5FF5\u3002"]}),`
`,n(e.p,{children:"\u4E0B\u9762\u5217\u4E3E\u4E86\u8BE5\u9879\u76EE\u4F7F\u7528\u5230\u7684 MDX \u63D2\u4EF6\uFF1A"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"remark-gfm - \u652F\u6301 GFM(Github Flavored Markdown)\u3002"}),`
`,l(e.li,{children:["remark-mdx-frontmatter & remark-frontmatter - \u89E3\u6790\u6587\u672C\u7684",n(e.code,{children:"frontmatter"}),", \u5E76\u5C06\u5176\u4EE5 ESM \u7684\u98CE\u683C\u5BFC\u51FA\u3002"]}),`
`,l(e.li,{children:["remark-a11y-emoji - \u4E3A emoji \u6DFB\u52A0",n(e.code,{children:"aria-"}),"\u5C5E\u6027, \u4F7F\u5176\u6210\u4E3A accessible emoji\u3002"]}),`
`,l(e.li,{children:["rehype-highlight - \u4EE5",n(e.code,{children:"highlight.js"}),"\u7684\u98CE\u683C, \u4E3A HTML \u4E2D\u5404\u5143\u7D20\u6DFB\u52A0",n(e.code,{children:"class"}),"\u540D, \u7136\u540E\u4FBF\u53EF\u5F15\u5165\u81EA\u5B9A\u4E49\u7684",n(e.code,{children:".css"}),` stylize \u81EA\u5DF1\u7684\u535A\u5BA2\u6587\u7AE0,
\u5176\u4E2D\u5F53\u7136\u5305\u62EC\u4EE3\u7801\u7684`,n(e.strong,{children:"\u8BED\u6CD5\u9AD8\u4EAE"}),"\u3002"]}),`
`,l(e.li,{children:["rehype-slug - \u4E3A title \u5143\u7D20\u6DFB\u52A0",n(e.code,{children:"id"}),"\u5C5E\u6027\u3002"]}),`
`,n(e.li,{children:"rehype-toc - \u4E3A\u6587\u672C\u751F\u6210 TOC(Table of Content)\u3002"}),`
`]}),`
`,l(e.p,{children:["\u524D\u7F00\u4EE3\u8868\u63D2\u4EF6 hook \u8FDB\u4E86\u54EA\u4E2A\u9636\u6BB5, \u53EF\u4EE5\u770B\u51FA, ",n(e.code,{children:"remark"}),"\u63D2\u4EF6\u591A\u8D1F\u8D23 AST \u76F8\u5173\u7684\u5DE5\u4F5C, \u800C",n(e.code,{children:"rehype"}),`\u4E2D\u53EF\u5BF9 HTML \u8FDB\u884C\u5904\u7406, \u8FD9\u79CD\u5904\u7406\u8F83\u4E8E\u5B57\u7B26\u4E32\u5F0F,
\u66F4\u53EF\u80FD\u662F DOM \u5F0F\u7684\u3002`]}),`
`,n(e.h3,{id:"\u81EA\u52A8\u8DEF\u7531",children:"\u81EA\u52A8\u8DEF\u7531"}),`
`,n(e.p,{children:"SSG \u81EA\u52A8\u8DEF\u7531\u7684\u601D\u8DEF\u5F88\u7B80\u5355, \u5C31\u662F\u7528\u811A\u672C\u5728\u7F16\u8BD1\u65F6\u8BFB\u53D6\u67D0\u4E9B\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6(\u8BFB\u53D6\u54EA\u4E9B\u76EE\u5F55\u3001\u54EA\u4E9B\u6587\u4EF6\u5B8C\u5168\u81EA\u5B9A\u4E49\u5316), \u7136\u540E\u751F\u6210\u5BF9\u5E94\u8DEF\u7531\u5373\u53EF\u3002"}),`
`,l(e.p,{children:["\u8FD9\u4E2A\u9700\u6C42\u5229\u7528 Node.js \u7684",n(e.strong,{children:"fs"}),"\u6A21\u5757\u5F88\u5BB9\u6613\u5B9E\u73B0\uFF0C\u800C\u4E14\u5982\u679C\u4F60\u4F7F\u7528 Vite\uFF0C\u90A3\u4E48",n(e.code,{children:"import.meta.glob"}),"\u4F1A\u4F7F\u5B83\u66F4\u52A0\u5BB9\u6613\u3002"]}),`
`,l(e.p,{children:["\u8FD9\u53EF\u80FD\u4E5F\u662F\u4E3A\u4EC0\u4E48 Vitepress \u7684\u8DEF\u7531\u751F\u6210\u90FD\u4E0D\u7528 ",n(e.a,{href:"https://router.vuejs.org/",children:"Vue Router"}),`,
\u800C\u662F\u53E6\u5199\u4E00\u4E2A\u3000LOC < 200\u3000\u7684\u811A\u672C\u3002`]}),`
`,n("img",{alt:"vitepress-router",src:"/images/ssg-in-flog/vitepress-router.png","aria-hidden":"true",className:"invertable"}),`
`,n(e.p,{children:"\u8FD9\u5BF9 React \u6765\u8BF4\u5E94\u8BE5\u66F4\u4E3A\u7B80\u5355, \u56E0\u4E3A React Router \u7684\u5B9E\u73B0\u6BD4 Vue Router \u66F4\u4E3A\u7B80\u6D01, \u867D\u7136\u8FD9\u4E5F\u610F\u5473\u7740\u5F00\u53D1\u8005\u9700\u8981\u81EA\u5DF1\u505A\u66F4\u591A\u7684 dirty work\u3002"}),`
`,l(e.p,{children:["\u672C\u9879\u76EE\u4F7F\u7528 ",n(e.a,{href:"https://github.com/hannoeru/vite-plugin-pages",children:"vite-plugin-pages"})," \u8BFB\u53D6",n(e.code,{children:"/pages"}),"\u76EE\u5F55\u4E0B\u6240\u6709\u540E\u7F00\u540D\u4E3A",n(e.code,{children:".tsx"}),"\u6216",n(e.code,{children:".mdx"}),`\u7684\u6587\u4EF6,
\u8BE5\u63D2\u4EF6\u672C\u8EAB\u5C31\u652F\u6301\u751F\u6210 React Router \u5F0F\u7684\u8DEF\u7531\u3002`]}),`
`,l(e.p,{children:["\u9879\u76EE\u5BF9",n(e.code,{children:"vite-plugin-pages"}),"\u751F\u6210\u7684\u8DEF\u7531\u96C6\u8FDB\u884C\u4E00\u5B9A\u7684\u5904\u7406, \u5305\u62EC\u7528",n(e.code,{children:'<article class="prose" />'}),"\u5305\u88C5\u6587\u7AE0 JSX, \u4F5C\u4E3A ",n(e.strong,{children:"landmark"})," \u4E14\u65B9\u4FBF",n(e.strong,{children:"\u5F15\u5165\u6837\u5F0F"}),"\u3002"]}),`
`,l(e.p,{children:["\u4F46\u8FD9\u4E2A\u5305\u88C5\u662F\u6709\u6761\u4EF6\u7684, \u56E0\u4E3A\u751F\u6210\u7684\u8DEF\u7531\u96C6\u5F88\u53EF\u80FD\u662F\u4E00\u4E2A",n(e.strong,{children:"\u5D4C\u5957\u8DEF\u7531"}),", \u9700\u8981\u901A\u8FC7",n(e.code,{children:"RouteObject"}),"\u5B9E\u4F8B\u7684",n(e.code,{children:"children"}),"\u548C",n(e.code,{children:"element"}),"\u5C5E\u6027\u8FDB\u884C\u533A\u5206, \u53EF\u4EE5\u4F7F\u7528\u9012\u5F52\u5B9E\u73B0\u3002"]}),`
`,l(e.p,{children:["\u8FD9\u91CC\u63D2\u4E00\u4E2A\u4E0E\u4E0A\u4E00\u8282\u6709\u5173\u7684\u8BDD\u9898, SSG \u4E00\u4E2A\u91CD\u8981\u7684\u529F\u80FD\u70B9\u662F ",n(e.strong,{children:"\u9875\u9762\u6807\u9898\u968F\u8DEF\u7531\u6539\u53D8"}),", \u4F46\u7531\u4E8E",n(e.code,{children:"vite-plugin-pages"}),`\u4E0D\u63D0\u4F9B\u76F8\u5173 hook,
\u6211\u4EEC\u4E0D\u80FD\u76F4\u63A5\u5728\u63D2\u4EF6\u7684`,n(e.code,{children:"config options"}),`\u4E2D\u4E3A\u8DEF\u7531\u5BF9\u5E94\u7684\u7EC4\u4EF6\u6DFB\u52A0\u76D1\u542C\u5668,
\u6240\u4EE5\u8981\u7528\u5230 markdown \u7684 frontmatter \u5728\u7F16\u8BD1\u65F6\u83B7\u53D6\u6587\u7AE0\u7684\u5143\u4FE1\u606F(meta info, \u5305\u62EC\u6807\u9898\u3001\u8DEF\u7531\u3001\u65F6\u95F4\u7B49\u4EFB\u4F55\u4FE1\u606F),
\u7136\u540E\u5C06\u63D2\u4EF6\u8FD4\u56DE\u7684\u8DEF\u7531\u5305\u88C5\u8FDB\u5E26\u6709\u4E8B\u4EF6\u76D1\u542C\u5668\u7684 HOC, \u5373\u4E0A\u9762\u63D0\u5230\u7684`,n(e.code,{children:'<article class="prose" ... />'}),"\u4E2D\u3002"]}),`
`,n(e.p,{children:"markdown \u7684 frontmatter \u662F\u4E00\u4E2A\u5F88\u5F3A\u529B\u7684\u7279\u6027, \u5B83\u4F20\u9012\u7684 meta \u4FE1\u606F\u5728\u9879\u76EE\u4E2D\u4E5F\u7528\u4E8E\u535A\u5BA2\u76EE\u5F55\u7684\u6E32\u67D3, \u9879\u76EE\u4E2D\u4E0E frontmatter \u76F8\u5173\u7684\u529F\u80FD\u90FD\u5199\u6210\u4E86 React hooks\u3002"}),`
`,n(e.h2,{id:"mdx-\u4E0E-vite-plugin-pages-\u7684\u52A0\u8F7D\u987A\u5E8F",children:"MDX \u4E0E vite-plugin-pages \u7684\u52A0\u8F7D\u987A\u5E8F"}),`
`,l(e.blockquote,{children:[`
`,n(e.p,{children:"\u672C\u8282\u5185\u5BB9\u4E0E SSG \u65E0\u5173, \u800C\u662F\u5173\u4E8E Vite \u63D2\u4EF6\u7684\u52A0\u8F7D"}),`
`]}),`
`,l(e.p,{children:["React \u73AF\u5883\u4E0B\u7684",n(e.code,{children:"vite-plugin-pages"}),"\u5C06\u751F\u6210 React Router \u5F0F\u7684 routes, \u90A3\u4E48\u5176\u626B\u63CF\u7684\u6587\u4EF6\u5E94\u8BE5",n(e.strong,{children:"\u5DF2\u7ECF"}),"\u662F",n(e.code,{children:"js"}),", ",n(e.code,{children:"ts"}),", ",n(e.code,{children:"tsx"}),`\u4EE3\u7801,
\u90A3\u4E48\u5728\u6B64\u4E4B\u524D`,n(e.code,{children:".mdx"}),"\u5E94\u8BE5\u5DF2\u7ECF\u88AB",n(e.code,{children:"@mdx-js/rollup"}),"\u8F6C\u8BD1\u6210",n(e.code,{children:"js"}),"\u4EE3\u7801\u3002"]}),`
`,l(e.p,{children:["\u76F4\u89C2\u4E0A, \u5728 Vite Config \u7684",n(e.code,{children:"plugins"}),"\u4E2D",n(e.code,{children:"@mdx-js/rollup"}),"\u5E94\u8BE5\u5148\u4E8E",n(e.code,{children:"vite-plugin-pages"}),", \u4F46\u5B9E\u8DF5\u8BC1\u660E\u4E24\u4E2A\u63D2\u4EF6\u7684\u987A\u5E8F\u5E76",n(e.strong,{children:"\u4E0D\u5F71\u54CD\u6700\u7EC8\u6548\u679C"}),"\u3002"]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:["\u8FD9\u91CC\u4E0D\u8003\u8651",n(e.code,{children:"vite-plugin-pages"}),"\u5177\u5907\u5148\u751F\u6210\u67D0\u79CD\u8DEF\u7531\u96CF\u5F62(\u5176\u8DEF\u7531\u4E0D\u5305\u542B\u5177\u4F53\u5143\u7D20, \u53EF\u80FD\u662F\u6811\u5F62\u6216\u67D0\u79CD\u53EF\u88AB\u89E3\u6790\u4E3A\u6811\u5F62\u7684\u5F62\u5F0F), \u7B49\u5F85",n(e.code,{children:".mdx"}),"\u6587\u4EF6\u88AB\u8F6C\u8BD1\u540E\u518D\u751F\u6210\u8DEF\u7531\u7684",n(e.strong,{children:"\u5F02\u6B65"}),"\u7279\u6027, \u56E0\u4E3A\u8003\u8651\u5230\u5404\u79CD\u8F6C\u8BD1\u63D2\u4EF6\u4E0D\u4E00\u5B9A\u90FD\u662F\u7EAF\u51C0(pure)\u7684, \u8FD9\u4F1A\u4F7F\u5F97\u63D2\u4EF6\u7684\u8BBE\u8BA1\u53D8\u5F97\u975E\u5E38\u8026\u5408\u3002"]}),`
`]}),`
`,l(e.p,{children:["\u663E\u7136, \u8FD9\u4E24\u4E2A\u63D2\u4EF6\u4F5C\u7528\u4E8E\u6574\u4E2A\u5E94\u7528 build \u8FC7\u7A0B\u4E2D\u7684",n(e.strong,{children:"\u4E0D\u540C\u9636\u6BB5"}),"\u3002"]}),`
`,l(e.p,{children:[n(e.code,{children:"@mdx-js/rollup"}),"\u5B9A\u4E49\u7684 plugin \u4F7F\u7528\u5230 build hooks \u4E2D\u7684",n(e.code,{children:"transform"}),", \u5B83\u7528\u4E8E",n(e.strong,{children:"\u8F6C\u6362"}),"\u72EC\u7ACB\u7684\u6A21\u5757(\u5373\u67D0\u79CD\u8BED\u8A00\u7F16\u5199\u7684\u6587\u4EF6), \u53EF\u8FD4\u56DE\u6807\u51C6 AST\u3002"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-comment",children:"// @mdx-js\\rollup\\lib\\index.js"}),`

{
  `,n(e.span,{className:"hljs-attr",children:"name"}),": ",n(e.span,{className:"hljs-string",children:"'@mdx-js/rollup'"}),`,
  `,n(e.span,{className:"hljs-keyword",children:"async"})," ",n(e.span,{className:"hljs-title function_",children:"transform"}),"(",n(e.span,{className:"hljs-params",children:"value, path"}),`) {
    `,n(e.span,{className:"hljs-keyword",children:"const"})," file = ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"VFile"}),`({value, path})

    `,n(e.span,{className:"hljs-keyword",children:"if"}),` (
      file.`,n(e.span,{className:"hljs-property",children:"extname"}),` &&
      `,n(e.span,{className:"hljs-title function_",children:"filter"}),"(file.",n(e.span,{className:"hljs-property",children:"path"}),`) &&
      extnames.`,n(e.span,{className:"hljs-title function_",children:"includes"}),"(file.",n(e.span,{className:"hljs-property",children:"extname"}),`)
    ) {
      `,n(e.span,{className:"hljs-keyword",children:"const"})," compiled = ",n(e.span,{className:"hljs-keyword",children:"await"})," ",n(e.span,{className:"hljs-title function_",children:"process"}),`(file)
      `,n(e.span,{className:"hljs-keyword",children:"return"})," {",n(e.span,{className:"hljs-attr",children:"code"}),": ",n(e.span,{className:"hljs-title class_",children:"String"}),"(compiled.",n(e.span,{className:"hljs-property",children:"value"}),"), ",n(e.span,{className:"hljs-attr",children:"map"}),": compiled.",n(e.span,{className:"hljs-property",children:"map"}),`}
      `,n(e.span,{className:"hljs-comment",children:"// V8 on Erbium."}),`
      `,n(e.span,{className:"hljs-comment",children:"/* c8 ignore next 2 */"}),`
    }
  }
}

`]})}),`
`,l(e.p,{children:["\u800C",n(e.code,{children:"vite-plugin-pages"}),"\u4F7F\u7528\u5230\u7684 hooks \u5305\u62EC\u6765\u81EA rollup \u7684",n(e.code,{children:"resolveId"}),"\u3001",n(e.code,{children:"load"}),`, \u4EE5\u53CA vite
\u72EC\u6709\u7684`,n(e.code,{children:"configResolved"}),"\u3001",n(e.code,{children:"configureServer"}),", \u540C\u65F6\u901A\u8FC7",n(e.code,{children:'enforce: "pre"'}),"\u6307\u5B9A\u63D2\u4EF6\u5728 vite core plugins ",n(e.strong,{children:"\u4E4B\u524D"}),"\u8FD0\u884C\u3002"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-comment",children:"// vite-plugin-pages\\dist\\index.js"}),`

{
    `,n(e.span,{className:"hljs-attr",children:"name"}),": ",n(e.span,{className:"hljs-string",children:'"vite-plugin-pages"'}),`,
    `,n(e.span,{className:"hljs-attr",children:"enforce"}),": ",n(e.span,{className:"hljs-string",children:'"pre"'}),", ",n(e.span,{className:"hljs-comment",children:"// runs before vite core plugins"}),`
    `,n(e.span,{className:"hljs-keyword",children:"async"})," ",n(e.span,{className:"hljs-title function_",children:"configResolved"}),"(",n(e.span,{className:"hljs-params",children:"config"}),`) {
      `,n(e.span,{className:"hljs-comment",children:"// ..."}),`
    },
    `,n(e.span,{className:"hljs-attr",children:"api"}),`: {
      `,n(e.span,{className:"hljs-title function_",children:"getResolvedRoutes"}),"(",n(e.span,{className:"hljs-params"}),`) {
        `,n(e.span,{className:"hljs-keyword",children:"return"})," ctx.",n(e.span,{className:"hljs-property",children:"options"}),".",n(e.span,{className:"hljs-property",children:"resolver"}),".",n(e.span,{className:"hljs-title function_",children:"getComputedRoutes"}),`(ctx)
      }
    },
    `,n(e.span,{className:"hljs-title function_",children:"configureServer"}),"(",n(e.span,{className:"hljs-params",children:"server"}),`) {
      ctx.`,n(e.span,{className:"hljs-title function_",children:"setupViteServer"}),`(server)
    },
    `,n(e.span,{className:"hljs-title function_",children:"resolveId"}),"(",n(e.span,{className:"hljs-params",children:"id"}),`) {
      `,n(e.span,{className:"hljs-comment",children:"// ..."}),`
    },
    `,n(e.span,{className:"hljs-keyword",children:"async"})," ",n(e.span,{className:"hljs-title function_",children:"load"}),"(",n(e.span,{className:"hljs-params",children:"id"}),`) {
      `,n(e.span,{className:"hljs-keyword",children:"const"}),` {
        moduleId,
        pageId
      } = `,n(e.span,{className:"hljs-title function_",children:"parsePageRequest"}),`(id)
      `,n(e.span,{className:"hljs-keyword",children:"if"})," (moduleId === ",n(e.span,{className:"hljs-variable constant_",children:"MODULE_ID_VIRTUAL"}),`
        && pageId
        && ctx.`,n(e.span,{className:"hljs-property",children:"options"}),".",n(e.span,{className:"hljs-property",children:"moduleIds"}),".",n(e.span,{className:"hljs-title function_",children:"includes"}),`(pageId))
        `,n(e.span,{className:"hljs-keyword",children:"return"})," ctx.",n(e.span,{className:"hljs-title function_",children:"resolveRoutes"}),`();
      `,n(e.span,{className:"hljs-keyword",children:"if"})," (id === ",n(e.span,{className:"hljs-variable constant_",children:"ROUTE_BLOCK_ID_VIRTUAL"}),`) {
        `,n(e.span,{className:"hljs-keyword",children:"return"}),` {
          `,n(e.span,{className:"hljs-attr",children:"code"}),": ",n(e.span,{className:"hljs-string",children:'"export default {};"'}),`,
          `,n(e.span,{className:"hljs-attr",children:"map"}),": ",n(e.span,{className:"hljs-literal",children:"null"}),`
        }
      }
      `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-literal",children:"null"}),`
    }
  }

`]})}),`
`,l(e.p,{children:["\u6211\u4EEC\u4E3B\u8981\u8003\u5BDF Rollup build hooks, Vite \u5B98\u65B9\u6587\u6863\u663E\u793A\uFF1A",n(e.code,{children:"vite-plugin-pages"}),"\u7684",n(e.code,{children:"resolveId"}),"\u548C",n(e.code,{children:"load"}),"\u4F1A\u5728",n(e.code,{children:"@mdx-js/rollup"}),"\u7684",n(e.code,{children:"transform"}),`\u4E4B\u524D\u6267\u884C,
\u4E14\u5B83\u4EEC\u5C06\u5728`,n(e.strong,{children:"\u6BCF\u6B21\u8BF7\u6C42\u6A21\u5757"}),"\u65F6\u88AB\u8C03\u7528\u3002"]}),`
`,n("img",{alt:"vite-universal-plugins",src:"/images/ssg-in-flog/vite-universal-plugins.png",className:"invertable"}),`
`,l(e.p,{children:['\u8FD9\u4E0D\u7B26\u5408\u6211\u4EEC "\u5148\u89E3\u6790',n(e.code,{children:".mdx"}),'\u6587\u4EF6\uFF0C\u518D\u751F\u6210 React \u8DEF\u7531" \u7684\u76F4\u89C2\u60F3\u6CD5\uFF0C']}),`
`,n("img",{alt:"rollup-plugin-hooks",src:"/images/ssg-in-flog/rollup-plugin-hooks.png",className:"invertable"}),`
`,n("img",{alt:"figure-label",src:"/images/ssg-in-flog/figure-label.png",className:"invertable"}),`
`,l(e.p,{children:["\u4E0A\u56FE\u4E2D\uFF0CRollup \u7684\u5B98\u65B9\u6587\u6863\u6307\u51FA build hooks \u6709\u591A\u79CD\u7C7B\u578B\uFF0C\u5176\u4E0D\u540C\u4E4B\u5904\u4E3B\u8981\u4F53\u73B0\u5728",n(e.strong,{children:"\u5F02\u6B65\u3001\u8C03\u5EA6"}),"\u4E0A\uFF1A"]}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"resolveId"}),"\u548C",n(e.code,{children:"load"}),"\u90FD\u662F",n(e.code,{children:"first"}),`\u7C7B\u578B\u7684 hook, \u82E5\u6709\u591A\u4E2A\u63D2\u4EF6\u5B9E\u73B0\u4E86\u5B83\u4EEC, \u90A3\u8FD9\u4E9B hooks \u5C06\u4F9D\u6B21\u6267\u884C,
\u76F4\u5230\u67D0\u4E00 hook \u8FD4\u56DE`,n(e.strong,{children:"\u975E"}),n(e.code,{children:"undefined"}),"\u6216",n(e.code,{children:"null"}),"\u503C\u3002"]}),`
`,l(e.li,{children:[n(e.code,{children:"transform"}),"\u5219\u662F",n(e.code,{children:"sequential"}),"\u7C7B\u578B\u7684 hook, \u82E5\u6709\u591A\u4E2A\u63D2\u4EF6\u5B9E\u73B0\u8FD9\u4E00 hook, \u5B83\u4EEC\u5C06\u4F9D\u6B21",n(e.strong,{children:"\u963B\u585E\u3001\u4E32\u884C"}),"\u5730\u6267\u884C\u3002"]}),`
`]}),`
`,l(e.p,{children:[n(e.code,{children:"first"}),"\u7C7B\u578B\u7684 hooks \u662F\u975E\u963B\u585E\u5F0F\u7684\uFF0C\u6240\u4EE5",n(e.code,{children:"load"}),"\u9047\u5230",n(e.code,{children:"await"}),"\u8FD9\u6837\u7684\u5F02\u6B65\u64CD\u4F5C\u65F6\uFF0C\u5C31\u4F1A\u6B63\u5E38\u8DF3\u51FA\u5F53\u524D\u6267\u884C\u7684 hook\u3002"]}),`
`,l(e.p,{children:[n(e.code,{children:"vite-plugin-pages"}),"\u751F\u6210\u7684\u8DEF\u7531\u9700\u8981\u901A\u8FC7",n(e.code,{children:"import routes from '~react-pages'"}),`\u7684\u65B9\u5F0F\u5F15\u5165,
\u5BF9\u8BE5\u6A21\u5757\u7684\u8BF7\u6C42`,n(e.strong,{children:"\u542F\u52A8"}),`\u4E86\u81EA\u52A8\u8DEF\u7531\u7684\u751F\u6210\uFF0C\u5728\u6307\u5B9A\u76EE\u5F55\u7684\u8DEF\u7531\u5B8C\u5168\u751F\u6210\u540E,
\u518D\u5C06\u5F62\u5F0F\u5982\u4E0B\u7684\u4EE3\u7801(client)\u4EE5\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u4F20\u9012\u7ED9`,n(e.code,{children:"transform"}),"\uFF1A"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"import"})," ",n(e.span,{className:"hljs-title class_",children:"React"})," ",n(e.span,{className:"hljs-keyword",children:"from"})," ",n(e.span,{className:"hljs-string",children:"'react'"}),`
`,n(e.span,{className:"hljs-keyword",children:"import"})," __pages_import_0__ ",n(e.span,{className:"hljs-keyword",children:"from"})," ",n(e.span,{className:"hljs-string",children:"'/pages/index.mdx'"}),`

`,n(e.span,{className:"hljs-keyword",children:"const"})," __pages_import_1__ = ",n(e.span,{className:"hljs-title class_",children:"React"}),".",n(e.span,{className:"hljs-title function_",children:"lazy"}),"(",n(e.span,{className:"hljs-function",children:"() =>"})," ",n(e.span,{className:"hljs-title function_",children:"import"}),"(",n(e.span,{className:"hljs-string",children:"'/pages/blog/index.tsx'"}),`))
`,n(e.span,{className:"hljs-keyword",children:"const"})," __pages_import_2__ = ",n(e.span,{className:"hljs-title class_",children:"React"}),".",n(e.span,{className:"hljs-title function_",children:"lazy"}),"(",n(e.span,{className:"hljs-function",children:"() =>"}),`
  `,n(e.span,{className:"hljs-title function_",children:"import"}),"(",n(e.span,{className:"hljs-string",children:"'/pages/blog/ssg-in-flog.mdx'"}),`)


`,n(e.span,{className:"hljs-keyword",children:"const"}),` routes = [
  {
    `,n(e.span,{className:"hljs-attr",children:"caseSensitive"}),": ",n(e.span,{className:"hljs-literal",children:"false"}),`,
    `,n(e.span,{className:"hljs-attr",children:"path"}),": ",n(e.span,{className:"hljs-string",children:"'/'"}),`,
    `,n(e.span,{className:"hljs-attr",children:"element"}),": ",n(e.span,{className:"hljs-title class_",children:"React"}),".",n(e.span,{className:"hljs-title function_",children:"createElement"}),`(__pages_import_0__)
  },
  {
    `,n(e.span,{className:"hljs-attr",children:"caseSensitive"}),": ",n(e.span,{className:"hljs-literal",children:"false"}),`,
    `,n(e.span,{className:"hljs-attr",children:"path"}),": ",n(e.span,{className:"hljs-string",children:"'blog'"}),`,
    `,n(e.span,{className:"hljs-attr",children:"children"}),`: [
      `,n(e.span,{className:"hljs-comment",children:"// __page_import_1&2__"}),`
    ]
  }
]

`,n(e.span,{className:"hljs-keyword",children:"export"})," ",n(e.span,{className:"hljs-keyword",children:"default"}),` routes

`]})}),`
`,l(e.p,{children:["\u8BE5\u4EE3\u7801\u5F15\u5165\u4E86\u8DEF\u7531\u5BF9\u5E94\u7684\u6A21\u5757\uFF0CVite \u7EE7\u7EED\u8BF7\u6C42\u81EA\u52A8\u8DEF\u7531\u6D89\u53CA\u7684\u6587\u4EF6\uFF0C\u800C\u5176\u4E2D\u7684",n(e.code,{children:".mdx"}),"\u6587\u4EF6\u5C31\u5C06\u5728\u5404\u81EA\u7684",n(e.code,{children:"transform"}),"\u9636\u6BB5\u5F97\u5230\u8F6C\u6362\u3002"]}),`
`,n(e.h3,{id:"\u7ED3\u8BBA",children:"\u7ED3\u8BBA"}),`
`,l(e.p,{children:["\u6CA1\u9519\uFF0C\u6211\u662F\u534A\u9014\u624D\u53D1\u73B0\u8FD9\u4E0E\u4E24\u4E2A\u63D2\u4EF6\u7684 ",n(e.strong,{children:"hook \u7C7B\u578B\u6839\u672C\u6CA1\u5565\u5173\u7CFB"}),"\uFF0C\u5355\u7EAF\u662F Vite \u6784\u5EFA\u9879\u76EE\u4F9D\u8D56\u7684\u673A\u5236\u800C\u5DF2..."]}),`
`,l(e.p,{children:["\u4F46\u662F\u7EC6\u60F3\u4E5F\u5BF9\uFF0C\u73B0\u4EE3\u7684\u6253\u5305\u5DE5\u5177\u90FD\u4EE5 ",n(e.strong,{children:"tree-shaking"}),` \u4E3A\u7279\u5F81\uFF0C\u5BF9\u7279\u5B9A\u6A21\u5757\u7684\u5904\u7406\u90FD\u5FC5\u987B\u5EFA\u7ACB\u5728"\u5B83\u4F1A\u88AB\u6253\u5305"\u8FD9\u4E00\u57FA\u7840\u4E0A,
\u8FD9\u6837\uFF0C\u4E5F\u4E0E\u4E00\u5F00\u59CB\u5C31\u88AB\u5426\u51B3\u7684"\u8DEF\u7531\u96CF\u5F62"\u731C\u6D4B\u76F8\u6620\u4E86\uFF0C\u5B83\u6B63\u662F"\u4F9D\u8D56\u89E3\u6790"\u8FD9\u4E00\u66F4\u4E3A\u5E95\u5C42\u7684\u673A\u5236\u7684\u663E\u73B0\uFF0C\u6216\u8005\u8BF4,
\u8DEF\u7531\u96CF\u5F62\u662F\u4E0D\u5B8C\u6574\u7684\u3001`,n(e.strong,{children:"\u9000\u5316"}),"\u7684\u4F9D\u8D56\u89E3\u6790\u800C\u5DF2\u3002"]}),`
`,n(e.h3,{id:"vite-specific-hooks",children:"Vite specific hooks"}),`
`,l(e.p,{children:["\u4E0B\u9762\u7B80\u5355\u4ECB\u7ECD",n(e.code,{children:"vite-plugin-pages"}),"\u4E2D\u4E24\u4E2A Vite \u72EC\u6709 hooks\uFF1A"]}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"configResolved"}),"\u5728 Vite \u914D\u7F6E\u89E3\u6790\u5B8C\u6BD5\u540E\u6267\u884C, \u7528\u4E8E\u8BFB\u53D6\u548C\u5B58\u50A8\u914D\u7F6E\u7684\u89E3\u6790\u7ED3\u679C, \u5728\u63D2\u4EF6\u4E2D\u5B83\u6839\u636E Vite \u5E94\u7528\u7684\u73AF\u5883(React, Solid ...)\u505A\u51FA\u4E0D\u540C\u7684\u53CD\u5E94\u3002"]}),`
`,l(e.li,{children:[n(e.code,{children:"configureServer"}),"\u7528\u4E8E\u914D\u7F6E ",n(e.strong,{children:"dev server"}),", \u5B83\u6700\u5E38\u89C1\u7684\u7528\u4F8B\u662F\u4E3A server \u6DFB\u52A0",n(e.strong,{children:"\u81EA\u5B9A\u4E49\u7684\u4E2D\u95F4\u4EF6"}),", \u5728\u8BE5\u63D2\u4EF6\u4E2D, \u4E3B\u8981\u7528\u4E8E\u8BBE\u7F6E ",n(e.strong,{children:"HMR"}),"\u3002"]}),`
`]})]})}function p(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(c,s)})):c(s)}export{d as date,p as default,t as duration,h as lang,o as path,a as title};
