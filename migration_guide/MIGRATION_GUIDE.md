# Dialtone 7 Migration guide

Migration from version `6` to `7` is mostly visual, focusing on CSS updates.

While the migration is fairly straightforward, there may be instances where manual updates to a product's code are required. These are usually search-and-replace tasks, and may include decisions to be made with your Product Designer; for example, contrast ratios to meet accessibility requirements.

**⚠️ Note for `dialtone-vue`:** Updating `dialtone-vue` to the latest beta version components automatically receive Color updates.

---

## Changes

### Color updates

<img width="1818" alt="image" src="https://user-images.githubusercontent.com/1165933/190548054-3600c97a-07ce-4f86-9882-7f7836af1393.png">

### Color: Updated Ramps

#### Purple
1. Updated color values for `purple-100`, `purple-200` and `purple-300` stops.
2. Consolidated Dialtone v6's `purple-400` and `purple-500` stops into the redefined `purple-400` stop.
3. Consolidated Dialtone v6's `purple-600` and `purple-700` stops into the redefined `purple-500` stop.
4. Consolidated Dialtone v6's `purple-800` stop into the redefined `purple-600` stop.

[Before/After images to be replaced with one that reflects **all** Color Ramps once completed.]

#### Blue

New Color Ramp

#### Tan

New Color Ramp

#### Green
1. Removed `green-600` and `green-700` color stops.
2. Updated color values for `green-100`, `green-200`, `green-300`, `green-400` and `green-500` stops.
3. Consolidated Dialtone v6's `green-100` and `green-200` stops into the redefined `green-100` stop.
4. Consolidated Dialtone v6's `green-300` stop into the redefined `green-200` stop.
5. Consolidated Dialtone v6's `green-400` stop into the redefined `green-300` stop.
6. Consolidated Dialtone v6's `green-500` and `green-600` stops into the redefined `green-400` stop.
7. Consolidated Dialtone v6's `green-700` stop into the redefined `green-500` stop.
#### Black
1. Removed `black-025`, `black-050`, `black-075` color stops.
2. Updated color values for `black-100`, `black-200`, `black-300`, `black-400`, `black-500`, `black-600`, `black-700`, `black-800`, `black-900` stops.
3. Consolidated Dialtone v6's `black-600` and `black-500` stops into the redefined `black-600` stop.
4. Consolidated Dialtone v6's `black-400` and `black-300` stops into the redefined `black-500` stop.
5. Consolidated Dialtone v6's `black-200` and `black-100` stops into the redefined `black-400` stop.
#### Yellow/Gold
1. Renamed `yellow-[100-700]` to `gold-[100-500]` color stops.
2. Consolidated Dialtone v6's `yellow-050`, `yellow-100` and `yellow-200` stops into the redefined `gold-100` stop.
3. Consolidated Dialtone v6's `yellow-300` and `yellow-400` stops into the redefined `gold-200` stop.
4. Consolidated Dialtone v6's `yellow-500` stop into the redefined `gold-300` stop.
5. Consolidated Dialtone v6's `yellow-600` stop into the redefined `gold-500` stop.
#### Pink/Magenta
1. Renamed `pink-[100-700]` to `magenta-[100-500]` color stops.
2. Consolidated Dialtone v6's `pink-100`, `pink-200` and `pink-300` stops into the redefined `magenta-100` stop.
3. Consolidated Dialtone v6's `pink-400` stop into the redefined `magenta-200` stop.
4. Consolidated Dialtone v6's `pink-500` stop into the redefined `magenta-300` stop.
5. Consolidated Dialtone v6's `pink-600` stop into the redefined `magenta-400` stop.
6. Consolidated Dialtone v6's `pink-700` stop into the redefined `magenta-500` stop.
#### Red
1. Removed `red-600` and `red-700` color stops.
2. Updated color values for `red-100`, `red-200`, `red-300`, `red-400`, `red-500` stops.
3. Consolidated Dialtone v6's `red-100`, `red-200` and `red-300` stops into the redefined `red-100` stop.
4. Consolidated Dialtone v6's `red-400` stop into the redefined `red-200` stop.
5. Consolidated Dialtone v6's `red-500` stop into the redefined `red-300` stop.
6. Consolidated Dialtone v6's `red-600` stop into the redefined `red-400` stop.
7. Consolidated Dialtone v6's `red-700` stop into the redefined `red-500` stop.

