
<script lang="ts">

    export default {
        props: ['isDark']
    }

</script>

<template>

    <header class="header_0" :class="isDark ? 'header-dark' : 'header-light'">
        <section class="profile">
            <img src="https://pbs.twimg.com/profile_images/1619633162962837504/ysIVwrUR_400x400.jpg" alt="Profile Picture">
            <div :class="isDark ? 'dark' : 'light'">
                <h1>Arlen Molina</h1>
                <h2>Web Developer</h2>
            </div>
            <Links :isDark="isDark"/>
        </section>
    </header>

</template>

<style lang="scss" scoped>

    $background: rgba(214, 84, 9, 0.8);
    $border: darken($background, 10%);
    $border-dark: darken($background, 20%);

    $text: rgb(54, 54, 54);
    $text-dark: lighten(invert($text), 50%); 

    .header_0 {
        background-color: $background;
        backdrop-filter: blur(3px);
        margin-top: 0%;
        border-bottom-right-radius: 32px;
        border-bottom-left-radius: 32px;
        position: sticky;
        top: 0;
        z-index: 99;
        
        .profile {
            height: 64px;
            display: flex;
            padding-left: 4px;
            padding-right: 4px;

            img {
                border-radius: 100%;
                width: 48px;
                padding: 8px;
                padding-left: 4px;
                padding-right: 4px;
            }
            
            .light, .dark {
                height: 48px;
                padding: 0px;

                padding-top: 8px;
                padding-bottom: 8px;

                overflow-y: hidden;

                h1 {
                    font-size: 24px;
                    margin-bottom: 2px;
                }
            }

            .light {
                color: $text;
            }

            .dark {
                color: $text-dark;
            }
        }
    }

    .header-light {
        border-bottom: 8px solid $border;
    }

    .header-dark {
        border-bottom: 8px solid $border-dark;
    }

</style>