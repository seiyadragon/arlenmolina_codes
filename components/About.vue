

<script lang="ts">

    export default {
        props: ['question', 'response']
    }

</script>

<template>

    <div>
        <TextMessage :isResponse="false" class="message">
            <h1>What about you?</h1>
            <p>{{ question }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <h1>A little about me!</h1>
            <p>{{ response }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <div class="link-container">
                <NuxtLink href="/about">Learn More!</NuxtLink>
            </div>
        </TextMessage>
    </div>

</template>

<style lang="scss" scoped>

    $background: rgba(214, 84, 9, 0.8);
    $border: darken($background, 10%);

    $text: rgb(54, 54, 54);

    .message {
        h1 {
            font-size: 24px;
            text-align: center;
        }

        p {
            padding-left: 32px;
            padding-right: 32px;
            font-size: 18px;
        }
    }

    .link-container {
        display: flex;

        margin-left: 24px;
        margin-right: 24px;

        a {
            margin-left: auto;
            margin-right: auto;

            font-size: 36px;
            text-decoration: none;
            color: rgb(99, 0, 102);
            box-shadow: 4px 4px $border;
            padding: 2px;

            transition: box-shadow 1s ease-in-out;

            &:hover {
                box-shadow: 12px 12px $border;
            }
        }
    }

</style>