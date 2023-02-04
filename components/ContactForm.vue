
<script lang="ts">

    import { TextInputData } from './TextInput.vue';

    export default {
        props: ['question'],
        methods: {
            onSubmit() {
                
            },
            onInputValueChange({label, value}: TextInputData) {
                if (label === "Name:") 
                    this.formData.name = value

                if (label === "Email:") 
                    this.formData.email = value

                if (label === "Business:") 
                    this.formData.business = value

                if (label === "Website:") 
                    this.formData.website = value

                if (label === "Anything else:") 
                    this.formData.extra = value
            }
        },
        data() {
            return {
                formData: {
                    name: "",
                    email: "",
                    business: "",
                    website: "",
                    extra: ""
                },
            }
        },
    }

</script>

<template>

    <TextMessageContainer>
        <TextMessage :isResponse="false" class="message">
            <h1>Now what?</h1>
            <p>{{ question }}</p>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <h1>Tell us about you!</h1>
            <form>
                <TextInput label="Name:" placeholder="Type your full name." @valueChanged="onInputValueChange"/>
                <TextInput label="Email:" placeholder="Type your email." @valueChanged="onInputValueChange"/>
                <TextInput label="Business:" placeholder="What do you do?" @valueChanged="onInputValueChange"/>
                <TextInput label="Website:" placeholder="Type your site URL." @valueChanged="onInputValueChange"/>
                <TextInput label="Anything else:" placeholder="Anything else you'd like to let me know." @valueChanged="onInputValueChange"/>
            </form>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <div class="link-container">
                <NuxtLink @click="onSubmit">
                    Submit
                </NuxtLink>
            </div>
        </TextMessage>
        <TextMessage :isResponse="true" class="message">
            <div class="link-container">
                <NuxtLink href="/">
                    Back
                </NuxtLink>
            </div>
        </TextMessage>
    </TextMessageContainer>
    
</template>