### Color: Removed Primary Theme
- Removed Spot Illustrations' theming capability.

### Color: New/Updated/Removed Text Color Variables

- Removed `--fc-dark` variable
- Removed `--fc-medium` variable
- Removed `--fc-light` variable
- Removed `--fc-lighter` variable
- Removed `--fc-purple` variable
- Removed `--fc-orange` variable
- Removed `--fc-magenta` variable
- Removed `--fc-green` variable
- Removed `--fc-yellow` variable
- Removed `--fc-red` variable
- Removed `--fc-danger` variable
- Removed `--fc-danger` variable
- Updated `--fc-muted` variable
- Updated `--fc-warning` variable
- Updated `--fc-warning` variable
- Added `fc-primary` variable
- Added `fc-primary-inverted` variable
- Added `fc-secondary` variable
- Added `fc-secondary-inverted` variable
- Added `fc-tertiary` variable
- Added `fc-placeholder` variable
- Added `fc-disabled` variable
- Added `fc-success` variable
- Removed `.d-fc-dark` CSS Utilities
- Added `.d-fc-primary` CSS Utilities
- Removed `.d-fc-medium` CSS Utilities
- Added `.d-fc-secondary` CSS Utilities
- Removed `.d-fc-lighter` CSS Utilities
- Removed `.d-fc-light` CSS Utilities
- Added `.d-fc-tertiary` CSS Utilities
- Added `.d-fc-muted` CSS Utilities
- Removed `.d-fc-purple` CSS Utilities
- Removed `.d-fc-orange` CSS Utilities
- Removed `.d-fc-magenta` CSS Utilities
- Removed `.d-fc-green` CSS Utilities
- Removed `.d-fc-yellow` CSS Utilities
- Removed `.d-fc-red` CSS Utilities
- Removed `.d-fc-danger` CSS Utilities
- Removed `.d-fc-blue` CSS Utilities
- Removed `.d-fc-tan` CSS Utilities

---

### Typography: Updated Font Stack
- Replaced `Inter` font with local system font stack.
- Replaced `RobotoMono` font with `SFMono`.
- Removed `fw-thin`, `fw-light` and `fw-black` variables (RobotoMono shims).
- `fw-medium` and `fw-semibold` are no longer restricted to Marketing use.

### Typography: Updated Font Size Ramps
- Removed `fs10`, `fs11`, `fs12`, `fs14`, `fs16`, `fs18`, `fs20`, `fs24`, `fs28`, `fs32`, `fs36`, `fs42`, `fs48`, `fs54`.

### Typography: New Body Styles

#### Body
* `d-body-base`
* `d-body-small`
* `d-body-compact`
* `d-body-compact-small`

#### Label
* `d-label-base`
* `d-label-small`
* `d-label-compact`
* `d-label-plain`
* `d-label-compact-plain`
* `d-label-compact-small`
* `d-label-plain-small`
* `d-label-compact-plain-small`

#### Helper
* `d-helper-base`
* `d-helper-small`

#### Code
* `d-code-base`
* `d-code-small`

### Typography: New Headline Styles
* `d-headline-eyebrow`
* `d-headline-small`
* `d-headline-medium`
* `d-headline-compact-small`
* `d-headline-compact-base`
* `d-headline-large`
* `d-headline-extra-large`
* `d-headline-extra-extra-large`

---

## Migration Steps

Follow steps in this exact order.

### 1. Update to Dialtone v7

```
npm install @dialpad/dialtone@beta
```

### 2. Color: Replace stops

