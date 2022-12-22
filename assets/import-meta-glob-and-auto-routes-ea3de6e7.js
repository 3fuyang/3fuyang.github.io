import{j as e}from"./jsx-runtime-f0839969.js";const i="借助 import.meta.glob 编写自动路由脚本",n="2022-10-07T16:20:00.000+00:00",x="zh",l="3min",c="/blog/import-meta-glob-and-auto-routes";function t(r){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",p:"p",h2:"h2",strong:"strong",code:"code",ul:"ul"},r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#借助-importmetaglob-编写自动路由脚本",children:"借助 import.meta.glob 编写自动路由脚本"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#背景",children:"背景"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#将数组转为树",children:"将数组转为树"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#打包体积对比",children:"打包体积对比"})})]})]})})}),`
`,e.exports.jsx(s.h1,{id:"借助-importmetaglob-编写自动路由脚本",children:"借助 import.meta.glob 编写自动路由脚本"}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:["脚本源码：",e.exports.jsx(s.a,{href:"https://github.com/3fuyang/3fuyang.github.io/blob/master/src/routes/auto-routes.ts",children:"auto-routes.ts"})]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"背景",children:"背景"}),`
`,e.exports.jsxs(s.p,{children:["自动路由，也就是自动读取",e.exports.jsx(s.strong,{children:"指定目录"}),"下的文件，为它们生成",e.exports.jsx(s.strong,{children:"指定环境"}),"下的路由对象的功能。"]}),`
`,e.exports.jsxs(s.p,{children:["Flog（即这个网站）一开始是借助 ",e.exports.jsx(s.a,{href:"https://github.com/hannoeru/vite-plugin-pages",children:"vite-plugin-pages"})," 这样一个",e.exports.jsx(s.strong,{children:"集成"}),`插件来实现自动路由的。
为了写 `,e.exports.jsx(s.a,{href:"https://3fuyang.github.io/blog/ssg-in-flog#%E8%87%AA%E5%8A%A8%E8%B7%AF%E7%94%B1",children:"Flog 与 SSG"})," 这篇博客，我去查阅了一些 SSG 框架的文档，其中在 ",e.exports.jsx(s.a,{href:"https://vitepress.vuejs.org/",children:"VitePress"}),`
的官方文档中得知其自动路由是`,e.exports.jsx(s.strong,{children:"仅通过一个脚本"}),"实现的。"]}),`
`,e.exports.jsxs("figure",{children:[e.exports.jsxs("picture",{children:[e.exports.jsx("source",{type:"image/avif",srcSet:"/images/import-meta-glob-and-auto-routes/flog-and-ssg.avif"}),e.exports.jsx("source",{type:"image/webp",srcSet:"/images/import-meta-glob-and-auto-routes/flog-and-ssg.webp"}),e.exports.jsx("img",{width:"947",height:"256",alt:"routing-strategy-in-vitepress",src:"/images/import-meta-glob-and-auto-routes/flog-and-ssg.jpg",className:"invertable"})]}),e.exports.jsx("figcaption",{children:"VitePress 的路由方案"})]}),`
`,e.exports.jsxs(s.p,{children:["当然，VitePress 想强调的是它",e.exports.jsx(s.strong,{children:"没有使用"})," Vue Router 这样集成的依赖，而是通过",e.exports.jsx(s.strong,{children:"原生"}),"的 history 对象或其他 API 实现了更为",e.exports.jsx(s.strong,{children:"轻量级"}),`的路由。
但我从这里受到的启发是，我也可以编写一个脚本，在不使用`,e.exports.jsx(s.code,{children:"vite-plugin-pages"}),"这样的集成插件的前提下，去自动地生成路由。"]}),`
`,e.exports.jsxs(s.p,{children:["项目中，这个脚本的基本",e.exports.jsx(s.strong,{children:"需求"}),"是："]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["读取",e.exports.jsx(s.code,{children:"pages"}),"目录下的所有",e.exports.jsx(s.code,{children:".mdx"}),"和",e.exports.jsx(s.code,{children:".tsx"}),"文件。"]}),`
`,e.exports.jsx(s.li,{children:"从文件对象中取得文件路径和其导出的 React 组件。"}),`
`,e.exports.jsxs(s.li,{children:["根据目录",e.exports.jsx(s.strong,{children:"路径"}),"和组件对象，将它们转换成一个可以由",e.exports.jsx(s.code,{children:"useRoute()"}),"调用的路由对象数组（Array<RouteObject>）。"]}),`
`]}),`
`,e.exports.jsx(s.p,{children:"这个脚本主要由两个功能构成："}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"读取指定目录文件"}),"：Vite 为资源加载提供了 ",e.exports.jsx(s.a,{href:"https://vitejs.dev/guide/features.html#glob-import",children:"import.meta.glob"})," API，只需为其提供目标文件的",e.exports.jsx(s.code,{children:"glob pattern"}),`,
它就能读取符合条件的文件，如果目标是 JS 文件，更能将其作为 ES Module 解析获取其`,e.exports.jsx(s.code,{children:"export"}),"。"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"从文件到路由"}),"：",e.exports.jsx(s.code,{children:"import.meta.glob"}),"所返回的文件结构是",e.exports.jsx(s.strong,{children:"扁平"}),"（flat）的，我们需要将其转化成 RouteObject 这样的",e.exports.jsx(s.strong,{children:"树形结构"}),"（",e.exports.jsx(s.code,{children:"children?: RouteObject[]"}),"）。"]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["第一点通过",e.exports.jsx(s.code,{children:"import.meta.glob"}),"可以很轻松地解决，那么主要的难点好像就成了一道算法题，如何将",e.exports.jsx(s.strong,{children:"数组转化为树"}),"？"]}),`
`,e.exports.jsx(s.h2,{id:"将数组转为树",children:"将数组转为树"}),`
`,e.exports.jsxs(s.p,{children:["用外部变量",e.exports.jsx(s.code,{children:"result: RouteObject[]"}),"存储最终结果，算法主要用到栈的思想，大致思路如下："]}),`
`,e.exports.jsx("br",{}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["根据文件路径",e.exports.jsx(s.code,{children:"path"}),"，将组件数组（",e.exports.jsx(s.code,{children:"{ element: FC, path: string}[]"}),"）",e.exports.jsx(s.strong,{children:"排序"}),"（",e.exports.jsx(s.code,{children:"import.meta.glob"}),"返回的结果已是有序）；"]}),`
`,e.exports.jsxs(s.li,{children:["在循环外，使用一个外部",e.exports.jsx(s.strong,{children:"栈型"}),"变量",e.exports.jsx(s.code,{children:"currDirs"}),"记录上一个已处理组件的",e.exports.jsx(s.strong,{children:"父路由"}),"（即包含",e.exports.jsx(s.code,{children:"children"}),"属性的路由）；"]}),`
`,e.exports.jsxs(s.li,{children:["遍历文件数组：",`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["对每一个文件，用其",e.exports.jsx(s.code,{children:"path"}),"从前往后匹配",e.exports.jsx(s.code,{children:"currDirs"}),"，记录最大匹配索引：",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"匹配成功：不作特殊处理;"}),`
`,e.exports.jsxs(s.li,{children:["部分匹配或匹配失败：将",e.exports.jsx(s.code,{children:"currDirs"}),"栈顶层匹配失败的路由对象出栈，如果",e.exports.jsx(s.code,{children:"currDirs"}),"被",e.exports.jsx(s.strong,{children:"清空"}),"，将其",e.exports.jsx(s.strong,{children:"栈底"}),"元素推入",e.exports.jsx(s.code,{children:"result"}),"中。"]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["根据该文件的",e.exports.jsx(s.code,{children:"path"}),"继续（重新）构建",e.exports.jsx(s.code,{children:"currDirs"}),";"]}),`
`,e.exports.jsxs(s.li,{children:["为文件生成",e.exports.jsx(s.code,{children:"RouteObject"}),"，推入栈顶父路由的",e.exports.jsx(s.code,{children:"children"}),"中。"]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"打包体积对比",children:"打包体积对比"}),`
`,e.exports.jsx(s.p,{children:"Before:"}),`
`,e.exports.jsxs("figure",{children:[e.exports.jsxs("picture",{children:[e.exports.jsx("source",{type:"image/avif",srcSet:"/images/ssg-in-flog/vite-universal-plugins.avif"}),e.exports.jsx("source",{type:"image/webp",srcSet:"/images/import-meta-glob-and-auto-routes/before.webp"}),e.exports.jsx("img",{width:"358",height:"119",alt:"before-65-189-785-bytes",src:"/images/import-meta-glob-and-auto-routes/before.jpg",className:"invertable"})]}),e.exports.jsx("figcaption",{children:"Before"})]}),`
`,e.exports.jsx(s.p,{children:"After:"}),`
`,e.exports.jsxs("figure",{children:[e.exports.jsxs("picture",{children:[e.exports.jsx("source",{type:"image/avif",srcSet:"/images/import-meta-glob-and-auto-routes/after.avif"}),e.exports.jsx("source",{type:"image/webp",srcSet:"/images/import-meta-glob-and-auto-routes/after.webp"}),e.exports.jsx("img",{width:"358",height:"119",alt:"after-65-123-330-bytes",src:"/images/import-meta-glob-and-auto-routes/after.jpg",className:"invertable"})]}),e.exports.jsx("figcaption",{children:"After"})]}),`
`,e.exports.jsxs(s.p,{children:["可以看到，移除",e.exports.jsx(s.code,{children:"vite-plugin-pages"}),"后，应用的打包体积优化了整整...",e.exports.jsx(s.strong,{children:"64 KB"}),"！"]})]})}function p(r={}){const{wrapper:s}=r.components||{};return s?e.exports.jsx(s,Object.assign({},r,{children:e.exports.jsx(t,r)})):t(r)}export{n as date,p as default,l as duration,x as lang,c as path,i as title};
