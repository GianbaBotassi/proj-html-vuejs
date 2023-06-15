<script>
export default {

    name: "MainFeedback",
    props: {
        details: Object
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
            <div class="infos">
                <h5>CUSTOMER TESTIMONIALS</h5>
                <h2>Trusted <span class="bg-color-green">Feedback</span></h2>
                <p>We work intensively in search of ideals that can add up in the lives of our customers. This is what moves
                    us and we are grateful for the recognition.
                </p>
            </div>
            <div class="card-list">
                <div class="card" v-for="(feed, index) in details.mainFeedback.slice(0, 3)" :key="index">
                    <img :src="getImagePath(`../../assets/img/${feed.img}`)" :alt="feed.company">
                    <p>{{ feed.description }}</p>
                    <i class="fa-solid fa-quote-right"></i>
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
    padding: 80px 0;

    .infos {
        margin: 0 auto;
        text-align: center;
        width: 65%;
    }

    .card-list {
        @include flex-content(center);
        gap: 10px;
        margin-top: 20px;


        .card {
            flex-basis: calc((100%/3) - 10px);
            padding: 20px 20px 40px;
            background-color: $white;
            border-radius: 5px;
            position: relative;

            img {
                width: 80px;
                margin-bottom: 15px;
            }

            p {
                width: 90%;
            }

            i {
                position: absolute;
                right: 10px;
                bottom: 10px;
                font-size: 1.5rem;
                color: $shuttle-gray;
            }
        }


    }
}
</style>