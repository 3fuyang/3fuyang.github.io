import{a as e,j as l,F as i}from"./index.f5fe221c.js";const a="JavaScript \u7684\u4E8B\u4EF6\u5FAA\u73AF\uFF08Event Loop\uFF09",t="2022-09-03T18:42:00.000+00:00",h="zh",o="4min",d="/blog/js-event-loop";function r(c){const n=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",strong:"strong",ul:"ul",code:"code",blockquote:"blockquote",pre:"pre",span:"span",h2:"h2"},c.components);return l(i,{children:[e(n.nav,{className:"toc",children:e(n.ol,{className:"toc-level toc-level-1",children:l(n.li,{className:"toc-item toc-item-h1",children:[e(n.a,{className:"toc-link toc-link-h1",href:"#javascript-\u7684\u4E8B\u4EF6\u5FAA\u73AFevent-loop",children:"JavaScript \u7684\u4E8B\u4EF6\u5FAA\u73AF\uFF08Event Loop\uFF09"}),l(n.ol,{className:"toc-level toc-level-2",children:[e(n.li,{className:"toc-item toc-item-h2",children:e(n.a,{className:"toc-link toc-link-h2",href:"#\u4EC0\u4E48\u4F1A\u521B\u5EFA\u5B8F\u4EFB\u52A1macrotask",children:"\u4EC0\u4E48\u4F1A\u521B\u5EFA\u5B8F\u4EFB\u52A1\uFF08macrotask\uFF09\uFF1F"})}),e(n.li,{className:"toc-item toc-item-h2",children:e(n.a,{className:"toc-link toc-link-h2",href:"#\u4EC0\u4E48\u4F1A\u521B\u5EFA\u5FAE\u4EFB\u52A1microtask",children:"\u4EC0\u4E48\u4F1A\u521B\u5EFA\u5FAE\u4EFB\u52A1\uFF08microtask\uFF09\uFF1F"})})]})]})})}),`
`,e(n.h1,{id:"javascript-\u7684\u4E8B\u4EF6\u5FAA\u73AFevent-loop",children:"JavaScript \u7684\u4E8B\u4EF6\u5FAA\u73AF\uFF08Event Loop\uFF09"}),`
`,l(n.p,{children:[e(n.strong,{children:"\u53C2\u8003\u8D44\u6599"}),"\uFF1A"]}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly",children:"Tasks, microtasks, queues and schedules - JakeArchibald.com"})}),`
`,e(n.li,{children:e(n.a,{href:"https://www.tangshuang.net/7617.html",children:"\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236_\u5510\u971C\u7684\u535A\u5BA2 (tangshuang.net)"})}),`
`]}),`
`,l(n.p,{children:["JavaScript \u662F\u4E00\u95E8",e(n.strong,{children:"\u5355\u7EBF\u7A0B\u540C\u6B65"}),"\u7F16\u7A0B\u8BED\u8A00\uFF0C\u4EFB\u52A1\u53EA\u80FD\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u4E00\u4E2A\u4E00\u4E2A",e(n.strong,{children:"\u4E32\u884C"}),"\u5730\u6267\u884C\u3002"]}),`
`,l(n.p,{children:["\u4E3A\u4E86\u8BA9\u591A\u7C7B\u578B\u7684\u4EFB\u52A1\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6709\u6761\u4E0D\u7D0A\u5730\u6267\u884C\uFF0CJavaScript \u5F15\u5165\u4E86",e(n.strong,{children:"\u4EFB\u52A1\u961F\u5217"}),"\uFF08Task Queue\uFF09\u548C",e(n.strong,{children:"\u4E8B\u4EF6\u5FAA\u73AF"}),"\uFF08Event Loop\uFF09\u3002"]}),`
`,l(n.p,{children:["\u867D\u7136 JS \u4E3A\u5355\u7EBF\u7A0B\uFF0C\u4F46\u4E00\u4E2A\u9875\u9762\uFF08tab\uFF09\u662F",e(n.strong,{children:"\u591A\u7EBF\u7A0B"}),"\u7684\uFF0C\u5176\u4E2D\u6700\u4E3B\u8981\u7684\u662F JS \u5F15\u64CE\u7EBF\u7A0B\uFF08V8\uFF09\u3001GUI \u6E32\u67D3\u5F15\u64CE\u7EBF\u7A0B\u3002"]}),`
`,l(n.p,{children:["\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u6709",e(n.strong,{children:"\u81EA\u5DF1\u7684"}),"\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u4E14",e(n.strong,{children:"\u540C\u6E90"}),"\u7684\u591A\u4E2A",e(n.strong,{children:"\u7A97\u53E3"}),"\u4E4B\u95F4",e(n.strong,{children:"\u5171\u4EAB"}),"\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u56E0\u6B64\u5B83\u4EEC\u53EF\u4EE5\u540C\u6B65\u5730\u901A\u4FE1\u3002"]}),`
`,l(n.p,{children:["\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u6709",e(n.strong,{children:"\u591A\u4E2A"}),"\u4EFB\u52A1\u6E90\uFF08source\uFF09\uFF0C\u8FD9\u4E9B\u6E90\u7EF4\u62A4\u5B83\u4EEC\u5185\u90E8\u4EFB\u52A1\u7684\u6267\u884C\u6B21\u5E8F\uFF0C\u4F46\u6D4F\u89C8\u5668\u6BCF\u6B21\u5FAA\u73AF\uFF08\u6BCF\u4E00\u6B21\u5FAA\u73AF\u88AB\u79F0\u4E3A\u4E00",e(n.code,{children:"Tick"}),"\uFF09\u4F1A",e(n.strong,{children:"\u6311\u9009\u4E00\u4E2A\u6E90"}),"\uFF0C\u4ECE\u4E2D\u53D6\u51FA\u4E00\u4E2A\u4EFB\u52A1\u3002\u8FD9\u4F7F\u5F97\u6D4F\u89C8\u5668\u80FD\u4F18\u5148\u8003\u8651",e(n.strong,{children:"\u6027\u80FD\u654F\u611F"}),"\u7684\u4EFB\u52A1\uFF0C\u6BD4\u5982\u7528\u6237\u8F93\u5165\u3002"]}),`
`,l(n.p,{children:[e(n.strong,{children:"\u4EFB\u52A1"}),"\u662F\u8BBE\u7F6E\uFF08scheduled\uFF09\u597D\u7684\uFF0C\u56E0\u6B64\u6D4F\u89C8\u5668\u80FD\u4ECE\u5176\u5185\u90E8\u8FDB\u5165 JavaScript/DOM \u57DF\uFF0C\u4EE5\u786E\u4FDD\u8FD9\u4E9B\u884C\u4E3A\u662F\u987A\u5E8F\u53D1\u751F\u7684\u3002\u5728\u4EFB\u52A1\u4E4B\u95F4\uFF0C\u6D4F\u89C8\u5668\u53EF\u80FD\u4F1A\u8FDB\u884C\u6E32\u67D3\u66F4\u65B0\u3002"]}),`
`,l(n.p,{children:["\u4ECE\u4E00\u6B21\u9F20\u6807\u70B9\u51FB\u4E2D\u83B7\u53D6\u4E8B\u4EF6\u56DE\u8C03\u5C31\u9700\u8981\u8BBE\u7F6E\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u540C\u6837\uFF0C\u89E3\u6790 HTML\u3001",e(n.code,{children:"setTimeout"}),"\u4E5F\u662F\u3002"]}),`
`,l(n.p,{children:[e(n.strong,{children:"\u5FAE\u4EFB\u52A1"}),"\uFF08Microtasks\uFF09\u4E00\u822C\u662F\u5E94\u8BE5\u5728\u5F53\u524D\u6267\u884C\u7684\u811A\u672C\u5B8C\u6210\u540E\uFF0C\u7ACB\u5373\u53D1\u751F\u7684\u884C\u4E3A\uFF0C\u5B83\u4EEC\u53EF\u80FD\u6709\u70B9",e(n.strong,{children:"\u5F02\u6B65"}),"\uFF0C\u4F46\u4E0D\u521B\u5EFA\u65B0\u7684\u4EFB\u52A1\u3002"]}),`
`,l(n.p,{children:["\u5F53\u6267\u884C\u6808\u4E2D\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u6CA1\u6709\u5176\u4ED6\u7684 JS \u6B63\u5728\u4E3B\u7EBF\u7A0B\u8FD0\u884C\u65F6\uFF0C\u5FAE\u4EFB\u52A1\u5C06\u88AB\u5904\u7406\u3002\u5728\u5FAE\u4EFB\u52A1\u4E2D\u521B\u5EFA\u7684\u5FAE\u4EFB\u52A1\u4E5F\u4F1A\u88AB\u6DFB\u52A0\u5230\u5F53\u524D\u4EFB\u52A1\u7684",e(n.strong,{children:"\u5FAE\u4EFB\u52A1\u961F\u5217"}),"\u4E2D\u3002"]}),`
`,l(n.blockquote,{children:[`
`,l(n.p,{children:["\u6CE8\u610F\uFF1A\u5F53\u5F15\u64CE\u9047\u5230\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u540E\uFF0C\u4F1A\u5728\u5C06\u5176\u52A0\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\u540E\uFF0C",e(n.strong,{children:"\u8DF3\u8FC7"}),"\u5176\u6574\u4F53\u8868\u8FBE\u5F0F\u7684\u6267\u884C\u3002"]}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-javascript",children:[e(n.span,{className:"hljs-title class_",children:"Promise"}),".",e(n.span,{className:"hljs-title function_",children:"resolve"}),`()
	`,e(n.span,{className:"hljs-comment",children:"// microtask1"}),`
	.`,e(n.span,{className:"hljs-title function_",children:"then"}),"(",e(n.span,{className:"hljs-function",children:"() =>"}),` {
    `,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(",e(n.span,{className:"hljs-string",children:"'promise1'"}),`)
	})
	`,e(n.span,{className:"hljs-comment",children:"// microtask2"}),`
    .`,e(n.span,{className:"hljs-title function_",children:"then"}),"(",e(n.span,{className:"hljs-function",children:"() =>"}),` {
        `,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(",e(n.span,{className:"hljs-string",children:"'promise2'"}),`)
    })

