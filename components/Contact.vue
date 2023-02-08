
<script lang="ts">

    export default {
        props: ['question', 'response']
    }

</script>

<template>

    <TextMessageContainer>
        <TextMessage :isResponse="false">
            <h1>Need a website?</h1>
            <p>{{ question }}</p>
        </TextMessage>
        <TextMessage :isResponse="true">
            <h1>Get in Touch!</h1>
            <p>{{ response }}</p>
        </TextMessage>
        <TextMessage :isResponse="true">
            <div class="link-container">
                <NuxtLink href="/contact">Make it happen!</NuxtLink>
            </div>
        </TextMessage>
    </TextMessageContainer>

</template>