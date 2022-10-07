---
title: Spacing
desc: Standardized spacing values help us create consistent user interfaces (UIs). This consistency makes it easier for customers to scan, browse, and utilize our UIs as we're setting visual rhythms and expectations that customers can rely upon.
prev:
  text: Spot Illustrations
  link: /design/illustrations/spot
next:
  text: Components - Avatar
  link: /components/avatar.html
---

## Overview

Dialtone uses a spacing system based on a 4-pixel system, providing half-steps where deemed necessary. This 4px unit forms the base measurement unit for spacing in Dialtone.

<div class="d-ta-center">
  <img :src="$withBase('/assets/images/spacing-example.png')" alt="A layout example with spacing values to show how the spacing system is used." class="d-w80p" />
</div>

### CSS Variables

<spacing-system-table kind="css"></spacing-system-table>

### Less Variables

<spacing-system-table kind="less"></spacing-system-table>

## Utility Classes

Aside from the spacing variables, it may be necessary to use the following utility classes to manage interface spacing:

- [Auto Spacing](../../utilities/spacing/auto-spacing)
- [Line Height](../../utilities/typography/line-height)
- [Margin](../../utilities/spacing/margin)
- [Padding](../../utilities/spacing/padding)
