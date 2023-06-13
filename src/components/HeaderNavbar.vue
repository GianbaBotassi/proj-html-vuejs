<script>

export default {
    name: "HeaderNavbar",
    props: {
        navitems: Array
    }
}

</script>

<template>
    <div class="cont" id="nav-bar">
        <div id="logo">
            <span><span class="bg-logo">NEX</span> GEN</span>
        </div>
        <nav>
            <a v-for="item in navitems" :href="item.url">{{ item.text }}</a>
            <a href="#">
                <i class="fa-regular fa-user"></i>
            </a>
            <a href="#" class="btn bg-green-btn">GET IN TOUCH</a>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

#nav-bar {
    @include flex-content(between);
    padding-top: 10px;
    font-weight: bold;

    #logo {
        min-width: 100px;

        span {
            padding: 5px 0 5px 10px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            letter-spacing: 2px;
        }

        .bg-logo {
            background-color: $silver-sand;
            color: $ebony-clay
        }
    }

    nav {
        @include flex-content(center);
        gap: 10px;

        a {
            padding: 5px 10px;
        }

    }
}
</style>
