<template>
  <div v-if="component">
    <div class="d-d-flex d-mt64 d-h628">
      <dtc-combinator
        :component="component"
        :variants="variants"
      />
    </div>
    <ul
      v-if="hasBlueprints"
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
import { capitalize, resolveComponent } from 'vue';

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

  inject: [
    'variantBank',
  ],

  computed: {
    component () {
      return resolveComponent(this.componentName);
    },
    variants () {
      return this.variantBank[this.componentName];
    },
    hasBlueprints () {
      return this.showBlueprints && Object.keys(this.variants).length > 0;
    },
  },

  methods: {
    capitalize,
  },
};
</script>
