<template>
  <nav
    class="flex items-center justify-between flex-wrap p-6 border-b-2 border-indigo-700"
  >
    <div class="block lg:hidden">
      <button
        v-on:click="toggle"
        class="flex items-center px-3 py-2 border rounded border-indigo-700"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            style="stroke: #44337a; fill: #44337a"
            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
          />
        </svg>
      </button>
    </div>
    <div
      :class="collapsed ? 'hidden' : 'block'"
      class="w-full flex-grow lg:flex sm:items-center lg:w-auto text-lg"
    >
      <div class="text-sm lg:flex-grow">
        <nuxt-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-indigo-700 hover:underline mr-4"
        >
          df.dev
        </nuxt-link>
        <nuxt-link
          class="block mt-4 lg:inline-block lg:mt-0 text-indigo-700 hover:underline mr-4"
          to="/blog"
        >
          Blog
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true
    };
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>
