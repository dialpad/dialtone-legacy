---
title: Avatar
desc: An avatar is a visual representation of a user or object.
storybook_url: https://vue.dialpad.design/?path=/story/components-avatar--default
figma_url: https://www.figma.com/file/2adf7JhZOncRyjYiy2joil/DT-Core%3A-Components-7?node-id=8918%3A21289&viewport=137%2C605%2C0.46&t=xHutRjwo1o5zMTgT-11
prev:
  text: Design - Spacing system
  link: /design/spacing/spacing-system.html
---

<code-well-header>
  <div class="d-avatar d-avatar--md d-avatar--icon d-avatar--purple-500">
    <img src="/assets/images/person.png" alt=""/>
  </div>
</code-well-header>

<!-- <component-combinator component-name="DtAvatar" /> -->

[//]: # (## Usage)
[//]: # (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa ante, tempus vitae lacus id, luctus tristique lorem. Mauris feugiat massa ex, id aliquet mi tempor non. Curabitur non tristique lectus. Fusce ut nisl non diam dignissim viverra. In posuere dui arcu, sed eleifend massa faucibus sed. Phasellus quis leo vitae erat pellentesque venenatis id vitae lectus. Suspendisse convallis, metus a congue tincidunt, velit sem tincidunt dui, eget auctor ipsum ipsum in ex. Nullam lobortis, mauris vel vestibulum rutrum, lorem elit vehicula est, nec viverra ante erat nec dolor. Proin at placerat tortor. Nam ullamcorper metus et eros porta, at lacinia leo scelerisque. Curabitur finibus sollicitudin odio tempor finibus. Donec lobortis metus vitae mollis gravida.)

## Variants and examples

### Icons

<code-well-header>
    <div class="d-avatar d-avatar--md d-avatar--icon d-avatar--purple-500">
        <IconGroup/>
    </div>
</code-well-header>

```html
<div class="d-avatar d-avatar--icon d-avatar--purple-500">...</div>
```

### Images

<code-well-header>
    <div class="d-avatar d-avatar--md d-avatar--icon d-avatar--purple-500">
        <img src="/assets/images/person.png" alt=""/>
    </div>
</code-well-header>

```html
<div class="d-avatar d-avatar--{$size}">
    <img src="/path/to/image" />
</div>
```

### Initials

<code-well-header>
    <div class="d-w100p d-fl-col4 d-flg4 d-fw-wrap d-jc-space-between">
        <div v-for="color in colors" class="d-d-fl d-fl-center d-mb8">
            <div class="d-avatar d-avatar--md d-avatar--initials" :class="color">DP</div>
        </div>
    </div>
</code-well-header>

```html
<div class="d-avatar d-avatar--initials d-avatar--{$color} ...">DP</div>
```

### Sizes

<code-well-header>
    <div class="d-d-inline-flex d-ai-center d-flow8">
        <div class="d-avatar d-avatar--sm d-avatar--purple-500 d-avatar--initials d-mb8">DP</div>
        <div class="d-avatar d-avatar--md d-avatar--purple-500 d-avatar--initials d-mb8">DP</div>
        <div class="d-avatar d-avatar--lg d-avatar--purple-500 d-avatar--initials d-mb8">DP</div>
    </div>
</code-well-header>

```html
<div class="d-avatar d-avatar--sm ...">DP</div>
<div class="d-avatar d-avatar--md ...">DP</div>
<div class="d-avatar d-avatar--lg ...">DP</div>
```

### Presence

<code-well-header>
    <div class="d-d-inline-flex d-ai-center d-flow8">
        <div class="d-avatar d-avatar--sm d-avatar--icon d-avatar--purple-500">
            <img src="/assets/images/person.png" alt=""/>
            <div class="d-avatar__presence">
                <example-presence presence="active"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--md d-avatar--icon d-avatar--purple-500">
            <img src="/assets/images/person.png" alt=""/>
            <div class="d-avatar__presence">
                <example-presence presence="busy"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--lg d-avatar--icon d-avatar--purple-500">
            <img src="/assets/images/person.png" alt=""/>
            <div class="d-avatar__presence">
                <example-presence presence="offline"/>
            </div>
        </div>
    </div>
    <div class="d-d-inline-flex d-ai-center d-flow8">
        <div class="d-avatar d-avatar--sm d-avatar--purple-500 d-avatar--initials">
            DP
            <div class="d-avatar__presence">
                <example-presence presence="active"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--md d-avatar--purple-500 d-avatar--initials">
            DP
            <div class="d-avatar__presence">
                <example-presence presence="busy"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--lg d-avatar--purple-500 d-avatar--initials">
            DP
            <div class="d-avatar__presence">
                <example-presence presence="away"/>
            </div>
        </div>
    </div>
    <div class="d-d-inline-flex d-ai-center d-flow8">
        <div class="d-avatar d-avatar--sm d-avatar--icon d-avatar--purple-500">
            <IconGroup/>
            <div class="d-avatar__presence">
                <example-presence presence="away"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--md d-avatar--icon d-avatar--purple-500">
            <IconGroup/>
            <div class="d-avatar__presence">
                <example-presence presence="offline"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--lg d-avatar--icon d-avatar--purple-500">
            <IconGroup/>
            <div class="d-avatar__presence">
                <example-presence presence="active"/>
            </div>
        </div>
    </div>
</code-well-header>

```html
<div class="d-avatar ...">
    ...
    <div class="d-avatar__presence">
        <div class="d-presence">
            <div class="d-presence__inner d-presence__inner--{$status}"></div>
        </div>
    </div>
</div>
```

## Classes

<component-class-table component-name="avatar"></component-class-table>

## Accessibility

Initial avatars' background and font color combinations have been paired to ensure minimum contrast is met.

When it comes to voiceover, avatars accompanying a label should generally be considered decorative and shouldn't be
focusable or read out. An example is a user's avatar next to their name.

Avatars unaccompanied by labels, especially those representing functionality or navigation, should be focusable and
readout in voiceover. Please refer
to [WCAG](https://www.w3.org/WAI/tutorials/images/decorative) references for
your specific usage.

<script setup>
import ExamplePresence from '@exampleComponents/ExamplePresence.vue';
import IconGroup from "@svgIcons/IconGroup.vue";
import { colors } from '@data/avatar.json';
</script>
