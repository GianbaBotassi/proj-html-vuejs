<script>
import MainBusiness from "./MainBusiness.vue";
import MainCompany from "./MainCompany.vue";
import MainActionProjects from "./MainActionProjects.vue";
import MainProcess from "./MainProcess.vue";
import MainFeedback from "./MainFeedback.vue";

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
            businessCards: [
                {
                    title: 'Human Capital',
                    description: 'Humanizing business: Harness the power of technology to improve the way people work.',
                    icon: 'fa-solid fa-users bg-color-green'
                },
                {
                    title: 'Core Business',
                    description: 'It takes innovative approaches to transform,modernize, and run existing platforms.',
                    icon: 'fa-solid fa-globe bg-color-green'
                },
                {
                    title: 'Performance',
                    description: 'Achieving maximum impact and value from investments in finance and supply chain.',
                    icon: 'fa-solid fa-gauge-high bg-color-green'
                },
            ],
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
