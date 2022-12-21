<!-- eslint-disable max-len -->
<template>
  <article class="blog-post">
    <section class="d-stack16">
      <component
        :is="isPreview ? 'h2' : 'h1'"
        class="d-d-flex"
        :class="isPreview ? 'd-docsite--header-2 d-mt0' : 'dialtone-page-title'"
      >
        <div class=" d-fl1">
          {{ heading }}
        </div>
        <dt-tooltip v-if="!isPreview">
          <template #anchor>
            <dt-button
              size="sm"
              kind="inverted"
              @click="copyLink"
            >
              <template #icon>
                <dt-icon name="copy" size="300" />
              </template>
            </dt-button>
          </template>
          Copy link
        </dt-tooltip>
      </component>
      <div class="d-d-flex d-ai-center">
        <section class="d-d-flex">
          <dt-avatar
            size="lg"
            color="purple-200"
            avatar-class="d-mr16"
          >
            {{ initials }}
          </dt-avatar>
          <div class="d-d-grid d-g-cols1">
            <div class="d-fw-semibold d-fc-secondary">
              {{ author }}
            </div>
            <time class="d-fc-tertiary">
              {{ format(posted, 'MMMM do, y') }}
            </time>
          </div>
        </section>
      </div>
      <div class="blog-post-content">
        <slot />
      </div>
    </section>
  </article>
</template>

<script setup>
import { format } from 'date-fns';
import { computed } from 'vue';

const props = defineProps({
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
});

const initials = computed(() => {
  // get first and last initials from author name.
  const words = props.author.split(' ');
  if (words.length === 0) return '';
  if (words.length > 1) {
    return words[0][0] + words[words.length - 1][0];
  } else {
    return words[0][0];
  }
});

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
  } catch (err) {}
};
</script>
