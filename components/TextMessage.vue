
<script lang="ts">

    export default {
        props: ['isResponse', 'isDark']
    }

</script>


<template>

    <section :class="isResponse ? 'contact' : 'question'">
        <div class="body">
            <div :class="isDark ? 'dark' : 'light'">
                <slot class="slot"/>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>

    $background: rgba(214, 84, 9, 0.8);
    $border: darken($background, 10%);

    $text: rgb(54, 54, 54);
    $text-dark: lighten(invert($text), 50%); 

    .question {
        justify-self: right;
        margin-left: auto;
        border-top-left-radius: 32px;

        border-top-right-radius: 3px;
    }

    .contact {
        border-top-right-radius: 32px;

        border-top-left-radius: 3px;
    }

    .contact, .question {
        width: 66%;
        margin-top: 16px;
        background-color: $background;
        backdrop-filter: blur(3px);
        
        border-bottom: 8px solid $border;

        border-bottom-right-radius: 32px;
        border-bottom-left-radius: 32px;

        .light {
            color: $text;
        }

        .dark {
            color: $text-dark;
        }
    }

    .body {
        padding-top: 16px;
        padding-bottom: 16px;
    }

</style>