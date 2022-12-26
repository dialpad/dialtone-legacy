<template>
  <li>
    <p
      class="d-headline-eyebrow d-fw-semibold d-pl12 d-pb8"
      tabindex="0"
      v-text="item.text"
    />
    <ul class="d-pl0 d-mb16">
      <li
        v-for="subItem in subItems"
        :key="subItem.text"
      >
        <router-link
          v-if="subItem.link && !subItem.planned"
          v-slot="{ href, navigate, isActive, isExactActive }"
          :to="subItem.link"
          custom
        >
          <a
            :href="href"
            :class="[
              itemClass,
              {
                'd-btn--active d-fw-medium': isActive,
                'router-link-exact-active': isExactActive,
                'd-fc-primary': !isActive || !isExactActive,
              },
            ]"
            @click="navigate"
          >
            {{ subItem.text }}
          </a>
        </router-link>
        <div
          v-else
          class="d-btn d-w100p d-jc-flex-start d-fw-normal d-fc-disabled h:d-bgc-transparent d-c-default"
        >
          {{ subItem.text }}
          <dt-badge
            v-if="subItem.planned"
            class="d-fw-normal d-ml4"
          >
            Planned
          </dt-badge>
        </div>
      </li>
    </ul>
  </li>
</template>

<script setup>
import { computed } from 'vue';

const itemClass = 'd-btn d-btn--muted d-w100p d-jc-flex-start d-fw-normal';
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
const subItems = computed(() => {
  return props.item?.children || [];
});
</script>
