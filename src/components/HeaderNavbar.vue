<script>

export default {
    name: "HeaderNavbar"
}

</script>

<template>
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
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

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
</style>
