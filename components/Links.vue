

<template>

    <div class="links">
        <NuxtLink href="https://www.linkedin.com/in/arlen-molina-423159183/" class="social-link">
            <Icon name="uil:linkedin" />
        </NuxtLink>
        <NuxtLink href="https://github.com/seiyadragon" class="social-link">
            <Icon name="uil:github" />
        </NuxtLink>
        <NuxtLink href="https://twitter.com/arlenmolina101" class="social-link">
            <Icon name="uil:twitter" />
        </NuxtLink>
    </div>

</template>

<style lang="scss" scoped>

    $text: rgb(54, 54, 54);

    .links {
        display: flex;
        justify-self: end;
        margin-left: auto;
        margin-right: 4px;
        padding: 0;

        .social-link {
            font-size: 42px;
            color: $text;
            margin-left: 0px;
            margin-right: 0px;
            transition: transform 1s;
            padding-left: 0px;
            padding-right: 0px;
            padding-top: 4px;
            padding-bottom: 4px;

            &:hover {
                transition: transform 1s;
                transform: scale(1.25, 1.25);

                padding-top: 4px;
                padding-bottom: 4px;
            }
        }
    }

</style>