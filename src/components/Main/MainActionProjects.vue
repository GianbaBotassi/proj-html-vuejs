<script>

export default {
    name: "MainActionProjects",
    props: {
        actionNav: Array,
        actionCards: Array
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}

</script>

<template>
    <section>
        <div class="cont">
            <div id="action-projects">
                <h5>WE DO MORE FOR EVERYONE</h5>
                <h2>ACTIONS & <span class="select-bg">Projects</span></h2>
                <ul>
                    <a v-for="(item, index) in actionNav" :key="index" :href="item.url">
                        <li :class="item.current ? 'select-bg' : ''">{{ item.text }}</li>
                    </a>
                </ul>
                <div class="card-list">
                    <div class="card" v-for="(card, index) in actionCards" :key="index">
                        <img :src="getImagePath(`../../assets/img/${card.img}`)" :alt="card.alt">
                        <h4>{{ card.text }}</h4>
                        <div class="opacity"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

section {
    background-color: $woodsmoke;
    color: $white;
    text-align: center;
    padding: 80px 0;

    ul {
        @include flex-content(center);
        gap: 20px;
    }

    .card-list {
        @include flex-content(center);
        flex-wrap: wrap;
        gap: 10px;
        padding-top: 30px;

        .card {
            flex-basis: calc((100%/3) - 10px);
            position: relative;

            h4 {
                position: absolute;
                bottom: 10%;
                left: 50%;
                width: 80%;
                transform: translate(-50%, -50%);
                z-index: 3;
            }

        }
    }
}
</style>
