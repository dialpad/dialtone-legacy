<template>
  <button
    class="d-btn d-btn--primary d-btn--sm"
    type="button"
    @click="openModal"
  >
    Launch modal
  </button>
  <aside
    id="modal-base"
    class="d-modal d-mn1"
    :class="{
      'd-modal--full': isFullScreen,
      'd-modal--danger': isDanger,
      'd-modal--animate-in': animateIn,
      'd-modal--animate-out': animateOut,
    }"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    :aria-hidden="!showModal"
    @click.self="closeModal"
  >
    <div
      class="d-modal__banner"
      :class="{ 'd-d-none': !showModalBanner }"
    >
      This example banner sits at the top of the modal.
    </div>
    <div
      class="d-modal__dialog"
      :class="{
        'd-modal__dialog--animate-in': animateIn,
        'd-modal__dialog--animate-out': animateOut,
        'd-modal__dialog--scrollable d-hmx764': isFixed,
      }"
      role="document"
    >
      <h2 class="d-modal__header">
        Example title
      </h2>
      <div class="d-modal__content">
        <p id="modal-description">
          {{ modalDescription }}
          <template v-if="isFixed">
            {{ modalDescription.repeat(3) }}
          </template>
        </p>
        <p class="d-mt16">
          <a
            href="#"
            class="d-link"
            @click.prevent="openModalBanner"
          >Show me a modal banner</a>
        </p>
      </div>
      <footer class="d-modal__footer">
        <button
          class="d-btn d-btn--primary"
          :class="{ 'd-btn--danger': isDanger }"
          type="button"
        >
          Save changes
        </button>
        <button
          class="d-btn"
          :class="{ 'd-btn--danger': isDanger }"
          type="button"
          @click="closeModal"
        >
          Cancel
        </button>
      </footer>
      <button
        class="d-modal__close d-btn d-btn--circle d-btn--lg"
        :class="{ 'd-btn--danger': isDanger }"
        aria-label="Close"
        @click="closeModal"
      >
        <span class="d-btn__icon">
          <icon-close />
        </span>
      </button>
    </div>
  </aside>
</template>

<script>
import IconClose from '@svgIcons/IconClose.vue';
const MODAL_KINDS = ['full-screen', 'danger', 'fixed', 'base'];

export default {
  name: 'ExampleModal',
  components: {
    IconClose,
  },

  props: {
    kind: {
      type: String,
      default: 'base',
      validator: (_kind) => {
        return MODAL_KINDS.includes(_kind);
      },
    },
  },

  data () {
    return {
      showModal: false,
      showModalBanner: false,
      animateIn: false,
      animateOut: false,
      modalDescription: `Sed at orci quis nunc finibus gravida eget vitae est. Praesent
          ac laoreet mi. Cras porttitor mauris ex. Integer convallis tellus a ex egestas, id laoreet elit mollis. Mauris
          ut elementum velit. Nam vel consectetur turpis. Aenean consequat purus non nunc tincidunt rutrum. In semper
          pretium dui vel tempus. Proin et mi id mi egestas iaculis. Sed lacinia libero non molestie consequat. Sed
          efficitur purus eget lacus viverra volutpat. Nam luctus ac eros eu iaculis. Fusce non condimentum lorem.`,
    };
  },

  computed: {
    isFullScreen () {
      return this.kind === 'full-screen';
    },

    isDanger () {
      return this.kind === 'danger';
    },

    isFixed () {
      return this.kind === 'fixed';
    },
  },

  methods: {
    openModal () {
      this.animateOut = false;
      this.animateIn = true;

      this.showModal = true;

      document.body.classList.add('d-of-hidden');
    },

    openModalBanner () {
      this.showModalBanner = true;
    },

    closeModal () {
      this.animateIn = false;
      this.animateOut = true;

      this.showModal = false;
      this.showModalBanner = false;

      document.body.classList.remove('d-of-hidden');
    },
  },
};
</script>

<style scoped>

</style>
