<script>
export default {
    name: "MainBusiness"
}

</script>

<template>
    <section>
        <div class="cont">
            <div class="cards">
                <div>
                    <i class="fa-solid fa-users bg-color-green"></i>
                    <h4>Human Capital</h4>
                    <p>Humanazing business: Harness the power of technoloty to improve the way people work.</p>
                </div>
                <div>
                    <i class="fa-solid fa-users bg-color-green"></i>
                    <h4>Human Capital</h4>
                    <p>Humanazing business: Harness the power of technoloty to improve the way people work.</p>
                </div>
                <div>
                    <i class="fa-solid fa-users bg-color-green"></i>
                    <h4>Human Capital</h4>
                    <p>Humanazing business: Harness the power of technoloty to improve the way people work.</p>
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
        gap: 10px;

        div {
            flex-basis: calc((100%/3) - 10px);
            padding: 20px;
            background-color: $white;
            border-radius: 5px;
        }

        i {
            border-radius: 50%;
            padding: 10px;
        }

        h4 {
            margin: 20px 0
        }
    }
}
</style>
