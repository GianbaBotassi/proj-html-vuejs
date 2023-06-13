<script>
import FooterFormInfo from './FooterFormInfo.vue';


export default {
    name: "PageFooter",
    components: {
        FooterFormInfo
    }
}

</script>

<template>
    <footer>
        <FooterFormInfo />
    </footer>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;

footer {
    background-color: $woodsmoke;
    height: 500px;
}
</style>
