---
title: CodeMirror Notes
duration: 1min
description: Notes for CodeMirror 6
lang: en
date: 2024-06-21T15:00:00.000+08:00
---

# CodeMirror Notes

## Reference

- [Learning CodeMirror](https://thetrevorharmon.com/blog/learning-codemirror/#structure--lifecycle)

## Structure

### Core

#### EditorState

Internal state of the editor

#### EditorView

DOM states of the editor

### Lifecycle

`EditorState` -> `EditorView` -> `DOM` -> `Events` -> `Transaction` -> `EditorState` ...

## Primitives

### Facet

Extension point

### StateField

Stateful data

### StateEffect

Side effects contributing to the `StateField`

### Decoration

Manipulate the DOM of a range of content in harmony with the `EditorView`

- Mark - Modify a range of content, such as adding classnames e.g. syntax highlighting
- Widget - Display a DOM element at a specific position
- Replace - Replace a range of content with a widget
- Line - Modify content on a line basis instead of a character basis

### ViewPlugin

Draw additional content in the editor in a way that isn't tied to a specific range.

Two way to create a `ViewPlugin`:

- `ViewPlugin.define`
- `ViewPlugin.fromClass`

### Transaction