`,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(",e(n.span,{className:"hljs-string",children:"'end'"}),`)
`]})}),`
`,l(n.p,{children:["\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u5F53\u5F15\u64CE\u9047\u5230",e(n.code,{children:"microtask1"}),"\u65F6\uFF0C\u5C06\u5176\u52A0\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u4F46\u6B64\u65F6",e(n.strong,{children:"\u4E0D\u4F1A\u626B\u63CF"}),"\u5230",e(n.code,{children:"microtask2"}),"\uFF1B\u5728\u6267\u884C\u5B8C\u811A\u672C\u540E\uFF0C\u53D6\u51FA",e(n.code,{children:"microtask1"}),"\u6267\u884C\uFF0C\u6B64\u65F6\u624D\u626B\u63CF\u5230",e(n.code,{children:"microtask2"}),"\uFF0C\u5C06\u5176\u52A0\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\u3002"]}),`
`]}),`
`,l(n.p,{children:["\u7531\u4E8E\u6267\u884C\u5FAE\u4EFB\u52A1\u53EF\u4EE5\u5F15\u5165\u65B0\u7684\u5FAE\u4EFB\u52A1\uFF0C\u4E14\u8FD9\u4E9B\u5FAE\u4EFB\u52A1\u90FD\u4F1A\u5728\u5F53\u524D\u5B8F\u4EFB\u52A1\u4E0B\u6267\u884C\u5B8C\u6BD5\uFF0C\u6240\u4EE5\u5FAE\u4EFB\u52A1\u53EF\u80FD\u4E00\u76F4\u5360\u7528\u5F53\u524D\u7684\u5F15\u64CE\uFF0C",e(n.strong,{children:"\u65E0\u9650\u963B\u585E"}),"\u63A5\u4E0B\u6765\u7684\u5B8F\u4EFB\u52A1\u3002"]}),`
`,e("img",{src:"/images/js-event-loop/warning.png",alt:"warning",rel:"noreferrer",className:"invertable"}),`
`,e(n.h2,{id:"\u4EC0\u4E48\u4F1A\u521B\u5EFA\u5B8F\u4EFB\u52A1macrotask",children:"\u4EC0\u4E48\u4F1A\u521B\u5EFA\u5B8F\u4EFB\u52A1\uFF08macrotask\uFF09\uFF1F"}),`
`,e(n.p,{children:"\u5E38\u89C1\u7684\uFF1A"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["\u76F4\u63A5\u6267\u884C\u4E00\u4E2A\u65B0\u7684 JavaScript \u7A0B\u5E8F\u6216\u5B50\u7A0B\u5E8F\u65F6\uFF08\u6BD4\u65B9\u8BF4\u4ECE\u63A7\u5236\u53F0\u3001\u4E00\u4E2A",e(n.code,{children:"<script>"}),"\u5143\u7D20 / JS \u6587\u4EF6\u4E2D\uFF09\u3002"]}),`
`,l(n.li,{children:["\u89E6\u53D1\u4E00\u4E2A UI \u4EA4\u4E92\u4E8B\u4EF6\u65F6\uFF0C",e(n.strong,{children:"\u4E8B\u4EF6\u7684\u5904\u7406\u56DE\u8C03"}),"\uFF08event handler callback\uFF09\u5C06\u52A0\u5165\u5B8F\u4EFB\u52A1\u961F\u5217\u3002"]}),`
`]}),`
`,l(n.blockquote,{children:[`
`,e(n.p,{children:e(n.strong,{children:"\u6CE8\u610F\uFF1A"})}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["\u7531\u4E8B\u4EF6\u5192\u6CE1\u6216\u6355\u83B7\u5BFC\u81F4\u7684\u591A\u4E2A\u4E8B\u4EF6\u5904\u7406\u56DE\u8C03\u5C5E\u4E8E",e(n.strong,{children:"\u540C\u4E00\u4E2A"}),"\u5B8F\u4EFB\u52A1\u3002"]}),`
`,l(n.li,{children:["\u5728\u5B8F\u4EFB\u52A1\u4E2D\uFF0C\u53EA\u8981",e(n.strong,{children:"\u6267\u884C\u6808"}),"\u4E0D\u4E3A\u7A7A\uFF0C\u5C31\u65E0\u6CD5\u5F00\u59CB\u6267\u884C\u5FAE\u4EFB\u52A1\uFF0C\u8981\u6CE8\u610F\u7528",e(n.strong,{children:"\u9876\u7EA7\u51FD\u6570\u8C03\u7528"}),"\u89E6\u53D1\u5FAE\u4EFB\u52A1\u7684\u60C5\u51B5\u3002"]}),`
`]}),`
`]}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["\u5F53\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF08",e(n.code,{children:"setTimeout()"}),"\u3001",e(n.code,{children:"setInterval()"}),"\uFF09\u5230\u8FBE\u65F6\uFF0C\u5176",e(n.strong,{children:"\u56DE\u8C03"}),"\u88AB\u52A0\u5165\u5230\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u3002"]}),`
`]}),`
`,e(n.p,{children:"\u4E0D\u5E38\u89C1\u7684\uFF1A"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:[`
`,l(n.p,{children:["Node.js API ",e(n.code,{children:"setImmediate"}),"\u7684\u56DE\u8C03\u4F1A\u52A0\u5165\u5230\u5B8F\u4EFB\u52A1\u961F\u5217\u3002"]}),`
`]}),`
`,l(n.li,{children:[`
`,l(n.p,{children:["\u8D1F\u8D23 Worker \u6216 Window \u4E4B\u95F4\u901A\u4FE1\u7684",e(n.code,{children:"portMessage"}),"\u56DE\u8C03\u3002"]}),`
`]}),`
`,l(n.li,{children:[`
`,e(n.p,{children:"MessageChannel\u3001I/O ..."}),`
`]}),`
`]}),`
`,e(n.h2,{id:"\u4EC0\u4E48\u4F1A\u521B\u5EFA\u5FAE\u4EFB\u52A1microtask",children:"\u4EC0\u4E48\u4F1A\u521B\u5EFA\u5FAE\u4EFB\u52A1\uFF08microtask\uFF09\uFF1F"}),`
`,e(n.p,{children:"\u5E38\u89C1\u7684\uFF1A"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["Promise \u5BF9\u8C61\u7528",e(n.code,{children:"then()"}),"\u6CE8\u518C\u7684\u56DE\u8C03\u3002"]}),`
`,l(n.li,{children:[e(n.code,{children:"async/await"}),"\u4E2D\u7684",e(n.code,{children:"await"}),"\u8BED\u53E5\uFF08statement\uFF09\u3002"]}),`
`,l(n.li,{children:[e(n.code,{children:"MutationObserver"}),"\u7684\u56DE\u8C03\u3002"]}),`
`]}),`
`,l(n.blockquote,{children:[`
`,l(n.p,{children:[e(n.strong,{children:"\u6CE8\u610F"}),"\uFF1A\u5F53\u524D\u5B8F\u4EFB\u52A1\u4E0B\u6709",e(n.code,{children:"pending"}),"\u72B6\u6001\u7684",e(n.code,{children:"MutationObserver"}),"\u56DE\u8C03\u65F6\uFF0C",l(n.strong,{children:["\u4E0D\u4F1A\u4E3A\u5176\u4ED6",e(n.code,{children:"MutationObserver"}),"\u56DE\u8C03\u518D\u521B\u5EFA\u65B0\u7684\u5FAE\u4EFB\u52A1"]}),"\u3002"]}),`
`,e("img",{alt:"mid-execution",rel:"noreferrer",src:"/images/js-event-loop/mid-execution.png"}),`
`]}),`
`,e(n.p,{children:"\u4E0D\u5E38\u89C1\u7684\uFF1A"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["Node.js \u4E2D\u7684",e(n.code,{children:"process.nextTick()"}),"\u7684\u56DE\u8C03\u3002"]}),`
`]})]})}function m(c={}){const{wrapper:n}=c.components||{};return n?e(n,Object.assign({},c,{children:e(r,c)})):r(c)}export{t as date,m as default,o as duration,h as lang,d as path,a as title};
