<script>
export default {
    name: "HeaderHero"
}

</script>

<template>
    <div class="cont">
        <div id="hero">
            <h5>HUMAN RESOURCES</h5>
            <h1>Get More Productivity</h1>
            <p>Planning, recruitment and selection process and performance evaluation of employees</p>
            <div>
                <a class="btn bg-green-btn">GET IN TOUCH</a>
                <a class="btn border-green-btn">READ MORE</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;

#hero {
    width: 50%;
    margin-top: 100px;

    h1 {
        font-size: 3rem;
    }

    p {
        margin-bottom: 30px;
    }

    a:first-child {
        margin-right: 15px;
    }
}
</style>
