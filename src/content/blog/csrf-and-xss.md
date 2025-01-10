---
title: CSRF 和 XSS 攻击
pubDate: 2022-09-10T13:15:00.000+08:00
description: 记录 The JWT Handbook 中对 XSS 与 CSRF 攻击的通俗解释
lang: zh
---

从[《The JWT Handbook》](https://auth0.com/resources/ebooks/jwt-handbook)了解到，对这两种网络攻击简单易懂的解释。

## Cross Site Request Forgery (CSRF)

**跨站点请求伪造**（Cross Site Request Forgery, CSRF），在用户**已经登录**的页面上，诱使客户端向目标站点发送请求。
即攻击者**冒充**用户（通过劫持 cookie）发起了请求。

常见的场景是，站点植入了一个`<img>`元素，由于浏览器会**忽略同源策略**直接根据`<img>`中的`src`属性发起请求，所以用户**每次**进入包含该图片的页面时，
`<img>`元素都将冒充用户发起一个请求。

一般的 CSRF 策略是为从正确源发出的请求添加正确的**头部**。当然，如果 JWT 不被客户端存为 cookie ，那 CSRF 就无法生效。

## Cross Site Scripting (XSS)

**跨站点脚本**（Cross Site Scripting, XSS）是将恶意脚本**注入**到受信任站点。恶意脚本可能窃取 cookie 或者 client storage 中的用户 token。

XSS 攻击一般由不对**传入后端**的数据做合适的校验引起的，类似于 sql 注入攻击。

同样，防止 XSS 攻击需要在后端对传入的数据做相应处理。如果使用了 cookie，那么将其设置为`HttpOnly`的，可以防止用户 token 被劫持。
