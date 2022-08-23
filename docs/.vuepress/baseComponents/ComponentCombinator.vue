<template>
  <div
    v-if="combinator && component"
    class="d-my32 d-h512"
  >
    <component
      :is="combinator"
      :component="component"
      :variants="{}"
    />
  </div>
</template>

<script>
import { markRaw } from 'vue';

export default {
  name: 'ComponentCombinator',
  props: {
    componentName: {
      type: String,
      required: true,
    },
  },

  data () {
    return {
      combinator: null,
      component: null,
    };
  },

  beforeMount () {
    import('@dialpad/dialtone-combinator').then((module) => {
      this.combinator = markRaw(module.DtcCombinator);
    });

    import('@dialpad/dialtone-vue').then((module) => {
      this.component = markRaw(Object.entries(module).find(([name, _]) => name === this.componentName)[1]);
    });
  },
};
</script>
