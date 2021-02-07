<template>
  <div>
    <h1 class="title text-6xl">
      Blog
    </h1>
    <div>
      <ul>
        <li v-for="post of posts" :key="post.uuid">
          <nuxt-link :to="{ path: `blog/${post.slug}` }">{{
            post.title
          }}</nuxt-link>
          - {{ post.publishedAt }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-family: 'Philosopher', sans-serif, 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  color: #35495e;
  letter-spacing: 1px;
}

li {
  @apply text-lg;
  font-family: 'Catamaran';
  color: #35495e;
}

a {
  @apply text-indigo-700;
  @apply text-2xl;
  @apply underline;
}
</style>

<script>
import { getPosts } from '~/plugins/ghost';
import * as dayjs from 'dayjs';

export default {
  data() {
    return {
      posts: []
    };
  },

  async fetch() {
    const posts = await getPosts();
    const trimmedPosts = posts.map(({ uuid, title, slug, published_at }) => ({
      uuid,
      title,
      slug,
      publishedAt: dayjs(published_at).format('MMMM D, YYYY')
    }));
    this.posts = trimmedPosts;
  }
};
</script>
