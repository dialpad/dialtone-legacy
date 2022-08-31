<template>
  <div v-if="component">
    <div class="d-d-flex d-mt64 d-h628">
      <dtc-combinator
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
        <dtc-section
          :heading="capitalize(name)"
          :open="false"
        >
          <div class="d-d-flex d-hmx332">
            <dtc-combinator
              :component="component"
              :variants="{ default: variant }"
              root-class="d-baw0"
              blueprint
            />
          </div>
        </dtc-section>
      </template>
    </ul>
  </div>
</template>

<script>
import { capitalize } from 'vue';

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

  // async beforeMount () {
  //   const dialtoneVue = await import('@dialpad/dialtone-vue');
  //
  //   const component = markRaw(Object.entries(dialtoneVue).find(([exportName, _]) => {
  //     return exportName === this.componentName;
  //   }))[1];
  //
  //   this.component = markRaw(component);
  //   this.variants = {}; // combinator.variantBank()[exportName];
  // },
};
</script>
