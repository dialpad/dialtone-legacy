<template>
  <div class="dialtone-example" data-example="yes" data-code="yes">
    <div class="dialtone-example__example">
      <div
          class="lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-ash d-ba d-bc-black-100 d-flow16 d-mb8 d-bar4">
        <div class="d-fl-grow1">
          <div>
            <div class="d-label d-fs14">
              <label for="style-select">Style</label>
            </div>
            <div class="d-select d-select--sm">
              <select id="style-select" class="d-select__input" v-model="style">
                <option name="style-select" id="style-select-base" value="base" selected>Base</option>
                <option name="style-select" id="style-select-error" value="error">Error</option>
                <option name="style-select" id="style-select-info" value="info">Informational</option>
                <option name="style-select" id="style-select-success" value="success">Success</option>
                <option name="style-select" id="style-select-warning" value="warning">Warning</option>
              </select>
            </div>
          </div>
        </div>
        <div class="d-input-group d-d-flex d-ai-center d-fl0 d-flow6">
          <input type="checkbox" id="style-select-important" class="d-checkbox d-mt1" v-model="important"/>
          <label for="style-select-important" class="d-label d-fs14 d-lh2">Important?</label>
        </div>
        <div class="d-input-group d-d-flex d-ai-center d-fl0 d-flow6">
          <input type="checkbox" id="style-select-pinned" class="d-checkbox d-mt1" v-model="pinned"/>
          <label for="style-select-pinned" class="d-label d-fs14 d-lh2">Pinned?</label>
        </div>
        <button class="d-btn d-btn--outlined d-btn--sm" role="button" @click="toggleExample">
          Toggle example
        </button>
      </div>
    </div>
  </div>
  <aside
      class="d-banner d-banner--transform d-mt0"
      :class="[bannerClass, {'d-banner--pinned': pinned, 'd-banner--important': important}]"
      role="alert"
      :aria-hidden="!showBanner"
  >
    <div
        class="d-banner__dialog"
        role="alertdialog"
        :aria-labelledy="bannerTitle"
        :aria-describedby="bannerDesc"
    >
      <div class="d-notice__icon">
        <icon-lightbulb v-show="style === 'base'"></icon-lightbulb>
        <icon-error v-show="style === 'error'"></icon-error>
        <icon-info v-show="style === 'info'"></icon-info>
        <icon-check-circle v-show="style === 'success'"></icon-check-circle>
        <icon-warning v-show="style === 'warning'"></icon-warning>
      </div>
      <div class="d-notice__content">
        <h2>Optional title</h2>
        <p class="d-notice__message">
          Message body with
          <a
              href="#"
              class="d-link d-link--muted"
              :class="{'d-link--inverted': shouldBeInverted}"
          >
            a link.
          </a>
        </p>
      </div>
      <div class="d-notice__actions">
        <button
            type="button"
            class="d-btn d-btn--sm d-btn--outlined d-btn--muted"
            :class="{'d-btn--inverted': shouldBeInverted}"
        >
          Action
        </button>
        <button
            type="button"
            class="d-btn d-btn--sm d-btn--circle d-btn--muted"
            :class="{'d-btn--inverted': shouldBeInverted}"
            aria-label="Close"
            @click="toggleExample"
        >
          <span class="d-btn__icon">
            <icon-close></icon-close>
          </span>
        </button>
      </div>
    </div>
  </aside>
</template>

<script>
import IconInfo from '@svgIcons/IconInfo.vue';
import IconLightbulb from "@svgIcons/IconLightbulb.vue";
import IconCheckCircle from "@svgIcons/IconCheckCircle.vue";
import IconWarning from "@svgIcons/IconWarning.vue";
import IconError from "@svgIcons/IconError.vue";
import IconClose from "@svgIcons/IconClose.vue";

export default {
  name: 'banner',
  components: {
    IconError,
    IconWarning,
    IconCheckCircle,
    IconLightbulb,
    IconInfo,
    IconClose,
  },
  data() {
    return {
      style: 'base',
      showBanner: false,
      pinned: false,
      important: false,
    }
  },
  computed: {
    bannerClass() {
      return 'd-banner--' + this.style;
    },

    bannerTitle() {
      return this.style + '-banner-title';
    },

    bannerDesc() {
      return this.style + '-banner-desc';
    },

    shouldBeInverted() {
      return this.important && !['warning', 'success'].includes(this.style);
    }
  },
  methods: {
    toggleExample() {
      this.showBanner = !this.showBanner;
    },
  },
  mounted() {
    console.log(this.$refs);
  }
}
</script>

<style scoped>
.d-banner {
  margin-top: 0 !important;
}
</style>
