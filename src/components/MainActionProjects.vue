<script>

export default {
    name: "MainActionProjects"
}

</script>

<template>
    <section>
        <div class="cont">
            <div id="action-projects">
                <h5>WE DO MORE FOR EVERYONE</h5>
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
