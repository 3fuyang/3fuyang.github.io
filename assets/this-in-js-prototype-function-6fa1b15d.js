import{j as s}from"./jsx-runtime-f0839969.js";const t="prototype 函数中的 this 绑定",o="2022-09-02T15:11:00.000+08:00",c="this，你懂的。",p="zh",x="2min",i="/notes/this-in-js-prototype-function",r=function({children:e}){return s.exports.jsx("article",{className:"prose",children:e})};function l(n){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span",blockquote:"blockquote"},n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h1",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#prototype-函数中的-this-绑定",children:"prototype 函数中的 this 绑定"})})})}),`
`,s.exports.jsx(e.h1,{id:"prototype-函数中的-this-绑定",children:"prototype 函数中的 this 绑定"}),`
`,s.exports.jsxs(e.p,{children:["在重做山月前端面试基础中 ",s.exports.jsx(e.a,{href:"https://q.shanyue.tech/fe/js/32.html",children:"bind"})," 一题时，由于对",s.exports.jsx(e.code,{children:"this"}),"理解不到位，写出如下",s.exports.jsx(e.strong,{children:"错误答案"}),"："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-title class_",children:"Function"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:s.exports.jsx(e.span,{className:"hljs-keyword",children:"prototype"})}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"myBind"})," = ",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"obj"}),") =>"]}),` {
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"...args"}),") =>"]})," ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"apply"}),`(obj, args)
}

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"f"}),` (arg) {
  `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"a"}),`, arg)
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// TypeError: this.apply is not a function"}),`
f.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"myBind"}),"({",s.exports.jsx(e.span,{className:"hljs-attr",children:"a"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"2"}),"})(",s.exports.jsx(e.span,{className:"hljs-number",children:"4"}),`)
`]})}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"error: TypeError"})," 通常表示对变量进行了",s.exports.jsx(e.strong,{children:"不合理的操作"}),"。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["其中，返回的箭头函数并没有问题，但",s.exports.jsx(e.code,{children:"myBind"}),"不能使用箭头函数定义，因为返回函数的",s.exports.jsx(e.code,{children:"this"}),s.exports.jsx(e.strong,{children:"继承"}),"自外层的",s.exports.jsx(e.code,{children:"myBind"}),`,
由于`,s.exports.jsx(e.code,{children:"myBind"}),"也用箭头函数定义，那么在",s.exports.jsx(e.strong,{children:"定义时"}),s.exports.jsx(e.code,{children:"this"}),"就",s.exports.jsx(e.strong,{children:"静态"}),"地指向了",s.exports.jsx(e.code,{children:"Global"}),"对象，",s.exports.jsx(e.code,{children:"Global"}),"不是一个函数，不存在",s.exports.jsx(e.code,{children:"apply"}),"属性，所以报错。"]}),`
`,s.exports.jsxs(e.p,{children:["将外层的",s.exports.jsx(e.code,{children:"myBind"}),"改为常规函数(function () {})的写法即可："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-title class_",children:"Function"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:s.exports.jsx(e.span,{className:"hljs-keyword",children:"prototype"})}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"myBind"})," = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.exports.jsx(e.span,{className:"hljs-params",children:"obj"}),`) {
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"...args"}),") =>"]})," ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"apply"}),`(obj, args)
}

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"f"}),` (arg) {
  `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"a"}),`, arg)
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 2, 4"}),`
f.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"myBind"}),"({",s.exports.jsx(e.span,{className:"hljs-attr",children:"a"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"2"}),"})(",s.exports.jsx(e.span,{className:"hljs-number",children:"4"}),`)
`]})}),`
`,s.exports.jsxs(e.p,{children:["这样，所返回箭头函数的",s.exports.jsx(e.code,{children:"this"}),"将由",s.exports.jsx(e.code,{children:"myBind()"}),"在",s.exports.jsx(e.strong,{children:"运行时"}),"确定，也正好就是实例化的",s.exports.jsx(e.strong,{children:"函数对象"}),"。"]})]})}function h(n={}){return s.exports.jsx(r,Object.assign({},n,{children:s.exports.jsx(l,n)}))}export{o as date,h as default,c as description,x as duration,p as lang,i as path,t as title};
