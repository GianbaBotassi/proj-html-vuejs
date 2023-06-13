<script>

// Import dati json
import business from "../data/business.json";

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
            businessCards: business,
            actionsMenu: [
                {
                    text: 'ALL',
                    url: '#',
                    current: true
                },
                {
                    text: 'INSTITUTIONAL',
                    url: '#',
                    current: false
                },
                {
                    text: 'SOCIAL',
                    url: '#',
                    current: false
                },
                {
                    text: 'EVENTS',
                    url: '#',
                    current: false
                },
                {
                    text: 'INNOVATION',
                    url: '#',
                    current: false
                },
                {
                    text: 'ENVIRONMENT',
                    url: '#',
                    current: false
                },
                {
                    text: 'TECHNOLOGY',
                    url: '#',
                    current: false
                }
            ]
        }
    }
}

</script>

<template>
    <main>
        <MainBusiness :busCards="businessCards" />
        <MainCompany />
        <MainActionProjects />
        <MainProcess />
        <MainFeedback />
    </main>
</template>

<style lang="scss" scoped></style>
