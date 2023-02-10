

<template>

    <div class="message-wrapper">
        <slot />
    </div>

</template>

<style lang="scss" scoped>

    $background: rgba(214, 84, 9, 0.8);
    $border: darken($background, 10%);

    .message-wrapper {
        &:deep(h1) {
            font-size: 24px;
            text-align: center;
        }
    
        &:deep(p), &:deep(form), &:deep(img), &:deep(a) {
            padding-left: 32px;
            padding-right: 32px;
            font-size: 18px;
        }
    
        &:deep(.link-container) {
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
    }

</style>