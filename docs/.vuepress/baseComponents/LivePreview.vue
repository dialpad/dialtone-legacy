<template>
  <vue-live
    v-if="!loading"
    :code="code"
    :editorProps="{ lineNumbers: true, ignoreTabKey: true }"
    :layout="LivePreviewLayout"
    checkVariableAvailability
  />
</template>

<script>
import { VueLive } from "vue-live";
import "vue-live/lib/vue-live.esm.css";

export default {
  name: "LivePreview",
  components: { VueLive },
  data () {
    return {
      loading: true,
    };
  },
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  mounted () {
      import('@theme/LivePreviewLayout.vue').then(layout => {
        this.LivePreviewLayout = layout.default;
        this.loading = false;
      });
  }
}
</script>
