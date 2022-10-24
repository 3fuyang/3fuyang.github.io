import{a as n,j as i,F as r}from"./index.2b1fda4e.js";const o="Promise/A+ \u89C4\u8303",h="2022-10-03T20:56:00.000+00:00",t="zh",s="4min",m="/blog/promise-a-plus";function c(l){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",p:"p",ul:"ul",h2:"h2",code:"code",strong:"strong",h3:"h3",pre:"pre",span:"span"},l.components);return i(r,{children:[n(e.nav,{className:"toc",children:n(e.ol,{className:"toc-level toc-level-1",children:i(e.li,{className:"toc-item toc-item-h1",children:[n(e.a,{className:"toc-link toc-link-h1",href:"#promisea-\u89C4\u8303",children:"Promise/A+ \u89C4\u8303"}),i(e.ol,{className:"toc-level toc-level-2",children:[n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#1-terminology",children:"1. Terminology"})}),i(e.li,{className:"toc-item toc-item-h2",children:[n(e.a,{className:"toc-link toc-link-h2",href:"#2-requirements",children:"2. Requirements"}),i(e.ol,{className:"toc-level toc-level-3",children:[n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#21-promise-states",children:"2.1 Promise States"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#22-the-then-method",children:"2.2 The then Method"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#23-the-promise-resolution-procedure",children:"2.3 The Promise Resolution Procedure"})})]})]})]})]})})}),`
`,n(e.h1,{id:"promisea-\u89C4\u8303",children:"Promise/A+ \u89C4\u8303"}),`
`,i(e.blockquote,{children:[`
`,n(e.p,{children:"I reprint this article in Chinese, just like Prettier."}),`
`,n(e.p,{children:"Reference:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://promisesaplus.com/",children:"Promises/A+"})}),`
`]}),`
`]}),`
`,n(e.h2,{id:"1-terminology",children:"1. Terminology"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:['"promise" \u662F\u4E00\u4E2A\u5BF9\u8C61\u6216\u8005\u51FD\u6570\uFF0C\u5176',n(e.code,{children:"then"}),"\u65B9\u6CD5\u7684\u5B9E\u73B0\u4E0E\u8BE5\u89C4\u8303\u4E00\u81F4\u3002"]}),`
`,i(e.li,{children:['"thenable"\u662F\u4E00\u4E2A\u5B9A\u4E49\u4E86',n(e.code,{children:"then"}),"\u65B9\u6CD5\u7684\u5BF9\u8C61\u6216\u8005\u51FD\u6570\u3002"]}),`
`]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:[n(e.strong,{children:"\u6CE8\u610F"}),"\uFF1A\u5728 ECMAScript \u89C4\u8303\u4E2D\uFF0C\u53EA\u8981\u4E00\u4E2A\u5BF9\u8C61",n(e.strong,{children:"\u5B9A\u4E49"}),"\u4E86",n(e.code,{children:"then"}),"\u65B9\u6CD5\uFF0C",n(e.strong,{children:"\u65E0\u8BBA\u5B9E\u73B0\u5982\u4F55"}),"\uFF0C\u90FD\u88AB\u8BA4\u4E3A\u5B9E\u73B0\u4E86 Thenable \u63A5\u53E3\u3002"]}),`
`]}),`
`,i(e.ol,{start:"3",children:[`
`,i(e.li,{children:['"value"\u662F\u4EFB\u610F JavaScript \u503C\uFF08\u5305\u542B',n(e.code,{children:"undefined"}),"\uFF0C",n(e.code,{children:"thenable"}),"\u6216",n(e.code,{children:"promise"}),"\uFF09\u3002"]}),`
`,i(e.li,{children:['"exception"\u662F\u4E00\u4E2A\u7531',n(e.code,{children:"throw"}),"\u8BED\u53E5\u629B\u51FA\u7684\u503C\u3002"]}),`
`,n(e.li,{children:'"reason"\u662F\u4E00\u4E2A\u89E3\u91CA promise \u53D8\u4E3A rejected \u539F\u56E0\u7684\u503C\u3002'}),`
`]}),`
`,n(e.h2,{id:"2-requirements",children:"2. Requirements"}),`
`,n(e.h3,{id:"21-promise-states",children:"2.1 Promise States"}),`
`,n(e.p,{children:"\u4E00\u4E2A Promise \u5FC5\u987B\u662F\u4EE5\u4E0B\u4E00\u79CD\u72B6\u6001\uFF1Apending\uFF0Cfullfied \u548C rejected."}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["\u5F53\u5904\u4E8E pending\uFF0Cpromise \uFF1A",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"\u53EF\u80FD\u8F6C\u53D8\u4E3A fullfied \u6216 rejected \u72B6\u6001\u3002"}),`
`]}),`
`]}),`
`,i(e.li,{children:["\u5F53\u5904\u4E8E fullfied\uFF0Cpromise \uFF1A",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"\u4E0D\u80FD\u518D\u8F6C\u53D8\u4E3A\u5176\u4ED6\u72B6\u6001\u3002"}),`
`,n(e.li,{children:"\u5FC5\u987B\u6709\u4E00\u4E2A\u7ED3\u679C\u503C\uFF0C\u8FD9\u4E2A\u503C\u4E0D\u53EF\u6539\u53D8\u3002"}),`
`]}),`
`]}),`
`,i(e.li,{children:["\u5F53\u5904\u4E8E rejected\uFF0Cpromise\uFF1A",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"\u4E0D\u80FD\u518D\u8F6C\u53D8\u4E3A\u5176\u4ED6\u72B6\u6001\u3002"}),`
`,n(e.li,{children:"\u5FC5\u987B\u6709\u4E00\u4E2A\u539F\u56E0\uFF0C\u8FD9\u4E2A\u539F\u56E0\u4E0D\u53EF\u6539\u53D8\u3002"}),`
`]}),`
`]}),`
`]}),`
`,i(e.p,{children:['\u8FD9\u91CC\u7684"\u4E0D\u53EF\u6539\u53D8"\u610F\u4E3A immutable\uFF0C\u5373 JavaScript \u5168\u7B49',n(e.code,{children:"==="}),"\uFF0C\u4F46\u4E0D\u8981\u6C42\u6DF1\u4E0D\u53EF\u53D8\uFF08deep immutability\uFF09\u3002"]}),`
`,i(e.h3,{id:"22-the-then-method",children:["2.2 The ",n(e.code,{children:"then"})," Method"]}),`
`,i(e.p,{children:["\u4E00\u4E2A promise \u5FC5\u987B\u63D0\u4F9B\u4E00\u4E2A",n(e.code,{children:"then"}),"\u65B9\u6CD5\uFF0C\u4EE5\u8BBF\u95EE\u5176\u5F53\u524D\u6216\u6700\u7EC8\u7684\u7ED3\u679C\u503C\uFF08value\uFF09\u6216\u539F\u56E0\uFF08reason\uFF09\u3002"]}),`
`,i(e.p,{children:["Promise \u7684",n(e.code,{children:"then"}),"\u65B9\u6CD5\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A"]}),`
`,n(e.pre,{children:i(e.code,{className:"hljs language-js",children:["promise.",n(e.span,{className:"hljs-title function_",children:"then"}),`(onFulfied, onRejected)
`]})}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"onFulfilled"}),"\u548C",n(e.code,{children:"onRejected"}),"\u90FD\u662F",n(e.strong,{children:"\u53EF\u9009"}),"\u53C2\u6570\uFF1A"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"onFulfilled"}),"\u4E0D\u662F\u51FD\u6570\uFF0C\u5176\u5E94\u8BE5\u88AB\u5FFD\u7565\u3002"]}),`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"onRejected"}),"\u4E0D\u662F\u51FD\u6570\uFF0C\u5176\u5E94\u8BE5\u88AB\u5FFD\u7565\u3002"]}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["\u5982\u679C",n(e.code,{children:"onFulfilled"}),"\u662F\u51FD\u6570\uFF1A"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["\u5B83\u5FC5\u987B\u5728",n(e.code,{children:"promise"}),"\u53D8\u4E3A fullfied \u540E\u88AB\u8C03\u7528\uFF0C\u5E76\u4EE5",n(e.code,{children:"promise"}),"\u7684\u7ED3\u679C\u503C\uFF08value\uFF09\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002"]}),`
`,i(e.li,{children:["\u5728",n(e.code,{children:"promise"}),"\u53D8\u4E3A fullfied \u4E4B\u524D\u4E0D\u80FD\u88AB\u8C03\u7528\u3002"]}),`
`,n(e.li,{children:"\u6700\u591A\u53EA\u88AB\u8C03\u7528\u4E00\u6B21\u3002"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["\u5982\u679C",n(e.code,{children:"onRejected"}),"\u662F\u51FD\u6570\uFF1A"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["\u5B83\u5FC5\u987B\u5728",n(e.code,{children:"promise"}),"\u53D8\u4E3A rejected \u540E\u88AB\u8C03\u7528\uFF0C\u5E76\u4EE5",n(e.code,{children:"promise"}),"\u7684\u7406\u7531\uFF08reason\uFF09\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002"]}),`
`,i(e.li,{children:["\u5728",n(e.code,{children:"promise"}),"\u53D8\u4E3A rejected \u4E4B\u524D\u4E0D\u80FD\u88AB\u8C03\u7528\u3002"]}),`
`,n(e.li,{children:"\u6700\u591A\u53EA\u88AB\u8C03\u7528\u4E00\u6B21\u3002"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"onFulfilled"}),"\u548C",n(e.code,{children:"onRejected"}),"\u5728\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u53EA\u5305\u542B",n(e.strong,{children:"\u5E73\u53F0\u4EE3\u7801"}),"\uFF08platform code\uFF09\u4E4B\u524D\u4E0D\u53EF\u88AB\u8C03\u7528\u3002"]}),`
`]}),`
`]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:[n(e.strong,{children:"\u5E73\u53F0\u4EE3\u7801"}),"\uFF08platform code\uFF09\u662F\u6307\u5F15\u64CE\u3001\u73AF\u5883\u548C promise \u5B9E\u73B0\u4EE3\u7801\u3002\u5B9E\u9645\u4E0A\uFF0C\u8BE5\u8981\u6C42\u4FDD\u8BC1",n(e.code,{children:"onFulfilled"}),"\u548C",n(e.code,{children:"onRejected"}),"\u5728\u8C03\u7528",n(e.code,{children:"then"}),"\u540E\u88AB",n(e.strong,{children:"\u5F02\u6B65"}),"\u6267\u884C\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7",n(e.strong,{children:"\u5B8F\u4EFB\u52A1"}),"\u673A\u5236\u5B9E\u73B0\uFF08\u6BD4\u5982",n(e.code,{children:"setTimeout"}),"\u6216",n(e.code,{children:"setImmediate"}),"\uFF09\uFF0C\u6216\u8005",n(e.strong,{children:"\u5FAE\u4EFB\u52A1"}),"\u673A\u5236\uFF08\u6BD4\u5982",n(e.code,{children:"MutationObserver"}),"\u6216",n(e.code,{children:"process.nextTick"}),"\uFF09\u3002"]}),`
`]}),`
`,i(e.ol,{start:"5",children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"onFulfilled"}),"\u548C",n(e.code,{children:"onRejected"}),"\u5FC5\u987B\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528\uFF08\u6CA1\u6709",n(e.code,{children:"this"}),"\u5BF9\u8C61\uFF09\u3002"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["\u5728\u540C\u4E00\u4E2A promise \u4E0A\uFF0C",n(e.code,{children:"then"}),"\u53EF\u80FD\u88AB\u591A\u6B21\u8C03\u7528\u3002"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["\u5F53",n(e.code,{children:"promise"}),"\u662F fullfied\uFF0C\u6240\u6709\u76F8\u5173\u7684",n(e.code,{children:"onFulfilled"}),"\u5FC5\u987B\u6309\u7167\u5176",n(e.code,{children:"then"}),"\u7684\u8C03\u7528\u987A\u5E8F\u6267\u884C\u3002"]}),`
`,i(e.li,{children:["\u5F53",n(e.code,{children:"promise"}),"\u662F rejected\uFF0C\u6240\u6709\u76F8\u5173\u7684",n(e.code,{children:"onRejected"}),"\u5FC5\u987B\u6309\u7167\u5176",n(e.code,{children:"then"}),"\u7684\u8C03\u7528\u987A\u5E8F\u6267\u884C\u3002"]}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"then"}),"\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A promise\u3002"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:[`
`,n(e.pre,{children:i(e.code,{className:"hljs language-js",children:["promise2 = promise1.",n(e.span,{className:"hljs-title function_",children:"then"}),`(onFulfied, onRejected)
`]})}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["\u5982\u679C",n(e.code,{children:"onFulfilled"}),"\u6216",n(e.code,{children:"onRejected"}),n(e.strong,{children:"\u8FD4\u56DE"}),"\u4E86\u4E00\u4E2A\u503C",n(e.code,{children:"x"}),"\uFF0C",n(e.code,{children:"promise2"}),"\u6267\u884C promise pesolution procedure ",n(e.code,{children:"[[Resolve]](promise2, x)"}),"\u3002"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["\u5982\u679C",n(e.code,{children:"onFulfilled"}),"\u6216",n(e.code,{children:"onRejected"}),"\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38",n(e.code,{children:"e"}),"\uFF0C",n(e.code,{children:"promise2"}),"\u8F6C\u53D8\u4E3A rejected\uFF0C\u5176\u539F\u56E0\u4E3A",n(e.code,{children:"e"}),"\u3002"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["\u5982\u679C",n(e.code,{children:"onFulfilled"}),"\u4E0D\u662F\u51FD\u6570\uFF0C\u4E14",n(e.code,{children:"promise1"}),"\u8F6C\u4E3A\u4E86 fullfied\uFF0C\u5219",n(e.code,{children:"promise2"}),"\u8F6C\u4E3A fullfied\uFF0C\u5176\u7ED3\u679C\u503C\uFF08value\uFF09\u4E0E",n(e.code,{children:"promise1"}),"\u4E00\u6837\u3002"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["\u5982\u679C",n(e.code,{children:"onRejected"}),"\u4E0D\u662F\u51FD\u6570\uFF0C\u4E14",n(e.code,{children:"promise1"}),"\u8F6C\u4E3A\u4E86 rejected\uFF0C\u5219",n(e.code,{children:"promise2"}),"\u8F6C\u4E3A rejected\uFF0C\u5176\u539F\u56E0\uFF08reason\uFF09\u4E0E",n(e.code,{children:"promise1"}),"\u4E00\u6837\u3002"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:["\u6CE8\u610F\uFF1A \u6839\u636E\u5177\u4F53\u5B9E\u73B0\u7684\u4E0D\u540C\uFF0C",n(e.code,{children:"then"}),"\u65B9\u6CD5\u8FD4\u56DE\u7684 promise \u53EF\u80FD\u4E0E\u539F promise \u5B8C\u5168\u76F8\u7B49\u3002"]}),`
`]}),`
`,n(e.h3,{id:"23-the-promise-resolution-procedure",children:"2.3 The Promise Resolution Procedure"}),`
`,i(e.p,{children:["Promise \u89E3\u6790\u6D41\u7A0B\uFF08promise pesolution procedure\uFF09\u662F\u4E00\u4E2A",n(e.strong,{children:"\u62BD\u8C61\u64CD\u4F5C"}),"\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A promise \u548C\u503C\uFF08value\uFF09\u4F5C\u4E3A\u8F93\u5165\uFF0C\u8BB0\u4E3A",n(e.code,{children:"[[Resolve]](promise, x)"}),"\u3002\u5982\u679C",n(e.code,{children:"x"}),"\u662F\u4E00\u4E2A thenable\uFF0C\u90A3\u4E48\u5728",n(e.code,{children:"x"}),"\u4E0E promise \u5177\u6709\u7C7B\u4F3C\u884C\u4E3A\u7684\u4F30\u91CF\u4E0B\uFF0C",n(e.code,{children:"promise"}),"\u5C06\u91C7\u7528",n(e.code,{children:"x"}),"\u7684\u72B6\u6001\u3002\u5426\u5219\uFF0C",n(e.code,{children:"promise"}),"\u5C06\u4EE5",n(e.code,{children:"x"}),"\u4E3A\u7ED3\u679C\uFF0C\u8FDB\u5165 fulllfied\u3002"]}),`
`,i(e.p,{children:["\u5BF9\u4E8E thenable \u7684\u8FD9\u79CD\u5904\u7406\uFF0C\u4F7F\u5F97 promise \u7684\u5B9E\u73B0\u53EF\u4EE5\u4E92\u64CD\u4F5C\uFF08interoperate\uFF09\uFF0C\u5373\u5B9E\u73B0\u4E86\u6EE1\u8DB3 Promise/A+ \u89C4\u8303\u7684",n(e.code,{children:"then"}),"\u65B9\u6CD5\u7684\u5BF9\u8C61\u5C31\u53EF\u4EE5\u89C6\u4F5C promise\u3002"]}),`
`,i(e.p,{children:["\u8FD0\u884C",n(e.code,{children:"[[Resolve]](promise, x)"}),"\uFF0C\u4F1A\u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4\uFF1A"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"promise"}),"\u548C",n(e.code,{children:"x"}),"\u6307\u5411\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u4EE5",n(e.code,{children:"TypeError"}),"\u4F5C\u4E3A\u539F\u56E0 reject \u8BE5 promise\u3002"]}),`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"x"}),"\u662F\u4E00\u4E2A promise\uFF0C\u91C7\u7528\uFF08adopt\uFF09\u5176\u72B6\u6001\uFF1A",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"x"}),"\u5904\u4E8E pending\uFF0C",n(e.code,{children:"promise"}),"\u4FDD\u6301 pending \u76F4\u5230",n(e.code,{children:"x"}),"\u72B6\u6001\u6539\u53D8\u3002"]}),`
`,i(e.li,{children:["\u5F53",n(e.code,{children:"x"}),"\u8F6C\u4E3A fullfied\uFF0C\u4F7F",n(e.code,{children:"promise"}),"\u4EE5\u76F8\u540C\u7684\u503C\u8F6C\u4E3A fullfied\u3002"]}),`
`,i(e.li,{children:["\u5F53",n(e.code,{children:"x"}),"\u8F6C\u4E3A rejected\uFF0C\u4F7F",n(e.code,{children:"promise"}),"\u4EE5\u76F8\u540C\u7684\u539F\u56E0\u8F6C\u4E3A rejected\u3002"]}),`
`]}),`
`]}),`
`,i(e.li,{children:["\u5426\u5219\uFF0C\u5982\u679C",n(e.code,{children:"x"}),"\u662F\u4E00\u4E2A\u5BF9\u8C61\u6216\u51FD\u6570\uFF1A",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["\u58F0\u660E",n(e.code,{children:"then = x.then"}),"\u3002"]}),`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"x.then"}),"\u5BFC\u81F4\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38",n(e.code,{children:"e"}),"\uFF0C\u5C06",n(e.code,{children:"e"}),"\u4F5C\u4E3A\u539F\u56E0 reject ",n(e.code,{children:"promise"}),"\u3002"]}),`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"then"}),"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C06",n(e.code,{children:"x"}),"\u4F5C\u4E3A\u5176",n(e.code,{children:"this"}),"\u5BF9\u8C61\uFF0C\u4F20\u5165\u7B2C\u4E00\u4E2A\u53C2\u6570",n(e.code,{children:"resolvePromise"}),"\u548C\u7B2C\u4E8C\u4E2A\u53C2\u6570",n(e.code,{children:"rejectPromise"}),"\uFF0C\u8C03\u7528",n(e.code,{children:"then"}),"\uFF1A",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["\u5F53",n(e.code,{children:"resolvePromise"}),"\u4EE5",n(e.code,{children:"y"}),"\u503C\u8C03\u7528\u65F6\uFF0C\u8FD0\u884C",n(e.code,{children:"[[Resolve]](promise, y)"}),"\u3002"]}),`
`,i(e.li,{children:["\u5F53",n(e.code,{children:"rejectPromise"}),"\u4EE5\u539F\u56E0",n(e.code,{children:"r"}),"\u8C03\u7528\u65F6\uFF0C\u7528",n(e.code,{children:"r"})," reject promise\u3002"]}),`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"rejectPromise"}),"\u548C",n(e.code,{children:"resolvePromise"}),"\u90FD\u88AB\u8C03\u7528\uFF0C\u6216\u8005\u4E00\u8005\u88AB\u591A\u6B21\u8C03\u7528\uFF0C\u53EA\u53D6",n(e.strong,{children:"\u7B2C\u4E00\u6B21\u8C03\u7528"}),"\u7684\u7ED3\u679C\uFF0C\u5E76\u5FFD\u89C6\u540E\u7EED\u8C03\u7528\u3002"]}),`
`,i(e.li,{children:["\u5982\u679C\u8C03\u7528",n(e.code,{children:"then"}),"\u629B\u51FA\u5F02\u5E38",n(e.code,{children:"e"}),"\uFF1A",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"resolvePromise"}),"\u6216",n(e.code,{children:"rejectPromise"}),"\u5DF2\u88AB\u8C03\u7528\uFF0C\u5219\u5FFD\u89C6\u5F02\u5E38\u3002"]}),`
`,i(e.li,{children:["\u5426\u5219\uFF0C\u4EE5",n(e.code,{children:"e"}),"\u4E3A\u539F\u56E0 reject promise\u3002"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"then"}),"\u4E0D\u662F\u51FD\u6570\uFF0C\u5219\u4EE5",n(e.code,{children:"x"}),"\u4E3A\u503C\u5C06",n(e.code,{children:"promise"}),"\u8F6C\u4E3A fullfied\u3002"]}),`
`]}),`
`]}),`
`,i(e.li,{children:["\u5982\u679C",n(e.code,{children:"x"}),"\u4E0D\u662F\u51FD\u6570\u6216\u5BF9\u8C61\uFF0C\u5219\u4EE5",n(e.code,{children:"x"}),"\u4E3A\u503C\u5C06",n(e.code,{children:"promise"}),"\u8F6C\u4E3A fullfied\u3002\uFF08\u8FD9\u91CC\u5305\u62EC",n(e.code,{children:"x === undefined"}),"\uFF0C\u5373 handler \u6CA1\u6709\u8FD4\u56DE\u503C\u7684\u60C5\u51B5\uFF09"]}),`
`]}),`
`,i(e.p,{children:["\u5F53\u4E0A\u9762\u8FD9\u79CD\u5B9E\u73B0\u9047\u5230",n(e.strong,{children:"\u5FAA\u73AF\u5F15\u7528"}),"\u7684 thenable \u5BF9\u8C61\u65F6\uFF0C\u5C06\u8FDB\u5165\u65E0\u9650\u9012\u5F52\uFF0C",n(e.strong,{children:"\u63A8\u8350\u4F46\u4E0D\u8981\u6C42"}),"\u5BF9\u8FD9\u79CD\u60C5\u51B5\u4EE5",n(e.code,{children:"TypeError"}),"\u4E3A\u539F\u56E0 reject promise\u3002"]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:[n(e.strong,{children:"\u6CE8\u610F"}),"\uFF1A\u89C4\u7EA6\u4E2D",n(e.strong,{children:"\u5E76\u672A"}),"\u63D0\u5230 promise \u672C\u8EAB\u7684",n(e.strong,{children:"\u72B6\u6001\u8FC1\u79FB\u65B9\u6CD5"}),"\uFF08\u5373\u6211\u4EEC\u719F\u6089\u7684 ECMAScript \u4E2D\u7684",n(e.code,{children:"resolve"}),"\u548C",n(e.code,{children:"reject"}),`\uFF09\u8BE5\u5982\u4F55\u5B9E\u73B0\uFF0C
\u5728 ECMAScript \u4E2D\uFF0Cpromise \u6784\u9020\u51FD\u6570\u4E2D\u7684`,n(e.code,{children:"resolve"}),"\u4E5F\u4F1A\u5BF9 thenable \u7C7B\u578B\u7684\u7ED3\u679C\u503C\u8FDB\u884C",n(e.strong,{children:"\u89E3\u5305"}),`\uFF08unwrap\uFF09,
\u6240\u4EE5\u53EF\u4EE5\u5927\u81F4\u5C06\u4E0A\u9762\u7684`,n(e.code,{children:"[[Resolve]](promise, x)"}),"\u89C6\u4F5C promise \u7684",n(e.code,{children:"resolve"}),"\u4EE5\u53CA",n(e.code,{children:"reject"}),"\u65B9\u6CD5",n(e.strong,{children:"\u5185\u90E8"}),"\u9700\u8981\u5B9E\u73B0\u7684\u903B\u8F91\u3002"]}),`
`]})]})}function p(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(c,l)})):c(l)}export{h as date,p as default,s as duration,t as lang,m as path,o as title};
