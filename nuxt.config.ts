export default {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-analytics'],
  modules: ['nuxt-icon'],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  runtimeConfig: {
    public: {
      ncfName: process.env.NCFNAME,
    }
  }
}
