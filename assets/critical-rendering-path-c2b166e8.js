import{j as e}from"./jsx-runtime-f0839969.js";const c="关键渲染路径（Critical Rendering Path）",x="2022-09-25T11:24:00.000+08:00",i="关键渲染路径（CSP）是浏览器渲染页面的主要流程，通过了解其内部原理，可对前端性能优化起到重要的指示作用。",l="zh",p="8min",d="/blog/critical-rendering-path",t=function({children:s}){return e.exports.jsx("article",{className:"prose",children:s})};function n(r){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",p:"p",ul:"ul",strong:"strong",h2:"h2",h3:"h3",code:"code",h4:"h4"},r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#关键渲染路径critical-rendering-path",children:"关键渲染路径（Critical rendering path）"}),e.exports.jsx(s.ol,{className:"toc-level toc-level-2",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#理解-crp",children:"理解 CRP"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#你一生的故事",children:"你一生的故事"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#domdocument-object-model",children:"DOM（Document Object Model）"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#cssomcss-object-model",children:"CSSOM（CSS Object Model）"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#render-tree",children:"Render Tree"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#layout",children:"Layout"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#paint",children:"Paint"})}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#scripts-js-和-style-sheets-css--的加载",children:"scripts (JS) 和 style sheets (CSS)  的加载"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#scripts",children:"Scripts"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#style-sheets-css",children:"Style sheets (CSS)"})})]})]})]})]})})]})})}),`
`,e.exports.jsx(s.h1,{id:"关键渲染路径critical-rendering-path",children:"关键渲染路径（Critical rendering path）"}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"参考文献："}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path",children:"Critical rendering path - Web Performance | MDN "})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.a,{href:"https://web.dev/howbrowserswork/",children:"How browsers work (web.dev)"})}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["关键渲染路径（CRP）是浏览器将 HTML、JS、CSS 渲染成屏幕上的",e.exports.jsx(s.strong,{children:"像素点"}),"的步骤，它主要包含 DOM，CSSOM，渲染树（render tree）和布局（layout）。"]}),`
`,e.exports.jsxs(s.p,{children:["优化 CRP 可以提升",e.exports.jsx(s.strong,{children:"首屏渲染"}),"（first render）的性能，这对确保重排和重回以",e.exports.jsx(s.strong,{children:"每秒 60 帧"}),"的频率发生，以防止",e.exports.jsx(s.strong,{children:"卡顿"}),"（junk）。"]}),`
`,e.exports.jsx(s.h2,{id:"理解-crp",children:"理解 CRP"}),`
`,e.exports.jsx(s.h3,{id:"你一生的故事",children:"你一生的故事"}),`
`,e.exports.jsxs(s.p,{children:["一个 Web 页面的一生从客户端发起的一个 ",e.exports.jsx(s.strong,{children:"HTML Request"})," 开始，当然，还得由服务端返回一个 ",e.exports.jsx(s.strong,{children:"HTML Response"})," 来阻止你的夭折。"]}),`
`,e.exports.jsxs(s.p,{children:["浏览器在接收到 HTML 响应报文后，会将它从",e.exports.jsx(s.strong,{children:"二进制"}),"转化为文本，再对文本进行解析。"]}),`
`,e.exports.jsxs(s.p,{children:["在",e.exports.jsx(s.strong,{children:"自上而下"}),"解析 HTML 的过程中，",e.exports.jsx(s.strong,{children:"每当"}),"浏览器遇到一个指向外部资源的",e.exports.jsx(s.strong,{children:"链接"}),"（link），它都会对该资源",e.exports.jsx(s.strong,{children:"新发起"}),"一个网络请求。"]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"注意"}),"：这些请求有些是",e.exports.jsx(s.strong,{children:"阻塞"}),"（blocking）的，有些是",e.exports.jsx(s.strong,{children:"非阻塞"}),"（non-blocking）的。如果遇到一个阻塞的请求，那么浏览器会",e.exports.jsx(s.strong,{children:"暂停"}),"（halt）目前对 HTML  的解析，直到该资源被处理完。"]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["浏览器持续进行",e.exports.jsx(s.code,{children:"HTML --> DOM"}),"这一工作，直到 DOM 被",e.exports.jsx(s.strong,{children:"完全构建"}),"。"]}),`
`,e.exports.jsxs(s.p,{children:["但在浏览器解析 HTML 时，当它遇到 CSS 资源时（比如",e.exports.jsx(s.code,{children:'<link rel="stylesheet" src="...">'}),"、",e.exports.jsx(s.code,{children:"<style>"}),"标签或者行内样式），就会开始构建 CSSOM。"]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:["也就是说，DOM 和 CSSOM 的构建是",e.exports.jsx(s.strong,{children:"并行"}),"（Paralleld）的。"]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["当 DOM 和 CSSOM 都被构建完成后，浏览器将这两个结构",e.exports.jsx(s.strong,{children:"绑定"}),"成",e.exports.jsx(s.strong,{children:"渲染树"}),"（render tree），并计算所有",e.exports.jsx(s.strong,{children:"可视元素"}),"的样式（style），"]}),`
`,e.exports.jsxs(s.p,{children:["在渲染树建立完成后，浏览器开始计算",e.exports.jsx(s.strong,{children:"布局"}),"（layout），也就是设置所有渲染树上元素的",e.exports.jsx(s.strong,{children:"位置"}),"（location）和",e.exports.jsx(s.strong,{children:"尺寸"}),"（size）。"]}),`
`,e.exports.jsxs(s.p,{children:["当布局计算完成后，页面终于会被",e.exports.jsx(s.strong,{children:"渲染"}),"，也就是被绘制成屏幕上的一个个",e.exports.jsx(s.strong,{children:"像素点"}),"（pixel）。"]}),`
`,e.exports.jsxs("figure",{children:[e.exports.jsxs("picture",{children:[e.exports.jsx("source",{type:"image/avif",srcSet:"/images/critical-rendering-path/render.avif"}),e.exports.jsx("source",{type:"image/webp",srcSet:"/images/critical-rendering-path/render.webp"}),e.exports.jsx("img",{width:"729",height:"207",alt:"Critical rendering path",src:"/images/critical-rendering-path/render.jpg",className:"invertable"})]}),e.exports.jsx("figcaption",{children:"关键渲染路径 流程图"})]}),`
`,e.exports.jsx(s.p,{children:"OK，这里有一张示意图，它大致上和前面的描述符合，并且注意 DOM 和 CSSOM 被浏览器并行构建。"}),`
`,e.exports.jsx(s.h3,{id:"domdocument-object-model",children:"DOM（Document Object Model）"}),`
`,e.exports.jsxs(s.p,{children:["DOM 包含了页面的",e.exports.jsx(s.strong,{children:"所有内容"}),"（all the content），它的构建是",e.exports.jsx(s.strong,{children:"增量"}),"（Incremental）的，也就是非阻塞渲染的。"]}),`
`,e.exports.jsx(s.h3,{id:"cssomcss-object-model",children:"CSSOM（CSS Object Model）"}),`
`,e.exports.jsxs(s.p,{children:["CSSOM 包含了 DOM 的",e.exports.jsx(s.strong,{children:"所有样式信息"}),"，它的加载是",e.exports.jsx(s.strong,{children:"阻塞"}),"的，",e.exports.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path",children:"MDN"})," 非常决绝地描述道："]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:["浏览器在",e.exports.jsx(s.strong,{children:"接收"}),"和",e.exports.jsx(s.strong,{children:"解析"}),"完",e.exports.jsx(s.strong,{children:"所有"}),"的 CSS 之前，都会阻塞渲染。"]}),`
`,e.exports.jsxs(s.p,{children:["因为 CSS 的规则可以被",e.exports.jsx(s.strong,{children:"覆盖"}),"，所以内容无法在 ",e.exports.jsx(s.strong,{children:"CSSOM 完全构建"}),"之前被准确渲染，意即没完全构建的 CSSOM 不能用来构建渲染树。"]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"render-tree",children:"Render Tree"}),`
`,e.exports.jsxs(s.p,{children:["渲染树包含了页面全部的内容（DOM）和样式（CSSOM）信息，需要注意的是，渲染树只会捕获",e.exports.jsx(s.strong,{children:"可见"}),"（visible）的内容。"]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:["比方说，HTML 的",e.exports.jsx(s.code,{children:"<head>"}),"标签，一般是不包含任何可见内容的，所以它不会被囊括到渲染树中。"]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["如果一个元素被设置了",e.exports.jsx(s.code,{children:"display: none"}),"，那么它以及它后代的所有元素都不会出现在渲染树中。"]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:["渲染树对元素",e.exports.jsx(s.strong,{children:"可见性"}),"的判断应该主要是基于 CSS ",e.exports.jsx(s.code,{children:"display"}),"规则的，至于",e.exports.jsx(s.strong,{children:"位置"}),"和",e.exports.jsx(s.strong,{children:"尺寸"}),"或者",e.exports.jsx(s.code,{children:"opacity: 0"}),"和",e.exports.jsx(s.code,{children:"visibility: hidden"}),"实现的元素隐藏方案都",e.exports.jsx(s.strong,{children:"没有脱离文档流"}),"，那肯定是被渲染树捕获了。"]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"layout",children:"Layout"}),`
`,e.exports.jsxs(s.p,{children:["布局（Layout）基于",e.exports.jsx(s.strong,{children:"屏幕尺寸"}),"，计算每个元素的位置和尺寸（宽度和高度）。"]}),`
`,e.exports.jsxs(s.p,{children:["什么是元素的高度？对于块级元素来说，它的宽度",e.exports.jsx(s.strong,{children:"默认"}),"等于父元素的宽度。而对于",e.exports.jsx(s.code,{children:"<body>"}),"元素，在不专门定义的情况下，它的宽度就等于",e.exports.jsx(s.strong,{children:"视口"}),"的宽度，这也就是为什么用户的",e.exports.jsx(s.strong,{children:"设备"}),"会影响布局计算。"]}),`
`,e.exports.jsxs(s.p,{children:["值得注意的是，对于非 desktop 的设备（比如说 mobile），当设备",e.exports.jsx(s.strong,{children:"旋转"}),"时，浏览器也会重新计算布局。所以布局的发生其实非常频繁，当浏览器被",e.exports.jsx(s.strong,{children:"缩放"}),"（resize）时也会发生。"]}),`
`,e.exports.jsx(s.p,{children:"每当渲染树被修改，比如添加节点、修改内容或者更新元素盒模型的样式等等，都将发生布局。"}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.strong,{children:"布局（Layout）和重排（Reflow）"})}),`
`,e.exports.jsxs(s.p,{children:["熟稔八股文的你一定注意到了，上面布局的描述与面试官心心念念的“重排与重绘”中的",e.exports.jsx(s.strong,{children:"重排"}),"（Reflow）有亿点点雷同。"]}),`
`,e.exports.jsxs(s.p,{children:["其实，布局和重排基本上就是一个东西，只不过重排（",e.exports.jsx(s.strong,{children:"Re"}),"flow）在名称上强调它是由于外界因素引起的",e.exports.jsx(s.strong,{children:"重新布局"}),"，即重排建立在第一次布局之上。"]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"paint",children:"Paint"}),`
`,e.exports.jsxs(s.p,{children:["渲染的最后一步即是将像素",e.exports.jsx(s.strong,{children:"绘制"}),"（Paint）到屏幕上，在绘制完成后，当渲染树更新时，浏览器会对需要",e.exports.jsx(s.strong,{children:"重绘"}),"（Repaint）的区域做",e.exports.jsx(s.strong,{children:"优化"}),"，确保只进行",e.exports.jsx(s.strong,{children:"最少所需"}),"的重绘，其耗时取决于渲染树具体发生了怎样的更新。"]}),`
`,e.exports.jsxs(s.p,{children:["由于重绘本身是",e.exports.jsx(s.strong,{children:"很快"}),"的，所以通常它不会是 Web 应用的",e.exports.jsx(s.strong,{children:"性能瓶颈"}),"，对这一步能做的优化比较有限。"]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.strong,{children:"绘制（Paint）与重绘（Repaint）"})}),`
`,e.exports.jsxs(s.p,{children:["不同于布局和重排，绘制与重绘通过名称在它们的",e.exports.jsx(s.strong,{children:"同一性"}),"上带给我们多得多的提示。"]}),`
`,e.exports.jsx(s.p,{children:"所以 Paint 专指第一次绘制，Repaint 专指后续渲染树更新触发的再绘制。我们大概可以这样理解和区分。"}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"scripts-js-和-style-sheets-css--的加载",children:"scripts (JS) 和 style sheets (CSS)  的加载"}),`
`,e.exports.jsx(s.h4,{id:"scripts",children:"Scripts"}),`
`,e.exports.jsxs(s.p,{children:["当遇到",e.exports.jsx(s.code,{children:"<script>"}),"标签时，浏览器对 HTML 的解析会立即",e.exports.jsx(s.strong,{children:"停止"}),"，直到 script 被",e.exports.jsx(s.strong,{children:"加载"}),"完毕，如果 script 是通过",e.exports.jsx(s.code,{children:"src"}),"引入的外部资源，那么浏览器请求该资源的过程也是",e.exports.jsx(s.strong,{children:"阻塞"})," HTML 解析的。"]}),`
`,e.exports.jsxs(s.p,{children:["不过，上面的情况适用的是一个 Plain ",e.exports.jsx(s.code,{children:"<script>"}),"标签，而",e.exports.jsx(s.code,{children:"<script>"})," 有以下两种特殊 attr："]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"defer"}),"：立即开始",e.exports.jsx(s.strong,{children:"下载"}),"脚本，而且这个请求是",e.exports.jsx(s.strong,{children:"并行"}),"的（注意：如果",e.exports.jsx(s.code,{children:"<script>"}),"不是通过",e.exports.jsx(s.code,{children:"src"}),"引入内容的话，",e.exports.jsx(s.code,{children:"defer"}),"不会生效），但在 DOM 解析完毕后（在",e.exports.jsx(s.code,{children:"DOMContentLoaded"}),"之前）执行。"]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"async"}),"：HTML5 规范推出的属性，立即",e.exports.jsx(s.strong,{children:"下载"}),"（",e.exports.jsx(s.strong,{children:"并行"}),"地请求），但在下载",e.exports.jsx(s.strong,{children:"完毕"}),"后就",e.exports.jsx(s.strong,{children:"立即执行"}),"。注意，虽然下载是并行的，但其执行还是",e.exports.jsx(s.strong,{children:"阻塞"})," HTML 解析的。"]}),`
`,e.exports.jsx(s.h4,{id:"style-sheets-css",children:"Style sheets (CSS)"}),`
`,e.exports.jsxs(s.p,{children:["概念上，CSS ",e.exports.jsx(s.strong,{children:"不会改变 DOM 树"}),"，好像没有必要暂停 HTML 解析等待样式表加载完毕。"]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:["那么，问题来了，CSS 的",e.exports.jsx(s.strong,{children:"伪元素"}),"（pseudo-element）会不会改变 DOM 结构？毕竟它们是那么神奇，在需求不复杂的情况下，完全可以实现一些“以假乱真”的 DOM 效果。"]}),`
`,e.exports.jsxs(s.p,{children:["不过，答案好像是 ",e.exports.jsx(s.strong,{children:"No"}),"。"]}),`
`,e.exports.jsxs("figure",{children:[e.exports.jsxs("picture",{children:[e.exports.jsx("source",{type:"image/avif",srcSet:"/images/critical-rendering-path/css-mutate-dom.avif"}),e.exports.jsx("source",{type:"image/webp",srcSet:"/images/critical-rendering-path/css-mutate-dom.webp"}),e.exports.jsx("img",{width:"1073",height:"679",alt:"css-does-not-mutate-dom",src:"/images/critical-rendering-path/css-mutate-dom.jpg","aria-hidden":"true",className:"invertable"})]}),e.exports.jsx("figcaption",{children:"CSS 不能修改 DOM"})]}),`
`,e.exports.jsxs(s.p,{children:["查询之后，可以知道用 JS 获取伪元素的方法是",e.exports.jsx(s.code,{children:"window.getComputedStyle()"}),"，所以伪元素本身依旧是纯 CSS 规则，而不是 DOM。"]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"但是"}),"，有些情况下，",e.exports.jsx(s.strong,{children:"scripts"})," 可能在 HTML 解析途中需要",e.exports.jsx(s.strong,{children:"样式信息"}),"，这时，如果样式表还没有被加载完毕，那么脚本就可能获得",e.exports.jsx(s.strong,{children:"错误"}),"的信息。"]}),`
`,e.exports.jsxs(s.p,{children:["因此，对 CSS 文件的",e.exports.jsx(s.strong,{children:"请求"}),"和",e.exports.jsx(s.strong,{children:"解析"}),"通常都是",e.exports.jsx(s.strong,{children:"阻塞"}),"渲染的，而且最重要的是，不完整的 CSSOM 会",e.exports.jsx(s.strong,{children:"阻塞 script 元素"}),"的加载。"]})]})}function h(r={}){return e.exports.jsx(t,Object.assign({},r,{children:e.exports.jsx(n,r)}))}export{x as date,h as default,i as description,p as duration,l as lang,d as path,c as title};
