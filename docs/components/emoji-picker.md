---
title: Emoji picker
thumb: true
image: assets/images/components/emoji-picker.png
description: A emoji picker component that allows you to view and select an emoji from a list.
status: beta
storybook: https://vue.dialpad.design/vue3/?path=/story/components-emoji-picker--default
---

<code-well-header>
  <dt-emoji-pickerAAA
    skin-tone="skinTone"
    tabSetLabels="[
      'Most recently used',
      'Smileys and people',
      'Nature',
      'Food',
      'Activity',
      'Travel',
      'Objects',
      'Symbols',
      'Flags',
    ]"
    skinSelectorButtonTooltipLabel="Change default skin tone"
    searchNoResultsLabel="No results"
    searchResultsLabel="Search results"
    searchPlaceholderLabel="Search..."
  />
</code-well-header>


```html
<dt-emoji-picker
    skin-tone="skinTone"
    tabSetLabels="[
      'Most recently used',
      'Smileys and people',
      'Nature',
      'Food',
      'Activity',
      'Travel',
      'Objects',
      'Symbols',
      'Flags',
    ]"
    skinSelectorButtonTooltipLabel="Change default skin tone"
    searchNoResultsLabel="No results"
    searchResultsLabel="Search results"
    searchPlaceholderLabel="Search..."
  />
```

## Vue API

<component-vue-api component-name="emojipicker" />
