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

<script>
import { DtLink, DtCard } from '@dialpad/dialtone-vue';
import { format } from 'date-fns';
import BlogPost from '@baseComponents/BlogPost.vue';

export default {
  name: 'BlogPostPreview',

  components: {
    DtLink,
    DtCard,
    BlogPost,
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
  },

  data () {
    return {
      format,
    };
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
