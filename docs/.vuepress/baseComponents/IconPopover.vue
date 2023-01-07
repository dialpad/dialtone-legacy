<template>
  <dt-popover
    :content-width="null"
    :show-close-button="true"
    placement="right"
    :fallback-placements="['left', 'auto']"
    dialog-class="d-w100vw dialtone-icon-popover"
    @opened="handleOpen"
  >
    <template #anchor="{ attrs }">
      <slot :attrs="attrs" />
    </template>
    <template #headerContent>
      <span
        class="d-tt-capitalize"
        v-text="name"
      />
    </template>
    <template #content>
      <div>
        <div class="d-d-flex d-ai-center d-fl-center d-h64 d-mb24">
          <dt-icon
            :name="iconName"
            class="d-mb8"
            :size="selectedSize"
          />
        </div>
        <div class="d-stack16">
          <div class="d-wmx50p">
            <dt-select-menu
              label="Size"
              size="sm"
              @change="changeIconSize"
            >
              <option
                v-for="option in sizeOptions"
                :key="`size-${option}`"
                :selected="option === selectedSize"
                :value="option"
                v-text="option"
              />
            </dt-select-menu>
          </div>
          <div class="d-d-flex d-ai-center">
            <div class="d-d-flex d-fd-column d-fl-grow5">
              <span class="d-fc-disabled">Name</span>
              {{ name }}
            </div>
            <copy-button
              class="d-ml8"
              :text="iconName"
            />
          </div>
          <div class="d-d-flex d-fd-column">
            <span class="d-fc-disabled">Category</span>
            <span
              class="d-tt-capitalize"
              v-text="category"
            />
          </div>
          <div class="d-d-flex d-fd-column">
            <span class="d-fc-disabled">Keywords</span>
            {{ keywords.join(', ') || '-' }}
          </div>
          <div class="d-d-flex d-ai-flex-end">
            <div class="d-fl-grow1">
              <dt-input
                label="SVG"
                readonly
                tabindex="-1"
                size="sm"
                :value="svgExample"
              />
            </div>
            <copy-button
              class="d-ml8"
              :text="svgExample"
            />
          </div>
          <div class="d-d-flex d-ai-flex-end">
            <div class="d-fl-grow1">
              <dt-input
                label="Vue"
                tabindex="-1"
                readonly
                size="sm"
                :value="vueExample"
              />
            </div>
            <copy-button
              class="d-ml8"
              :text="vueExample"
            />
          </div>
        </div>
      </div>
    </template>
  </dt-popover>
</template>

<script setup>
import { computed, ref } from 'vue';
import { v7 as sizes } from '@data/icons-sizes.json';
import CopyButton from './CopyButton.vue';

const props = defineProps({
  iconName: { type: String, required: true },
  keywords: { type: Array, default: () => [] },
  category: { type: String, required: true },
});
const sizeOptions = computed(() => {
  return sizes.map(item => item.size.toString());
});
const selectedSize = ref('500');
const changeIconSize = (size) => {
  selectedSize.value = size;
};
const name = computed(() => {
  return props.iconName.replaceAll('-', ' ');
});
const svgExample = ref('');
const getSvgContent = async () => {
  const module = await import(`../../../node_modules/@dialpad/dialtone-icons/dist/svg/${props.iconName}.svg?raw`);
  svgExample.value = module.default;
};
const vueExample = computed(() => {
  return `<dt-icon name="${props.iconName}" size="${selectedSize.value}" />`;
});
const handleOpen = (open) => {
  if (svgExample.value !== '' || !open) return;
  getSvgContent();
};
</script>

<style scoped lang="less">
  .code-example {
    user-select: all;
  }
</style>
