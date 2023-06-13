<script>

// Import dati json
import businessData from "../data/business.json";
import companyData from "../data/company.json";
import actionNav from "../data/actionNav.json";
import actionCards from "../data/actionCards.json";
import processData from "../data/process.json";
import feedbackData from "../data/feedback.json";

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
            actionNav: actionNav,
            actionCardsInfo: actionCards,
            processInfo: processData,
            feedback: feedbackData
        }
    }
}

</script>

<template>
    <main>
        <MainBusiness :busCards="businessInfo" />
        <MainCompany :companyCards="companyInfo" />
        <MainActionProjects :actionNav="actionNav" :actionCards="actionCardsInfo" />
        <MainProcess :processDetails="processInfo" />
        <MainFeedback :feedbackCompanies="feedback" />
    </main>
</template>

<style lang="scss" scoped></style>
