<script>
export default {
    name: "PageHeader"
}

</script>

<template>
    <header>
        <section id="info-top-bar">
            <div class="cont">
                <font-awesome-icon :icon="['fas', 'star']" />
            </div>

        </section>
        <i class="fa-solid fa-star"></i>
    </header>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;

header {



    #info-top-bar {
        // background-color: $abbey;
        // color: $white;
        // font-size: 0.8rem;
        // height: 50px;
    }
}
</style>
