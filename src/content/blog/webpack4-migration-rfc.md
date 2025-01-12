---
title: Webpack 4 迁移 RFC
pubDate: 2022-12-09T19:00:00+08:00
description: 实习期间，对陈旧项目架构的一次构建效率升级，本文是其 RFC，当然，我相信不太会有人愿意看这样的内容
lang: zh
duration: 10min
---

- Start Date: 2022-12-05
- Target Major Version: v2
- Reference Issues: none
- Implementation PR: TODO

## Summary

- 将项目的构建工具从`webpack 3`迁移至`webpack 4`，并将各相关 webpack 插件升级到`webpack 4`兼容版本。

- 优化构建效率，包括用`esbuild`代替`babel`、修改`webpack`配置、引入插件等，将项目开发环境冷启动时间和生产打包时间缩短约 50%。

- 尝试将 Vue 2 迁移到`vue^2.7.x`稳定版本。
  - 由于迁移 Vue 并非构建效率或者基础架构上的优化，所以分支上**未提交**相关改动

## Motivation

### 构建和 HMR 效率低下

除大页面外，v2 承担了桌面端的绝大部分业务，已经具有相当的复杂度，且随着业务全量迁移到 v2，项目的体积和复杂度会不断增长。

项目庞大的体量导致，在开发阶段`npm run dev`进行的冷启动时间，以及生产构建`npm run build`进行的项目打包耗时都会越来越长。

除冷启动速率外，在`webpack 3`下，项目 HMR (Hot Module Replacement，模块热替换) 的**准确率**也不尽人意，体现在对某些更改不能准确保留状态，而触发**不必要**的 live reload。且由于 webpack 在每次 HMR 时都会重新构建整个项目，原本缓慢的构建时间也会拖慢 HMR 的效率。

### 工具链生态过旧

