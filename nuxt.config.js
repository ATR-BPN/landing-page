export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Badan Pertanahan Nasional - Kota Bandung',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Badan Pertanahan Nasional Kota Bandung',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Badan Pertanahan Nasional - Kota Bandung',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Badan Pertanahan Nasional - Kota Bandung',
      },
      {
        hid: 'apple-mobile-web-app-title',
        content: 'Badan Pertanahan Nasional - Kota Bandung',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true,
  },
  styleResources: {
    scss: '@/assets/scss/_variables.scss',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
    transpile: ['vue-splide'],
  },
}
