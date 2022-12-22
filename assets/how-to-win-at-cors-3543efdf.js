import{j as s}from"./jsx-runtime-f0839969.js";const l="How to win at CORS?",o="2022-11-24T15:09:00.000+00:00",c="zh",x="4min",i="/blog/how-to-win-at-cors";function n(r){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",span:"span",h4:"h4",ul:"ul",h3:"h3"},r.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsxs(e.li,{className:"toc-item toc-item-h1",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#how-to-win-at-cors",children:"How to win at CORS?"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-2",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#making-a-cors-request",children:"Making a CORS request"})}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#cors-requests",children:"CORS requests"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#关于-http-referer",children:"关于 HTTP Referer"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#为什么referer在提供安全支持上非常鸡肋",children:"为什么Referer（在提供安全支持上）非常鸡肋？"})})]})]}),s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#cors-responses",children:"CORS responses"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#is-it-safe-to-expose-resources-via-cors",children:"Is it safe to expose resources via CORS?"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#adding-credentials",children:"Adding credentials"})}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#unusual-requests-and-preflights",children:"Unusual requests and preflights"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#preflight-request",children:"Preflight request"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#preflight-response",children:"Preflight response"})})]})]})]})]})})}),`
`,s.exports.jsx(e.h1,{id:"how-to-win-at-cors",children:"How to win at CORS?"}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:["Reference: ",s.exports.jsx(e.a,{href:"https://jakearchibald.com/2021/cors/",children:"How to win at CORS - JakeArchibald.com"})]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["CORS 的",s.exports.jsx(e.strong,{children:"本质"}),"：为",s.exports.jsx(e.strong,{children:"在客户端"}),"访问跨域资源，对 HTTP 请求（Request）和响应（Response）附加的一系列",s.exports.jsx(e.strong,{children:"头部信息"}),"（",s.exports.jsx(e.code,{children:"Access-Control-*"}),"），以及 W3C 标准对此做的一些相关支持，统称为一个 CORS ",s.exports.jsx(e.strong,{children:"标准"}),"（Spec）。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:s.exports.jsx(e.strong,{children:"CORS 与反向代理"})}),`
`,s.exports.jsxs(e.p,{children:["CORS 和反向代理（Reverse Proxy）是解决",s.exports.jsx(e.strong,{children:"跨域问题"}),"的两种",s.exports.jsx(e.strong,{children:"不同"}),"的方式。"]}),`
`,s.exports.jsxs(e.p,{children:["由于前后端分离架构的流行，反向代理在前端开发环境的 ",s.exports.jsx(e.strong,{children:"DevServer"})," （如",s.exports.jsx(e.code,{children:"webpack-dev-server"}),"、",s.exports.jsx(e.code,{children:"vite"}),"）中被广泛使用。其本质是开启一个服务端的代理，用于",s.exports.jsx(e.strong,{children:"转发"}),"原本从客户端直接发送将跨域的请求。由于",s.exports.jsx(e.strong,{children:"同源政策"}),"（SOP）只限制 ",s.exports.jsx(e.strong,{children:"C => S"})," 的请求，而从反向代理到目标服务器属于 ",s.exports.jsx(e.strong,{children:"S => S"}),"，所以自然",s.exports.jsx(e.strong,{children:"不受"}),"同源政策的限制。"]}),`
`,s.exports.jsxs(e.p,{children:["在 DevServer 设置的反向代理是",s.exports.jsx(e.strong,{children:"影响不到生产环境"}),"的，需要额外在生产服务器（如",s.exports.jsx(e.code,{children:"nginx"}),"等）配置反向代理。"]}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"making-a-cors-request",children:"Making a CORS request"}),`
`,s.exports.jsxs(e.p,{children:["大多数",s.exports.jsx(e.strong,{children:"现代 Web 特性"}),"都",s.exports.jsx(e.strong,{children:"默认"}),"要求使用 CORS，比如",s.exports.jsx(e.code,{children:"fetch()"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["有些现代 Web 特性，如",s.exports.jsx(e.code,{children:'<link rel="preload">'}),"，",s.exports.jsx(e.strong,{children:"默认"}),"不使用 CORS，因为它们被设计出来用于支持一些不使用 CORS 的旧特性。"]}),`
`,s.exports.jsxs(e.p,{children:["并",s.exports.jsx(e.strong,{children:"没有一套简单的规则"}),"用于鉴别哪些特性默认使用或不使用 CORS，比如："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-html",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"<!-- Not a CORS request-->"}),`
`,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"script"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"src"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"https://example.com/script.js"'}),">"]}),s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"script"}),">"]}),`
`,s.exports.jsx(e.span,{className:"hljs-comment",children:"<!-- CORS request -->"}),`
`,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"script"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"module"'})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"src"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"https://example.com/script.js"'}),">"]}),s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"最佳方式"}),"是查看 HTTP 请求头部，在 Chrome 和 Firefox 中，跨域请求将携带",s.exports.jsx(e.code,{children:"Sec-Fetch-Mode"}),"头部，来声明其是否是一个 CORS 请求。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsx(e.code,{className:"hljs language-xml",children:`GET ... HTTP/1.1

