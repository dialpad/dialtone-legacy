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
      <header class="dialtone-icon-card__header js-dialtone-icon-card-copy-area">
        <div :class="cardIconClass">
          <component
            :is="dynamicIconComponent"
          />
        </div>
        <p class="dialtone-icon-card__subtitle d-tt-capitalize">
          {{ name }}
        </p>
      </header>
      <footer :class="cardFooterClass">
        <div class="dialtone-icon-card__content">
          <h2 class="dialtone-icon-card__title d-tt-capitalize">
            {{ name }}
          </h2>
          <div class="dialtone-icon-card__list">
            <span class="dialtone-icon-card__list__item">
              <strong>SVG:</strong> <span class="code-example">{{ `${fileName}.svg` }}</span>
            </span>
            <span class="dialtone-icon-card__list__item">
              <strong>Vue:</strong> <span class="code-example js-vue-file">{{ `<${vueComponentName} />` }}</span>
            </span>
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

  computed: {
    selectedStatus () {
      return this.selected ? 'yes' : 'no';
    },

    cardFooterClass () {
      return 'dialtone-icon-card__footer';
    },

    cardIconClass () {
      return 'dialtone-icon-card__icon';
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
