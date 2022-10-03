import { type PropsWithChildren } from 'react'

const Html = (props: PropsWithChildren) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="author" content="Fwio" />
      <meta name="description" content="Fwio's personal blog" />
      <meta name="generator" content="react" />
      <meta name="keywords" content="fwio,blog,ts,typescript,vue,react" data-rh="true" />
      <link rel="icon" type="image/svg+xml" href="/fwio.svg" />
      <link rel="apple-touch-icon" href="/fwio-apple-touch.png" sizes="180x180" />
      <link rel="mask-icon" href="/fwio.svg" color="#FFFFFF" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Fwio</title>
    </head>
    <body>
      <div id="root">
        { props.children }
      </div>
      {typeof window !== 'undefined' && (<script type="module" src="/src/entry-client.tsx"></script>)}
    </body>
  </html>
)

export default Html