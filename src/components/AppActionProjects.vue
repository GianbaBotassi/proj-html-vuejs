<script>

export default {
    name: "AppActionProjects"
}

</script>

<template>
    <section>
        <div class="cont">
            <div id="action-projects">
                <h6>WE DO MORE FOR EVERYONE</h6>
                <h2>ACTIONS & <span class="select-bg">Projects</span></h2>
                <ul>
                    <li class="select-bg">ALL</li>
                    <li>INSTITUTIONAL</li>
                    <li>SOCIAL</li>
                    <li>EVENTS</li>
                    <li>INNOVATION</li>
                    <li>ENVIRONMENT</li>
                    <li>TECHNOLOGY</li>
                </ul>
                <div class="card-list">
                    <div class="card">
                        <img src="../assets/img/project-1.jpg" alt="">
                        <h4>Academic professional program in social media</h4>
                        <div class="opacity"></div>
                    </div>
                    <div class="card">
                        <img src="../assets/img/project-1.jpg" alt="">
                        <h4>Academic professional program in social media</h4>
                        <div class="opacity"></div>
                    </div>
                    <div class="card">
                        <img src="../assets/img/project-1.jpg" alt="">
                        <h4>Academic professional program in social media</h4>
                        <div class="opacity"></div>
                    </div>
                    <div class="card">
                        <img src="../assets/img/project-1.jpg" alt="">
                        <h4>Academic professional program in social media</h4>
                        <div class="opacity"></div>
                    </div>
                    <div class="card">
                        <img src="../assets/img/project-1.jpg" alt="">
                        <h4>Academic professional program in social media</h4>
                        <div class="opacity"></div>
                    </div>
                    <div class="card">
                        <img src="../assets/img/project-1.jpg" alt="">
                        <h4>Academic professional program in social media</h4>
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

    h6 {
        color: $fountain-blue;
    }

    h2 {
        margin: 20px 0
    }

    ul {
        @include flex-content(center);
        gap: 20px;
        font-size: 0.6rem;
    }

    .select-bg {
        background-color: $ebony-clay;
        padding: 5px;
    }

    .card-list {
        @include flex-content(center);
        flex-wrap: wrap;
        gap: 10px;
        padding-top: 30px;

        .card {
            flex-basis: calc((100%/3) - 10px);
            position: relative;


            img {
                max-width: 100%;
            }

            h4 {
                position: absolute;
                bottom: 10%;
                left: 50%;
                width: 80%;
                transform: translate(-50%, -50%);
                z-index: 3;
            }

            .opacity {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                background-color: rgba($color: #000000, $alpha: 0.3);
                z-index: 1;
            }
        }
    }
}
</style>
