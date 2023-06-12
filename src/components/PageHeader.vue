<script>
import AppHero from "./AppHero.vue";
import AppInfoTopBar from "./AppInfoTopBar.vue";
import AppNavbar from "./AppNavbar.vue";

export default {
    components: {
        AppInfoTopBar,
        AppNavbar,
        AppHero,
    },
    name: "PageHeader"
}

</script>

<template>
    <header>
        <AppInfoTopBar />
        <section id="nav-hero-cont">
            <AppNavbar />
            <AppHero />
        </section>
    </header>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

header {
    color: $white;

    #nav-hero-cont {
        background-image: url(../assets/img/bg-4.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        font-size: 0.7rem;
        padding-bottom: 100px;

    }
}
</style>
