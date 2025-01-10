---
title: Mapping Cursor Position After Formatting
pubDate: 2024-11-29T23:16:00.000+08:00
keywords: ['codemirror', 'formatting', 'cursor position']
description: How to map the cursor position after formatting.
lang: en
---

Today, while implementing a simple formatting feature with [Codemirror](https://codemirror.net/), I found that mapping the cursor position correctly after formatting is far from straightforward.

The formatting itself was easy enough, thanks to tools like Prettier. However, the real pain came from the fact that we only have the input and output code, without detailed information about the transformations applied to each token (or [Range](https://codemirror.net/docs/ref/#state.Range) in Codemirror's terminology).

My first reaction was "Oh no! I don't want to walk into the [CST](https://en.wikipedia.org/wiki/Parse_tree) rabbit hole!"

Fortunately, while browsing the Codemirror Discuss forum, I found this thread: [How to map cursor position after formatting code](https://discuss.codemirror.net/t/how-to-map-cursor-position-after-formatting-code/6267/3). The solution provided by [@AKclown](https://discuss.codemirror.net/u/akclown/summary) is to use **Diff**.

Funny enough, I had considered this approach myself earlier but dismissed it, thinking it seemed not very reliable. (Okay, maybe my real reasoning was, "No CST? No way!")

What really caught my attention, though, was discovering that the folks at VSCode had used the same technique, as discussed in [microsoft/vscode#10133](https://github.com/microsoft/vscode/issues/10133). If it's good enough for VSCode, it's good enough for me! So, thank you, Akclown, for pointing me in the right direction.
