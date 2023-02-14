
<script lang="ts">

    export default {
        props: ['label', 'placeholder', 'required', 'type', 'isDark'],
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

    <div class="body" :class="isDark ? 'dark' : 'light'">
        <label>{{ label }}</label>
        <input :type="type !== undefined ? type : 'text'" class="text-input" :placeholder="placeholder" v-model="value" @change="$emit('valueChanged', {label: label, value: value})">
        <span class="required" v-if="required">*</span>
    </div>

</template>

<style lang="scss" scoped>

    $text: rgb(54, 54, 54);
    $text-dark: lighten(invert($text), 50%); 

    .body {
        padding-top: 4px;
        padding-bottom: 4px;

        display: flex;
        flex-direction: column;

        .text-input {
          max-width: 100%;
        }

        .required {
            position: absolute;
            left: 12px;
            color: purple;
            font-size: 24px;
        }
    }

    .dark {
        .text-input {
            color: $text-dark;
            border-bottom: 2px solid $text-dark;

            &::placeholder {
                color: $text-dark;
            }
        }
    }

    .light {
        .text-input {
            color: $text;
            border-bottom: 2px solid $text;

            &::placeholder {
                color: $text;
            }
        }
    }

</style>