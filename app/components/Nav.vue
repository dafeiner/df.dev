<template>
  <nav
    class="flex items-center justify-between flex-wrap p-6 border-b-2 border-purple-900"
  >
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-lg"
    >
      <div class="text-sm lg:flex-grow">
        <nuxt-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-purple-900 hover:underline mr-4"
        >
          df.dev
        </nuxt-link>
        <nuxt-link
          class="block mt-4 lg:inline-block lg:mt-0 text-purple-900 hover:underline mr-4"
          to="/blog"
        >
          Blog
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
