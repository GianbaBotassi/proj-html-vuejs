<script>
// Import data json
import { store } from "../store.js";

// Import components
import FooterFormInfo from './Footer/FooterFormInfo.vue';


export default {
    name: "PageFooter",
    components: {
        FooterFormInfo
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <footer>
        <FooterFormInfo :info="store" />
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
