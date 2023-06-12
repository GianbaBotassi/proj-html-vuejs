<script>
import AppBusiness from "./AppBusiness.vue";
import AppCompany from "./AppCompany.vue";
import AppActionProjects from "./AppActionProjects.vue";
import AppProcessManagement from "./AppProcessManagement.vue";

export default {
    components: {
        AppBusiness,
        AppCompany,
        AppActionProjects,
        AppProcessManagement
    },
    name: "PageMain"
}

</script>

<template>
    <main>
        <AppBusiness />
        <AppCompany />
        <AppActionProjects />
        <AppProcessManagement />
    </main>
</template>

<style lang="scss" scoped>
main {
    font-size: 0.8rem;

}
</style>
