---
title: Avatar v7
desc: An avatar is a visual representation of a user or object.
storybook_url: https://vue.dialpad.design/?path=/story/components-avatar--default
figma_url: https://www.figma.com/file/2adf7JhZOncRyjYiy2joil/DT-Core%3A-Components-7?node-id=8918%3A21289&viewport=137%2C605%2C0.46&t=xHutRjwo1o5zMTgT-11
layout: OnlyDialtoneLayout
---

<div class="d-stack16">
  <div class="d-stack4 d-p16 d-bgc-blue-100">
    <strong>ℹ️ Notes</strong>
    <div>🚨 <strong>Overlap</strong> of current bottom of color ramp exploration.</div>
    <div>☝️ Shape sizes: xs: 18, s: 24, m: 32, l: 48, xl: 64. </div>
    <div>☝️ Font sizes uses current font size ramp... <code>100</code> (12px), <code>200</code> (15px), <code>300</code> (19px), <code>400</code> (27px).</div>
    <div>☝️ A default conic-gradient and angle, overridden by inline <code>style</code> attribute's values randomized by Vue component.</div>
    <div>🤔 Maybe at small (24), just one initial; counteract wider characters, e.g. "MN" or "WM"</div>
    <div>🤔 Text color: Secondary (maps to Black 700).</div>
    <div>❓ Need xxl? e.g. 84.</div>
  </div>
  <div class="d-d-grid d-gg16 d-g-cols4 d-p16">
    <div class="d-avatarPOC d-avatarPOC--xs">
      <div class="d-avatarPOC__initials">FR</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--xs"
      style="
        --avatar-gradient-angle:  45deg;
        --avatar-gradient-stop-1: var(--magenta-100);
        --avatar-gradient-stop-2: var(--gold-200);
        --avatar-gradient-stop-3: var(--blue-100);
      ">
      <div class="d-avatarPOC__initials">AE</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--xs"
      style="
        --avatar-gradient-angle:  -45deg;
        --avatar-gradient-stop-1: var(--purple-200);
        --avatar-gradient-stop-2: var(--blue-100);
        --avatar-gradient-stop-3: var(--magenta-100);
      ">
      <div class="d-avatarPOC__initials">EQ</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--xs"
      style="
        --avatar-gradient-angle:  -90deg;
        --avatar-gradient-stop-1: var(--blue-100);
        --avatar-gradient-stop-2: var(--purple-200);
        --avatar-gradient-stop-3: var(--gold-100);
      ">
      <div class="d-avatarPOC__initials">MN</div>
    </div>
    <div class="d-avatarPOC d-avatarPOC--s">
      <div class="d-avatarPOC__initials">FR</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--s"
      style="
        --avatar-gradient-angle:  45deg;
        --avatar-gradient-stop-1: var(--magenta-100);
        --avatar-gradient-stop-2: var(--gold-200);
        --avatar-gradient-stop-3: var(--blue-100);
      ">
      <div class="d-avatarPOC__initials">AE</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--s"
      style="
        --avatar-gradient-angle:  -45deg;
        --avatar-gradient-stop-1: var(--purple-200);
        --avatar-gradient-stop-2: var(--blue-100);
        --avatar-gradient-stop-3: var(--magenta-100);
      ">
      <div class="d-avatarPOC__initials">EQ</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--s"
      style="
        --avatar-gradient-angle:  -90deg;
        --avatar-gradient-stop-1: var(--blue-100);
        --avatar-gradient-stop-2: var(--purple-200);
        --avatar-gradient-stop-3: var(--gold-100);
      ">
      <div class="d-avatarPOC__initials">MN</div>
    </div>
    <div class="d-avatarPOC d-avatarPOC--m">
      <div class="d-avatarPOC__initials">FR</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--m"
      style="
        --avatar-gradient-angle:  45deg;
        --avatar-gradient-stop-1: var(--magenta-100);
        --avatar-gradient-stop-2: var(--gold-200);
        --avatar-gradient-stop-3: var(--blue-100);
      ">
      <div class="d-avatarPOC__initials">AE</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--m"
      style="
        --avatar-gradient-angle:  -45deg;
        --avatar-gradient-stop-1: var(--purple-200);
        --avatar-gradient-stop-2: var(--blue-100);
        --avatar-gradient-stop-3: var(--magenta-100);
      ">
      <div class="d-avatarPOC__initials">EQ</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--m"
      style="
        --avatar-gradient-angle:  -90deg;
        --avatar-gradient-stop-1: var(--blue-100);
        --avatar-gradient-stop-2: var(--purple-200);
        --avatar-gradient-stop-3: var(--gold-100);
      ">
      <div class="d-avatarPOC__initials">MN</div>
    </div>
    <div class="d-avatarPOC d-avatarPOC--l">
      <div class="d-avatarPOC__initials">FR</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--l"
      style="
        --avatar-gradient-angle:  45deg;
        --avatar-gradient-stop-1: var(--magenta-100);
        --avatar-gradient-stop-2: var(--gold-200);
        --avatar-gradient-stop-3: var(--blue-100);
      ">
      <div class="d-avatarPOC__initials">AE</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--l"
      style="
        --avatar-gradient-angle:  -45deg;
        --avatar-gradient-stop-1: var(--purple-200);
        --avatar-gradient-stop-2: var(--blue-100);
        --avatar-gradient-stop-3: var(--magenta-100);
      ">
      <div class="d-avatarPOC__initials">EQ</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--l"
      style="
        --avatar-gradient-angle:  -90deg;
        --avatar-gradient-stop-1: var(--blue-100);
        --avatar-gradient-stop-2: var(--purple-200);
        --avatar-gradient-stop-3: var(--gold-100);
      ">
      <div class="d-avatarPOC__initials">MN</div>
    </div>
    <div class="d-avatarPOC d-avatarPOC--xl">
      <div class="d-avatarPOC__initials">FR</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--xl"
      style="
        --avatar-gradient-angle:  45deg;
        --avatar-gradient-stop-1: var(--magenta-100);
        --avatar-gradient-stop-2: var(--gold-200);
        --avatar-gradient-stop-3: var(--blue-100);
      ">
      <div class="d-avatarPOC__initials">AE</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--xl"
      style="
        --avatar-gradient-angle:  -45deg;
        --avatar-gradient-stop-1: var(--purple-200);
        --avatar-gradient-stop-2: var(--blue-100);
        --avatar-gradient-stop-3: var(--magenta-100);
      ">
      <div class="d-avatarPOC__initials">EQ</div>
    </div>
    <div
      class="d-avatarPOC d-avatarPOC--xl"
      style="
        --avatar-gradient-angle:  -90deg;
        --avatar-gradient-stop-1: var(--blue-100);
        --avatar-gradient-stop-2: var(--purple-200);
        --avatar-gradient-stop-3: var(--gold-100);
      ">
      <div class="d-avatarPOC__initials">MN</div>
    </div>
  </div>
