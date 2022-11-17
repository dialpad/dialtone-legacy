<template>
  <dt-link
    class="d-td-none d-fc-unset d-d-block"
    :href="`/about/whats_new/posts/${format(posted, 'y-M-d')}`"
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
        />
      </template>
    </dt-card>
  </dt-link>
</template>

<script setup>
import { DtLink, DtCard } from '@dialpad/dialtone-vue';
import { format } from 'date-fns';
import BlogPost from '@baseComponents/BlogPost.vue';

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
});

console.log('PROPS: ', props);
</script>
