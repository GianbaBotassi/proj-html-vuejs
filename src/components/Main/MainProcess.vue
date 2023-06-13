<script>
export default {

    name: "MainProcess",
    props: {
        processDetails: Array
    }
}

</script>

<template>
    <section>
        <div class="infos">
            <h5>HOW IT WORKS IN PRACTICE</h5>
            <h2><span class="bg-color-green">Process</span> Management</h2>
            <p>We work with innovative methodologies to ensure that the entire reformatting process is done from start to
                finish as planned
            </p>
        </div>
        <div id="timeline-cont">
            <div id="status-cont">
                <div v-for="(item, index) in processDetails" :key="index">
                    <h3>{{ item.text }}</h3>
                    <p>{{ item.description }}</p>
                    <span class="bg-color-green">{{ item.number }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;

section {
    padding: 80px 0;

    .infos {
        margin: 0 auto;
        text-align: center;
        width: 65%;

    }

    #timeline-cont {
        border-top: 2px solid $fountain-blue;
        text-align: center;
        margin-top: 50px;

        #status-cont {
            width: 70%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            gap: 20px;

            div {
                position: relative;


                h3 {
                    margin-top: 30px;
                }

                p {
                    margin-top: 15px;
                }

                span {
                    border-radius: 50%;
                    padding: 5px;
                    font-weight: bold;
                    position: absolute;
                    left: 50%;
                    top: -10%;
                    transform: translate(-50%);
                }
            }


        }
    }
}
</style>
