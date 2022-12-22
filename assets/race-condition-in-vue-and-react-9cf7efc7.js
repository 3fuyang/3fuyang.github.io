import{j as s}from"./jsx-runtime-f0839969.js";const l="Vue 与 React 与竞态问题",c="2022-10-18T21:07:00.000+00:00",a="zh",o="3min",x="/blog/race-condition-in-vue-and-react";function t(n){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",blockquote:"blockquote",h2:"h2",ul:"ul",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",em:"em"},n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsxs(e.li,{className:"toc-item toc-item-h1",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#vue-与-react-与竞态问题",children:"Vue 与 React 与竞态问题"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-2",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#reference",children:"Reference"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#竞态问题race-condition",children:"竞态问题（Race Condition）"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#react-处理竞态问题",children:"React 处理竞态问题"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#vue-处理竞态问题",children:"Vue 处理竞态问题"})})]})]})})}),`
`,s.exports.jsx(e.h1,{id:"vue-与-react-与竞态问题",children:"Vue 与 React 与竞态问题"}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.h2,{id:"reference",children:"Reference"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.a,{href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect#fetching-data",children:"You Might Not Need An Effect"})}),`
`,s.exports.jsx(e.li,{children:"《Vue.js 设计与实现》"}),`
`]}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"竞态问题race-condition",children:"竞态问题（Race Condition）"}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"竞态问题"}),'是异步编程的典型问题，两个请求相互"竞争"，最后以',s.exports.jsx(e.strong,{children:"无法预料"}),"的顺序返回或解决。"]}),`
`,s.exports.jsx(e.p,{children:'在处理竞态问题上，Vue 和 React 都用到了"过期标志"的方法。'}),`
`,s.exports.jsx(e.h2,{id:"react-处理竞态问题",children:"React 处理竞态问题"}),`
`,s.exports.jsxs(e.p,{children:["在 ",s.exports.jsx(e.a,{href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect#fetching-data",children:"You Might Not Need An Effect"}),` 中,
React 为竞态问题举了一个"搜索框"的例子。`]}),`
`,s.exports.jsxs(e.p,{children:["假设用户对单词",s.exports.jsx(e.code,{children:'"hello"'}),`以一种完美的、绕过你自信的防抖或者节流策略的节奏敲下键盘,
那么`,s.exports.jsx(e.code,{children:'"h"'}),"、",s.exports.jsx(e.code,{children:'"he"'}),"、",s.exports.jsx(e.code,{children:'"hel"'}),"、",s.exports.jsx(e.code,{children:'"hell"'}),"、",s.exports.jsx(e.code,{children:'"hello"'}),"都将触发不同的 data fetching。"]}),`
`,s.exports.jsx(e.p,{children:"显然它们返回响应的时间是无法预测的，不能简单地以最后一个响应（它可能是过期的）为准。"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"SearchResults"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"{ query }"}),`) {
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," [results, setResults] = ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"useState"}),`([])
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," [page, setPage] = ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"useState"}),"(",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`)

  `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"useEffect"}),"(",s.exports.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Look"}),`
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// A race condition"}),`
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Right here"}),`
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"fetchResults"}),"(query, page).",s.exports.jsx(e.span,{className:"hljs-title function_",children:"then"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"json"}),") =>"]}),` {
      `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"setResults"}),`(json)
    })
  }, [query, page])
}
`]})}),`
`,s.exports.jsx(e.p,{children:"对此，React 要求开发者自己为 Effects 手动设置正确的 cleanup 函数。"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"SearchResults"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"{ query }"}),`) {
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," [results, setResults] = ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"useState"}),`([])
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," [page, setPage] = ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"useState"}),"(",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`)

  `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"useEffect"}),"(",s.exports.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// a stale flag"}),`
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," ignore = ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`

    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"fetchResults"}),"(query, page).",s.exports.jsx(e.span,{className:"hljs-title function_",children:"then"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"json"}),") =>"]}),` {
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Apply the results only when it's not expired"}),`
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"}),` (!ignore) {
        `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"setResults"}),`(json)
      }
    })

    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// cleanup function"}),`
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// re-rendering means current fetch is expired"}),`
      ignore = `,s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`
    }
  }, [query, page])
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["在这个模式（pattern）中，当",s.exports.jsx(e.code,{children:"query"}),"改变导致",s.exports.jsx(e.code,{children:"<SearchResults />"}),"被重新渲染时，Effect 的 cleanup 函数标记其请求已经",s.exports.jsx(e.strong,{children:"过期"}),"（",s.exports.jsx(e.code,{children:"ignore = true"}),`）,
这样，当客户端收到响应时，便不会采用该过期的响应。`]}),`
`,s.exports.jsxs(e.p,{children:["这种模式运用",s.exports.jsx(e.strong,{children:"闭包"}),"（",s.exports.jsx(e.code,{children:"let ignore"}),"）对",s.exports.jsx(e.strong,{children:"异步"}),"代码（",s.exports.jsx(e.code,{children:"then()"}),"）进行了分支。当然，它只是",s.exports.jsx(e.strong,{children:"丢弃"}),"了过期的数据，并不能阻止",s.exports.jsx(e.strong,{children:"发送请求"}),"。"]}),`
`,s.exports.jsx(e.h2,{id:"vue-处理竞态问题",children:"Vue 处理竞态问题"}),`
`,s.exports.jsxs(e.p,{children:["在《Vue.js 设计与实现》的 ",s.exports.jsx(e.em,{children:"4.11 过期的副作用"})," 中，以",s.exports.jsx(e.code,{children:"watch"})," API 为例讲述了 Vue 内部对竞态问题的处理。"]}),`
`,s.exports.jsxs(e.p,{children:["在下面的片段中，短时间内多次操作",s.exports.jsx(e.code,{children:"obj"}),"也会发起多次 data fetching，产生竞态问题。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"}),` finalData

`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"watch"}),"(obj, ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"}),` () => {
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 发送并等待网络请求"}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," res = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"await"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'/path/to/request'"}),`)
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 将请求结果赋值给 data"}),`
  finalData = res
})
`]})}),`
`,s.exports.jsxs(e.p,{children:["Vue 3 为这种情况专门提供了一个类似于 cleanup 函数的",s.exports.jsx(e.code,{children:"onInvalidate"}),"，它是",s.exports.jsx(e.code,{children:"watch"}),"回调的第三个可选参数，是一个用来",s.exports.jsx(e.strong,{children:"注册回调函数"}),"的函数。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"onInvalidate"}),"的原理是：在",s.exports.jsx(e.code,{children:"watch"}),"内部每次检测到变更后，在副作用函数执行",s.exports.jsx(e.strong,{children:"之前"}),"，会先调用通过",s.exports.jsx(e.code,{children:"onInvalidate"}),"注册的回调函数。"]}),`
`,s.exports.jsx(e.p,{children:"很容易想到，这和上面 React Effects 的 cleanup 函数原理几乎一模一样。"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-title function_",children:"watch"}),"(obj, ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"}),` (newValue, oldValue, onInvalidate) => {
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," expired = ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`

  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 副作用重新执行之前，执行该回调"}),`
  `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"onInvalidate"}),"(",s.exports.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 闭包"}),`
    expired = `,s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`
  })

  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," res = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"await"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'/path/to/request'"}),`)
  `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// "}),`
  `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"}),` (!expired) {
    finalData = res
  }
})
`]})}),`
`,s.exports.jsxs(e.p,{children:["两者的解决方法几乎",s.exports.jsx(e.strong,{children:"一模一样"}),"，区别只在于 Vue 注册 cleanup 函数的 API 形式较为特殊，是传递给",s.exports.jsx(e.code,{children:"watch"}),`的回调函数的一个类似于 hook 的可选参数,
比起 React 更加的`,s.exports.jsx(e.strong,{children:"集成"}),"，但都应用了",s.exports.jsx(e.strong,{children:"闭包"}),"的思维。"]})]})}function i(n={}){const{wrapper:e}=n.components||{};return e?s.exports.jsx(e,Object.assign({},n,{children:s.exports.jsx(t,n)})):t(n)}export{c as date,i as default,o as duration,a as lang,x as path,l as title};
