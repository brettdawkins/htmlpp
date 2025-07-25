# `<x-form>`

The `<x-form>` component is a declarative replacement for form submission, error handling, and DOM updates without any client-side JavaScript logic.

---

## 🔍 Purpose

Enable fully functional, progressive-enhancement-friendly form submissions using native form markup + declarative behaviors.

---

## 💡 Syntax

```
<x-form
  action="/submit"
  method="POST"
  target="#message"
  replace
  reset
  validate
>
  <input type="email" name="email" required />
  <button>Subscribe</button>
</x-form>

<div id="message"></div>
```

---

## ⚙️ Attributes

| Attribute  | Description |
|------------|-------------|
| `action`    | URL to submit the form to |
| `method`    | HTTP method (`POST`, `GET`, `PUT`, etc.) |
| `target`    | Selector to inject the response into |
| `replace`   | Replace target's innerHTML (default: append) |
| `reset`     | Auto-reset form after successful submit |
| `validate`  | Enables native HTML5 validation |
| `error-target` | Selector to display error content |
| `loading-class` | Class to add to form during submission |

---

## 🧠 Behavior

1. Submits form via AJAX to `action` URL
2. Prevents default browser submission
3. If `validate` is enabled, runs built-in constraints first
4. Injects response into `target` (or `error-target` on failure)
5. Optionally resets form, updates history, applies loading state

---

## 🧪 Example

```
<x-form action="/comment" method="POST" target="#comments" replace>
  <textarea name="comment" required></textarea>
  <button>Post</button>
</x-form>

<ul id="comments"></ul>
```

---

## 🔁 Events

- `xform:submit`
- `xform:success`
- `xform:error`
- `xform:complete`

All cancellable, interceptable with `preventDefault()` or `customEvent.detail`.

---

## 🛡 Fallback

Works as native form if JS/runtime is unavailable. Full `<form>` semantics preserved.

---

## ✅ Status

**Spec Draft v0.1** — covers declarative form logic; future features include multi-step flows, progressive file upload.
