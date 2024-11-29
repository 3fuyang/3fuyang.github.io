---
title: Mapping Cursor Position After Formatting
date: 2024-11-29T23:16:00.000+08:00
keywords: ['codemirror', 'formatting', 'cursor position']
description: How to map the cursor position after formatting.
lang: en
duration: 1min
---

I've been implementing a simple formatting feature with [Codemirror](https://codemirror.net/) today, and found it's a bit non-trivial to map the right cursor position after that.

The formatting itself is perfect with tools like Prettier, however it turns out that we only have the before and after of the code, without the actual transformation applied to each token (or [Range](https://codemirror.net/docs/ref/#state.Range) in Codemirror's term).

The first thing comes to my mind is "Oh no! I don't want to walk into the [CST](https://en.wikipedia.org/wiki/Parse_tree) cave!"

Fortunately, when I was hanging around in the Codemirror Discuss forum, I found this thread [How to map cursor position after formatting code](https://discuss.codemirror.net/t/how-to-map-cursor-position-after-formatting-code/6267/3).

The solution provided by [@AKclown](https://discuss.codemirror.net/u/akclown/summary) is to use **Diff**. Actually, I remember that I've also thought about this before, but dismissed the idea because the reliability of this solution seems to be a little unintuitive... Okay, I admit my real thoughts might be "No CST? No way!".

However, I just found in [microsoft/vscode#10133](https://github.com/microsoft/vscode/issues/10133) that VSCode does the same thing. So I guess it's reliable. Thank you Akclown!
