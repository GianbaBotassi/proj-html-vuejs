<script>
export default {

    name: "MainProcess"
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
                <div>
                    <h3>Collection of information</h3>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <span class="bg-color-green">01</span>
                </div>
                <div>
                    <h3>Strategic planning</h3>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <span class="bg-color-green">02</span>

                </div>
                <div>
                    <h3>Assignment of responsibilities</h3>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <span class="bg-color-green">03</span>

                </div>
                <div>
                    <h3>Formatting process</h3>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <span class="bg-color-green">04</span>
                </div>
                <div>
                    <h3>Continuity formalization</h3>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <span class="bg-color-green">05</span>
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
                    top: -12%;
                    transform: translate(-50%);
                }
            }


        }
    }
}
</style>
