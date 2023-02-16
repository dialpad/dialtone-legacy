---
title: Stack
description: Stack is a layout component used to group elements together and apply a space between them.
status: beta
thumb: true
image: assets/images/components/stack.png
storybook: https://vue.dialpad.design/?path=/story/components-stack--default
---



<code-well-header>
    <div class="d-stack d-stack--row d-stack--gap-400">
      <div class="d-bgc-magenta-100">
        Stack item 1
      </div>
      <div class="d-bgc-magenta-100">
        Stack item 2
      </div>
      <div class="d-bgc-magenta-100">
        Stack item 3
      </div>
    </div>
</code-well-header>

```html
<div class="d-stack d-stack--row d-stack--gap-400">
  <div class="d-bgc-magenta-100">
    Stack item 1
  </div>
  <div class="d-bgc-magenta-100">
    Stack item 2
  </div>
  <div class="d-bgc-magenta-100">
    Stack item 3
  </div>
</div>
```

## Examples

### Stacks column at small screen size and column reverse at large screen

<code-well-header>
    <div class="d-stack d-stack--row d-stack--sm--column d-stack--lg--column-reverse d-stack--gap-100">
      <div class="d-bgc-magenta-100">
        Stack item 1
      </div>
      <div class="d-bgc-magenta-100">
        Stack item 2
      </div>
      <div class="d-bgc-magenta-100">
        Stack item 3
      </div>
    </div>
</code-well-header>

```html
<div class="d-stack d-stack--row d-stack--sm--column d-stack--lg--column-reverse d-stack--gap-100">
  <div class="d-bgc-magenta-100">
    Stack item 1
  </div>
  <div class="d-bgc-magenta-100">
    Stack item 2
  </div>
  <div class="d-bgc-magenta-100">
    Stack item 3
  </div>
</div>
```

### Stacks row with gap 300 and stacks in row reverse the second element with gap 600

<code-well-header>
    <section class="d-stack d-stack--row d-stack--gap-300">
      <div class="d-bgc-magenta-100">
        Stack item 1
      </div>
      <div>
        <div class="d-bgc-magenta-100">
          Stack item 2
        </div>
        <div class="d-stack d-stack--row-reverse d-stack--gap-600">
          <div class="d-bgc-magenta-100">
            Stack item 3
          </div>
          <div class="d-bgc-magenta-100">
            Stack item 4
          </div>
        </div>
      </div>
    </section>
</code-well-header>

```html
<section class="d-stack d-stack--row d-stack--gap-300">
  <div>Stack item 1</div> 
  <div>
    <div>Stack item 2</div>
    <div class="d-stack d-stack--row-reverse d-stack--gap-600">
      <div>Stack item 3</div>
      <div>Stack item 4</div>
    </div>
  </div>
</section>
```

## Classes

<component-class-table component-name="stack"></component-class-table>
