import{j as s}from"./jsx-runtime-f0839969.js";const t="Flog 与 SSG",o="2022-08-19T18:07:00.000+00:00",c="zh",i="10min",x="/blog/ssg-in-flog";function n(r){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",strong:"strong",code:"code",ul:"ul",h2:"h2",h3:"h3",blockquote:"blockquote",pre:"pre",span:"span"},r.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsxs(e.li,{className:"toc-item toc-item-h1",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#flog-与-ssg",children:"Flog 与 SSG"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-2",children:[s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#框架视点下-ssg-的基本要素",children:"框架视点下, SSG 的基本要素"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#markdown-处理",children:"markdown 处理"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#自动路由",children:"自动路由"})})]})]}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#mdx-与-vite-plugin-pages-的加载顺序",children:"MDX 与 vite-plugin-pages 的加载顺序"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#结论",children:"结论"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#vite-specific-hooks",children:"Vite specific hooks"})})]})]})]})]})})}),`
`,s.exports.jsx(e.h1,{id:"flog-与-ssg",children:"Flog 与 SSG"}),`
`,s.exports.jsxs(e.p,{children:["个人博客, 和官方文档一样, 是 ",s.exports.jsx(e.strong,{children:"SSG(Static Site Generator)"})," 的典型用例。"]}),`
`,s.exports.jsxs(e.p,{children:["但写这个博客时没有用 ",s.exports.jsx(e.a,{href:"https://vitepress.vuejs.org/",children:"Vitepress"})," 、 ",s.exports.jsx(e.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),` 等 SSG 框架,
一方面是为了练习写 React, 另一方面是对 SSG 比较感兴趣, 想对其有更多的了解。`]}),`
`,s.exports.jsxs(e.p,{children:["但这个博客也不是手搓",s.exports.jsx(e.code,{children:"markdown-it"}),"那种硬核、或者说深入的项目, 而是简单的对一些提供 SSG 关键功能的插件的集成而已。"]}),`
`,s.exports.jsx(e.p,{children:"在具体陈述之前, 先列举一下项目中用到的两个关键插件："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"vite-plugin-pages"})," - 自动生成路由；"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"@mdx-js/rollup"})," - 负责处理(解析、渲染) markdown 文件。"]}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"框架视点下-ssg-的基本要素",children:"框架视点下, SSG 的基本要素"}),`
`,s.exports.jsx(e.p,{children:"这里的框架指的是 bundler(webpack, rollup ...) 以及业务框架(Vue, React ...), 它们已经解决了项目构建与用户交互的需求。"}),`
`,s.exports.jsxs(e.p,{children:["在它们的基础上, 我认为一个 SSG 应用还应具备的基本要素是：",s.exports.jsx(e.strong,{children:"markdown 处理(markdown processing)"})," 和 ",s.exports.jsx(e.strong,{children:"自动路由(auto routes generation)"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["在写到“基本要素”时, 我想到 ",s.exports.jsx(e.strong,{children:"basic features"})," 和 ",s.exports.jsx(e.strong,{children:"minimum requirements"}),` 两种描述, 我认为其中 minimum requirements 更为合适,
或者抛除中文原意, 用 `,s.exports.jsx(e.strong,{children:"additional requirements"})," 来表示框架的在场。"]}),`
`,s.exports.jsx(e.p,{children:`这两个特性结合就能形成一个典型的用例: 在一个指定的目录下, 解析所有 markdown 文件并渲染为 DOM(或 VNode 等过渡形式),
并自动为这些元素生成供框架使用的路由。`}),`
`,s.exports.jsx(e.p,{children:"听上去就和各种 SSG 框架 playground 中最简单的例子大差不差了, 本文的探讨大概也就到兹范围。"}),`
`,s.exports.jsx(e.h3,{id:"markdown-处理",children:"markdown 处理"}),`
`,s.exports.jsxs(e.p,{children:["不一定是 markdown, 只要有办法",s.exports.jsx(e.strong,{children:"处理"}),", 你可以用任何语言编写博客的文章, 但 markdown 无疑是最为流行的一员, 它得到了绝大多数生态(来自官方或社区)的支持。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"处理"}),"可以分为",s.exports.jsx(e.strong,{children:"解析"}),"和",s.exports.jsx(e.strong,{children:"渲染"}),"两步："]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"解析"})," - 根据原始文本生成 AST。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"渲染"})," - 根据 AST 生成 HTML 或过渡产物。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["鉴于 React 的使用需求, 博客选择 ",s.exports.jsx(e.a,{href:"https://mdxjs.com/",children:"MDX"})," 作为 markdown 文件的处理引擎。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:"当然, 除了 React 外, MDX 也可以用于其他任何支持 JSX 的框架。"}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["MDX 依赖 ",s.exports.jsx(e.a,{href:"https://github.com/remarkjs/remark",children:"remark"})," 和 ",s.exports.jsx(e.a,{href:"https://github.com/rehypejs/rehype",children:"rehype"})," 来转译 markdown："]}),`
`,s.exports.jsx(e.p,{children:"remark 负责生成 AST , MDX 依据 AST 生成原始的 HTML 文本, 再交由 rehype 解析成目标产物(在该项目中, 即 React Components)。"}),`
`,s.exports.jsx(e.p,{children:`有趣的是, React Component(或者其他框架的 VDOM) 虽然可以视作 HTML(framework output) 的一种过渡性产物, 但其实在 MDX 处理周期中,
它是先由 HTML(mdx output) 转化成的, 用“同态”来形容或许更为恰当。`}),`
`,s.exports.jsxs(e.p,{children:["虽然",s.exports.jsx(e.code,{children:".mdx"}),"文件支持 inline react, 这使得",s.exports.jsx(e.code,{children:".mdx"}),"的编写有莫大的潜能, 但博客文章基本上就是用 ",s.exports.jsx(e.a,{href:"https://commonmark.org/",children:"CommonMark"}),` 写的,
所以我选择用各种 MDX plugins 对转译结果进行预处理, 这种`,s.exports.jsx(e.strong,{children:"静态"}),"的方式也符合 SSG 的理念。"]}),`
`,s.exports.jsx(e.p,{children:"下面列举了该项目使用到的 MDX 插件："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"remark-gfm - 支持 GFM(Github Flavored Markdown)。"}),`
`,s.exports.jsxs(e.li,{children:["remark-mdx-frontmatter & remark-frontmatter - 解析文本的",s.exports.jsx(e.code,{children:"frontmatter"}),", 并将其以 ESM 的风格导出。"]}),`
`,s.exports.jsxs(e.li,{children:["remark-a11y-emoji - 为 emoji 添加",s.exports.jsx(e.code,{children:"aria-"}),"属性, 使其成为 accessible emoji。"]}),`
`,s.exports.jsxs(e.li,{children:["rehype-highlight - 以",s.exports.jsx(e.code,{children:"highlight.js"}),"的风格, 为 HTML 中各元素添加",s.exports.jsx(e.code,{children:"class"}),"名, 然后便可引入自定义的",s.exports.jsx(e.code,{children:".css"}),` stylize 自己的博客文章,
其中当然包括代码的`,s.exports.jsx(e.strong,{children:"语法高亮"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:["rehype-slug - 为 title 元素添加",s.exports.jsx(e.code,{children:"id"}),"属性。"]}),`
`,s.exports.jsx(e.li,{children:"rehype-toc - 为文本生成 TOC(Table of Content)。"}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["前缀代表插件 hook 进了哪个阶段, 可以看出, ",s.exports.jsx(e.code,{children:"remark"}),"插件多负责 AST 相关的工作, 而",s.exports.jsx(e.code,{children:"rehype"}),`中可对 HTML 进行处理, 这种处理较于字符串式,
更可能是 DOM 式的。`]}),`
`,s.exports.jsx(e.h3,{id:"自动路由",children:"自动路由"}),`
`,s.exports.jsx(e.p,{children:"SSG 自动路由的思路很简单, 就是用脚本在编译时读取某些目录下的文件(读取哪些目录、哪些文件完全自定义化), 然后生成对应路由即可。"}),`
`,s.exports.jsxs(e.p,{children:["这个需求在 Vite 中，可以用",s.exports.jsx(e.code,{children:"import.meta.glob"}),"较为容易地实现。"]}),`
`,s.exports.jsxs(e.p,{children:["这可能也是为什么 Vitepress 的路由生成都不使用 ",s.exports.jsx(e.a,{href:"https://router.vuejs.org/",children:"Vue Router"}),`,
而是另写一个　LOC < 200　的脚本。`]}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/ssg-in-flog/vitepress-router.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/ssg-in-flog/vitepress-router.webp"}),s.exports.jsx("img",{width:"947",height:"256",alt:"vitepress-router",src:"/images/ssg-in-flog/vitepress-router.jpg","aria-hidden":"true",className:"invertable"})]}),s.exports.jsx("figcaption",{children:"VitePress 的路由方案"})]}),`
`,s.exports.jsx(e.p,{children:"这对 React 来说应该更为简单, 因为 React Router 的实现比 Vue Router 更为简洁, 虽然这也意味着开发者需要自己做更多的 dirty work。"}),`
`,s.exports.jsxs(e.p,{children:["本项目使用 ",s.exports.jsx(e.a,{href:"https://github.com/hannoeru/vite-plugin-pages",children:"vite-plugin-pages"})," 读取",s.exports.jsx(e.code,{children:"/pages"}),"目录下所有后缀名为",s.exports.jsx(e.code,{children:".tsx"}),"或",s.exports.jsx(e.code,{children:".mdx"}),`的文件,
该插件本身就支持生成 React Router 式的路由。`]}),`
`,s.exports.jsxs(e.p,{children:["项目对",s.exports.jsx(e.code,{children:"vite-plugin-pages"}),"生成的路由集进行一定的处理, 包括用",s.exports.jsx(e.code,{children:'<article class="prose" />'}),"包装文章 JSX, 作为 ",s.exports.jsx(e.strong,{children:"landmark"})," 且方便",s.exports.jsx(e.strong,{children:"引入样式"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["但这个包装是有条件的, 因为生成的路由集很可能是一个",s.exports.jsx(e.strong,{children:"嵌套路由"}),", 需要通过",s.exports.jsx(e.code,{children:"RouteObject"}),"实例的",s.exports.jsx(e.code,{children:"children"}),"和",s.exports.jsx(e.code,{children:"element"}),"属性进行区分, 可以使用递归实现。"]}),`
`,s.exports.jsxs(e.p,{children:["这里插一个与上一节有关的话题, SSG 一个重要的功能点是 ",s.exports.jsx(e.strong,{children:"页面标题随路由改变"}),", 但由于",s.exports.jsx(e.code,{children:"vite-plugin-pages"}),`不提供相关 hook,
我们不能直接在插件的`,s.exports.jsx(e.code,{children:"config options"}),`中为路由对应的组件添加监听器,
所以要用到 markdown 的 frontmatter 在编译时获取文章的元信息(meta info, 包括标题、路由、时间等任何信息),
然后将插件返回的路由包装进带有事件监听器的 HOC, 即上面提到的`,s.exports.jsx(e.code,{children:'<article class="prose" ... />'}),"中。"]}),`
`,s.exports.jsx(e.p,{children:"markdown 的 frontmatter 是一个很强力的特性, 它传递的 meta 信息在项目中也用于博客目录的渲染, 项目中与 frontmatter 相关的功能都写成了 React hooks。"}),`
`,s.exports.jsx(e.h2,{id:"mdx-与-vite-plugin-pages-的加载顺序",children:"MDX 与 vite-plugin-pages 的加载顺序"}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:"本节内容与 SSG 无关, 而是关于 Vite 插件的加载"}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["React 环境下的",s.exports.jsx(e.code,{children:"vite-plugin-pages"}),"将生成 React Router 式的 routes, 那么其扫描的文件应该",s.exports.jsx(e.strong,{children:"已经"}),"是",s.exports.jsx(e.code,{children:"js"}),", ",s.exports.jsx(e.code,{children:"ts"}),", ",s.exports.jsx(e.code,{children:"tsx"}),`代码,
那么在此之前`,s.exports.jsx(e.code,{children:".mdx"}),"应该已经被",s.exports.jsx(e.code,{children:"@mdx-js/rollup"}),"转译成",s.exports.jsx(e.code,{children:"js"}),"代码。"]}),`
`,s.exports.jsxs(e.p,{children:["直观上, 在 Vite Config 的",s.exports.jsx(e.code,{children:"plugins"}),"中",s.exports.jsx(e.code,{children:"@mdx-js/rollup"}),"应该先于",s.exports.jsx(e.code,{children:"vite-plugin-pages"}),", 但实践证明两个插件的顺序并",s.exports.jsx(e.strong,{children:"不影响最终效果"}),"。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:["这里不考虑",s.exports.jsx(e.code,{children:"vite-plugin-pages"}),"具备先生成某种路由雏形(其路由不包含具体元素, 可能是树形或某种可被解析为树形的形式), 等待",s.exports.jsx(e.code,{children:".mdx"}),"文件被转译后再生成路由的",s.exports.jsx(e.strong,{children:"异步"}),"特性, 因为考虑到各种转译插件不一定都是纯净(pure)的, 这会使得插件的设计变得非常耦合。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["显然, 这两个插件作用于整个应用 build 过程中的",s.exports.jsx(e.strong,{children:"不同阶段"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"@mdx-js/rollup"}),"定义的 plugin 使用到 build hooks 中的",s.exports.jsx(e.code,{children:"transform"}),", 它用于",s.exports.jsx(e.strong,{children:"转换"}),"独立的模块(即某种语言编写的文件), 可返回标准 AST。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// @mdx-js\\rollup\\lib\\index.js"}),`

{
  `,s.exports.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'@mdx-js/rollup'"}),`,
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"transform"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"value, path"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," file = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"VFile"}),`({value, path})

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"}),` (
      file.`,s.exports.jsx(e.span,{className:"hljs-property",children:"extname"}),` &&
      `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"filter"}),"(file.",s.exports.jsx(e.span,{className:"hljs-property",children:"path"}),`) &&
      extnames.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"includes"}),"(file.",s.exports.jsx(e.span,{className:"hljs-property",children:"extname"}),`)
    ) {
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," compiled = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"await"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"process"}),`(file)
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," {",s.exports.jsx(e.span,{className:"hljs-attr",children:"code"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"String"}),"(compiled.",s.exports.jsx(e.span,{className:"hljs-property",children:"value"}),"), ",s.exports.jsx(e.span,{className:"hljs-attr",children:"map"}),": compiled.",s.exports.jsx(e.span,{className:"hljs-property",children:"map"}),`}
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// V8 on Erbium."}),`
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"/* c8 ignore next 2 */"}),`
    }
  }
}

`]})}),`
`,s.exports.jsxs(e.p,{children:["而",s.exports.jsx(e.code,{children:"vite-plugin-pages"}),"使用到的 hooks 包括来自 rollup 的",s.exports.jsx(e.code,{children:"resolveId"}),"、",s.exports.jsx(e.code,{children:"load"}),`, 以及 vite
独有的`,s.exports.jsx(e.code,{children:"configResolved"}),"、",s.exports.jsx(e.code,{children:"configureServer"}),", 同时通过",s.exports.jsx(e.code,{children:'enforce: "pre"'}),"指定插件在 vite core plugins ",s.exports.jsx(e.strong,{children:"之前"}),"运行。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// vite-plugin-pages\\dist\\index.js"}),`

{
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:'"vite-plugin-pages"'}),`,
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"enforce"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:'"pre"'}),", ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// runs before vite core plugins"}),`
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"configResolved"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"config"}),`) {
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
    },
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"api"}),`: {
      `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"getResolvedRoutes"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ctx.",s.exports.jsx(e.span,{className:"hljs-property",children:"options"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"resolver"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"getComputedRoutes"}),`(ctx)
      }
    },
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"configureServer"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"server"}),`) {
      ctx.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"setupViteServer"}),`(server)
    },
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"resolveId"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"id"}),`) {
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
    },
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"load"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"id"}),`) {
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` {
        moduleId,
        pageId
      } = `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"parsePageRequest"}),`(id)
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (moduleId === ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"MODULE_ID_VIRTUAL"}),`
        && pageId
        && ctx.`,s.exports.jsx(e.span,{className:"hljs-property",children:"options"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"moduleIds"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"includes"}),`(pageId))
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ctx.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"resolveRoutes"}),`();
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (id === ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"ROUTE_BLOCK_ID_VIRTUAL"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` {
          `,s.exports.jsx(e.span,{className:"hljs-attr",children:"code"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:'"export default {};"'}),`,
          `,s.exports.jsx(e.span,{className:"hljs-attr",children:"map"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"null"}),`
        }
      }
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"null"}),`
    }
  }

`]})}),`
`,s.exports.jsxs(e.p,{children:["我们主要考察 Rollup build hooks, Vite 官方文档显示：",s.exports.jsx(e.code,{children:"vite-plugin-pages"}),"的",s.exports.jsx(e.code,{children:"resolveId"}),"和",s.exports.jsx(e.code,{children:"load"}),"会在",s.exports.jsx(e.code,{children:"@mdx-js/rollup"}),"的",s.exports.jsx(e.code,{children:"transform"}),`之前执行,
且它们将在`,s.exports.jsx(e.strong,{children:"每次请求模块"}),"时被调用。"]}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/ssg-in-flog/vite-universal-plugins.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/ssg-in-flog/vite-universal-plugins.webp"}),s.exports.jsx("img",{width:"718",height:"185",alt:"vite-universal-plugins",src:"/images/ssg-in-flog/vite-universal-plugins.jpg",className:"invertable"})]}),s.exports.jsx("figcaption",{children:"Vite 中 universal plugins 的执行顺序"})]}),`
`,s.exports.jsxs(e.p,{children:['这不符合我们 "先解析',s.exports.jsx(e.code,{children:".mdx"}),'文件，再生成 React 路由" 的直观想法，']}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/ssg-in-flog/rollup-plugin-hooks.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/ssg-in-flog/rollup-plugin-hooks.webp"}),s.exports.jsx("img",{width:"739",height:"802",alt:"rollup-plugin-hooks",src:"/images/ssg-in-flog/rollup-plugin-hooks.jpg",className:"invertable"})]}),s.exports.jsx("figcaption",{children:"Rollup 的插件 hooks 执行流程图"})]}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/ssg-in-flog/figure-label.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/ssg-in-flog/figure-label.webp"}),s.exports.jsx("img",{width:"380",height:"95",alt:"figure-label",src:"/images/ssg-in-flog/figure-label.jpg",className:"invertable"})]}),s.exports.jsx("figcaption",{children:"Rollup 插件 hooks 类型"})]}),`
`,s.exports.jsxs(e.p,{children:["上图中，Rollup 的官方文档指出 build hooks 有多种类型，其不同之处主要体现在",s.exports.jsx(e.strong,{children:"异步、调度"}),"上："]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"resolveId"}),"和",s.exports.jsx(e.code,{children:"load"}),"都是",s.exports.jsx(e.code,{children:"first"}),`类型的 hook, 若有多个插件实现了它们, 那这些 hooks 将依次执行,
直到某一 hook 返回`,s.exports.jsx(e.strong,{children:"非"}),s.exports.jsx(e.code,{children:"undefined"}),"或",s.exports.jsx(e.code,{children:"null"}),"值。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"transform"}),"则是",s.exports.jsx(e.code,{children:"sequential"}),"类型的 hook, 若有多个插件实现这一 hook, 它们将依次",s.exports.jsx(e.strong,{children:"阻塞、串行"}),"地执行。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"first"}),"类型的 hooks 是非阻塞式的，所以",s.exports.jsx(e.code,{children:"load"}),"遇到",s.exports.jsx(e.code,{children:"await"}),"这样的异步操作时，就会正常跳出当前执行的 hook。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"vite-plugin-pages"}),"生成的路由需要通过",s.exports.jsx(e.code,{children:"import routes from '~react-pages'"}),`的方式引入,
对该模块的请求`,s.exports.jsx(e.strong,{children:"启动"}),`了自动路由的生成，在指定目录的路由完全生成后,
再将形式如下的代码(client)以字符串的形式传递给`,s.exports.jsx(e.code,{children:"transform"}),"："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"React"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"'react'"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," __pages_import_0__ ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"'/pages/index.mdx'"}),`

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," __pages_import_1__ = ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"React"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"lazy"}),"(",s.exports.jsx(e.span,{className:"hljs-function",children:"() =>"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'/pages/blog/index.tsx'"}),`))
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," __pages_import_2__ = ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"React"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"lazy"}),"(",s.exports.jsx(e.span,{className:"hljs-function",children:"() =>"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'/pages/blog/ssg-in-flog.mdx'"}),`)


