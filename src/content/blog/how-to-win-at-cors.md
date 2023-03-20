---
title: How to win at CORS?
date: 2022-11-24T15:09:00.000+08:00
description: 现代 Web 开发离不开 CORS，本文参考 Jake Archibald 的 《How to win at CORS?》，做一些摘要、翻译和笔记。
lang: zh
duration: 4min
---

# How to win at CORS?

> Reference: [How to win at CORS - JakeArchibald.com](https://jakearchibald.com/2021/cors/)

CORS 的**本质**：为**在客户端**访问跨域资源，对 HTTP 请求（Request）和响应（Response）附加的一系列**头部信息**（`Access-Control-*`），以及 W3C 标准对此做的一些相关支持，统称为一个 CORS **标准**（Spec）。

> **CORS 与反向代理**
>
> CORS 和反向代理（Reverse Proxy）是解决**跨域问题**的两种**不同**的方式。
>
> 由于前后端分离架构的流行，反向代理在前端开发环境的 **DevServer** （如`webpack-dev-server`、`vite`）中被广泛使用。其本质是开启一个服务端的代理，用于**转发**原本从客户端直接发送将跨域的请求。由于**同源政策**（SOP）只限制 **C => S** 的请求，而从反向代理到目标服务器属于 **S => S**，所以自然**不受**同源政策的限制。
>
> 在 DevServer 设置的反向代理是**影响不到生产环境**的，需要额外在生产服务器（如`nginx`等）配置反向代理。

## Making a CORS request

大多数**现代 Web 特性**都**默认**要求使用 CORS，比如`fetch()`。

有些现代 Web 特性，如`<link rel="preload">`，**默认**不使用 CORS，因为它们被设计出来用于支持一些不使用 CORS 的旧特性。

并**没有一套简单的规则**用于鉴别哪些特性默认使用或不使用 CORS，比如：

```html
<!-- Not a CORS request-->
<script src="https://example.com/script.js"></script>
<!-- CORS request -->
<script type="module" src="https://example.com/script.js"></script>
```

**最佳方式**是查看 HTTP 请求头部，在 Chrome 和 Firefox 中，跨域请求将携带`Sec-Fetch-Mode`头部，来声明其是否是一个 CORS 请求。

```xml
GET ... HTTP/1.1

Sec-Fetch-Mode: cors | no-cors | ...
```

如果一个 HTML 元素默认未使用 CORS 进行了请求，可以通过`crossorigin`属性，将其行为切换到 CORS 请求。

```html
<img crossorigin src="..." />
<script crossorigin src="..."></script>
<link crossorigin rel="stylesheet" href="..." />
<link crossorigin rel="preload" as="font" href="..." />
```

## CORS requests

跨域的 CORS 请求默认**不携带 credentials**（没有 **cookies**、客户端**证书**、自动添加的`Authorization`头部，且响应头中的`Set-Cookie`将被忽略），而**同源请求默认携带 credentials**。

> **注意**
>
> 本文以及通常 HTTP 请求所指的携带凭据（credentials）都是指**浏览器能自动**添加到请求的凭据。

在开发 CORS 标准时，标准组织新建立了一个 HTTP 头部`Origin`，用来提供发出请求的页面的**源**。

> #### 关于 HTTP `Referer`
>
> HTTP `referer`被浏览器传递给服务器，用来告知服务器“用户进入当前页（即目前请求的目标）**之前**所处的页面”。
>
> #### 为什么`Referer`（在提供安全支持上）非常鸡肋？
>
> 因为`referer`是**可欺瞒**的（spoofable），在客户端可以修改它（如通过浏览器扩展、代理等），而`origin`头部是由浏览器内部控制，保证其准确可靠的。

`Origin`是一个很有用的头部，常常被添加到许多其他类型的请求中，比如 WebSocket 或`POST`请求。浏览器曾试过将`Origin`添加到常规的`GET`请求中，但这会导致许多将带有`Origin`头部的请求视为 CORS 请求的网站崩溃。

## CORS responses

为使其他源能跨域访问资源，响应头必须包含头部：

```xml
Access-Control-Allow-Origin: * (表示接受任何源)
```

如果请求没有附带 credentials，那么`*`代表任何请求的源。若要显式指定源，注意所有 HTTP 头部的**名称不区分大小写**，但**值区分大小写**（case-sensitive）。

**注意**，如果请求的`Origin`相对于响应的`Access-Control-Allow-Origin`多了一个尾缀`/`，也不能通过 CORS。

如果请求通过 CORS，则响应可能包含以下额外的头部信息：

- `Cache-Control`：缓存管理
- `Content-Language`：语言
- `Content-Length`：消息主体的大小
- `Content-Type`：资源的 MIME 类型
- `Expires`：响应过期时间
- `Last-Modified`：最后一次修改时间
- `Pragma`：**已弃用**，用于缓存管理

响应可以包含另一个头部`Access-Control-Expose-Headers`，让服务端可以发送额外的**自定义头部**：

```xml
Access-Control-Expose-Headers: Custom-Header-1, Custom-Header-2
```

## Is it safe to expose resources via CORS?

如果一个资源不包含隐私数据，那么对其加上`Access-Control-Allow-Origin: *`是**完全安全**的。

如果一个资源**有时**，取决于 cookies，会包含隐私数据，那么在加上`Access-Control-Allow-Origin: *`后，需要包含`Vary: Cookie`控制缓存以保证其安全。

## Adding credentials

跨域的 CORS 请求默认是不包含 credentials 的。然而，各种 API 允许添加 credentials。

使用`fetch`或`xhr`：

```js
// Fetch API
const response = await fetch(url, {
  credentials: 'include',
})

// AJAX
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.withCredentials = true
xhr.send()
```

或者 HTML 元素：

```html
<img crossorigin="use-credentials" src="..." />
```

那么**响应必须包含**：

```xml
...

Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: https://<subdomains>.com
Vary: Cookie, Origin
```

> **注意**
>
> 如果要在 CORS 请求中携带凭据，则必须要**服务端**配合：
>
> - 添加头部`Access-Control-Allow-Credentials: true`；
> - 不能使用通配符`*`指定接收所有源，即`Access-Control-Allow-Origin`不可为`*`

## Unusual requests and preflights

先看一些常见的（usual）请求：

```js
// 这个请求与一个<img>元素的行为几乎相同
fetch(url, { credentials: 'include' })
```

```js
// 上面这个请求与一个<form>元素的行为几乎相同
fetch(url, {
  methdo: 'POST',
  body: formData,
})
```

```js
// 这不是一个寻常请求，它具有特殊的请求方法和头部
fetch(url, {
  method: 'wibbley-wobbley',
  credentials: 'include',
  headers: {
    fancy: 'headers',
    'here-we': 'go',
  },
})
```

怎样判定一个请求算是一个 **unusual request** 相当复杂。

从**高维度**上讲，如果它不是**其他浏览器 API** 通常发出的那种请求，那么它就是 unsual request。

从**低维度**上讲，如果请求不是`GET`、`POST`或`HEAD`请求，或者它包含 [safelist](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) 以外的头部或头部值，那么它是一个 unusal request。

在发送 unsual request **之前**，**浏览器**会先询问目标源是否接受它，这个过程叫做**预检**（preflight），这个行为是浏览器自动进行的。

### Preflight request

对于前面的 unusual request，浏览器先用`OPTIONS`方法发送预检请求，且带有以下头部：

```xml
Access-Control-Request-Method: wibbley-wobbley
Access-Control-Request-Headers: fancy, here-we
```

- `Access-Control-Request-Method`：主请求（main request）将使用的请求方法，即使该请求方法是寻常的（`GET`、`POST`、`HEAD`）也需发送该头部。（**必须**）
- `Access-Control-Request-Headers`：主请求将要发送的特殊头部，如果没有特殊头部，预检请求将不发送该头部。（**可选**）

预检请求**从不**携带 credentials，**即使**主请求**可能携带**。

### Preflight response

服务器对预检请求的响应，将使用以下头部表明是否允许主请求：

```xml
Access-Control-Max-Age: 600 // 600s
Access-Control-Allow-Methods: wibbley-wobbley
Access-Control-Allow-Headers: fancy, here-we
```

- `Access-Control-Max-Age` - 预检响应的**缓存周期**，在周期内发送 unusual 主请求不需要再进行预检。默认值是 5 s，一些浏览器限制了其最大值，如 Chrome（10 min）、Firefox（24 h）。
- `Access-Control-Allow-Methods` - 允许的 unsual 请求方法，可以是**逗号分隔**的列表，对大小写**敏感**。如果主请求**不携带凭据**，那么该头部可用`*`表示**几乎所有**方法，不包括`CONNECT`、`TRACE`、`TRACK`（由于**安全原因**，它们都在 [FORBIDDEN LIST](https://fetch.spec.whatwg.org/#forbidden-method) 上）。
- `Access-Control-Allow-Headers` - 允许的 unusual 头部，同样可以是**逗号分隔**的列表，对大小写**不敏感**。如果主请求**不携带凭据**，该头部可使用`*`表示允许所有不在 [HEADER FORBIDDEN LIST](https://fetch.spec.whatwg.org/#forbidden-header-name) 上的头部。

由于安全问题，列于 HEADER FORBIDDEN LIST 中的头部**必须**处于浏览器的控制下，它们会**静默**从 CORS 请求和`Access-Control-Allow-Headers`中被**抹除**。

**预检响应**必须通过常规的 CORS 检查，所以其需要加上`Access-Control-Allow-Origin`，且如果主请求将发送凭据，预检响应必须带上`Access-Control-Allow-Crendentials: true`。预检响应的**状态码**必须在 **200-299** 中。

> **注意**
>
> 预检响应对状态码的限制造成了一些**陷阱**。对于一个像`/artists/Pip-Blom`这样的 API，如果对应资源 'Pip Blom' 不在数据库中，你可能想要返回 404 来**明确告知**客户端它请求了不存在的资源。但如果这个请求需要一个预检请求，那么其响应状态码只能是 **200-299**，即使最终的主响应会是 404。

如果主请求**方法**和**头部**都被允许，那么主请求将被发送。
