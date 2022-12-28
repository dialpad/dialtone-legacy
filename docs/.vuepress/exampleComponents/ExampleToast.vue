<template>
  <div
    class="dialtone-example"
    data-example="yes"
    data-code="yes"
  >
    <div class="dialtone-example__example">
      <div
        class="
          lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0
          d-d-flex d-ai-flex-end d-p16 d-bgc-black-100
          d-ba d-bc-transparent d-flow16 d-mb8 d-bar4
        "
      >
        <div class="d-fl-grow1">
          <div>
            <div class="d-label d-fs-14">
              <label for="style-select">Style</label>
            </div>
            <div class="d-select d-select--sm">
              <select
                id="style-select"
                v-model="kind"
                class="d-select__input"
              >
                <option
                  id="style-select-base"
                  name="style-select"
                  value="base"
                  selected
                >
                  Base
                </option>
                <option
                  id="style-select-error"
                  name="style-select"
                  value="error"
                >
                  Error
                </option>
                <option
                  id="style-select-info"
                  name="style-select"
                  value="info"
                >
                  Informational
                </option>
                <option
                  id="style-select-success"
                  name="style-select"
                  value="success"
                >
                  Success
                </option>
                <option
                  id="style-select-warning"
                  name="style-select"
                  value="warning"
                >
                  Warning
                </option>
              </select>
            </div>
          </div>
        </div>
        <label>
          <div class="d-checkbox-group">
            <div class="d-checkbox__input">
              <input
                v-model="important"
                type="checkbox"
                class="d-checkbox"
              >
            </div>
            <span class="d-checkbox__copy d-checkbox__label d-mb4">
              Important?
            </span>
          </div>
        </label>
        <button
          class="d-btn d-btn--outlined d-btn--sm"
          @click="toggleExample"
        >
          Toggle example
        </button>
      </div>
    </div>
  </div>
  <aside class="d-toast-wrapper">
    <div
      class="d-toast"
      :class="[toastClass, { 'd-toast--important': important }]"
      role="status"
      :aria-hidden="!showToast"
    >
      <div class="d-toast__dialog">
        <div class="d-notice__icon">
          <dt-icon name="bell" size="400" v-show="kind === 'base'" />
          <dt-icon name="alert-circle" size="400" v-show="kind === 'error'" />
          <dt-icon name="info" size="400" v-show="kind === 'info'" />
          <dt-icon name="check-circle" size="400" v-show="kind === 'success'" />
          <dt-icon name="alert-triangle" size="400" v-show="kind === 'warning'" />
        </div>
        <div class="d-notice__content">
          <h2 class="d-notice__title">
            Title
          </h2>
          <p class="d-notice__message">
            Message body with
            <a
              href="#"
              class="d-link"
              :class="shouldBeInverted ? 'd-link--inverted' : 'd-link--muted'"
            >
              a link.
            </a>
          </p>
        </div>
        <div class="d-notice__actions">
          <button
            type="button"
            class="d-btn d-btn--sm d-btn--outlined"
            :class="shouldBeInverted ? 'd-btn--inverted' : 'd-btn--muted'"
          >
            Action
          </button>
          <button
            type="button"
            class="d-btn d-btn--sm d-btn--circle"
            :class="shouldBeInverted ? 'd-btn--inverted' : 'd-btn--muted'"
            aria-label="Close"
            @click="toggleExample"
          >
            <span class="d-btn__icon">
              <dt-icon name="close" size="200" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'ExampleToast',
  data () {
    return {
      kind: 'base',
      showToast: false,
      important: false,
    };
  },

  computed: {
    toastClass () {
      return 'd-toast--' + this.kind;
    },

    shouldBeInverted () {
      return this.important && !['warning'].includes(this.kind);
    },
  },

  methods: {
    toggleExample () {
      this.showToast = !this.showToast;
    },
  },
};
</script>

<style lang="less" scoped>
  .d-toast-wrapper {
    top: var(--su84);
  }
</style>
