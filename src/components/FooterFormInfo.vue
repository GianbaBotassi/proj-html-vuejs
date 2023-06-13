<script>
export default {
    name: "FooterFormInfo"
}

</script>

<template>
    <section class="cont">
        <div id="form-info-cont">
            <div id="form">
                <h5>SEND A MESSAGE</h5>
                <h2>Get in <span class="select-bg">Touch</span></h2>
                <p>We will respond to your message as soon as possible.
                </p>
            </div>
            <div id="info">adafddfs</div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

#form-info-cont {
    @include flex-content(both);
    gap: 30px;
    color: white;
    padding: 80px 0;

    #form {
        width: 70%;
    }

    #info {
        width: 30%;
    }
}
</style>
