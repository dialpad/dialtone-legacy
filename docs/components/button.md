---
title: Button
desc: A button is a UI element which allows users to take an action throughout the app. It is important a button is identifiable, consistent, and communicates its actions clearly, and is appropriately sized to its action.
storybook_url: https://vue.dialpad.design/?path=/story/components-button--default
---
## Classes
<component-class-table component-name="button"></component-class-table>

## Examples
Dialtone provides four button styles:
1. <a href="#default" class="d-link">**Base:**</a> Our default (purple) button colors.
1. <a href="#danger" class="d-link">**Danger:**</a> Buttons associated with potentially destructive actions. Appears as red.
1. <a href="#inverted" class="d-link">**Inverted:**</a> For scenarios when you want to place a button on a non-white, dark background.
1. <a href="#muted" class="d-link">**Muted:**</a> For non-primary actions and contexts in which the base style may not work.

Each button style offers three levels of visual important:
1. **Primary:** This is the highest visual importance a button can have. It provides a background color.
1. **Outlined:** This button communicates slightly more importance than clear. It provides a border color, but no background color.
1. **Clear:** This button communicates the least importance. It offers no background or border color. It appears as a link with matching padding. This is typically used for secondary or minimally important actions. This is the default importance level of all buttons.

### Base
The base button should be the go-to button for most of your needs. When in doubt, use this style. To help provide clarity to users, it is generally recommended to use only one primary button style within a section or page.

<code-well-header>
  <div class="d-stack8">
      <div>
          <button class="d-btn d-btn--primary" type="button"><span class="d-btn__label">Place call</span></button>
      </div>
      <div>
          <button class="d-btn d-btn--outlined" type="button"><span class="d-btn__label">Place call</span></button>
      </div>
      <div>
          <button class="d-btn" type="button"><span class="d-btn__label">Place call</span></button>
      </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--primary" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--outlined" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn" type="button"><span class="d-btn__label">...</span></button>
```
### Danger
The danger button style is used to communicate destructive actions such as deleting content, accounts, or canceling services.

<code-well-header>
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--danger d-btn--primary" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--danger d-btn--outlined" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--danger" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--danger d-btn--primary" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--danger d-btn--outlined" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--danger" type="button"><span class="d-btn__label">...</span></button>
```

### Inverted
The inverted button style is used to visually separate buttons set on darker backgrounds.

<code-well-header bgclass="d-bgc-black-800">
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--inverted d-btn--primary" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--inverted d-btn--outlined" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--inverted" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--inverted d-btn--primary" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--inverted d-btn--outlined" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--inverted" type="button"><span class="d-btn__label">...</span></button>
```

### Muted
The muted button style is used to communicate non-primary actions for contexts in which the base style may not work (e.g. colored backgrounds, validation components, etc). This style’s use should be rare. When in doubt, use the <a href="#base" class="d-link">base button style</a>.

<code-well-header>
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--muted" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--muted d-btn--outlined" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
  </div>
</code-well-header>

 ```html
<button class="d-btn d-btn--muted" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--muted d-btn--outlined" type="button"><span class="d-btn__label">...</span></button>
```

### Disabled
Buttons can be disabled using either the `disabled` attribute or a Dialtone class. Use the attribute when a button should appear disabled and not recieve focus; use the class when a button should appear disabled but still recieve focus (i.e. a disabled button with a tooltip). Using the class also requires `aria-disabled` and a wrapper to display the "not allowed" pointer. Additional javascript implementation is required to prevent the click event.
All button styles and variations appear the same when disabled.

<code-well-header>
  <div class="d-stack8">
    <div>
      <button class="d-btn" type="button" disabled><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <span class="d-c-not-allowed">
        <button class="d-btn d-btn--disabled" type="button" aria-disabled="true"><span class="d-btn__label">Place call</span></button>
      </span>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn" type="button" disabled><span class="d-btn__label">...</span></button>
<span class="d-c-not-allowed">
  <button class="d-btn d-btn--disabled" type="button" aria-disabled="true"><span class="d-btn__label">...</span></button>
</span>
```

### Active
Buttons can be set to active state using the `.d-btn--active` Dialtone class.
Different button styles and variations appear different when active.

