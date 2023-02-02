
<script lang="ts">
    import { createClient } from '@supabase/supabase-js'
import TextMessage from './TextMessage.vue'

    export default {
    mounted() {
        this.loadContent();
    },
    methods: {
        async loadContent() {
            const { data } = await this.supabase.from("PageInfo").select();
            this.customerQuestion = data !== null ? data[0].content.question : "";
            this.questionResponse = data !== null ? data[1].content.response : "";
        }
    },
    data() {
        return {
            supabase: createClient("https://nuitnvbkhtnzqbcedbkl.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51aXRudmJraHRuenFiY2VkYmtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3MzM2OTgsImV4cCI6MTk4NjMwOTY5OH0.pMl9EPd5kWiyLbwgSDtsmZZFXYZh3NdTp2s9_fBcj74"),
            customerQuestion: "",
            questionResponse: "",
        };
    },
}

</script>


<template>

    <div>
        <TextMessage :isResponse="false" class="message">
            <h1>Need a website?</h1>
            <p>{{ customerQuestion }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <h1>Get in Touch!</h1>
            <p>{{ questionResponse }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <div class="link-container">
                <NuxtLink href="/contact">Contact me today!</NuxtLink>
            </div>
        </TextMessage>
    </div>

</template>

<style lang="scss" scoped>

    $background: rgba(214, 84, 9, 0.8);
    $border: darken($background, 10%);

    $text: rgb(54, 54, 54);

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

    .message {
        h1 {
            font-size: 32px;
            text-align: center;
        }

        p {
            padding-left: 32px;
            padding-right: 32px;
            font-size: 18px;
        }
    }

</style>