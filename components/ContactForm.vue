
<script lang="ts">

    import { TextInputData } from './TextInput.vue';
    import { useRuntimeConfig } from '../node_modules/nuxt/dist/app'

    export default {
        props: ['question'],
        methods: {
            onSubmit() {
                if (this.formData.name === "" || this.formData.email === "" || this.formData.business === "") {
                    alert("Please fill out all required fields!")
                    return
                }

                let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                let requestOptions2: RequestInit = {
                    method: "post",
                    headers: myHeaders,
                    redirect: "follow",
                    body: JSON.stringify({
                        "fields":[
                            {
                                "field":"name",
                                "value":this.formData.name
                            },
                            {
                                "field":"email",
                                "value":this.formData.email
                            },
                            {
                                "field":"business",
                                "value":this.formData.business
                            },
                            {
                                "field":"website",
                                "value":this.formData.website
                            },
                            {
                                "field":"extra",
                                "value":this.formData.extra
                            },
                        ]
                    })
                }

                fetch(`https://v1.nocodeapi.com/seiyadragon/nForms/${this.config.ncfName}/data`, requestOptions2)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
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
                config: useRuntimeConfig(),
            }
        },
    }

</script>

<template>

    <TextMessageContainer>
        <TextMessage :isResponse="false">
            <h1>Now what?</h1>
            <p>{{ question }}</p>
        </TextMessage>
        <TextMessage :isResponse="true">
            <h1>Tell us about you!</h1>
            <form>
                <TextInput label="Name:" placeholder="Type your full name." @valueChanged="onInputValueChange" :required="true"/>
                <TextInput label="Email:" placeholder="Type your email." @valueChanged="onInputValueChange" :required="true"/>
                <TextInput label="Business:" placeholder="What do you do?" @valueChanged="onInputValueChange" :required="true"/>
                <TextInput label="Website:" placeholder="Type your site URL." @valueChanged="onInputValueChange"/>
                <TextInput label="Anything else:" placeholder="Anything else you'd like to let me know." @valueChanged="onInputValueChange"/>
            </form>
        </TextMessage>
        <TextMessage :isResponse="true">
            <div class="link-container">
                <NuxtLink @click="onSubmit">
                    Submit
                </NuxtLink>
            </div>
        </TextMessage>
        <TextMessage :isResponse="true">
            <div class="link-container">
                <NuxtLink href="/">
                    Back
                </NuxtLink>
            </div>
        </TextMessage>
    </TextMessageContainer>
    
</template>