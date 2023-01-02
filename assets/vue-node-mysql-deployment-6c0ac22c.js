import{j as s}from"./jsx-runtime-f0839969.js";const l="Vue  + Node.js + MySQL 项目部署到 ECS 服务器",x="2022-02-27T18:11:00.000+08:00",i="别再用阿里云了。",c="zh",p="10min",d="/blog/vue-node-mysql-deployment",n=function({children:e}){return s.exports.jsx("article",{className:"prose",children:e})};function t(r){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",h1:"h1",h2:"h2",ul:"ul",h3:"h3",strong:"strong",code:"code",pre:"pre",span:"span",p:"p"},r.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsxs(e.li,{className:"toc-item toc-item-h1",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#vue---nodejs--mysql-项目部署到-ecs-服务器",children:"Vue  + Node.js + MySQL 项目部署到 ECS 服务器"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-2",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h2",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#参考资料",children:"参考资料："})}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#步骤",children:"步骤："}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#一服务器配置与宝塔面板",children:"一、服务器配置与宝塔面板"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#二前端代码处理",children:"二、前端代码处理"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#三后端代码处理",children:"三、后端代码处理"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#四数据库配置",children:"四、数据库配置"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#五启用-node-服务",children:"五、启用 Node 服务"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#六nginx-配置与启动",children:"六、Nginx 配置与启动"})})]})]}),s.exports.jsxs(e.li,{className:"toc-item toc-item-h2",children:[s.exports.jsx(e.a,{className:"toc-link toc-link-h2",href:"#问题与解答",children:"问题与解答"}),s.exports.jsxs(e.ol,{className:"toc-level toc-level-3",children:[s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#单独将后端部署到-ecs-后的调试问题",children:"单独将后端部署到 ECS 后的调试问题"})}),s.exports.jsx(e.li,{className:"toc-item toc-item-h3",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h3",href:"#后端数据库名称大小写问题",children:"后端数据库名称大小写问题"})})]})]})]})]})})}),`
`,s.exports.jsx(e.h1,{id:"vue---nodejs--mysql-项目部署到-ecs-服务器",children:"Vue  + Node.js + MySQL 项目部署到 ECS 服务器"}),`
`,s.exports.jsx(e.h2,{id:"参考资料",children:"参考资料："}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.a,{href:"https://blog.csdn.net/weixin_43786756/article/details/112982951?utm_medium=distribute.pc_feed_404.none-task-blog-2~default~BlogCommendFromBaidu~Rate-1.control404&depth_1-utm_source=distribute.pc_feed_404.none-task-blog-2~default~BlogCommendFromBaidu~Rate-1.control40",children:"【超详细小白教学】Vue+nodejs电商项目部署指南"})}),`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.a,{href:"https://segmentfault.com/a/1190000022921908",children:"Vue + node + mongoDB 项目部署至阿里云服务器"})}),`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.a,{href:"https://www.jianshu.com/p/57742768e947",children:"pm2代替forever部署nodejs项目"})}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"步骤",children:"步骤："}),`
`,s.exports.jsx(e.h3,{id:"一服务器配置与宝塔面板",children:"一、服务器配置与宝塔面板"}),`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:["配置并购买 ECS 服务器（注意记忆自定义 ",s.exports.jsx(e.strong,{children:"SSH 连接密码"}),"，用户名固定为 'root'），生成实例"]}),`
`,s.exports.jsxs(e.li,{children:["使用上面设置的密码通过 “",s.exports.jsx(e.strong,{children:"远程连接 —— Workbench”"}),"，进入 shell 命令行"]}),`
`,s.exports.jsxs(e.li,{children:["根据 ECS 操作系统用对应的",s.exports.jsx(e.strong,{children:"命令"}),"安装 “宝塔 Linux 面板”，复制 “",s.exports.jsx(e.strong,{children:"外网面板地址"}),"”，进入面板（",s.exports.jsx(e.strong,{children:"注意"}),"：需先配置 ECS 实例",s.exports.jsx(e.strong,{children:"安全组"}),"，放行 ",s.exports.jsx(e.strong,{children:"8888 端口"}),"）",`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"配置安全组方法"}),"：进入 ECS 安全组规则配置页面，选择 “",s.exports.jsx(e.strong,{children:"入方向"}),"” 手动添加如下规则："]}),`
`,s.exports.jsx(e.li,{}),`
`]}),`
`]}),`
`]}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/vue-node-mysql-deployment/1.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/vue-node-mysql-deployment/1.webp"}),s.exports.jsx("img",{width:"1339",height:"179",src:"/images/vue-node-mysql-deployment/1.jpg",alt:"ecs-security-rules"})]}),s.exports.jsx("figcaption",{children:"配置安全组规则"})]}),`
`,s.exports.jsxs(e.ol,{start:"3",children:[`
`,s.exports.jsxs(e.li,{children:["为了后续部署方便，通过",s.exports.jsx(e.strong,{children:"快速添加"}),"为以下常用端口添加规则"]}),`
`,s.exports.jsx(e.li,{}),`
`]}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/vue-node-mysql-deployment/2.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/vue-node-mysql-deployment/2.webp"}),s.exports.jsx("img",{width:"897",height:"628",src:"/images/vue-node-mysql-deployment/2.jpg",alt:"quick-add"})]}),s.exports.jsx("figcaption",{children:"配置常用端口"})]}),`
`,s.exports.jsxs(e.ol,{start:"5",children:[`
`,s.exports.jsxs(e.li,{children:["此外，将",s.exports.jsx(e.strong,{children:"前端与后端应用"}),"使用的端口号分别手动添加到规则中"]}),`
`,s.exports.jsxs(e.li,{children:["在宝塔面板的",s.exports.jsx(e.strong,{children:"软件商店"}),"中，选择",s.exports.jsx(e.strong,{children:"极速安装"})," Nginx@、MySQL@5.5、TomCat@7"]}),`
`,s.exports.jsxs(e.li,{children:["远程连接中使用",s.exports.jsx(e.code,{children:"/etc/init.d/bt default"}),"查看宝塔面板用户名、密码"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"二前端代码处理",children:"二、前端代码处理"}),`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:["调用",s.exports.jsx(e.strong,{children:"接口"}),"中的地址与端口号替换成 ECS 实例的",s.exports.jsx(e.strong,{children:"公网地址 + 后端应用端口号"}),"（后面还需要在 ",s.exports.jsx(e.strong,{children:"Nginx 中配置后端代理"}),"）。"]}),`
`,s.exports.jsxs(e.li,{children:["删除解决开发时调用接口的跨域问题的 ",s.exports.jsx(e.strong,{children:"vue.config.js"})," 文件。"]}),`
`,s.exports.jsxs(e.li,{children:["调用 ",s.exports.jsx(e.strong,{children:"npm run build"})," 打包前端文件，注意生成的 dist/index.html 中资源的路径要改为",s.exports.jsx(e.strong,{children:"相对路径"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:["提取出 ",s.exports.jsx(e.strong,{children:"dist"})," 目录"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"三后端代码处理",children:"三、后端代码处理"}),`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:["将",s.exports.jsx(e.strong,{children:"连接对象"}),"中的 ",s.exports.jsx(e.strong,{children:"localhost"})," 改为 ",s.exports.jsx(e.strong,{children:"'127.0.0.1'（本地 IP）"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:["记住创建数据库连接的",s.exports.jsx(e.strong,{children:"用户名"}),"和",s.exports.jsx(e.strong,{children:"密码"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:["删除依赖文件 ",s.exports.jsx(e.strong,{children:"node_module"}),"，以减小文件夹的体积。"]}),`
`,s.exports.jsxs(e.li,{children:["将前、后端代码文件夹复制到 Tomcat 如下文件夹（",s.exports.jsx(e.strong,{children:"不一定是该位置，根据需要而定"}),"）中（dist & back-end）："]}),`
`]}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/vue-node-mysql-deployment/3.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/vue-node-mysql-deployment/3.webp"}),s.exports.jsx("img",{width:"977",height:"601",src:"/images/vue-node-mysql-deployment/3.jpg",alt:"backend-dir",style:{zoom:.8}})]}),s.exports.jsx("figcaption",{children:"上传后端文件"})]}),`
`,s.exports.jsx(e.h3,{id:"四数据库配置",children:"四、数据库配置"}),`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:["在宝塔面板，进入“",s.exports.jsx(e.strong,{children:"数据库"}),"”，修改 ",s.exports.jsx(e.strong,{children:"root 密码"}),"与后端代码保持一致。"]}),`
`,s.exports.jsxs(e.li,{children:["在本地电脑使用 cmd 命令行窗口，输入 ",s.exports.jsx(e.strong,{children:"ssh root@服务器公网 IP"}),"，并输入 ssh 密码连接 ECS。"]}),`
`,s.exports.jsxs(e.li,{children:["输入 ",s.exports.jsx(e.strong,{children:"mysql -u root -p;"})," ，使用在宝塔面板设置的密码登录 MySQL 数据库。"]}),`
`,s.exports.jsxs(e.li,{children:["输入 ",s.exports.jsx(e.strong,{children:"create database `db_name` default character set utf8 collate  utf8_general_ci;"})," ，创建数据库。"]}),`
`,s.exports.jsxs(e.li,{children:["从本地数据库中导出 ",s.exports.jsx(e.strong,{children:".sql"})," 文件，",s.exports.jsx(e.strong,{children:"注意"}),"：如果本地数据库与 ECS 数据库",s.exports.jsx(e.strong,{children:"字符编码格式不同"}),"时，需要",s.exports.jsx(e.strong,{children:"修改"}),"导出的 sql 文件。"]}),`
`,s.exports.jsxs(e.li,{children:["使用 ",s.exports.jsx(e.strong,{children:"source /path/db_name.sql;"}),"，导入数据库，用 ",s.exports.jsx(e.strong,{children:"show tables;"})," 确认表是否导入成功。"]}),`
`,s.exports.jsxs(e.li,{children:["回到宝塔面板的数据库模块，点击“",s.exports.jsx(e.strong,{children:"从服务器获取"}),"”，可以获取上面创建的数据库。"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"五启用-node-服务",children:"五、启用 Node 服务"}),`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:["使用 ",s.exports.jsx(e.strong,{children:"node --version"})," 或 ",s.exports.jsx(e.strong,{children:"node -v"})," 命令查看 ECS 是否安装了 Node.js 。"]}),`
`,s.exports.jsxs(e.li,{children:["若未安装，使用以下命令安装 Node （",s.exports.jsx(e.strong,{children:"注意：CentOS 属于 Linux 系统"}),"）："]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-shell",children:[s.exports.jsx(e.span,{className:"hljs-meta prompt_",children:"$"}),s.exports.jsxs(e.span,{className:"bash",children:[s.exports.jsx(e.span,{className:"hljs-built_in",children:"cd"})," /root"]}),`
`,s.exports.jsx(e.span,{className:"hljs-meta prompt_",children:"$"}),s.exports.jsx(e.span,{className:"bash",children:"wget https://nodejs.org/download/release/v14.17.0/node-v14.17.0-linux-x64.tar.gz"}),`
`,s.exports.jsx(e.span,{className:"hljs-meta prompt_",children:"$"}),s.exports.jsx(e.span,{className:"bash",children:"sudo tar --strip-components 1 -xzvf node-v14.17.0-linux-x64.tar.gz -C /usr/local"}),`
`]})}),`
`]}),`
`,s.exports.jsxs(e.li,{children:["切换到后端文件夹，执行 ",s.exports.jsx(e.strong,{children:"npm install"})," 安装依赖（express，mysql 等）。"]}),`
`,s.exports.jsxs(e.li,{children:["安装完毕后，使用 ",s.exports.jsx(e.strong,{children:"node main.js"})," 测试能否成功运行后端。"]}),`
`,s.exports.jsxs(e.li,{children:["运行成功后，安装 ",s.exports.jsx(e.strong,{children:"pm2"})," 使 cmd 不需要一直运行以",s.exports.jsx(e.strong,{children:"维持后端服务"}),"："]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-shell",children:[s.exports.jsx(e.span,{className:"hljs-meta prompt_",children:"$"}),s.exports.jsxs(e.span,{className:"bash",children:[s.exports.jsx(e.span,{className:"hljs-built_in",children:"cd"})," /usr/local"]}),`
`,s.exports.jsx(e.span,{className:"hljs-meta prompt_",children:"$"}),s.exports.jsx(e.span,{className:"bash",children:"npm install -g pm2"}),`
`]})}),`
`]}),`
`,s.exports.jsxs(e.li,{children:["进入后端目录，使用 pm2 启动后端应用，",s.exports.jsx(e.strong,{children:"--name"})," 可为进程设置名称："]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-shell",children:[s.exports.jsx(e.span,{className:"hljs-meta prompt_",children:"$"}),s.exports.jsxs(e.span,{className:"bash",children:["pm2 start main.js --name=",s.exports.jsx(e.span,{className:"hljs-string",children:'"name"'})]}),`
`]})}),`
`]}),`
`,s.exports.jsx(e.li,{children:"启动成功后，看到如下结果："}),`
`]}),`
`,s.exports.jsxs("figure",{children:[s.exports.jsxs("picture",{children:[s.exports.jsx("source",{type:"image/avif",srcSet:"/images/vue-node-mysql-deployment/4.avif"}),s.exports.jsx("source",{type:"image/webp",srcSet:"/images/vue-node-mysql-deployment/4.webp"}),s.exports.jsx("img",{width:"1100",height:"152",src:"/images/vue-node-mysql-deployment/4.jpg",alt:"pm2 start"})]}),s.exports.jsx("figcaption",{children:"pm2 持久化运行后端"})]}),`
`,s.exports.jsxs(e.ol,{start:"11",children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"附录—— pm2 常用命令"}),"：",`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"查看所有进程"}),"：",s.exports.jsx(e.code,{children:"$pm2 list"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"查看某进程详细信息"}),"：",s.exports.jsx(e.code,{children:"$pm2 info [proc_id]"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"暂停某进程"}),"：",s.exports.jsx(e.code,{children:"$pm2 stop [proc_id]"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"重启某进程"}),"：",s.exports.jsx(e.code,{children:"$pm2 restart [proc_id]"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"重启所有进程"}),"：",s.exports.jsx(e.code,{children:"$pm2 restart all"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"删除某进程"}),"：",s.exports.jsx(e.code,{children:"$pm2 delete [proc_id]"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"快照"}),"：",s.exports.jsx(e.code,{children:"$pm2 save"})]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"重启快照"}),"：",s.exports.jsx(e.code,{children:"$pm2 resurrect"})]}),`
`]}),`
`]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"六nginx-配置与启动",children:"六、Nginx 配置与启动"}),`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsxs(e.p,{children:["进入宝塔面板——软件商店—— Nginx 设置——配置修改，在 ",s.exports.jsx(e.strong,{children:"http"})," 块（",s.exports.jsx(e.strong,{children:"注意"}),"：不是 ",s.exports.jsx(e.strong,{children:"server"})," 块）内增加以下",s.exports.jsx(e.strong,{children:"反向代理"}),"代码："]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[` server{
     `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 前端网页端口号"}),`
     listen <port>;
     `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// ECS 服务器外网IP地址"}),`
     server_name localhost <host>;
     location / {
     `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// 前端目录"}),`
     root <dir>;
     try_files $uri $uri/ /index.`,s.exports.jsx(e.span,{className:"hljs-property",children:"html"}),`;
     }
 }
