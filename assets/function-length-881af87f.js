import{j as s}from"./jsx-runtime-f0839969.js";const l="Function.prototype.length",a="1min",o="zh",c="2022-10-10T14:54:00.000+00:00",p="/notes/function-length";function r(n){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span"},n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h1",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#functionprototypelength",children:"Function.prototype.length"})})})}),`
`,s.exports.jsx(e.h1,{id:"functionprototypelength",children:"Function.prototype.length"}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"Function.prototype.length"}),"返回函数的",s.exports.jsx(e.strong,{children:"形参"}),"（parameters）个数。"]}),`
`,s.exports.jsxs(e.p,{children:["这在 JS 的",s.exports.jsx(e.strong,{children:"函数柯里化"}),"（currying, or partially applied function）实现中会用到。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-ts",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," curry<T>(",s.exports.jsx(e.span,{className:"hljs-attr",children:"func"}),": ",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsxs(e.span,{className:"hljs-params",children:["...args: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"any"}),"[]"]}),") =>"]}),` T) {
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` appliedArgs = []

  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"curried"})," = (",s.exports.jsxs(e.span,{className:"hljs-params",children:["...args: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"any"}),"[]"]}),`) => {
    appliedArgs.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(...args)
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (appliedArgs.",s.exports.jsx(e.span,{className:"hljs-property",children:"length"})," >= func.",s.exports.jsx(e.span,{className:"hljs-property",children:"length"}),`) {
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"func"}),`(...appliedArgs)
    } `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"}),` {
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` curried
    }
  }

  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` curried
}
`]})})]})}function i(n={}){const{wrapper:e}=n.components||{};return e?s.exports.jsx(e,Object.assign({},n,{children:s.exports.jsx(r,n)})):r(n)}export{c as date,i as default,a as duration,o as lang,p as path,l as title};
