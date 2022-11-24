import{a as n,j as l,F as r}from"./index.d2eb5bd1.js";const h="How to win at CORS?",a="2022-11-24T15:09:00.000+00:00",d="zh",t="4min",o="/blog/how-to-win-at-cors";function c(s){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",span:"span",h4:"h4",ul:"ul",h3:"h3"},s.components);return l(r,{children:[n(e.nav,{className:"toc",children:n(e.ol,{className:"toc-level toc-level-1",children:l(e.li,{className:"toc-item toc-item-h1",children:[n(e.a,{className:"toc-link toc-link-h1",href:"#how-to-win-at-cors",children:"How to win at CORS?"}),l(e.ol,{className:"toc-level toc-level-2",children:[n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#making-a-cors-request",children:"Making a CORS request"})}),l(e.li,{className:"toc-item toc-item-h2",children:[n(e.a,{className:"toc-link toc-link-h2",href:"#cors-requests",children:"CORS requests"}),l(e.ol,{className:"toc-level toc-level-3",children:[n(e.li,{className:"toc-item toc-item-h4",children:n(e.a,{className:"toc-link toc-link-h4",href:"#\u5173\u4E8E-http-referer",children:"\u5173\u4E8E HTTP Referer"})}),n(e.li,{className:"toc-item toc-item-h4",children:n(e.a,{className:"toc-link toc-link-h4",href:"#\u4E3A\u4EC0\u4E48referer\u5728\u63D0\u4F9B\u5B89\u5168\u652F\u6301\u4E0A\u975E\u5E38\u9E21\u808B",children:"\u4E3A\u4EC0\u4E48Referer\uFF08\u5728\u63D0\u4F9B\u5B89\u5168\u652F\u6301\u4E0A\uFF09\u975E\u5E38\u9E21\u808B\uFF1F"})})]})]}),n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#cors-responses",children:"CORS responses"})}),n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#is-it-safe-to-expose-resources-via-cors",children:"Is it safe to expose resources via CORS?"})}),n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#adding-credentials",children:"Adding credentials"})}),l(e.li,{className:"toc-item toc-item-h2",children:[n(e.a,{className:"toc-link toc-link-h2",href:"#unusual-requests-and-preflights",children:"Unusual requests and preflights"}),l(e.ol,{className:"toc-level toc-level-3",children:[n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#preflight-request",children:"Preflight request"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#preflight-response",children:"Preflight response"})})]})]})]})]})})}),`
`,n(e.h1,{id:"how-to-win-at-cors",children:"How to win at CORS?"}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:["Reference: ",n(e.a,{href:"https://jakearchibald.com/2021/cors/",children:"How to win at CORS - JakeArchibald.com"})]}),`
`]}),`
`,l(e.p,{children:["CORS \u7684",n(e.strong,{children:"\u672C\u8D28"}),"\uFF1A\u4E3A",n(e.strong,{children:"\u5728\u5BA2\u6237\u7AEF"}),"\u8BBF\u95EE\u8DE8\u57DF\u8D44\u6E90\uFF0C\u5BF9 HTTP \u8BF7\u6C42\uFF08Request\uFF09\u548C\u54CD\u5E94\uFF08Response\uFF09\u9644\u52A0\u7684\u4E00\u7CFB\u5217",n(e.strong,{children:"\u5934\u90E8\u4FE1\u606F"}),"\uFF08",n(e.code,{children:"Access-Control-*"}),"\uFF09\uFF0C\u4EE5\u53CA W3C \u6807\u51C6\u5BF9\u6B64\u505A\u7684\u4E00\u4E9B\u76F8\u5173\u652F\u6301\uFF0C\u7EDF\u79F0\u4E3A\u4E00\u4E2A CORS ",n(e.strong,{children:"\u6807\u51C6"}),"\uFF08Spec\uFF09\u3002"]}),`
`,l(e.blockquote,{children:[`
`,n(e.p,{children:n(e.strong,{children:"CORS \u4E0E\u53CD\u5411\u4EE3\u7406"})}),`
`,l(e.p,{children:["CORS \u548C\u53CD\u5411\u4EE3\u7406\uFF08Reverse Proxy\uFF09\u662F\u89E3\u51B3",n(e.strong,{children:"\u8DE8\u57DF\u95EE\u9898"}),"\u7684\u4E24\u79CD",n(e.strong,{children:"\u4E0D\u540C"}),"\u7684\u65B9\u5F0F\u3002"]}),`
`,l(e.p,{children:["\u7531\u4E8E\u524D\u540E\u7AEF\u5206\u79BB\u67B6\u6784\u7684\u6D41\u884C\uFF0C\u53CD\u5411\u4EE3\u7406\u5728\u524D\u7AEF\u5F00\u53D1\u73AF\u5883\u7684 ",n(e.strong,{children:"DevServer"})," \uFF08\u5982",n(e.code,{children:"webpack-dev-server"}),"\u3001",n(e.code,{children:"vite"}),"\uFF09\u4E2D\u88AB\u5E7F\u6CDB\u4F7F\u7528\u3002\u5176\u672C\u8D28\u662F\u5F00\u542F\u4E00\u4E2A\u670D\u52A1\u7AEF\u7684\u4EE3\u7406\uFF0C\u7528\u4E8E",n(e.strong,{children:"\u8F6C\u53D1"}),"\u539F\u672C\u4ECE\u5BA2\u6237\u7AEF\u76F4\u63A5\u53D1\u9001\u5C06\u8DE8\u57DF\u7684\u8BF7\u6C42\u3002\u7531\u4E8E",n(e.strong,{children:"\u540C\u6E90\u653F\u7B56"}),"\uFF08SOP\uFF09\u53EA\u9650\u5236 ",n(e.strong,{children:"C => S"})," \u7684\u8BF7\u6C42\uFF0C\u800C\u4ECE\u53CD\u5411\u4EE3\u7406\u5230\u76EE\u6807\u670D\u52A1\u5668\u5C5E\u4E8E ",n(e.strong,{children:"S => S"}),"\uFF0C\u6240\u4EE5\u81EA\u7136",n(e.strong,{children:"\u4E0D\u53D7"}),"\u540C\u6E90\u653F\u7B56\u7684\u9650\u5236\u3002"]}),`
`,l(e.p,{children:["\u5728 DevServer \u8BBE\u7F6E\u7684\u53CD\u5411\u4EE3\u7406\u662F",n(e.strong,{children:"\u5F71\u54CD\u4E0D\u5230\u751F\u4EA7\u73AF\u5883"}),"\u7684\uFF0C\u9700\u8981\u989D\u5916\u5728\u751F\u4EA7\u670D\u52A1\u5668\uFF08\u5982",n(e.code,{children:"nginx"}),"\u7B49\uFF09\u914D\u7F6E\u53CD\u5411\u4EE3\u7406\u3002"]}),`
`]}),`
`,n(e.h2,{id:"making-a-cors-request",children:"Making a CORS request"}),`
`,l(e.p,{children:["\u5927\u591A\u6570",n(e.strong,{children:"\u73B0\u4EE3 Web \u7279\u6027"}),"\u90FD",n(e.strong,{children:"\u9ED8\u8BA4"}),"\u8981\u6C42\u4F7F\u7528 CORS\uFF0C\u6BD4\u5982",n(e.code,{children:"fetch()"}),"\u3002"]}),`
`,l(e.p,{children:["\u6709\u4E9B\u73B0\u4EE3 Web \u7279\u6027\uFF0C\u5982",n(e.code,{children:'<link rel="preload">'}),"\uFF0C",n(e.strong,{children:"\u9ED8\u8BA4"}),"\u4E0D\u4F7F\u7528 CORS\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u88AB\u8BBE\u8BA1\u51FA\u6765\u7528\u4E8E\u652F\u6301\u4E00\u4E9B\u4E0D\u4F7F\u7528 CORS \u7684\u65E7\u7279\u6027\u3002"]}),`
`,l(e.p,{children:["\u5E76",n(e.strong,{children:"\u6CA1\u6709\u4E00\u5957\u7B80\u5355\u7684\u89C4\u5219"}),"\u7528\u4E8E\u9274\u522B\u54EA\u4E9B\u7279\u6027\u9ED8\u8BA4\u4F7F\u7528\u6216\u4E0D\u4F7F\u7528 CORS\uFF0C\u6BD4\u5982\uFF1A"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-html",children:[n(e.span,{className:"hljs-comment",children:"<!-- Not a CORS request-->"}),`
`,l(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"script"})," ",n(e.span,{className:"hljs-attr",children:"src"}),"=",n(e.span,{className:"hljs-string",children:'"https://example.com/script.js"'}),">"]}),l(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"script"}),">"]}),`
`,n(e.span,{className:"hljs-comment",children:"<!-- CORS request -->"}),`
`,l(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"script"})," ",n(e.span,{className:"hljs-attr",children:"type"}),"=",n(e.span,{className:"hljs-string",children:'"module"'})," ",n(e.span,{className:"hljs-attr",children:"src"}),"=",n(e.span,{className:"hljs-string",children:'"https://example.com/script.js"'}),">"]}),l(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,l(e.p,{children:[n(e.strong,{children:"\u6700\u4F73\u65B9\u5F0F"}),"\u662F\u67E5\u770B HTTP \u8BF7\u6C42\u5934\u90E8\uFF0C\u5728 Chrome \u548C Firefox \u4E2D\uFF0C\u8DE8\u57DF\u8BF7\u6C42\u5C06\u643A\u5E26",n(e.code,{children:"Sec-Fetch-Mode"}),"\u5934\u90E8\uFF0C\u6765\u58F0\u660E\u5176\u662F\u5426\u662F\u4E00\u4E2A CORS \u8BF7\u6C42\u3002"]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-xml",children:`GET ... HTTP/1.1

Sec-Fetch-Mode: cors | no-cors | ...
`})}),`
`,l(e.p,{children:["\u5982\u679C\u4E00\u4E2A HTML \u5143\u7D20\u9ED8\u8BA4\u672A\u4F7F\u7528 CORS \u8FDB\u884C\u4E86\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u901A\u8FC7",n(e.code,{children:"crossorigin"}),"\u5C5E\u6027\uFF0C\u5C06\u5176\u884C\u4E3A\u5207\u6362\u5230 CORS \u8BF7\u6C42\u3002"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-html",children:[l(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"img"})," ",n(e.span,{className:"hljs-attr",children:"crossorigin"})," ",n(e.span,{className:"hljs-attr",children:"src"}),"=",n(e.span,{className:"hljs-string",children:'"..."'})," />"]}),`
`,l(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"script"})," ",n(e.span,{className:"hljs-attr",children:"crossorigin"})," ",n(e.span,{className:"hljs-attr",children:"src"}),"=",n(e.span,{className:"hljs-string",children:'"..."'}),">"]}),l(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"script"}),">"]}),`
`,l(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"link"})," ",n(e.span,{className:"hljs-attr",children:"crossorigin"})," ",n(e.span,{className:"hljs-attr",children:"rel"}),"=",n(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",n(e.span,{className:"hljs-attr",children:"href"}),"=",n(e.span,{className:"hljs-string",children:'"..."'})," />"]}),`
`,l(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"link"})," ",n(e.span,{className:"hljs-attr",children:"crossorigin"})," ",n(e.span,{className:"hljs-attr",children:"rel"}),"=",n(e.span,{className:"hljs-string",children:'"preload"'})," ",n(e.span,{className:"hljs-attr",children:"as"}),"=",n(e.span,{className:"hljs-string",children:'"font"'})," ",n(e.span,{className:"hljs-attr",children:"href"}),"=",n(e.span,{className:"hljs-string",children:'"..."'})," />"]}),`
`]})}),`
`,n(e.h2,{id:"cors-requests",children:"CORS requests"}),`
`,l(e.p,{children:["\u8DE8\u57DF\u7684 CORS \u8BF7\u6C42\u9ED8\u8BA4",n(e.strong,{children:"\u4E0D\u643A\u5E26 credentials"}),"\uFF08\u6CA1\u6709 ",n(e.strong,{children:"cookies"}),"\u3001\u5BA2\u6237\u7AEF",n(e.strong,{children:"\u8BC1\u4E66"}),"\u3001\u81EA\u52A8\u6DFB\u52A0\u7684",n(e.code,{children:"Authorization"}),"\u5934\u90E8\uFF0C\u4E14\u54CD\u5E94\u5934\u4E2D\u7684",n(e.code,{children:"Set-Cookie"}),"\u5C06\u88AB\u5FFD\u7565\uFF09\uFF0C\u800C",n(e.strong,{children:"\u540C\u6E90\u8BF7\u6C42\u9ED8\u8BA4\u643A\u5E26 credentials"}),"\u3002"]}),`
`,l(e.blockquote,{children:[`
`,n(e.p,{children:n(e.strong,{children:"\u6CE8\u610F"})}),`
`,l(e.p,{children:["\u672C\u6587\u4EE5\u53CA\u901A\u5E38 HTTP \u8BF7\u6C42\u6240\u6307\u7684\u643A\u5E26\u51ED\u636E\uFF08credentials\uFF09\u90FD\u662F\u6307",n(e.strong,{children:"\u6D4F\u89C8\u5668\u80FD\u81EA\u52A8"}),"\u6DFB\u52A0\u5230\u8BF7\u6C42\u7684\u51ED\u636E\u3002"]}),`
`]}),`
`,l(e.p,{children:["\u5728\u5F00\u53D1 CORS \u6807\u51C6\u65F6\uFF0C\u6807\u51C6\u7EC4\u7EC7\u65B0\u5EFA\u7ACB\u4E86\u4E00\u4E2A HTTP \u5934\u90E8",n(e.code,{children:"Origin"}),"\uFF0C\u7528\u6765\u63D0\u4F9B\u53D1\u51FA\u8BF7\u6C42\u7684\u9875\u9762\u7684",n(e.strong,{children:"\u6E90"}),"\u3002"]}),`
`,l(e.blockquote,{children:[`
`,l(e.h4,{id:"\u5173\u4E8E-http-referer",children:["\u5173\u4E8E HTTP ",n(e.code,{children:"Referer"})]}),`
`,l(e.p,{children:["HTTP ",n(e.code,{children:"referer"}),"\u88AB\u6D4F\u89C8\u5668\u4F20\u9012\u7ED9\u670D\u52A1\u5668\uFF0C\u7528\u6765\u544A\u77E5\u670D\u52A1\u5668\u201C\u7528\u6237\u8FDB\u5165\u5F53\u524D\u9875\uFF08\u5373\u76EE\u524D\u8BF7\u6C42\u7684\u76EE\u6807\uFF09",n(e.strong,{children:"\u4E4B\u524D"}),"\u6240\u5904\u7684\u9875\u9762\u201D\u3002"]}),`
`,l(e.h4,{id:"\u4E3A\u4EC0\u4E48referer\u5728\u63D0\u4F9B\u5B89\u5168\u652F\u6301\u4E0A\u975E\u5E38\u9E21\u808B",children:["\u4E3A\u4EC0\u4E48",n(e.code,{children:"Referer"}),"\uFF08\u5728\u63D0\u4F9B\u5B89\u5168\u652F\u6301\u4E0A\uFF09\u975E\u5E38\u9E21\u808B\uFF1F"]}),`
`,l(e.p,{children:["\u56E0\u4E3A",n(e.code,{children:"referer"}),"\u662F",n(e.strong,{children:"\u53EF\u6B3A\u7792"}),"\u7684\uFF08spoofable\uFF09\uFF0C\u5728\u5BA2\u6237\u7AEF\u53EF\u4EE5\u4FEE\u6539\u5B83\uFF08\u5982\u901A\u8FC7\u6D4F\u89C8\u5668\u6269\u5C55\u3001\u4EE3\u7406\u7B49\uFF09\uFF0C\u800C",n(e.code,{children:"origin"}),"\u5934\u90E8\u662F\u7531\u6D4F\u89C8\u5668\u5185\u90E8\u63A7\u5236\uFF0C\u4FDD\u8BC1\u5176\u51C6\u786E\u53EF\u9760\u7684\u3002"]}),`
`]}),`
`,l(e.p,{children:[n(e.code,{children:"Origin"}),"\u662F\u4E00\u4E2A\u5F88\u6709\u7528\u7684\u5934\u90E8\uFF0C\u5E38\u5E38\u88AB\u6DFB\u52A0\u5230\u8BB8\u591A\u5176\u4ED6\u7C7B\u578B\u7684\u8BF7\u6C42\u4E2D\uFF0C\u6BD4\u5982 WebSocket \u6216",n(e.code,{children:"POST"}),"\u8BF7\u6C42\u3002\u6D4F\u89C8\u5668\u66FE\u8BD5\u8FC7\u5C06",n(e.code,{children:"Origin"}),"\u6DFB\u52A0\u5230\u5E38\u89C4\u7684",n(e.code,{children:"GET"}),"\u8BF7\u6C42\u4E2D\uFF0C\u4F46\u8FD9\u4F1A\u5BFC\u81F4\u8BB8\u591A\u5C06\u5E26\u6709",n(e.code,{children:"Origin"}),"\u5934\u90E8\u7684\u8BF7\u6C42\u89C6\u4E3A CORS \u8BF7\u6C42\u7684\u7F51\u7AD9\u5D29\u6E83\u3002"]}),`
`,n(e.h2,{id:"cors-responses",children:"CORS responses"}),`
`,n(e.p,{children:"\u4E3A\u4F7F\u5176\u4ED6\u6E90\u80FD\u8DE8\u57DF\u8BBF\u95EE\u8D44\u6E90\uFF0C\u54CD\u5E94\u5934\u5FC5\u987B\u5305\u542B\u5934\u90E8\uFF1A"}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-xml",children:`Access-Control-Allow-Origin: * (\u8868\u793A\u63A5\u53D7\u4EFB\u4F55\u6E90)
`})}),`
`,l(e.p,{children:["\u5982\u679C\u8BF7\u6C42\u6CA1\u6709\u9644\u5E26 credentials\uFF0C\u90A3\u4E48",n(e.code,{children:"*"}),"\u4EE3\u8868\u4EFB\u4F55\u8BF7\u6C42\u7684\u6E90\u3002\u82E5\u8981\u663E\u5F0F\u6307\u5B9A\u6E90\uFF0C\u6CE8\u610F\u6240\u6709 HTTP \u5934\u90E8\u7684",n(e.strong,{children:"\u540D\u79F0\u4E0D\u533A\u5206\u5927\u5C0F\u5199"}),"\uFF0C\u4F46",n(e.strong,{children:"\u503C\u533A\u5206\u5927\u5C0F\u5199"}),"\uFF08case-sensitive\uFF09\u3002"]}),`
`,l(e.p,{children:[n(e.strong,{children:"\u6CE8\u610F"}),"\uFF0C\u5982\u679C\u8BF7\u6C42\u7684",n(e.code,{children:"Origin"}),"\u76F8\u5BF9\u4E8E\u54CD\u5E94\u7684",n(e.code,{children:"Access-Control-Allow-Origin"}),"\u591A\u4E86\u4E00\u4E2A\u5C3E\u7F00",n(e.code,{children:"/"}),"\uFF0C\u4E5F\u4E0D\u80FD\u901A\u8FC7 CORS\u3002"]}),`
`,n(e.p,{children:"\u5982\u679C\u8BF7\u6C42\u901A\u8FC7 CORS\uFF0C\u5219\u54CD\u5E94\u53EF\u80FD\u5305\u542B\u4EE5\u4E0B\u989D\u5916\u7684\u5934\u90E8\u4FE1\u606F\uFF1A"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"Cache-Control"}),"\uFF1A\u7F13\u5B58\u7BA1\u7406"]}),`
`,l(e.li,{children:[n(e.code,{children:"Content-Language"}),"\uFF1A\u8BED\u8A00"]}),`
`,l(e.li,{children:[n(e.code,{children:"Content-Length"}),"\uFF1A\u6D88\u606F\u4E3B\u4F53\u7684\u5927\u5C0F"]}),`
`,l(e.li,{children:[n(e.code,{children:"Content-Type"}),"\uFF1A\u8D44\u6E90\u7684 MIME \u7C7B\u578B"]}),`
`,l(e.li,{children:[n(e.code,{children:"Expires"}),"\uFF1A\u54CD\u5E94\u8FC7\u671F\u65F6\u95F4"]}),`
`,l(e.li,{children:[n(e.code,{children:"Last-Modified"}),"\uFF1A\u6700\u540E\u4E00\u6B21\u4FEE\u6539\u65F6\u95F4"]}),`
`,l(e.li,{children:[n(e.code,{children:"Pragma"}),"\uFF1A",n(e.strong,{children:"\u5DF2\u5F03\u7528"}),"\uFF0C\u7528\u4E8E\u7F13\u5B58\u7BA1\u7406"]}),`
`]}),`
`,l(e.p,{children:["\u54CD\u5E94\u53EF\u4EE5\u5305\u542B\u53E6\u4E00\u4E2A\u5934\u90E8",n(e.code,{children:"Access-Control-Expose-Headers"}),"\uFF0C\u8BA9\u670D\u52A1\u7AEF\u53EF\u4EE5\u53D1\u9001\u989D\u5916\u7684",n(e.strong,{children:"\u81EA\u5B9A\u4E49\u5934\u90E8"}),"\uFF1A"]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-xml",children:`Access-Control-Expose-Headers: Custom-Header-1, Custom-Header-2
`})}),`
`,n(e.h2,{id:"is-it-safe-to-expose-resources-via-cors",children:"Is it safe to expose resources via CORS?"}),`
`,l(e.p,{children:["\u5982\u679C\u4E00\u4E2A\u8D44\u6E90\u4E0D\u5305\u542B\u9690\u79C1\u6570\u636E\uFF0C\u90A3\u4E48\u5BF9\u5176\u52A0\u4E0A",n(e.code,{children:"Access-Control-Allow-Origin: *"}),"\u662F",n(e.strong,{children:"\u5B8C\u5168\u5B89\u5168"}),"\u7684\u3002"]}),`
`,l(e.p,{children:["\u5982\u679C\u4E00\u4E2A\u8D44\u6E90",n(e.strong,{children:"\u6709\u65F6"}),"\uFF0C\u53D6\u51B3\u4E8E cookies\uFF0C\u4F1A\u5305\u542B\u9690\u79C1\u6570\u636E\uFF0C\u90A3\u4E48\u5728\u52A0\u4E0A",n(e.code,{children:"Access-Control-Allow-Origin: *"}),"\u540E\uFF0C\u9700\u8981\u5305\u542B",n(e.code,{children:"Vary: Cookie"}),"\u63A7\u5236\u7F13\u5B58\u4EE5\u4FDD\u8BC1\u5176\u5B89\u5168\u3002"]}),`
`,n(e.h2,{id:"adding-credentials",children:"Adding credentials"}),`
`,n(e.p,{children:"\u8DE8\u57DF\u7684 CORS \u8BF7\u6C42\u9ED8\u8BA4\u662F\u4E0D\u5305\u542B credentials \u7684\u3002\u7136\u800C\uFF0C\u5404\u79CD API \u5141\u8BB8\u6DFB\u52A0 credentials\u3002"}),`
`,l(e.p,{children:["\u4F7F\u7528",n(e.code,{children:"fetch"}),"\u6216",n(e.code,{children:"xhr"}),"\uFF1A"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-comment",children:"// Fetch API"}),`
`,n(e.span,{className:"hljs-keyword",children:"const"})," response = ",n(e.span,{className:"hljs-keyword",children:"await"})," ",n(e.span,{className:"hljs-title function_",children:"fetch"}),`(url, {
    `,n(e.span,{className:"hljs-attr",children:"credentials"}),": ",n(e.span,{className:"hljs-string",children:"'include'"}),`
})

`,n(e.span,{className:"hljs-comment",children:"// AJAX"}),`
`,n(e.span,{className:"hljs-keyword",children:"const"})," xhr = ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"XMLHttpRequest"}),`()
xhr.`,n(e.span,{className:"hljs-title function_",children:"open"}),"(",n(e.span,{className:"hljs-string",children:"'GET'"}),`, url)
xhr.`,n(e.span,{className:"hljs-property",children:"withCredentials"})," = ",n(e.span,{className:"hljs-literal",children:"true"}),`
xhr.`,n(e.span,{className:"hljs-title function_",children:"send"}),`()
`]})}),`
`,n(e.p,{children:"\u6216\u8005 HTML \u5143\u7D20\uFF1A"}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-html",children:[l(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"img"})," ",n(e.span,{className:"hljs-attr",children:"crossorigin"}),"=",n(e.span,{className:"hljs-string",children:'"use-credentials"'})," ",n(e.span,{className:"hljs-attr",children:"src"}),"=",n(e.span,{className:"hljs-string",children:'"..."'})," />"]}),`
`]})}),`
`,l(e.p,{children:["\u90A3\u4E48",n(e.strong,{children:"\u54CD\u5E94\u5FC5\u987B\u5305\u542B"}),"\uFF1A"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-xml",children:[`...

Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: https://`,l(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"subdomains"}),">"]}),`.com
Vary: Cookie, Origin
`]})}),`
`,l(e.blockquote,{children:[`
`,n(e.p,{children:n(e.strong,{children:"\u6CE8\u610F"})}),`
`,l(e.p,{children:["\u5982\u679C\u8981\u5728 CORS \u8BF7\u6C42\u4E2D\u643A\u5E26\u51ED\u636E\uFF0C\u5219\u5FC5\u987B\u8981",n(e.strong,{children:"\u670D\u52A1\u7AEF"}),"\u914D\u5408\uFF1A"]}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["\u6DFB\u52A0\u5934\u90E8",n(e.code,{children:"Access-Control-Allow-Credentials: true"}),"\uFF1B"]}),`
`,l(e.li,{children:["\u4E0D\u80FD\u4F7F\u7528\u901A\u914D\u7B26",n(e.code,{children:"*"}),"\u6307\u5B9A\u63A5\u6536\u6240\u6709\u6E90\uFF0C\u5373",n(e.code,{children:"Access-Control-Allow-Origin"}),"\u4E0D\u53EF\u4E3A",n(e.code,{children:"*"})]}),`
`]}),`
`]}),`
`,n(e.h2,{id:"unusual-requests-and-preflights",children:"Unusual requests and preflights"}),`
`,n(e.p,{children:"\u5148\u770B\u4E00\u4E9B\u5E38\u89C1\u7684\uFF08usual\uFF09\u8BF7\u6C42\uFF1A"}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-comment",children:"// \u8FD9\u4E2A\u8BF7\u6C42\u4E0E\u4E00\u4E2A<img>\u5143\u7D20\u7684\u884C\u4E3A\u51E0\u4E4E\u76F8\u540C"}),`
`,n(e.span,{className:"hljs-title function_",children:"fetch"}),"(url, { ",n(e.span,{className:"hljs-attr",children:"credentials"}),": ",n(e.span,{className:"hljs-string",children:"'include'"}),` })
`]})}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-comment",children:"// \u4E0A\u9762\u8FD9\u4E2A\u8BF7\u6C42\u4E0E\u4E00\u4E2A<form>\u5143\u7D20\u7684\u884C\u4E3A\u51E0\u4E4E\u76F8\u540C"}),`
`,n(e.span,{className:"hljs-title function_",children:"fetch"}),`(url, {
    `,n(e.span,{className:"hljs-attr",children:"methdo"}),": ",n(e.span,{className:"hljs-string",children:"'POST'"}),`,
    `,n(e.span,{className:"hljs-attr",children:"body"}),`: formData
})
`]})}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-comment",children:"// \u8FD9\u4E0D\u662F\u4E00\u4E2A\u5BFB\u5E38\u8BF7\u6C42\uFF0C\u5B83\u5177\u6709\u7279\u6B8A\u7684\u8BF7\u6C42\u65B9\u6CD5\u548C\u5934\u90E8"}),`
`,n(e.span,{className:"hljs-title function_",children:"fetch"}),`(url, {
  `,n(e.span,{className:"hljs-attr",children:"method"}),": ",n(e.span,{className:"hljs-string",children:"'wibbley-wobbley'"}),`,
  `,n(e.span,{className:"hljs-attr",children:"credentials"}),": ",n(e.span,{className:"hljs-string",children:"'include'"}),`,
  `,n(e.span,{className:"hljs-attr",children:"headers"}),`: {
    `,n(e.span,{className:"hljs-attr",children:"fancy"}),": ",n(e.span,{className:"hljs-string",children:"'headers'"}),`,
    `,n(e.span,{className:"hljs-string",children:"'here-we'"}),": ",n(e.span,{className:"hljs-string",children:"'go'"}),`,
  },
})
`]})}),`
`,l(e.p,{children:["\u600E\u6837\u5224\u5B9A\u4E00\u4E2A\u8BF7\u6C42\u7B97\u662F\u4E00\u4E2A ",n(e.strong,{children:"unusual request"})," \u76F8\u5F53\u590D\u6742\u3002"]}),`
`,l(e.p,{children:["\u4ECE",n(e.strong,{children:"\u9AD8\u7EF4\u5EA6"}),"\u4E0A\u8BB2\uFF0C\u5982\u679C\u5B83\u4E0D\u662F",n(e.strong,{children:"\u5176\u4ED6\u6D4F\u89C8\u5668 API"})," \u901A\u5E38\u53D1\u51FA\u7684\u90A3\u79CD\u8BF7\u6C42\uFF0C\u90A3\u4E48\u5B83\u5C31\u662F unsual request\u3002"]}),`
`,l(e.p,{children:["\u4ECE",n(e.strong,{children:"\u4F4E\u7EF4\u5EA6"}),"\u4E0A\u8BB2\uFF0C\u5982\u679C\u8BF7\u6C42\u4E0D\u662F",n(e.code,{children:"GET"}),"\u3001",n(e.code,{children:"POST"}),"\u6216",n(e.code,{children:"HEAD"}),"\u8BF7\u6C42\uFF0C\u6216\u8005\u5B83\u5305\u542B ",n(e.a,{href:"https://fetch.spec.whatwg.org/#cors-safelisted-request-header",children:"safelist"})," \u4EE5\u5916\u7684\u5934\u90E8\u6216\u5934\u90E8\u503C\uFF0C\u90A3\u4E48\u5B83\u662F\u4E00\u4E2A unusal request\u3002"]}),`
`,l(e.p,{children:["\u5728\u53D1\u9001 unsual request ",n(e.strong,{children:"\u4E4B\u524D"}),"\uFF0C",n(e.strong,{children:"\u6D4F\u89C8\u5668"}),"\u4F1A\u5148\u8BE2\u95EE\u76EE\u6807\u6E90\u662F\u5426\u63A5\u53D7\u5B83\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u53EB\u505A",n(e.strong,{children:"\u9884\u68C0"}),"\uFF08preflight\uFF09\uFF0C\u8FD9\u4E2A\u884C\u4E3A\u662F\u6D4F\u89C8\u5668\u81EA\u52A8\u8FDB\u884C\u7684\u3002"]}),`
`,n(e.h3,{id:"preflight-request",children:"Preflight request"}),`
`,l(e.p,{children:["\u5BF9\u4E8E\u524D\u9762\u7684 unusual request\uFF0C\u6D4F\u89C8\u5668\u5148\u7528",n(e.code,{children:"OPTIONS"}),"\u65B9\u6CD5\u53D1\u9001\u9884\u68C0\u8BF7\u6C42\uFF0C\u4E14\u5E26\u6709\u4EE5\u4E0B\u5934\u90E8\uFF1A"]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-xml",children:`Access-Control-Request-Method: wibbley-wobbley
Access-Control-Request-Headers: fancy, here-we
`})}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"Access-Control-Request-Method"}),"\uFF1A\u4E3B\u8BF7\u6C42\uFF08main request\uFF09\u5C06\u4F7F\u7528\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u5373\u4F7F\u8BE5\u8BF7\u6C42\u65B9\u6CD5\u662F\u5BFB\u5E38\u7684\uFF08",n(e.code,{children:"GET"}),"\u3001",n(e.code,{children:"POST"}),"\u3001",n(e.code,{children:"HEAD"}),"\uFF09\u4E5F\u9700\u53D1\u9001\u8BE5\u5934\u90E8\u3002\uFF08",n(e.strong,{children:"\u5FC5\u987B"}),"\uFF09"]}),`
`,l(e.li,{children:[n(e.code,{children:"Access-Control-Request-Headers"}),"\uFF1A\u4E3B\u8BF7\u6C42\u5C06\u8981\u53D1\u9001\u7684\u7279\u6B8A\u5934\u90E8\uFF0C\u5982\u679C\u6CA1\u6709\u7279\u6B8A\u5934\u90E8\uFF0C\u9884\u68C0\u8BF7\u6C42\u5C06\u4E0D\u53D1\u9001\u8BE5\u5934\u90E8\u3002\uFF08",n(e.strong,{children:"\u53EF\u9009"}),"\uFF09"]}),`
`]}),`
`,l(e.p,{children:["\u9884\u68C0\u8BF7\u6C42",n(e.strong,{children:"\u4ECE\u4E0D"}),"\u643A\u5E26 credentials\uFF0C",n(e.strong,{children:"\u5373\u4F7F"}),"\u4E3B\u8BF7\u6C42",n(e.strong,{children:"\u53EF\u80FD\u643A\u5E26"}),"\u3002"]}),`
`,n(e.h3,{id:"preflight-response",children:"Preflight response"}),`
`,n(e.p,{children:"\u670D\u52A1\u5668\u5BF9\u9884\u68C0\u8BF7\u6C42\u7684\u54CD\u5E94\uFF0C\u5C06\u4F7F\u7528\u4EE5\u4E0B\u5934\u90E8\u8868\u660E\u662F\u5426\u5141\u8BB8\u4E3B\u8BF7\u6C42\uFF1A"}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-xml",children:`Access-Control-Max-Age: 600 // 600s
Access-Control-Allow-Methods: wibbley-wobbley
Access-Control-Allow-Headers: fancy, here-we
`})}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"Access-Control-Max-Age"})," - \u9884\u68C0\u54CD\u5E94\u7684",n(e.strong,{children:"\u7F13\u5B58\u5468\u671F"}),"\uFF0C\u5728\u5468\u671F\u5185\u53D1\u9001 unusual \u4E3B\u8BF7\u6C42\u4E0D\u9700\u8981\u518D\u8FDB\u884C\u9884\u68C0\u3002\u9ED8\u8BA4\u503C\u662F 5 s\uFF0C\u4E00\u4E9B\u6D4F\u89C8\u5668\u9650\u5236\u4E86\u5176\u6700\u5927\u503C\uFF0C\u5982 Chrome\uFF0810 min\uFF09\u3001Firefox\uFF0824 h\uFF09\u3002"]}),`
`,l(e.li,{children:[n(e.code,{children:"Access-Control-Allow-Methods"})," - \u5141\u8BB8\u7684 unsual \u8BF7\u6C42\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u662F",n(e.strong,{children:"\u9017\u53F7\u5206\u9694"}),"\u7684\u5217\u8868\uFF0C\u5BF9\u5927\u5C0F\u5199",n(e.strong,{children:"\u654F\u611F"}),"\u3002\u5982\u679C\u4E3B\u8BF7\u6C42",n(e.strong,{children:"\u4E0D\u643A\u5E26\u51ED\u636E"}),"\uFF0C\u90A3\u4E48\u8BE5\u5934\u90E8\u53EF\u7528",n(e.code,{children:"*"}),"\u8868\u793A",n(e.strong,{children:"\u51E0\u4E4E\u6240\u6709"}),"\u65B9\u6CD5\uFF0C\u4E0D\u5305\u62EC",n(e.code,{children:"CONNECT"}),"\u3001",n(e.code,{children:"TRACE"}),"\u3001",n(e.code,{children:"TRACK"}),"\uFF08\u7531\u4E8E",n(e.strong,{children:"\u5B89\u5168\u539F\u56E0"}),"\uFF0C\u5B83\u4EEC\u90FD\u5728 ",n(e.a,{href:"https://fetch.spec.whatwg.org/#forbidden-method",children:"FORBIDDEN LIST"})," \u4E0A\uFF09\u3002"]}),`
`,l(e.li,{children:[n(e.code,{children:"Access-Control-Allow-Headers"})," - \u5141\u8BB8\u7684 unusual \u5934\u90E8\uFF0C\u540C\u6837\u53EF\u4EE5\u662F",n(e.strong,{children:"\u9017\u53F7\u5206\u9694"}),"\u7684\u5217\u8868\uFF0C\u5BF9\u5927\u5C0F\u5199",n(e.strong,{children:"\u4E0D\u654F\u611F"}),"\u3002\u5982\u679C\u4E3B\u8BF7\u6C42",n(e.strong,{children:"\u4E0D\u643A\u5E26\u51ED\u636E"}),"\uFF0C\u8BE5\u5934\u90E8\u53EF\u4F7F\u7528",n(e.code,{children:"*"}),"\u8868\u793A\u5141\u8BB8\u6240\u6709\u4E0D\u5728 ",n(e.a,{href:"https://fetch.spec.whatwg.org/#forbidden-header-name",children:"HEADER FORBIDDEN LIST"})," \u4E0A\u7684\u5934\u90E8\u3002"]}),`
`]}),`
`,l(e.p,{children:["\u7531\u4E8E\u5B89\u5168\u95EE\u9898\uFF0C\u5217\u4E8E HEADER FORBIDDEN LIST \u4E2D\u7684\u5934\u90E8",n(e.strong,{children:"\u5FC5\u987B"}),"\u5904\u4E8E\u6D4F\u89C8\u5668\u7684\u63A7\u5236\u4E0B\uFF0C\u5B83\u4EEC\u4F1A",n(e.strong,{children:"\u9759\u9ED8"}),"\u4ECE CORS \u8BF7\u6C42\u548C",n(e.code,{children:"Access-Control-Allow-Headers"}),"\u4E2D\u88AB",n(e.strong,{children:"\u62B9\u9664"}),"\u3002"]}),`
`,l(e.p,{children:[n(e.strong,{children:"\u9884\u68C0\u54CD\u5E94"}),"\u5FC5\u987B\u901A\u8FC7\u5E38\u89C4\u7684 CORS \u68C0\u67E5\uFF0C\u6240\u4EE5\u5176\u9700\u8981\u52A0\u4E0A",n(e.code,{children:"Access-Control-Allow-Origin"}),"\uFF0C\u4E14\u5982\u679C\u4E3B\u8BF7\u6C42\u5C06\u53D1\u9001\u51ED\u636E\uFF0C\u9884\u68C0\u54CD\u5E94\u5FC5\u987B\u5E26\u4E0A",n(e.code,{children:"Access-Control-Allow-Crendentials: true"}),"\u3002\u9884\u68C0\u54CD\u5E94\u7684",n(e.strong,{children:"\u72B6\u6001\u7801"}),"\u5FC5\u987B\u5728 ",n(e.strong,{children:"200-299"})," \u4E2D\u3002"]}),`
`,l(e.blockquote,{children:[`
`,n(e.p,{children:n(e.strong,{children:"\u6CE8\u610F"})}),`
`,l(e.p,{children:["\u9884\u68C0\u54CD\u5E94\u5BF9\u72B6\u6001\u7801\u7684\u9650\u5236\u9020\u6210\u4E86\u4E00\u4E9B",n(e.strong,{children:"\u9677\u9631"}),"\u3002\u5BF9\u4E8E\u4E00\u4E2A\u50CF",n(e.code,{children:"/artists/Pip-Blom"}),"\u8FD9\u6837\u7684 API\uFF0C\u5982\u679C\u5BF9\u5E94\u8D44\u6E90 'Pip Blom' \u4E0D\u5728\u6570\u636E\u5E93\u4E2D\uFF0C\u4F60\u53EF\u80FD\u60F3\u8981\u8FD4\u56DE 404 \u6765",n(e.strong,{children:"\u660E\u786E\u544A\u77E5"}),"\u5BA2\u6237\u7AEF\u5B83\u8BF7\u6C42\u4E86\u4E0D\u5B58\u5728\u7684\u8D44\u6E90\u3002\u4F46\u5982\u679C\u8FD9\u4E2A\u8BF7\u6C42\u9700\u8981\u4E00\u4E2A\u9884\u68C0\u8BF7\u6C42\uFF0C\u90A3\u4E48\u5176\u54CD\u5E94\u72B6\u6001\u7801\u53EA\u80FD\u662F ",n(e.strong,{children:"200-299"}),"\uFF0C\u5373\u4F7F\u6700\u7EC8\u7684\u4E3B\u54CD\u5E94\u4F1A\u662F 404\u3002"]}),`
`]}),`
`,l(e.p,{children:["\u5982\u679C\u4E3B\u8BF7\u6C42",n(e.strong,{children:"\u65B9\u6CD5"}),"\u548C",n(e.strong,{children:"\u5934\u90E8"}),"\u90FD\u88AB\u5141\u8BB8\uFF0C\u90A3\u4E48\u4E3B\u8BF7\u6C42\u5C06\u88AB\u53D1\u9001\u3002"]})]})}function m(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(c,s)})):c(s)}export{a as date,m as default,t as duration,d as lang,o as path,h as title};
