# Dialtone 7 Migration guide

Migration from version `6` to `7` is mostly visual, focusing on CSS updates.

While the migration is fairly straightforward, there may be instances where manual updates to a product's code are required. These are usually search-and-replace tasks, and may include decisions to be made with your Product Designer; for example, contrast ratios to meet accessibility requirements.

**⚠️ Note for `dialtone-vue`:** Updating `dialtone-vue` to the latest beta version components automatically receive Color updates.

## Changes

### Updated Color Ramps

✅ Complete 🟨 In Progress 🛑 TBD

- ✅ Purple
- 🟨 Blue
- 🟨 Tan
- 🛑 Green
- 🛑 Black
- 🛑 Yellow/Gold
- 🛑 Pink/Magenta
- 🛑 Red



#### Purple
1. Updated color values for `purple-100`, `purple-200` and `purple-300` stops.
1. Consolidated Dialtone v6's `purple-400` and `purple-500` stops into the redefined `purple-400` stop.
1. Consolidated Dialtone v6's `purple-600` and `purple-700` stops into the redefined `purple-500` stop.
1. Consolidated Dialtone v6's `purple-800` stop into the redefined `purple-600` stop.

[Before/After images to be replaced with one that reflects **all** Color Ramps once completed.]
Purple Remapping | Before and After
:-------------------------:|:-------------------------:
![](purple_mappings.png) | ![](previous_next_mappings.png)

#### Blue
[TBD]
#### Tan
[TBD]
#### Green
[TBD]
#### Black
[TBD]
#### Yellow/Gold
[TBD]
#### Pink/Magenta
[TBD]
#### Red
[TBD]

### Removed Primary Color Theme
- Removed the `--primary-color` theme variable.
- Removed `d-fc-primary` utility class.
- Removed Spot Illustrations' theming capability.

## Migration Steps

Follow steps in this exact order.

### 1. Update to Dialtone v7

```
npm install @dialpad/dialtone@beta
```

### 2. Replace color stops

Search for | Replace with
:-:|:-:
`purple-500` | `purple-400`
`purple-600` | `purple-500`
`purple-700` | `purple-500`
`purple-800` | `purple-600`
[others TBD, e.g. Green] | ...

### 3. Replace "Primary Color" theme uses

#### Custom CSS references to expired "Primary Color" CSS Variables

Search for | Replace with
:-:|:-:
`var(--primary-color)` | `hsl(var(--purple-400-h) var(--purple-400-s) var(--purple-400-l))`
`var(--primary-color-hsl)` | `hsl(var(--purple-400-h) var(--purple-400-s) var(--purple-400-l))`
`var(--primary-color-hover)` | `hsl(var(--purple-400-h) var(--purple-400-s) calc(var(--purple-400-l) - 10%))`
`var(--primary-color-h)` | `var(--purple-400-h)`
`var(--primary-color-s)` | `var(--primary-color-s)`
`var(--primary-color-l)` | `var(--purple-400-l)`

#### Replace "Primary Color" CSS Utility classes usage, e.g. `class="[UTILITY]`

Search for | Replace with
:-:|:-:
`d-fc-primary` | `d-fc-purple`

### 4. Replace hardcoded HEX values

Any custom CSS authored with HEX values (e.g. `#ff000`) should be replaced with its CSS Custom Property equivalent (e.g. `var(--[COLOR-STOP])`).

#### Example

Replace...

```css
.foo { color: #ECE1FF; }
```

...with
```css
.foo { color: var(--purple-100); }
```

Search for | Replace with
:-:|:-:
`#ECE1FF` | `var(--purple-100)`
`#A687FF` | `var(--purple-300)`
`#8B65FF` | `var(--purple-400)`
`#6C3DFF` | `var(--purple-400)`
`#3A1C95` | `var(--purple-500)`
`#2A1173` | `var(--purple-500)`
`#160645` | `var(--purple-600)`

### 5. Check color updates for readability

Check updates to confirm desired rendering and alignment to contrast accessibility requirements. When in doubt, confer with your Product Designer to identify a proper solution.