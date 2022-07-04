<template>
  <vue-live
    v-if="!loading"
    :code="code"
    :editor-props="{ lineNumbers: true, ignoreTabKey: true }"
    :layout="LivePreviewLayout"
    check-variable-availability
  />
</template>

<script>
import { VueLive } from 'vue-live';
import 'vue-live/lib/vue-live.esm.css';

export default {
  name: 'LivePreview',
  components: { VueLive },
  props: {
    code: {
      type: String,
      required: true,
    },
  },

  data () {
    return {
      loading: true,
    };
  },

  mounted () {
    import('@theme/LivePreviewLayout.vue').then(layout => {
      this.LivePreviewLayout = layout.default;
      this.loading = false;
    });
  },
};
</script>
