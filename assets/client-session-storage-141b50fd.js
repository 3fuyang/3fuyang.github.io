import{j as e}from"./jsx-runtime-f0839969.js";const r="客户端 Session Storage 的生命周期",i="2022-09-30T21:33:00.000+00:00",c="zh",a="1min",l="/blog/client-session-storage";function t(o){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",p:"p",code:"code",strong:"strong"},o.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsx(s.li,{className:"toc-item toc-item-h1",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#客户端-session-storage-的生命周期",children:"客户端 Session Storage 的生命周期"})})})}),`
`,e.exports.jsx(s.h1,{id:"客户端-session-storage-的生命周期",children:"客户端 Session Storage 的生命周期"}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"Long may the holiday shine."}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["最近实习分到一个在 Web 端嵌入 h5 页面的需求，具体实现中是以“跳转”（操纵",e.exports.jsx(s.code,{children:"window.location"}),"）的方式嵌入。"]}),`
`,e.exports.jsx(s.p,{children:"因为涉及到鉴权（authentication）的问题，所以仔细研究了一下 session storage 在一个 tab 页范围内跳转的生命周期，结论如下："}),`
`,e.exports.jsxs(s.p,{children:["Session storage 一般被理解为",e.exports.jsx(s.strong,{children:"会话"}),"期存储，只要对应 tab 页不关闭就会持续存在，即便使用",e.exports.jsx(s.code,{children:"window.location"}),`跳转到其他站点,
通过`,e.exports.jsx(s.code,{children:"window.history"}),"接口或者重新赋值",e.exports.jsx(s.code,{children:"window.location.href"}),"回到该站点，session storage ",e.exports.jsx(s.strong,{children:"依然存在"}),"。"]}),`
`,e.exports.jsxs(s.p,{children:["注意，打开一个",e.exports.jsx(s.strong,{children:"新 tab 页"}),"进入到该站点时，是无法访问其他同源 tab 页创建的 session storage 的。"]})]})}function x(o={}){const{wrapper:s}=o.components||{};return s?e.exports.jsx(s,Object.assign({},o,{children:e.exports.jsx(t,o)})):t(o)}export{i as date,x as default,a as duration,c as lang,l as path,r as title};
