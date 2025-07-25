# `<x-state>`

The `<x-state>` component defines and manages local or global state in the DOM, enabling declarative, JavaScript-free reactivity and component coordination.

---

## 🔍 Purpose

Introduce shared, bindable state primitives that can be read, updated, and reacted to — without any external framework or JavaScript logic.

---

## 💡 Syntax

```
<x-state name="dark" value="false"></x-state>

<button set:dark="true">Enable Dark Mode</button>
<button set:dark="false">Disable</button>

<body bind:class="dark:dark-mode"></body>
```

---

## ⚙️ Attributes

| Attribute    | Description |
|--------------|-------------|
| `name`        | Required. Unique state identifier |
| `value`       | Initial value (string, boolean, number, or JSON) |
| `scope`       | `global` (default) or `local` to nearest parent |
| `persist`     | If present, persists state in `localStorage` |
| `bind:*`      | Binds attribute to state changes |
| `set:*`       | Updates state on event (click, change, etc.) |

---

## 🧠 Behavior

- `<x-state>` initializes with a value
- Elements with `bind:*` auto-update when state changes
- Elements with `set:*` update the corresponding state on interaction
- Triggers `xstate:change` on mutation
- Multiple components can react to the same state value

---

## 🧪 Examples

### 1. Toggle theme
```
<x-state name="dark" value="false" persist></x-state>
<button set:dark="!dark">Toggle</button>
<body bind:class="dark:dark,!:light"></body>
```

### 2. Multi-step form
```
<x-state name="step" value="1"></x-state>
<x-toggle target="#step1" bind:visible="step==1" />
<x-toggle target="#step2" bind:visible="step==2" />
<button set:step="2">Next</button>
```

---

## 🧬 Expressions

Supports:
- Booleans: `true`, `false`
- Numbers, strings, JSON
- Simple expressions: `!dark`, `step==2`, `value>3`

---

## 🛡 Fallback

If unsupported, static attributes remain. State will not sync or react.

---

## ✅ Status

**Spec Draft v0.1** — base state mechanism defined. Future includes derived state, computed values, and async support.
