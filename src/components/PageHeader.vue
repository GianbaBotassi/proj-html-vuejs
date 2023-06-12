<script>
import AppHero from "./AppHero.vue";

export default {
    components: {
        AppHero
    },
    name: "PageHeader"
}

</script>

<template>
    <header>
        <section id="info-top-bar">
            <div class="cont">
                <div>
                    <span>
                        <i class="fa-solid fa-clock"></i>
                        <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
                    </span>
                </div>
                <div>
                    <span>
                        <i class="fa-solid fa-phone"></i>
                        <span>+1 *305( 1234/5678)</span>
                    </span>
                    <span>
                        <i class="fa-solid fa-envelope"></i>
                        <span>hello@example.com</span>
                    </span>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </section>
        <section id="nav-hero-cont">
            <div class="cont" id="nav-bar">
                <div id="logo">
                    <span>DA FARE</span>
                </div>
                <nav>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">PROJECTS</a>
                    <a href="#">PROCESS</a>
                    <a href="#">TESTIMONIALS</a>
                    <a href="#">
                        <i class="fa-regular fa-user"></i>
                    </a>
                    <a href="#" class="btn bg-green-btn">GET IN TOUCH</a>
                </nav>
            </div>
            <AppHero />
        </section>
    </header>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

header {
    color: $white;

    #info-top-bar {
        background-color: $abbey;
        font-size: 0.6rem;
        padding: 10px 0;
        font-weight: bold;

        >div {
            @include flex-content(between);

            i {
                margin-right: 5px
            }

            >div {
                @include flex-content(center);
                gap: 20px;
            }
        }
    }

    #nav-hero-cont {
        background-image: url(../assets/img/bg-4.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        font-size: 0.7rem;
        padding-bottom: 100px;

        #nav-bar {
            @include flex-content(between);
            padding-top: 10px;
            font-weight: bold;

            nav {
                @include flex-content(center);
                gap: 10px;

                a {
                    padding: 5px 10px;
                }

            }
        }

    }
}
</style>
