<script>
// Import store
import { store } from "../store.js";

// Import componenti
import HeaderHero from "./Header/HeaderHero.vue";
import HeaderTopBar from "./Header/HeaderTopBar.vue";
import HeaderNavbar from "./Header/HeaderNavbar.vue";

export default {
    components: {
        HeaderTopBar,
        HeaderNavbar,
        HeaderHero,
    },
    name: "PageHeader",
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <header>
        <HeaderTopBar :info="store" />
        <section id="nav-hero-cont">
            <HeaderNavbar :details="store" />
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
