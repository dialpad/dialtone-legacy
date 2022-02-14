<template>
  <div :id="file" class="dialtone-icon-grid__item">
    <aside :data-selected="selectedStatus" class="dialtone-icon-card js-dialtone-icon-card">
      <header class="dialtone-icon-card__header js-dialtone-icon-card-copy-area">
        <div class="dialtone-icon-card__icon">
          <img :src="svgPath" alt="" style="height: 100%">
        </div>
        <p class="dialtone-icon-card__subtitle">{{ name }}</p>
      </header>
      <footer class="dialtone-icon-card__footer js-dialtone-icon-card-footer">
        <div class="dialtone-icon-card__content">
          <h2 class="dialtone-icon-card__title">{{ name }}</h2>
          <div class="dialtone-icon-card__list">
              <span class="dialtone-icon-card__list__item">
                <strong>SVG:</strong> <span class="code-example">{{ `${file}.svg` }}</span>
              </span>
            <span class="dialtone-icon-card__list__item">
                <strong>Vue:</strong> <span class="code-example js-vue-file">{{ `${vue}.vue` }}</span>
              </span>
          </div>
          <p class="dialtone-icon-card__description">{{ desc }}</p>
        </div>
      </footer>
    </aside>
  </div>
</template>

<script>
export const ICON_KINDS = ['brand', 'patterns', 'spot', 'system'];
export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    file: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    vue: {
      type: String,
      required: true
    },
    kind: {
      type: String,
      default: 'brand',
      validator: (kind) => {
        return ICON_KINDS.includes(kind)
      }
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectedStatus() {
      return this.selected ? 'yes' : 'no'
    },
    svgPath() {
      return `/assets/svg/${this.kind}/${this.file}.svg`;
    }
  },
}
</script>

<style scoped>

</style>
