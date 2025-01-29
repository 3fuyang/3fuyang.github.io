---
title: TS in Monorepo
description: How to do type check without building packages with bundlers?
lang: en
pubDate: 2025-01-29T18:00:00+08:00
---

## Problem

Let's say we have a monorepo of multiple packages written in TS, and we want to make type check across all packages without actually building them with bundlers like Vite. That's a valid use case in scenarios like CI pipelines, which do not require the bundle output, and we could avoid the potentially heavy build process.

## Solutions

I learnt the solutions mostly from Ahmed Elsakaan's video [The Dilemma of TypeScript in Monorepos](https://www.youtube.com/watch?v=RRsttfhg1sA) and the [TypeScript Project References Series](https://nx.dev/blog/managing-ts-packages-in-monorepos) published recent by Nx:

1. Relative Imports - Absolutely wrong, which harms the essence of monorepo (modularity).
2. Path Aliases - Also wrong, still harms modularity and maintainability.
3. Internal Packages - Mentioned by [Turborepo](https://turbo.build/blog/you-might-not-need-typescript-project-references), which is suitable for packages that are not published to registries.
4. Project References - Recommended by [Nx](https://nx.dev/concepts/typescript-project-linking#typescript-project-references-performance-benefits), but not by the [Turborepo](https://turbo.build/repo/docs/guides/tools/typescript#you-likely-dont-need-typescript-project-references) guys.
5. Built Packages - Most reliable, and additional tools like Nx and Turborepo can help with the build performance.
