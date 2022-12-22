import{j as s}from"./jsx-runtime-f0839969.js";const l="Webpack 4 迁移 RFC",x="2022-12-09T19:00:00.000+00:00",c="zh",o="10min",i="/blog/webpack4-migration-rfc";function n(r){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",ul:"ul",h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",h3:"h3",blockquote:"blockquote",h4:"h4",pre:"pre",span:"span",h5:"h5"},r.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsxs(e.li,{className:"toc-item toc-item-h1",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#webpack-4-迁移-rfc",children:"Webpack 4 迁移 RFC"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-2",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#summary",children:"Summary"})}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#motivation",children:"Motivation"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#构建和-hmr-效率低下",children:"构建和 HMR 效率低下"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#工具链生态过旧",children:"工具链生态过旧"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#从-vue2x-到-vue27",children:"从 vue2.x 到 vue2.7"})})]})]}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#detailed-design",children:"Detailed design"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsxs(e.li,{className:"toc-item toc-item-h3",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#构建工具升级",children:"构建工具升级"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-4",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#更新webpack核心依赖",children:"更新webpack核心依赖"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#更新原有webpack工具链",children:"更新原有webpack工具链"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#配置文件重构",children:"配置文件重构"})})]})]}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h3",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#构建效率优化",children:"构建效率优化"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-4",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#使用esbuild代替babel",children:"使用esbuild代替babel"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#寻址优化",children:"寻址优化"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#生产构建关闭-eslint",children:"生产构建关闭 ESLint"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#生产模式不生成-sourcemap",children:"生产模式不生成 SourceMap"})}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h4",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#webpack-4版本特定的一些优化",children:"webpack 4版本特定的一些优化"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-5",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h5",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h5",href:"#垃圾回收-gc",children:"垃圾回收 (GC)"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h5",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h5",href:"#关闭开发模式下的一些默认优化",children:"关闭开发模式下的一些默认优化"})})]})]}),s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#文件级缓存",children:"文件级缓存"})})]})]}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#迁移到-vue-27",children:"迁移到 Vue 2.7"})}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h3",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#bug-fixing",children:"Bug Fixing"}),s.exports.jsx(e.ol,{className:"toc-level toc-level-4",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#js-base64幽灵依赖问题",children:"js-base64幽灵依赖问题"})})})]})]})]}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#benchmarking",children:"Benchmarking"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#methodology",children:"Methodology"})}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h3",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#comparison",children:"Comparison"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-4",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#dev",children:"Dev"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#prod",children:"Prod"})})]})]})]})]}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#miscellaneous",children:"Miscellaneous"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsxs(e.li,{className:"toc-item toc-item-h3",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#构建产物优化",children:"构建产物优化"}),s.exports.jsx(e.ol,{className:"toc-level toc-level-4",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#分离webpack运行时",children:"分离webpack运行时"})})})]}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h3",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#bundle-splitting",children:"Bundle Splitting"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-4",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#vendor-separating",children:"Vendor separating"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h4",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h4",href:"#css-extraction",children:"CSS extraction"})})]})]}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#关于-eslint-的配置",children:"关于 ESLint 的配置"})})]})]}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#alternatives",children:"Alternatives"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#缓存",children:"缓存"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#多线程",children:"多线程"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#outputfutureemitassets",children:"output.futureEmitAssets"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#node-polyfills",children:"Node polyfills"})})]})]}),s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#drawbacks",children:"Drawbacks"})}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#adoption-strategy",children:"Adoption strategy"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#关于测试",children:"关于测试"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#合并流程",children:"合并流程"})})]})]})]})]})})}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"Start Date: 2022-12-05"}),`
`,s.exports.jsx(e.li,{children:"Target Major Version: v2"}),`
`,s.exports.jsx(e.li,{children:"Reference Issues: none"}),`
`,s.exports.jsx(e.li,{children:"Implemention PR:"}),`
`]}),`
`,s.exports.jsx(e.h1,{id:"webpack-4-迁移-rfc",children:"Webpack 4 迁移 RFC"}),`
`,s.exports.jsx(e.h2,{id:"summary",children:"Summary"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsxs(e.p,{children:["将项目的构建工具从",s.exports.jsx(e.code,{children:"webpack 3"}),"迁移至",s.exports.jsx(e.code,{children:"webpack 4"}),"，并将各相关 webpack 插件升级到",s.exports.jsx(e.code,{children:"webpack 4"}),"兼容版本。"]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsxs(e.p,{children:["优化构建效率，包括用",s.exports.jsx(e.code,{children:"esbuild"}),"代替",s.exports.jsx(e.code,{children:"babel"}),"、修改",s.exports.jsx(e.code,{children:"webpack"}),"配置、引入插件等，将项目开发环境冷启动时间和生产打包时间缩短约 50%。"]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsxs(e.p,{children:["尝试将 Vue 2 迁移到",s.exports.jsx(e.code,{children:"vue^2.7.x"}),"稳定版本。"]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["由于迁移 Vue 并非构建效率或者基础架构上的优化，所以分支上",s.exports.jsx(e.strong,{children:"未提交"}),"相关改动"]}),`
`]}),`
`]}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"motivation",children:"Motivation"}),`
`,s.exports.jsx(e.h3,{id:"构建和-hmr-效率低下",children:"构建和 HMR 效率低下"}),`
`,s.exports.jsx(e.p,{children:"除大页面外，v2 承担了桌面端的绝大部分业务，已经具有相当的复杂度，且随着业务全量迁移到 v2，项目的体积和复杂度会不断增长。"}),`
`,s.exports.jsxs(e.p,{children:["项目庞大的体量导致，在开发阶段",s.exports.jsx(e.code,{children:"npm run dev"}),"进行的冷启动时间，以及生产构建",s.exports.jsx(e.code,{children:"npm run build"}),"进行的项目打包耗时都会越来越长。"]}),`
`,s.exports.jsxs(e.p,{children:["除冷启动速率外，在",s.exports.jsx(e.code,{children:"webpack 3"}),"下，项目 HMR (Hot Module Replacement，模块热替换) 的",s.exports.jsx(e.strong,{children:"准确率"}),"也不尽人意，体现在对某些更改不能准确保留状态，而触发",s.exports.jsx(e.strong,{children:"不必要"}),"的 live reload。且由于 webpack 在每次 HMR 时都会重新构建整个项目，原本缓慢的构建时间也会拖慢 HMR 的效率。"]}),`
`,s.exports.jsx(e.h3,{id:"工具链生态过旧",children:"工具链生态过旧"}),`
`,s.exports.jsxs(e.p,{children:["v2 使用发布于五年前的",s.exports.jsx(e.code,{children:"webpack@3.6.0"}),"进行构建，部分依赖现已不再有人维护，且",s.exports.jsx(e.code,{children:"vue 2.x"}),"在 2023 年年底也将",s.exports.jsx(e.a,{href:"https://blog.vuejs.org/posts/vue-2-7-naruto.html#implications-of-the-2-7-release",children:"停止维护"}),"。应用层框架（",s.exports.jsx(e.code,{children:"vue"}),"、",s.exports.jsx(e.code,{children:"react"}),"）往往依赖于",s.exports.jsx(e.code,{children:"babel"}),"、",s.exports.jsx(e.code,{children:"postcss"}),"等编译时工具，而这些工具在实践中又以",s.exports.jsx(e.code,{children:"loader"}),"、",s.exports.jsx(e.code,{children:"plugins"}),"等形式集成于",s.exports.jsx(e.code,{children:"webpack"}),"，因此，未来若要将框架升级，则应",s.exports.jsx(e.strong,{children:"提早"}),"完成对",s.exports.jsx(e.code,{children:"webpack"}),"及底层生态的升级。"]}),`
`,s.exports.jsxs(e.p,{children:["另外，v2 项目通过 Vue CLI 生成，其配置自带许多",s.exports.jsx(e.strong,{children:"当时通用"}),"的 boilerplate，但有些地方已经不是当前的",s.exports.jsx(e.strong,{children:"最佳实践"}),"（如将所有样式打包成一个",s.exports.jsx(e.code,{children:".css"}),"文件会影响首屏性能等）。在迁移时，通过审阅原有的配置文件，也可优化不合理、移除不必要的部分。"]}),`
`,s.exports.jsx(e.h3,{id:"从-vue2x-到-vue27",children:"从 vue2.x 到 vue2.7"}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"vue2.7"}),"是 Vue 团队为了将 Vue 3 的特性",s.exports.jsx(e.strong,{children:"向后兼容"}),"，于 2022 年 7 月",s.exports.jsx(e.a,{href:"https://blog.vuejs.org/posts/vue-2-7-naruto.html",children:"发布"}),"的 Vue 2 最终版本，提供了 Vue 3 最核心的 ",s.exports.jsx(e.strong,{children:"Composition API"})," 特性与更好的",s.exports.jsx(e.strong,{children:"类型系统"}),"。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs("details",{children:[s.exports.jsxs("summary",{children:["兼容 Composition API 和",s.exports.jsx("code",{children:"<script setup>"}),"语法糖的意义"]}),s.exports.jsxs("ul",{children:[s.exports.jsxs("li",{children:["更好的代码",s.exports.jsx("strong",{children:"组织"}),"，将实现一个业务功能的代码组织在一起，而不是分散到",s.exports.jsx("code",{children:"data()"}),"、",s.exports.jsx("code",{children:"computed"}),"、",s.exports.jsx("code",{children:"methods"}),"等多个选项中；"]}),`
`,s.exports.jsxs("li",{children:["更好的",s.exports.jsx("strong",{children:"逻辑复用"}),"，Composition API 引入的",s.exports.jsx("code",{children:"composables"}),"提供了比",s.exports.jsx("code",{children:"mixin"}),"更好的逻辑复用范式；"]}),`
`,s.exports.jsxs("li",{children:["更好的类型提示，由于 Composition API 使用",s.exports.jsx("strong",{children:"函数"}),"组织组件，相比以往基于 Class 的方式，类型推断更加准确"]}),`
`,s.exports.jsxs("li",{children:["缩小打包体积，",s.exports.jsx("code",{children:"<script setup>"}),"被编译为函数，可直接通过作用域访问到渲染上下文，相比于原来通过实例化代理对象的访问更快，且一致的变量名更利于压缩。"]})]})]}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"detailed-design",children:"Detailed design"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"node.js"}),"版本：",s.exports.jsx(e.code,{children:"^14.20.0"})]}),`
`,s.exports.jsxs(e.li,{children:["由于更新了部分依赖，需先使用",s.exports.jsx(e.code,{children:"npm ci"}),"安装依赖"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"构建工具升级",children:"构建工具升级"}),`
`,s.exports.jsxs(e.h4,{id:"更新webpack核心依赖",children:["更新",s.exports.jsx(e.code,{children:"webpack"}),"核心依赖"]}),`
`,s.exports.jsxs(e.p,{children:["选用发布于两年前的",s.exports.jsx(e.code,{children:"webpack@4.46.0"}),"作为目标版本。",s.exports.jsx(e.code,{children:"v4.46.0"}),"是",s.exports.jsx(e.code,{children:"webpack 4"}),"的稳定版本，能较好适配各种为",s.exports.jsx(e.code,{children:"webpack 4"}),"设计的插件，且由于在",s.exports.jsx(e.code,{children:"4.x"}),"中版本较新，能为未来迁移到",s.exports.jsx(e.code,{children:"webpack 5"}),"提供便利。"]}),`
`,s.exports.jsxs(e.p,{children:["对照发布时间，分别安装和升级 CLI 与 DevServer 依赖到",s.exports.jsx(e.code,{children:"webpack-cli@4.10.0"}),"、",s.exports.jsx(e.code,{children:"webpack-dev-server@4.11.1"}),"。"]}),`
`,s.exports.jsxs(e.h4,{id:"更新原有webpack工具链",children:["更新原有",s.exports.jsx(e.code,{children:"webpack"}),"工具链"]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["Loader:",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"babel-loader"}),"：",s.exports.jsx(e.code,{children:"^7.1.1"})," ==> ",s.exports.jsx(e.code,{children:"^8.3.0"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["用",s.exports.jsx(e.code,{children:"esbuild"}),"替代",s.exports.jsx(e.code,{children:"babel"}),"在",s.exports.jsx(e.strong,{children:"浏览器兼容"}),"上的作用，详情见构建效率优化一节。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"css-loader"}),"：",s.exports.jsx(e.code,{children:"^0.28.0"})," ==> ",s.exports.jsx(e.code,{children:"^5.2.7"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"eslint-loader"}),"：移除。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["在",s.exports.jsx(e.code,{children:"webpack 4"}),"中被废弃，用",s.exports.jsx(e.code,{children:"eslint-webpack-plugin"}),"代替。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"file-loader"}),"：",s.exports.jsx(e.code,{children:"^1.1.4"})," ==> ",s.exports.jsx(e.code,{children:"^6.2.0"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"postcss-loader"}),"：",s.exports.jsx(e.code,{children:"^2.0.8"})," ==> ",s.exports.jsx(e.code,{children:"^4.3.0"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"url-loader"}),"：",s.exports.jsx(e.code,{children:"^4.0.8"})," ==> ",s.exports.jsx(e.code,{children:"^4.1.1"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"vue-loader"}),"：",s.exports.jsx(e.code,{children:"^13.2.0"})," ==> ",s.exports.jsx(e.code,{children:"^15.10.1"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"vue-loader 15.x"}),"是",s.exports.jsx(e.code,{children:"vue-loader"}),"目前的最高版本，可为将",s.exports.jsx(e.code,{children:"vue 2.x"}),"升级到稳定版本",s.exports.jsx(e.code,{children:"2.7"}),"做铺垫。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"vue-style-loader"}),"：",s.exports.jsx(e.code,{children:"^3.0.1"})," ==> ",s.exports.jsx(e.code,{children:"^4.1.3"})]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:["Plugins：",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"copy-webpack-plugin"}),"：",s.exports.jsx(e.code,{children:"^4.0.1"})," ==> ",s.exports.jsx(e.code,{children:"^6.4.0"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"eslint-webpack-plugin"}),"：新增",s.exports.jsx(e.code,{children:"^2.7.0"}),"。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["用于代替",s.exports.jsx(e.code,{children:"eslint-loader"}),"。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"extract-text-webpack-plugin"}),"：移除。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["在",s.exports.jsx(e.code,{children:"webpack 4"}),"中被废弃，改用",s.exports.jsx(e.code,{children:"mini-css-extract-plugin"}),"。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"friendly-errors-webpack-plugin"}),"：",s.exports.jsx(e.code,{children:"^1.6.1"})," ==> ",s.exports.jsx(e.code,{children:"^1.7.0"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"html-webpack-plugin"}),"：",s.exports.jsx(e.code,{children:"^2.30.1"})," ==> ",s.exports.jsx(e.code,{children:"^4.5.2"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"mini-css-extract-plugin"}),"：新增",s.exports.jsx(e.code,{children:"^1.6.2"}),"。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["用于替代",s.exports.jsx(e.code,{children:"extract-text-webpack-plugin"}),"。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"optimize-css-assets-webpack-plugin"}),"：移除。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["改用",s.exports.jsx(e.code,{children:"esbuild"}),"压缩 css，以获取更快的速度。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"speed-measure-webpack-plugin"}),"：新增",s.exports.jsx(e.code,{children:"^1.5.0"}),"。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["用于检视各构建流程用时，在",s.exports.jsx(e.strong,{children:"迁移完成后可移除"}),"。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"uglifyjs-webpack-plugin"}),"：移除。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["在",s.exports.jsx(e.code,{children:"webpack 4"}),"中被废弃，",s.exports.jsx(e.code,{children:"webpack 4"}),"默认使用",s.exports.jsx(e.code,{children:"terser"}),"压缩 JS，但这里改用更快的",s.exports.jsx(e.code,{children:"esbuild"}),"压缩。"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:["Deps:",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"@babel/core"}),"：新增",s.exports.jsx(e.code,{children:"^7.20.5"}),"。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"babel-loader"}),"要求。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"@babel/preset-env"}),"：新增",s.exports.jsx(e.code,{children:"^7.20.2"}),"。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["生产模式下，对",s.exports.jsx(e.code,{children:"jsx"}),"模块进行兼容性处理。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"@vue/babel-helper-vue-jsx-merge-props"}),"：新增",s.exports.jsx(e.code,{children:"^1.4.0"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"@vue/babel-preset-jsx"}),"：新增",s.exports.jsx(e.code,{children:"^1.4.0"}),"。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["以上两个依赖，用于配合",s.exports.jsx(e.code,{children:"babel"}),"为",s.exports.jsx(e.code,{children:"element-ui"}),"（以及修改后的",s.exports.jsx(e.code,{children:"el-"}),"组件）提供",s.exports.jsx(e.code,{children:"jsx"}),"转译。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"autoprefixer"}),"：",s.exports.jsx(e.code,{children:"^7.1.2"})," ==> ",s.exports.jsx(e.code,{children:"^9.4.7"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"babel-core"}),"：移除",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["在",s.exports.jsx(e.code,{children:"babel 7.x"}),"后替换为",s.exports.jsx(e.code,{children:"@babel/core"})]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"babel-eslint"}),"：移除",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"以上两个依赖不再需要。"}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"babel-helper-vue-jsx-merge-props"}),"：移除"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"babel-plugin-syntax-jsx"}),"：移除"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"babel-plugin-transform-runtime"}),"：移除"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"babel-plugin-transform-vue-jsx"}),"：移除",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["以上与",s.exports.jsx(e.code,{children:"jsx"}),"相关依赖包含于",s.exports.jsx(e.code,{children:"@vue/babel-preset-jsx"}),"中。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"babel-preset-env"}),"：移除"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"babel-preset-stage-2"}),"：移除",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["较新版本的",s.exports.jsx(e.code,{children:"babel"}),"改用",s.exports.jsx(e.code,{children:"@babel/preset-env"}),"进行兼容。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"node-notifier"}),"：",s.exports.jsx(e.code,{children:"^5.1.2"})," ==> ",s.exports.jsx(e.code,{children:"^8.0.2"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"eslint-plugin-html"}),"：移除。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"eslint-plugin-import"}),"：移除。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"eslint-plugin-node"}),"：移除。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"eslint-plugin-promise"}),"：移除。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"eslint-plugin-standard"}),"：移除。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"以上 ESLint Plugins 均未在项目中使用到。"}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"eslint-plugin-vue"}),"：",s.exports.jsx(e.code,{children:"^5.2.2"})," ==> ",s.exports.jsx(e.code,{children:"^9.7.0"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"postcss"}),"：新增",s.exports.jsx(e.code,{children:"^8.4.5"}),"。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"postcss-loader"}),"要求。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"postcss-import"}),"：",s.exports.jsx(e.code,{children:"^11.0.0"})," ==> ",s.exports.jsx(e.code,{children:"^14.0.2"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"postcss-url"}),"：",s.exports.jsx(e.code,{children:"^7.2.1"})," ==> ",s.exports.jsx(e.code,{children:"^10.1.3"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"portfinder"}),"：",s.exports.jsx(e.code,{children:"^1.0.13"})," ==> ",s.exports.jsx(e.code,{children:"^1.0.28"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"vue-template-compiler"}),"：",s.exports.jsx(e.code,{children:"^2.5.2"})," ==> ",s.exports.jsx(e.code,{children:"^2.7.10"})]}),`
`]}),`
`]}),`
`]}),`
`,s.exports.jsx(e.h4,{id:"配置文件重构",children:"配置文件重构"}),`
`,s.exports.jsxs(e.p,{children:["原本的",s.exports.jsx(e.code,{children:"webpack"}),"配置文件（",s.exports.jsx(e.code,{children:"/build/"}),"）通过",s.exports.jsx(e.code,{children:"webpack-merge"}),"实现一种",s.exports.jsx(e.code,{children:"inheritance"}),"（继承）式的配置复用策略，直观呈现为通用（common）、开发（dev）和生产（prod）三个庞大的对象字面量（plain object）。由于",s.exports.jsx(e.code,{children:"WebpackConfig"}),"的配置项繁杂，这种结构的可读性较差。"]}),`
`,s.exports.jsxs(e.p,{children:["新的架构在",s.exports.jsx(e.code,{children:"inheritance"}),"的基础上，借鉴 ",s.exports.jsx(e.a,{href:"https://survivejs.com/webpack/developing/composing-configuration/",children:"SurviveJS"})," 所提倡的 Config 组织方案，将配置分解为更小的单元，其粒度为配置中启用一个特定功能所对应的部分，如",s.exports.jsx(e.code,{children:"loader"}),"、",s.exports.jsx(e.code,{children:"devServer"}),"等。"]}),`
`,s.exports.jsxs(e.p,{children:["并且，Node.js 逐渐支持 ",s.exports.jsx(e.strong,{children:"ES Module"})," 模块系统，而 ESM 作为一种静态模块系统能提供比 CJS 更好的类型推断能力。虽然 v2 项目本身不使用 TypeScript，但若使用的第三方库编写了类型声明，可以配合 IDE 提供类型提示，故改用 ESM 编写了配置文件。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsx(e.code,{className:"hljs language-markdown",children:`v2 (before)
├─ build
│  ├─ ...
│  ├─ webpack.base.conf.js  // 通用
│  ├─ webpack.dev.conf.js  // 开发
│  └─ webpack.prod.conf.js  // 生产

v2 (after)
├─ build
│  ├─ ...
│  ├─ webpack.common.mjs  // 通用
│  ├─ webpack.dev.mjs  // 开发
│  └─ webpack.prod.mjs  // 生产
`})}),`
`,s.exports.jsx(e.h3,{id:"构建效率优化",children:"构建效率优化"}),`
`,s.exports.jsxs(e.h4,{id:"使用esbuild代替babel",children:["使用",s.exports.jsx(e.code,{children:"esbuild"}),"代替",s.exports.jsx(e.code,{children:"babel"})]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"esbuild"}),"是基于 Go 的新一代 JavaScript 转译器，相比用 JS 编写的",s.exports.jsx(e.code,{children:"babel"}),"，具有性能上的天然优势。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs("details",{children:[s.exports.jsxs("summary",{children:[s.exports.jsx("code",{children:"esbuild"}),"为什么比其他 bundler 快？"]}),s.exports.jsxs("ul",{children:[s.exports.jsx("li",{children:"用 Go 编写，并编译成了原生代码"}),s.exports.jsx("ul",{children:s.exports.jsxs("li",{children:["常见的 bundler 用 JS 编写，而对于即时编译（JIT-compiled）语言来说，命令行应用（command-line application）是其性能最差的场景。每次运行 bundler 时，JavaScript VM（V8）需要在没有任何优化提示的情况下先",s.exports.jsx("strong",{children:"编译"})," bundler 的 JS 源码。而 esbuild 的原生代码产物可以直接运行（即开始打包）。"]})}),s.exports.jsx("li",{children:"大量使用并发"}),s.exports.jsx("ul",{children:s.exports.jsxs("li",{children:["另外，Go 是以",s.exports.jsx("strong",{children:"并发"}),"为核心设计的，它具有",s.exports.jsx("strong",{children:"共享内存"}),"的 IPC 方式。Go 和 JavaScript 都有",s.exports.jsx("strong",{children:"并行的垃圾回收器"}),"，但是 Go 的",s.exports.jsx("strong",{children:"堆"}),"是线程间共享的，而每个 JavaScript 线程有一个单独的堆，这使得 JavaScript 的可行并行量减少了",s.exports.jsx("strong",{children:"一半"}),"，因为一半 的 CPU 核在为另一半收集垃圾。"]})}),s.exports.jsx("li",{children:"esbuild 是从头开始编写的（from scratch）"}),s.exports.jsxs("ul",{children:[s.exports.jsxs("li",{children:["esbuild 是以",s.exports.jsx("strong",{children:"性能"}),"为第一需求而从头编写的，相比于使用第三方库，从头编写可以保证所有地方使用的",s.exports.jsx("strong",{children:"数据结构一致"}),"，避免了昂贵的数据结构转换。"]}),`
`,s.exports.jsx("li",{children:"以 TypeScript 为例，许多 bundler 会使用官方的 tsc 进行转译，但官方的编译器不是以性能为第一追求的，其内部大量使用了 megamorphic object shapes 和不必要的动态属性访问（dynamic property access），大大拖慢 JS 执行速度。"})]}),s.exports.jsx("li",{children:"对内存的高效使用"}),s.exports.jsxs("ul",{children:[s.exports.jsxs("li",{children:["esbuild 只操作 JavaScript AST ",s.exports.jsx("strong",{children:"三次"}),"："]}),s.exports.jsxs("ul",{children:[s.exports.jsx("li",{children:"词法分析（lexing）、解析、建立作用域和声明标识符；"}),`
`,s.exports.jsx("li",{children:"绑定标识符、JSX/TS => JS、ESNEXT => ES2015;"}),`
`,s.exports.jsx("li",{children:"最小化（minification）、代码生成、source map 生成。"})]}),s.exports.jsxs("li",{children:["这样的设计可以最大程度地",s.exports.jsx("strong",{children:"重复利用"})," AST 数据，因为数据依然活跃在 CPU 缓存（cache）中。"]}),`
`,s.exports.jsxs("li",{children:["而其他 bundler 会串行、而不是交织执行以上任务，且过程中 AST 可能会多次被转换成其他形式：",s.exports.jsx("code",{children:"string -> TS -> JS -> string"}),"、",s.exports.jsx("code",{children:"string -> JS -> older JS -> string"}),"、",s.exports.jsx("code",{children:"string -> JS -> minified JS -> string"}),"。这会占用更多内存并降低处理速度。"]})]})]})]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["考虑到 v2 项目本身的适配对象是基于 Chromium 的 Chrome、Edge 等现代浏览器，契合",s.exports.jsx(e.code,{children:"esbuild"}),"本身支持的最低编译目标",s.exports.jsx(e.code,{children:"es2015"}),"，因此改用",s.exports.jsx(e.code,{children:"esbuild"}),"转译 JS ",s.exports.jsx(e.strong,{children:"可行"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["在代替",s.exports.jsx(e.code,{children:"babel"}),"时，将原来的",s.exports.jsx(e.code,{children:"babel-loader"}),"及其相关依赖（",s.exports.jsx(e.code,{children:"presets"}),"、",s.exports.jsx(e.code,{children:"plugins"}),"）全部移除，并配置",s.exports.jsx(e.code,{children:"esbuild-loader"}),"如下："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// build\\webpack.common.js"}),`
{
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"loader"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'esbuild-loader'"}),`,
	`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"options"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"target"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'es2015'"}),", ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// esbuild 的最低编译目标为 es2015"}),`
	}
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["在转译之外，使用",s.exports.jsx(e.code,{children:"esbuild"}),"对 js、css 进行",s.exports.jsx(e.strong,{children:"压缩"}),"，可以获得比",s.exports.jsx(e.code,{children:"terser"}),"、",s.exports.jsx(e.code,{children:"cssnano"}),"等传统压缩库更快的速度。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// build\\webpack.prod.js"}),`
{
	`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"optimization"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"minimizer"}),`: [
			`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"ESBuildMinifyPlugin"}),`({
				`,s.exports.jsx(e.span,{className:"hljs-attr",children:"target"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'es2015'"}),`,
				`,s.exports.jsx(e.span,{className:"hljs-attr",children:"css"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"})," ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// 压缩 css"}),`
			})
		]
	}
}
`]})}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"注意"}),"："]}),`
`,s.exports.jsxs(e.p,{children:["由于",s.exports.jsx(e.code,{children:"element-ui"}),"对",s.exports.jsx(e.code,{children:"babel"}),"的",s.exports.jsx(e.strong,{children:"硬性依赖"}),"，",s.exports.jsx(e.code,{children:"esbuild"}),"无法正确处理其",s.exports.jsx(e.code,{children:"jsx"}),"语法的转译，所以项目中涉及到",s.exports.jsx(e.code,{children:"element-ui"}),"的模块（包括",s.exports.jsx(e.code,{children:"components/modify-component/"}),"等目录下，修改过的",s.exports.jsx(e.code,{children:"el-xxx"}),"组件），",s.exports.jsx(e.strong,{children:"仍需"}),"使用",s.exports.jsx(e.code,{children:"babel"}),"进行转译和兼容。"]}),`
`]}),`
`,s.exports.jsx(e.h4,{id:"寻址优化",children:"寻址优化"}),`
`,s.exports.jsxs(e.p,{children:["寻址优化是",s.exports.jsx(e.code,{children:"webpack"}),"的传统优化手段之一，即通过合理设置 loader 的",s.exports.jsx(e.code,{children:"exclude"}),"和",s.exports.jsx(e.code,{children:"include"}),"属性，",s.exports.jsx(e.strong,{children:"只对必要的模块执行解析"}),"，减少构建的任务量。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"开发模式"}),"下，由于开发者自己使用较新的浏览器版本，不需要对",s.exports.jsx(e.code,{children:"es6+"}),"的语法进行兼容，仅转译浏览器原生不支持的",s.exports.jsx(e.code,{children:"jsx"}),"语法即可。配置",s.exports.jsx(e.code,{children:"babel-loader"}),"，只处理包含",s.exports.jsx(e.code,{children:"jsx"}),"语法的模块，其他原生 JS 文件和",s.exports.jsx(e.code,{children:".vue"}),"文件生成的 JS 模块则不经过 loader。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// build\\webpack.dev.js"}),`
{
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"test"}),": ",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/.m?jsx?$/"}),`,
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"loader"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'babel-loader'"}),`,
	`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 开发模式下, 只需转译使用了 JSX 的模块"}),`
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"include"}),`: [
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 所有使用了 JSX 语法的模块"}),`
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// module1"}),`
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// module2"}),`
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	],
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"options"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"presets"}),`: [
			`,s.exports.jsx(e.span,{className:"hljs-string",children:"'@vue/babel-preset-jsx'"}),`
		]
	}
}
`]})}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"生产模式"}),"下，为了兼容性，应针对所有使用了浏览器原生不支持的语法（如",s.exports.jsx(e.code,{children:"jsx"}),"）和",s.exports.jsx(e.strong,{children:"高于"}),s.exports.jsx(e.code,{children:"es2015"}),"版本语法的 JS 模块进行转译。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// build\\webpack.prod.js"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"configureBabelLoader"})," = (",s.exports.jsx(e.span,{className:"hljs-params"}),`) => ({
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"test"}),": ",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/.m?jsx?$/"}),`,
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"loader"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'babel-loader'"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// babel 用于处理 element-ui 相关组件"}),`
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"include"}),`: [
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 所有使用了 JSX 语法的模块"}),`
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// module1"}),`
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// module2"}),`
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	],
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"options"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"presets"}),`: [
			`,s.exports.jsx(e.span,{className:"hljs-string",children:"'@vue/babel-preset-jsx'"}),`,
			[
				`,s.exports.jsx(e.span,{className:"hljs-string",children:"'@babel/preset-env'"}),`,
				{
					`,s.exports.jsx(e.span,{className:"hljs-attr",children:"targets"}),`: {
						`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Chorme 58 和 Edge 14 分别是其完全支持 es2015 的最早版本"}),`
						`,s.exports.jsx(e.span,{className:"hljs-string",children:"'chrome'"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'58'"}),`,
						`,s.exports.jsx(e.span,{className:"hljs-string",children:"'edge'"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'14'"}),`
					}
				}
			]
		]
	}
})

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"configureESBuildLoader"})," = (",s.exports.jsx(e.span,{className:"hljs-params"}),`) => ({
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"test"}),": ",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/\\.m?js$/"}),`,
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"loader"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'esbuild-loader'"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// esbuild 用于处理 element-ui 以外的所有 JS 模块"}),`
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"include"}),`: [
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 所有未使用 JSX 语法的 JS 模块"}),`
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// module1"}),`
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// module2"}),`
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	],
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"exclude"}),`: [
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 排除使用了 JSX 语法的模块"}),`
	],
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"options"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 生产模式下, 需要兼容到 es2015 语法"}),`
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"target"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'es2015'"}),`
	}
})
`]})}),`
`,s.exports.jsx(e.h4,{id:"生产构建关闭-eslint",children:"生产构建关闭 ESLint"}),`
`,s.exports.jsxs(e.p,{children:["在构建时，",s.exports.jsx(e.code,{children:"eslint"}),"提供的代码静态检查会占据不少时间，而这些提示信息在",s.exports.jsx(e.strong,{children:"生产构建阶段"}),"价值不大。因此在生产构建时，移除",s.exports.jsx(e.code,{children:"eslint"}),"。"]}),`
`,s.exports.jsx(e.h4,{id:"生产模式不生成-sourcemap",children:"生产模式不生成 SourceMap"}),`
`,s.exports.jsxs(e.p,{children:["SourceMap 是结合浏览器 DevTool 将打包产物映射回源码的工具文件，在构建时生成和输出 SourceMap 会耗费",s.exports.jsx(e.strong,{children:"大量时间"}),"，且产物占据",s.exports.jsx(e.strong,{children:"大量内存"}),"，考虑到项目没有",s.exports.jsx(e.strong,{children:"远程调试"}),"的需求，应当可以移除 SourceMap。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:["\\build\\webpack.",s.exports.jsx(e.span,{className:"hljs-property",children:"prod"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"js"}),`

