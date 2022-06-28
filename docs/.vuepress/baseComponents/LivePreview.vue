<template>
  <vue-live
    code="<button class='d-btn d-btn--primary'>Button</button>"
    :editorProps="{ lineNumbers: true, ignoreTabKey: true }"
    :layout="LivePreviewLayout"
  />
</template>

<script>
import { VueLive } from "vue-live";
import LivePreviewLayout from '@theme/LivePreviewLayout.vue';
import "vue-live/lib/vue-live.esm.css";

export default {
  name: "LivePreview",
  components: { VueLive },
  created () {
      this.LivePreviewLayout = LivePreviewLayout
  }
}
</script>
