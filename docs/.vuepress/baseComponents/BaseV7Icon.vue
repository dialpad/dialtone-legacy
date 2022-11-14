<template>
  <div
    v-if="!hidden"
    :id="fileName"
    class="dialtone-icon-grid__item"
  >
    <aside
      :data-selected="selectedStatus"
      class="dialtone-icon-card js-dialtone-icon-card"
    >
      <header
        class="dialtone-icon-card__header js-dialtone-icon-card-copy-area"
        @keydown.space="$emit('select-icon')"
        @click="$emit('select-icon')"
      >
        <div class="d-mb8">
          <component
            :is="dynamicIconComponent"
            class="d-icon--size-600"
          />
        </div>
        <p class="dialtone-icon-card__subtitle d-tt-capitalize d-fc-tertiary">
          {{ name }}
        </p>
      </header>
      <footer :class="cardFooterClass">
        <span
          class="d-tt-capitalize d-mt0 d-mb8 d-fw-semibold d-fs-200 d-lh-100"
          v-text="name"
        />
        <div class="dialtone-icon-card__content">
          <div class="d-d-flex d-fd-column">
            <p class="d-fs-100 d-d-flex d-gg4">
              <strong>SVG:</strong>
              <span class="code-example">{{ `${fileName}.svg` }}</span>
            </p>
            <p class="d-fs-100 d-d-flex d-gg4">
              <strong>Vue:</strong>
              <span class="code-example">{{ `<dt-icon name="${fileName}" />` }}</span>
            </p>
            <p
              v-if="keywords.length"
              class="d-fs-100 d-d-flex d-gg4"
            >
              <strong>Keywords:</strong>
              <span
                :title="keywords.join(', ')"
                class="d-truncate"
              >
                {{ keywords.join(', ') }}
              </span>
            </p>
          </div>
          <p class="dialtone-icon-card__description">
            {{ desc }}
          </p>
        </div>
      </footer>
    </aside>
  </div>
</template>

<script>
import * as icons from '@dialpad/dialtone-icons';

export default {
  name: 'BaseIcon',

  props: {
    fileName: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      default: null,
    },

    hidden: {
      type: Boolean,
      default: false,
    },

    selected: {
      type: Boolean,
      default: false,
    },

    keywords: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['select-icon'],

  computed: {
    selectedStatus () {
      return this.selected ? 'yes' : 'no';
    },

    cardFooterClass () {
      return 'dialtone-icon-card__footer';
    },

    dynamicIconComponent () {
      return icons[this.vueComponentName];
    },

    name () {
      return this.fileName
        .replaceAll('-', ' ');
    },

    vueComponentName () {
      return this.fileName
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join('');
    },
  },
};
</script>

<style scoped lang="less">
  .code-example {
    user-select: all;
  }
</style>
