<!-- eslint-disable max-len -->
<template>
  <article class="blog-post d-d-grid d-p12 d-g-cols2">
    <section class="d-d-flex">
      <dt-avatar
        size="lg"
        color="purple-200"
        avatar-class="d-mr16"
      >
        {{ initials }}
      </dt-avatar>
      <div class="d-d-grid d-g-cols1">
        <div class="d-fw-medium">
          {{ author }}
        </div>
        <time class="d-fc-black-700">
          {{ format(posted, 'MMMM do, y') }}
        </time>
      </div>
    </section>
    <div
      class="d-pls-end"
    >
      <dt-tooltip v-if="!isPreview">
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
      <component
        :is="isPreview ? 'h2' : 'h1'"
        class="d-pt24 dialtone-page-title"
      >
        {{ heading }}
      </component>
      <span class="blog-post-content">
        <slot />
      </span>
    </section>
  </article>
</template>

<script>
import { DtAvatar, DtButton, DtTooltip, DtIcon, DtLink, DtCard } from '@dialpad/dialtone-vue';
import { format } from 'date-fns';

export default {
  name: 'BlogPost',

  components: {
    DtAvatar,
    DtButton,
    DtTooltip,
    DtIcon,
    DtLink,
    DtCard,
  },

  props: {
    posted: {
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

  computed: {
    initials () {
      // get first and last initials from author name.
      const words = this.author.split(' ');
      if (words.length > 1) {
        return words[0][0] + words[words.length - 1][0];
      } else {
        return words[0][0];
      }
    },
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

<style lang="less">
.blog-post {
  ol, ul, li {
    white-space: initial;
  }
  h2 {
    font-size: var(--fs-300);
  }

  h2,
  h3 {
    margin-top: calc(0.5rem - var(--navbar-height) + var(--su48));
    padding-top: calc(1rem + var(--navbar-height));
    font-weight: var(--fw-bold);
  }
}
</style>
