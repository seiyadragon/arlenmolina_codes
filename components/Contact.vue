
<script lang="ts">

    export default {
        props: ['question', 'response', 'isDark']
    }

</script>

<template>

    <TextMessageContainer>
        <TextMessage :isResponse="false" :isDark="isDark">
            <h1>Need a website?</h1>
            <p>{{ question }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" :isDark="isDark">
            <h1>Get in Touch!</h1>
            <p>{{ response }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" :isDark="isDark">
            <div class="link-container">
                <NuxtLink href="/contact" :class="isDark ? 'dark' : 'light'">Make it happen!</NuxtLink>
            </div>
        </TextMessage>
    </TextMessageContainer>

</template>