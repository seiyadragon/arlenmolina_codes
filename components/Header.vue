

<template>

    <header class="header_0">
        <section class="profile">
            <img src="https://pbs.twimg.com/profile_images/1619633162962837504/ysIVwrUR_400x400.jpg" alt="Profile Picture">
            <div class="name">
                <h1>Arlen Molina</h1>
                <h2>Web Developer</h2>
            </div>
            <div class="links">
                <NuxtLink href="https://www.linkedin.com/in/arlen-molina-423159183/">
                    <Icon name="uil:linkedin" />
                </NuxtLink>
                <NuxtLink href="https://github.com/seiyadragon">
                    <Icon name="uil:github" />
                </NuxtLink>
                <NuxtLink href="https://twitter.com/arlenmolina101">
                    <Icon name="uil:twitter" />
                </NuxtLink>
            </div>
        </section>
    </header>

</template>

<style lang="scss" scoped>

    $background: rgba(214, 84, 9, 0.8);
    $border: darken($background, 10%);

    $text: rgb(54, 54, 54);

    .header_0 {
        background-color: $background;
        backdrop-filter: blur(3px);
        color: $text;
        margin-top: 0%;
        border-bottom: 8px solid $border;
        border-bottom-right-radius: 32px;
        border-bottom-left-radius: 32px;
        
        .profile {
            height: 64px;
            display: flex;

            img, .name {
                height: 48px;
                border-radius: 100%;
                padding: 8px;

                h1 {
                    font-size: 24px;
                    margin-bottom: 2px;
                }
            }

            .links {
                font-size: 32px;
                display: flex;
                justify-self: end;
                margin-left: auto;
                margin-right: 8px;
                align-self: center;

                a {
                    color: $text;
                    margin-left: 8px;
                    transition: transform 0.5s;
                    transform: scale(1, 1);

                    &:hover {
                        transition: transform 0.5s;
                        transform: scale(1.5, 1.5);
                    }
                }
            }
        }
    }

</style>