---
title: Tabs
desc: Tabs allow users to navigation between grouped content in different views while within the same page context.
storybook_url: https://vue.dialpad.design/?path=/story/components-tabs--default
---
## Examples
### Base Styles
<code-well-header bgclass="d-bgc-white">
  <example-tabs>
    <template #panel_content="{selected}">
      <div id="base-panel-1" role="tabpanel" tabindex="0" aria-labelledby="base-tab-1" :hidden="selected !== 0">
        <p>First tab content panel</p>
      </div>
      <div v-if="!size" id="base-panel-2" role="tabpanel" tabindex="0" aria-labelledby="base-tab-2" :hidden="selected !== 1">
        <p>Second tab content panel</p>
      </div>
      <div v-if="!size" id="base-panel-3" role="tabpanel" tabindex="0" aria-labelledby="base-tab-3" :hidden="selected !== 2">
        <p>Third tab content panel</p>
      </div>
    </template>
  </example-tabs>
</code-well-header>
    
```html
<div class="d-tablist js-tablist" role="tablist" aria-label="Label Example Group">
  <button class="d-tab d-tab--selected js-tab" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabindex="0">First tab</button>
  <button class="d-tab js-tab" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">Second tab</button>
  <button class="d-tab js-tab" role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1">Third tab</button>
</div>
<div id="panel-1" class="js-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
  <p>First tab content panel</p>
</div>
<div id="panel-2" class="js-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
  <p>Second tab content panel</p>
</div>
<div id="panel-3" class="js-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
  <p>Third tab content panel</p>
</div>
```

### Sizes
<code-well-header bgclass="d-bgc-white">
  <example-tabs />
  <example-tabs size="small" />
</code-well-header>
    
```html
<div class="d-tablist">…</div>
<div class="d-tablist d-tablist--sm">…</div>
```

### Border
Add a `d-tablist--no-border` to remove the bottom border of any tablist. Handy for small tablists and tablists serving as subtabs to a larger menu.

<code-well-header bgclass="d-bgc-white">
  <example-tabs borderless />
  <example-tabs size="small" borderless />
</code-well-header>
 
```html
<div class="d-tablist d-tablist--no-border">…</div>
<div class="d-tablist d-tablist--sm d-tablist--no-border">…</div>
```

### Inverted
Add `d-tablist--inverted` when you want to display tabs on a darker background.

<code-well-header bgclass="d-bgc-black-800">
  <example-tabs inverted>
    <template #panel_content="{selected}">
      <div id="inverted-panel-1" role="tabpanel" tabindex="0" aria-labelledby="inverted-tab-1" :hidden="selected !== 0">
        <p class="d-fc-white">First tab content panel</p>
      </div>
      <div v-if="!size" id="inverted-panel-2" role="tabpanel" tabindex="0" aria-labelledby="inverted-tab-2" :hidden="selected !== 1">
        <p class="d-fc-white">Second tab content panel</p>
      </div>
      <div v-if="!size" id="inverted-panel-3" role="tabpanel" tabindex="0" aria-labelledby="inverted-tab-3" :hidden="selected !== 2">
        <p class="d-fc-white">Third tab content panel</p>
      </div>
    </template>
  </example-tabs>
</code-well-header>
    
```html
<div class="d-tablist d-tablist--inverted">…</div>
```

## Classes
<component-class-table component-name="tabs" />

## Accessibility
To create accessible tabs, be sure to implement the <a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html" target="_blank">proper keyboard navigation</a> and utilize the following ARIA roles to properly declare element roles, content relationships, and current status:

<component-accessible-table component-name="tabs" />

<script setup>
  import ExampleTabs from "@exampleComponents/ExampleTabs.vue"; 
</script>
