import{j as s}from"./jsx-runtime-f0839969.js";const t="/[a-zA-Z]/.test(undefined) === true",c="1min",p="undefined 被自动转化成字符串进行正则匹配了，整蛊。",o="zh",x="2022-09-25T18:31:00.000+08:00",h="/notes/regexp-test-undefined",r=function({children:e}){return s.exports.jsx("article",{className:"prose",children:e})};function l(n){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span"},n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h1",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#regexpprototypetestundefined",children:"RegExp.prototype.test(undefined)"})})})}),`
`,s.exports.jsx(e.h1,{id:"regexpprototypetestundefined",children:"RegExp.prototype.test(undefined)"}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"undefined"}),"在匹配",s.exports.jsx(e.strong,{children:"正则表达式"}),"时居然会被视作",s.exports.jsx(e.strong,{children:"字符串"}),"，这也太整蛊了..."]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// true"}),`
/[a-zA-Z]/.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"test"}),"(",s.exports.jsx(e.span,{className:"hljs-literal",children:"undefined"}),`)

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// true"}),`
/define/.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"test"}),"(",s.exports.jsx(e.span,{className:"hljs-literal",children:"undefined"}),`)

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// false"}),`
/\\d+/.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"test"}),"(",s.exports.jsx(e.span,{className:"hljs-literal",children:"undefined"}),`)
`]})}),`
`,s.exports.jsxs(e.p,{children:["附上用到这个特性（歪打正着）的题目——",s.exports.jsx(e.a,{href:"https://q.shanyue.tech/fe/code/419.html",children:"对以下字符串进行压缩编码"}),"："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// 压缩以及解压字符串编码"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"encode"})," = (",s.exports.jsx(e.span,{className:"hljs-params",children:"str"}),`) => {
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` arr = []
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," cur, count = ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," i = ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),"; i < str.",s.exports.jsx(e.span,{className:"hljs-property",children:"length"}),`; ++i) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"}),` (cur !== str[i]) {
      arr.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(cur)
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (count > ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`) {
        arr.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(count)
      }
      cur = str[i]
      count = `,s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`
    } `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"}),` {
      count++
    }
  }
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," arr.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"join"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"''"}),`)
}

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"decode"})," = (",s.exports.jsx(e.span,{className:"hljs-params",children:"str"}),`) => {
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," arr = str.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"split"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"''"}),`),
    result = [],
    stack = []

	`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," i = ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),"; i < arr.",s.exports.jsx(e.span,{className:"hljs-property",children:"length"})," + ",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`; ++i)   {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/[a-zA-Z]/"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"test"}),`(arr[i])) {
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," frequency = ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`, char
      
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," j = ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),"; j < stack.",s.exports.jsx(e.span,{className:"hljs-property",children:"length"}),`; ++j) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/\\d/"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"test"}),`(stack[j])) {
          frequency = frequency * `,s.exports.jsx(e.span,{className:"hljs-number",children:"10"}),` + stack[j]
        } `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"}),` {
          char = stack[j]
        }
      }

      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," i = ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`; i < frequency; ++i) {
        result.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(char)
      }

      stack.`,s.exports.jsx(e.span,{className:"hljs-property",children:"length"})," = ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`
    }

    stack.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(str[i])
  }
  
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," result.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"join"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"''"}),`)
}
`]})})]})}function i(n={}){return s.exports.jsx(r,Object.assign({},n,{children:s.exports.jsx(l,n)}))}export{x as date,i as default,p as description,c as duration,o as lang,h as path,t as title};