`]})}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsxs(e.p,{children:["保存修改，回到服务，先点击",s.exports.jsx(e.strong,{children:"重载配置"}),"，再点击",s.exports.jsx(e.strong,{children:"重启"}),"："]}),`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:["如果此时运行失败，出现：",s.exports.jsx(e.code,{children:"bind() to 0.0.0.0:80 failed (98:Adress already in use)"}),"错误，是由于",s.exports.jsx(e.strong,{children:"端口号被占用"}),"。"]}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsxs(e.p,{children:["在浏览器中访问 “",s.exports.jsx(e.a,{href:"http://ip:port%22%EF%BC%8C%E5%8D%B3%E5%8F%AF%E8%BF%9B%E5%85%A5%E5%89%8D%E7%AB%AF%E9%A1%B5%E9%9D%A2",children:'http://ip:port"，即可进入前端页面'})]}),`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:["主页可以正常访问，但",s.exports.jsx(e.strong,{children:"调用后端接口"}),"时，提示错误 ",s.exports.jsx(e.strong,{children:"We're sorry but XX doesn't work properly without JavaScript enabled"}),"，原因是 ",s.exports.jsx(e.strong,{children:"Nginx 配置异常，没有正确转发后端接口地址"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:["需要在 Nginx 中配置",s.exports.jsx(e.strong,{children:"转发访问后端的具体地址"}),"："]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[` server{
     listen <port>; # 前端页面端口
     server_name localhost <host>; # 服务器 `,s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"IP"}),`
     error_page `,s.exports.jsx(e.span,{className:"hljs-number",children:"404"})," /index.",s.exports.jsx(e.span,{className:"hljs-property",children:"html"}),";	# 防止出现 ",s.exports.jsx(e.span,{className:"hljs-number",children:"404"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Not"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Found"}),` 页面 
 
     location / {
         root /www/server/tomcat/webapps/dist; # `,s.exports.jsx(e.span,{className:"hljs-title class_",children:"Vue"}),` 项目路径
         try_files $uri $uri/ /index.`,s.exports.jsx(e.span,{className:"hljs-property",children:"html"}),`;
     }
     ## 配置后端反向代理
     location ~ `,s.exports.jsx(e.span,{className:"hljs-regexp",children:"/api/"}),` {
         proxy_pass <back-end-origin>; # 后端运行地址
     }
 }
