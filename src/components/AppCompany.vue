<script>

export default {
    name: "AppCompany"
}

</script>

<template>
    <section>
        <div class="cont">
            <div id="company">
                <h4>ABOUT THE NETWORK</h4>
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
    height: 500px;
    background-size: 50%;
    background-position: right;
    background-repeat: no-repeat;
    font-size: 0.7rem;

    #company {
        padding: 80px 0;
        width: 50%;

        h4 {
            margin-bottom: 20px;
            color: $fountain-blue;
            font-weight: bold;
        }

        h2 {
            font-size: 1.5rem;
        }

        p {
            margin: 15px 0;
        }

        #company-counter {
            @include flex-content(center);
            gap: 10px;
            margin-bottom: 30px;

            >div {
                flex-basis: calc((100%/3) - 10px);

                span {
                    color: $fountain-blue;
                    font-size: 1rem;
                    font-weight: bold;
                    margin-left: 10px;
                    padding-bottom: 5px;
                    display: block;
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
