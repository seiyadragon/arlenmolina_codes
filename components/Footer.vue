

<template>

    <footer class="page-footer">
        <NuxtLink href="/" class="link">Home</NuxtLink>
        <NuxtLink href="/contact" class="link">Contact</NuxtLink>
        <NuxtLink href="/about" class="link">About</NuxtLink>
    </footer>

</template>

<style lang="scss" scoped>

    $background: rgba(214, 84, 9, 0.8);
    $border: lighten($background, 30%);

    $text: rgb(54, 54, 54);

    .page-footer {
      background-color: $background;
      min-height: 100px;
      display: flex;
      flex-direction: row;
      backdrop-filter: blur(3px);

      padding-left: 32px;
      padding-right: 32px;
        
      color: $text;
      justify-content: space-between;
      font-size: 24px;
      flex-wrap: wrap;

      border-top-right-radius: 32px;
      border-top-left-radius: 32px;
      border-top: 8px solid $border;

      margin-top: 102px;

      .link {
        margin-top: auto;
        margin-bottom: auto;

        color: rgb(99, 0, 102);
      }
    }

</style>