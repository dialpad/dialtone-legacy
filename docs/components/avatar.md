---
title: Avatar
description: An avatar is a visual representation of a user or object.
status: new
thumb: true
image: assets/images/components/avatar.png
storybook: https://vue.dialpad.design/?path=/story/components-avatar--default
figma_url: https://www.figma.com/file/2adf7JhZOncRyjYiy2joil/DT-Core%3A-Components-7?node-id=8918%3A21289&viewport=137%2C605%2C0.46&t=xHutRjwo1o5zMTgT-11
---

<code-well-header>
    <div class="d-d-inline-flex d-ai-center d-flow16">
        <div class="d-avatar d-avatar--xl">
            <div class="d-avatar__canvas">
                <span class="d-avatar__icon">
                    <dt-icon name="user" size="600" />
                </span>
            </div>
        </div>
        <div class="d-avatar d-avatar--xl d-avatar--color-1000">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">DP</span>
            </div>
        </div>
        <div class="d-avatar d-avatar--xl">
            <div class="d-avatar__canvas">
                <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="active"/>
            </div>
        </div>
    </div>
</code-well-header>

<!-- <component-combinator component-name="DtAvatar" /> -->

## Style

<div class="d-bgc-critical d-p32 d-fs-500 d-fw-bold d-ta-center">
    TODO
</div>

### Example

<div class="d-bgc-critical d-p32 d-fs-500 d-fw-bold d-ta-center">
    TODO
</div>

## Variants and examples

### Image

<code-well-header>
    <div class="d-avatar d-avatar--md">
        <div class="d-avatar__canvas">
            <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
        </div>
    </div>
</code-well-header>

```html
<div class="d-avatar d-avatar--{$size}">
    <div class="d-avatar__canvas">
        <img class="d-avatar__image" src="/path/to/image" />
    </div>
</div>
```

### Initials

<code-well-header>
    <dt-stack direction="row" gap="500">
        <dt-stack gap="500">
            <div class="d-avatar d-avatar--md d-avatar--color-100">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-200">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-300">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
        </dt-stack>
        <dt-stack gap="500">
            <div class="d-avatar d-avatar--md d-avatar--color-400">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-500">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-600">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
        </dt-stack>
        <dt-stack gap="500">
            <div class="d-avatar d-avatar--md d-avatar--color-700">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-800">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-900">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
        </dt-stack>
        <dt-stack gap="500">
            <div class="d-avatar d-avatar--md d-avatar--color-1000">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1010">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1020">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
        </dt-stack>
        <dt-stack gap="500">
            <div class="d-avatar d-avatar--md d-avatar--color-1030">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1040">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1050">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
        </dt-stack>
        <dt-stack gap="500">
            <div class="d-avatar d-avatar--md d-avatar--color-1060">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1070">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1080">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
        </dt-stack>
    </dt-stack>
</code-well-header>

```html
<div class="d-avatar d-avatar--{$size} d-avatar--{$color}">
    <div class="d-avatar__canvas">
        <span class="d-avatar__initials">DP</span>
    </div>
</div>
```

### Icon

<code-well-header>
    <div class="d-avatar d-avatar--md">
        <div class="d-avatar__canvas">
            <span class="d-avatar__icon">
                <dt-icon name="user" size="300" />
            </span>
        </div>
    </div>
</code-well-header>

```html
<div class="d-avatar d-avatar--{$size}">
    <div class="d-avatar__canvas">
        <span class="d-avatar__icon">
            <dt-icon name="{$icon_name}" size="{$icon_size}" />
        </span>
    </div>
</div>
```

### Sizes

<code-well-header>
    <div class="d-d-inline-flex d-ai-center d-flow8">
        <div class="d-avatar d-avatar--xs">
            <div class="d-avatar__canvas"></div>
        </div>
        <div class="d-avatar d-avatar--sm">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">D</span>
            </div>
        </div>
        <div class="d-avatar d-avatar--md">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">DP</span>
            </div>
        </div>
        <div class="d-avatar d-avatar--lg">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">DP</span>
            </div>
        </div>
        <div class="d-avatar d-avatar--xl">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">DP</span>
            </div>
        </div>
    </div>
