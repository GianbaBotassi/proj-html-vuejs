<script>

export default {
    name: "MainCompany"
}

</script>

<template>
    <section>
        <div class="cont">
            <div id="company">
                <h5>ABOUT THE NETWORK</h5>
                <h2><span class=" bg-color-green">The</span> Company</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo cum, consectetur dicta earum ab dolorum.
                </p>
                <div id="company-counter">
                    <div>
                        <span>0</span>
                        <h3>Employees</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span>0</span>
                        <h3>Employees</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span>0</span>
                        <h3>Employees</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div>
                    <a class="btn bg-green-btn">GET IN TOUCH</a>
                    <a class="btn border-green-btn">READ MORE</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

section {
    background-image: url(../assets/img/about-5.jpg);
    background-size: 50%;
    background-position: right;
    background-repeat: no-repeat;

    #company {
        padding: 80px 0;
        width: 50%;

        #company-counter {
            @include flex-content(center);
            gap: 10px;
            margin: 25px 0 30px;

            >div {
                flex-basis: calc((100%/3) - 10px);

                span {
                    color: $fountain-blue;
                    font-size: 1.3rem;
                    font-weight: bold;
                    margin-left: 10px;
                    padding-bottom: 5px;
                    display: block;
                }

                h3 {
                    margin: 10px 0;
                }
            }
        }

        .btn:first-child {
            margin-right: 15px;
        }

        .btn:last-child {
            color: $fountain-blue
        }
    }
}
</style>
