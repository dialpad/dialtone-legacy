---
title: What's New
desc: Updates, progress and planning for all things Dialtone.
---

<div>
  <BlogPostPreview v-for="post in BlogPosts.sort(sortHandler)" :key="post.posted" :author="post.author" :heading="post.heading" :posted="post.posted"/>
</div>

<script setup>
import BlogPostPreview from '@baseComponents/BlogPostPreview.vue';

import { reactive, markRaw, computed, onMounted } from 'vue';
import { parse, compareDesc } from 'date-fns';

const BlogPosts = reactive([]);

// Dynamically import all blogs from the blog folder
const modules = import.meta.glob('@/about/whats_new/posts/*.md');

// Read required data and add an object to the BlogPosts array for each file.
for (const path in modules) {
  modules[path]().then((module) => {
    // content - is a vue component which was originally markdown converted to vue
    // all frontmatter properties are stored in the object with their respective keys
    const blogPost = {
      content: markRaw(module.default),
      ...module.frontmatter,
    }
    blogPost.posted = parse(blogPost.posted, 'y-M-d', new Date());
    BlogPosts.push(blogPost);
  });
}

const sortHandler = function (a, b) {
  return compareDesc(a.posted, b.posted);
}

</script>
