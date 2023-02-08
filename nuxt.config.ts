export default {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-analytics'],
  modules: ['nuxt-icon'],
  googleAnalytics: {
    id: 'G-EZTSQPPMFJ'
  },
  runtimeConfig: {
    public: {
      ncfName: process.env.NCFNAME,
    }
  }
}
