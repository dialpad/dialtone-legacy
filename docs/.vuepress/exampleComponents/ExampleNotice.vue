<template>
  <div class="d-stack12 d-w60p">
    <aside
      class="d-notice"
      :class="[
        noticeClass,
        { 'd-notice--important': important },
      ]"
      :role="role"
      aria-hidden="false"
    >
      <div class="d-notice__icon">
        <dt-icon
          name="bell"
          size="400"
          v-show="kind === 'base'"
        />
        <dt-icon
          name="alert-circle"
          size="400"
          v-show="kind === 'error'"
        />
        <dt-icon
          name="info"
          size="400"
          v-show="kind === 'info'"
        />
        <dt-icon
          name="check-circle"
          size="400"
          v-show="kind === 'success'"
        />
        <dt-icon
          name="alert-triangle"
          size="400"
          v-show="kind === 'warning'"
        />
      </div>
      <div class="d-notice__content">
        <h2 class="d-notice__title">
          <span class="d-tt-capitalize">{{ kind }}</span> title (optional)
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
        >
          <span class="d-btn__icon">
            <dt-icon
              name="close"
              size="200"
            />
          </span>
        </button>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'ExampleNotice',
  props: {
    important: {
      type: Boolean,
      default: false,
    },

    kind: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: 'status',
    },
  },

  computed: {
    noticeClass () {
      return 'd-notice--' + this.kind;
    },

    shouldBeInverted () {
      return this.important && !['warning'].includes(this.kind);
    },
  },
};
</script>

<style scoped>

</style>
