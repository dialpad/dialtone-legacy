<template>
  <div v-if="combinator && component">
    <div class="d-d-flex d-mt64 d-h628">
      <component
        :is="combinator"
        :component="component"
        :variants="variants"
      />
    </div>
    <ul
      v-if="hasBlueprints()"
      class="d-ls-reset d-mt64 d-bgc-black-025 d-ba d-bar4"
    >
      <template
        v-for="(variant, name) in variants"
        :key="name"
      >
        <component
          :is="section"
          :heading="capitalize(name)"
          :open="false"
        >
          <div class="d-d-flex d-hmx332">
            <component
              :is="combinator"
              :component="component"
              :variants="{ default: variant }"
              root-class="d-baw0"
              blueprint
            />
          </div>
        </component>
      </template>
    </ul>
  </div>
</template>

<script>
import { markRaw, capitalize } from 'vue';

export default {
  name: 'ComponentCombinator',
  props: {
    componentName: {
      type: String,
      required: true,
    },

    showBlueprints: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      combinator: null,
      section: null,
      component: null,
      variants: {},
    };
  },

  methods: {
    capitalize,
    hasBlueprints () {
      return this.showBlueprints && Object.keys(this.variants).length > 0;
    },
  },

  async beforeMount () {
    const combinator = await import('@dialpad/dialtone-combinator');
    const dialtoneVue = await import('@dialpad/dialtone-vue');

    this.combinator = markRaw(combinator.DtcCombinator);
    this.section = markRaw(combinator.DtcSection);

    const [exportName, component] = markRaw(Object.entries(dialtoneVue).find(([exportName, _]) => {
      return exportName === this.componentName;
    }));

    this.component = markRaw(component);
    this.variants = combinator.variantBank()[exportName];
  },
};
</script>
