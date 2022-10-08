import{a as n,j as l,F as a}from"./index.2fe1c0fd.js";const i="JavaScript \u5B9E\u73B0\u6DF1\u62F7\u8D1D\uFF08cloneDeep\uFF09",h="2022-09-03T12:48:00.000+00:00",d="zh",t="10min",o="/blog/deep-clone-in-js";function c(s){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",span:"span",ul:"ul",blockquote:"blockquote",h3:"h3",h4:"h4"},s.components);return l(a,{children:[n(e.nav,{className:"toc",children:n(e.ol,{className:"toc-level toc-level-1",children:l(e.li,{className:"toc-item toc-item-h1",children:[n(e.a,{className:"toc-link toc-link-h1",href:"#javascript-\u5B9E\u73B0\u6DF1\u62F7\u8D1Dclonedeep",children:"JavaScript \u5B9E\u73B0\u6DF1\u62F7\u8D1D\uFF08cloneDeep\uFF09"}),l(e.ol,{className:"toc-level toc-level-2",children:[n(e.li,{className:"toc-item toc-item-h2",children:n(e.a,{className:"toc-link toc-link-h2",href:"#\u4F7F\u7528-json-\u5E8F\u5217\u5316",children:"\u4F7F\u7528 JSON \u5E8F\u5217\u5316"})}),l(e.li,{className:"toc-item toc-item-h2",children:[n(e.a,{className:"toc-link toc-link-h2",href:"#\u6839\u636E\u6E90\u7684\u7C7B\u578B\u5904\u7406",children:"\u6839\u636E\u6E90\u7684\u7C7B\u578B\u5904\u7406"}),l(e.ol,{className:"toc-level toc-level-3",children:[n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#\u539F\u59CB\u503C",children:"\u539F\u59CB\u503C"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#\u57FA\u672C\u5F15\u7528\u7C7B\u578B",children:"\u57FA\u672C\u5F15\u7528\u7C7B\u578B"})}),n(e.li,{className:"toc-item toc-item-h3",children:n(e.a,{className:"toc-link toc-link-h3",href:"#\u96C6\u5408\u5F15\u7528\u7C7B\u578B",children:"\u96C6\u5408\u5F15\u7528\u7C7B\u578B"})}),l(e.li,{className:"toc-item toc-item-h3",children:[n(e.a,{className:"toc-link toc-link-h3",href:"#\u5FAA\u73AF\u5F15\u7528",children:"\u5FAA\u73AF\u5F15\u7528"}),n(e.ol,{className:"toc-level toc-level-4",children:n(e.li,{className:"toc-item toc-item-h4",children:n(e.a,{className:"toc-link toc-link-h4",href:"#\u5BF9-promise-\u7684\u6DF1\u62F7\u8D1D",children:"\u5BF9 Promise \u7684\u6DF1\u62F7\u8D1D"})})})]})]})]})]})]})})}),`
`,n(e.h1,{id:"javascript-\u5B9E\u73B0\u6DF1\u62F7\u8D1Dclonedeep",children:"JavaScript \u5B9E\u73B0\u6DF1\u62F7\u8D1D\uFF08cloneDeep\uFF09"}),`
`,l(e.p,{children:["JavaScript \u53EA\u6709\u4E24\u79CD\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\uFF1A",n(e.strong,{children:"\u539F\u59CB\u503C"}),"\uFF08primitive value\uFF09\u548C",n(e.strong,{children:"\u5F15\u7528\u503C"}),"\uFF08reference value\uFF09\u3002"]}),`
`,l(e.p,{children:[n(e.strong,{children:"\u6DF1\u62F7\u8D1D"}),"\uFF08Deep Clone\uFF09\u5C31\u662F\u5BF9\u4E8E\u5F15\u7528\u503C\uFF0C\u8981\u590D\u5236",n(e.strong,{children:"\u5185\u5B58"}),"\u4E2D\u5BF9\u8C61\u7684",n(e.strong,{children:"\u7ED3\u6784"}),"\uFF0C\u800C\u4E0D\u662F\u5355\u7EAF\u590D\u5236\u5176\u5F15\u7528\u3002"]}),`
`,l(e.p,{children:["\u4E3A\u4E86\u5B9E\u73B0\u6DF1\u62F7\u8D1D\uFF0C\u8981\u6839\u636E\u76EE\u6807\u5BF9\u8C61\u7684",n(e.strong,{children:"\u7C7B\u578B"}),"\u5BF9\u5176\u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\uFF0C\u5F53\u6D89\u53CA\u5230\u96C6\u5408\u5F15\u7528\u7C7B\u578B",n(e.code,{children:"Array"}),"\u3001",n(e.code,{children:"Set"}),"\u3001",n(e.code,{children:"Map"}),"\u65F6\uFF0C\u66F4\u9700\u8981",n(e.strong,{children:"\u9012\u5F52"}),"\u5730\u8FDB\u884C\u590D\u5236\u3002"]}),`
`,n(e.h2,{id:"\u4F7F\u7528-json-\u5E8F\u5217\u5316",children:"\u4F7F\u7528 JSON \u5E8F\u5217\u5316"}),`
`,n(e.p,{children:"\u5728\u5B9E\u73B0\u4E0A\u8FF0\u601D\u8DEF\u4E4B\u524D\uFF0C\u5148\u7B80\u5355\u770B\u4E00\u4E2A\u666E\u904D\u6D41\u4F20\u7684\u3001\u4F7F\u7528 JSON \u5E8F\u5217\u4E0E\u89E3\u6790\u7684\u5199\u6CD5\uFF1A"}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",n(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-title class_",children:"JSON"}),".",n(e.span,{className:"hljs-title function_",children:"parse"}),"(",n(e.span,{className:"hljs-title class_",children:"JSON"}),".",n(e.span,{className:"hljs-title function_",children:"stringify"}),`(obj))
}
`]})}),`
`,l(e.p,{children:["\u8BE5\u89E3\u7B54\u501F\u52A9",n(e.code,{children:"json"}),"\u8FD9\u4E00",n(e.strong,{children:"\u4E2D\u95F4"}),"\u6570\u636E\u5E8F\u5217\u5316\u683C\u5F0F\uFF0C\u6839\u636E\u4E00\u79CD\u4E0D\u540C\u683C\u5F0F\u7684\u6587\u4EF6\u521B\u5EFA\u53D8\u91CF\u5F0F\uFF0C\u5F53\u7136\u4E5F\u4F1A",n(e.strong,{children:"\u91CD\u65B0\u5206\u914D\u5185\u5B58"}),"\u3002"]}),`
`,l(e.p,{children:["\u4F46\u6839\u636E ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",children:"MDN"}),`,
`,n(e.code,{children:"static JSON.prototype.stringify()"}),"\u8FD9\u4E2A API \u4F1A",n(e.strong,{children:"\u5FFD\u7565"}),"\u6E90\u4E2D\u7684\u8BB8\u591A\u5B57\u6BB5\uFF1A"]}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"undefined"}),", ",n(e.code,{children:"Function"}),", ",n(e.code,{children:"Symbol"})," \u503C\u5C06\u88AB\u5FFD\u7565\u6216\u8F6C\u6362\u6210",n(e.code,{children:"null"}),"\u3002"]}),`
`,l(e.li,{children:["\u6570\u503C",n(e.code,{children:"Infinity"}),"\u548C",n(e.code,{children:"NaN"}),"\u90FD\u88AB\u89C6\u4F5C",n(e.code,{children:"null"}),"\u3002"]}),`
`,l(e.li,{children:[n(e.strong,{children:"\u7B26\u53F7\u5C5E\u6027"}),"\uFF08symbol-keyed properties\uFF09\u5C06\u88AB\u5FFD\u7565\uFF0C\u5982",n(e.code,{children:"[[Symbol.Iterator]]"}),"\u3001",n(e.code,{children:"[[Symbol.toPrimitive]]"}),"\u7B49\u3002"]}),`
`,n(e.li,{children:"Date \u5BF9\u8C61\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u3002"}),`
`,l(e.li,{children:["\u53EA\u8BBF\u95EE\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF0C\u8FD9\u610F\u5473\u7740",n(e.code,{children:"Map"}),"\u3001",n(e.code,{children:"Set"}),"\u7B49\u96C6\u5408\u7C7B\u578B\u5C06\u53D8\u4E3A",n(e.code,{children:"{}"}),"..."]}),`
`]}),`
`,n(e.p,{children:"\u7531\u6B64\u89C1\u5F97\uFF0CJSON \u5E8F\u5217\u5316\u5C06\u4F1A\u4E22\u5931\u548C\u66F4\u6539\u8BB8\u591A\u5B57\u6BB5\uFF0C\u8FDC\u4E0D\u80FD\u5B9E\u73B0\u6EE1\u8DB3\u9700\u6C42\u7684\u6DF1\u62F7\u8D1D\u3002"}),`
`,n(e.h2,{id:"\u6839\u636E\u6E90\u7684\u7C7B\u578B\u5904\u7406",children:"\u6839\u636E\u6E90\u7684\u7C7B\u578B\u5904\u7406"}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:["\u6839\u636E JavaScript \u7ED3\u6784\u5316\u514B\u9686\u65B9\u6CD5",n(e.code,{children:"structuredClone()"}),"\u7684\u63CF\u8FF0\uFF0C\u6211\u4EEC\u4E0D\u8003\u8651\u5BF9",n(e.code,{children:"Function"}),"\u548C",n(e.code,{children:"Error"}),"\u8FD9\u4E24\u79CD\u7C7B\u578B\u7684\u62F7\u8D1D\u3002"]}),`
`]}),`
`,n(e.h3,{id:"\u539F\u59CB\u503C",children:"\u539F\u59CB\u503C"}),`
`,l(e.p,{children:["JavaScript \u4E2D\u6709 ",n(e.strong,{children:"6"})," \u79CD\u539F\u59CB\u503C\u7C7B\u578B\uFF1A",n(e.code,{children:"number"}),", ",n(e.code,{children:"string"}),", ",n(e.code,{children:"boolean"}),", ",n(e.code,{children:"undefined"}),", ",n(e.code,{children:"null"}),", ",n(e.code,{children:"symbol"}),"\u3002"]}),`
`,l(e.p,{children:["\u5BF9\u4E8E\u539F\u59CB\u503C\uFF0C\u6211\u4EEC\u53EF\u4EE5",n(e.strong,{children:"\u76F4\u63A5\u8FD4\u56DE"}),"\uFF0C\u4F46\u8981\u6CE8\u610F\u5224\u65AD\u7C7B\u578B\u7684\u65B9\u5F0F\u3002",n(e.code,{children:"typeof null"}),"\u7684\u7ED3\u679C\u4E3A",n(e.code,{children:"object"}),"\uFF0C\u9700\u7528",n(e.code,{children:"obj === null"}),"\u5355\u72EC\u5904\u7406\uFF0C\u800C\u5176\u4ED6 5 \u79CD\u7C7B\u578B\u53EF\u76F4\u63A5\u7528",n(e.code,{children:"typeof"}),"\u5224\u65AD\u3002"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",n(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,n(e.span,{className:"hljs-comment",children:"// Notice: tyeof null === 'object'"}),`
  `,n(e.span,{className:"hljs-keyword",children:"const"})," primitiveTypes = [",n(e.span,{className:"hljs-string",children:"'string'"}),", ",n(e.span,{className:"hljs-string",children:"'number'"}),", ",n(e.span,{className:"hljs-string",children:"'boolean'"}),", ",n(e.span,{className:"hljs-string",children:"'undefined'"}),", ",n(e.span,{className:"hljs-string",children:"'symbol'"}),`]
  `,n(e.span,{className:"hljs-comment",children:"// null"}),`
  `,n(e.span,{className:"hljs-keyword",children:"if"})," (obj === ",n(e.span,{className:"hljs-literal",children:"null"}),`) {
    `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-literal",children:"null"}),`
  }
  `,n(e.span,{className:"hljs-comment",children:"// other primitive types"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"})," ",n(e.span,{className:"hljs-keyword",children:"if"})," (primitiveTypes.",n(e.span,{className:"hljs-title function_",children:"includes"}),"(",n(e.span,{className:"hljs-keyword",children:"typeof"}),` obj)) {
    `,n(e.span,{className:"hljs-keyword",children:"return"}),` obj
  }
  `,n(e.span,{className:"hljs-comment",children:"// ..."}),`
}
`]})}),`
`,n(e.h3,{id:"\u57FA\u672C\u5F15\u7528\u7C7B\u578B",children:"\u57FA\u672C\u5F15\u7528\u7C7B\u578B"}),`
`,l(e.p,{children:["\u6839\u636E\u300AJS \u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u300B\uFF0CJavaScript \u4E2D",n(e.strong,{children:"\u57FA\u672C\u5F15\u7528\u7C7B\u578B"}),"\u4E3B\u8981\u4E3A",n(e.code,{children:"Date"}),"\u548C",n(e.code,{children:"RegExp"}),"\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u7528",n(e.code,{children:"new"}),`\u8C03\u7528\u7684\u6784\u9020\u51FD\u6570,
\u8FD4\u56DE\u7684\u5C31\u662F\u4E00\u4E2A\u5168\u65B0\u7684\u53D8\u91CF\u3002`]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:["\u6839\u636E",n(e.code,{children:"new"}),"\u7684\u539F\u7406(\u7B2C\u4E00\u6B65\u4FBF\u662F\u521B\u5EFA\u5BF9\u8C61\uFF0C",n(e.strong,{children:"\u5206\u914D\u5185\u5B58"}),")\uFF0C\u7528",n(e.code,{children:"new"}),"\u8C03\u7528\u7684\u6784\u9020\u51FD\u6570",n(e.strong,{children:"\u4E00\u5B9A"}),"\u4F1A\u8FD4\u56DE",n(e.strong,{children:"\u5168\u65B0"}),"\u7684\u5BF9\u8C61\u3002"]}),`
`]}),`
`,n(e.p,{children:"\u53E6\u5916\uFF0C\u6211\u4EEC\u5982\u4F55\u5224\u65AD\u5F15\u7528\u503C\u7684\u7C7B\u578B\u5462\uFF1F"}),`
`,l(e.p,{children:["\u9996\u5148\uFF0C\u53EF\u4EE5\u501F\u52A9",n(e.strong,{children:"\u539F\u578B\u94FE"}),"\uFF0C\u7528",n(e.code,{children:"Object.prototype.toString.call()"}),"\u64CD\u4F5C\u7B26\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u67D0\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u5B9E\u4F8B\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5F88\u7B80\u6D01\uFF0C\u4F46\u7531\u4E8E\u5F00\u53D1\u8005\u662F\u53EF\u4EE5\u5BF9",n(e.strong,{children:"\u5185\u7F6E\u5F15\u7528\u7C7B\u578B"}),"\u8FDB\u884C",n(e.strong,{children:"\u62D3\u5C55"}),`\u7684,
\u6240\u4EE5\u8FD9\u79CD\u5224\u65AD`,n(e.strong,{children:"\u5E76\u4E0D\u51C6\u786E"}),"\u3002"]}),`
`,l(e.p,{children:[n(e.code,{children:"Object.prototype.toString()"}),"\u662F\u6240\u6709\u5BF9\u8C61\u4E0A\u90FD\u53EF\u4EE5\u8BBF\u95EE\u7684\u65B9\u6CD5\uFF0C\u5B83\u5728\u4E00\u4E9B\u7C7B\u578B\u4E0A\u6839\u636E\u9700\u8981\u88AB",n(e.strong,{children:"\u8986\u76D6"}),"\uFF0C\u800C\u672A\u8986\u76D6\u7684\u3001",n(e.code,{children:"Object.prototype"}),`\u4E0A\u7684\u8BE5\u65B9\u6CD5,
\u4EE5`,n(e.strong,{children:"\u5B57\u7B26\u4E32"}),"\u8FD4\u56DE\u5BF9\u8C61\u7684",n(e.strong,{children:"\u7C7B\u578B"}),"\uFF1A",n(e.code,{children:"object [Object]"}),"\u3002"]}),`
`,l(e.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7",n(e.code,{children:"Function.prototype.call"}),"\u6216\u8005",n(e.code,{children:"Function.prototype.apply"}),"\u5728\u5BF9\u8C61\u4E0A\u8C03\u7528\u7684\u8BE5\u65B9\u6CD5\u7684\u539F\u672C\u5B9E\u73B0\uFF1A"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-comment",children:"// object [RegExp]"}),`
`,n(e.span,{className:"hljs-title class_",children:"Object"}),".",n(e.span,{className:"hljs-property",children:n(e.span,{className:"hljs-keyword",children:"prototype"})}),".",n(e.span,{className:"hljs-property",children:"toString"}),".",n(e.span,{className:"hljs-title function_",children:"call"}),"(",n(e.span,{className:"hljs-regexp",children:"/foo/"}),`)
`]})}),`
`,l(e.p,{children:["\u7528\u5B83\u5BF9",n(e.code,{children:"Date"}),"\u548C",n(e.code,{children:"RegExp"}),"\u8FDB\u884C\u5224\u65AD\uFF1A"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",n(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,n(e.span,{className:"hljs-comment",children:"// \u63A5\u4E0A"}),`
  `,n(e.span,{className:"hljs-comment",children:"// RegExp"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"})," ",n(e.span,{className:"hljs-keyword",children:"if"})," (",n(e.span,{className:"hljs-regexp",children:"/RegExp/"}),".",n(e.span,{className:"hljs-title function_",children:"test"}),"(",n(e.span,{className:"hljs-title class_",children:"Object"}),".",n(e.span,{className:"hljs-property",children:n(e.span,{className:"hljs-keyword",children:"prototype"})}),".",n(e.span,{className:"hljs-property",children:"toString"}),".",n(e.span,{className:"hljs-title function_",children:"call"}),`(obj))) {
    `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"RegExp"}),`(obj)
  }
  `,n(e.span,{className:"hljs-comment",children:"// Date"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"})," ",n(e.span,{className:"hljs-keyword",children:"if"})," (",n(e.span,{className:"hljs-regexp",children:"/Date/"}),".",n(e.span,{className:"hljs-title function_",children:"test"}),"(",n(e.span,{className:"hljs-title class_",children:"Object"}),".",n(e.span,{className:"hljs-property",children:n(e.span,{className:"hljs-keyword",children:"prototype"})}),".",n(e.span,{className:"hljs-property",children:"toString"}),".",n(e.span,{className:"hljs-title function_",children:"call"}),`(obj))) {
    `,n(e.span,{className:"hljs-comment",children:"// Date() returns string representation, new Date() returns a Date object"}),`
    `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"Date"}),`(obj)
  }
  `,n(e.span,{className:"hljs-comment",children:"// ..."}),`
}
`]})}),`
`,n(e.h3,{id:"\u96C6\u5408\u5F15\u7528\u7C7B\u578B",children:"\u96C6\u5408\u5F15\u7528\u7C7B\u578B"}),`
`,l(e.p,{children:[n(e.strong,{children:"\u96C6\u5408\u5F15\u7528\u7C7B\u578B"}),"\u4E3B\u8981\u6709",n(e.code,{children:"Object"}),", ",n(e.code,{children:"Array"}),", ",n(e.code,{children:"Map"}),", ",n(e.code,{children:"Set"}),", ",n(e.code,{children:"WeakMap"}),", ",n(e.code,{children:"WeakSet"}),"\u5171",n(e.strong,{children:"6"}),"\u79CD\u3002"]}),`
`,l(e.p,{children:["\u5176\u4E2D\uFF0C",n(e.code,{children:"WeakMap"}),"\u548C",n(e.code,{children:"WeakSet"}),"\u7684\u952E\u90FD\u662F",n(e.strong,{children:"\u4E0D\u53EF\u8FED\u4EE3"}),"\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E5F",n(e.strong,{children:"\u4E0D\u8003\u8651"}),"\u8FD9\u4E24\u79CD\u7C7B\u578B\u7684\u62F7\u8D1D\u3002"]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:["\u6839\u636E\u300AJS \u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u300B\uFF0CWeakMap \u4E4B\u6240\u4EE5\u8BBE\u8BA1\u4E3A\u4E0D\u53EF\u8FED\u4EE3\uFF0C\u662F\u7531\u4E8E\u5F31\u6620\u5C04\u4E2D\u7684\u952E/\u503C\u5BF9",n(e.strong,{children:"\u968F\u65F6\u53EF\u80FD\u88AB\u9500\u6BC1"}),"\uFF0C\u6CA1\u5FC5\u8981\u63D0\u4F9B\u8FED\u4EE3\u5176\u952E/\u503C\u5BF9\u7684\u80FD\u529B\u3002"]}),`
`]}),`
`,l(e.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u8003\u5BDF",n(e.code,{children:"Array"}),", ",n(e.code,{children:"Map"}),"\u548C",n(e.code,{children:"Set"}),"\uFF0C\u5B83\u4EEC\u90FD\u662F\u5B9E\u73B0\u4E86",n(e.strong,{children:"\u8FED\u4EE3\u5668\u63A5\u53E3"}),"\u7684\u7C7B\u578B\uFF0C\u53EF\u76F4\u63A5\u8FED\u4EE3\u5176\u6BCF\u4E2A\u5143\u7D20(\u6216\u952E\u503C\u5BF9)\uFF0C",n(e.strong,{children:"\u9012\u5F52\u5730\u62F7\u8D1D"}),"\uFF0C\u6700\u540E\u5C06\u8FED\u4EE3\u7ED3\u679C\u4EA4\u7531\u6784\u9020\u51FD\u6570\u5373\u53EF\u3002"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",n(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,n(e.span,{className:"hljs-comment",children:"// \u63A5\u4E0A"}),`
  `,n(e.span,{className:"hljs-comment",children:"// Array"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"})," ",n(e.span,{className:"hljs-keyword",children:"if"})," (",n(e.span,{className:"hljs-title class_",children:"Array"}),".",n(e.span,{className:"hljs-title function_",children:"isArray"}),`(obj)) {
    `,n(e.span,{className:"hljs-keyword",children:"return"})," obj.",n(e.span,{className:"hljs-title function_",children:"map"}),"(",l(e.span,{className:"hljs-function",children:["(",n(e.span,{className:"hljs-params",children:"item"}),") =>"]})," ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(item))
  }
  `,n(e.span,{className:"hljs-comment",children:"// Set"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"})," ",n(e.span,{className:"hljs-keyword",children:"if"})," (obj ",n(e.span,{className:"hljs-title class_",children:"Object"}),".",n(e.span,{className:"hljs-property",children:n(e.span,{className:"hljs-keyword",children:"prototype"})}),".",n(e.span,{className:"hljs-property",children:"toString"}),".",n(e.span,{className:"hljs-title function_",children:"call"}),"() ",n(e.span,{className:"hljs-title class_",children:"Set"}),`) {
    `,n(e.span,{className:"hljs-keyword",children:"const"}),` arr = []

    obj.`,n(e.span,{className:"hljs-title function_",children:"forEach"}),"(",l(e.span,{className:"hljs-function",children:["(",n(e.span,{className:"hljs-params",children:"val"}),") =>"]}),` {
      arr.`,n(e.span,{className:"hljs-title function_",children:"push"}),"(",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(val))
    })

    `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"Set"}),`(arr)
  }
  `,n(e.span,{className:"hljs-comment",children:"// Map"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"})," ",n(e.span,{className:"hljs-keyword",children:"if"})," (obj ",n(e.span,{className:"hljs-title class_",children:"Object"}),".",n(e.span,{className:"hljs-property",children:n(e.span,{className:"hljs-keyword",children:"prototype"})}),".",n(e.span,{className:"hljs-property",children:"toString"}),".",n(e.span,{className:"hljs-title function_",children:"call"}),"() ",n(e.span,{className:"hljs-title class_",children:"Map"}),`) {
    `,n(e.span,{className:"hljs-keyword",children:"const"}),` arr = []

    obj.`,n(e.span,{className:"hljs-title function_",children:"forEach"}),"(",l(e.span,{className:"hljs-function",children:["(",n(e.span,{className:"hljs-params",children:"val, key"}),") =>"]}),` {
      arr.`,n(e.span,{className:"hljs-title function_",children:"push"}),"([key, ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(val)])
    })

    `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"Map"}),`(arr)
  }
  `,n(e.span,{className:"hljs-comment",children:"// ..."}),`
}
`]})}),`
`,l(e.p,{children:["\u6700\u540E\uFF0C\u5BF9\u4E8E",n(e.code,{children:"Object"}),"\uFF0C\u6211\u4EEC\u4F7F\u7528",n(e.code,{children:"for ... in"}),"\u8FED\u4EE3\u5176\u6240\u6709",n(e.strong,{children:"\u53EF\u8FED\u4EE3"}),"\u7684\u5C5E\u6027\uFF0C\u540C\u6837\u5BF9\u5176\u8FDB\u884C",n(e.strong,{children:"\u9012\u5F52\u62F7\u8D1D"}),"\u3002"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",n(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,n(e.span,{className:"hljs-comment",children:"// \u63A5\u4E0A"}),`
  `,n(e.span,{className:"hljs-comment",children:"// Object"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"}),` {
    `,n(e.span,{className:"hljs-keyword",children:"const"}),` result = {}

    `,n(e.span,{className:"hljs-keyword",children:"for"})," (",n(e.span,{className:"hljs-keyword",children:"const"})," prop ",n(e.span,{className:"hljs-keyword",children:"in"}),` obj) {
      result[prop] = `,n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(obj[prop])
    }

    `,n(e.span,{className:"hljs-keyword",children:"return"}),` result
  }
}
`]})}),`
`,n(e.p,{children:"\u81F3\u6B64\uFF0C\u4E00\u4E2A\u6DF1\u62F7\u8D1D\u51FD\u6570\u57FA\u672C\u6210\u578B\u3002"}),`
`,n(e.h3,{id:"\u5FAA\u73AF\u5F15\u7528",children:"\u5FAA\u73AF\u5F15\u7528"}),`
`,l(e.p,{children:["JavaScript \u7684\u5BF9\u8C61\u5B57\u6BB5\u8D4B\u503C\u975E\u5E38\u81EA\u7531\uFF0C\u6240\u4EE5",n(e.strong,{children:"\u5FAA\u73AF\u5F15\u7528"}),"\u8FD9\u6837\u7684\u60C5\u5F62\u4E5F\u6709\u53EF\u80FD\u51FA\u73B0\uFF1A"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"const"}),` foo = {
  `,n(e.span,{className:"hljs-attr",children:"bar"}),": ",n(e.span,{className:"hljs-number",children:"0"}),`
}

foo.`,n(e.span,{className:"hljs-property",children:"baz"}),` = foo
`]})}),`
`,l(e.p,{children:["\u5F88\u663E\u7136\uFF0C\u6211\u4EEC\u7684\u9012\u5F52\u65E0\u6CD5\u5904\u7406\u8FD9\u6837\u7684\u60C5\u5F62\uFF0C\u5C06\u8FDB\u5165\u6B7B\u5FAA\u73AF\uFF0C\u6700\u7EC8\u62A5\u9519",n(e.strong,{children:"\u6808\u6EA2\u51FA"}),"\u3002"]}),`
`,l(e.p,{children:["\u6240\u4EE5\uFF0C\u9700\u8981\u5BF9",n(e.code,{children:"Object"}),"\u7C7B\u578B\u7684\u503C\u8FDB\u884C",n(e.strong,{children:"\u54C8\u5E0C\u7F13\u5B58"}),"\uFF0C\u8FD9\u6837\uFF0C\u5F53\u62F7\u8D1D\u9762\u5BF9\u5FAA\u73AF\u5F15\u7528\u65F6\uFF0C\u5C06\u83B7\u5F97\u4E00\u4E2A",n(e.strong,{children:"\u5168\u65B0"}),"\u7684\u5F15\u7528\uFF0C\u907F\u514D\u8FDB\u5165\u6B7B\u5FAA\u73AF\u3002"]}),`
`,l(e.p,{children:["\u7531\u4E8E\u662F\u8BB0\u5F55",n(e.strong,{children:"\u5BF9\u8C61"}),"\u4E14\u65E0\u9700\u8FDB\u884C\u8FED\u4EE3\uFF0C\u9009\u7528\u6700\u4F73\u5B9E\u8DF5",n(e.code,{children:"WeakMap"}),"\u4F5C\u4E3A\u8BB0\u5F55\u7ED3\u6784\u3002"]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-comment",children:"// add new parameter memo for recursion"}),`
`,n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"})," (obj, memo = ",n(e.span,{className:"hljs-literal",children:"null"}),`) {
  memo || (memo = `,n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"WeakMap"}),`())

  `,n(e.span,{className:"hljs-comment",children:"// ..."}),`
  `,n(e.span,{className:"hljs-comment",children:"// Array"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"})," ",n(e.span,{className:"hljs-keyword",children:"if"})," (",n(e.span,{className:"hljs-title class_",children:"Array"}),".",n(e.span,{className:"hljs-title function_",children:"isArray"}),`(obj)) {
    `,n(e.span,{className:"hljs-keyword",children:"return"})," obj.",n(e.span,{className:"hljs-title function_",children:"map"}),"(",l(e.span,{className:"hljs-function",children:["(",n(e.span,{className:"hljs-params",children:"item"}),") =>"]})," ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(item, memo))
  }
  `,n(e.span,{className:"hljs-comment",children:"// Set"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"})," ",n(e.span,{className:"hljs-keyword",children:"if"})," (",n(e.span,{className:"hljs-regexp",children:"/Set/"}),".",n(e.span,{className:"hljs-title function_",children:"test"}),"(",n(e.span,{className:"hljs-title class_",children:"Object"}),".",n(e.span,{className:"hljs-property",children:n(e.span,{className:"hljs-keyword",children:"prototype"})}),".",n(e.span,{className:"hljs-property",children:"toString"}),".",n(e.span,{className:"hljs-title function_",children:"call"}),`(obj))) {
    `,n(e.span,{className:"hljs-keyword",children:"const"}),` arr = []

    obj.`,n(e.span,{className:"hljs-title function_",children:"forEach"}),"(",l(e.span,{className:"hljs-function",children:["(",n(e.span,{className:"hljs-params",children:"val"}),") =>"]}),` {
      arr.`,n(e.span,{className:"hljs-title function_",children:"push"}),"(",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(val, memo))
    })

    `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"Set"}),`(arr)
  }
  `,n(e.span,{className:"hljs-comment",children:"// Map"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"})," ",n(e.span,{className:"hljs-keyword",children:"if"})," (",n(e.span,{className:"hljs-regexp",children:"/Map/"}),".",n(e.span,{className:"hljs-title function_",children:"test"}),"(",n(e.span,{className:"hljs-title class_",children:"Object"}),".",n(e.span,{className:"hljs-property",children:n(e.span,{className:"hljs-keyword",children:"prototype"})}),".",n(e.span,{className:"hljs-property",children:"toString"}),".",n(e.span,{className:"hljs-title function_",children:"call"}),`(obj))) {
    `,n(e.span,{className:"hljs-keyword",children:"const"}),` arr = []

    obj.`,n(e.span,{className:"hljs-title function_",children:"forEach"}),"(",l(e.span,{className:"hljs-function",children:["(",n(e.span,{className:"hljs-params",children:"val, key"}),") =>"]}),` {
      arr.`,n(e.span,{className:"hljs-title function_",children:"push"}),"([key, ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(val, memo)])
    })

    `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"Map"}),`(arr)
  }
  `,n(e.span,{className:"hljs-comment",children:"// Object"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"}),` {
    `,n(e.span,{className:"hljs-keyword",children:"if"})," (memo.",n(e.span,{className:"hljs-title function_",children:"has"}),`(obj)) {
      `,n(e.span,{className:"hljs-comment",children:"// prevent circular referrence"}),`
      `,n(e.span,{className:"hljs-keyword",children:"return"})," memo.",n(e.span,{className:"hljs-title function_",children:"get"}),`(obj)
    } `,n(e.span,{className:"hljs-keyword",children:"else"}),` {
      `,n(e.span,{className:"hljs-keyword",children:"const"}),` result = {}

      memo.`,n(e.span,{className:"hljs-title function_",children:"set"}),`(obj, result)

      `,n(e.span,{className:"hljs-keyword",children:"for"})," (",n(e.span,{className:"hljs-keyword",children:"const"})," prop ",n(e.span,{className:"hljs-keyword",children:"in"}),` obj) {
        result[prop] = `,n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),`(obj[prop], memo)
      }

      `,n(e.span,{className:"hljs-keyword",children:"return"}),` result
    }
  }
}
`]})}),`
`,l(e.p,{children:["\u5C06\u4E0A\u9762\u7684\u4EE3\u7801\u5408\u5E76\uFF0C\u4FBF\u5F97\u5230\u76F8\u5BF9\u5B8C\u6574\u7684\u4E00\u4E2A\u6DF1\u62F7\u8D1D\u51FD\u6570\uFF0C\u4F46\u5B83\u65E0\u6CD5\u5904\u7406",n(e.code,{children:"Function"}),", ",n(e.code,{children:"Error"}),", ",n(e.code,{children:"WeakMap"}),", ",n(e.code,{children:"WeakSet"}),"\u4EE5\u53CA",n(e.code,{children:"Object"}),"\u4E2D\u7684\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u3002"]}),`
`,n(e.h4,{id:"\u5BF9-promise-\u7684\u6DF1\u62F7\u8D1D",children:"\u5BF9 Promise \u7684\u6DF1\u62F7\u8D1D"}),`
`,l(e.p,{children:["\u5728\u770B\u300AJS \u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u300B\u65F6\uFF0C\u53D1\u73B0",n(e.code,{children:"static Promise.prototype.race()"}),"\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u6700\u5148\u89E3\u51B3\u7684 Promise \u5BF9\u8C61\u7684",n(e.strong,{children:"\u955C\u50CF"}),"\uFF0C\u610F\u5373\u4E00\u4E2A",n(e.strong,{children:"\u65B0 promise"}),`,
\u6240\u4EE5\u53EF\u4EE5\u4E13\u95E8\u5BF9 Promise \u5BF9\u8C61\u8FDB\u884C\u6DF1\u62F7\u8D1D\uFF1A`]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"cloneDeep"}),"(",n(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,n(e.span,{className:"hljs-comment",children:"// ..."}),`
  `,n(e.span,{className:"hljs-comment",children:"// Promise"}),`
  `,n(e.span,{className:"hljs-keyword",children:"else"})," ",n(e.span,{className:"hljs-keyword",children:"if"})," (",n(e.span,{className:"hljs-regexp",children:"/Promise/"}),".",n(e.span,{className:"hljs-title function_",children:"test"}),"(",l(e.span,{className:"hljs-params",children:[n(e.span,{className:"hljs-built_in",children:"Object"}),".prototype.toString.call(obj)"]}),`) {
    `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-title class_",children:"Promise"}),".",n(e.span,{className:"hljs-title function_",children:"race"}),`([obj])
  }
}
`]})})]})}function p(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(c,s)})):c(s)}export{h as date,p as default,t as duration,d as lang,o as path,i as title};
