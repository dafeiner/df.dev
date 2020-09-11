<template>
  <div class="container max-w-2xl mx-auto text-lext flex items-center px-4">
    <div>
      <h1 class="title text-4xl md:text-6xl sm:text-4xl">
        David Feinerman
      </h1>
      <p class="text-2xl">
        Welcome to my page. I am software builder out of Los Angeles, currently
        at <a target="_blank" href="https://clutter.com">Clutter.</a>
      </p>
      <p>
        This website is a sandbox of my ideas, projects, and lessons.
      </p>
      <p>
        You can reach me on <a target="_blank" href="https://twitter.com/dafeiner">Twitter</a> or
        <a target="_blank" href="https://www.linkedin.com/in/david-feinerman/">LinkedIn</a> or
        <a type="email" href="mailto:fire@hey.com">email</a> me.
      </p>
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

p {
  @apply text-2xl mb-3;
  font-family: 'Catamaran';
  color: #526488;
}

a {
  @apply underline;
}
</style>