</div>

<script setup>
import ExamplePresence from '@exampleComponents/ExamplePresence.vue';
import IconGroup from "@svgIcons/IconGroup.vue";
import { colors } from '@data/avatar.json';
</script>

<style lang="less">
.d-avatarPOC {
  --avatar-gradient-angle: 180deg;
  --avatar-gradient-stop-1: var(--gold-100);
  --avatar-gradient-stop-2: var(--magenta-100);
  --avatar-gradient-stop-3: var(--blue-200);
  --avatar-size-shape: var(--size-600);
  --avatar-size-text: var(--fs-200);
  --avatar-color-text: var(--fc-secondary);
  
  & {
    width: var(--avatar-size-shape);
    height: var(--avatar-size-shape);
    border-radius: var(--br-pill);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gold-100);
    background-image: conic-gradient(from var(--avatar-gradient-angle) at 50% 50%, var(--avatar-gradient-stop-1) 0deg, var(--avatar-gradient-stop-2) 180deg, var(--avatar-gradient-stop-3) 360deg);
    position: relative;
  }

  &--xs {
    --avatar-size-shape: calc(var(--size-500) + var(--size-200));
  }
  
  &--s {
    --avatar-size-shape: calc(var(--size-500) + var(--size-400));
    --avatar-size-text: var(--fs-100);
  }
  
  &--m {
    --avatar-size-shape: var(--size-600);
    --avatar-size-text: var(--fs-200);
  }
  
  &--l {
    --avatar-size-shape: calc(var(--size-600) + var(--size-500));
    --avatar-size-text: var(--fs-300);
  }
  
  &--xl {
    --avatar-size-shape: var(--size-700);
    --avatar-size-text: var(--fs-400);
  }
  
  &__initials {
    color: var(--avatar-color-text);
    font-size: var(--avatar-size-text);
    font-weight: var(--fw-bold);
    line-height: var(--lh-100);
    .d-avatarPOC--xs & {
      display: none;
    }
  }
}
</style>
