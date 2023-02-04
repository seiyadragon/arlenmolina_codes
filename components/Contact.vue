
<script lang="ts">

    export default {
        props: ['question', 'response']
    }

</script>

<template>

    <TextMessageContainer>
        <TextMessage :isResponse="false" class="message">
            <h1>Need a website?</h1>
            <p>{{ question }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <h1>Get in Touch!</h1>
            <p>{{ response }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <div class="link-container">
                <NuxtLink href="/contact">Make it happen!</NuxtLink>
            </div>
        </TextMessage>
    </TextMessageContainer>

</template>