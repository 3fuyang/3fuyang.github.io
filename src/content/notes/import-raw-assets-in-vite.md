---
title: Import Raw Assets in Vite
description: The internals of importing raw assets in Vite.
lang: en
pubDate: 2025-01-15T22:00:00+08:00
---

Today, I attempted to import a local image using the `?raw` query suffix in Vite and convert it into an image `src` URL for use in the browser. However, I was repeatedly greeted by the dreaded image placeholder (🖼️), signaling that things went wrong.

Eager to uncover the cause, I delved into Vite's source code and discovered how the `?raw` suffix is handled in [`asset.ts`](https://github.com/vitejs/vite/blob/main/packages/vite/src/node/plugins/asset.ts#L171):

```ts
function assetPlugin(config: ResolvedConfig): Plugin {
  return {
    //...
    async load() {
      // ...
      // raw requests, read from disk
      if (rawRE.test(id)) {
        const file = checkPublicFile(id, config) || cleanUrl(id)
        this.addWatchFile(file)
        // raw query, read file and return as string
        return `export default ${JSON.stringify(
          await fsp.readFile(file, 'utf-8'),
        )}`
      }
      // ...
    }
  }
}
```

From this, it became clear that Vite handles assets with `?raw` query by reading the files as **UTF-8 encoded strings**. It works well for plain text files, but with binary formats (like images) since non-Unicode characters in these files are replaced with the [replacement character](https://www.fileformat.info/info/unicode/char/fffd/index.htm) "�" (`U+FFFD`). This corruption renders the asset unusable for its intended purpose , and unfortunately, is unrecoverable.
