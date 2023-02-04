

<template>

    <header class="header_0">
        <section class="profile">
            <img src="https://pbs.twimg.com/profile_images/1619633162962837504/ysIVwrUR_400x400.jpg" alt="Profile Picture">
            <div class="name">
                <h1>Arlen Molina</h1>
                <h2>Web Developer</h2>
            </div>
            <Links />
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
        position: sticky;
        top: 0;
        z-index: 99;
        
        .profile {
            height: 64px;
            display: flex;
            padding-left: 4px;
            padding-right: 4px;

            img {
                border-radius: 100%;
                width: 48px;
                padding: 8px;
                padding-left: 4px;
                padding-right: 4px;
            }
            
            .name {
                height: 48px;
                padding: 0px;

                padding-top: 8px;
                padding-bottom: 8px;

                overflow-y: hidden;

                h1 {
                    font-size: 24px;
                    margin-bottom: 2px;
                }
            }
        }
    }

</style>