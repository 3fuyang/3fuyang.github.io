import fs from 'fs'
import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const resolve = (p: string) => path.resolve(__dirname, p)

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  console.log(resolve('index.html'))

  app.use(vite.middlewares)
  // express@5 feature: Matching group expressions are ONLY RegExp syntax.
  app.use(/.*/, async(req, res, next) => {
    const url = req.originalUrl

    try {

      let template = fs.readFileSync(
        resolve('index.html'),
        'utf-8'
      )

      template = await vite.transformIndexHtml(url, template)

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')

      const appHtml = await render(url)

      const html = template.replace('<!-- ssr-outlet -->', appHtml)

      console.log('html: ', html)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e: any) {
      console.log(e.stack)
      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  app.listen(3127, () => {
    console.log('server is running at: http://127.0.0.1:3127')
  })
}

createServer()