Sec-Fetch-Mode: cors | no-cors | ...
`})}),`
`,s.exports.jsxs(e.p,{children:["如果一个 HTML 元素默认未使用 CORS 进行了请求，可以通过",s.exports.jsx(e.code,{children:"crossorigin"}),"属性，将其行为切换到 CORS 请求。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-html",children:[s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"img"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"crossorigin"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"src"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"..."'})," />"]}),`
`,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"script"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"crossorigin"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"src"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"..."'}),">"]}),s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"script"}),">"]}),`
`,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"link"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"crossorigin"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"rel"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"href"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"..."'})," />"]}),`
`,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"link"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"crossorigin"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"rel"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"preload"'})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"as"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"font"'})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"href"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"..."'})," />"]}),`
`]})}),`
`,s.exports.jsx(e.h2,{id:"cors-requests",children:"CORS requests"}),`
`,s.exports.jsxs(e.p,{children:["跨域的 CORS 请求默认",s.exports.jsx(e.strong,{children:"不携带 credentials"}),"（没有 ",s.exports.jsx(e.strong,{children:"cookies"}),"、客户端",s.exports.jsx(e.strong,{children:"证书"}),"、自动添加的",s.exports.jsx(e.code,{children:"Authorization"}),"头部，且响应头中的",s.exports.jsx(e.code,{children:"Set-Cookie"}),"将被忽略），而",s.exports.jsx(e.strong,{children:"同源请求默认携带 credentials"}),"。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:s.exports.jsx(e.strong,{children:"注意"})}),`
`,s.exports.jsxs(e.p,{children:["本文以及通常 HTTP 请求所指的携带凭据（credentials）都是指",s.exports.jsx(e.strong,{children:"浏览器能自动"}),"添加到请求的凭据。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["在开发 CORS 标准时，标准组织新建立了一个 HTTP 头部",s.exports.jsx(e.code,{children:"Origin"}),"，用来提供发出请求的页面的",s.exports.jsx(e.strong,{children:"源"}),"。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.h4,{id:"关于-http-referer",children:["关于 HTTP ",s.exports.jsx(e.code,{children:"Referer"})]}),`
`,s.exports.jsxs(e.p,{children:["HTTP ",s.exports.jsx(e.code,{children:"referer"}),"被浏览器传递给服务器，用来告知服务器“用户进入当前页（即目前请求的目标）",s.exports.jsx(e.strong,{children:"之前"}),"所处的页面”。"]}),`
`,s.exports.jsxs(e.h4,{id:"为什么referer在提供安全支持上非常鸡肋",children:["为什么",s.exports.jsx(e.code,{children:"Referer"}),"（在提供安全支持上）非常鸡肋？"]}),`
`,s.exports.jsxs(e.p,{children:["因为",s.exports.jsx(e.code,{children:"referer"}),"是",s.exports.jsx(e.strong,{children:"可欺瞒"}),"的（spoofable），在客户端可以修改它（如通过浏览器扩展、代理等），而",s.exports.jsx(e.code,{children:"origin"}),"头部是由浏览器内部控制，保证其准确可靠的。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"Origin"}),"是一个很有用的头部，常常被添加到许多其他类型的请求中，比如 WebSocket 或",s.exports.jsx(e.code,{children:"POST"}),"请求。浏览器曾试过将",s.exports.jsx(e.code,{children:"Origin"}),"添加到常规的",s.exports.jsx(e.code,{children:"GET"}),"请求中，但这会导致许多将带有",s.exports.jsx(e.code,{children:"Origin"}),"头部的请求视为 CORS 请求的网站崩溃。"]}),`
`,s.exports.jsx(e.h2,{id:"cors-responses",children:"CORS responses"}),`
`,s.exports.jsx(e.p,{children:"为使其他源能跨域访问资源，响应头必须包含头部："}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsx(e.code,{className:"hljs language-xml",children:`Access-Control-Allow-Origin: * (表示接受任何源)
`})}),`
`,s.exports.jsxs(e.p,{children:["如果请求没有附带 credentials，那么",s.exports.jsx(e.code,{children:"*"}),"代表任何请求的源。若要显式指定源，注意所有 HTTP 头部的",s.exports.jsx(e.strong,{children:"名称不区分大小写"}),"，但",s.exports.jsx(e.strong,{children:"值区分大小写"}),"（case-sensitive）。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"注意"}),"，如果请求的",s.exports.jsx(e.code,{children:"Origin"}),"相对于响应的",s.exports.jsx(e.code,{children:"Access-Control-Allow-Origin"}),"多了一个尾缀",s.exports.jsx(e.code,{children:"/"}),"，也不能通过 CORS。"]}),`
`,s.exports.jsx(e.p,{children:"如果请求通过 CORS，则响应可能包含以下额外的头部信息："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Cache-Control"}),"：缓存管理"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Content-Language"}),"：语言"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Content-Length"}),"：消息主体的大小"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Content-Type"}),"：资源的 MIME 类型"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Expires"}),"：响应过期时间"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Last-Modified"}),"：最后一次修改时间"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Pragma"}),"：",s.exports.jsx(e.strong,{children:"已弃用"}),"，用于缓存管理"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["响应可以包含另一个头部",s.exports.jsx(e.code,{children:"Access-Control-Expose-Headers"}),"，让服务端可以发送额外的",s.exports.jsx(e.strong,{children:"自定义头部"}),"："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsx(e.code,{className:"hljs language-xml",children:`Access-Control-Expose-Headers: Custom-Header-1, Custom-Header-2
`})}),`
`,s.exports.jsx(e.h2,{id:"is-it-safe-to-expose-resources-via-cors",children:"Is it safe to expose resources via CORS?"}),`
`,s.exports.jsxs(e.p,{children:["如果一个资源不包含隐私数据，那么对其加上",s.exports.jsx(e.code,{children:"Access-Control-Allow-Origin: *"}),"是",s.exports.jsx(e.strong,{children:"完全安全"}),"的。"]}),`
`,s.exports.jsxs(e.p,{children:["如果一个资源",s.exports.jsx(e.strong,{children:"有时"}),"，取决于 cookies，会包含隐私数据，那么在加上",s.exports.jsx(e.code,{children:"Access-Control-Allow-Origin: *"}),"后，需要包含",s.exports.jsx(e.code,{children:"Vary: Cookie"}),"控制缓存以保证其安全。"]}),`
`,s.exports.jsx(e.h2,{id:"adding-credentials",children:"Adding credentials"}),`
`,s.exports.jsx(e.p,{children:"跨域的 CORS 请求默认是不包含 credentials 的。然而，各种 API 允许添加 credentials。"}),`
`,s.exports.jsxs(e.p,{children:["使用",s.exports.jsx(e.code,{children:"fetch"}),"或",s.exports.jsx(e.code,{children:"xhr"}),"："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// Fetch API"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," response = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"await"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),`(url, {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"credentials"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'include'"}),`
})

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// AJAX"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," xhr = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"XMLHttpRequest"}),`()
xhr.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"open"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'GET'"}),`, url)
xhr.`,s.exports.jsx(e.span,{className:"hljs-property",children:"withCredentials"})," = ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`
xhr.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"send"}),`()
`]})}),`
`,s.exports.jsx(e.p,{children:"或者 HTML 元素："}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-html",children:[s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"img"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"crossorigin"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"use-credentials"'})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"src"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"..."'})," />"]}),`
`]})}),`
`,s.exports.jsxs(e.p,{children:["那么",s.exports.jsx(e.strong,{children:"响应必须包含"}),"："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-xml",children:[`...

Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: https://`,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"subdomains"}),">"]}),`.com
Vary: Cookie, Origin
`]})}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:s.exports.jsx(e.strong,{children:"注意"})}),`
`,s.exports.jsxs(e.p,{children:["如果要在 CORS 请求中携带凭据，则必须要",s.exports.jsx(e.strong,{children:"服务端"}),"配合："]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["添加头部",s.exports.jsx(e.code,{children:"Access-Control-Allow-Credentials: true"}),"；"]}),`
`,s.exports.jsxs(e.li,{children:["不能使用通配符",s.exports.jsx(e.code,{children:"*"}),"指定接收所有源，即",s.exports.jsx(e.code,{children:"Access-Control-Allow-Origin"}),"不可为",s.exports.jsx(e.code,{children:"*"})]}),`
`]}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"unusual-requests-and-preflights",children:"Unusual requests and preflights"}),`
`,s.exports.jsx(e.p,{children:"先看一些常见的（usual）请求："}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// 这个请求与一个<img>元素的行为几乎相同"}),`
`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),"(url, { ",s.exports.jsx(e.span,{className:"hljs-attr",children:"credentials"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'include'"}),` })
`]})}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// 上面这个请求与一个<form>元素的行为几乎相同"}),`
`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),`(url, {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"methdo"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'POST'"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"body"}),`: formData
})
`]})}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// 这不是一个寻常请求，它具有特殊的请求方法和头部"}),`
`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),`(url, {
  `,s.exports.jsx(e.span,{className:"hljs-attr",children:"method"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'wibbley-wobbley'"}),`,
  `,s.exports.jsx(e.span,{className:"hljs-attr",children:"credentials"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'include'"}),`,
  `,s.exports.jsx(e.span,{className:"hljs-attr",children:"headers"}),`: {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"fancy"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'headers'"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-string",children:"'here-we'"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'go'"}),`,
  },
})
`]})}),`
`,s.exports.jsxs(e.p,{children:["怎样判定一个请求算是一个 ",s.exports.jsx(e.strong,{children:"unusual request"})," 相当复杂。"]}),`
`,s.exports.jsxs(e.p,{children:["从",s.exports.jsx(e.strong,{children:"高维度"}),"上讲，如果它不是",s.exports.jsx(e.strong,{children:"其他浏览器 API"})," 通常发出的那种请求，那么它就是 unsual request。"]}),`
`,s.exports.jsxs(e.p,{children:["从",s.exports.jsx(e.strong,{children:"低维度"}),"上讲，如果请求不是",s.exports.jsx(e.code,{children:"GET"}),"、",s.exports.jsx(e.code,{children:"POST"}),"或",s.exports.jsx(e.code,{children:"HEAD"}),"请求，或者它包含 ",s.exports.jsx(e.a,{href:"https://fetch.spec.whatwg.org/#cors-safelisted-request-header",children:"safelist"})," 以外的头部或头部值，那么它是一个 unusal request。"]}),`
`,s.exports.jsxs(e.p,{children:["在发送 unsual request ",s.exports.jsx(e.strong,{children:"之前"}),"，",s.exports.jsx(e.strong,{children:"浏览器"}),"会先询问目标源是否接受它，这个过程叫做",s.exports.jsx(e.strong,{children:"预检"}),"（preflight），这个行为是浏览器自动进行的。"]}),`
`,s.exports.jsx(e.h3,{id:"preflight-request",children:"Preflight request"}),`
`,s.exports.jsxs(e.p,{children:["对于前面的 unusual request，浏览器先用",s.exports.jsx(e.code,{children:"OPTIONS"}),"方法发送预检请求，且带有以下头部："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsx(e.code,{className:"hljs language-xml",children:`Access-Control-Request-Method: wibbley-wobbley
Access-Control-Request-Headers: fancy, here-we
`})}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Access-Control-Request-Method"}),"：主请求（main request）将使用的请求方法，即使该请求方法是寻常的（",s.exports.jsx(e.code,{children:"GET"}),"、",s.exports.jsx(e.code,{children:"POST"}),"、",s.exports.jsx(e.code,{children:"HEAD"}),"）也需发送该头部。（",s.exports.jsx(e.strong,{children:"必须"}),"）"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Access-Control-Request-Headers"}),"：主请求将要发送的特殊头部，如果没有特殊头部，预检请求将不发送该头部。（",s.exports.jsx(e.strong,{children:"可选"}),"）"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["预检请求",s.exports.jsx(e.strong,{children:"从不"}),"携带 credentials，",s.exports.jsx(e.strong,{children:"即使"}),"主请求",s.exports.jsx(e.strong,{children:"可能携带"}),"。"]}),`
`,s.exports.jsx(e.h3,{id:"preflight-response",children:"Preflight response"}),`
`,s.exports.jsx(e.p,{children:"服务器对预检请求的响应，将使用以下头部表明是否允许主请求："}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsx(e.code,{className:"hljs language-xml",children:`Access-Control-Max-Age: 600 // 600s
Access-Control-Allow-Methods: wibbley-wobbley
Access-Control-Allow-Headers: fancy, here-we
`})}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Access-Control-Max-Age"})," - 预检响应的",s.exports.jsx(e.strong,{children:"缓存周期"}),"，在周期内发送 unusual 主请求不需要再进行预检。默认值是 5 s，一些浏览器限制了其最大值，如 Chrome（10 min）、Firefox（24 h）。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Access-Control-Allow-Methods"})," - 允许的 unsual 请求方法，可以是",s.exports.jsx(e.strong,{children:"逗号分隔"}),"的列表，对大小写",s.exports.jsx(e.strong,{children:"敏感"}),"。如果主请求",s.exports.jsx(e.strong,{children:"不携带凭据"}),"，那么该头部可用",s.exports.jsx(e.code,{children:"*"}),"表示",s.exports.jsx(e.strong,{children:"几乎所有"}),"方法，不包括",s.exports.jsx(e.code,{children:"CONNECT"}),"、",s.exports.jsx(e.code,{children:"TRACE"}),"、",s.exports.jsx(e.code,{children:"TRACK"}),"（由于",s.exports.jsx(e.strong,{children:"安全原因"}),"，它们都在 ",s.exports.jsx(e.a,{href:"https://fetch.spec.whatwg.org/#forbidden-method",children:"FORBIDDEN LIST"})," 上）。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Access-Control-Allow-Headers"})," - 允许的 unusual 头部，同样可以是",s.exports.jsx(e.strong,{children:"逗号分隔"}),"的列表，对大小写",s.exports.jsx(e.strong,{children:"不敏感"}),"。如果主请求",s.exports.jsx(e.strong,{children:"不携带凭据"}),"，该头部可使用",s.exports.jsx(e.code,{children:"*"}),"表示允许所有不在 ",s.exports.jsx(e.a,{href:"https://fetch.spec.whatwg.org/#forbidden-header-name",children:"HEADER FORBIDDEN LIST"})," 上的头部。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["由于安全问题，列于 HEADER FORBIDDEN LIST 中的头部",s.exports.jsx(e.strong,{children:"必须"}),"处于浏览器的控制下，它们会",s.exports.jsx(e.strong,{children:"静默"}),"从 CORS 请求和",s.exports.jsx(e.code,{children:"Access-Control-Allow-Headers"}),"中被",s.exports.jsx(e.strong,{children:"抹除"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"预检响应"}),"必须通过常规的 CORS 检查，所以其需要加上",s.exports.jsx(e.code,{children:"Access-Control-Allow-Origin"}),"，且如果主请求将发送凭据，预检响应必须带上",s.exports.jsx(e.code,{children:"Access-Control-Allow-Crendentials: true"}),"。预检响应的",s.exports.jsx(e.strong,{children:"状态码"}),"必须在 ",s.exports.jsx(e.strong,{children:"200-299"})," 中。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:s.exports.jsx(e.strong,{children:"注意"})}),`
`,s.exports.jsxs(e.p,{children:["预检响应对状态码的限制造成了一些",s.exports.jsx(e.strong,{children:"陷阱"}),"。对于一个像",s.exports.jsx(e.code,{children:"/artists/Pip-Blom"}),"这样的 API，如果对应资源 'Pip Blom' 不在数据库中，你可能想要返回 404 来",s.exports.jsx(e.strong,{children:"明确告知"}),"客户端它请求了不存在的资源。但如果这个请求需要一个预检请求，那么其响应状态码只能是 ",s.exports.jsx(e.strong,{children:"200-299"}),"，即使最终的主响应会是 404。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["如果主请求",s.exports.jsx(e.strong,{children:"方法"}),"和",s.exports.jsx(e.strong,{children:"头部"}),"都被允许，那么主请求将被发送。"]})]})}function h(r={}){const{wrapper:e}=r.components||{};return e?s.exports.jsx(e,Object.assign({},r,{children:s.exports.jsx(n,r)})):n(r)}export{o as date,h as default,x as duration,c as lang,i as path,l as title};
