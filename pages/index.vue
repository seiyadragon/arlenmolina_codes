

<script lang="ts">

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
        <title>Arlen Molina -- Web developer</title>
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
        <Contact :isDark="isDark"
          question="
            I'm finally starting to grow an audience, 
            but I'm looking to expand my business with 
            my own website. I want a beautiful site, 
            that helps me grow my business both in terms 
            of money as well as attracting new customers. 
            How can I make this happen?
          "
          response="
            Get in touch with me today to turn your idea 
            into reality. As a web developer, I'm ready 
            to bring your vision to life. Let's make it 
            happen!
          "
        />
        <About :isDark="isDark"
          question="
            Alright! Tell me a little about yourself, your experience,
            projects you've worked on, etc...
          "
          response-one="
            I'm a programmer with several years of experience. I started
            at the age of 14, around the time I was in 8th grade. I really
            liked to play videogames, and decided to make some. And that's 
            how my story begins.
          "
          response-two="
            Since that time I've worked on many web
            projects, both front-end and back-end. I am profficient in several
            programming languages and frameworks, as well as SEO, and social
            media management. Fun fact, I was born in Cuba y tambien se hablar 
            Espa??ol. ????????
          "
        />
        <Footer @light-mode="darkToggle(false)" @dark-mode="darkToggle(true)" :isDark="isDark"/>
      </div>
    </main>
  </div>

</template>

<style lang="scss">

    $background: rgb(255, 255, 255);
    $background-trans: rgb(255, 255, 255, 0.9);
    $background-inner: lighten($background, 100%);
    $border: darken($background, 20%);

    $background-dark: lighten(invert($background), 20%);
    $background-trans-dark: lighten(invert($background-trans), 20%);
    $background-inner-dark: lighten(invert($background-inner), 20%);
    $border-dark: lighten(invert($border), 20%);

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
    
    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgb(98, 74, 46);
    }
    ::-webkit-scrollbar-thumb {
      background-color:  gold;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: gold;
    }

    .light {
      .main_0 {
        background-color: $background;
  
        background-image: url(/peaks.svg);
      }
  
      .main_div {
        background-color: $background-trans;
        border-left: solid 8px $border;
        border-right: solid 8px $border;
        padding-left: 8px;
        padding-right: 8px;
  
        @media (min-width: 600px) {
          margin-left: 96px;
          margin-right: 96px;
        }
      }
  
      .contact-bborder {
        height: 2px;
        background-color: $border;
        margin-left: -10px;
        margin-right: -10px;
      }
    }

    .dark {
      .main_0 {
        background-color: $background-dark;
  
        background-image: url(/peaks.svg);
      }
  
      .main_div {
        background-color: $background-trans-dark;
        border-left: solid 8px $border-dark;
        border-right: solid 8px $border-dark;
        padding-left: 8px;
        padding-right: 8px;
  
        @media (min-width: 600px) {
          margin-left: 96px;
          margin-right: 96px;
        }
      }
  
      .contact-bborder {
        height: 2px;
        background-color: $border-dark;
        margin-left: -10px;
        margin-right: -10px;
      }
    }

    .main_div {
      backdrop-filter: blur(5px);
    }

</style>