<code-well-header>
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--active" type="button">
        <span class="d-btn__label">Place call</span>
      </button>
    </div>
    <div>
      <button class="d-btn d-btn--primary d-btn--active" type="button">
        <span class="d-btn__label">Place call</span>
      </button>
    </div>
    <div>
      <button class="d-btn d-btn--danger d-btn--active" type="button">
        <span class="d-btn__label">Place call</span>
      </button>
    </div>
    <div>
      <button class="d-btn d-btn--inverted d-btn--primary d-btn--active" type="button">
        <span class="d-btn__label">Place call</span>
      </button>
    </div>
    <div>
      <button class="d-btn d-btn--muted d-btn--active" type="button">
        <span class="d-btn__label">Place call</span>
      </button>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--active" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--primary d-btn--active" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--danger d-btn--active" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--inverted d-btn--primary d-btn--active" type="button"><span class="d-btn__label">...</span></button>
```

### Link
Buttons can be styled as a <a href="components/link.html">link</a> in situations for which you need the appearance of a link but behavior of a button. Using the `button` element provides a better accessibility experience.

<code-well-header>
  <button type="button" class="d-link">Place call</button>
  <button type="button" class="d-link" disabled>Place call</button>
</code-well-header>

```html
<button type="button" class="d-link">...</button>
<button type="button" class="d-link" disabled>...</button>
```

### Loading
Loading buttons are useful for communicating a delay between the button interaction and its action taking place. Every button style can accept the loading button class, though we only provide a few possible examples.

<code-well-header>
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--loading d-btn--primary" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--loading d-btn--outlined" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--danger d-btn--loading" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--loading d-btn--primary" type="button"><span class="d-btn__label">Place call</span></button>
<button class="d-btn d-btn--loading d-btn--outlined" type="button"><span class="d-btn__label">Place call</span></button>
<button class="d-btn d-btn--danger d-btn--loading" type="button"><span class="d-btn__label">Place call</span></button>
```

### Icon Only
Sometimes an icon-only, circle button is desired. These buttons are used for toggling actions, navigation, or closing UI elements. Only the following styles accept circle button classes.

<code-well-header>
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--circle" type="button"><span class="d-btn__icon"><icon-phone/></span></button>
    </div>
    <div>
      <button class="d-btn d-btn--circle d-btn--outlined" type="button"><span class="d-btn__icon"><icon-phone/></span></button>
    </div>
    <div>
      <button class="d-btn d-btn--circle d-btn--danger" type="button"><span class="d-btn__icon"><icon-phone/></span></button>
    </div>
    <div>
      <button class="d-btn d-btn--circle d-btn--danger d-btn--outlined" type="button"><span class="d-btn__icon"><icon-phone/></span></button>
    </div>
    <div>
      <button class="d-btn d-btn--circle d-btn--danger d-btn--primary" type="button"><span class="d-btn__icon"><icon-phone/></span></button>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--circle" type="button">...</button>
<button class="d-btn d-btn--circle d-btn--outlined" type="button">...</button>
<button class="d-btn d-btn--circle d-btn--danger" type="button">...</button>
<button class="d-btn d-btn--circle d-btn--danger d-btn--outlined" type="button">...</button>
<button class="d-btn d-btn--circle d-btn--danger d-btn--primary" type="button">...</button>
```

<code-well-header bgclass="d-bgc-black-800">
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--circle d-btn--inverted" type="button"><span class="d-btn__icon"><icon-phone/></span></button>
    </div>
    <div>
      <button class="d-btn d-btn--circle d-btn--inverted d-btn--outlined" type="button"><span class="d-btn__icon"><icon-phone/></span></button>
    </div>
    <div>
      <button class="d-btn d-btn--circle d-btn--inverted d-btn--primary" type="button"><span class="d-btn__icon"><icon-phone/></span></button>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--circle btn--inverted" type="button">...</button>
<button class="d-btn d-btn--circle btn--inverted d-btn--outlined" type="button">...</button>
<button class="d-btn d-btn--circle btn--inverted d-btn--primary" type="button">...</button>
```

If you want to use the rectangular button, use the icon only styles.

<code-well-header>
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--icon-only" type="button"><span class="d-btn__icon"><icon-phone/></span></button>
    </div>
    <div>
      <button class="d-btn d-btn--icon-only d-btn--outlined" type="button"><span class="d-btn__icon"><icon-phone/></span></button>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--icon-only" type="button">...</button>
