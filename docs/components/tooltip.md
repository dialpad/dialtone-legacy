---
title: Tooltip
desc: A tooltip is a floating label that briefly explains an action, function, or an element. Its content is exclusively text and shouldn't be vital information for users. If richer media is desired, consider using a popover instead.
storybook_url: https://vue.dialpad.design/?path=/story/components-tooltip--default
---
<code-well-header bgclass="d-bgc-black-200" class='d-hmn264'>
  <button class="d-btn d-btn--outlined d-tooltip--hover" type="button">
    <div class="d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute">
      <span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!</span>
    </div>
    <span>Hover over me to see a tooltip</span>
  </button>
</code-well-header>

[//]: # (## Usage)
[//]: # (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa ante, tempus vitae lacus id, luctus tristique lorem. Mauris feugiat massa ex, id aliquet mi tempor non. Curabitur non tristique lectus. Fusce ut nisl non diam dignissim viverra. In posuere dui arcu, sed eleifend massa faucibus sed. Phasellus quis leo vitae erat pellentesque venenatis id vitae lectus. Suspendisse convallis, metus a congue tincidunt, velit sem tincidunt dui, eget auctor ipsum ipsum in ex. Nullam lobortis, mauris vel vestibulum rutrum, lorem elit vehicula est, nec viverra ante erat nec dolor. Proin at placerat tortor. Nam ullamcorper metus et eros porta, at lacinia leo scelerisque. Curabitur finibus sollicitudin odio tempor finibus. Donec lobortis metus vitae mollis gravida.)

## Variants and examples

### Base Styles

<code-well-header bgclass="d-bgc-black-200" class='d-hmn264'>
  <button class="d-btn d-btn--outlined d-tooltip--hover" type="button">
      <div class="d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute">
          <span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!</span>
      </div>
      <span>Hover over me to see a tooltip</span>
  </button>
</code-well-header>

```html
<button class="d-btn d-btn--outlined d-tooltip--hover" type="button">
    <div class="d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute">
        <span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!</span>
    </div>
    <span>Hover over me to see a tooltip</span>
</button>
```

<code-well-header>
  <div class="d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show">
    <span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!</span>
  </div>
</code-well-header>

```html
<div class="d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show">
    <span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!</span>
</div>
```

<code-well-header bgclass="d-bgc-black-800">
  <div class="d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show">
    <span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!</span>
  </div>
</code-well-header>

```html
<div class="d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show">
    <span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!</span>
</div>
```

### Arrow Directions

No arrow direction is assigned by default. You must select a direction. Twelve directions are offered: three on each face of the tooltip.

<code-well-header>
  <div v-for="dir in directions" class="d-w40p d-p12">
    <div class="d-tooltip d-tooltip--show" :class="'d-tooltip__arrow--'+dir">
      <span class="d-ff-mono d-fs-100 d-mb4">.d-tooltip__arrow--{{ dir }}</span>
      <div>
        <span>Arrow appears {{ capitalizeDirection(dir) }}.</span>
      </div>
    </div>
  </div>
</code-well-header>

## Classes

<component-class-table component-name="tooltip" />

## Accessibility

<component-accessible-table component-name="tooltip" />

<script>
export default {
  data() {
    return {
      directions: [
        'top-left',
        'top-center',
        'top-right',
        'right-top',
        'right-center',
        'right-bottom',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'left-top',
        'left-center',
        'left-bottom',
      ]
    }
  },
  methods: {
    capitalizeDirection(direction) {
      return direction.split('-').join(' ');
    },
  },
}
</script>
