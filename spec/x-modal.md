# `<x-modal>`

The `<x-modal>` component provides a declarative interface for displaying modal dialogs, overlays, and lightboxes — without JavaScript.

---

## 🔍 Purpose

Enables accessible, flexible modal behavior with built-in open/close triggers and overlay management using just HTML.

---

## 💡 Syntax

```
<x-modal id="myModal">
  <template slot="content">
    <h2>Subscribe</h2>
    <form>
      <input type="email" placeholder="Email" />
      <button type="submit">Join</button>
    </form>
    <button close>Close</button>
  </template>
</x-modal>

<button open="#myModal">Open Modal</button>
```

---

## ⚙️ Attributes (on `<x-modal>`)

| Attribute | Description |
|----------|-------------|
| `id`        | Required. Target ID to match open/close triggers |
| `backdrop`  | Whether to show a background overlay (default: true) |
| `esc-close` | Allow ESC key to close modal (default: true) |
| `scroll-lock` | Prevent background scroll when open (default: true) |
| `animation` | Optional animation name (`fade`, `slide`, etc.) |

---

## 🧠 Behavior

- `<button open="#id">` opens the modal
- `[close]` element inside modal closes it
- ESC key closes if `esc-close` enabled
- Adds/removes `open` attribute on the modal
- Applies/removes `aria-hidden`, `role="dialog"`, focus trap

---

## 🧪 Example

```
<x-modal id="newsletter" backdrop scroll-lock>
  <template slot="content">
    <h1>Newsletter</h1>
    <p>Sign up below.</p>
    <form>...</form>
    <a close>Cancel</a>
  </template>
</x-modal>

<a open="#newsletter">Join Now</a>
```

---

## 🛡 Fallback

If JS/runtime is disabled, modal content stays in the DOM but hidden by default. Can optionally render non-modal fallback UI.

---

## ♿ Accessibility

- Traps focus inside modal when open
- Restores focus on close
- Sets `aria-modal`, `role="dialog"`, `aria-labelledby` automatically
- Screen reader-friendly

---

## ✅ Status

**Spec Draft v0.1** — pending extension with `<x-toggle>` and animation support.
