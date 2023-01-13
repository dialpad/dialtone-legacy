<template>
  <dt-popover
    :open="modelValue"
    :modal="true"
    :content-width="null"
    :show-close-button="true"
    placement="right"
    :fallback-placements="['left', 'auto']"
    dialog-class="d-w100vw dialtone-icon-popover"
    @opened="emitOpened"
  >
    <template #anchor>
      <dt-button
        class="dialtone-icon-grid__item"
        icon-position="top"
        importance="clear"
        kind="muted"
        width="100%"
      >
        <template #icon>
          <dt-icon
            :name="iconName"
            size="600"
            class="d-mb8"
          />
        </template>
        <p
          class="dialtone-icon-card__subtitle d-tt-capitalize d-fc-tertiary"
          v-text="name"
        />
      </dt-button>
    </template>
    <template #headerContent>
      <span
        class="d-tt-capitalize"
        v-text="name"
      />
    </template>
    <template #content>
      <icon-popover-content
        :icon-name="iconName"
        :keywords="keywords"
        :category="category"
      />
    </template>
  </dt-popover>
</template>

<script setup>
import IconPopoverContent from './IconPopoverContent.vue';
const emits = defineEmits(['update:modelValue']);
const props = defineProps({
  iconName: { type: String, required: true },
  keywords: { type: Array, default: () => [] },
  category: { type: String, required: true },
  modelValue: { type: Boolean, default: false },
});
const name = props.iconName.replaceAll('-', ' ');
const emitOpened = (open) => {
  emits('update:modelValue', open);
};
</script>

<style scoped lang="less">
  .code-example {
    user-select: all;
  }
</style>
