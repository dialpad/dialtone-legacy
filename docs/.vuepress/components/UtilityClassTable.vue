<template>
  <div class="d-h464 d-of-y-scroll d-bb d-bc-black-200">
    <table class="d-table">
      <thead>
      <tr>
        <th class="d-w25p" scope="col">Class</th>
        <th scope="col">Output</th>
      </tr>
      </thead>
      <slot name="content-top">

      </slot>
      <tbody v-for="{color: c, stops} in classes">
        <tr v-for="{stop: _stop} in stops">
          <th class="d-ff-mono d-fc-purple d-fw-normal d-fs12" scope="row">.d-bgc-{{ c }}-{{ _stop }}</th>
          <td>
            <div class="d-d-flex d-jc-space-between d-ai-center">
              <div class="d-fl-grow1 d-ff-mono d-fc-orange d-fs12">
                --bgo: 100%;<br/>
                background-color: hsla(var(--{{ c }}-{{ _stop }}-h) var(--{{ c }}-{{ _stop }}-s) var(--{{ c }}-{{ _stop }}-l)
                /
                var(--bgo)) !important;
              </div>
              <div :class="`d-fl-shrink0 d-m4 d-ml16 d-h32 d-w32 d-bar4 d-bgc-${c}-${_stop}`"></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "UtilityClassTable",
  props: {
    dataFile: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      classes: null
    }
  },
  beforeMount() {
    import(`../_data/${this.dataFile}.json`).then((module) => {
      this.classes = module[this.dataFile]
    })
  }
}
</script>

<style scoped>

</style>
