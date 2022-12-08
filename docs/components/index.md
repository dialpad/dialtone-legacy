---
title: Components
desc: Reusable components solving common UI needs, designed and built to be assembled in countless combinations.
no_preview: true
---

<div class="dialtone-wall">
  <router-link
    v-for="component in $page.componentsFrontmatter"
    :key="component.title"
    class="dialtone-wall__item"
    :to="`/components/${component.link}.html`">
    <div class="dialtone-wall__image">
        <img class="dialtone-wall__thumb" alt="" :src="$withBase(`/assets/images/components/${component.name}.png`)">
    </div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">{{ component.title }}</span>
        <span class="d-badge d-tt-capitalize" :class="badgeKindClass(component.status)">
            {{ component.status }}
        </span>
      </div>
      <div class="dialtone-wall__description">{{ component.desc }}</div>
    </div>
  </router-link>
</div>

<script setup>
const badgeKindClass = (status) => {
  switch(status) {
    case 'new':
      return 'd-badge--bulletin';
    default:
      return 'd-badge--info'
  }
};
</script>
