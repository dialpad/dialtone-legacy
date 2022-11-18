---
title: What's New
desc: Updates, progress and planning for all things Dialtone.
---

<BlogPostPreview v-for="post in $page.blogPosts" :key="post.posted" :author="post.author" :heading="post.heading" :posted="parse(post.posted, 'y-M-d', new Date())"/>

<script setup>
import BlogPostPreview from '@baseComponents/BlogPostPreview.vue';
import { parse } from 'date-fns';
</script>