</code-well-header>

```html
    <div class="d-avatar d-avatar--xs">
        <div class="d-avatar__canvas"></div>
    </div>
    <div class="d-avatar d-avatar--sm">
        <div class="d-avatar__canvas">
            <span class="d-avatar__initials">DP</span>
        </div>
    </div>
    <div class="d-avatar d-avatar--md">
        <div class="d-avatar__canvas">
            <span class="d-avatar__initials">DP</span>
        </div>
    </div>
    <div class="d-avatar d-avatar--lg">
        <div class="d-avatar__canvas">
            <span class="d-avatar__initials">DP</span>
        </div>
    </div>
    <div class="d-avatar d-avatar--xl">
        <div class="d-avatar__canvas">
            <span class="d-avatar__initials">DP</span>
        </div>
    </div>
```

### Presence

Positions the [Presence](/components/presence.html) component at each size.

<code-well-header>
    <div class="d-d-inline-flex d-ai-center d-flow8">
        <div class="d-avatar d-avatar--xs">
            <div class="d-avatar__canvas">
                <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="active"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--sm">
            <div class="d-avatar__canvas">
                <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="active"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--md">
            <div class="d-avatar__canvas">
                <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="busy"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--lg">
            <div class="d-avatar__canvas">
                <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="offline"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--xl">
            <div class="d-avatar__canvas">
                <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="offline"/>
            </div>
        </div>
    </div>
    <div class="d-d-inline-flex d-ai-center d-flow8">
        <div class="d-avatar d-avatar--xs">
            <div class="d-avatar__canvas"></div>
            <div class="d-avatar__presence">
                <example-presence presence="active"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--sm">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">D</span>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="active"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--md">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">DP</span>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="busy"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--lg">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">DP</span>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="away"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--xl">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">DP</span>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="away"/>
            </div>
        </div>
    </div>
</code-well-header>

```html
<div class="d-avatar d-avatar--{$size)">
    <div class="d-avatar__canvas">
        ...
    </div>
    <div class="d-avatar__presence">
        <div class="d-presence">
            <div class="d-presence__inner d-presence__inner--{$status}"></div>
        </div>
    </div>
</div>
```

### Group

<code-well-header>
    <div class="d-d-inline-flex d-ai-center d-flow8">
        <div class="d-avatar d-avatar--group">
            <div class="d-avatar__canvas">
                <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
            </div>
            <span class="d-avatar__count"><span class="d-avatar__count-number">11</span></span>
        </div>
        <div class="d-avatar d-avatar--group">
            <div class="d-avatar__canvas">
                <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
            </div>
            <span class="d-avatar__count"><span class="d-avatar__count-number">3</span></span>
        </div>
    </div>
</code-well-header>

```html
<div class="d-avatar d-avatar--group">
    <div class="d-avatar__canvas">
        <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
    </div>
    <span class="d-avatar__count"><span class="d-avatar__count-number">12</span></span>
</div>
<div class="d-avatar d-avatar--group">
    <div class="d-avatar__canvas">
        <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
    </div>
    <span class="d-avatar__count"><span class="d-avatar__count-number">1</span></span>
</div>
```

## Vue API

<component-vue-api component-name="avatar" />

## Classes

<component-class-table component-name="avatar"></component-class-table>

## Accessibility

Initial avatars' background and font color combinations have been paired to ensure minimum contrast is met.

When it comes to voiceover, avatars accompanying a label should generally be considered decorative,
is not focusable, nor is it read out. An example is a user's avatar next to their name.

Avatars unaccompanied by labels, especially those representing functionality or navigation, should be focusable and
read out in voiceover. Please refer
to [WCAG](https://www.w3.org/WAI/tutorials/images/decorative) references for
your specific usage.

<script setup>
import ExamplePresence from '@exampleComponents/ExamplePresence.vue';
</script>
