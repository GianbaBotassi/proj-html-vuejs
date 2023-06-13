<script>
import MainBusiness from "./MainBusiness.vue";
import MainCompany from "./MainCompany.vue";
import MainActionProjects from "./MainActionProjects.vue";
import MainManagement from "./MainManagement.vue";
import MainFeedback from "./MainFeedback.vue";

export default {
    components: {
        MainBusiness,
        MainCompany,
        MainActionProjects,
        MainManagement,
        MainFeedback
    },
    name: "PageMain"
}

</script>

<template>
    <main>
        <MainBusiness />
        <MainCompany />
        <MainActionProjects />
        <MainManagement />
        <MainFeedback />
    </main>
</template>

<style lang="scss" scoped></style>
