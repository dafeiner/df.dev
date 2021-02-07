<template>
  <div class="container max-w-2xl mx-auto text-lext flex items-center">
    <div>
      <h1 class="title text-6xl">
        {{ this.post.title }}
      </h1>
      <p class="blog-date">{{ date(this.post) }}</p>
      <p></p>
      <div class="post-content" v-html="post.html" />
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

.blog-date {
  @apply mb-3;
  color: #35495e;
}

.post-content >>> p {
  @apply mb-3;
  font-family: 'Catamaran';
  color: #526488;
}
.post-content >>> a {
  @apply underline;
}
</style>

<script>
import { getPost } from '~/plugins/ghost';
import * as dayjs from 'dayjs';

export default {
  async asyncData({ payload, params }) {
    if (payload) {
      return { post: payload };
    }
    return { post: await getPost(params.post) };
  },
  methods: {
    date: function(post) {
      return dayjs(post.created_at).format('MMMM D, YYYY');
    }
  }
};
</script>
