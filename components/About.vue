

<script lang="ts">

    export default {
        props: ['question', 'responseOne', 'responseTwo', 'isDark']
    }

</script>

<template>

    <TextMessageContainer>
        <TextMessage :isResponse="false" :isDark="isDark">
            <h1>What about you?</h1>
            <p>{{ question }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" :isDark="isDark">
            <h1>A little about me!</h1>
            <p>{{ responseOne }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" :isDark="isDark">
            <p>{{ responseTwo }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" :isDark="isDark">
            <div class="link-container">
                <NuxtLink href="/about" :class="isDark ? 'dark' : 'light'">Learn More!</NuxtLink>
            </div>
        </TextMessage>
    </TextMessageContainer>

</template>