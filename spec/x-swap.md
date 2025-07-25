# `<x-swap>`

The `<x-swap>` component performs declarative DOM replacement or merging using content fetched from a remote source or local template.

---

## 🔍 Purpose

Enable clean, minimal markup-driven DOM updates without manual `innerHTML`, virtual DOMs, or rehydration logic.

---

## 💡 Syntax

```
<x-swap
  src="/profile.html"
  target="#user-profile"
  trigger="click"
  method="GET"
  mode="replace"
/>
```

---

## ⚙️ Attributes

| Attribute | Description |
|-----------|-------------|
| `src`      | URL to fetch new content from |
| `target`   | CSS selector to update |
| `method`   | HTTP method (`GET`, `POST`, etc.) |
| `mode`     | `replace`, `append`, `prepend`, `merge`, `outer` |
| `trigger`  | Event to initiate swap (`click`, `visible`, `custom:event`) |
| `delay`    | Optional delay in ms before applying swap |
| `once`     | Prevent multiple swaps after first execution |
| `transition` | Named transition or animation to apply |

---

## 🧠 Swap Modes

- `replace`: Replace inner content of `target`
- `outer`: Replace entire target node
- `append`: Add to the end of `target`
- `prepend`: Add to the beginning
- `merge`: DOM-diff merge (if supported)

---

## 🧪 Example

```
<x-swap
  src="/sidebar.html"
  target="#sidebar"
  trigger="visible"
  once
/>
<div id="sidebar"></div>
```

Or via local templates:

```
<template id="profile-tpl">
  <div class="user">...</div>
</template>

<x-swap
  target="#container"
  trigger="click"
  mode="replace"
  src="#profile-tpl"
/>
```

---

## 🔁 Events & State

- Emits `xswap:before`, `xswap:after`, `xswap:error`
- Can be canceled or intercepted
- Syncs with `history.pushState` if paired with `<x-pagination>` or `<x-form>`

---

## 🛡 Fallback

If JS is unavailable, default content remains. Use `<noscript>` or `<x-fallback>` tags if needed.

---

## ✅ Status

**Spec Draft v0.1** — core behaviors defined, `merge` mode pending implementation.
