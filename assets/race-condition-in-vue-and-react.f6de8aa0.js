import{a as n,j as l,F as a}from"./index.2017317c.js";const i="Vue \u4E0E React \u4E0E\u7ADE\u6001\u95EE\u9898",h="2022-10-18T21:07:00.000+00:00",r="zh",d="3min",o="/blog/race-condition-in-vue-and-react";function c(s){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",h2:"h2",ul:"ul",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",em:"em"},s.components);return l(a,{children:[n(e.nav,{className:"toc",children:n(e.ol,{className:"toc-level toc-level-1",children:l(e.li,{className:"toc-item toc-item-h1",children:[n(e.a,{className:"toc-link toc-link-h1",href:"#vue-\u4E0E-react-\u4E0E\u7ADE\u6001\u95EE\u9898",children:"Vue \u4E0E React \u4E0E\u7ADE\u6001\u95EE\u9898"}),l(e.ol,{className:"toc-level toc-level-2",children:[n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#reference",children:"Reference"})}),n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#\u7ADE\u6001\u95EE\u9898race-condition",children:"\u7ADE\u6001\u95EE\u9898\uFF08Race Condition\uFF09"})}),n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#react-\u5904\u7406\u7ADE\u6001\u95EE\u9898",children:"React \u5904\u7406\u7ADE\u6001\u95EE\u9898"})}),n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#vue-\u5904\u7406\u7ADE\u6001\u95EE\u9898",children:"Vue \u5904\u7406\u7ADE\u6001\u95EE\u9898"})})]})]})})}),`
`,n(e.h1,{id:"vue-\u4E0E-react-\u4E0E\u7ADE\u6001\u95EE\u9898",children:"Vue \u4E0E React \u4E0E\u7ADE\u6001\u95EE\u9898"}),`
`,l(e.blockquote,{children:[`
`,n(e.h2,{id:"reference",children:"Reference"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect#fetching-data",children:"You Might Not Need An Effect"})}),`
`,n(e.li,{children:"\u300AVue.js \u8BBE\u8BA1\u4E0E\u5B9E\u73B0\u300B"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"\u7ADE\u6001\u95EE\u9898race-condition",children:"\u7ADE\u6001\u95EE\u9898\uFF08Race Condition\uFF09"}),`
`,l(e.p,{children:[n(e.strong,{children:"\u7ADE\u6001\u95EE\u9898"}),'\u662F\u5F02\u6B65\u7F16\u7A0B\u7684\u5178\u578B\u95EE\u9898\uFF0C\u4E24\u4E2A\u8BF7\u6C42\u76F8\u4E92"\u7ADE\u4E89"\uFF0C\u6700\u540E\u4EE5',n(e.strong,{children:"\u65E0\u6CD5\u9884\u6599"}),"\u7684\u987A\u5E8F\u8FD4\u56DE\u6216\u89E3\u51B3\u3002"]}),`
`,n(e.p,{children:'\u5728\u5904\u7406\u7ADE\u6001\u95EE\u9898\u4E0A\uFF0CVue \u548C React \u90FD\u7528\u5230\u4E86"\u8FC7\u671F\u6807\u5FD7"\u7684\u65B9\u6CD5\u3002'}),`
`,n(e.h2,{id:"react-\u5904\u7406\u7ADE\u6001\u95EE\u9898",children:"React \u5904\u7406\u7ADE\u6001\u95EE\u9898"}),`
`,l(e.p,{children:["\u5728 ",n(e.a,{href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect#fetching-data",children:"You Might Not Need An Effect"}),` \u4E2D,
React \u4E3A\u7ADE\u6001\u95EE\u9898\u4E3E\u4E86\u4E00\u4E2A"\u641C\u7D22\u6846"\u7684\u4F8B\u5B50\u3002`]}),`
`,l(e.p,{children:["\u5047\u8BBE\u7528\u6237\u5BF9\u5355\u8BCD",n(e.code,{children:'"hello"'}),`\u4EE5\u4E00\u79CD\u5B8C\u7F8E\u7684\u3001\u7ED5\u8FC7\u4F60\u81EA\u4FE1\u7684\u9632\u6296\u6216\u8005\u8282\u6D41\u7B56\u7565\u7684\u8282\u594F\u6572\u4E0B\u952E\u76D8,
\u90A3\u4E48`,n(e.code,{children:'"h"'}),"\u3001",n(e.code,{children:'"he"'}),"\u3001",n(e.code,{children:'"hel"'}),"\u3001",n(e.code,{children:'"hell"'}),"\u3001",n(e.code,{children:'"hello"'}),"\u90FD\u5C06\u89E6\u53D1\u4E0D\u540C\u7684 data fetching\u3002"]}),`
`,n(e.p,{children:"\u663E\u7136\u5B83\u4EEC\u8FD4\u56DE\u54CD\u5E94\u7684\u65F6\u95F4\u662F\u65E0\u6CD5\u9884\u6D4B\u7684\uFF0C\u4E0D\u80FD\u7B80\u5355\u5730\u4EE5\u6700\u540E\u4E00\u4E2A\u54CD\u5E94\uFF08\u5B83\u53EF\u80FD\u662F\u8FC7\u671F\u7684\uFF09\u4E3A\u51C6\u3002"}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"SearchResults"}),"(",n(e.span,{className:"hljs-params",children:"{ query }"}),`) {
  `,n(e.span,{className:"hljs-keyword",children:"const"})," [results, setResults] = ",n(e.span,{className:"hljs-title function_",children:"useState"}),`([])
  `,n(e.span,{className:"hljs-keyword",children:"const"})," [page, setPage] = ",n(e.span,{className:"hljs-title function_",children:"useState"}),"(",n(e.span,{className:"hljs-number",children:"1"}),`)

  `,n(e.span,{className:"hljs-title function_",children:"useEffect"}),"(",n(e.span,{className:"hljs-function",children:"() =>"}),` {
    `,n(e.span,{className:"hljs-comment",children:"// Look"}),`
    `,n(e.span,{className:"hljs-comment",children:"// A race condition"}),`
    `,n(e.span,{className:"hljs-comment",children:"// Right here"}),`
    `,n(e.span,{className:"hljs-title function_",children:"fetchResults"}),"(query, page).",n(e.span,{className:"hljs-title function_",children:"then"}),"(",l(e.span,{className:"hljs-function",children:["(",n(e.span,{className:"hljs-params",children:"json"}),") =>"]}),` {
      `,n(e.span,{className:"hljs-title function_",children:"setResults"}),`(json)
    })
  }, [query, page])
}
`]})}),`
`,n(e.p,{children:"\u5BF9\u6B64\uFF0CReact \u8981\u6C42\u5F00\u53D1\u8005\u81EA\u5DF1\u4E3A Effects \u624B\u52A8\u8BBE\u7F6E\u6B63\u786E\u7684 cleanup \u51FD\u6570\u3002"}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"SearchResults"}),"(",n(e.span,{className:"hljs-params",children:"{ query }"}),`) {
  `,n(e.span,{className:"hljs-keyword",children:"const"})," [results, setResults] = ",n(e.span,{className:"hljs-title function_",children:"useState"}),`([])
  `,n(e.span,{className:"hljs-keyword",children:"const"})," [page, setPage] = ",n(e.span,{className:"hljs-title function_",children:"useState"}),"(",n(e.span,{className:"hljs-number",children:"1"}),`)

  `,n(e.span,{className:"hljs-title function_",children:"useEffect"}),"(",n(e.span,{className:"hljs-function",children:"() =>"}),` {
    `,n(e.span,{className:"hljs-comment",children:"// a stale flag"}),`
    `,n(e.span,{className:"hljs-keyword",children:"let"})," ignore = ",n(e.span,{className:"hljs-literal",children:"false"}),`

    `,n(e.span,{className:"hljs-title function_",children:"fetchResults"}),"(query, page).",n(e.span,{className:"hljs-title function_",children:"then"}),"(",l(e.span,{className:"hljs-function",children:["(",n(e.span,{className:"hljs-params",children:"json"}),") =>"]}),` {
      `,n(e.span,{className:"hljs-comment",children:"// Apply the results only when it's not expired"}),`
      `,n(e.span,{className:"hljs-keyword",children:"if"}),` (!ignore) {
        `,n(e.span,{className:"hljs-title function_",children:"setResults"}),`(json)
      }
    })

    `,n(e.span,{className:"hljs-comment",children:"// cleanup function"}),`
    `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-function",children:"() =>"}),` {
      `,n(e.span,{className:"hljs-comment",children:"// re-rendering means current fetch is expired"}),`
      ignore = `,n(e.span,{className:"hljs-literal",children:"true"}),`
    }
  }, [query, page])
}
`]})}),`
`,l(e.p,{children:["\u5728\u8FD9\u4E2A\u6A21\u5F0F\uFF08pattern\uFF09\u4E2D\uFF0C\u5F53",n(e.code,{children:"query"}),"\u6539\u53D8\u5BFC\u81F4",n(e.code,{children:"<SearchResults />"}),"\u88AB\u91CD\u65B0\u6E32\u67D3\u65F6\uFF0CEffect \u7684 cleanup \u51FD\u6570\u6807\u8BB0\u5176\u8BF7\u6C42\u5DF2\u7ECF",n(e.strong,{children:"\u8FC7\u671F"}),"\uFF08",n(e.code,{children:"ignore = true"}),`\uFF09,
\u8FD9\u6837\uFF0C\u5F53\u5BA2\u6237\u7AEF\u6536\u5230\u54CD\u5E94\u65F6\uFF0C\u4FBF\u4E0D\u4F1A\u91C7\u7528\u8BE5\u8FC7\u671F\u7684\u54CD\u5E94\u3002`]}),`
`,l(e.p,{children:["\u8FD9\u79CD\u6A21\u5F0F\u8FD0\u7528",n(e.strong,{children:"\u95ED\u5305"}),"\uFF08",n(e.code,{children:"let ignore"}),"\uFF09\u5BF9",n(e.strong,{children:"\u5F02\u6B65"}),"\u4EE3\u7801\uFF08",n(e.code,{children:"then()"}),"\uFF09\u8FDB\u884C\u4E86\u5206\u652F\u3002\u5F53\u7136\uFF0C\u5B83\u53EA\u662F",n(e.strong,{children:"\u4E22\u5F03"}),"\u4E86\u8FC7\u671F\u7684\u6570\u636E\uFF0C\u5E76\u4E0D\u80FD\u963B\u6B62",n(e.strong,{children:"\u53D1\u9001\u8BF7\u6C42"}),"\u3002"]}),`
`,n(e.h2,{id:"vue-\u5904\u7406\u7ADE\u6001\u95EE\u9898",children:"Vue \u5904\u7406\u7ADE\u6001\u95EE\u9898"}),`
`,l(e.p,{children:["\u5728\u300AVue.js \u8BBE\u8BA1\u4E0E\u5B9E\u73B0\u300B\u7684 ",n(e.em,{children:"4.11 \u8FC7\u671F\u7684\u526F\u4F5C\u7528"})," \u4E2D\uFF0C\u4EE5",n(e.code,{children:"watch"})," API \u4E3A\u4F8B\u8BB2\u8FF0\u4E86 Vue \u5185\u90E8\u5BF9\u7ADE\u6001\u95EE\u9898\u7684\u5904\u7406\u3002"]}),`
`,l(e.p,{children:["\u5728\u4E0B\u9762\u7684\u7247\u6BB5\u4E2D\uFF0C\u77ED\u65F6\u95F4\u5185\u591A\u6B21\u64CD\u4F5C",n(e.code,{children:"obj"}),"\u4E5F\u4F1A\u53D1\u8D77\u591A\u6B21 data fetching\uFF0C\u4EA7\u751F\u7ADE\u6001\u95EE\u9898\u3002"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"let"}),` finalData

`,n(e.span,{className:"hljs-title function_",children:"watch"}),"(obj, ",n(e.span,{className:"hljs-keyword",children:"async"}),` () => {
  `,n(e.span,{className:"hljs-comment",children:"// \u53D1\u9001\u5E76\u7B49\u5F85\u7F51\u7EDC\u8BF7\u6C42"}),`
  `,n(e.span,{className:"hljs-keyword",children:"const"})," res = ",n(e.span,{className:"hljs-keyword",children:"await"})," ",n(e.span,{className:"hljs-title function_",children:"fetch"}),"(",n(e.span,{className:"hljs-string",children:"'/path/to/request'"}),`)
  `,n(e.span,{className:"hljs-comment",children:"// \u5C06\u8BF7\u6C42\u7ED3\u679C\u8D4B\u503C\u7ED9 data"}),`
  finalData = res
})
`]})}),`
`,l(e.p,{children:["Vue 3 \u4E3A\u8FD9\u79CD\u60C5\u51B5\u4E13\u95E8\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7C7B\u4F3C\u4E8E cleanup \u51FD\u6570\u7684",n(e.code,{children:"onInvalidate"}),"\uFF0C\u5B83\u662F",n(e.code,{children:"watch"}),"\u56DE\u8C03\u7684\u7B2C\u4E09\u4E2A\u53EF\u9009\u53C2\u6570\uFF0C\u662F\u4E00\u4E2A\u7528\u6765",n(e.strong,{children:"\u6CE8\u518C\u56DE\u8C03\u51FD\u6570"}),"\u7684\u51FD\u6570\u3002"]}),`
`,l(e.p,{children:[n(e.code,{children:"onInvalidate"}),"\u7684\u539F\u7406\u662F\uFF1A\u5728",n(e.code,{children:"watch"}),"\u5185\u90E8\u6BCF\u6B21\u68C0\u6D4B\u5230\u53D8\u66F4\u540E\uFF0C\u5728\u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C",n(e.strong,{children:"\u4E4B\u524D"}),"\uFF0C\u4F1A\u5148\u8C03\u7528\u901A\u8FC7",n(e.code,{children:"onInvalidate"}),"\u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u3002"]}),`
`,n(e.p,{children:"\u5F88\u5BB9\u6613\u60F3\u5230\uFF0C\u8FD9\u548C\u4E0A\u9762 React Effects \u7684 cleanup \u51FD\u6570\u539F\u7406\u51E0\u4E4E\u4E00\u6A21\u4E00\u6837\u3002"}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-title function_",children:"watch"}),"(obj, ",n(e.span,{className:"hljs-keyword",children:"async"}),` (newValue, oldValue, onInvalidate) => {
  `,n(e.span,{className:"hljs-keyword",children:"let"})," expired = ",n(e.span,{className:"hljs-literal",children:"false"}),`

  `,n(e.span,{className:"hljs-comment",children:"// \u526F\u4F5C\u7528\u91CD\u65B0\u6267\u884C\u4E4B\u524D\uFF0C\u6267\u884C\u8BE5\u56DE\u8C03"}),`
  `,n(e.span,{className:"hljs-title function_",children:"onInvalidate"}),"(",n(e.span,{className:"hljs-function",children:"() =>"}),` {
    `,n(e.span,{className:"hljs-comment",children:"// \u95ED\u5305"}),`
    expired = `,n(e.span,{className:"hljs-literal",children:"true"}),`
  })

  `,n(e.span,{className:"hljs-keyword",children:"const"})," res = ",n(e.span,{className:"hljs-keyword",children:"await"})," ",n(e.span,{className:"hljs-title function_",children:"fetch"}),"(",n(e.span,{className:"hljs-string",children:"'/path/to/request'"}),`)
  `,n(e.span,{className:"hljs-comment",children:"// "}),`
  `,n(e.span,{className:"hljs-keyword",children:"if"}),` (!expired) {
    finalData = res
  }
})
`]})}),`
`,l(e.p,{children:["\u4E24\u8005\u7684\u89E3\u51B3\u65B9\u6CD5\u51E0\u4E4E",n(e.strong,{children:"\u4E00\u6A21\u4E00\u6837"}),"\uFF0C\u533A\u522B\u53EA\u5728\u4E8E Vue \u6CE8\u518C cleanup \u51FD\u6570\u7684 API \u5F62\u5F0F\u8F83\u4E3A\u7279\u6B8A\uFF0C\u662F\u4F20\u9012\u7ED9",n(e.code,{children:"watch"}),`\u7684\u56DE\u8C03\u51FD\u6570\u7684\u4E00\u4E2A\u7C7B\u4F3C\u4E8E hook \u7684\u53EF\u9009\u53C2\u6570,
\u6BD4\u8D77 React \u66F4\u52A0\u7684`,n(e.strong,{children:"\u96C6\u6210"}),"\uFF0C\u4F46\u90FD\u5E94\u7528\u4E86",n(e.strong,{children:"\u95ED\u5305"}),"\u7684\u601D\u7EF4\u3002"]})]})}function m(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(c,s)})):c(s)}export{h as date,m as default,d as duration,r as lang,o as path,i as title};
