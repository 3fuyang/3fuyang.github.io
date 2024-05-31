---
title: Stream Response
description: draft
duration: 1min
lang: zh
date: 2024-05-29T17:59:00.000+08:00
draft: true
---

# Stream Response

## Typical data flow in the web

> HTTP responses typically send the **entire** payload to the client all at once. This approach can sometimes result in a slow user experience if the data is large or computationally intense.

In a `computation --> response --> consume` pipeline, being intrinsically too large blocks the `response` stage, while computationally intense blocks the `computation` stage. Both cases result in a slow user experience: "The response arrives so late". 

## Breaking data to chunks

The [Web Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) enables developers to stream chunks of the payload as they become available.

> Browsers already do this whn receiving media assets — video buffers and play as more of the content downloads, and sometimes you'll see images display gradually as more is loaded too.  

## Reference

- https://vercel.com/docs/functions/streaming
- https://vercel.com/guides/handling-backpressure
- https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
- https://en.wikipedia.org/wiki/Chunked_transfer_encoding