`]})}),`
`]}),`
`,s.exports.jsx(e.li,{children:"保存，重载配置并重启 Nginx 服务即可。"}),`
`]}),`
`]}),`
`,s.exports.jsxs(e.li,{children:[`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"附注"}),"："]}),`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsxs(e.li,{children:["本部署方法",s.exports.jsx(e.strong,{children:"并未用到 Tomcat 服务器"}),"，只是将前后端代码放在 tomcat 下属的目录（其他目录也可）中，所以",s.exports.jsx(e.strong,{children:"不需要安装 Tomcat"}),"。"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.strong,{children:"开发环境下"}),"，为了解决调试时的",s.exports.jsx(e.strong,{children:"跨域问题"}),"，而为前端项目配置的 ",s.exports.jsx(e.strong,{children:"vue.config.js"})," 文件在",s.exports.jsx(e.strong,{children:"发布/部署"}),"时不再需要，",s.exports.jsx(e.strong,{children:"不要打包进 dist 目录"}),"。"]}),`
`]}),`
`]}),`
`]}),`
`,s.exports.jsx(e.h2,{id:"问题与解答",children:"问题与解答"}),`
`,s.exports.jsx(e.h3,{id:"单独将后端部署到-ecs-后的调试问题",children:"单独将后端部署到 ECS 后的调试问题"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["由于使用 pm2 进行后端托管后，",s.exports.jsx(e.strong,{children:"无法看到 node.js 对请求的输出信息"}),"，所以当需要对后端进行",s.exports.jsxs(e.strong,{children:["调试（如合并前后端）",s.exports.jsx(e.strong,{children:"时，最好"}),"暂停 pm2 运行"]}),"，改为",s.exports.jsx(e.strong,{children:"使用 node 命令运行后端"}),"。"]}),`
`]}),`
`,s.exports.jsx(e.h3,{id:"后端数据库名称大小写问题",children:"后端数据库名称大小写问题"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:["在",s.exports.jsx(e.strong,{children:"本地调试后端"}),"时，",s.exports.jsx(e.strong,{children:"connection.query() 方法"}),"中的 ",s.exports.jsx(e.strong,{children:"SQL 语句"}),"对大小写不敏感，但部署到服务器上后，后端对",s.exports.jsx(e.strong,{children:"大小写敏感"}),"，需要注意两者一致。"]}),`
`]})]})}function h(r={}){return s.exports.jsx(n,Object.assign({},r,{children:s.exports.jsx(t,r)}))}export{x as date,h as default,i as description,p as duration,c as lang,d as path,l as title};