v2 使用发布于五年前的`webpack@3.6.0`进行构建，部分依赖现已不再有人维护，且`vue 2.x`在 2023 年年底也将[停止维护](https://blog.vuejs.org/posts/vue-2-7-naruto.html#implications-of-the-2-7-release)。应用层框架（`vue`、`react`）往往依赖于`babel`、`postcss`等编译时工具，而这些工具在实践中又以`loader`、`plugins`等形式集成于`webpack`，因此，未来若要将框架升级，则应**提早**完成对`webpack`及底层生态的升级。

另外，v2 项目通过 Vue CLI 生成，其配置自带许多**当时通用**的 boilerplate，但有些地方已经不是当前的**最佳实践**（如将所有样式打包成一个`.css`文件会影响首屏性能等）。在迁移时，通过审阅原有的配置文件，也可优化不合理、移除不必要的部分。

### 从 vue2.x 到 vue2.7

`vue2.7`是 Vue 团队为了将 Vue 3 的特性**向后兼容**，于 2022 年 7 月[发布](https://blog.vuejs.org/posts/vue-2-7-naruto.html)的 Vue 2 最终版本，提供了 Vue 3 最核心的 **Composition API** 特性与更好的**类型系统**。

> <details>
>  <summary>兼容 Composition API 和<code>&lt;script setup&gt;</code>语法糖的意义</summary>
>  <ul>
>  	<li>更好的代码<strong>组织</strong>，将实现一个业务功能的代码组织在一起，而不是分散到<code>data()</code>、<code>computed</code>、<code>methods</code>等多个选项中；</li>
>      <li>更好的<strong>逻辑复用</strong>，Composition API 引入的<code>composables</code>提供了比<code>mixin</code>更好的逻辑复用范式；</li>
>      <li>更好的类型提示，由于 Composition API 使用<strong>函数</strong>组织组件，相比以往基于 Class 的方式，类型推断更加准确</li>
>      <li>缩小打包体积，<code>&lt;script setup&gt;</code>被编译为函数，可直接通过作用域访问到渲染上下文，相比于原来通过实例化代理对象的访问更快，且一致的变量名更利于压缩。</li>
>  </ul>
> </details>

## Detailed design

- `node.js`版本：`^14.20.0`
- 由于更新了部分依赖，需先使用`npm ci`安装依赖

### 构建工具升级

#### 更新`webpack`核心依赖

选用发布于两年前的`webpack@4.46.0`作为目标版本。`v4.46.0`是`webpack 4`的稳定版本，能较好适配各种为`webpack 4`设计的插件，且由于在`4.x`中版本较新，能为未来迁移到`webpack 5`提供便利。

对照发布时间，分别安装和升级 CLI 与 DevServer 依赖到`webpack-cli@4.10.0`、`webpack-dev-server@4.11.1`。

#### 更新原有`webpack`工具链

- Loader:
  - `babel-loader`：`^7.1.1` ==> `^8.3.0`
    - 用`esbuild`替代`babel`在**浏览器兼容**上的作用，详情见构建效率优化一节。
  - `css-loader`：`^0.28.0` ==> `^5.2.7`
  - `eslint-loader`：移除。
    - 在`webpack 4`中被废弃，用`eslint-webpack-plugin`代替。
  - `file-loader`：`^1.1.4` ==> `^6.2.0`
  - `postcss-loader`：`^2.0.8` ==> `^4.3.0`
  - `url-loader`：`^4.0.8` ==> `^4.1.1`
  - `vue-loader`：`^13.2.0` ==> `^15.10.1`
    - `vue-loader 15.x`是`vue-loader`目前的最高版本，可为将`vue 2.x`升级到稳定版本`2.7`做铺垫。
  - `vue-style-loader`：`^3.0.1` ==> `^4.1.3`
- Plugins：
  - `copy-webpack-plugin`：`^4.0.1` ==> `^6.4.0`
  - `eslint-webpack-plugin`：新增`^2.7.0`。
    - 用于代替`eslint-loader`。
  - `extract-text-webpack-plugin`：移除。
    - 在`webpack 4`中被废弃，改用`mini-css-extract-plugin`。
  - `friendly-errors-webpack-plugin`：`^1.6.1` ==> `^1.7.0`
  - `html-webpack-plugin`：`^2.30.1` ==> `^4.5.2`
  - `mini-css-extract-plugin`：新增`^1.6.2`。
    - 用于替代`extract-text-webpack-plugin`。
  - `optimize-css-assets-webpack-plugin`：移除。
    - 改用`esbuild`压缩 css，以获取更快的速度。
  - `speed-measure-webpack-plugin`：新增`^1.5.0`。
    - 用于检视各构建流程用时，在**迁移完成后可移除**。
  - `uglifyjs-webpack-plugin`：移除。
    - 在`webpack 4`中被废弃，`webpack 4`默认使用`terser`压缩 JS，但这里改用更快的`esbuild`压缩。
- Deps:

  - `@babel/core`：新增`^7.20.5`。

    - `babel-loader`要求。

  - `@babel/preset-env`：新增`^7.20.2`。
    - 生产模式下，对`jsx`模块进行兼容性处理。
  - `@vue/babel-helper-vue-jsx-merge-props`：新增`^1.4.0`。
  - `@vue/babel-preset-jsx`：新增`^1.4.0`。
    - 以上两个依赖，用于配合`babel`为`element-ui`（以及修改后的`el-`组件）提供`jsx`转译。
  - `autoprefixer`：`^7.1.2` ==> `^9.4.7`
  - `babel-core`：移除
    - 在`babel 7.x`后替换为`@babel/core`
  - `babel-eslint`：移除
    - 以上两个依赖不再需要。
  - `babel-helper-vue-jsx-merge-props`：移除
  - `babel-plugin-syntax-jsx`：移除
  - `babel-plugin-transform-runtime`：移除
  - `babel-plugin-transform-vue-jsx`：移除
    - 以上与`jsx`相关依赖包含于`@vue/babel-preset-jsx`中。
  - `babel-preset-env`：移除
  - `babel-preset-stage-2`：移除
    - 较新版本的`babel`改用`@babel/preset-env`进行兼容。
  - `node-notifier`：`^5.1.2` ==> `^8.0.2`
  - `eslint-plugin-html`：移除。
  - `eslint-plugin-import`：移除。
  - `eslint-plugin-node`：移除。
  - `eslint-plugin-promise`：移除。
  - `eslint-plugin-standard`：移除。
    - 以上 ESLint Plugins 均未在项目中使用到。
  - `eslint-plugin-vue`：`^5.2.2` ==> `^9.7.0`
  - `postcss`：新增`^8.4.5`。
    - `postcss-loader`要求。
  - `postcss-import`：`^11.0.0` ==> `^14.0.2`
  - `postcss-url`：`^7.2.1` ==> `^10.1.3`
  - `portfinder`：`^1.0.13` ==> `^1.0.28`
  - `vue-template-compiler`：`^2.5.2` ==> `^2.7.10`

#### 配置文件重构

原本的`webpack`配置文件（`/build/`）通过`webpack-merge`实现一种`inheritance`（继承）式的配置复用策略，直观呈现为通用（common）、开发（dev）和生产（prod）三个庞大的对象字面量（plain object）。由于`WebpackConfig`的配置项繁杂，这种结构的可读性较差。

新的架构在`inheritance`的基础上，借鉴 [SurviveJS](https://survivejs.com/webpack/developing/composing-configuration/) 所提倡的 Config 组织方案，将配置分解为更小的单元，其粒度为配置中启用一个特定功能所对应的部分，如`loader`、`devServer`等。

并且，Node.js 逐渐支持 **ES Module** 模块系统，而 ESM 作为一种静态模块系统能提供比 CJS 更好的类型推断能力。虽然 v2 项目本身不使用 TypeScript，但若使用的第三方库编写了类型声明，可以配合 IDE 提供类型提示，故改用 ESM 编写了配置文件。

```markdown
v2 (before)
├─ build
│ ├─ ...
│ ├─ webpack.base.conf.js // 通用
│ ├─ webpack.dev.conf.js // 开发
│ └─ webpack.prod.conf.js // 生产

v2 (after)
├─ build
│ ├─ ...
│ ├─ webpack.common.mjs // 通用
│ ├─ webpack.dev.mjs // 开发
│ └─ webpack.prod.mjs // 生产
```

### 构建效率优化

#### 使用`esbuild`代替`babel`

`esbuild`是基于 Go 的新一代 JavaScript 转译器，相比用 JS 编写的`babel`，具有性能上的天然优势。

> <details>
> 	<summary><code>esbuild</code>为什么比其他 bundler 快？</summary>
> 	<ul>
> 		<li>用 Go 编写，并编译成了原生代码</li>
> 		<ul>
> 		<li>常见的 bundler 用 JS 编写，而对于即时编译（JIT-compiled）语言来说，命令行应用（command-line application）是其性能最差的场景。每次运行 bundler 时，JavaScript VM（V8）需要在没有任何优化提示的情况下先<strong>编译</strong> bundler 的 JS 源码。而 esbuild 的原生代码产物可以直接运行（即开始打包）。</li>
> 	</ul>
> 	<li>大量使用并发</li>
> 	<ul>
> 		<li>另外，Go 是以<strong>并发</strong>为核心设计的，它具有<strong>共享内存</strong>的 IPC 方式。Go 和 JavaScript 都有<strong>并行的垃圾回收器</strong>，但是 Go 的<strong>堆</strong>是线程间共享的，而每个 JavaScript 线程有一个单独的堆，这使得 JavaScript 的可行并行量减少了<strong>一半</strong>，因为一半 的 CPU 核在为另一半收集垃圾。</li>
> 	</ul>
> 	<li>esbuild 是从头开始编写的（from scratch）</li>
> 	<ul>
> 		<li>esbuild 是以<strong>性能</strong>为第一需求而从头编写的，相比于使用第三方库，从头编写可以保证所有地方使用的<strong>数据结构一致</strong>，避免了昂贵的数据结构转换。</li>
> 		<li>以 TypeScript 为例，许多 bundler 会使用官方的 tsc 进行转译，但官方的编译器不是以性能为第一追求的，其内部大量使用了 megamorphic object shapes 和不必要的动态属性访问（dynamic property access），大大拖慢 JS 执行速度。</li>
> 	</ul>
> 	<li>对内存的高效使用</li>
> 	<ul>
> 		<li>esbuild 只操作 JavaScript AST <strong>三次</strong>：</li>
> 		<ul>
> 			<li>词法分析（lexing）、解析、建立作用域和声明标识符；</li>
> 	 		<li>绑定标识符、JSX/TS => JS、ESNEXT => ES2015;</li>
> 			<li>最小化（minification）、代码生成、source map 生成。</li>
> 		</ul>
> 		<li>这样的设计可以最大程度地<strong>重复利用</strong> AST 数据，因为数据依然活跃在 CPU 缓存（cache）中。</li>
> 		<li>而其他 bundler 会串行、而不是交织执行以上任务，且过程中 AST 可能会多次被转换成其他形式：<code>string -> TS -> JS -> string</code>、<code>string -> JS -> older JS -> string</code>、<code>string -> JS -> minified JS -> string</code>。这会占用更多内存并降低处理速度。</li>
> 		</ul>
> 	</ul>
> </details>

考虑到 v2 项目本身的适配对象是基于 Chromium 的 Chrome、Edge 等现代浏览器，契合`esbuild`本身支持的最低编译目标`es2015`，因此改用`esbuild`转译 JS **可行**。

在代替`babel`时，将原来的`babel-loader`及其相关依赖（`presets`、`plugins`）全部移除，并配置`esbuild-loader`如下：

```js
// build\webpack.common.js
{
	loader: 'esbuild-loader',
	// ...
	options: {
		target: 'es2015', // esbuild 的最低编译目标为 es2015
	}
}
```

在转译之外，使用`esbuild`对 js、css 进行**压缩**，可以获得比`terser`、`cssnano`等传统压缩库更快的速度。

```js
// build\webpack.prod.js
{
  // ...
  optimization: {
    // ...
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        css: true, // 压缩 css
      }),
    ]
  }
}
```

> **注意**：
>
> 由于`element-ui`对`babel`的**硬性依赖**，`esbuild`无法正确处理其`jsx`语法的转译，所以项目中涉及到`element-ui`的模块（包括`components/modify-component/`等目录下，修改过的`el-xxx`组件），**仍需**使用`babel`进行转译和兼容。

#### 寻址优化

寻址优化是`webpack`的传统优化手段之一，即通过合理设置 loader 的`exclude`和`include`属性，**只对必要的模块执行解析**，减少构建的任务量。

**开发模式**下，由于开发者自己使用较新的浏览器版本，不需要对`es6+`的语法进行兼容，仅转译浏览器原生不支持的`jsx`语法即可。配置`babel-loader`，只处理包含`jsx`语法的模块，其他原生 JS 文件和`.vue`文件生成的 JS 模块则不经过 loader。

```js
// build\webpack.dev.js
{
	test: /.m?jsx?$/,
	loader: 'babel-loader',
	// 开发模式下，只需转译使用了 JSX 的模块
	include: [
		// 所有使用了 JSX 语法的模块
		// module1
		// module2
		// ...
	],
	options: {
		presets: [
			'@vue/babel-preset-jsx'
		]
	}
}
```

**生产模式**下，为了兼容性，应针对所有使用了浏览器原生不支持的语法（如`jsx`）和**高于**`es2015`版本语法的 JS 模块进行转译。

```js
// build\webpack.prod.js
const configureBabelLoader = () => ({
  test: /.m?jsx?$/,
  loader: 'babel-loader',
  // babel 用于处理 element-ui 相关组件
  include: [
    // 所有使用了 JSX 语法的模块
    // module1
    // module2
    // ...
  ],
  options: {
    presets: [
      '@vue/babel-preset-jsx',
      [
        '@babel/preset-env',
        {
          targets: {
            // Chorme 58 和 Edge 14 分别是其完全支持 es2015 的最早版本
            chrome: '58',
            edge: '14',
          },
        },
      ],
    ],
  },
})

const configureESBuildLoader = () => ({
  test: /\.m?js$/,
  loader: 'esbuild-loader',
  // esbuild 用于处理 element-ui 以外的所有 JS 模块
  include: [
    // 所有未使用 JSX 语法的 JS 模块
    // module1
    // module2
    // ...
  ],
  exclude: [
    // 排除使用了 JSX 语法的模块
  ],
  options: {
    // 生产模式下，需要兼容到 es2015 语法
    target: 'es2015',
  },
})
```

#### 生产构建关闭 ESLint

在构建时，`eslint`提供的代码静态检查会占据不少时间，而这些提示信息在**生产构建阶段**价值不大。因此在生产构建时，移除`eslint`。

#### 生产模式不生成 SourceMap

SourceMap 是结合浏览器 DevTool 将打包产物映射回源码的工具文件，在构建时生成和输出 SourceMap 会耗费**大量时间**，且产物占据**大量内存**，考虑到项目没有**远程调试**的需求，应当可以移除 SourceMap。

```js
\build\webpack.prod.js

{
	devtool: false // 关闭 SourceMap
	// ...
}
```

另外，`vite`在生产构建[默认](https://vitejs.dev/config/build-options.html#build-sourcemap)不生成 SourceMap，也可作为本项改动的理论支撑之一。

#### `webpack 4`版本特定的一些优化

> Reference
>
> - [Performance#webpack-4-performance-tricks](https://survivejs.com/webpack/optimizing/performance/#webpack-4-performance-tricks)

##### 垃圾回收 (GC)

> Reference
>
> - [Speeding Up Webpack, Typescript Incremental Builds by 7x | Enemy #3: Garbage Collection](https://medium.com/@kenneth_chau/speeding-up-webpack-typescript-incremental-builds-by-7x-3912ba4c1d15#0e6c)

`webpack 4`使用**全局**的`string.replace(/.../g, '...')`来生成控制台信息，这会导致**大量**的垃圾回收。

> 虽然 V8 的垃圾回收进程是**并行**的，但其采用**管线化**的 IPC 方式，所以 GC 仍会带来较大的**进程间通信开销**。

开发模式下，关闭控制台输出模块路径信息的功能：

```js
// build\webpack.dev.js
{
  // ...
  output: {
    pathinfo: false // Tell webpack not to include comments in bundles with information about the contained modules.
    // ...
  }
}
```

而`webpack`在生产模式下默认不展示`pathinfo`，不需要另外配置。

##### 关闭开发模式下的一些默认优化

将`optimization`及其`splitChunks`、`removeEmptyChunks`设置为`false`可提升`webpack 4`**开发**环境下的性能。

```js
// build\webpack.dev.js
{
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false
			}
		},
		removeEmptyChunks: false
	}
}
```

#### 文件级缓存

使用`hard-source-webpack-plugin`，为模块提供中间缓存（于磁盘中），应用后会使**第一次构建速度变慢**（因为要生成磁盘文件和`hash`），而后续构建速度会**大大提升**。

对于迁移后的 v2，首次构建会生成大约 250 MB 的缓存文件，但后续构建速度**提升非常夸张**。

> **注意**：
> `hard-source-webpack-plugin`与`speed-measure-webpack-plugin`不兼容，故目前为了测量构建速度，未开启`hard-source-webpack-plugin`。

### 迁移到 Vue 2.7

更新依赖：

- `vue`：`^2.5.3` ==> `^2.7.14`
- `vue-template-compiler`：移除。
  - `vue 2.7`已不需要该依赖。

迁移后，经测试可使用 Vue 2.x 版本的 Composition API 和`<script setup>`语法。

由于项目对`element-ui`的一些组件进行了重写，而`element-ui`的源码后续更新时**变动较大**，所以不能直接将`element-ui`也升级到最新版本。

> **注意**：
>
> 因与迁移`webpack`的工程化意义不同，迁移`vue`属于更偏应用层的更新，可在团队对业务代码层有**额外的明确需求**时再进行，如：
>
> - 为了更好的代码组织、逻辑复用或向 Vue 3 过渡，从 Options API 迁移到 Composition API；
> - 为提高项目的可维护性，加入 TypeScript；
> - ...
>
> 但如果实际迁移到 Vue 2.7，应该也能稍微提升构建效率，因为不再需要配置`webpack`为 Node.js 注入 polyfill。

### Bug Fixing

#### `js-base64`幽灵依赖问题

[幽灵依赖](https://rushjs.io/pages/advanced/phantom_deps/)（Phantom Dependencies）是指由于`node_modules`扁平的文件结构设计，在`package.json`中**未声明**的依赖却可以被单独显式引入的依赖。

在 v2 中，`js-base64`在一些组件中被显式引入，但`package.json`中未对其声明，这是`postcss`依赖于`js-base64`所导致。本次迁移中将`js-base64^2.6.4`加入依赖。

## Benchmarking

### Methodology

> Reference:
>
> - [Benchmarking Vite vs. Next + turbopack HMR performance](https://github.com/yyx990803/vite-vs-next-turbo-hmr)

开发模式，冷启动：

- 运行`npm run dev`，记录`webpack-cli`在控制台打印的信息即可。

HMR：

- 服务端（DevServer）- 记录控制台`webpack-cli`打印的构建时间即可。
  - Root - 在`App.vue`添加`HMR-n`（n from 1 to 5），记录每次 recompile 用时；
  - Leaf - 在`xxx.vue`修改`姓名`为`姓名n`（n from 1 to 5），记录每次 recompile 用时。
- 客户端（Browser）- 另开一个 node 进程，通过`fs.watch()`监听文件修改并打印时间戳，求与客户端渲染时间戳的**差值**。
  - Root - 在`App.vue`添加`n-{{Date.now()}}`（n from 1 to 5），记录控制台与客户端显示时间戳；
  - Leaf - 在`xxx.vue`添加`n-{{Date.now()}}`（n from 1 to 5），记录控制台与客户端显示时间戳。

> 监听文件修改的脚本：
>
> ```js
> // watch.js
> // `node watch.js`运行即可
> const fs = require('fs')
>
> fs.watch('./src/App.vue', (e, filename) => {
>   console.log(Date.now(), filename)
> })
>
> fs.watch('./src/views/taskmanager/task/task.vue', (e, filename) => {
>   console.log(Date.now(), filename)
> })
> ```

生产模式，打包：

- 运行`npm run build`，记录`webpack-cli`在控制台打印的信息即可。

### Comparison

#### Dev

- 迁移前（`main`分支，`#38fc8`版本）：

<table>
    <thead>
    	<tr>
            <th>Times</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>Average</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
            <th>Cold Start (ms)</th>
            <td>98272</td>
            <td>93993</td>
            <td>89986</td>
            <td>94089</td>
            <td>84342</td>
            <td>92136</td>
        </tr>
        <tr>
            <th>HMR Server Root (ms)</th>
            <td>2714</td>
            <td>2729</td>
            <td>2536</td>
            <td>2567</td>
            <td>2324</td>
            <td>2574</td>
        </tr>
        <tr>
            <th>HMR Server Leaf (ms)</th>
            <td>2961</td>
            <td>2836</td>
            <td>2928</td>
            <td>2628</td>
            <td>2602</td>
            <td>2791</td>
        </tr>
        <tr>
            <th>HMR Client Root (ms)</th>
            <td>3927</td>
            <td>3657</td>
            <td>3691</td>
            <td>3609</td>
            <td>3512</td>
            <td>3679</td>
        </tr>
        <tr>
            <th>HMR Client Leaf (ms)</th>
            <td><del>9688</del></td>
            <td>4015</td>
            <td>3962</td>
            <td>3480</td>
            <td>4067</td>
            <td>3881</td>
        </tr>
    </tbody>
</table>

- 迁移后（`migrate2webpack@4`分支，`#26b08`版本）：

<table>
    <thead>
    	<tr>
            <th>Times</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>Average</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
            <th>Cold Start (ms)</th>
            <td>44887</td>
            <td>45776</td>
            <td>42537</td>
            <td>42784</td>
            <td>47785</td>
            <td>44754 <strong>(51% faster)</strong></td>
        </tr>
        <tr>
            <th>HMR Server Root (ms)</th>
            <td>840</td>
            <td>759</td>
            <td>616</td>
            <td>646</td>
            <td>611</td>
            <td>694 <strong>(73% faster)</strong></td>
        </tr>
        <tr>
            <th>HMR Server Leaf (ms)</th>
            <td>1019</td>
            <td>766</td>
            <td>788</td>
            <td>745</td>
            <td>685</td>
            <td>800 <strong>(71% faster)</strong></td>
        </tr>
        <tr>
            <th>HMR Client Root (ms)</th>
            <td>1382</td>
            <td>1156</td>
            <td>1188</td>
            <td>1096</td>
            <td>1070</td>
            <td>1178 <strong>(68% faster)</strong></td>
        </tr>
        <tr>
            <th>HMR Client Leaf (ms)</th>
            <td>1588</td>
            <td>1747</td>
            <td>1293</td>
            <td>1236</td>
            <td>1276</td>
            <td>1428 <strong>(65% faster)</strong></td>
        </tr>
    </tbody>
</table>

#### Prod

- 迁移前（`main`分支，`#e1b47c6`版本）：

<table>
    <thead>
    	<tr>
            <th>Times</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>Average</th>
        </tr>
    </thead>
    <tbody>
    	 <tr>
            <th>Build Time (s)</th>
            <td>125.45</td>
            <td>173.37</td>
            <td>171.40</td>
            <td>181.32</td>
            <td>140.26</td>
            <td>153.77</td>
            <td>157.60</td>
        </tr>
    </tbody>
</table>

- 迁移后（`migrate2webpack@4`分支，`#8333ce4`版本）：

<table>
    <thead>
    	<tr>
            <th>Times</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>Average</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
            <th>Build Time (s)</th>
            <td>77.99</td>
            <td>71.34</td>
            <td>98.76</td>
            <td>64.17</td>
            <td>73.88</td>
            <td>88.27</td>
            <td>79.07 <strong>(49.83% faster)</strong></td>
        </tr>
    </tbody>
</table>

## Miscellaneous

### 构建产物优化

#### 分离`webpack`运行时

> Reference:
>
> - [Separating a Runtime (survivejs.com)](https://survivejs.com/webpack/optimizing/separating-runtime/)

`webpack`运行时（runtime）包含了项目**初始**需要加载哪些文件的清单（manifest），当需要加载的文件名（`hash`）改变时，运行时会使旧版的文件**失效**。

结合为产物命名添加的`hash`，将运行时单独分离出来可促使对**客户端缓存**的有效利用。

```js
// build\webpack.prod.js
{
  // ...
  optimization: {
    // ...
    runtimeChunk: {
      name: 'runtime'
    }
  }
}
```

这个策略与 v2 原本分离的`manifest`块作用基本一致。

### Bundle Splitting

#### Vendor separating

在原本的 v2 项目中，将所有来自`node_modules`的依赖都打包到一个`vendor`块中，这会生成一个**体积庞大**的 JS 文件，且这个 JS 文件将在项目**启动**时就会被加载，导致首屏性能下降，但可提升后续访问性能。

由于该配置有利有弊，故迁移后依然**保留**了这个配置：

```js
// build\webpack.prod.js
{
	// ...
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: 'vendor',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'initial',
					priority: 0
				},
				// ... other chunks
			}
		}
	}
}
```

实际上，`webpack 4`在生产模式下已经**默认**启用了一种[分块策略](https://webpack.js.org/plugins/split-chunks-plugin/#defaults)，这种策略已经可以满足大部分情况下的构建需要。

> <details>
> 	<summary><code>webpack 4</code>生产模式下的默认分块策略</summary>
> 	<ul>
>         <li>可被共享的代码块<strong>或</strong>来自<code>node_modules</code>的模块；</li>
>         <li>压缩前，体积超过 20kb 的代码块；</li>
>         <li>按需的最大并行请求数低于等于 30；</li>
>         <li>首屏加载的最大并行请求数低于等于 30。</li>
>     </ul>
> </details>

可由团队协商后，决定是继续沿用该策略还是使用`webpack 4`自带的分块策略。

#### CSS extraction

v2 原本通过`extract-text-webpack-plugin`将项目的**所有** CSS 代码提取到**单独**一个文件中，与上面的`vendor`一样，其导出的 CSS 文件**体积庞大**，将阻塞应用的首屏渲染。

迁移后，由于`extract-text-webpack-plugin`在`webpack 4`中被废弃，改用`mini-css-extract-plugin`在生产环境下进行 CSS 处理，而`mini-css-extract-plugin`的[设计理念](https://github.com/webpack-contrib/mini-css-extract-plugin#mini-css-extract-plugin-1)就在于为**每个**包含 CSS 代码的 JS 文件生成**单独**的 CSS 文件，以提供异步加载、提高客户端缓存利用等特性。

> `vite`也针对 CSS [默认](https://vitejs.dev/config/build-options.html#build-csscodesplit)开启了**分块**策略，而不是将整个项目的 CSS 提取到单个文件中。

与上面的 Vendor Separating 相同，目前仍**保留**了这个配置，迁移后通过配置`webpack 4`的`SplitChunksPlugin`实现：

```js
// build\webpack.prod.js
{
	// ...
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.(css)|(styl(us)?)|(vue)$/,
					chunks: 'all',
					priority: 5
				},
				// ... other chunks
			}
		}
	}
}
```

> **注意**：
>
> 可能是由于`webpack 4`中`SplitChunksPlugin`的固有特性，该配置在提取 CSS 之外，引入了将**相关 JS 模块**也合并在一起的**副作用**。在`webpack 5`中，该副作用貌似可以通过用`types: 'css/mini-extract'`代替`test: /\.(css)|(styl(us)?)|(vue)$/`避免。

关于是继续沿用提取唯一一个 CSS 文件还是为每个模块生成单独的 CSS 文件，可由团队在商议并进行测试后决议。

### 关于 ESLint 的配置

在 v1、v2 与 h5 里，只有 v2 是在`webpack`**构建时**启用了 `eslint`的。

> h5 的`eslint`提示是 IDE 读取`.eslintrc.js`并配合 ESLint 扩展所提供的。

```js
// v1 本身就没有安装 eslint 依赖

// h5, build\webpack.base.conf.js
module: {
  rules: [
    ...(config.dev.useEslint ? [] : []), // h5 中，关于是否应用 eslint 的配置处始终返回空数组
  ]
}
```

而 v2 中，原有的`eslint`配置如下：

```js
// .eslintrc.js
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    // ...
  },
  extends: 'eslint:recommended', // 注意此处 extends 配置
  plugins: [
    // 注意此处 plugins 配置
    'html',
    'vue',
  ],
  rules: {
    // custom rules ...
  },
}
```

其中有两个值得注意的点：

- `plugins: ['html', 'vue']` - 将插件`eslint-plugin-html`和`eslint-plugin-vue`接入`eslint`，但这些插件只是为`eslint`提供了静态分析`.html`和`.vue`文件的能力，并**不会自动引入任何规则集**。
- `extends: 'eslint:recommended'` - `extends`选项**只**为`eslint`引入了`eslint:recommended`这一规则集，并**没有引入**`package.json`所声明的包括`eslint-plugin-vue`在内的各插件内置的规则。

且在更新`eslint`相关依赖后，新版的`eslint:recommended`增加了许多`error`等级的规则，导致迁移后构建时**新增许多报错**。因**代码规范**需要整个团队协商决定，故目前在`migrate2webpack@4`分支上**未开启**`eslint-webpack-plugin`，可由团队确定具体措施后，予以开启。

或者也可像 h5 一样，**关闭**构建时的`eslint`，通过 **IDE 扩展**实时地对代码进行静态分析。

> **注意**：
>
> - 在迁移后，考虑到项目需要，`eslint`相关依赖只保留了`eslint-plugin-vue`，为`vue`组件提供的额外规则集，可由团队商议后决定是否应用。
> - 另外，在开发环境下开启`eslint`必然会增加构建工作量、降低构建速度，所以建议开启`eslint-webpack-plugin`的**缓存**配置，这可加快后续的构建效率。
>   - 为`eslint-webpack-plugin`配置`cache: true`，会在 linting 后生成一个`.eslintcache`文件，已在`.gitignore`中声明**忽略**该文件。

## Alternatives

在优化构建效率的过程中，尝试了其他一些来自社区的方法，但由于**效果不佳**，没有应用到最终版本中，现将其列举如下，可后续再考虑是否应用。

### 缓存

使用`cache-loader`对大开销 loader 处理结果进行缓存，构建时对比模块的内容`hash`决定是重新构建还是复用过去结果。

在自己的机器上对`vue-loader`、`css-loader`、`stylus-loader`等几个大开销 loader 应用后效果不佳，故未采用。

猜想可能是引入的`cache-loader`增加了读取和写入文件的开销，使得效率提升不高，可能因机器而异。

### 多线程

使用`happypack`或`thread-loader`为大开销 loader 开启多线程，通过并发提升打包效率。

同样，在自己的机器上对不同的 loader 应用`thread-loader`并应用不同的配置（线程数、线程最大休眠时间等）后，效果并不佳，故未采用。

`thread-loader`开启后，线程和线程之间通信会带来额外的开销，猜想可能是处理`.vue`模块时对`<template>`、`<script>`、`<style>`块的处理需要各线程频繁通信，导致拖慢构建效率。

### `output.futureEmitAssets`

自从 [webpack^4.29](https://github.com/webpack/webpack/releases/tag/v4.29.0)，配置`output.futureEmitAssets = true`可使`webpack 4`应用`webpack 5`的构建逻辑，根据[官方文档](https://v4.webpack.js.org/configuration/output/#outputfutureemitassets)，这会在输出资源后**释放内存**，从而提升构建效率。

> <details>
>     <summary><code>output.futureEmitAssets</code> 的作用</summary>
>     <ul>
>         <li><code>Compilation.assets</code>中的资源被替换为<code>SizeOnlySource</code>；</li>
> 		<li>不允许生成资源后再读取资源；</li>
> 		<li>这使得内存可以被<strong>垃圾回收</strong>。</li>
>     </ul>
> </details>

在自己引入后，发现开发环境下的构建效率并未提高；而生产环境若使用 CI/CD 的模式进行发包（即每次都是**全新的环境**），则对内存的清理并不重要，故未采用。

> **注意**：
>
> 官方文档提到，开启这个配置可能导致那些会**假定之前输出的资源仍在内存中**的插件出错，但这类插件在整个生态中的占比**非常小**，且该逻辑在`webpack 5`中已是**默认开启**的，所以如果决定启用该配置，并不需要在插件适配上有太多顾虑。

### Node polyfills

原来配置的 boilerplate 中为`vue`配置了一些 Node.js 模块的 polyfill，注入 polyfill 会导致降低构建速度且使构建产物体积增大，在将`vue`升级到`vue^2.7`后，便可以将其完全移除。

## Drawbacks

- 本次优化是针对项目宏观层面的，虽然构建成功，但不能保障每个运行时不出错，而这可能需要对 v2 相关业务做全面的测试才能得知；
- 本次优化是仅针对 v2 的，并将`node.js`的版本升至`^14.20.0`，与 v1 差距较大，若发布生产时 v1、v2 使用统一的`node`环境，则 v1 的构建可能出错。

## Adoption strategy

本次迁移在`migrate2webpack@4`分支上开发，在团队进行评估，并通过开发、生产环境的测试后，可选取一个版本合并该分支。

### 关于测试

- 由于该迁移是对整个 v2 前端基础设施的升级，与**具体业务无关**，所以可能需要特殊的测试策略。

### 合并流程

以下提供一种合并设想，假设目标版本分支为`target-branch`:

1. `git checkout migrate2webpack@4`，切换到`migrate2webpack@4`分支；
2. `git rebase target-branch`，将迁移相关提交提升至历史栈顶；
3. `git reset --soft <hash-of-the-last-commit-on-target-branch>`，将迁移相关提交还原至暂存区；
4. `git commit -m 'migration: migrate webpack 3 to webpack 4'`，合并所有迁移相关修改到一次提交中，避免污染提交历史；
   - 原本的提交中一些地方包含了修改相关的**注释**，若有必要，可以`migrate2webpack@4`为原型新建一个分支，备份原来的提交信息；
5. `git checkout target-branch`，切换到`target-branch`；
6. `git merge migrate2webpack@4`，将迁移代码合并到该版本，后续合并到开发分支上。

> **注意**：
>
> - `migrate2webpack@4`分支最后一次`rebase`的目标是`main #5238cfb1`。
