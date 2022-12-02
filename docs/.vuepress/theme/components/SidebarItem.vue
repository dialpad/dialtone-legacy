<template>
  <li>
    <p
      class="d-tt-uppercase d-fw-bold d-fs-100"
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
            class="d-link d-td-none"
            :class="[
              itemClass,
              {
                'router-link-active ': isActive,
                'router-link-exact-active': isExactActive,
                'd-fc-primary': !isActive || !isExactActive,
              },
            ]"
            @click="navigate"
          >
            {{ subItem.text }}
          </a>
        </router-link>
        <p
          v-else
          tabindex="0"
          class="d-td-none d-fc-muted"
        >
          {{ subItem.text }}
          <dt-badge
            v-if="subItem.planned"
            class="d-fw-normal d-ml4"
          >
            Planned
          </dt-badge>
        </p>
      </li>
    </ul>
  </li>
</template>

<script setup>
import { computed } from 'vue';

const itemClass = 'd-my4 d-link';
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
