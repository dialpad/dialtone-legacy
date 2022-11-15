<!-- eslint-disable max-len -->
<template>
  <article class="d-d-grid d-gg32 d-g-cols2">
    <section class="d-d-flex">
      <dt-avatar
        size="lg"
        avatar-class="d-mr16"
      >
        <img
          src="./BradPaugh.jpg"
          :alt="`${author}'s avatar`"
        >
      </dt-avatar>
      <div class="d-d-grid d-g-cols1">
        <div class="d-fw-medium">
          {{ author }}
        </div>
        <time class="d-fc-black-700">
          {{ format(date, 'yyyy-MM-dd') }}
        </time>
      </div>
    </section>
    <div class="d-pls-end">
      <dt-tooltip>
        <template #anchor>
          <dt-button
            kind="inverted"
            @click="copyLink"
          >
            <template #icon>
              <dt-icon name="copy" />
            </template>
          </dt-button>
        </template>
        Copy link
      </dt-tooltip>
    </div>
    <section class="d-gc-full d-ws-pre-wrap">
      <h2 class="d-gc-full d-headline54 d-lh1">
        {{ heading }}
      </h2>
      <slot />
    </section>
  </article>
</template>

<script>
import { DtAvatar, DtButton, DtTooltip, DtIcon } from '@dialpad/dialtone-vue';
import { format } from 'date-fns';

export default {
  name: 'BlogPost',

  components: {
    DtAvatar,
    DtButton,
    DtTooltip,
    DtIcon,
  },

  props: {
    date: {
      type: Date,
      required: true,
    },

    heading: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    isPreview: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      format,
    };
  },

  methods: {
    async copyLink () {
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch (err) {}
    },
  },
};
</script>

<style>
ol, ul, li {
  white-space: initial;
}
</style>
