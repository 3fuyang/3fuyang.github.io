import{j as s}from"./jsx-runtime-f0839969.js";const o="JavaScript 的事件循环（Event Loop）",c="2022-09-03T18:42:00.000+08:00",x="JS Event Loop，抄 Jake Archibald 的，当然也有抄其他。",i="zh",a="4min",p="/blog/js-event-loop",n=function({children:e}){return s.exports.jsx("article",{className:"prose",children:e})};function t(r){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",p:"p",strong:"strong",ul:"ul",code:"code",blockquote:"blockquote",pre:"pre",span:"span",h2:"h2"},r.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsxs(e.li,{className:"toc-item toc-item-h1",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#javascript-的事件循环event-loop",children:"JavaScript 的事件循环（Event Loop）"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-2",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#什么会创建宏任务macrotask",children:"什么会创建宏任务（macrotask）？"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#什么会创建微任务microtask",children:"什么会创建微任务（microtask）？"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#什么是空的执行栈",children:"什么是空的执行栈？"})})]})]})})}),`
`,s.exports.jsx(e.h1,{id:"javascript-的事件循环event-loop",children:"JavaScript 的事件循环（Event Loop）"}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"参考资料"}),"："]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.a,{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly",children:"Tasks, microtasks, queues and schedules - JakeArchibald.com"})}),`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.a,{href:"https://www.tangshuang.net/7617.html",children:"浏览器事件循环机制_唐霜的博客 (tangshuang.net)"})}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["JavaScript 是一门",s.exports.jsx(e.strong,{children:"单线程同步"}),"编程语言，任务只能在主线程上一个一个",s.exports.jsx(e.strong,{children:"串行"}),"地执行。"]}),`
`,s.exports.jsxs(e.p,{children:["为了让多类型的任务在主线程上有条不紊地执行，JavaScript 引入了",s.exports.jsx(e.strong,{children:"任务队列"}),"（Task Queue）和",s.exports.jsx(e.strong,{children:"事件循环"}),"（Event Loop）。"]}),`
`,s.exports.jsxs(e.p,{children:["虽然 JS 为单线程，但一个页面（tab）是",s.exports.jsx(e.strong,{children:"多线程"}),"的，其中最主要的是 JS 引擎线程（V8）、GUI 渲染引擎线程。"]}),`
`,s.exports.jsxs(e.p,{children:["每一个线程有",s.exports.jsx(e.strong,{children:"自己的"}),"事件循环，且",s.exports.jsx(e.strong,{children:"同源"}),"的多个",s.exports.jsx(e.strong,{children:"窗口"}),"之间",s.exports.jsx(e.strong,{children:"共享"}),"一个事件循环，因此它们可以同步地通信。"]}),`
`,s.exports.jsxs(e.p,{children:["一个事件循环有",s.exports.jsx(e.strong,{children:"多个"}),"任务源（source），这些源维护它们内部任务的执行次序，但浏览器每次循环（每一次循环被称为一",s.exports.jsx(e.code,{children:"Tick"}),"）会",s.exports.jsx(e.strong,{children:"挑选一个源"}),"，从中取出一个任务。这使得浏览器能优先考虑",s.exports.jsx(e.strong,{children:"性能敏感"}),"的任务，比如用户输入。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"任务"}),"是设置（scheduled）好的，因此浏览器能从其内部进入 JavaScript/DOM 域，以确保这些行为是顺序发生的。在任务之间，浏览器可能会进行渲染更新。"]}),`
`,s.exports.jsxs(e.p,{children:["从一次鼠标点击中获取事件回调就需要设置一个任务，同样，解析 HTML、",s.exports.jsx(e.code,{children:"setTimeout"}),"也是。"]}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"微任务"}),"（Microtasks）一般是应该在当前执行的脚本完成后，立即发生的行为，它们可能有点",s.exports.jsx(e.strong,{children:"异步"}),"，但不创建新的任务。"]}),`
`,s.exports.jsxs(e.p,{children:["当执行栈中的任务执行完毕，没有其他的 JS 正在主线程运行时，微任务将被处理。在微任务中创建的微任务也会被添加到当前任务的",s.exports.jsx(e.strong,{children:"微任务队列"}),"中。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:["注意：当引擎遇到一个微任务后，会在将其加入微任务队列后，",s.exports.jsx(e.strong,{children:"跳过"}),"其整体表达式的执行。"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-javascript",children:[s.exports.jsx(e.span,{className:"hljs-title class_",children:"Promise"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"resolve"}),`()
	`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// microtask1"}),`
	.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"then"}),"(",s.exports.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'promise1'"}),`)
	})
	`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// microtask2"}),`
    .`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"then"}),"(",s.exports.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {
        `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'promise2'"}),`)
    })

