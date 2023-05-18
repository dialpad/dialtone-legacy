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
        <div class="d-avatar d-avatar--lg">
            <div class="d-avatar__canvas">
                <span class="d-avatar__icon">
                    <dt-icon name="user" size="500" />
                </span>
            </div>
        </div>
        <div class="d-avatar d-avatar--lg d-avatar--color-1000">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">DP</span>
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
                <example-presence presence="active"/>
            </div>
        </div>
    </div>
</code-well-header>

<!-- <component-combinator component-name="DtAvatar" /> -->

## Usage

<table class="d-table dialtone-doc-table d-mb16">
    <colgroup>
        <col class="d-w64">
        <col>
        <col>
        <col>
    </colgroup>
    <thead>
        <tr>
            <th colspan="2">Type</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="d-d-inline-flex">
                    <div class="d-avatar d-avatar--md">
                        <div class="d-avatar__canvas">
                            <span class="d-avatar__icon">
                                <dt-icon name="user" size="400" />
                            </span>
                        </div>
                    </div>
                </div>
            </td>
            <th class="d-ta-left"><a class="d-link" href="#icon">Icon</a></th>
            <td>When no username can be associated with the Avatar.</td>
        </tr>
        <tr>
            <td>
                <div class="d-d-inline-flex">
                    <div class="d-avatar d-avatar--md d-avatar--color-1600">
                        <div class="d-avatar__canvas">
                            <span class="d-avatar__initials">DP</span>
                        </div>
                    </div>
                </div>
            </td>
            <th class="d-ta-left"><a class="d-link" href="#initials">Initials</a></th>
            <td>When the user's name is known.</td>
        </tr>
        <tr>
            <td>
                <div class="d-d-inline-flex">
                    <div class="d-avatar d-avatar--md">
                        <div class="d-avatar__canvas">
                            <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
                        </div>
                    </div>
                </div>
            </td>
            <th class="d-ta-left"><a class="d-link" href="#image">Image</a></th>
            <td>When a custom image has been uploaded.</td>
        </tr>
        <tr>
            <td>
                <div class="d-avatar d-avatar--group">
                    <div class="d-avatar__canvas">
                        <img class="d-avatar__image" src="/assets/images/person.png" alt=""/>
                    </div>
                    <span class="d-avatar__count"><span class="d-avatar__count-number">3</span></span>
                </div>
            </td>
            <th class="d-ta-left"><a class="d-link" href="#group">Group</a></th>
            <td>When reflecting more than 2 participants.</td>
        </tr>
    </tbody>
</table>

## Variants and examples

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
            <div class="d-avatar d-avatar--md d-avatar--color-1100">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1200">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
        </dt-stack>
        <dt-stack gap="500">
            <div class="d-avatar d-avatar--md d-avatar--color-1300">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1400">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1500">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
        </dt-stack>
        <dt-stack gap="500">
            <div class="d-avatar d-avatar--md d-avatar--color-1600">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1700">
                <div class="d-avatar__canvas">
                    <span class="d-avatar__initials">DP</span>
                </div>
            </div>
            <div class="d-avatar d-avatar--md d-avatar--color-1800">
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

### Sizes

<code-well-header>
    <div class="d-d-inline-flex d-ai-center d-flow8">
        <div class="d-avatar d-avatar--xs">
            <div class="d-avatar__canvas"></div>
        </div>
        <div class="d-avatar d-avatar--sm">
            <div class="d-avatar__canvas">
                <span class="d-avatar__icon">
                    <dt-icon name="user" size="200" />
                </span>
            </div>
        </div>
        <div class="d-avatar d-avatar--md">
            <div class="d-avatar__canvas">
                <span class="d-avatar__icon">
                    <dt-icon name="user" size="400" />
                </span>
            </div>
        </div>
        <div class="d-avatar d-avatar--lg">
            <div class="d-avatar__canvas">
                <span class="d-avatar__icon">
                    <dt-icon name="user" size="500" />
                </span>
            </div>
        </div>
        <div class="d-avatar d-avatar--xl">
            <div class="d-avatar__canvas">
                <span class="d-avatar__icon">
                    <dt-icon name="user" size="600" />
                </span>
            </div>
        </div>
    </div>
</code-well-header>

```html
    <div class="d-avatar d-avatar--xs">
        ...
    </div>
    <div class="d-avatar d-avatar--sm">
        ...
    </div>
    <div class="d-avatar d-avatar--md">
        ...
    </div>
    <div class="d-avatar d-avatar--lg">
        ...
    </div>
    <div class="d-avatar d-avatar--xl">
        ...
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
        <div class="d-avatar d-avatar--color-1200 d-avatar--xs">
            <div class="d-avatar__canvas"></div>
            <div class="d-avatar__presence">
                <example-presence presence="active"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--color-500 d-avatar--sm">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">W</span>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="active"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--color-800 d-avatar--md">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">FR</span>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="busy"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--color-1200 d-avatar--lg">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">JH</span>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="offline"/>
            </div>
        </div>
        <div class="d-avatar d-avatar--color-1500 d-avatar--xl">
            <div class="d-avatar__canvas">
                <span class="d-avatar__initials">AE</span>
            </div>
            <div class="d-avatar__presence">
                <example-presence presence="offline"/>
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
