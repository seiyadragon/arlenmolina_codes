
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
    <main class="main_0" id="main_0">
      <Head>
        <title>Arlen Molina -- Contact</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">

        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="index, contact, about">

        <meta name="description" content="
          Check out my portfolio website, where I showcase my experience as a web developer. 
          Learn more about my skills, and find out how to contact me to bring your own web development vision to life.
        ">
      </Head>
      <div class="main_div">
        <Header :isDark="isDark"/>
        <ContactForm :isDark="isDark"
          question="
            Alright, I have decided I want to learn more 
            about the benefits of having my own website. 
            What is the next step?
          "
        />
        <Footer @light-mode="darkToggle(false)" @dark-mode="darkToggle(true)" :isDark="isDark"/>
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