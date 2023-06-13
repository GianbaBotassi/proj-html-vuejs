<script>

// Import dati json
import businessData from "../data/business.json";
import companyData from "../data/company.json";
import actionNav from "../data/actionNav.json";
import actionCards from "../data/actionCards.json";

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
            businessInfo: businessData,
            companyInfo: companyData,
            actionNavInfo: actionNav,
            actionCardsInfo: actionCards
        }
    }
}

</script>

<template>
    <main>
        <MainBusiness :busCards="businessInfo" />
        <MainCompany :companyCards="companyInfo" />
        <MainActionProjects :actionNav="actionNavInfo" :actionCards="actionCardsInfo" />
        <MainProcess />
        <MainFeedback />
    </main>
</template>

<style lang="scss" scoped></style>
