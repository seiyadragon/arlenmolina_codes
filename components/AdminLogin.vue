

<script lang="ts">

    export default {
        data() {
            return {
                isAdmin: false,
                adminPassword: ""
            }
        },
        methods: {
            onPasswordType({label, value}: any) {
                this.adminPassword = value
            },
            onPasswordSubmit() {
                if (this.adminPassword === process.env.ADMN_PSS)
                    this.isAdmin = true
            }
        }
    }

</script>

<template>

    <TextMessageContainer>

        <TextMessage v-if="!isAdmin" :isResponse="true">
            <h1>Admin</h1>
            <TextInput label="Password:" placeholder="Type the password!" @valueChanged="onPasswordType" type="password"/>
        </TextMessage>
        <TextMessage v-if="!isAdmin" :isResponse="true">
            <div class="link-container">
                <NuxtLink @click="onPasswordSubmit">
                    Submit
                </NuxtLink>
            </div>
        </TextMessage>

    </TextMessageContainer>

</template>