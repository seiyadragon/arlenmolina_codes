
<script lang="ts">

    export default {
        props: ['isResponse']
    }

</script>


<template>

    <section :class="isResponse ? 'contact' : 'question'">
        <div class="body">
            <slot />
        </div>
    </section>

</template>

<style lang="scss" scoped>

    $background: rgba(214, 84, 9, 0.8);
    $border: darken($background, 10%);

    $text: rgb(54, 54, 54);

    .question {
        justify-self: right;
        margin-left: auto;
        border-top-left-radius: 32px;
    }

    .contact {
        border-top-right-radius: 32px;

    }

    .contact, .question {
        width: 66%;
        margin-top: 16px;
        background-color: $background;
        backdrop-filter: blur(3px);
        
        border-bottom: 8px solid $border;

        border-bottom-right-radius: 32px;
        border-bottom-left-radius: 32px;

        color: $text;
    }

    .body {
        padding-top: 16px;
        padding-bottom: 16px;
    }

</style>