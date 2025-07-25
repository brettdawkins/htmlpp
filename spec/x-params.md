# `<x-params>`

The `<x-params>` component binds URL query parameters and global state to DOM elements declaratively — allowing two-way sync between UI and browser state without JS.

---

## 🔍 Purpose

Eliminate the need for custom logic to sync filters, inputs, toggles, or selections with URL query params — enabling deep linking and state persistence via markup.

---

## 💡 Syntax

```
<x-params>
  <input type="text" name="q" param="q" />
  <select name="sort" param="sort">
    <option value="asc">Asc</option>
    <option value="desc">Desc</option>
  </select>
</x-params>
```

---

## ⚙️ Attributes (on children)

| Attribute | Description |
|----------|-------------|
| `param`   | Binds the element’s value to a query param |
| `default` | Optional default value if param not present |
| `debounce` | Delay updates (in ms) for inputs |

---

## 🧠 Behavior

- On load:
  - Reads current URL params
  - Sets bound input/select/etc. values
- On change:
  - Updates `history.pushState` with updated param
  - Triggers custom `xparam:change` event
- Optionally emits custom event or triggers `<x-fetch>`, `<x-swap>`, etc.

---

## 🧪 Example

```
<x-params>
  <input param="search" name="search" placeholder="Search..." />
  <select param="category">
    <option value="">All</option>
    <option value="books">Books</option>
    <option value="videos">Videos</option>
  </select>
</x-params>

<x-fetch src="/items" target="#results" trigger="xparam:change" params="search,category" />
<div id="results"></div>
```

---

## 🔁 Extras

- Emits `xparam:change` on updates
- Can be triggered manually via `dispatchEvent()`
- Supports binding `checkbox`, `radio`, `range`, `hidden`, etc.

---

## 🛡 Fallback

If JS is disabled, fields behave as normal — no syncing, but graceful degradation.

---

## ✅ Status

**Spec Draft v0.1** — core sync behavior outlined. Future: support for JSON-encoded complex objects, state binding, `<x-state>` integration.
