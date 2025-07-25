# `<x-pagination>`

The `<x-pagination>` element is a declarative, native component for handling paginated content without JavaScript.

---

## 🔍 Purpose

To replace JS-heavy pagination logic (fetching, state, URL updates, DOM replacement) with a browser-native solution.

---

## 💡 Syntax

```
<x-pagination
  src="/items"
  target="#results"
  params="q,sort"
  scroll="preserve"
  method="GET"
  history="push"
>
  <a page="1">1</a>
  <a page="2">2</a>
  <a page="3">3</a>
</x-pagination>

<div id="results"></div>
```

---

## ⚙️ Attributes

| Attribute  | Description |
|------------|-------------|
| `src`      | Base URL to fetch from |
| `target`   | CSS selector for element to swap content into |
| `params`   | Comma-separated list of query params to preserve |
| `scroll`   | `"preserve"` or `"top"` |
| `method`   | HTTP method to use (`GET`, `POST`, etc.) |
| `history`  | `"push"` or `"replace"` — controls history behavior |

---

## 🧠 Behavior

1. Clicking a `<a page="X">`:
   - Builds `src?page=X` with additional `params`
   - Sends request to server
   - Injects returned HTML into `target`
   - Pushes or replaces browser history
   - Optionally scrolls to top or preserves scroll

2. Works with browser `back`/`forward` buttons
3. Handles `<noscript>` fallback naturally

---

## 🧪 Example Output

Request: `/items?page=2&q=search&sort=name`  
Server returns fragment:

```
<div id="results">
  <ul>
    <li>Item A</li>
    <li>Item B</li>
  </ul>
</div>
```

---

## 🛡 Fallback

Without JavaScript or native runtime, `<x-pagination>` gracefully degrades to standard links.

---

## ✅ Status

**Spec Draft v0.1** — subject to iteration.

Next: `<x-fetch>`, `<x-toggle>`, `<x-modal>`
