---
title: React now uses microtask for sync updates
pubDate: 2024-11-14T20:00:00+08:00
description: React now uses microtask for sync updates
lang: en
---

Just a quick note to myself:

In the recent React PR, [Make prerendering always non-blocking with fix](https://github.com/facebook/react/pull/31452/files#), the comment says:

> Scheduler does have an "ImmediatePriority", but now that **we use microtasks for sync work**, we no longer use that. Any sync work that reaches this path is meant to be time sliced.
