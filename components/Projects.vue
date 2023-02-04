
<script lang="ts">

    export class ProjectData {
        name: string
        image: string
        response: string
        link: string

        constructor(name: string, image: string, response: string, link: string) {
            this.name = name
            this.image = image
            this.response = response
            this.link = link
        }
    }

    export default {
        props: {
            question: String,
            responseOneData: ProjectData,
            responseTwoData: ProjectData,
            responseThreeData: ProjectData,
        }
    }

</script>

<template>

    <TextMessageContainer>
        <TextMessage :isResponse="false" >
            <h1>Projects?</h1>
            <p>{{ question }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" >
            <h1>{{ responseOneData?.name }}</h1>
            <img :src="responseOneData?.image" alt="Website image" class="image">
            <p>{{ responseOneData?.response }}</p>
            <NuxtLink :href="responseOneData?.link">Go to {{ responseOneData?.name }}</NuxtLink>
        </TextMessage>
        <TextMessage :isResponse="true" >
            <h1>{{ responseTwoData?.name }}</h1>
            <img :src="responseTwoData?.image" alt="Website image" class="image">
            <p>{{ responseTwoData?.response }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" >
            <h1>{{ responseThreeData?.name }}</h1>
            <img :src="responseThreeData?.image" alt="Website image" class="image">
            <p>{{ responseThreeData?.response }}</p>
        </TextMessage>
        <TextMessage :isResponse="true">
            <h1>Links</h1>
            <p>{{ `Also check out my links below. I'm active in every single one of the following!` }}</p>
            <div class="text-links-wrapper">
                <Links class="text-links"/>
                <div></div>
            </div>
        </TextMessage>
        <TextMessage :isResponse="true">
            <div class="link-container">
                <NuxtLink href="/">Back</NuxtLink>
            </div>
        </TextMessage>
    </TextMessageContainer>

</template>

<style lang="scss" scoped>

    .image {
        max-width: 73%;

        @media (min-width: 1200px) {
            max-width: 93%;
        }
    }

    .text-links-wrapper {
        display: flex;

        .text-links {
            margin-left: auto;
            margin-right: auto;
        }
    }

</style>