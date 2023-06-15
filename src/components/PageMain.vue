<script>

// Import store
import { store } from "../store.js";

// Import componenti
import MainBusiness from "./Main/MainBusiness.vue";
import MainCompany from "./Main/MainCompany.vue";
import MainActionProjects from "./Main/MainActionProjects.vue";
import MainProcess from "./Main/MainProcess.vue";
import MainFeedback from "./Main/MainFeedback.vue";

export default {
    components: {
        MainBusiness,
        MainCompany,
        MainActionProjects,
        MainProcess,
        MainFeedback
    },
    name: "PageMain",
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <main>
        <MainBusiness :busCards="store" />
        <MainCompany :companyCards="store" />
        <MainActionProjects :details="store" :cards="store" />
        <MainProcess :details="store" />
        <MainFeedback :details="store" />
    </main>
</template>

<style lang="scss" scoped></style>
