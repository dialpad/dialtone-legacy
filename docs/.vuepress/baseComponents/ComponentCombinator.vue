<template>
  <div v-if="combinator && component">
    <div class="d-d-flex d-mt64 d-h512">
      <component
        :is="combinator"
        :component="component"
        :variants="variants"
      />
    </div>
    <ul
      v-if="showBlueprints"
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
      variants: {
        variant: {
          props: {
            active: {
              defaultValue: true,
            },
          },
        },

        variant2: {
          props: {
            active: {
              defaultValue: true,
            },
          },
        },
      },
    };
  },

  beforeMount () {
    import('@dialpad/dialtone-combinator').then((module) => {
      this.combinator = markRaw(module.DtcCombinator);
      this.section = markRaw(module.DtcSection);
    });

    import('@dialpad/dialtone-vue').then((module) => {
      this.component = markRaw(Object.entries(module).find(([name, _]) => name === this.componentName)[1]);
    });
  },

  methods: {
    capitalize,
  },
};
</script>
