<script>
export default {
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
                <div></div>
            </div>

        </section>
    </header>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

header {



    #info-top-bar {
        background-color: $abbey;
        color: $white;
        font-size: 0.7rem;
        padding: 10px 0;

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
}
</style>
