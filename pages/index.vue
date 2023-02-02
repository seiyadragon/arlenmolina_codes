

<template>

    <main class="main_0">
      <div class="main_div">
        <Header />
        <Contact />
        
      </div>
    </main>

</template>

<style lang="scss">

    $background: rgb(255, 255, 255);
    $background-inner: lighten($background, 100%);
    $border: darken($background, 10%);

    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
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

    .main_0 {
      background-color: $background;
    }

    .main_div {
      background-color: $background;
      border-left: solid 8px $border;
      border-right: solid 8px $border;
      padding-left: 8px;
      padding-right: 8px;

      @media (min-width: 600px) {
        margin-left: 96px;
        margin-right: 96px;
      }
    }

</style>