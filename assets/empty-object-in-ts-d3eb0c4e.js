import{j as s}from"./jsx-runtime-f0839969.js";const a='TypeScript 中的"空对象字面值"',c="2022-08-24T17:55:00.000+08:00",p="TS 中的 {} 并不代表空对象字面值的类型，而是代表任意对象。",x="zh",o="4min",i="/blog/empty-object-in-ts",l=function({children:e}){return s.exports.jsx("article",{className:"prose",children:e})};function r(n){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul"},n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h1",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#typescript-中的空对象字面值",children:'TypeScript 中的"空对象字面值"'})})})}),`
`,s.exports.jsx(e.h1,{id:"typescript-中的空对象字面值",children:'TypeScript 中的"空对象字面值"'}),`
`,s.exports.jsxs(e.p,{children:["在做 ",s.exports.jsx(e.a,{href:"https://github.com/type-challenges/type-challenges",children:"type chanllenges"}),` 时,
对 `,s.exports.jsx(e.a,{href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md",children:"AnyOf"}),`
这道迷惑了很久：`]}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/empty-object-in-ts/anyof.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/empty-object-in-ts/anyof.webp"}),s.exports.jsx("img",{width:"1346",height:"513",src:"/images/empty-object-in-ts/anyof.png",alt:"description of AnyOf",className:"invertable"})]}),s.exports.jsx("figcaption",{children:"The description of AnyOf in Type Chanllenges"})]}),`
`,s.exports.jsx(e.p,{children:"我最开始的题解如下，将 falsy 的类型统一成一个 tuple，再判断每个元素是否为 trusy。"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-ts",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"FalsyType"})," = ",s.exports.jsx(e.span,{className:"hljs-string",children:"''"})," | [] | ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"})," | ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),` | {}

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"AnyOf"}),"<T ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"readonly"})," ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"any"}),`[]> = 
  T `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"}),` [infer L, ... infer R]
    ? (L `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"FalsyType"}),`
     ? `,s.exports.jsx(e.span,{className:"hljs-title class_",children:"AnyOf"}),`<R>
     : `,s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`)
    : `,s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`

`]})}),`
`,s.exports.jsx(e.p,{children:"当然，这种写法是错误的。"}),`
`,s.exports.jsxs(e.p,{children:["因为空对象字面值",s.exports.jsx(e.code,{children:"{}"}),"是一个 ",s.exports.jsx(e.strong,{children:"falsy"})," 的类型，但",s.exports.jsx(e.code,{children:"T extends {}"}),"判断的却是",s.exports.jsx(e.code,{children:"T"}),"是否是一个",s.exports.jsx(e.strong,{children:"对象"}),`,
对于 JavaScript 这样`,s.exports.jsx(e.strong,{children:"万物皆对象"}),"的语言这种",s.exports.jsx(e.strong,{children:"条件判断"}),"便显得毫无意义了。"]}),`
`,s.exports.jsxs(e.p,{children:["于是在我的题解中，利用",s.exports.jsx(e.code,{children:"index signature"}),"针对",s.exports.jsx(e.code,{children:"{}"}),"进行了单独的判断，而不是将它与其他 falsy 类型统一到一个 tuple 中。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-ts",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"AnyOf"}),"<T ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"readonly"})," ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"any"}),`[]> = 
  T `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"}),` [infer L, ... infer R]
    ? (L `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"''"})," | [] | ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"})," | ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`
      ? `,s.exports.jsx(e.span,{className:"hljs-title class_",children:"AnyOf"}),`<R>
      : (keyof L `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"undefined"}),`[]
        ? `,s.exports.jsx(e.span,{className:"hljs-title class_",children:"AnyOf"}),`<R>
        : `,s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`))
    : `,s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`

`]})}),`
`,s.exports.jsxs(e.p,{children:["今天，偶然在另一个项目的",s.exports.jsx(e.code,{children:"@typescript-eslint"}),"提示中看到这样的信息："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsx(e.code,{className:"hljs language-xml",children:'Don\'t use `{}` as a type. `{}` actually means "any non-nullish value".\n- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.\n- If you want a type meaning "any value", you probably want `unknown` instead.\n- If you want a type meaning "empty object", you probably want `Record<string, never>` instead.\n'})}),`
`,s.exports.jsx(e.p,{children:"翻译过来就是："}),`
`,s.exports.jsxs(e.p,{children:["不要将",s.exports.jsx(e.code,{children:"{}"}),"用作类型，因为",s.exports.jsx(e.code,{children:"{}"}),'实际上表示"',s.exports.jsx(e.strong,{children:"任何非空值"}),'"。']}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["如果要表示",s.exports.jsx(e.strong,{children:"任何对象"}),"，用",s.exports.jsx(e.code,{children:"Record<string, unknown>"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:["如果要表示",s.exports.jsx(e.strong,{children:"任何值"}),"，用",s.exports.jsx(e.code,{children:"unknown"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:["如果要表示",s.exports.jsx(e.strong,{children:"空对象字面值"}),"，用",s.exports.jsx(e.code,{children:"Record<string, never>"}),"。"]}),`
`]}),`
`,s.exports.jsx(e.p,{children:"据此，就可以将题解改写为如下形式了："}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-ts",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"FalsyType"})," = ",s.exports.jsx(e.span,{className:"hljs-string",children:"''"})," | [] | ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"})," | ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"})," | ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Record"}),"<",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"}),", ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"never"}),`>

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"AnyOf"}),"<T ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"readonly"})," ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"any"}),`[]> = 
  T `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"}),` [infer L, ... infer R]
    ? (L `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"FalsyType"}),`
     ? `,s.exports.jsx(e.span,{className:"hljs-title class_",children:"AnyOf"}),`<R>
     : `,s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`)
    : `,s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`

`]})}),`
`,s.exports.jsx(e.p,{children:`最后吐槽一下，当时在 bing、google、stackoverflow 上搜了很久 ts 中空字符字面量怎么表示，但一直没查到,
大概是英语水平不行吧，单凭敲几个关键词还是不能准确检索。`})]})}function h(n={}){return s.exports.jsx(l,Object.assign({},n,{children:s.exports.jsx(r,n)}))}export{c as date,h as default,p as description,o as duration,x as lang,i as path,a as title};
