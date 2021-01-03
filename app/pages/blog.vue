<template>
  <div class="container max-w-2xl mx-auto text-lext flex items-center">
    <div>
      <h1 class="title text-6xl">
        Blog
      </h1>
      <div>
        <ul>
          <li v-for="post of posts" :key="post.uuid"><p>{{ post.title }}</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-family: 'Philosopher', sans-serif, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  color: #35495e;
  letter-spacing: 1px;
}

p {
  @apply text-2xl mb-3;
  font-family: 'Catamaran';
  color: #526488;
}
</style>

<script>
import { getPosts } from '~/plugins/ghost';

export default {
  async asyncData() {
    const posts = await getPosts();
    const trimmedPosts = posts.map(({ uuid, title }) => ({ uuid, title }));
    return { posts: trimmedPosts };
  }
}
</script>
