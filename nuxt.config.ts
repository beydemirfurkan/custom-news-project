// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "nuxt-swiper"
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  site: {
    name: "Nuxt.js",
    description: "The Intuitive Vue Framework",
    themeColor: "#2c3e50"
  }

})