<button class="d-btn d-btn--icon-only d-btn--outlined" type="button">...</button>
```

### With Icons
Button labels can include an icon next to the text. Every button style can accept icon classes, though we only provide a few possible examples.

<code-well-header>
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--outlined" type="button">
        <span class="d-btn__icon d-btn__icon--left"><icon-phone/></span>
        <span class="d-btn__label">Label</span>
      </button>
    </div>
    <div>
      <button class="d-btn d-btn--outlined" type="button">
        <span class="d-btn__icon d-btn__icon--right"><icon-phone/></span>
        <span class="d-btn__label">Label</span>
      </button>
    </div>
    <div>
      <button class="d-btn d-btn--outlined d-btn--vertical" type="button">
        <span class="d-btn__icon d-btn__icon--top"><icon-phone/></span>
        <span class="d-btn__label">Label</span>
      </button>
    </div>
    <div>
      <button class="d-btn d-btn--outlined d-btn--vertical" type="button">
        <span class="d-btn__icon d-btn__icon--bottom"><icon-phone/></span>
        <span class="d-btn__label">Label</span>
      </button>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--outlined" type="button">
  <span class="d-btn__icon d-btn__icon--left">...</span>
  <span class="d-btn__label">...</span>
</button>
<button class="d-btn d-btn--outlined" type="button">
  <span class="d-btn__icon d-btn__icon--right">...</span>
  <span class="d-btn__label">...</span>
</button>
<button class="d-btn d-btn--vertical d-btn--outlined" type="button">
  <span class="d-btn__icon d-btn__icon--top">...</span>
  <span class="d-btn__label">...</span>
</button>
<button class="d-btn d-btn--vertical d-btn--outlined" type="button">
  <span class="d-btn__icon d-btn__icon--bottom">...</span>
  <span class="d-btn__label">...</span>
</button>
```

### Branded
We provide the following branded buttons for log-in and sign-up workflows.

<code-well-header>
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--brand d-btn--google d-w100p" type="button"><span class="d-btn__icon"><icon-google-glyph /></span><span class="d-btn__label">Log in with Google</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--brand d-btn--o365 d-w100p" type="button"><span class="d-btn__icon"><icon-office-365 /></span><span class="d-btn__label">Log in with Office365</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--brand d-btn--linkedin d-w100p" type="button"><span class="d-btn__icon"><icon-linkedin /></span><span class="d-btn__label">Log in with LinkedIn</span></button>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--brand d-btn--google" type="button">
  <span class="d-btn__icon"><icon-google-glyph /></span>
  <span class="d-btn__label">Log in with Google</span>
</button>
<button class="d-btn d-btn--brand d-btn--o365" type="button">
  <span class="d-btn__icon"><icon-google-glyph /></span>
  <span class="d-btn__label">Log in with Office365</span>
</button>
<button class="d-btn d-btn--brand d-btn--linkedin" type="button">
  <span class="d-btn__icon"><icon-google-glyph /></span>
  <span class="d-btn__label">Log in with LinkedIn</span>
</button>
```

### Sizes
The base button font size is 16px and should be used in most cases. Every button style can accept size classes, though we only provide a few possible examples.

<code-well-header>
  <div class="d-stack8">
    <div>
      <button class="d-btn d-btn--primary d-btn--xs" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--primary d-btn--sm" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--primary" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--primary d-btn--lg" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
    <div>
      <button class="d-btn d-btn--primary d-btn--xl" type="button"><span class="d-btn__label">Place call</span></button>
    </div>
  </div>
</code-well-header>

```html
<button class="d-btn d-btn--primary d-btn--xs" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--primary d-btn--sm" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--primary" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--primary d-btn--lg" type="button"><span class="d-btn__label">...</span></button>
<button class="d-btn d-btn--primary d-btn--xl" type="button"><span class="d-btn__label">...</span></button>
```

## Accessibility

- Disabled buttons don't require focus.
- If using `.d-btn--disabled`, also use `aria-disabled="true"` and be sure to prevent the click event.
- If an icon and text are both included in a button's label, and they both represent the same thing, the icon may be decorative and may not need to receive focus or be read-out.
- If developing a toggle button (i.e. a button that holds a pressed/unpressed state), use `aria-pressed`. (<a href="https://www.w3.org/TR/wai-aria/#button" class="d-link" target="_blank">Source</a>)
- If developing a button that triggers a dropdown, consider using `aria-haspop` and `aria-expanded`. (<a href="https://www.w3.org/TR/wai-aria/#button" class="d-link" target="_blank">Source</a>)

<script setup>
  import IconPhone from '@svgIcons/IconPhone.vue';
  import IconGoogleGlyph from '@svgIcons/IconGoogleGlyph.vue';
  import IconOffice365 from '@svgIcons/IconOffice365.vue';
  import IconLinkedin from '@svgIcons/IconLinkedin.vue';
</script>
