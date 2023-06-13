<script>
import FooterFormInfo from './FooterFormInfo.vue';


export default {
    name: "PageFooter",
    components: {
        FooterFormInfo
    },
    data() {
        return {
            contacts: [
                {
                    icon: 'fa-solid fa-phone',
                    text: '+1 (305) 1234-5678'
                },
                {
                    icon: 'fa-solid fa-envelope',
                    text: 'hello@example.com'
                },
                {
                    icon: 'fa-solid fa-location-dot',
                    text: 'Main Avenue, 987'
                }
            ]
        }
    }
}

</script>

<template>
    <footer>
        <FooterFormInfo :info="contacts" />
        <section id="copyright">
            <div class="cont">
                <div>We are tracking any intention of piracy.</div>
                <div>&#169; NEXGEN is Proudly Powered by <span>Gianbab</span></div>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;

footer {
    background-color: $woodsmoke;

    #copyright {
        background-color: black;
        color: $white;
        padding: 10px 0;

        .cont {
            display: flex;
            justify-content: space-between;

            span {
                color: $fountain-blue;
            }
        }

    }
}
</style>
