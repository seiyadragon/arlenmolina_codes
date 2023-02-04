

<script lang="ts">

    export default {
        props: ['question', 'responseOne', 'responseTwo']
    }

</script>

<template>

    <TextMessageContainer>
        <TextMessage :isResponse="false" class="message">
            <h1>What about you?</h1>
            <p>{{ question }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <h1>A little about me!</h1>
            <p>{{ responseOne }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <p>{{ responseTwo }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <div class="link-container">
                <NuxtLink href="/about">Learn More!</NuxtLink>
            </div>
        </TextMessage>
    </TextMessageContainer>

</template>