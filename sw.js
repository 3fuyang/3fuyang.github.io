if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const f=e=>i(e,r),o={module:{uri:r},exports:c,require:f};s[r]=Promise.all(a.map((e=>o[e]||f(e)))).then((e=>(d(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/client-session-storage-141b50fd.js",revision:"6bf71c3c258c5a6a38ee698ec128feae"},{url:"assets/critical-rendering-path-10822bd7.js",revision:"17a62295cfe63bc68eef61702e248b51"},{url:"assets/csrf-and-xss-65e9a044.js",revision:"47698b69813f33e416e3830dddab58db"},{url:"assets/deep-clone-in-js-4448b098.js",revision:"c3f6130e15d2d35ffda99bc2df4c003d"},{url:"assets/empty-object-in-ts-44efc23f.js",revision:"af094cea492938dde0b13b3c39e8f2c1"},{url:"assets/farewell-my-lovely-2070000d.js",revision:"5cedf4250595e0677a6061d8c2c2a2fa"},{url:"assets/frontmatters-14ac478a.js",revision:"205d18478748487ef8a02fd2eefb99e6"},{url:"assets/function-length-881af87f.js",revision:"e30ded37b4620eb16883b5324aa9a332"},{url:"assets/how-to-win-at-cors-3543efdf.js",revision:"a4162f2f497d19575eaf6f18267dd6f5"},{url:"assets/import-meta-glob-and-auto-routes-ea3de6e7.js",revision:"c0db8090c46b4dbf770892ec61b95313"},{url:"assets/index-25a6d7e0.js",revision:"383eedab896f39baebaed6ab7f74dbc2"},{url:"assets/index-33597ded.js",revision:"88c9ec52de26604350c049307a2aa143"},{url:"assets/index-ac230232.js",revision:"f7377df6d70e2cf42a1716bca0de717f"},{url:"assets/index-c5240d24.js",revision:"f7377df6d70e2cf42a1716bca0de717f"},{url:"assets/index-d3bc2e56.css",revision:"5d9e826494fd3a298da473d1c9db4f43"},{url:"assets/index-f0d92bd5.js",revision:"41adf5b9ecc48f530801d56d0417ec41"},{url:"assets/index-f99bd7f5.js",revision:"e022ab7fd415b924bbfd54f18871eca8"},{url:"assets/index-fcee8652.js",revision:"f7377df6d70e2cf42a1716bca0de717f"},{url:"assets/index.esm-0ba9dfd1.js",revision:"f22e5e6d9dc2961380d21c3e7937b118"},{url:"assets/js-array-fill-0841be51.js",revision:"d2428e10d6efaf1fe7e9107ed9bf09aa"},{url:"assets/js-event-loop-afcac83f.js",revision:"7336725128ae40dd9ec3bd0fa8c1a291"},{url:"assets/js-logical-operator-6373d90e.js",revision:"79e2249126f7b93c01d4be1c665f47ed"},{url:"assets/js-string-and-regexp-d0a23511.js",revision:"e8c763cb652685bf889e8b54c07d6bc2"},{url:"assets/jsx-runtime-f0839969.js",revision:"077aac1aff4c09e7dbce6ff16bd98e1a"},{url:"assets/ListPosts-d4c80f50.js",revision:"6c57abbc41785e6eba7ffbc044b8167a"},{url:"assets/NotFound-671b8316.js",revision:"97bf552f4cf05efb9d3c61a804606d7b"},{url:"assets/overload-in-ts-3b999b9a.js",revision:"3b7cd9a012260e20900d14081ae04198"},{url:"assets/promise-a-plus-b9610130.js",revision:"b8d35b48f3d2286dd80a57e7e081bdf8"},{url:"assets/race-condition-in-vue-and-react-9cf7efc7.js",revision:"014a6c3d6d5883b97e697f5dad92eec5"},{url:"assets/regexp-test-undefined-3b86587b.js",revision:"97affcada19e296e2acaf4b9041d68f9"},{url:"assets/RenderedRoutes-40256e73.js",revision:"8205726c784950b337df730d50fe24eb"},{url:"assets/ssg-in-flog-5bae3bd2.js",revision:"9de47c59bc7fd1da020b8134db55d219"},{url:"assets/string-to-ascii-c3c49340.js",revision:"1423d7bb829009809561b170c0d77d09"},{url:"assets/the-cherry-orchard-03cf1eda.js",revision:"6881d7a812acc2435210d5be53470ff8"},{url:"assets/this-in-js-prototype-function-69afdf07.js",revision:"4470923d227f82bcd672b377414678da"},{url:"assets/ts-non-null-operator-fdf8d9d8.js",revision:"29b12315eeca4b1d9f0e54f902a554ea"},{url:"assets/tsconfig-notes-52500df8.js",revision:"a24af9c4abdf94c96826fed4e35b9081"},{url:"assets/vue-node-mysql-deployment-44ac5223.js",revision:"e159d99c081e9a3b1fff9605b99cb0d6"},{url:"assets/webpack4-migration-rfc-b1c9ba39.js",revision:"6ba3c198b49db52b27d7a84186346b94"},{url:"index.html",revision:"4d31dca2bc251f9758acbf273a7da970"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"fwio.svg",revision:"1b2b4b9593e79fd162e1387882b0c9c2"},{url:"seagull.svg",revision:"a2d84a74257204fbab29eebfa85dcfe7"},{url:"fwio-apple-touch.png",revision:"19a89ab1cbc3b2f4f86c30fe83ce70ab"},{url:"fwio-192x192.png",revision:"94a41505b3312456e5cd14b38c45eb38"},{url:"fwio-512x512.png",revision:"b7e572316adcac123a6ce8450964c984"},{url:"fwio-maskable-icon-512x512.png",revision:"f3338edfec1f9da05343995762ae6490"},{url:"images/niya.avif",revision:"07d62821c616070a8d578d9c3e80fb40"},{url:"images/niya.jpg",revision:"983bd663ef534a83928dbbe4db146a1b"},{url:"images/niya.webp",revision:"19211f5d1566511b3123b49ccdc23304"},{url:"images/critical-rendering-path/css-mutate-dom.avif",revision:"65181cde83ca48d46e3f7321739d3174"},{url:"images/critical-rendering-path/css-mutate-dom.jpg",revision:"88171147c4b17c44995de3f1dbefc1df"},{url:"images/critical-rendering-path/css-mutate-dom.webp",revision:"5815dbc6ae22be282f51294862e28225"},{url:"images/critical-rendering-path/render.avif",revision:"177afcbec69c144d44b8c64a686e1bac"},{url:"images/critical-rendering-path/render.jpg",revision:"ce77b28ae06ccb8c77edc37a0147c232"},{url:"images/critical-rendering-path/render.webp",revision:"ec57072195c55b83de3db4ef83c51223"},{url:"images/empty-object-in-ts/anyof.avif",revision:"5a26298bf2b8614e6b916093059e88fc"},{url:"images/empty-object-in-ts/anyof.jpg",revision:"39f9fbce3365e66e4a37c7f026481213"},{url:"images/empty-object-in-ts/anyof.webp",revision:"2bbca795959110f8117441fcc37419cf"},{url:"images/import-meta-glob-and-auto-routes/after.avif",revision:"ccbc1cfc85a5c073a23d21b12fc76f67"},{url:"images/import-meta-glob-and-auto-routes/after.jpg",revision:"d3c7165632894746c4f2bb157edb0cee"},{url:"images/import-meta-glob-and-auto-routes/after.webp",revision:"a7f53d1788819b3dac45d88cfd204746"},{url:"images/import-meta-glob-and-auto-routes/before.avif",revision:"0ff0affe1b10eab16a5f4662cd555368"},{url:"images/import-meta-glob-and-auto-routes/before.jpg",revision:"d704ad54f8da41c23d4228d0ad8dc3c2"},{url:"images/import-meta-glob-and-auto-routes/before.webp",revision:"0a2c18aa97fa8b4a172b1835b7a0be65"},{url:"images/import-meta-glob-and-auto-routes/flog-and-ssg.avif",revision:"b2f796056ffcdd371f6c70047eb0ea5f"},{url:"images/import-meta-glob-and-auto-routes/flog-and-ssg.jpg",revision:"aa7ba9bf4c69dc171eea304c4e88492c"},{url:"images/import-meta-glob-and-auto-routes/flog-and-ssg.webp",revision:"49b872b71d80e741989b98f386022309"},{url:"images/js-event-loop/mid-execution.avif",revision:"eca94b880aec92b76424fde0fddcf6b0"},{url:"images/js-event-loop/mid-execution.jpg",revision:"78f5301dd827ffd07b08e1f23c4eff08"},{url:"images/js-event-loop/mid-execution.webp",revision:"1b69d0bd0867e573e77bb386c12089d5"},{url:"images/js-event-loop/warning.avif",revision:"5ddd3011561483cf59558d4e020aabae"},{url:"images/js-event-loop/warning.jpg",revision:"2a05955f3c9b1415544963fc959f1bec"},{url:"images/js-event-loop/warning.webp",revision:"586a588f343a80a42546dfdca5ed0efe"},{url:"images/ssg-in-flog/figure-label.avif",revision:"75fb4fbaca3f6a1b28c4c028f3c83885"},{url:"images/ssg-in-flog/figure-label.jpg",revision:"ced3c7cac9061b7c71aad7e31215d1e3"},{url:"images/ssg-in-flog/figure-label.webp",revision:"ebccedc94e1df90aa15d2c0ac473d72e"},{url:"images/ssg-in-flog/rollup-plugin-hooks.avif",revision:"7a610aa9b96cd9f0801611d8cc59f10d"},{url:"images/ssg-in-flog/rollup-plugin-hooks.jpg",revision:"b6b87728ee7ffe4b04dce205d272014d"},{url:"images/ssg-in-flog/rollup-plugin-hooks.webp",revision:"33c841086941fd60a935cef731c1a4a3"},{url:"images/ssg-in-flog/vite-universal-plugins.avif",revision:"bb85746dd42fccd75d01fcc41b65fb3d"},{url:"images/ssg-in-flog/vite-universal-plugins.jpg",revision:"0014cc136c754825d7c18a41097d535d"},{url:"images/ssg-in-flog/vite-universal-plugins.webp",revision:"8dc31332cea659a0d73dc70ecdabbcaf"},{url:"images/ssg-in-flog/vitepress-router.avif",revision:"b2f796056ffcdd371f6c70047eb0ea5f"},{url:"images/ssg-in-flog/vitepress-router.jpg",revision:"aa7ba9bf4c69dc171eea304c4e88492c"},{url:"images/ssg-in-flog/vitepress-router.webp",revision:"49b872b71d80e741989b98f386022309"},{url:"images/string-to-ascii/stackoverflow.avif",revision:"d061a78f74144b22cc586b6c8f1fa6a3"},{url:"images/string-to-ascii/stackoverflow.jpg",revision:"c499df66a56f82e6224d3865ac2548f7"},{url:"images/string-to-ascii/stackoverflow.webp",revision:"5fce6276c9c876631d5b2ff3c00d80eb"},{url:"images/vue-node-mysql-deployment/1.avif",revision:"9853bb9430a02b626552d280b3e3261a"},{url:"images/vue-node-mysql-deployment/1.jpg",revision:"99c8d00e5b60db89037bc17a6e54dac8"},{url:"images/vue-node-mysql-deployment/1.webp",revision:"6fb899bb27bd64f5d393ce625cdb9221"},{url:"images/vue-node-mysql-deployment/2.avif",revision:"fe9b891f45d5fe3a7b8552c7019ffaa3"},{url:"images/vue-node-mysql-deployment/2.jpg",revision:"44063b685ff46ef25f32296155a54382"},{url:"images/vue-node-mysql-deployment/2.webp",revision:"7ad53243e3a01a3408adcc1d687075f1"},{url:"images/vue-node-mysql-deployment/3.avif",revision:"8cd2610b82d720aeee4afd213b853a53"},{url:"images/vue-node-mysql-deployment/3.jpg",revision:"d3ca34094c48441cbc349702a27cbaa8"},{url:"images/vue-node-mysql-deployment/3.webp",revision:"b4dc04a40fb7aad0c4c26935fd2c2f69"},{url:"images/vue-node-mysql-deployment/4.avif",revision:"fecbb3068f8b3e632743b7445b21db79"},{url:"images/vue-node-mysql-deployment/4.jpg",revision:"7dab6654e9a0841ef02f423dce5bdb41"},{url:"images/vue-node-mysql-deployment/4.webp",revision:"3c2fcb02e795129dea734ebf50362b0d"},{url:"manifest.webmanifest",revision:"b7e05a02d5087a8dab81fc9013746245"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
