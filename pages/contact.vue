
<script lang="ts">

  import {ref} from 'vue'
  
  export default {
    mounted: function () {
      if (process.client) {
        var drk = localStorage.getItem("isDark")
        var drk2: string = drk != null ? drk : "false"
      
        this.isDark = this.stringToBool(drk2)
      }
    },
    data() {
      return {
        isDark: false
      }
    },
    methods: {
      stringToBool(str: string) {
        if (str === "true") 
          return true
      
        return false
      },
      darkToggle(dark: boolean) {
        this.isDark = dark
      
        if (process.client)
          localStorage.setItem("isDark", this.isDark.toString())
      }
    }
  }

</script>

<template>

  <div :class="isDark ? 'dark' : 'light'">
    <main class="main_0">
      <Head>
        <title>Arlen Molina -- Contact</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">
      </Head>
      <div class="main_div">
        <Header />
        <ContactForm 
          question="
            Alright, I have decided I want to learn more 
            about the benefits of having my own website. 
            What is the next step?
          "
        />
        <Footer @light-mode="darkToggle(false)" @dark-mode="darkToggle(true)"/>
      </div>
    </main>
  </div>

</template>

<style lang="scss">

    * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      font-family: 'Ubuntu';
    }

    .main_div {
      height: 200%;
    }

</style>