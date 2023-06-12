<script>
export default {
    name: "AppBusiness"
}

</script>

<template>
    <div id="business">
        <div class="cont">
            <div>
                <i class="fa-solid fa-users"></i>
                <h4>Human Capital</h4>
                <p>Humanazing business: Harness the power of technoloty to improve the way people work.</p>
            </div>
            <div>
                <i class="fa-solid fa-users"></i>
                <h4>Human Capital</h4>
                <p>Humanazing business: Harness the power of technoloty to improve the way people work.</p>
            </div>
            <div>
                <i class="fa-solid fa-users"></i>
                <h4>Human Capital</h4>
                <p>Humanazing business: Harness the power of technoloty to improve the way people work.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

#business {
    background-color: $gray-nurse;
    padding: 100px 0;

    .cont {
        @include flex-content(center);
        gap: 10px;

        div {
            flex-basis: calc((100%/3) - 10px);
            padding: 20px;
            background-color: $white;
            border-radius: 5px;
        }

        i {
            color: $atoll;
            background-color: $gray-nurse;
            padding: 10px;
            border-radius: 50%;
        }

        h4 {
            margin: 20px 0
        }

        p {
            font-size: 0.65rem;
        }

    }
}
</style>
