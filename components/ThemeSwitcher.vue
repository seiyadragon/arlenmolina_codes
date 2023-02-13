
<script lang="ts">

    export default {
        props: ['isDark']
    }

</script>

<template>

    <section class="theme-selector">
        <div class="buttons">
            <TextMessageContainer>
                <div class="link-container">
                    <NuxtLink @click="$emit('light-mode')" :class="isDark ? 'dark' : 'light'">Light mode</NuxtLink>
                </div>
            </TextMessageContainer>
            <TextMessageContainer>
                <div class="link-container">
                    <NuxtLink @click="$emit('dark-mode')" :class="isDark ? 'dark' : 'light'">Dark mode</NuxtLink>
                </div>
            </TextMessageContainer>
        </div>
    </section>

</template>

<style lang="scss" scoped>

    .theme-selector {
        padding-top: 16px;
        padding-bottom: 16px;

        .buttons {
            display: flex;
            justify-content: space-evenly;
        }
    }

</style>