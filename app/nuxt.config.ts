require('dotenv').config();
import { getPosts } from './plugins/ghost';

export default {
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'df.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal website of David Feinerman'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Philosopher&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Catamaran&family=Source+Code+Pro&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-purgecss'
  ],

  purgeCSS: {
    whitelist: ['underline']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*s
     ** You can extend webpack config here
     */
    extend(_config: any, _ctx: any) {}
  },
  /*
   ** Router Customizations
   */
  router: {
    linkExactActiveClass: 'underline'
  },

  target: 'static',

  env: {
    ghostAPIKey: process.env.GHOST_API_KEY || ''
  },

  generate: {
    routes() {
      return getPosts().then((posts) =>
        posts.map((post) => ({
          route: `/blog/${post.slug}`,
          payload: post
        }))
      );
    }
  },

  pwa: {
    manifest: {
      name: 'df.dev',
      short_name: 'df.dev'
    }
  }
};