{
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"devtool"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"})," ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// 关闭 SourceMap"}),`
	`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["另外，",s.exports.jsx(e.code,{children:"vite"}),"在生产构建",s.exports.jsx(e.a,{href:"https://vitejs.dev/config/build-options.html#build-sourcemap",children:"默认"}),"不生成 SourceMap，也可作为本项改动的理论支撑之一。"]}),`
`,s.exports.jsxs(e.h4,{id:"webpack-4版本特定的一些优化",children:[s.exports.jsx(e.code,{children:"webpack 4"}),"版本特定的一些优化"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:"Reference"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.a,{href:"https://survivejs.com/webpack/optimizing/performance/#webpack-4-performance-tricks",children:"Performance#webpack-4-performance-tricks"})}),`
`]}),`
`]}),`
`,s.exports.jsx(e.h5,{id:"垃圾回收-gc",children:"垃圾回收 (GC)"}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:"Reference"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.a,{href:"https://medium.com/@kenneth_chau/speeding-up-webpack-typescript-incremental-builds-by-7x-3912ba4c1d15#0e6c",children:"Speeding Up Webpack, Typescript Incremental Builds by 7x | Enemy #3: Garbage Collection"})}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"webpack 4"}),"使用",s.exports.jsx(e.strong,{children:"全局"}),"的",s.exports.jsx(e.code,{children:"string.replace(/.../g, '...')"}),"来生成控制台信息，这会导致",s.exports.jsx(e.strong,{children:"大量"}),"的垃圾回收。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:["虽然 V8 的垃圾回收进程是",s.exports.jsx(e.strong,{children:"并行"}),"的，但其采用",s.exports.jsx(e.strong,{children:"管线化"}),"的 IPC 方式，所以 GC 仍会带来较大的",s.exports.jsx(e.strong,{children:"进程间通信开销"}),"。"]}),`
`]}),`
`,s.exports.jsx(e.p,{children:"开发模式下，关闭控制台输出模块路径信息的功能："}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// build\\webpack.dev.js"}),`
{
	`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"output"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"pathinfo"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"})," ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// Tell webpack not to include comments in bundles with information about the contained modules. "}),`
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	}
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["而",s.exports.jsx(e.code,{children:"webpack"}),"在生产模式下默认不展示",s.exports.jsx(e.code,{children:"pathinfo"}),"，不需要另外配置。"]}),`
`,s.exports.jsx(e.h5,{id:"关闭开发模式下的一些默认优化",children:"关闭开发模式下的一些默认优化"}),`
`,s.exports.jsxs(e.p,{children:["将",s.exports.jsx(e.code,{children:"optimization"}),"及其",s.exports.jsx(e.code,{children:"splitChunks"}),"、",s.exports.jsx(e.code,{children:"removeEmptyChunks"}),"设置为",s.exports.jsx(e.code,{children:"false"}),"可提升",s.exports.jsx(e.code,{children:"webpack 4"}),s.exports.jsx(e.strong,{children:"开发"}),"环境下的性能。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// build\\webpack.dev.js"}),`
{
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"optimization"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"splitChunks"}),`: {
			`,s.exports.jsx(e.span,{className:"hljs-attr",children:"cacheGroups"}),`: {
				`,s.exports.jsx(e.span,{className:"hljs-attr",children:"default"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`
			}
		},
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"removeEmptyChunks"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`   
	}
}
`]})}),`
`,s.exports.jsx(e.h4,{id:"文件级缓存",children:"文件级缓存"}),`
`,s.exports.jsxs(e.p,{children:["使用",s.exports.jsx(e.code,{children:"hard-source-webpack-plugin"}),"，为模块提供中间缓存（于磁盘中），应用后会使",s.exports.jsx(e.strong,{children:"第一次构建速度变慢"}),"（因为要生成磁盘文件和",s.exports.jsx(e.code,{children:"hash"}),"），而后续构建速度会",s.exports.jsx(e.strong,{children:"大大提升"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["对于迁移后的 v2，首次构建会生成大约 250 MB 的缓存文件，但后续构建速度",s.exports.jsx(e.strong,{children:"提升非常夸张"}),"。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"注意"}),`：
`,s.exports.jsx(e.code,{children:"hard-source-webpack-plugin"}),"与",s.exports.jsx(e.code,{children:"speed-measure-webpack-plugin"}),"不兼容，故目前为了测量构建速度，未开启",s.exports.jsx(e.code,{children:"hard-source-webpack-plugin"}),"。"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"迁移到-vue-27",children:"迁移到 Vue 2.7"}),`
`,s.exports.jsx(e.p,{children:"更新依赖："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"vue"}),"：",s.exports.jsx(e.code,{children:"^2.5.3"})," ==> ",s.exports.jsx(e.code,{children:"^2.7.14"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"vue-template-compiler"}),"：移除。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"vue 2.7"}),"已不需要该依赖。"]}),`
`]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["迁移后，经测试可使用 Vue 2.x 版本的 Composition API 和",s.exports.jsx(e.code,{children:"<script setup>"}),"语法。"]}),`
`,s.exports.jsxs(e.p,{children:["由于项目对",s.exports.jsx(e.code,{children:"element-ui"}),"的一些组件进行了重写，而",s.exports.jsx(e.code,{children:"element-ui"}),"的源码后续更新时",s.exports.jsx(e.strong,{children:"变动较大"}),"，所以不能直接将",s.exports.jsx(e.code,{children:"element-ui"}),"也升级到最新版本。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"注意"}),"："]}),`
`,s.exports.jsxs(e.p,{children:["因与迁移",s.exports.jsx(e.code,{children:"webpack"}),"的工程化意义不同，迁移",s.exports.jsx(e.code,{children:"vue"}),"属于更偏应用层的更新，可在团队对业务代码层有",s.exports.jsx(e.strong,{children:"额外的明确需求"}),"时再进行，如："]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"为了更好的代码组织、逻辑复用或向 Vue 3 过渡，从 Options API 迁移到 Composition API；"}),`
`,s.exports.jsx(e.li,{children:"为提高项目的可维护性，加入 TypeScript；"}),`
`,s.exports.jsx(e.li,{children:"..."}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["但如果实际迁移到 Vue 2.7，应该也能稍微提升构建效率，因为不再需要配置",s.exports.jsx(e.code,{children:"webpack"}),"为 Node.js 注入 polyfill。"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"bug-fixing",children:"Bug Fixing"}),`
`,s.exports.jsxs(e.h4,{id:"js-base64幽灵依赖问题",children:[s.exports.jsx(e.code,{children:"js-base64"}),"幽灵依赖问题"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.a,{href:"https://rushjs.io/pages/advanced/phantom_deps/",children:"幽灵依赖"}),"（Phantom Dependencies）是指由于",s.exports.jsx(e.code,{children:"node_modules"}),"扁平的文件结构设计，在",s.exports.jsx(e.code,{children:"package.json"}),"中",s.exports.jsx(e.strong,{children:"未声明"}),"的依赖却可以被单独显式引入的依赖。"]}),`
`,s.exports.jsxs(e.p,{children:["在 v2 中，",s.exports.jsx(e.code,{children:"js-base64"}),"在一些组件中被显式引入，但",s.exports.jsx(e.code,{children:"package.json"}),"中未对其声明，这是",s.exports.jsx(e.code,{children:"postcss"}),"依赖于",s.exports.jsx(e.code,{children:"js-base64"}),"所导致。本次迁移中将",s.exports.jsx(e.code,{children:"js-base64^2.6.4"}),"加入依赖。"]}),`
`,s.exports.jsx(e.h2,{id:"benchmarking",children:"Benchmarking"}),`
`,s.exports.jsx(e.h3,{id:"methodology",children:"Methodology"}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:"Reference:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.a,{href:"https://github.com/yyx990803/vite-vs-next-turbo-hmr",children:"Benchmarking Vite vs. Next + turbopack HMR performance"})}),`
`]}),`
`]}),`
`,s.exports.jsx(e.p,{children:"开发模式，冷启动："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["运行",s.exports.jsx(e.code,{children:"npm run dev"}),"，记录",s.exports.jsx(e.code,{children:"webpack-cli"}),"在控制台打印的信息即可。"]}),`
`]}),`
`,s.exports.jsx(e.p,{children:"HMR："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["服务端（DevServer）- 记录控制台",s.exports.jsx(e.code,{children:"webpack-cli"}),"打印的构建时间即可。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["Root - 在",s.exports.jsx(e.code,{children:"App.vue"}),"添加",s.exports.jsx(e.code,{children:"HMR-n"}),"（n from 1 to 5），记录每次 recompile 用时；"]}),`
`,s.exports.jsxs(e.li,{children:["Leaf - 在",s.exports.jsx(e.code,{children:"xxx.vue"}),"修改",s.exports.jsx(e.code,{children:"姓名"}),"为",s.exports.jsx(e.code,{children:"姓名n"}),"（n from 1 to 5），记录每次 recompile 用时。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:["客户端（Browser）- 另开一个 node 进程，通过",s.exports.jsx(e.code,{children:"fs.watch()"}),"监听文件修改并打印时间戳，求与客户端渲染时间戳的",s.exports.jsx(e.strong,{children:"差值"}),"。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["Root - 在",s.exports.jsx(e.code,{children:"App.vue"}),"添加",s.exports.jsx(e.code,{children:"n-{{Date.now()}}"}),"（n from 1 to 5），记录控制台与客户端显示时间戳；"]}),`
`,s.exports.jsxs(e.li,{children:["Leaf - 在",s.exports.jsx(e.code,{children:"xxx.vue"}),"添加",s.exports.jsx(e.code,{children:"n-{{Date.now()}}"}),"（n from 1 to 5），记录控制台与客户端显示时间戳。"]}),`
`]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:"监听文件修改的脚本："}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// watch.js"}),`
`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// `node watch.js`运行即可"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," fs = ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"require"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'fs'"}),`)

fs.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"watch"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'./src/App.vue'"}),", ",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"e, filename"}),") =>"]}),` {
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Date"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"now"}),`(), filename)
})

fs.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"watch"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'./src/views/taskmanager/task/task.vue'"}),", ",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"e, filename"}),") =>"]}),` {
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Date"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"now"}),`(), filename)
})
`]})}),`
`]}),`
`,s.exports.jsx(e.p,{children:"生产模式，打包："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["运行",s.exports.jsx(e.code,{children:"npm run build"}),"，记录",s.exports.jsx(e.code,{children:"webpack-cli"}),"在控制台打印的信息即可。"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"comparison",children:"Comparison"}),`
`,s.exports.jsx(e.h4,{id:"dev",children:"Dev"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["迁移前（",s.exports.jsx(e.code,{children:"main"}),"分支，",s.exports.jsx(e.code,{children:"#38fc8"}),"版本）："]}),`
`]}),`
`,s.exports.jsxs("table",{children:[s.exports.jsx("thead",{children:s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"Times"}),`
`,s.exports.jsx("th",{children:"1"}),`
`,s.exports.jsx("th",{children:"2"}),`
`,s.exports.jsx("th",{children:"3"}),`
`,s.exports.jsx("th",{children:"4"}),`
`,s.exports.jsx("th",{children:"5"}),`
`,s.exports.jsx("th",{children:"Average"})]})}),s.exports.jsxs("tbody",{children:[s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"Cold Start (ms)"}),`
`,s.exports.jsx("td",{children:"98272"}),`
`,s.exports.jsx("td",{children:"93993"}),`
`,s.exports.jsx("td",{children:"89986"}),`
`,s.exports.jsx("td",{children:"94089"}),`
`,s.exports.jsx("td",{children:"84342"}),`
`,s.exports.jsx("td",{children:"92136"})]}),s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"HMR Server Root (ms)"}),`
`,s.exports.jsx("td",{children:"2714"}),`
`,s.exports.jsx("td",{children:"2729"}),`
`,s.exports.jsx("td",{children:"2536"}),`
`,s.exports.jsx("td",{children:"2567"}),`
`,s.exports.jsx("td",{children:"2324"}),`
`,s.exports.jsx("td",{children:"2574"})]}),s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"HMR Server Leaf (ms)"}),`
`,s.exports.jsx("td",{children:"2961"}),`
`,s.exports.jsx("td",{children:"2836"}),`
`,s.exports.jsx("td",{children:"2928"}),`
`,s.exports.jsx("td",{children:"2628"}),`
`,s.exports.jsx("td",{children:"2602"}),`
`,s.exports.jsx("td",{children:"2791"})]}),s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"HMR Client Root (ms)"}),`
`,s.exports.jsx("td",{children:"3927"}),`
`,s.exports.jsx("td",{children:"3657"}),`
`,s.exports.jsx("td",{children:"3691"}),`
`,s.exports.jsx("td",{children:"3609"}),`
`,s.exports.jsx("td",{children:"3512"}),`
`,s.exports.jsx("td",{children:"3679"})]}),s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"HMR Client Leaf (ms)"}),`
`,s.exports.jsx("td",{children:s.exports.jsx("del",{children:"9688"})}),`
`,s.exports.jsx("td",{children:"4015"}),`
`,s.exports.jsx("td",{children:"3962"}),`
`,s.exports.jsx("td",{children:"3480"}),`
`,s.exports.jsx("td",{children:"4067"}),`
`,s.exports.jsx("td",{children:"3881"})]})]})]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["迁移后（",s.exports.jsx(e.code,{children:"migrate2webpack@4"}),"分支，",s.exports.jsx(e.code,{children:"#26b08"}),"版本）："]}),`
`]}),`
`,s.exports.jsxs("table",{children:[s.exports.jsx("thead",{children:s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"Times"}),`
`,s.exports.jsx("th",{children:"1"}),`
`,s.exports.jsx("th",{children:"2"}),`
`,s.exports.jsx("th",{children:"3"}),`
`,s.exports.jsx("th",{children:"4"}),`
`,s.exports.jsx("th",{children:"5"}),`
`,s.exports.jsx("th",{children:"Average"})]})}),s.exports.jsxs("tbody",{children:[s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"Cold Start (ms)"}),`
`,s.exports.jsx("td",{children:"44887"}),`
`,s.exports.jsx("td",{children:"45776"}),`
`,s.exports.jsx("td",{children:"42537"}),`
`,s.exports.jsx("td",{children:"42784"}),`
`,s.exports.jsx("td",{children:"47785"}),`
`,s.exports.jsxs("td",{children:["44754 ",s.exports.jsx("strong",{children:"(51% faster)"})]})]}),s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"HMR Server Root (ms)"}),`
`,s.exports.jsx("td",{children:"840"}),`
`,s.exports.jsx("td",{children:"759"}),`
`,s.exports.jsx("td",{children:"616"}),`
`,s.exports.jsx("td",{children:"646"}),`
`,s.exports.jsx("td",{children:"611"}),`
`,s.exports.jsxs("td",{children:["694 ",s.exports.jsx("strong",{children:"(73% faster)"})]})]}),s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"HMR Server Leaf (ms)"}),`
`,s.exports.jsx("td",{children:"1019"}),`
`,s.exports.jsx("td",{children:"766"}),`
`,s.exports.jsx("td",{children:"788"}),`
`,s.exports.jsx("td",{children:"745"}),`
`,s.exports.jsx("td",{children:"685"}),`
`,s.exports.jsxs("td",{children:["800 ",s.exports.jsx("strong",{children:"(71% faster)"})]})]}),s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"HMR Client Root (ms)"}),`
`,s.exports.jsx("td",{children:"1382"}),`
`,s.exports.jsx("td",{children:"1156"}),`
`,s.exports.jsx("td",{children:"1188"}),`
`,s.exports.jsx("td",{children:"1096"}),`
`,s.exports.jsx("td",{children:"1070"}),`
`,s.exports.jsxs("td",{children:["1178 ",s.exports.jsx("strong",{children:"(68% faster)"})]})]}),s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"HMR Client Leaf (ms)"}),`
`,s.exports.jsx("td",{children:"1588"}),`
`,s.exports.jsx("td",{children:"1747"}),`
`,s.exports.jsx("td",{children:"1293"}),`
`,s.exports.jsx("td",{children:"1236"}),`
`,s.exports.jsx("td",{children:"1276"}),`
`,s.exports.jsxs("td",{children:["1428 ",s.exports.jsx("strong",{children:"(65% faster)"})]})]})]})]}),`
`,s.exports.jsx(e.h4,{id:"prod",children:"Prod"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["迁移前（",s.exports.jsx(e.code,{children:"main"}),"分支，",s.exports.jsx(e.code,{children:"#e1b47c6"}),"版本）："]}),`
`]}),`
`,s.exports.jsxs("table",{children:[s.exports.jsx("thead",{children:s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"Times"}),`
`,s.exports.jsx("th",{children:"1"}),`
`,s.exports.jsx("th",{children:"2"}),`
`,s.exports.jsx("th",{children:"3"}),`
`,s.exports.jsx("th",{children:"4"}),`
`,s.exports.jsx("th",{children:"5"}),`
`,s.exports.jsx("th",{children:"6"}),`
`,s.exports.jsx("th",{children:"Average"})]})}),s.exports.jsx("tbody",{children:s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"Build Time (s)"}),`
`,s.exports.jsx("td",{children:"125.45"}),`
`,s.exports.jsx("td",{children:"173.37"}),`
`,s.exports.jsx("td",{children:"171.40"}),`
`,s.exports.jsx("td",{children:"181.32"}),`
`,s.exports.jsx("td",{children:"140.26"}),`
`,s.exports.jsx("td",{children:"153.77"}),`
`,s.exports.jsx("td",{children:"157.60"})]})})]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["迁移后（",s.exports.jsx(e.code,{children:"migrate2webpack@4"}),"分支，",s.exports.jsx(e.code,{children:"#8333ce4"}),"版本）："]}),`
`]}),`
`,s.exports.jsxs("table",{children:[s.exports.jsx("thead",{children:s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"Times"}),`
`,s.exports.jsx("th",{children:"1"}),`
`,s.exports.jsx("th",{children:"2"}),`
`,s.exports.jsx("th",{children:"3"}),`
`,s.exports.jsx("th",{children:"4"}),`
`,s.exports.jsx("th",{children:"5"}),`
`,s.exports.jsx("th",{children:"6"}),`
`,s.exports.jsx("th",{children:"Average"})]})}),s.exports.jsx("tbody",{children:s.exports.jsxs("tr",{children:[s.exports.jsx("th",{children:"Build Time (s)"}),`
`,s.exports.jsx("td",{children:"77.99"}),`
`,s.exports.jsx("td",{children:"71.34"}),`
`,s.exports.jsx("td",{children:"98.76"}),`
`,s.exports.jsx("td",{children:"64.17"}),`
`,s.exports.jsx("td",{children:"73.88"}),`
`,s.exports.jsx("td",{children:"88.27"}),`
`,s.exports.jsxs("td",{children:["79.07 ",s.exports.jsx("strong",{children:"(49.83% faster)"})]})]})})]}),`
`,s.exports.jsx(e.h2,{id:"miscellaneous",children:"Miscellaneous"}),`
`,s.exports.jsx(e.h3,{id:"构建产物优化",children:"构建产物优化"}),`
`,s.exports.jsxs(e.h4,{id:"分离webpack运行时",children:["分离",s.exports.jsx(e.code,{children:"webpack"}),"运行时"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:"Reference:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.a,{href:"https://survivejs.com/webpack/optimizing/separating-runtime/",children:"Separating a Runtime (survivejs.com)"})}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"webpack"}),"运行时（runtime）包含了项目",s.exports.jsx(e.strong,{children:"初始"}),"需要加载哪些文件的清单（manifest），当需要加载的文件名（",s.exports.jsx(e.code,{children:"hash"}),"）改变时，运行时会使旧版的文件",s.exports.jsx(e.strong,{children:"失效"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["结合为产物命名添加的",s.exports.jsx(e.code,{children:"hash"}),"，将运行时单独分离出来可促使对",s.exports.jsx(e.strong,{children:"客户端缓存"}),"的有效利用。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// build\\webpack.prod.js"}),`
{
	`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"optimization"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"runtimeChunk"}),`: {
			`,s.exports.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'runtime'"}),`
		}
	}
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["这个策略与 v2 原本分离的",s.exports.jsx(e.code,{children:"manifest"}),"块作用基本一致。"]}),`
`,s.exports.jsx(e.h3,{id:"bundle-splitting",children:"Bundle Splitting"}),`
`,s.exports.jsx(e.h4,{id:"vendor-separating",children:"Vendor separating"}),`
`,s.exports.jsxs(e.p,{children:["在原本的 v2 项目中，将所有来自",s.exports.jsx(e.code,{children:"node_modules"}),"的依赖都打包到一个",s.exports.jsx(e.code,{children:"vendor"}),"块中，这会生成一个",s.exports.jsx(e.strong,{children:"体积庞大"}),"的 JS 文件，且这个 JS 文件将在项目",s.exports.jsx(e.strong,{children:"启动"}),"时就会被加载，导致首屏性能下降，但可提升后续访问性能。"]}),`
`,s.exports.jsxs(e.p,{children:["由于该配置有利有弊，故迁移后依然",s.exports.jsx(e.strong,{children:"保留"}),"了这个配置："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// build\\webpack.prod.js"}),`
{
	`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"optimization"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"splitChunks"}),`: {
			`,s.exports.jsx(e.span,{className:"hljs-attr",children:"cacheGroups"}),`: {
				`,s.exports.jsx(e.span,{className:"hljs-attr",children:"commons"}),`: {
					`,s.exports.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'vendor'"}),`,
					`,s.exports.jsx(e.span,{className:"hljs-attr",children:"test"}),": ",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/[\\\\/]node_modules[\\\\/]/"}),`,
					`,s.exports.jsx(e.span,{className:"hljs-attr",children:"chunks"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'initial'"}),`,
					`,s.exports.jsx(e.span,{className:"hljs-attr",children:"priority"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`
				},
				`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ... other chunks"}),`
			}
		}
	}
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["实际上，",s.exports.jsx(e.code,{children:"webpack 4"}),"在生产模式下已经",s.exports.jsx(e.strong,{children:"默认"}),"启用了一种",s.exports.jsx(e.a,{href:"https://webpack.js.org/plugins/split-chunks-plugin/#defaults",children:"分块策略"}),"，这种策略已经可以满足大部分情况下的构建需要。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs("details",{children:[s.exports.jsxs("summary",{children:[s.exports.jsx("code",{children:"webpack 4"}),"生产模式下的默认分块策略"]}),s.exports.jsxs("ul",{children:[s.exports.jsxs("li",{children:["可被共享的代码块",s.exports.jsx("strong",{children:"或"}),"来自",s.exports.jsx("code",{children:"node_modules"}),"的模块；"]}),`
`,s.exports.jsx("li",{children:"压缩前，体积超过 20kb 的代码块；"}),`
`,s.exports.jsx("li",{children:"按需的最大并行请求数低于等于 30；"}),`
`,s.exports.jsx("li",{children:"首屏加载的最大并行请求数低于等于 30。"})]})]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["可由团队协商后，决定是继续沿用该策略还是使用",s.exports.jsx(e.code,{children:"webpack 4"}),"自带的分块策略。"]}),`
`,s.exports.jsx(e.h4,{id:"css-extraction",children:"CSS extraction"}),`
`,s.exports.jsxs(e.p,{children:["v2 原本通过",s.exports.jsx(e.code,{children:"extract-text-webpack-plugin"}),"将项目的",s.exports.jsx(e.strong,{children:"所有"})," CSS 代码提取到",s.exports.jsx(e.strong,{children:"单独"}),"一个文件中，与上面的",s.exports.jsx(e.code,{children:"vendor"}),"一样，其导出的 CSS 文件",s.exports.jsx(e.strong,{children:"体积庞大"}),"，将阻塞应用的首屏渲染。"]}),`
`,s.exports.jsxs(e.p,{children:["迁移后，由于",s.exports.jsx(e.code,{children:"extract-text-webpack-plugin"}),"在",s.exports.jsx(e.code,{children:"webpack 4"}),"中被废弃，改用",s.exports.jsx(e.code,{children:"mini-css-extract-plugin"}),"在生产环境下进行 CSS 处理，而",s.exports.jsx(e.code,{children:"mini-css-extract-plugin"}),"的",s.exports.jsx(e.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin#mini-css-extract-plugin-1",children:"设计理念"}),"就在于为",s.exports.jsx(e.strong,{children:"每个"}),"包含 CSS 代码的 JS 文件生成",s.exports.jsx(e.strong,{children:"单独"}),"的 CSS 文件，以提供异步加载、提高客户端缓存利用等特性。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"vite"}),"也针对 CSS ",s.exports.jsx(e.a,{href:"https://vitejs.dev/config/build-options.html#build-csscodesplit",children:"默认"}),"开启了",s.exports.jsx(e.strong,{children:"分块"}),"策略，而不是将整个项目的 CSS 提取到单个文件中。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["与上面的 Vendor Separating 相同，目前仍",s.exports.jsx(e.strong,{children:"保留"}),"了这个配置，迁移后通过配置",s.exports.jsx(e.code,{children:"webpack 4"}),"的",s.exports.jsx(e.code,{children:"SplitChunksPlugin"}),"实现："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// build\\webpack.prod.js"}),`
{
	`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"optimization"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"splitChunks"}),`: {
			`,s.exports.jsx(e.span,{className:"hljs-attr",children:"cacheGroups"}),`: {
				`,s.exports.jsx(e.span,{className:"hljs-attr",children:"styles"}),`: {
					`,s.exports.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'styles'"}),`,
					`,s.exports.jsx(e.span,{className:"hljs-attr",children:"test"}),": ",s.exports.jsx(e.span,{className:"hljs-regexp",children:"/\\.(css)|(styl(us)?)|(vue)$/"}),`,
					`,s.exports.jsx(e.span,{className:"hljs-attr",children:"chunks"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'all'"}),`,
					`,s.exports.jsx(e.span,{className:"hljs-attr",children:"priority"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"5"}),`
				},
				`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ... other chunks"}),`
			}
		}
	}
}
`]})}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"注意"}),"："]}),`
`,s.exports.jsxs(e.p,{children:["可能是由于",s.exports.jsx(e.code,{children:"webpack 4"}),"中",s.exports.jsx(e.code,{children:"SplitChunksPlugin"}),"的固有特性，该配置在提取 CSS 之外，引入了将",s.exports.jsx(e.strong,{children:"相关 JS 模块"}),"也合并在一起的",s.exports.jsx(e.strong,{children:"副作用"}),"。在",s.exports.jsx(e.code,{children:"webpack 5"}),"中，该副作用貌似可以通过用",s.exports.jsx(e.code,{children:"types: 'css/mini-extract'"}),"代替",s.exports.jsx(e.code,{children:"test: /\\.(css)|(styl(us)?)|(vue)$/"}),"避免。"]}),`
`]}),`
`,s.exports.jsx(e.p,{children:"关于是继续沿用提取唯一一个 CSS 文件还是为每个模块生成单独的 CSS 文件，可由团队在商议并进行测试后决议。"}),`
`,s.exports.jsx(e.h3,{id:"关于-eslint-的配置",children:"关于 ESLint 的配置"}),`
`,s.exports.jsxs(e.p,{children:["在 v1、v2 与 h5 里，只有 v2 是在",s.exports.jsx(e.code,{children:"webpack"}),s.exports.jsx(e.strong,{children:"构建时"}),"启用了 ",s.exports.jsx(e.code,{children:"eslint"}),"的。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:["h5 的",s.exports.jsx(e.code,{children:"eslint"}),"提示是 IDE 读取",s.exports.jsx(e.code,{children:".eslintrc.js"}),"并配合 ESLint 扩展所提供的。"]}),`
`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// v1 本身就没有安装 eslint 依赖"}),`

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// h5, build\\webpack.base.conf.js"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"module"}),`: {
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"rules"}),`: [
		...(config.`,s.exports.jsx(e.span,{className:"hljs-property",children:"dev"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"useEslint"})," ? [] : []), ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// h5 中，关于是否应用eslint的配置处始终返回空数组"}),`
	]
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["而 v2 中，原有的",s.exports.jsx(e.code,{children:"eslint"}),"配置如下："]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// .eslintrc.js"}),`
`,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"module"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"exports"}),` = {
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"root"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"parser"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'babel-eslint'"}),`,
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"parserOptions"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"sourceType"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'module'"}),`,
		`,s.exports.jsx(e.span,{className:"hljs-string",children:'"allowImportExportEverywhere"'}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`
	},
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"env"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"browser"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"node"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
		`,s.exports.jsx(e.span,{className:"hljs-attr",children:"es6"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
	},
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"globals"}),`:{
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ..."}),`
	},
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"extends"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:"'eslint:recommended'"}),", ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// 注意此处 extends 配置"}),`
	`,s.exports.jsx(e.span,{className:"hljs-attr",children:"plugins"}),": [ ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// 注意此处 plugins 配置"}),`
		`,s.exports.jsx(e.span,{className:"hljs-string",children:"'html'"}),`,
		`,s.exports.jsx(e.span,{className:"hljs-string",children:"'vue'"}),`
	],
  `,s.exports.jsx(e.span,{className:"hljs-string",children:"'rules'"}),`: {
		`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// custom rules ..."}),`
	}
}
`]})}),`
`,s.exports.jsx(e.p,{children:"其中有两个值得注意的点："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"plugins: ['html', 'vue']"})," - 将插件",s.exports.jsx(e.code,{children:"eslint-plugin-html"}),"和",s.exports.jsx(e.code,{children:"eslint-plugin-vue"}),"接入",s.exports.jsx(e.code,{children:"eslint"}),"，但这些插件只是为",s.exports.jsx(e.code,{children:"eslint"}),"提供了静态分析",s.exports.jsx(e.code,{children:".html"}),"和",s.exports.jsx(e.code,{children:".vue"}),"文件的能力，并",s.exports.jsx(e.strong,{children:"不会自动引入任何规则集"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"extends: 'eslint:recommended'"})," - ",s.exports.jsx(e.code,{children:"extends"}),"选项",s.exports.jsx(e.strong,{children:"只"}),"为",s.exports.jsx(e.code,{children:"eslint"}),"引入了",s.exports.jsx(e.code,{children:"eslint:recommended"}),"这一规则集，并",s.exports.jsx(e.strong,{children:"没有引入"}),s.exports.jsx(e.code,{children:"package.json"}),"所声明的包括",s.exports.jsx(e.code,{children:"eslint-plugin-vue"}),"在内的各插件内置的规则。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["且在更新",s.exports.jsx(e.code,{children:"eslint"}),"相关依赖后，新版的",s.exports.jsx(e.code,{children:"eslint:recommended"}),"增加了许多",s.exports.jsx(e.code,{children:"error"}),"等级的规则，导致迁移后构建时",s.exports.jsx(e.strong,{children:"新增许多报错"}),"。因",s.exports.jsx(e.strong,{children:"代码规范"}),"需要整个团队协商决定，故目前在",s.exports.jsx(e.code,{children:"migrate2webpack@4"}),"分支上",s.exports.jsx(e.strong,{children:"未开启"}),s.exports.jsx(e.code,{children:"eslint-webpack-plugin"}),"，可由团队确定具体措施后，予以开启。"]}),`
`,s.exports.jsxs(e.p,{children:["或者也可像 h5 一样，",s.exports.jsx(e.strong,{children:"关闭"}),"构建时的",s.exports.jsx(e.code,{children:"eslint"}),"，通过 ",s.exports.jsx(e.strong,{children:"IDE 扩展"}),"实时地对代码进行静态分析。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"注意"}),"："]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["在迁移后，考虑到项目需要，",s.exports.jsx(e.code,{children:"eslint"}),"相关依赖只保留了",s.exports.jsx(e.code,{children:"eslint-plugin-vue"}),"，为",s.exports.jsx(e.code,{children:"vue"}),"组件提供的额外规则集，可由团队商议后决定是否应用。"]}),`
`,s.exports.jsxs(e.li,{children:["另外，在开发环境下开启",s.exports.jsx(e.code,{children:"eslint"}),"必然会增加构建工作量、降低构建速度，所以建议开启",s.exports.jsx(e.code,{children:"eslint-webpack-plugin"}),"的",s.exports.jsx(e.strong,{children:"缓存"}),"配置，这可加快后续的构建效率。",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["为",s.exports.jsx(e.code,{children:"eslint-webpack-plugin"}),"配置",s.exports.jsx(e.code,{children:"cache: true"}),"，会在 linting 后生成一个",s.exports.jsx(e.code,{children:".eslintcache"}),"文件，已在",s.exports.jsx(e.code,{children:".gitignore"}),"中声明",s.exports.jsx(e.strong,{children:"忽略"}),"该文件。"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"alternatives",children:"Alternatives"}),`
`,s.exports.jsxs(e.p,{children:["在优化构建效率的过程中，尝试了其他一些来自社区的方法，但由于",s.exports.jsx(e.strong,{children:"效果不佳"}),"，没有应用到最终版本中，现将其列举如下，可后续再考虑是否应用。"]}),`
`,s.exports.jsx(e.h3,{id:"缓存",children:"缓存"}),`
`,s.exports.jsxs(e.p,{children:["使用",s.exports.jsx(e.code,{children:"cache-loader"}),"对大开销 loader 处理结果进行缓存，构建时对比模块的内容",s.exports.jsx(e.code,{children:"hash"}),"决定是重新构建还是复用过去结果。"]}),`
`,s.exports.jsxs(e.p,{children:["在自己的机器上对",s.exports.jsx(e.code,{children:"vue-loader"}),"、",s.exports.jsx(e.code,{children:"css-loader"}),"、",s.exports.jsx(e.code,{children:"stylus-loader"}),"等几个大开销 loader 应用后效果不佳，故未采用。"]}),`
`,s.exports.jsxs(e.p,{children:["猜想可能是引入的",s.exports.jsx(e.code,{children:"cache-loader"}),"增加了读取和写入文件的开销，使得效率提升不高，可能因机器而异。"]}),`
`,s.exports.jsx(e.h3,{id:"多线程",children:"多线程"}),`
`,s.exports.jsxs(e.p,{children:["使用",s.exports.jsx(e.code,{children:"happypack"}),"或",s.exports.jsx(e.code,{children:"thread-loader"}),"为大开销 loader 开启多线程，通过并发提升打包效率。"]}),`
`,s.exports.jsxs(e.p,{children:["同样，在自己的机器上对不同的 loader 应用",s.exports.jsx(e.code,{children:"thread-loader"}),"并应用不同的配置（线程数、线程最大休眠时间等）后，效果并不佳，故未采用。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"thread-loader"}),"开启后，线程和线程之间通信会带来额外的开销，猜想可能是处理",s.exports.jsx(e.code,{children:".vue"}),"模块时对",s.exports.jsx(e.code,{children:"<template>"}),"、",s.exports.jsx(e.code,{children:"<script>"}),"、",s.exports.jsx(e.code,{children:"<style>"}),"块的处理需要各线程频繁通信，导致拖慢构建效率。"]}),`
`,s.exports.jsx(e.h3,{id:"outputfutureemitassets",children:s.exports.jsx(e.code,{children:"output.futureEmitAssets"})}),`
`,s.exports.jsxs(e.p,{children:["自从 ",s.exports.jsx(e.a,{href:"https://github.com/webpack/webpack/releases/tag/v4.29.0",children:"webpack^4.29"}),"，配置",s.exports.jsx(e.code,{children:"output.futureEmitAssets = true"}),"可使",s.exports.jsx(e.code,{children:"webpack 4"}),"应用",s.exports.jsx(e.code,{children:"webpack 5"}),"的构建逻辑，根据",s.exports.jsx(e.a,{href:"https://v4.webpack.js.org/configuration/output/#outputfutureemitassets",children:"官方文档"}),"，这会在输出资源后",s.exports.jsx(e.strong,{children:"释放内存"}),"，从而提升构建效率。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs("details",{children:[s.exports.jsxs("summary",{children:[s.exports.jsx("code",{children:"output.futureEmitAssets"})," 的作用"]}),s.exports.jsxs("ul",{children:[s.exports.jsxs("li",{children:[s.exports.jsx("code",{children:"Compilation.assets"}),"中的资源被替换为",s.exports.jsx("code",{children:"SizeOnlySource"}),"；"]}),`
`,s.exports.jsx("li",{children:"不允许生成资源后再读取资源；"}),`
`,s.exports.jsxs("li",{children:["这使得内存可以被",s.exports.jsx("strong",{children:"垃圾回收"}),"。"]})]})]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["在自己引入后，发现开发环境下的构建效率并未提高；而生产环境若使用 CI/CD 的模式进行发包（即每次都是",s.exports.jsx(e.strong,{children:"全新的环境"}),"），则对内存的清理并不重要，故未采用。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"注意"}),"："]}),`
`,s.exports.jsxs(e.p,{children:["官方文档提到，开启这个配置可能导致那些会",s.exports.jsx(e.strong,{children:"假定之前输出的资源仍在内存中"}),"的插件出错，但这类插件在整个生态中的占比",s.exports.jsx(e.strong,{children:"非常小"}),"，且该逻辑在",s.exports.jsx(e.code,{children:"webpack 5"}),"中已是",s.exports.jsx(e.strong,{children:"默认开启"}),"的，所以如果决定启用该配置，并不需要在插件适配上有太多顾虑。"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"node-polyfills",children:"Node polyfills"}),`
`,s.exports.jsxs(e.p,{children:["原来配置的 boilerplate 中为",s.exports.jsx(e.code,{children:"vue"}),"配置了一些 Node.js 模块的 polyfill，注入 polyfill 会导致降低构建速度且使构建产物体积增大，在将",s.exports.jsx(e.code,{children:"vue"}),"升级到",s.exports.jsx(e.code,{children:"vue^2.7"}),"后，便可以将其完全移除。"]}),`
`,s.exports.jsx(e.h2,{id:"drawbacks",children:"Drawbacks"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"本次优化是针对项目宏观层面的，虽然构建成功，但不能保障每个运行时不出错，而这可能需要对 v2 相关业务做全面的测试才能得知；"}),`
`,s.exports.jsxs(e.li,{children:["本次优化是仅针对 v2 的，并将",s.exports.jsx(e.code,{children:"node.js"}),"的版本升至",s.exports.jsx(e.code,{children:"^14.20.0"}),"，与 v1 差距较大，若发布生产时 v1、v2 使用统一的",s.exports.jsx(e.code,{children:"node"}),"环境，则 v1 的构建可能出错。"]}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"adoption-strategy",children:"Adoption strategy"}),`
`,s.exports.jsxs(e.p,{children:["本次迁移在",s.exports.jsx(e.code,{children:"migrate2webpack@4"}),"分支上开发，在团队进行评估，并通过开发、生产环境的测试后，可选取一个版本合并该分支。"]}),`
`,s.exports.jsx(e.h3,{id:"关于测试",children:"关于测试"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["由于该迁移是对整个 v2 前端基础设施的升级，与",s.exports.jsx(e.strong,{children:"具体业务无关"}),"，所以可能需要特殊的测试策略。"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"合并流程",children:"合并流程"}),`
`,s.exports.jsxs(e.p,{children:["以下提供一种合并设想，假设目标版本分支为",s.exports.jsx(e.code,{children:"target-branch"}),":"]}),`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"git checkout migrate2webpack@4"}),"，切换到",s.exports.jsx(e.code,{children:"migrate2webpack@4"}),"分支；"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"git rebase target-branch"}),"，将迁移相关提交提升至历史栈顶；"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"git reset --soft <hash-of-the-last-commit-on-target-branch>"}),"，将迁移相关提交还原至暂存区；"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"git commit -m 'migration: migrate webpack 3 to webpack 4'"}),"，合并所有迁移相关修改到一次提交中，避免污染提交历史；",`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["原本的提交中一些地方包含了修改相关的",s.exports.jsx(e.strong,{children:"注释"}),"，若有必要，可以",s.exports.jsx(e.code,{children:"migrate2webpack@4"}),"为原型新建一个分支，备份原来的提交信息；"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"git checkout target-branch"}),"，切换到",s.exports.jsx(e.code,{children:"target-branch"}),"；"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"git merge migrate2webpack@4"}),"，将迁移代码合并到该版本，后续合并到开发分支上。"]}),`
`]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"注意"}),"："]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"migrate2webpack@4"}),"分支最后一次",s.exports.jsx(e.code,{children:"rebase"}),"的目标是",s.exports.jsx(e.code,{children:"main #5238cfb1"}),"。"]}),`
`]}),`
`]})]})}function d(r={}){const{wrapper:e}=r.components||{};return e?s.exports.jsx(e,Object.assign({},r,{children:s.exports.jsx(n,r)})):n(r)}export{x as date,d as default,o as duration,c as lang,i as path,l as title};
