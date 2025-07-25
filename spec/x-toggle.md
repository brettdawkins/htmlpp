# `<x-toggle>`

The `<x-toggle>` component shows, hides, or toggles visibility of a target element based on declarative triggers — no JavaScript required.

---

## 🔍 Purpose

Replaces JS-based toggling (`.classList.toggle()`, `style.display`, etc.) with a built-in HTML primitive.

---

## 💡 Syntax

```
<x-toggle
  target="#details"
  trigger="click"
  class="active"
  mode="toggle"
/>
```

---

## ⚙️ Attributes

| Attribute | Description |
|----------|-------------|
| `target`   | Selector of the element to show/hide |
| `trigger`  | Event type to listen for (`click`, `hover`, `focus`, etc.) |
| `class`    | Optional class to toggle on the target |
| `mode`     | `"toggle"` (default), `"show"`, or `"hide"` |
| `delay`    | Optional delay before toggling (ms) |
| `group`    | Optional group name for radio-style toggling |

---

## 🧠 Behavior

- Listens to trigger event on self
- Based on `mode`, toggles visibility (`display: none`) or toggles class
- If `group` is defined, hides all others in group when toggled on

---

## 🧪 Examples

### 1. Toggle visibility
```
<x-toggle target="#bio" trigger="click" mode="toggle">Show Bio</x-toggle>
<div id="bio" hidden>This is the bio.</div>
```

### 2. Toggle class
```
<x-toggle target="body" class="dark-mode" trigger="click">Toggle Dark</x-toggle>
```

---

## 🔁 Mode Options

- `toggle`: shows if hidden, hides if shown
- `show`: always show on trigger
- `hide`: always hide on trigger

---

## 🛡 Fallback

Acts as a regular element (e.g., `<button>`, `<a>`) with no effect if JS is disabled or runtime unsupported.

---

## ✅ Status

**Spec Draft v0.1** — ready for runtime proposal and integration with `<x-modal>` and `<x-accordion>`
