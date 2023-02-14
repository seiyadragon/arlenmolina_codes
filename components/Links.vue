
<script lang="ts">

    export default {
        props: ['isDark']
    }

</script>

<template>

    <div :class="isDark ? 'dark' : 'light'">
        <NuxtLink href="https://www.linkedin.com/in/arlen-molina-423159183/" class="social-link">
            <Icon name="uil:linkedin" />
        </NuxtLink>
        <NuxtLink href="https://github.com/seiyadragon" class="social-link">
            <Icon name="uil:github" />
        </NuxtLink>
        <NuxtLink href="https://twitter.com/arlenmolina101" class="social-link">
            <Icon name="uil:twitter" />
        </NuxtLink>
    </div>

</template>

<style lang="scss" scoped>

    $text: rgb(54, 54, 54);
    $text-dark: lighten(invert($text), 50%); 

    .dark, .light {
        display: flex;
        justify-self: end;
        margin-left: auto;
        margin-right: 4px;
        padding: 0;
        min-width: 132px;

        .social-link {
            font-size: 36px;
            margin-left: 4px;
            margin-right: 4px;
            transition: transform 1s;
            padding-left: 0px;
            padding-right: 0px;

            &:hover {
                transition: transform 1s;
                transform: scale(1.1, 1.1);
            }
        }
    }

    .light .social-link {
        color: $text;
    }

    .dark .social-link {
        color: $text-dark;
    }

</style>