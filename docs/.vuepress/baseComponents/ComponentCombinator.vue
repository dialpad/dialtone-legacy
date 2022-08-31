<template>
  <div v-if="component">
    <div class="d-d-flex d-mt64 d-h628">
      <component
        v-if="combinator"
        :is="combinator"
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
        <component
          v-if="section"
          :is="section"
          :heading="capitalize(name)"
          :open="false"
        >
          <div class="d-d-flex d-hmx332">
            <component
              v-if="combinator"
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
import { capitalize, markRaw } from 'vue';

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
      combinator: null,
      section: null,
      variantBank: null,
    };
  },

  computed: {
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

  async mounted () {
    const dialtoneCombinator = await import('@dialpad/dialtone-combinator');
    const dialtoneVue = await import('@dialpad/dialtone-vue');

    this.component = markRaw(dialtoneVue[this.componentName]);
    this.combinator = markRaw(dialtoneCombinator.DtcCombinator);
    this.section = markRaw(dialtoneCombinator.DtcSection);
    this.variantBank = dialtoneCombinator.variantBank();
  },
};
</script>
