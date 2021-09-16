export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-shop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    'nuxt-buefy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  apollo: {
    clientConfigs: {
      shopify: {
        httpEndpoint: 'https://' + process.env.SHOPIFY_STORE_DOMAIN + '/api/2021-07/graphql.json',
        httpLinkOptions: {
          headers: {
            'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
            "Content-Type": "application/graphql"
          },
        },
        ssr: true,
      },
      rickMorty: {
        ssr: true,
        httpEndpoint: 'https://rickandmortyapi.com/graphql',
      }

    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}