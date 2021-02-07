<template>
  <div class="container max-w-2xl mx-auto text-lext flex items-center px-4">
    <div>
      <h1 class="title text-4xl md:text-6xl sm:text-4xl">
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
  @apply text-2xl;
  font-family: 'Catamaran';
  color: #35495e;
}

.post-content >>> blockquote {
  @apply mb-3 p-2 text-2xl border-l-4 border-indigo-700 italic;
  color: #35495e;
}

.post-content >>> a {
  @apply underline;
  @apply text-indigo-700;
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
      return dayjs(post.published_at).format('MMMM D, YYYY');
    }
  }
};
</script>
