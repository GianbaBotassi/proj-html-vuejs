<script>
import HeaderHero from "./HeaderHero.vue";
import HeaderTopBar from "./HeaderTopBar.vue";
import HeaderNavbar from "./HeaderNavbar.vue";

export default {
    components: {
        HeaderTopBar,
        HeaderNavbar,
        HeaderHero,
    },
    name: "PageHeader"
}

</script>

<template>
    <header>
        <HeaderTopBar />
        <section id="nav-hero-cont">
            <div class="opacity"></div>
            <HeaderNavbar />
            <HeaderHero />
        </section>
    </header>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;

header {
    color: $white;

    #nav-hero-cont {
        background-image: url(../assets/img/bg-4.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        padding-bottom: 100px;
        position: relative;
    }
}
</style>
