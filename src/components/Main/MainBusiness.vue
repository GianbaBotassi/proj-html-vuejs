<script>
export default {
    name: "MainBusiness",
    props: {
        busCards: Object
    }
}

</script>

<template>
    <section>
        <div class="cont">
            <div class="cards">
                <div v-for="(card, index) in busCards.mainBusiness" class="card" :key="index">
                    <i :class="card.icon"></i>
                    <h3>{{ card.title }}</h3>
                    <p>{{ card.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

section {
    background-color: $gray-nurse;
    padding: 100px 0;

    .cards {
        @include flex-content(center);
        gap: 20px;

        .card {
            flex-basis: calc((100%/3) - 20px);
            padding: 20px;
            background-color: $white;
            border-radius: 5px;
            height: 200px;

            i {
                border-radius: 50%;
                padding: 10px;
                font-size: 1.2rem;
            }

            h3 {
                margin: 20px 0
            }
        }
    }
}
</style>