Search for | Replace with
:-:|:-:
`purple-500` | `purple-400`
`purple-600` | `purple-500`
`purple-700` | `purple-500`
`purple-800` | `purple-600`
`black-500` | `black-600`
`black-400` | `black-500`
`black-300` | `black-500`
`black-200` | `black-400`
`black-100` | `black-400`
`black-075` | `black-300`
`black-050` | `black-200`
`black-025` | `black-100`
`green-200` | `green-100`
`green-300` | `green-200`
`green-400` | `green-300`
`green-500` | `green-400`
`green-600` | `green-400`
`green-700` | `green-500`
`red-200` | `red-100`
`red-300` | `red-100`
`red-400` | `red-200`
`red-500` | `red-300`
`red-600` | `red-400`
`red-700` | `red-500`
`pink-100` | `magenta-100`
`pink-200` | `magenta-100`
`pink-300` | `magenta-100`
`pink-400` | `magenta-200`
`pink-500` | `magenta-300`
`pink-600` | `magenta-400`
`pink-700` | `magenta-500`
`d-fc-pink` | `d-fc-magenta`
`yellow-050` | `gold-100`
`yellow-100` | `gold-100`
`yellow-200` | `gold-100`
`yellow-300` | `gold-200`
`yellow-400` | `gold-200`
`yellow-500` | `gold-300`
`yellow-600` | `gold-500`
`d-fc-yellow` | `d-fc-gold`
[others TBD, e.g. Green] | ...

<!-- ### 3. Color: Replace "Primary Color" theme uses

#### Custom CSS references to expired "Primary Color" CSS Variables

Search for | Replace with
:-:|:-:
`var(--primary-color)` | `hsl(var(--purple-400-h) var(--purple-400-s) var(--purple-400-l))`
`var(--primary-color-hsl)` | `hsl(var(--purple-400-h) var(--purple-400-s) var(--purple-400-l))`
`var(--primary-color-hover)` | `hsl(var(--purple-400-h) var(--purple-400-s) calc(var(--purple-400-l) - 10%))`
`var(--primary-color-h)` | `var(--purple-400-h)`
`var(--primary-color-s)` | `var(--purple-400-s)`
`var(--primary-color-l)` | `var(--purple-400-l)`

#### Replace "Primary Color" CSS Utility classes usage, e.g. `class="[UTILITY]"`

Search for | Replace with
:-:|:-:
`d-fc-primary` | `d-fc-purple` -->

### 3. Color: Replace Text Color Styles

#### Update color CSS variables

Search for | Replace with
:-:|:-:
`var(--fc-dark)` | `var(--fc-primary)`
`var(--fc-medium)` | `var(--fc-secondary)`
`var(--fc-lighter)` | `var(--fc-tertiary)`
`var(--fc-light)` | `var(--fc-tertiary)`
Any disabled element's text color | `var(--fc-disabled)`

#### Update Color CSS Utility class usage

Search for | Replace with
:-:|:-:
`fc-dark` | `fc-primary`
`fc-medium` | `fc-secondary`
`fc-lighter` | `fc-tertiary`
`fc-light` | `fc-tertiary`
`fc-purple` | `d-fc-purple-400`)

### 4. Color: Replace hardcoded HEX values

Any custom CSS authored with HEX values (e.g. `#ff0000`) should be replaced with its CSS Custom Property equivalent (e.g. `var(--[COLOR-STOP])`). If no equivalent exists, consult your Product Designer.

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
`#F2F2F6` | `var(--black-100)`
`#EAE9EF` | `var(--black-200)`
`#DFDEE5` | `var(--black-300)`
`#CDCDD8` | `var(--black-400)`
`#B3B0C0` | `var(--black-400)`
`#9C99AC` | `var(--black-500)`
`#7B7789` | `var(--black-500)`
`#575564` | `var(--black-600)`
`#444150` | `var(--black-600)`
`#322D37` | `var(--black-700)`
`#221F24` | `var(--black-800)`
`#0D0C0F` | `var(--black-900)`
`#EBFFE2` | `var(--green-100)`
`#D1FFBC` | `var(--green-100)`
`#9CFF6D` | `var(--green-200)`
`#6BEE04` | `var(--green-300)`
`#0C9B02` | `var(--green-400)`
`#0A5B03` | `var(--green-400)`
`#052F01` | `var(--green-500)`
`#FFF1F1` | `var(--red-100)`
`#FFD3D3` | `var(--red-100)`
`#FFA7A7` | `var(--red-100)`
`#FA4646` | `var(--red-200)`
`#D81616` | `var(--red-300)`
`#930000` | `var(--red-400)`
`#480000` | `var(--red-500)`
`#FFEBEC` | `var(--magenta-100)`
`#FFD8DA` | `var(--magenta-100)`
`#FDA2A8` | `var(--magenta-100)`
`#FF578A` | `var(--magenta-200)`
`#E92A7A` | `var(--magenta-300)`
`#A2114D` | `var(--magenta-400)`
`#57102E` | `var(--magenta-500)`
`#FBF8F1` | `var(--gold-100)`
`#FFF9E3` | `var(--gold-100)`
`#FFEEB0` | `var(--gold-100)`
`#FFDB59` | `var(--gold-200)`
`#FFCE1C` | `var(--gold-200)`
`#FFBC0F` | `var(--gold-300)`
`#3F2D00` | `var(--gold-500)`