`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` routes = [
  {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"caseSensitive"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"path"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'/'"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"element"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"React"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"createElement"}),`(__pages_import_0__)
  },
  {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"caseSensitive"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"path"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'blog'"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"children"}),`: [
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// __page_import_1&2__"}),`
    ]
  }
]

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"}),` routes

`]})}),`
`,s.exports.jsxs(e.p,{children:["该代码引入了路由对应的模块，Vite 继续请求自动路由涉及的文件，而其中的",s.exports.jsx(e.code,{children:".mdx"}),"文件就将在各自的",s.exports.jsx(e.code,{children:"transform"}),"阶段得到转换。"]}),`
`,s.exports.jsx(e.h3,{id:"结论",children:"结论"}),`
`,s.exports.jsxs(e.p,{children:["没错，我是半途才发现这与两个插件的 ",s.exports.jsx(e.strong,{children:"hook 类型根本没啥关系"}),"，单纯是 Vite 构建项目依赖的机制而已..."]}),`
`,s.exports.jsxs(e.p,{children:["但是细想也对，现代的打包工具都以 ",s.exports.jsx(e.strong,{children:"tree-shaking"}),` 为特征，对特定模块的处理都必须建立在"它会被打包"这一基础上,
这样，也与一开始就被否决的"路由雏形"猜测相映了，它正是"依赖解析"这一更为底层的机制的显现，或者说,
路由雏形是不完整的、`,s.exports.jsx(e.strong,{children:"退化"}),"的依赖解析而已。"]}),`
`,s.exports.jsx(e.h3,{id:"vite-specific-hooks",children:"Vite specific hooks"}),`
`,s.exports.jsxs(e.p,{children:["下面简单介绍",s.exports.jsx(e.code,{children:"vite-plugin-pages"}),"中两个 Vite 独有 hooks："]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"configResolved"}),"在 Vite 配置解析完毕后执行, 用于读取和存储配置的解析结果, 在插件中它根据 Vite 应用的环境(React, Solid ...)做出不同的反应。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"configureServer"}),"用于配置 ",s.exports.jsx(e.strong,{children:"dev server"}),", 它最常见的用例是为 server 添加",s.exports.jsx(e.strong,{children:"自定义的中间件"}),", 在该插件中, 主要用于设置 ",s.exports.jsx(e.strong,{children:"HMR"}),"。"]}),`
`]})]})}function p(r={}){const{wrapper:e}=r.components||{};return e?s.exports.jsx(e,Object.assign({},r,{children:s.exports.jsx(n,r)})):n(r)}export{o as date,p as default,i as duration,c as lang,x as path,t as title};
