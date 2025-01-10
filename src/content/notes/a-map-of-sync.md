---
title: Reading Notes of "A Map of Sync"
pubDate: 2024-11-15T10:00:00+08:00
description: Reading "A Map of Sync"
lang: en
---

> This is a reading note of ["A Map of Sync"](https://stack.convex.dev/a-map-of-sync) by [Convex](https://www.convex.dev/). Most of the content is quoted from the original article.

## Nine Dimensions of Sync

Data model:

1. Size: How large is the data set that a single client can access (workload)? in bytes
2. Update rate: How often do clients send updates? in Hz
3. Structure: structural or unstructured

System requirements:

4. Input latency: How long can updates be delayed while maintaining a good user experience?
5. Offline: How many interactions does the app need to support offline?
6. Concurrent Clients: How many concurrent clients will look at the same data?

Programming model:

7. Centralization: How centralized is the programming model and infrastructure?
8. Flexibility: How flexible are sync policies, especially around conflict resolution?
9. Consistency: What types of invariants can the application assert about its data model, and how strong can these invariants be?

## Data Model

### Size

Sync platforms with small amounts of state may store all of it in-memory on the client and server, while larger applications may use slower, cheaper storage, load it lazily, and update it incrementally.

Linear stores data in IndexedDB on Web clients, and parts of it are lazily fetched as needed.

### Update Rate

How frequently do users send changes to the data model? Do we expect updates to stream in continuously at a fixed rate, or are they bursty in time?

Apps which want to keep a smooth user experience under massive interactions tend to adopt continuous sync at a fixed rate, like Figma and Valorant-like multiplayer games.

And for apps that don't update so frequently, and likely will never have an update rate much more than 1Hz, they would work well with a simpler in-time sync, and store data structures on slower storage and cheaper media.

### Structure

How much does the sync platform understand about the data it's syncing, and are there non-trivial **relationships** internal to the data?

> [Automerge](https://automerge.org/) is a CRDT library borne out of [research for syncing JSON without conflicts](https://arxiv.org/abs/1608.03960).

## System Requirements

> Systems programming is the art of negotiating an application's ideal exprience with the limitations of the real world.
>
> - Networks aren't always fast and reliable.
> - Computation is sometime expensive.
> - Storage can be slow and costly.

### Input Latency

Quite like sync latency.

- How long does it take for an input from one user to show up on another user’s device?
- How much input latency can an application tolerate while still providing a good user experience?

Experience shows that 120Hz for cursor movement to feel smooth and human.

File sharing apps are more tolerant of input latency, since users typically don't work on the same file at the same time.

### Offline Support

Offline writes are persistently buffered while the client is offline and reconcile on reconnection, i.e. Obsidian.

Partial offline support, which allows local usage within a bearable work load and starts to require sync when the data set gets larger and becomes resource-intensive.

### Number of Concurrent Clients

Servers are limited by the number of acceptable connections.

## Programming Model

### Centralization

Automerge aims for decentralized development.

### Flexibility

How much flexibility does the sync platform offer for developers to customize certain behaviors?

### Consistency

TODO

## Further Reading

- [Peritext: A CRDT for Rich-Text Collaboration](https://www.inkandswitch.com/peritext/)
