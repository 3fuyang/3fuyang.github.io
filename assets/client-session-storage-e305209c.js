import{j as s}from"./jsx-runtime-f0839969.js";const i="客户端 Session Storage 的生命周期",c="2022-09-30T21:33:00.000+08:00",a="Session Storage 是客户端存储的一种，本文通过试验对其生命周期进行了一些探讨。",l="zh",x="1min",d="/blog/client-session-storage",t=function({children:e}){return s.exports.jsx("article",{className:"prose",children:e})};function n(o){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",p:"p",code:"code",strong:"strong"},o.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h1",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#客户端-session-storage-的生命周期",children:"客户端 Session Storage 的生命周期"})})})}),`
`,s.exports.jsx(e.h1,{id:"客户端-session-storage-的生命周期",children:"客户端 Session Storage 的生命周期"}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:"Long may the holiday shine."}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["最近实习分到一个在 Web 端嵌入 h5 页面的需求，具体实现中是以“跳转”（操纵",s.exports.jsx(e.code,{children:"window.location"}),"）的方式嵌入。"]}),`
`,s.exports.jsx(e.p,{children:"因为涉及到鉴权（authentication）的问题，所以仔细研究了一下 session storage 在一个 tab 页范围内跳转的生命周期，结论如下："}),`
`,s.exports.jsxs(e.p,{children:["Session storage 一般被理解为",s.exports.jsx(e.strong,{children:"会话"}),"期存储，只要对应 tab 页不关闭就会持续存在，即便使用",s.exports.jsx(e.code,{children:"window.location"}),`跳转到其他站点,
通过`,s.exports.jsx(e.code,{children:"window.history"}),"接口或者重新赋值",s.exports.jsx(e.code,{children:"window.location.href"}),"回到该站点，session storage ",s.exports.jsx(e.strong,{children:"依然存在"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["注意，打开一个",s.exports.jsx(e.strong,{children:"新 tab 页"}),"进入到该站点时，是无法访问其他同源 tab 页创建的 session storage 的。"]})]})}function h(o={}){return s.exports.jsx(t,Object.assign({},o,{children:s.exports.jsx(n,o)}))}export{c as date,h as default,a as description,x as duration,l as lang,d as path,i as title};
