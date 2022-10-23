import{a as n,j as s,F as c}from"./index.2017317c.js";const i='TypeScript \u4E2D\u7684"\u7A7A\u5BF9\u8C61\u5B57\u9762\u503C"',h="2022-08-24T17:55:00.000+00:00",t="zh",d="4min",p="/blog/empty-object-in-ts";function a(l){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul"},l.components);return s(c,{children:[n(e.nav,{className:"toc",children:n(e.ol,{className:"toc-level toc-level-1",children:n(e.li,{className:"toc-item toc-item-h1",children:n(e.a,{className:"toc-link toc-link-h1",href:"#typescript-\u4E2D\u7684\u7A7A\u5BF9\u8C61\u5B57\u9762\u503C",children:'TypeScript \u4E2D\u7684"\u7A7A\u5BF9\u8C61\u5B57\u9762\u503C"'})})})}),`
`,n(e.h1,{id:"typescript-\u4E2D\u7684\u7A7A\u5BF9\u8C61\u5B57\u9762\u503C",children:'TypeScript \u4E2D\u7684"\u7A7A\u5BF9\u8C61\u5B57\u9762\u503C"'}),`
`,s(e.p,{children:["\u5728\u505A ",n(e.a,{href:"https://github.com/type-challenges/type-challenges",children:"type chanllenges"}),` \u65F6,
\u5BF9 `,n(e.a,{href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md",children:"AnyOf"}),`
\u8FD9\u9053\u8FF7\u60D1\u4E86\u5F88\u4E45\uFF1A`]}),`
`,s("figure",{children:[n("img",{width:"1346",height:"513",src:"/images/empty-object-in-ts/anyof.png",alt:"description of AnyOf",className:"invertable"}),n("figcaption",{children:"The description of AnyOf in Type Chanllenges"})]}),`
`,n(e.p,{children:"\u6211\u6700\u5F00\u59CB\u7684\u9898\u89E3\u5982\u4E0B\uFF0C\u5C06 falsy \u7684\u7C7B\u578B\u7EDF\u4E00\u6210\u4E00\u4E2A tuple\uFF0C\u518D\u5224\u65AD\u6BCF\u4E2A\u5143\u7D20\u662F\u5426\u4E3A trusy\u3002"}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-ts",children:[n(e.span,{className:"hljs-keyword",children:"type"})," ",n(e.span,{className:"hljs-title class_",children:"FalsyType"})," = ",n(e.span,{className:"hljs-string",children:"''"})," | [] | ",n(e.span,{className:"hljs-literal",children:"false"})," | ",n(e.span,{className:"hljs-number",children:"0"}),` | {}

`,n(e.span,{className:"hljs-keyword",children:"type"})," ",n(e.span,{className:"hljs-title class_",children:"AnyOf"}),"<T ",n(e.span,{className:"hljs-keyword",children:"extends"})," ",n(e.span,{className:"hljs-keyword",children:"readonly"})," ",n(e.span,{className:"hljs-built_in",children:"any"}),`[]> = 
  T `,n(e.span,{className:"hljs-keyword",children:"extends"}),` [infer L, ... infer R]
    ? (L `,n(e.span,{className:"hljs-keyword",children:"extends"})," ",n(e.span,{className:"hljs-title class_",children:"FalsyType"}),`
     ? `,n(e.span,{className:"hljs-title class_",children:"AnyOf"}),`<R>
     : `,n(e.span,{className:"hljs-literal",children:"true"}),`)
    : `,n(e.span,{className:"hljs-literal",children:"false"}),`

`]})}),`
`,n(e.p,{children:"\u5F53\u7136\uFF0C\u8FD9\u79CD\u5199\u6CD5\u662F\u9519\u8BEF\u7684\u3002"}),`
`,s(e.p,{children:["\u56E0\u4E3A\u7A7A\u5BF9\u8C61\u5B57\u9762\u503C",n(e.code,{children:"{}"}),"\u662F\u4E00\u4E2A ",n(e.strong,{children:"falsy"})," \u7684\u7C7B\u578B\uFF0C\u4F46",n(e.code,{children:"T extends {}"}),"\u5224\u65AD\u7684\u5374\u662F",n(e.code,{children:"T"}),"\u662F\u5426\u662F\u4E00\u4E2A",n(e.strong,{children:"\u5BF9\u8C61"}),`,
\u5BF9\u4E8E JavaScript \u8FD9\u6837`,n(e.strong,{children:"\u4E07\u7269\u7686\u5BF9\u8C61"}),"\u7684\u8BED\u8A00\u8FD9\u79CD",n(e.strong,{children:"\u6761\u4EF6\u5224\u65AD"}),"\u4FBF\u663E\u5F97\u6BEB\u65E0\u610F\u4E49\u4E86\u3002"]}),`
`,s(e.p,{children:["\u4E8E\u662F\u5728\u6211\u7684\u9898\u89E3\u4E2D\uFF0C\u5229\u7528",n(e.code,{children:"index signature"}),"\u9488\u5BF9",n(e.code,{children:"{}"}),"\u8FDB\u884C\u4E86\u5355\u72EC\u7684\u5224\u65AD\uFF0C\u800C\u4E0D\u662F\u5C06\u5B83\u4E0E\u5176\u4ED6 falsy \u7C7B\u578B\u7EDF\u4E00\u5230\u4E00\u4E2A tuple \u4E2D\u3002"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-ts",children:[n(e.span,{className:"hljs-keyword",children:"type"})," ",n(e.span,{className:"hljs-title class_",children:"AnyOf"}),"<T ",n(e.span,{className:"hljs-keyword",children:"extends"})," ",n(e.span,{className:"hljs-keyword",children:"readonly"})," ",n(e.span,{className:"hljs-built_in",children:"any"}),`[]> = 
  T `,n(e.span,{className:"hljs-keyword",children:"extends"}),` [infer L, ... infer R]
    ? (L `,n(e.span,{className:"hljs-keyword",children:"extends"})," ",n(e.span,{className:"hljs-string",children:"''"})," | [] | ",n(e.span,{className:"hljs-literal",children:"false"})," | ",n(e.span,{className:"hljs-number",children:"0"}),`
      ? `,n(e.span,{className:"hljs-title class_",children:"AnyOf"}),`<R>
      : (keyof L `,n(e.span,{className:"hljs-keyword",children:"extends"})," ",n(e.span,{className:"hljs-literal",children:"undefined"}),`[]
        ? `,n(e.span,{className:"hljs-title class_",children:"AnyOf"}),`<R>
        : `,n(e.span,{className:"hljs-literal",children:"true"}),`))
    : `,n(e.span,{className:"hljs-literal",children:"false"}),`

`]})}),`
`,s(e.p,{children:["\u4ECA\u5929\uFF0C\u5076\u7136\u5728\u53E6\u4E00\u4E2A\u9879\u76EE\u7684",n(e.code,{children:"@typescript-eslint"}),"\u63D0\u793A\u4E2D\u770B\u5230\u8FD9\u6837\u7684\u4FE1\u606F\uFF1A"]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-xml",children:'Don\'t use `{}` as a type. `{}` actually means "any non-nullish value".\n- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.\n- If you want a type meaning "any value", you probably want `unknown` instead.\n- If you want a type meaning "empty object", you probably want `Record<string, never>` instead.\n'})}),`
`,n(e.p,{children:"\u7FFB\u8BD1\u8FC7\u6765\u5C31\u662F\uFF1A"}),`
`,s(e.p,{children:["\u4E0D\u8981\u5C06",n(e.code,{children:"{}"}),"\u7528\u4F5C\u7C7B\u578B\uFF0C\u56E0\u4E3A",n(e.code,{children:"{}"}),'\u5B9E\u9645\u4E0A\u8868\u793A"',n(e.strong,{children:"\u4EFB\u4F55\u975E\u7A7A\u503C"}),'"\u3002']}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["\u5982\u679C\u8981\u8868\u793A",n(e.strong,{children:"\u4EFB\u4F55\u5BF9\u8C61"}),"\uFF0C\u7528",n(e.code,{children:"Record<string, unknown>"}),"\u3002"]}),`
`,s(e.li,{children:["\u5982\u679C\u8981\u8868\u793A",n(e.strong,{children:"\u4EFB\u4F55\u503C"}),"\uFF0C\u7528",n(e.code,{children:"unknown"}),"\u3002"]}),`
`,s(e.li,{children:["\u5982\u679C\u8981\u8868\u793A",n(e.strong,{children:"\u7A7A\u5BF9\u8C61\u5B57\u9762\u503C"}),"\uFF0C\u7528",n(e.code,{children:"Record<string, never>"}),"\u3002"]}),`
`]}),`
`,n(e.p,{children:"\u636E\u6B64\uFF0C\u5C31\u53EF\u4EE5\u5C06\u9898\u89E3\u6539\u5199\u4E3A\u5982\u4E0B\u5F62\u5F0F\u4E86\uFF1A"}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-ts",children:[n(e.span,{className:"hljs-keyword",children:"type"})," ",n(e.span,{className:"hljs-title class_",children:"FalsyType"})," = ",n(e.span,{className:"hljs-string",children:"''"})," | [] | ",n(e.span,{className:"hljs-literal",children:"false"})," | ",n(e.span,{className:"hljs-number",children:"0"})," | ",n(e.span,{className:"hljs-title class_",children:"Record"}),"<",n(e.span,{className:"hljs-built_in",children:"string"}),", ",n(e.span,{className:"hljs-built_in",children:"never"}),`>

`,n(e.span,{className:"hljs-keyword",children:"type"})," ",n(e.span,{className:"hljs-title class_",children:"AnyOf"}),"<T ",n(e.span,{className:"hljs-keyword",children:"extends"})," ",n(e.span,{className:"hljs-keyword",children:"readonly"})," ",n(e.span,{className:"hljs-built_in",children:"any"}),`[]> = 
  T `,n(e.span,{className:"hljs-keyword",children:"extends"}),` [infer L, ... infer R]
    ? (L `,n(e.span,{className:"hljs-keyword",children:"extends"})," ",n(e.span,{className:"hljs-title class_",children:"FalsyType"}),`
     ? `,n(e.span,{className:"hljs-title class_",children:"AnyOf"}),`<R>
     : `,n(e.span,{className:"hljs-literal",children:"true"}),`)
    : `,n(e.span,{className:"hljs-literal",children:"false"}),`

`]})}),`
`,n(e.p,{children:`\u6700\u540E\u5410\u69FD\u4E00\u4E0B\uFF0C\u5F53\u65F6\u5728 bing\u3001google\u3001stackoverflow \u4E0A\u641C\u4E86\u5F88\u4E45 ts \u4E2D\u7A7A\u5B57\u7B26\u5B57\u9762\u91CF\u600E\u4E48\u8868\u793A\uFF0C\u4F46\u4E00\u76F4\u6CA1\u67E5\u5230,
\u5927\u6982\u662F\u82F1\u8BED\u6C34\u5E73\u4E0D\u884C\u5427\uFF0C\u5355\u51ED\u6572\u51E0\u4E2A\u5173\u952E\u8BCD\u8FD8\u662F\u4E0D\u80FD\u51C6\u786E\u68C0\u7D22\u3002`})]})}function o(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(a,l)})):a(l)}export{h as date,o as default,d as duration,t as lang,p as path,i as title};
