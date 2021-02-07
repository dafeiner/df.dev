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

a {
  @apply underline;
  font-family: 'Catamaran';
  color: #526488;
}
</style>

<script>
import { getPosts } from '~/plugins/ghost';

export default {
  data() {
    return {
      posts: []
    };
  },

  async fetch() {
    const posts = await getPosts();
    const trimmedPosts = posts.map(({ uuid, title, slug }) => ({
      uuid,
      title,
      slug
    }));
    this.posts = trimmedPosts;
  }
};
</script>