`,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'end'"}),`)
`]})}),`
`,s.exports.jsxs(e.p,{children:["上述代码中，当引擎遇到",s.exports.jsx(e.code,{children:"microtask1"}),"时，将其加入微任务队列，但此时不会",s.exports.jsx("del",{children:"扫描"}),"将",s.exports.jsx(e.code,{children:"microtask2"}),"注册到微任务队列中（因为前一个 promise 还未落定）；在执行完脚本后，取出",s.exports.jsx(e.code,{children:"microtask1"}),"执行，此时才扫描到",s.exports.jsx(e.code,{children:"microtask2"}),"，将其加入微任务队列。"]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["由于执行微任务可以引入新的微任务，且这些微任务都会在当前宏任务下执行完毕，所以微任务可能一直占用当前的引擎，",s.exports.jsx(e.strong,{children:"无限阻塞"}),"接下来的宏任务。"]}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/js-event-loop/warning.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/js-event-loop/warning.webp"}),s.exports.jsx("img",{width:"837",height:"199",src:"/images/js-event-loop/warning.jpg",alt:"warning",rel:"noreferrer",className:"invertable"})]}),s.exports.jsx("figcaption",{children:"微任务可以产生新的微任务，阻塞后续宏任务"})]}),`
`,s.exports.jsx(e.h2,{id:"什么会创建宏任务macrotask",children:"什么会创建宏任务（macrotask）？"}),`
`,s.exports.jsx(e.p,{children:"常见的："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["直接执行一个新的 JavaScript 程序或子程序时（比方说从控制台、一个",s.exports.jsx(e.code,{children:"<script>"}),"元素 / JS 文件中）。"]}),`
`,s.exports.jsxs(e.li,{children:["触发一个 UI 交互事件时，",s.exports.jsx(e.strong,{children:"事件的处理回调"}),"（event handler callback）将加入宏任务队列。"]}),`
`]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:s.exports.jsx(e.strong,{children:"注意："})}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["由事件冒泡或捕获导致的多个事件处理回调属于",s.exports.jsx(e.strong,{children:"同一个"}),"宏任务。"]}),`
`,s.exports.jsxs(e.li,{children:["JS 命令式触发的事件",s.exports.jsx(e.strong,{children:"也会传播"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:["在宏任务中，只要",s.exports.jsx(e.strong,{children:"执行栈"}),"（JS Stack）不为空，就无法开始",s.exports.jsx(e.strong,{children:"执行微任务"}),"，要注意用",s.exports.jsx(e.strong,{children:"顶级函数调用"}),"触发微任务的情况。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["当一个定时器（",s.exports.jsx(e.code,{children:"setTimeout()"}),"、",s.exports.jsx(e.code,{children:"setInterval()"}),"）到达时，其",s.exports.jsx(e.strong,{children:"回调"}),"被加入到宏任务队列中。"]}),`
`]}),`
`,s.exports.jsx(e.p,{children:"不常见的："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsxs(e.p,{children:["Node.js API ",s.exports.jsx(e.code,{children:"setImmediate"}),"的回调会加入到宏任务队列。"]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsxs(e.p,{children:["负责 Worker 或 Window 之间通信的",s.exports.jsx(e.code,{children:"portMessage"}),"回调。"]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsx(e.p,{children:"MessageChannel、I/O ..."}),`
`]}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"什么会创建微任务microtask",children:"什么会创建微任务（microtask）？"}),`
`,s.exports.jsx(e.p,{children:"常见的："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["Promise 对象用",s.exports.jsx(e.code,{children:"then()"}),"注册的回调。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"async/await"}),"中的",s.exports.jsx(e.code,{children:"await"}),"语句（statement）。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"MutationObserver"}),"的回调。"]}),`
`]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"注意"}),"：当前宏任务下有",s.exports.jsx(e.code,{children:"pending"}),"状态的",s.exports.jsx(e.code,{children:"MutationObserver"}),"回调时，",s.exports.jsxs(e.strong,{children:["不会为其他",s.exports.jsx(e.code,{children:"MutationObserver"}),"回调再创建新的微任务"]}),"。"]}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/js-event-loop/mid-execution.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/js-event-loop/mid-execution.webp"}),s.exports.jsx("img",{width:"849",height:"609",alt:"mid-execution",rel:"noreferrer",src:"/images/js-event-loop/mid-execution.jpg"})]}),s.exports.jsx("figcaption",{children:"MutationObserver 的特殊异步处理"})]}),`
`]}),`
`,s.exports.jsx(e.p,{children:"不常见的："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["Node.js 中的",s.exports.jsx(e.code,{children:"process.nextTick()"}),"的回调。"]}),`
`]}),`
`,s.exports.jsxs(e.h2,{id:"什么是空的执行栈",children:["什么是",s.exports.jsx(e.strong,{children:"空"}),"的执行栈？"]}),`
`,s.exports.jsxs(e.p,{children:["上文中提到，微任务只在当前宏任务完成，且",s.exports.jsx(e.strong,{children:"执行栈为空"}),"时，开始执行。"]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:"Microtasks execute in order, and are executed:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["after every callback, as long as ",s.exports.jsx(e.strong,{children:"no other JavaScript is mid-execution"})]}),`
`,s.exports.jsx(e.li,{children:"at the end of each task."}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["对执行栈的认识离不开",s.exports.jsx(e.strong,{children:"作用域"}),"（Scoping）这个概念，一般来说，我们认为执行栈以",s.exports.jsx(e.strong,{children:"函数调用"}),"为单位，将其以",s.exports.jsx(e.strong,{children:"上下文帧"}),`的形式压入栈中,
每一帧包含函数的`,s.exports.jsx(e.strong,{children:"作用域"}),"。"]}),`
`,s.exports.jsxs(e.p,{children:["在我的理解里，如果出现",s.exports.jsx(e.strong,{children:"闭包"}),"（或其他对上层作用域的引用）时，那个包含被引用值的上下文就",s.exports.jsx(e.strong,{children:"无法"}),`出栈，即使它的函数体已经被完全执行（evaluated）,
其上下文依然存在执行栈中，这种情况下的执行栈是否该被认为是空？`]}),`
`,s.exports.jsx(e.p,{children:"下面是一个该情境的例子："}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// script.js"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," ref = ",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Promise"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"resolve"}),") =>"]}),` {
  `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'executor fire'"}),`)

  `,s.exports.jsx(e.span,{className:"hljs-built_in",children:"setTimeout"}),"(",s.exports.jsx(e.span,{className:"hljs-function",children:"() =>"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"resolve"}),`(ref))

  `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'executor done'"}),`)
}).`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"then"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"val"}),") =>"]}),` {
  `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsxs(e.span,{className:"hljs-string",children:["`promise 1: ",s.exports.jsx(e.span,{className:"hljs-subst",children:"${val}"}),"`"]}),`)
})
  
