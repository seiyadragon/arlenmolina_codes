
<script lang="ts">

    export default {
      props: ['isDark']
    }

</script>


<template>

    <footer class="page-footer">
      <div :class="isDark ? 'dark' : 'light'">
        <NuxtLink href="/" class="link">Home</NuxtLink>
        <NuxtLink href="/contact" class="link">Contact</NuxtLink>
        <NuxtLink href="/about" class="link">About</NuxtLink>
      </div>
      <ThemeSwitcher @light-mode="$emit('light-mode')" @dark-mode="$emit('dark-mode')" :isDark="isDark"/>
    </footer>

</template>

<style lang="scss" scoped>

    $background: rgba(214, 84, 9, 0.8);
    $border: lighten($background, 30%);

    $text: rgb(54, 54, 54);

    .page-footer {
      background-color: $background;
      min-height: 100px;
      backdrop-filter: blur(3px);
      padding-left: 32px;
      padding-right: 32px;
      font-size: 24px;
      flex-wrap: wrap;

      border-top-right-radius: 32px;
      border-top-left-radius: 32px;
      border-top: 8px solid $border;

      margin-top: 102px;

      .light, .dark {
        display: flex;
        flex-direction: row;
        color: $text;

        justify-content: space-between;

        padding-top: 16px;
        .link {
          margin-top: auto;
          margin-bottom: auto;
        }
      }

      .light {
        .link {
          color: rgb(0, 0, 200);
        }
      }

      .dark {
        .link {
          color: rgb(125, 15, 255);
        }
      }

    }

</style>