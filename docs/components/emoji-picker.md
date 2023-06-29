---
title: Emoji picker
thumb: true
image: assets/images/components/emoji-picker.png
description: A emoji picker component that allows you to view and select an emoji from a list.
status: beta
storybook: https://vue.dialpad.design/vue3/?path=/story/components-emoji-picker--default
---

```html
<template>
  <dt-emoji-picker
    :skin-tone="Default"
    :skin-selector-button-tooltip-label="'Change default skin tone'"
    :tab-set-labels="tabSetLabels[]"
    :recently-used-emojis="recentlyUsedEmojis[]"
    :search-results-label="'Search results'"
    :search-no-results-label="'Search results'"
    :search-placeholder-label="'Search...'"
    @skin-tone="skinTone = $event"
    @selected-emoji="selectedEmoji"
  />
</template>
```

## Vue API

<component-vue-api component-name="emojipicker" />
