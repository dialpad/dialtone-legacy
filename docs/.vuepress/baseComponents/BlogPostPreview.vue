<template>
  <router-link
    v-slot="{ navigate }"
    :to="`/about/whats_new/posts/${format(posted, 'y-M-d')}`"
    custom
  >
    <dt-link
      class="d-td-none d-fc-unset d-d-block"
      href="`/about/whats_new/posts/${format(posted, 'y-M-d')}`"
      @click="(e) => { navigate(e); }"
    >
      <dt-card
        class="d-mt72 h:d-bgc-black-200"
      >
        <template #content>
          <blog-post
            :author="author"
            :heading="heading"
            :posted="posted"
            :is-preview="true"
          >
            <slot />
          </blog-post>
        </template>
      </dt-card>
    </dt-link>
  </router-link>
</template>

<script setup>
import { format } from 'date-fns';
import BlogPost from '@baseComponents/BlogPost.vue';

defineProps({
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
});
</script>
