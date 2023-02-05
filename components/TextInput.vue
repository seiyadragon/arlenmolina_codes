
<script lang="ts">

    export default {
        props: ['label', 'placeholder', 'required'],
        data() {
            return {
                value: ""
            }
        },
    }

    export type TextInputData = {
        label: string,
        value: string,
    }

</script>

<template>

    <div class="body">
        <label>{{ label }}</label>
        <input type="text" class="text-input" :placeholder="placeholder" v-model="value" @change="$emit('valueChanged', {label: label, value: value})">
        <span class="required" v-if="required">*</span>
    </div>

</template>

<style lang="scss" scoped>

    $text: rgb(54, 54, 54);

    .body {
        padding-top: 4px;
        padding-bottom: 4px;

        display: flex;
        flex-direction: column;

        .text-input {
          border-bottom: 2px solid $text;
          max-width: 100%;
        }

        .required {
            position: absolute;
            left: 12px;
            color: purple;
            font-size: 24px;
        }
    }

</style>