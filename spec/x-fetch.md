# `<x-fetch>`

The `<x-fetch>` component performs a declarative fetch from a given URL and injects the response into the DOM — no JavaScript needed.

---

## 🔍 Purpose

Eliminate manual `fetch()` boilerplate for simple content loading, conditional rendering, or deferred data injection.

---

## 💡 Syntax

```
<x-fetch
  src="/fragment.html"
  target="#container"
  trigger="load"
  method="GET"
  params="user_id"
  once
/>
```

---

## ⚙️ Attributes

| Attribute | Description |
|----------|-------------|
| `src`     | URL to fetch from |
| `target`  | CSS selector to inject content |
| `method`  | HTTP method (`GET`, `POST`, etc.) |
| `params`  | Query params to include (auto-bound from URL or global context) |
| `trigger` | When to fetch: `load`, `visible`, `click`, or custom event |
| `once`    | Prevents refetching on repeat triggers |
| `replace` | Optional — replaces target element instead of injecting into it |

---

## 🧠 Behavior

- On specified `trigger`, builds the `src` URL with `params` if defined
- Fetches response via XHR/fetch
- Injects or replaces target element
- Optionally stores state for back/forward restoration

---

## 🧪 Example

```
<x-fetch
  src="/recommendations"
  target="#sidebar"
  trigger="visible"
  once
/>
<div id="sidebar"></div>
```

→ Automatically injects content once sidebar scrolls into view.

---

## 🔁 Trigger Types

- `load` → fetches on page load
- `click` → requires a matching click target (`x-fetch[for="#btn"]`)
- `visible` → IntersectionObserver triggers fetch on view
- `custom:eventName` → listens for a DOM event

---

## 🛡 Fallback

If JS is disabled, `<x-fetch>` does nothing and the `target` element remains untouched.

---

## ✅ Status

**Spec Draft v0.1** — pending runtime behavior definition + browser polyfill.
