import{j as e}from"./jsx-runtime-f0839969.js";const l="TS Config 简记",t="2022-05-02T18:03:00.000+00:00",i="zh",c="4min",x="/blog/tsconfig-notes";function n(r){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",blockquote:"blockquote",ul:"ul",strong:"strong",h2:"h2",h3:"h3",code:"code",pre:"pre"},r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#ts-config-简记",children:"TS Config 简记"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#root-fields",children:"Root Fields"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#files",children:"files"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#extends",children:"extends"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#include",children:"include"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#exclude",children:"exclude"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#references",children:"references"})})]})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#compiler-options",children:"Compiler Options"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#baseurl",children:"baseUrl"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#module",children:"module"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#moduleresolution",children:"moduleResolution"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#composite",children:"composite"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#rootdir",children:"rootDir"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#types",children:"types"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#lib",children:"lib"})})]})]})]})]})})}),`
`,e.exports.jsx(s.h1,{id:"ts-config-简记",children:"TS Config 简记"}),`
`,e.exports.jsx(s.p,{children:"Fwio"}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"总结一些TSConfig文件的选项意义。"}),`
`]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["一个TSConfig文件表示其所在目录是TypeScript或JavaScript项目的",e.exports.jsx(s.strong,{children:"根目录"}),"。"]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"root-fields",children:"Root Fields"}),`
`,e.exports.jsx(s.h3,{id:"files",children:"files"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"指定项目包含哪些文件。"}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"extends",children:"extends"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"extends"}),"的值是一个包含指向要",e.exports.jsx(s.strong,{children:"继承"}),"的另一个TSConfig文件的路径。"]}),`
`,e.exports.jsxs(s.li,{children:["首先加载基文件(base file)中的配置(即",e.exports.jsx(s.code,{children:"extends"}),"指向的文件)，然后被派生文件的配置",e.exports.jsx(s.strong,{children:"覆盖"}),"。"]}),`
`,e.exports.jsxs(s.li,{children:["配置文件中的所有相对路径都将相对于",e.exports.jsx(s.strong,{children:"它们所在的配置文件"}),"进行解析。"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"references"}),"是顶层属性中唯一不能被继承的。"]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"include",children:"include"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"以数组指定项目要包含的文件或模式。"}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"include"}),"和",e.exports.jsx(s.code,{children:"exclude"}),"支持通配符来生成全局模式(glob patterns)：",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"*"}),"：匹配零或多个字符（不包含目录间隔符）"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"?"}),"：匹配任意一个字符（不包含目录间隔符）"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"**/"}),"：匹配嵌套任意级的任意目录。"]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"exclude",children:"exclude"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["以数组指定在解析",e.exports.jsx(s.code,{children:"include"}),"时，应该专门排除的文件。"]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"references",children:"references"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"references"}),"为数组的形式，可将TypeScript项目的结构组织为更小的部分。"]}),`
`,e.exports.jsx(s.li,{children:"使用项目引用(references)可以极大地缩短构建和编辑器交互的时间，强制组件之间的逻辑分离，并以改进的方式组织代码。"}),`
`,e.exports.jsxs(s.li,{children:["每个",e.exports.jsx(s.code,{children:"reference"}),"的",e.exports.jsx(s.code,{children:"path"}),"属性可以指向一个包含TS Config文件的目录。"]}),`
`,e.exports.jsxs(s.li,{children:["当你引用一个项目时，会带来以下不同：",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["从引用的项目导入模块，将变为加载其输出的",e.exports.jsx(s.strong,{children:"声明文件"}),"(.d.ts)。"]}),`
`,e.exports.jsxs(s.li,{children:["如果引用的项目生成了一个outFile，这个outFile的.d.ts文件的声明会对该项目",e.exports.jsx(s.strong,{children:"可见"}),"。"]}),`
`,e.exports.jsx(s.li,{children:"构建模式会自动构建所需的引用项目。"}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"compiler-options",children:"Compiler Options"}),`
`,e.exports.jsx(s.h3,{id:"baseurl",children:"baseUrl"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["指定解析",e.exports.jsx(s.strong,{children:"非绝对模块名"}),"所依据的根目录。"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:'"baseUrl": "./"'}),"会查找",e.exports.jsx(s.code,{children:"ts.config.json"}),"所在目录的文件。"]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"module",children:"module"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["应该为每个项目设置",e.exports.jsx(s.code,{children:"module"}),"，表示项目所使用的模块方案。"]}),`
`,e.exports.jsxs(s.li,{children:["改变",e.exports.jsx(s.code,{children:"module"}),"也会影响",e.exports.jsx(s.code,{children:"moduleResolution"}),"。"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"es6(es2015)"}),"与",e.exports.jsx(s.code,{children:"es2020"}),"的主要区别是，",e.exports.jsx(s.code,{children:"es2020"}),"引入了动态",e.exports.jsx(s.code,{children:"import()"}),"和",e.exports.jsx(s.code,{children:"import.meta"}),"。"]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"moduleresolution",children:"moduleResolution"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["指定模块的",e.exports.jsx(s.strong,{children:"解析策略"}),"。"]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"composite",children:"composite"}),`
`,e.exports.jsx(s.h3,{id:"rootdir",children:"rootDir"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["所有非声明输入文件的",e.exports.jsx(s.strong,{children:"最长公共路径"}),"。"]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["如果设置了",e.exports.jsx(s.code,{children:"composite"}),"，则根目录的默认值为包含",e.exports.jsx(s.code,{children:"tsconfig.json"}),"文件的目录。"]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"举例："}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"hljs language-xml",children:`MyProj
├── tsconfig.json
├── core
│   ├── a.ts
│   ├── b.ts
│   ├── sub
│   │   ├── c.ts
├── types.d.ts
`})}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["其推断出的",e.exports.jsx(s.code,{children:"rootDir"}),"是最长公共路径",e.exports.jsx(s.code,{children:"core/"}),"，那么最后导出的TypeScript为："]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"hljs language-xml",children:`MyProj
├── dist
│   ├── a.js
│   ├── b.js
│   ├── sub
│   │   ├── c.js
`})}),`
`]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"types",children:"types"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["默认情况下，所有",e.exports.jsx(s.strong,{children:"可见"}),"的",e.exports.jsx(s.code,{children:"@types"}),"包都会被纳入编译。"]}),`
`,e.exports.jsxs(s.li,{children:["任何封闭文件夹内的",e.exports.jsx(s.code,{children:"node_modules/@types"}),"都被认为是可见的。"]}),`
`,e.exports.jsxs(s.li,{children:["如果",e.exports.jsx(s.code,{children:"type"}),"被指明，则只有列出的包会被包含在全局作用域内。"]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"lib",children:"lib"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"TypeScript 为内置 JS APIs 包含了一个默认集，包括浏览器环境中对象的类型定义。"}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["TypeScript 也包含了 JS 的新特性，比如类型",e.exports.jsx(s.code,{children:"Map"}),"的定义。"]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"从 TypeScript 4.5 开始，lib 文件可以被 npm 模块覆盖。"}),`
`]}),`
`]})]})}function d(r={}){const{wrapper:s}=r.components||{};return s?e.exports.jsx(s,Object.assign({},r,{children:e.exports.jsx(n,r)})):n(r)}export{t as date,d as default,c as duration,i as lang,x as path,l as title};