### 5. Color: Check color updates for readability

Check updates to confirm desired rendering and alignment to contrast accessibility requirements. When in doubt, confer with your Product Designer to identify a proper solution.

### 6. Typography

#### Update font-weight CSS classes usage

Search for | Replace with
:-:|:-:
`d-fw-thin` | `d-fw-normal`
`d-fw-light` | `d-fw-normal`
`d-fw-black` | `d-fw-bold`

#### Update font-weight CSS variables

Search for | Replace with
:-:|:-:
`var(--fw-thin)` | `var(--fw-normal)`
`var(--fw-light)` | `var(--fw-normal)`
`var(--fw-black)` | `var(--fw-bold)`

#### Update font-size CSS classes usage

Search for | Replace with
:-:|:-:
`d-fs10` | `d-fs-100`
`d-fs11` | `d-fs-100`
`d-fs12` | `d-fs-100`
`d-fs14` | `d-fs-200`
`d-fs16` | `d-fs-200`
`d-fs18` | `d-fs-200`
`d-fs20` | `d-fs-300`
`d-fs24` | `d-fs-300`
`d-fs28` | `d-fs-400`
`d-fs32` | `d-fs-400`
`d-fs36` | `d-fs-400`
`d-fs42` | `d-fs-500`
`d-fs48` | `d-fs-500`
`d-fs54` | `d-fs-500`

#### Update font-size CSS variables

Search for | Replace with
:-:|:-:
`var(--fs10)` | `var(--fs-100)`
`var(--fs11)` | `var(--fs-100)`
`var(--fs12)` | `var(--fs-100)`
`var(--fs14)` | `var(--fs-200)`
`var(--fs16)` | `var(--fs-200)`
`var(--fs18)` | `var(--fs-200)`
`var(--fs20)` | `var(--fs-300)`
`var(--fs24)` | `var(--fs-300)`
`var(--fs28)` | `var(--fs-400)`
`var(--fs32)` | `var(--fs-400)`
`var(--fs36)` | `var(--fs-400)`
`var(--fs42)` | `var(--fs-500)`
`var(--fs48)` | `var(--fs-500)`
`var(--fs54)` | `var(--fs-500)`

Check updates to confirm desired readability. Most replacements are likely accurate, though they may need to be visually
validated.

#### Update relative line-height CSS classes usage

Search for | Replace with
:-:|:-:
`d-lh-tighter` | `d-lh-200`
`d-lh-tight`   | `d-lh-200`
`d-lh-normal`  | `d-lh-300`
`d-lh-loose`   | `d-lh-400`
`d-lh-looser`  | `d-lh-500`

#### Update line-height CSS variables

Search for | Replace with
:-:|:-:
`var(--lh-tighter)` | `var(--lh-200)`
`var(--lh-tight)`   | `var(--lh-200)`
`var(--lh-normal)`  | `var(--lh-300)`
`var(--lh-loose)`   | `var(--lh-400)`
`var(--lh-looser)`  | `var(--lh-500)`
