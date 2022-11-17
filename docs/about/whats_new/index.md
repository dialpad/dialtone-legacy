---
title: What's New
desc: Updates, progress and planning for all things Dialtone.
---

<div>
  <BlogPostPreview v-for="post in $page.blogPosts" :key="post.posted" :author="post.author" :heading="post.heading" :posted="post.posted "/>
</div>

<script setup>
import BlogPostPreview from '@baseComponents/BlogPostPreview.vue';
</script>