`,s.exports.jsx(e.span,{className:"hljs-title class_",children:"Promise"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"resolve"}),"(",s.exports.jsx(e.span,{className:"hljs-number",children:"2"}),").",s.exports.jsx(e.span,{className:"hljs-title function_",children:"then"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"val"}),") =>"]})," ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsxs(e.span,{className:"hljs-string",children:["`promise 2: ",s.exports.jsx(e.span,{className:"hljs-subst",children:"${val}"}),"`"]}),`))
  
`,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"'script ends'"}),`)

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// output:"}),`
`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 1. executor fire"}),`
`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 2. executor done"}),`
`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 3. script ends"}),`
`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 4. promise 2: 2"}),`
`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 5. promise 1: 1"}),`
`]})}),`
`,s.exports.jsxs(e.p,{children:["其中，在 script 中产生的 timeout 宏任务引用了 script 作用域中的",s.exports.jsx(e.code,{children:"ref"}),`变量，那么在 evaluate 完 script 后,
script 作用域还保留在执行栈中，但第二个 promise 产生的微任务却被执行了。并且由于第二个 promise 是一个初始化时就已经 fulfilled
的`,s.exports.jsx(e.code,{children:"Promise.resolve()"}),"，所以其",s.exports.jsx(e.code,{children:"then()"}),"回调在自上而下执行 script 时就已经被推入微任务队列。"]}),`
`,s.exports.jsxs(e.p,{children:["上面的结果可以说明，一个执行上下文帧在执行栈中",s.exports.jsx(e.strong,{children:"保留"}),"并不代表 JS 代码",s.exports.jsx(e.strong,{children:"正在执行"}),"（mid-execution），关于作用域与上下文的知识，自己还需要更深入地了解。"]})]})}function h(r={}){return s.exports.jsx(n,Object.assign({},r,{children:s.exports.jsx(t,r)}))}export{c as date,h as default,x as description,a as duration,i as lang,p as path,o as title};
