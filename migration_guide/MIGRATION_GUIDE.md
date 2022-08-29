# Dialtone 7 Migration guide

The migration from v6 to v7 is mostly visual. The purple color stops were updated.

Even the migration is very straightforward, you still need to search through your codebase
to make some decisions about the contrast ratio of some elements after the migration and check
that all of them meet the accessibility requirements.

## What changed:

- Updated hex values of `purple-100`, `purple-200` and `purple-300` stops.
- Merged old `purple-400` and `purple-500` stops into new `purple-400` stop
- Merged old `purple-600` and `purple-700` stops into new `purple-500` stop
- Mapped old `purple-800` stop into new `purple-600` stop
- Removed `--primary-color` variable.
- Removed `d-fc-primary` utility class.
- Removed `Spot Illustrations` theming capability.

![](purple_mappings.png)
![](previous_next_mappings.png)

## Migrating to v7

1. Install dialtone@7.X
   - `npm install @dialpad/dialtone@beta`
2. Replace the purple stops (`@purple-X`, `--purple-X`) in the next order.
   1. `purple-500` usages with `purple-400`
   2. `purple-600`, `purple-700` usages with `purple-500`
   3. `purple-800` usages with `purple-600`
3. Replace `--primary-color` with `purple-400`
   1. `var(--primary-color)`, `var(--primary-color-hsl)` → `hsl(var(--purple-400-h) var(--purple-400-s) var(--purple-400-l))`
   2. `var(--primary-color-hover);` → `hsl(var(--purple-400-h) var(--purple-400-s) calc(var(--purple-400-l) - 10%))`
   3. `var(--primary-color-h)` → `var(--purple-400-h)`
   4. `var(--primary-color-s)` → `var(--purple-400-s)`
   5. `var(--primary-color-l)` → `var(--purple-400-l)`
4. Replace `d-fc-primary` → `d-fc-purple` utility class.
5. Replace any old RAW HEX values with the updated one and if you can replace RAW 
values with the corresponding CSS variable, please do it.
   - (purple-100) `#ECE1FF` → `#EEE5FF` (purple-100)
   - (purple-200) `#D1C0FF` → `#D3BCFF` (purple-200)
   - (purple-300) `#A687FF` → `#AB7EFF` (purple-300)
   - (purple-400) `#8B65FF` → `#7C52FF` (purple-400)
   - (purple-500) `#6C3DFF` → `#7C52FF` (purple-400)
   - (purple-600) `#3A1C95` → `#3A1D95` (purple-500)
   - (purple-700) `#2A1173` → `#3A1D95` (purple-500)
   - (purple-800) `#160645` → `#10022C` (purple-600)
6. At last, check the usages you just replaced and ensure you still have the desired look and feel,
contrast ratio. If not, check with your designer which background/foreground color you should update 
to meet the accessibility requirements.

### Note for Dialtone-vue users

When you update Dialtone-vue to the latest beta version, all the components will have the new colors included.
