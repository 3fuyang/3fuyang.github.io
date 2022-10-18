import{a as n,j as l,F as c}from"./index.a66e1ded.js";const t="/[a-zA-Z]/.test(undefined) === true",h="1min",i="zh",d="2022-09-25T18:31:00.000+00:00",p="/notes/regexp-test-undefined";function a(e){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span"},e.components);return l(c,{children:[n(s.nav,{className:"toc",children:n(s.ol,{className:"toc-level toc-level-1",children:n(s.li,{className:"toc-item toc-item-h1",children:n(s.a,{className:"toc-link toc-link-h1",href:"#regexpprototypetestundefined",children:"RegExp.prototype.test(undefined)"})})})}),`
`,n(s.h1,{id:"regexpprototypetestundefined",children:"RegExp.prototype.test(undefined)"}),`
`,l(s.p,{children:[n(s.code,{children:"undefined"}),"\u5728\u5339\u914D",n(s.strong,{children:"\u6B63\u5219\u8868\u8FBE\u5F0F"}),"\u65F6\u5C45\u7136\u4F1A\u88AB\u89C6\u4F5C",n(s.strong,{children:"\u5B57\u7B26\u4E32"}),"\uFF0C\u8FD9\u4E5F\u592A\u6574\u86CA\u4E86..."]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-comment",children:"// true"}),`
/[a-zA-Z]/.`,n(s.span,{className:"hljs-title function_",children:"test"}),"(",n(s.span,{className:"hljs-literal",children:"undefined"}),`)

`,n(s.span,{className:"hljs-comment",children:"// true"}),`
/define/.`,n(s.span,{className:"hljs-title function_",children:"test"}),"(",n(s.span,{className:"hljs-literal",children:"undefined"}),`)

`,n(s.span,{className:"hljs-comment",children:"// false"}),`
/\\d+/.`,n(s.span,{className:"hljs-title function_",children:"test"}),"(",n(s.span,{className:"hljs-literal",children:"undefined"}),`)
`]})}),`
`,l(s.p,{children:["\u9644\u4E0A\u7528\u5230\u8FD9\u4E2A\u7279\u6027\uFF08\u6B6A\u6253\u6B63\u7740\uFF09\u7684\u9898\u76EE\u2014\u2014",n(s.a,{href:"https://q.shanyue.tech/fe/code/419.html",children:"\u5BF9\u4EE5\u4E0B\u5B57\u7B26\u4E32\u8FDB\u884C\u538B\u7F29\u7F16\u7801"}),"\uFF1A"]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-comment",children:"// \u538B\u7F29\u4EE5\u53CA\u89E3\u538B\u5B57\u7B26\u4E32\u7F16\u7801"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"encode"})," = (",n(s.span,{className:"hljs-params",children:"str"}),`) => {
  `,n(s.span,{className:"hljs-keyword",children:"const"}),` arr = []
  `,n(s.span,{className:"hljs-keyword",children:"let"})," cur, count = ",n(s.span,{className:"hljs-number",children:"0"}),`
  `,n(s.span,{className:"hljs-keyword",children:"for"})," (",n(s.span,{className:"hljs-keyword",children:"let"})," i = ",n(s.span,{className:"hljs-number",children:"0"}),"; i < str.",n(s.span,{className:"hljs-property",children:"length"}),`; ++i) {
    `,n(s.span,{className:"hljs-keyword",children:"if"}),` (cur !== str[i]) {
      arr.`,n(s.span,{className:"hljs-title function_",children:"push"}),`(cur)
      `,n(s.span,{className:"hljs-keyword",children:"if"})," (count > ",n(s.span,{className:"hljs-number",children:"0"}),`) {
        arr.`,n(s.span,{className:"hljs-title function_",children:"push"}),`(count)
      }
      cur = str[i]
      count = `,n(s.span,{className:"hljs-number",children:"1"}),`
    } `,n(s.span,{className:"hljs-keyword",children:"else"}),` {
      count++
    }
  }
  `,n(s.span,{className:"hljs-keyword",children:"return"})," arr.",n(s.span,{className:"hljs-title function_",children:"join"}),"(",n(s.span,{className:"hljs-string",children:"''"}),`)
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"decode"})," = (",n(s.span,{className:"hljs-params",children:"str"}),`) => {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," arr = str.",n(s.span,{className:"hljs-title function_",children:"split"}),"(",n(s.span,{className:"hljs-string",children:"''"}),`),
    result = [],
    stack = []

	`,n(s.span,{className:"hljs-keyword",children:"for"})," (",n(s.span,{className:"hljs-keyword",children:"let"})," i = ",n(s.span,{className:"hljs-number",children:"0"}),"; i < arr.",n(s.span,{className:"hljs-property",children:"length"})," + ",n(s.span,{className:"hljs-number",children:"1"}),`; ++i)   {
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-regexp",children:"/[a-zA-Z]/"}),".",n(s.span,{className:"hljs-title function_",children:"test"}),`(arr[i])) {
      `,n(s.span,{className:"hljs-keyword",children:"let"})," frequency = ",n(s.span,{className:"hljs-number",children:"0"}),`, char
      
      `,n(s.span,{className:"hljs-keyword",children:"for"})," (",n(s.span,{className:"hljs-keyword",children:"let"})," j = ",n(s.span,{className:"hljs-number",children:"0"}),"; j < stack.",n(s.span,{className:"hljs-property",children:"length"}),`; ++j) {
        `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-regexp",children:"/\\d/"}),".",n(s.span,{className:"hljs-title function_",children:"test"}),`(stack[j])) {
          frequency = frequency * `,n(s.span,{className:"hljs-number",children:"10"}),` + stack[j]
        } `,n(s.span,{className:"hljs-keyword",children:"else"}),` {
          char = stack[j]
        }
      }

      `,n(s.span,{className:"hljs-keyword",children:"for"})," (",n(s.span,{className:"hljs-keyword",children:"let"})," i = ",n(s.span,{className:"hljs-number",children:"0"}),`; i < frequency; ++i) {
        result.`,n(s.span,{className:"hljs-title function_",children:"push"}),`(char)
      }

      stack.`,n(s.span,{className:"hljs-property",children:"length"})," = ",n(s.span,{className:"hljs-number",children:"0"}),`
    }

    stack.`,n(s.span,{className:"hljs-title function_",children:"push"}),`(str[i])
  }
  
  `,n(s.span,{className:"hljs-keyword",children:"return"})," result.",n(s.span,{className:"hljs-title function_",children:"join"}),"(",n(s.span,{className:"hljs-string",children:"''"}),`)
}
`]})})]})}function o(e={}){const{wrapper:s}=e.components||{};return s?n(s,Object.assign({},e,{children:n(a,e)})):a(e)}export{d as date,o as default,h as duration,i as lang,p as path,t as title};
