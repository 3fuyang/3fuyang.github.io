if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let l={};const o=e=>i(e,n),c={module:{uri:n},exports:l,require:o};s[n]=Promise.all(a.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/client-session-storage.0aadff02.js",revision:null},{url:"assets/critical-rendering-path.713e2cc0.js",revision:null},{url:"assets/csrf-and-xss.569a96e3.js",revision:null},{url:"assets/deep-clone-in-js.b33da9a1.js",revision:null},{url:"assets/empty-object-in-ts.6e589746.js",revision:null},{url:"assets/ErrorBoundary.da0e4a63.js",revision:null},{url:"assets/farewell-my-lovely.01f62090.js",revision:null},{url:"assets/FLink.b0055934.js",revision:null},{url:"assets/Footer.231eb487.js",revision:null},{url:"assets/function-length.a85c2ecb.js",revision:null},{url:"assets/iconBase.aa15baee.js",revision:null},{url:"assets/import-meta-glob-and-auto-routes.d4b3c1c8.js",revision:null},{url:"assets/index.0003c36e.css",revision:null},{url:"assets/index.10a2b453.js",revision:null},{url:"assets/index.14b9c852.js",revision:null},{url:"assets/index.14b9c8522.js",revision:"6eaf4a283535968b114e35e68d8a1436"},{url:"assets/index.26979af3.js",revision:null},{url:"assets/index.2b1fda4e.js",revision:null},{url:"assets/index.2c5a826b.js",revision:null},{url:"assets/index.5ad3c95f.js",revision:null},{url:"assets/index.esm.5b2c0b54.js",revision:null},{url:"assets/index.esm.cf4f9c45.js",revision:null},{url:"assets/index.esm.e2d4d7cd.js",revision:null},{url:"assets/js-array-fill.62960cb8.js",revision:null},{url:"assets/js-event-loop.cddbacf5.js",revision:null},{url:"assets/js-logical-operator.b4ce5b6e.js",revision:null},{url:"assets/js-string-and-regexp.794fdf5a.js",revision:null},{url:"assets/ListPosts.1c2c3a83.js",revision:null},{url:"assets/Loading.392da2b2.js",revision:null},{url:"assets/NavBar.b1fe1230.js",revision:null},{url:"assets/overload-in-ts.2f303586.js",revision:null},{url:"assets/promise-a-plus.801149f2.js",revision:null},{url:"assets/race-condition-in-vue-and-react.599bb3fd.js",revision:null},{url:"assets/regexp-test-undefined.98c558d7.js",revision:null},{url:"assets/RenderedRoutes.f9283661.js",revision:null},{url:"assets/ssg-in-flog.aa74fa0d.js",revision:null},{url:"assets/string-to-ascii.d452f327.js",revision:null},{url:"assets/the-cherry-orchard.7ac25a83.js",revision:null},{url:"assets/this-in-js-prototype-function.adc97497.js",revision:null},{url:"assets/ToggleTheme.6f6c3333.js",revision:null},{url:"assets/ts-non-null-operator.97cbe84a.js",revision:null},{url:"assets/tsconfig-notes.fd17ab68.js",revision:null},{url:"assets/vue-node-mysql-deployment.057056cb.js",revision:null},{url:"index.html",revision:"ea39eaf45fbaded5397968bf56876cba"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"fwio.svg",revision:"1b2b4b9593e79fd162e1387882b0c9c2"},{url:"fwio-apple-touch.png",revision:"19a89ab1cbc3b2f4f86c30fe83ce70ab"},{url:"fwio-192x192.png",revision:"94a41505b3312456e5cd14b38c45eb38"},{url:"fwio-512x512.png",revision:"b7e572316adcac123a6ce8450964c984"},{url:"fwio-maskable-icon-512x512.png",revision:"f3338edfec1f9da05343995762ae6490"},{url:"images/niya.avif",revision:"07d62821c616070a8d578d9c3e80fb40"},{url:"images/niya.jpg",revision:"983bd663ef534a83928dbbe4db146a1b"},{url:"images/niya.webp",revision:"19211f5d1566511b3123b49ccdc23304"},{url:"images/critical-rendering-path/css-mutate-dom.avif",revision:"65181cde83ca48d46e3f7321739d3174"},{url:"images/critical-rendering-path/css-mutate-dom.jpg",revision:"88171147c4b17c44995de3f1dbefc1df"},{url:"images/critical-rendering-path/css-mutate-dom.webp",revision:"5815dbc6ae22be282f51294862e28225"},{url:"images/critical-rendering-path/render.avif",revision:"177afcbec69c144d44b8c64a686e1bac"},{url:"images/critical-rendering-path/render.jpg",revision:"ce77b28ae06ccb8c77edc37a0147c232"},{url:"images/critical-rendering-path/render.webp",revision:"ec57072195c55b83de3db4ef83c51223"},{url:"images/empty-object-in-ts/anyof.avif",revision:"5a26298bf2b8614e6b916093059e88fc"},{url:"images/empty-object-in-ts/anyof.jpg",revision:"39f9fbce3365e66e4a37c7f026481213"},{url:"images/empty-object-in-ts/anyof.webp",revision:"2bbca795959110f8117441fcc37419cf"},{url:"images/import-meta-glob-and-auto-routes/after.avif",revision:"ccbc1cfc85a5c073a23d21b12fc76f67"},{url:"images/import-meta-glob-and-auto-routes/after.jpg",revision:"d3c7165632894746c4f2bb157edb0cee"},{url:"images/import-meta-glob-and-auto-routes/after.webp",revision:"a7f53d1788819b3dac45d88cfd204746"},{url:"images/import-meta-glob-and-auto-routes/before.avif",revision:"0ff0affe1b10eab16a5f4662cd555368"},{url:"images/import-meta-glob-and-auto-routes/before.jpg",revision:"d704ad54f8da41c23d4228d0ad8dc3c2"},{url:"images/import-meta-glob-and-auto-routes/before.webp",revision:"0a2c18aa97fa8b4a172b1835b7a0be65"},{url:"images/import-meta-glob-and-auto-routes/flog-and-ssg.avif",revision:"b2f796056ffcdd371f6c70047eb0ea5f"},{url:"images/import-meta-glob-and-auto-routes/flog-and-ssg.jpg",revision:"aa7ba9bf4c69dc171eea304c4e88492c"},{url:"images/import-meta-glob-and-auto-routes/flog-and-ssg.webp",revision:"49b872b71d80e741989b98f386022309"},{url:"images/js-event-loop/mid-execution.avif",revision:"eca94b880aec92b76424fde0fddcf6b0"},{url:"images/js-event-loop/mid-execution.jpg",revision:"78f5301dd827ffd07b08e1f23c4eff08"},{url:"images/js-event-loop/mid-execution.webp",revision:"1b69d0bd0867e573e77bb386c12089d5"},{url:"images/js-event-loop/warning.avif",revision:"5ddd3011561483cf59558d4e020aabae"},{url:"images/js-event-loop/warning.jpg",revision:"2a05955f3c9b1415544963fc959f1bec"},{url:"images/js-event-loop/warning.webp",revision:"586a588f343a80a42546dfdca5ed0efe"},{url:"images/ssg-in-flog/figure-label.avif",revision:"75fb4fbaca3f6a1b28c4c028f3c83885"},{url:"images/ssg-in-flog/figure-label.jpg",revision:"ced3c7cac9061b7c71aad7e31215d1e3"},{url:"images/ssg-in-flog/figure-label.webp",revision:"ebccedc94e1df90aa15d2c0ac473d72e"},{url:"images/ssg-in-flog/rollup-plugin-hooks.avif",revision:"7a610aa9b96cd9f0801611d8cc59f10d"},{url:"images/ssg-in-flog/rollup-plugin-hooks.jpg",revision:"b6b87728ee7ffe4b04dce205d272014d"},{url:"images/ssg-in-flog/rollup-plugin-hooks.webp",revision:"33c841086941fd60a935cef731c1a4a3"},{url:"images/ssg-in-flog/vite-universal-plugins.avif",revision:"bb85746dd42fccd75d01fcc41b65fb3d"},{url:"images/ssg-in-flog/vite-universal-plugins.jpg",revision:"0014cc136c754825d7c18a41097d535d"},{url:"images/ssg-in-flog/vite-universal-plugins.webp",revision:"8dc31332cea659a0d73dc70ecdabbcaf"},{url:"images/ssg-in-flog/vitepress-router.avif",revision:"b2f796056ffcdd371f6c70047eb0ea5f"},{url:"images/ssg-in-flog/vitepress-router.jpg",revision:"aa7ba9bf4c69dc171eea304c4e88492c"},{url:"images/ssg-in-flog/vitepress-router.webp",revision:"49b872b71d80e741989b98f386022309"},{url:"images/string-to-ascii/stackoverflow.avif",revision:"d061a78f74144b22cc586b6c8f1fa6a3"},{url:"images/string-to-ascii/stackoverflow.jpg",revision:"c499df66a56f82e6224d3865ac2548f7"},{url:"images/string-to-ascii/stackoverflow.webp",revision:"5fce6276c9c876631d5b2ff3c00d80eb"},{url:"images/vue-node-mysql-deployment/1.avif",revision:"9853bb9430a02b626552d280b3e3261a"},{url:"images/vue-node-mysql-deployment/1.jpg",revision:"99c8d00e5b60db89037bc17a6e54dac8"},{url:"images/vue-node-mysql-deployment/1.webp",revision:"6fb899bb27bd64f5d393ce625cdb9221"},{url:"images/vue-node-mysql-deployment/2.avif",revision:"fe9b891f45d5fe3a7b8552c7019ffaa3"},{url:"images/vue-node-mysql-deployment/2.jpg",revision:"44063b685ff46ef25f32296155a54382"},{url:"images/vue-node-mysql-deployment/2.webp",revision:"7ad53243e3a01a3408adcc1d687075f1"},{url:"images/vue-node-mysql-deployment/3.avif",revision:"8cd2610b82d720aeee4afd213b853a53"},{url:"images/vue-node-mysql-deployment/3.jpg",revision:"d3ca34094c48441cbc349702a27cbaa8"},{url:"images/vue-node-mysql-deployment/3.webp",revision:"b4dc04a40fb7aad0c4c26935fd2c2f69"},{url:"images/vue-node-mysql-deployment/4.avif",revision:"fecbb3068f8b3e632743b7445b21db79"},{url:"images/vue-node-mysql-deployment/4.jpg",revision:"7dab6654e9a0841ef02f423dce5bdb41"},{url:"images/vue-node-mysql-deployment/4.webp",revision:"3c2fcb02e795129dea734ebf50362b0d"},{url:"manifest.webmanifest",revision:"b7e05a02d5087a8dab81fc9013746245"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
